#!/usr/bin/env python3
"""Mechanical documentation integrity checks; Python standard library only."""

from __future__ import annotations

import argparse
import html
import re
import sys
from pathlib import Path
from urllib.parse import unquote, urlsplit

BT = chr(96)
ID_RE = re.compile(r"\b(?P<prefix>PP-(?:REQ|MAP|CON|PRC|EFF|ART|REF|VER|RSK|IA|CMP)|DEC)-\d{3}\b")
LINK_RE = re.compile(r"(?<!!)\[[^\]]+\]\((<[^>]+>|[^)\s]+)(?:\s+[^)]*)?\)")
EMAIL_RE = re.compile(r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b")
MW_PHONE_RE = re.compile(r"(?<!\d)\+?265[\s().-]*\d(?:[\s().-]*\d){8,}(?!\d)")

CANONICAL_FILES = {
    "PP-REQ": ("docs/icm/02-contracts.md",),
    "PP-MAP": ("docs/icm/00-system-context.md", "docs/icm/01-architecture-map.md"),
    "PP-CON": ("docs/icm/02-contracts.md",),
    "PP-PRC": ("docs/icm/03-processes.md",),
    "PP-EFF": ("docs/icm/04-effects.md",),
    "PP-ART": ("docs/icm/05-artifacts.md",),
    "PP-REF": ("docs/icm/06-references.md",),
    "PP-VER": ("docs/icm/07-verification.md",),
    "PP-RSK": ("docs/icm/08-traceability-register.md",),
    "PP-IA": ("docs/information-architecture.md",),
    "PP-CMP": ("docs/components.md",),
    "DEC": ("docs/decision-log.md",),
}

# These strings describe the superseded pre-export state. The historical audit
# is excluded because it must retain the exact defects it recorded.
STALE_STATUS_PHRASES = (
    "Canva artwork is not yet inspectable",
    "design reference has not yet been inspected",
    "supplied Canva links did not expose the design",
    "blocked until source is available",
    "content remains blocked until the Canva source is inspected",
    "the set of routes is unknown until Phase 0",
    "page count, route names, section order, and exact content are unknown until Phase 0",
    "no component entry exists yet",
    "the sections below are templates",
    "they contain no sitemap, because none has been established",
    "exact page count and IA nodes remain blocked until the required source inspection",
)


def split_table_row(line: str) -> list[str]:
    """Split a Markdown table row, ignoring escaped pipes and pipes in code spans."""
    text = line.strip()
    if text.startswith("|"):
        text = text[1:]
    if text.endswith("|") and not text.endswith(r"\|"):
        text = text[:-1]

    cells: list[str] = []
    current: list[str] = []
    in_code = False
    i = 0
    while i < len(text):
        ch = text[i]
        if ch == BT:
            current.append(ch)
            in_code = not in_code
        elif ch == "|" and not in_code and (i == 0 or text[i - 1] != "\\"):
            cells.append("".join(current).strip())
            current = []
        else:
            current.append(ch)
        i += 1
    cells.append("".join(current).strip())
    return cells


def is_table_separator(line: str) -> bool:
    if "|" not in line:
        return False
    cells = split_table_row(line)
    return bool(cells) and all(
        re.fullmatch(r":?-{3,}:?", cell.replace(" ", "")) for cell in cells
    )


def slugify_heading(value: str) -> str:
    value = html.unescape(value)
    value = re.sub(r"<[^>]+>", "", value)
    value = re.sub(r"\[([^\]]+)\]\([^)]*\)", r"\1", value)
    value = re.sub(r"\s+\{#[^}]+\}\s*$", "", value)
    value = value.replace(BT, "").replace("*", "").replace("~", "")
    chars: list[str] = []
    pending_dash = False
    for ch in value.lower().strip():
        if ch.isspace():
            pending_dash = bool(chars)
        elif ch.isalnum() or ch in "-_":
            if pending_dash and chars and chars[-1] != "-":
                chars.append("-")
            chars.append(ch)
            pending_dash = False
    return re.sub(r"-{2,}", "-", "".join(chars)).strip("-")


def heading_anchors(content: str) -> set[str]:
    anchors: set[str] = set()
    counts: dict[str, int] = {}
    for line in content.splitlines():
        match = re.match(r"^\s{0,3}#{1,6}\s+(.+?)\s*#*\s*$", line)
        if not match:
            continue
        heading = match.group(1)
        custom = re.search(r"\{#([^}]+)\}\s*$", heading)
        base = custom.group(1) if custom else slugify_heading(heading)
        count = counts.get(base, 0)
        slug = base if count == 0 else f"{base}-{count}"
        counts[base] = count + 1
        anchors.add(slug)
    return anchors


def check_links(root: Path, markdown_files: list[Path], errors: list[str]) -> int:
    checked = 0
    for source in markdown_files:
        content = source.read_text(encoding="utf-8")
        for match in LINK_RE.finditer(content):
            raw = match.group(1).strip()
            if raw.startswith("<") and raw.endswith(">"):
                raw = raw[1:-1]
            parsed = urlsplit(raw)
            if parsed.scheme or parsed.netloc:
                continue

            target_text = unquote(parsed.path)
            target = source if not target_text else source.parent / target_text
            try:
                resolved = target.resolve(strict=False)
                resolved.relative_to(root)
            except ValueError:
                errors.append(f"{source.relative_to(root)}: link escapes repository: {raw}")
                continue

            if resolved.is_dir():
                resolved = resolved / "README.md"
            if not resolved.exists():
                errors.append(f"{source.relative_to(root)}: missing link target: {raw}")
                continue
            checked += 1

            if parsed.fragment and resolved.suffix.lower() == ".md":
                anchors = heading_anchors(resolved.read_text(encoding="utf-8"))
                fragment = unquote(parsed.fragment)
                if fragment not in anchors:
                    errors.append(
                        f"{source.relative_to(root)}: missing anchor #{fragment} in "
                        f"{resolved.relative_to(root)}"
                    )
    return checked


def check_tables(root: Path, markdown_files: list[Path], errors: list[str]) -> int:
    checked = 0
    for path in markdown_files:
        lines = path.read_text(encoding="utf-8").splitlines()
        for index in range(1, len(lines)):
            if not is_table_separator(lines[index]):
                continue
            if "|" not in lines[index - 1]:
                errors.append(f"{path.relative_to(root)}:{index + 1}: table separator has no header")
                continue
            expected = len(split_table_row(lines[index - 1]))
            if len(split_table_row(lines[index])) != expected:
                errors.append(f"{path.relative_to(root)}:{index + 1}: malformed table separator")
                continue
            checked += 1
            row = index + 1
            while row < len(lines) and "|" in lines[row]:
                actual = len(split_table_row(lines[row]))
                if actual != expected:
                    errors.append(
                        f"{path.relative_to(root)}:{row + 1}: expected {expected} table cells, "
                        f"found {actual}"
                    )
                row += 1
    return checked


def check_identifiers(all_text: str, contents: dict[str, str], errors: list[str]) -> int:
    identifiers = {match.group(0) for match in ID_RE.finditer(all_text)}
    for identifier in sorted(identifiers):
        prefix = identifier.rsplit("-", 1)[0]
        owner_paths = CANONICAL_FILES.get(prefix, ())
        if not any(identifier in contents.get(owner, "") for owner in owner_paths):
            errors.append(
                f"{identifier}: no occurrence in canonical owner file(s): {', '.join(owner_paths)}"
            )
    return len(identifiers)


def check_requirement_traceability(contents: dict[str, str], errors: list[str]) -> int:
    contracts = contents.get("docs/icm/02-contracts.md", "")
    register = contents.get("docs/icm/08-traceability-register.md", "")
    verification = contents.get("docs/icm/07-verification.md", "")
    accepted: set[str] = set()
    req_pattern = re.compile(r"^\|\s*" + re.escape(BT) + r"(PP-REQ-\d{3})" + re.escape(BT) + r"\s*\|(.+)$")
    for line in contracts.splitlines():
        match = req_pattern.match(line)
        if match and re.search(r"\bAccepted\b", match.group(2)):
            accepted.add(match.group(1))

    matrix_rows = {
        match.group(1)
        for line in register.splitlines()
        if (match := re.match(r"^\|\s*" + re.escape(BT) + r"(PP-REQ-\d{3})" + re.escape(BT) + r"\s*\|", line))
    }
    for requirement in sorted(accepted - matrix_rows):
        errors.append(f"{requirement}: accepted requirement missing from traceability matrix")

    for requirement in sorted(accepted):
        row_prefix = "|" + " " + BT + requirement + BT
        row = next((line for line in register.splitlines() if line.startswith(row_prefix)), "")
        if row and "PP-VER-" not in row:
            errors.append(f"{requirement}: traceability matrix row has no verification control")

    verification_ids = {
        match.group(0)
        for match in ID_RE.finditer(verification)
        if match.group("prefix") == "PP-VER"
    }
    if not verification_ids:
        errors.append("verification inventory contains no PP-VER controls")
    return len(accepted)


def check_status_and_contact_hygiene(contents: dict[str, str], errors: list[str]) -> None:
    for relative, content in contents.items():
        if relative == "docs/icm/integrity-audit-2026-10-30.md":
            continue
        lower = content.lower()
        for phrase in STALE_STATUS_PHRASES:
            if phrase.lower() in lower:
                errors.append(f"{relative}: stale source-status statement: {phrase}")

    content_inventory = contents.get("docs/content-structure.md", "")
    if EMAIL_RE.search(content_inventory):
        errors.append("docs/content-structure.md: unconfirmed email address is present in public content")
    if MW_PHONE_RE.search(content_inventory):
        errors.append("docs/content-structure.md: unconfirmed Malawi telephone number is present in public content")
    if re.search(r"\b(?:mailto:|tel:)\S+", content_inventory, re.IGNORECASE):
        errors.append("docs/content-structure.md: contact URI remains before owner confirmation")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", type=Path, default=Path(__file__).resolve().parents[1])
    args = parser.parse_args()
    root = args.root.resolve()
    if not root.is_dir():
        print(f"ERROR: repository root does not exist: {root}", file=sys.stderr)
        return 2

    markdown_files = sorted(path for path in root.rglob("*.md") if ".git" not in path.parts)
    contents = {
        path.relative_to(root).as_posix(): path.read_text(encoding="utf-8")
        for path in markdown_files
    }
    all_text = "\n".join(contents.values())
    errors: list[str] = []

    links_checked = check_links(root, markdown_files, errors)
    tables_checked = check_tables(root, markdown_files, errors)
    identifiers_checked = check_identifiers(all_text, contents, errors)
    accepted_requirements = check_requirement_traceability(contents, errors)
    check_status_and_contact_hygiene(contents, errors)

    print(
        "Documentation integrity: "
        f"{len(markdown_files)} Markdown files, {links_checked} internal links, "
        f"{tables_checked} table blocks, {identifiers_checked} identifiers, "
        f"{accepted_requirements} accepted requirements."
    )
    if errors:
        for error in errors:
            print(f"ERROR: {error}", file=sys.stderr)
        print(f"FAILED: {len(errors)} documentation integrity finding(s).", file=sys.stderr)
        return 1

    print("PASS: documentation integrity checks completed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
