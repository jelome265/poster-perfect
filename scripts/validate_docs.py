#!/usr/bin/env python3
"""PP-VER-013 structural validator. Standard library only."""
from __future__ import annotations
import html
import re
import sys
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
MD = sorted(p for p in ROOT.rglob("*.md") if ".git" not in p.parts and "node_modules" not in p.parts)
ID_PATTERN = r"(?:PP-(?:REQ|MAP|CON|PRC|EFF|ART|REF|VER|RSK|IA|CMP)-\d{3}|DEC-\d{3})"
ID_RE = re.compile(r"\b" + ID_PATTERN + r"\b")
ROW_RE = re.compile(r"^\s*\|\s*[\x60]?(" + ID_PATTERN + r")[\x60]?\s*\|")
HEADING_RE = re.compile(r"^#{2,6}\s+.*?\b(" + ID_PATTERN + r")\b")
LINK_RE = re.compile(r"!?\[[^\]]*\]\(([^)\n]+)\)")
OWNERS = {
    "PP-REQ": ["docs/icm/02-contracts.md"],
    "PP-MAP": ["docs/icm/00-system-context.md", "docs/icm/01-architecture-map.md"],
    "PP-CON": ["docs/icm/02-contracts.md"],
    "PP-PRC": ["docs/icm/03-processes.md"],
    "PP-EFF": ["docs/icm/04-effects.md"],
    "PP-ART": ["docs/icm/05-artifacts.md"],
    "PP-REF": ["docs/icm/06-references.md"],
    "PP-VER": ["docs/icm/07-verification.md"],
    "PP-RSK": ["docs/icm/08-traceability-register.md"],
    "PP-IA": ["docs/information-architecture.md"],
    "PP-CMP": ["docs/components.md"],
    "DEC": ["docs/decision-log.md"],
}
STALE = {
    "CLAUDE.md": ["Phase 0 is currently blocked", "not yet inspectable"],
    "README.md": ["design reference has not yet been inspected"],
    "docs/phases/phase-0-source-discovery.md": ["Current blocker:", "did not expose the artwork"],
    "docs/implementation-plan.md": ["Phase 0 is blocked because"],
    "docs/icm/00-system-context.md": ["not yet inspectable", "Current L0 state: **blocked**"],
    "docs/icm/03-processes.md": ["Blocked until source is available", "page structure unknown"],
    "docs/decision-log.md": ["Content remains blocked until the Canva source is inspected"],
    "docs/information-architecture.md": ["The sections below are templates. They contain no sitemap"],
    "docs/component-blueprint.md": ["No component entry exists yet"],
    "docs/icm/05-artifacts.md": ["Blocked — Phase 0 source inspection required"],
    "docs/icm/06-references.md": ["Blocked on source inspection"],
}

def main() -> int:
    errors = []
    docs = {p.relative_to(ROOT).as_posix(): p.read_text(encoding="utf-8") for p in MD}
    if not docs:
        print("PP-VER-013 FAIL: no Markdown documents")
        return 1

    links = 0
    for name, text in docs.items():
        source = ROOT / name
        for match in LINK_RE.finditer(text):
            target = match.group(1).strip().split()[0].strip("<>")
            parsed = urlsplit(target)
            if parsed.scheme or parsed.netloc:
                continue
            links += 1
            if not parsed.path:
                continue
            destination = (source.parent / unquote(parsed.path)).resolve()
            try:
                destination.relative_to(ROOT)
            except ValueError:
                errors.append(f"{name}: link escapes repository: {target}")
                continue
            if destination.is_dir():
                destination = destination / "README.md"
            if not destination.is_file():
                errors.append(f"{name}: missing link target: {target}")
                continue
            if parsed.fragment and destination.suffix.lower() == ".md":
                fragment = unquote(parsed.fragment).lower()
                heading_text = destination.read_text(encoding="utf-8")
                heading_ids = set()
                duplicate_counts = {}
                for heading in re.finditer(r"^#{1,6}\s+(.+?)\s*#*\s*$", heading_text, re.M):
                    label = html.unescape(re.sub(r"<[^>]+>", "", heading.group(1)))
                    label = re.sub(r"\[([^\]]+)\]\([^)]*\)", r"\1", label)
                    label = re.sub(r"[\x60*_~]", "", label).lower()
                    label = re.sub(r"[^\w\- ]", "", label, flags=re.UNICODE)
                    base = re.sub(r"\s+", "-", label.strip())
                    count = duplicate_counts.get(base, 0)
                    duplicate_counts[base] = count + 1
                    heading_ids.add(base if count == 0 else f"{base}-{count}")
                if fragment not in heading_ids:
                    errors.append(f"{name}: missing anchor #{fragment} in {destination.relative_to(ROOT)}")

    definitions = {}
    heading_only = {"PP-CON", "PP-PRC", "DEC"}
    for prefix, owners in OWNERS.items():
        for owner in owners:
            if owner not in docs:
                errors.append(f"missing canonical owner file: {owner}")
                continue
            for number, line in enumerate(docs[owner].splitlines(), 1):
                if prefix in heading_only:
                    heading = HEADING_RE.match(line)
                    found = heading.group(1) if heading else None
                else:
                    row = ROW_RE.match(line)
                    found = row.group(1) if row else None
                if found and found.startswith(prefix + "-"):
                    definitions.setdefault(found, []).append(f"{owner}:{number}")
    references = set()
    for text in docs.values():
        references.update(ID_RE.findall(text))
    for identifier in sorted(references):
        locations = definitions.get(identifier, [])
        if not locations:
            errors.append(f"undefined identifier: {identifier}")
        elif len(locations) > 1:
            errors.append(f"duplicate canonical definition: {identifier}: {locations}")

    contract = docs.get("docs/icm/02-contracts.md", "")
    matrix = docs.get("docs/icm/08-traceability-register.md", "")
    accepted = set()
    for line in contract.splitlines():
        cells = [item.strip() for item in line.strip().strip("|").split("|")]
        if cells:
            key = cells[0].strip(chr(96) + " ")
            if re.fullmatch(r"PP-REQ-\d{3}", key) and len(cells) > 3 and "accepted" in cells[3].lower():
                accepted.add(key)
    for key in sorted(accepted):
        rows = []
        for line in matrix.splitlines():
            cells = [cell.strip() for cell in line.strip().strip("|").split("|")]
            if not cells:
                continue
            first_cell = re.match(r"^[\x60]?(PP-REQ-\d{3})[\x60]?(?:\s|$)", cells[0])
            if first_cell and first_cell.group(1) == key:
                rows.append(line)
        if len(rows) != 1 or not re.search(r"PP-VER-\d{3}", rows[0]):
            errors.append(f"{key}: missing or invalid verification traceability row")
    if not accepted:
        errors.append("no accepted requirements found")

    processes = docs.get("docs/icm/03-processes.md", "")
    heads = list(re.finditer(r"^##\s+\d+\.\s+(PP-PRC-\d{3})", processes, re.M))
    for i, match in enumerate(heads):
        end = heads[i + 1].start() if i + 1 < len(heads) else len(processes)
        section = processes[match.start():end]
        for label in ("Contracts?", "Effects", "Verification"):
            if not re.search(r"\*\*" + label + r":\*\*", section, re.I):
                errors.append(f"{match.group(1)}: missing {label} mapping")
    effect_doc = docs.get("docs/icm/04-effects.md", "")
    effects = set(re.findall(r"^\s*\|\s*[\x60](PP-EFF-\d{3})[\x60]\s*\|", effect_doc, re.M))
    for effect in sorted(effects):
        if effect not in processes:
            errors.append(f"{effect}: no process mapping")

    content = docs.get("docs/content-structure.md", "")
    if re.search(r"\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b", content, re.I):
        errors.append("content-structure.md contains an unconfirmed email address")
    if re.search(r"\+?265[\s().-]*\d{3}[\s.-]*\d{3}[\s.-]*\d{3}\b", content) or "+265" in content:
        errors.append("content-structure.md contains an unconfirmed phone number")
    if "Blantyre, Moneymen" in content:
        errors.append("content-structure.md contains unconfirmed location text")

    for name, phrases in STALE.items():
        for phrase in phrases:
            if phrase.casefold() in docs.get(name, "").casefold():
                errors.append(f"{name}: stale current-state phrase: {phrase}")
    charter = docs.get("docs/icm/README.md", "")
    for status in ("Proposed", "Accepted", "Partially specified", "Blocked", "Excluded", "Retired"):
        if status not in charter:
            errors.append(f"ICM charter missing lifecycle status: {status}")

    if errors:
        print(f"PP-VER-013 FAIL: {len(errors)} finding(s)")
        for error in errors:
            print(f"- {error}")
        return 1
    print("PP-VER-013 PASS")
    print(f"Markdown files: {len(MD)}; relative links: {links}")
    print(f"Canonical identifiers: {len(definitions)}; accepted requirements: {len(accepted)}")
    print(f"Process definitions: {len(heads)}; effect mappings: {len(effects)}")
    print("Stale status claims and unconfirmed public contact values: 0")
    print("Documentation integrity only; not application, visual, accessibility, or security verification.")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
