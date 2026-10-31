#!/usr/bin/env bash
# Dependency-free documentation integrity checks for Poster Perfect.
set -euo pipefail

ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"
FAILURES=0
FILES=0
LINKS=0
ANCHORS=0

fail() {
  printf 'FAIL: %s\n' "$1" >&2
  FAILURES=$((FAILURES + 1))
}

require_file() {
  if [[ ! -f "$1" ]]; then fail "missing canonical document: $1"; fi
}

slug() {
  printf '%s' "$1" | tr '[:upper:]' '[:lower:]' | sed -E 's/`//g; s/[*_~]//g; s/[^a-z0-9 -]//g; s/[[:space:]]+/-/g; s/-+/-/g; s/^-|-$//g'
}

anchor_exists() {
  local file="$1" expected="$2" heading actual found=0
  while IFS= read -r heading; do
    heading="$(printf '%s' "$heading" | sed -E 's/^#{1,6}[[:space:]]+//')"
    actual="$(slug "$heading")"
    if [[ "$actual" == "$expected" ]]; then found=1; break; fi
  done < <(grep -E '^#{1,6}[[:space:]]+' "$file" || true)
  [[ "$found" -eq 1 ]]
}

check_links() {
  local source="$1" match target path_part fragment target_file base expected
  while IFS= read -r match; do
    target="$(printf '%s' "$match" | sed -E 's/^.*\]\(([^)]*)\).*$/\1/' | sed -E 's/[[:space:]].*$//; s/^<//; s/>$//')"
    [[ -z "$target" ]] && continue
    case "$target" in
      http://*|https://*|mailto:*|tel:*|data:*|//*) continue ;;
    esac
    path_part="$(printf '%s' "$target" | sed 's/#.*//')"
    fragment="$(printf '%s' "$target" | sed -n 's/^[^#]*#//p')"
    if [[ -z "$path_part" ]]; then
      target_file="$source"
    elif [[ "$path_part" == /* ]]; then
      target_file="$(realpath -m ".$path_part")"
    else
      base="$(dirname "$source")"
      target_file="$(realpath -m "$base/$path_part")"
    fi
    if [[ -d "$target_file" ]]; then target_file="$target_file/README.md"; fi
    LINKS=$((LINKS + 1))
    if [[ ! -f "$target_file" ]]; then
      fail "$source: broken Markdown target '$target'"
      continue
    fi
    if [[ -n "$fragment" ]]; then
      ANCHORS=$((ANCHORS + 1))
      expected="$(slug "$fragment")"
      if ! anchor_exists "$target_file" "$expected"; then fail "$source: unresolved Markdown anchor '$target'"; fi
    fi
  done < <(grep -oE '!?\[[^]]+\]\([^)]*\)' "$source" || true)
}

for file in CLAUDE.md README.md docs/project-brief.md docs/design-reference.md docs/design-system.md docs/decision-log.md docs/information-architecture.md docs/content-structure.md docs/components.md docs/component-blueprint.md docs/implementation-plan.md docs/icm/00-system-context.md docs/icm/02-contracts.md docs/icm/03-processes.md docs/icm/04-effects.md docs/icm/05-artifacts.md docs/icm/06-references.md docs/icm/07-verification.md docs/icm/08-traceability-register.md docs/icm/09-phase-routing.md docs/icm/integrity-audit-2026-10-30.md docs/phases/README.md docs/phases/phase-0-source-discovery.md; do
  require_file "$file"
done

while IFS= read -r -d '' file; do
  FILES=$((FILES + 1))
  check_links "$file"
done < <(find . -type f -name '*.md' -not -path './.git/*' -print0)

check_stale() {
  local file="$1" phrase
  shift
  [[ -f "$file" ]] || return 0
  for phrase in "$@"; do
    if grep -Fqi -- "$phrase" "$file"; then fail "$file: stale Phase 0 statement '$phrase'"; fi
  done
}
check_stale CLAUDE.md 'Phase 0 is currently blocked' 'Canva artwork is not yet inspectable'
check_stale README.md 'design reference has not yet been inspected'
check_stale docs/phases/phase-0-source-discovery.md 'Current blocker: the supplied Canva links did not expose the artwork'
check_stale docs/implementation-plan.md 'Phase 0 is blocked because the supplied Canva links did not expose'
check_stale docs/icm/00-system-context.md 'Supplied; not yet inspectable' 'source-design facts blocked pending inspection'
check_stale docs/icm/03-processes.md 'Blocked until source is available'
check_stale docs/icm/05-artifacts.md 'Blocked — Phase 0 source inspection required'
check_stale docs/icm/06-references.md 'Blocked on source inspection'
check_stale docs/icm/08-traceability-register.md 'Canva artwork cannot currently be inspected from the supplied URL'
check_stale docs/decision-log.md 'Content remains blocked until the Canva source is inspected'
check_stale docs/information-architecture.md 'The sections below are templates. They contain no sitemap'
check_stale docs/component-blueprint.md 'No component entry exists yet'

for file in CLAUDE.md README.md docs/implementation-plan.md docs/phases/phase-0-source-discovery.md; do
  if ! grep -Fqi 'G0' "$file" || ! grep -Eqi 'owner approval' "$file"; then fail "$file: missing owner-approval/G0 phase disposition"; fi
done

contracts='docs/icm/02-contracts.md'
register='docs/icm/08-traceability-register.md'
verification='docs/icm/07-verification.md'
accepted_count=0
while IFS= read -r requirement; do
  [[ -z "$requirement" ]] && continue
  accepted_count=$((accepted_count + 1))
  row="$(grep -F "$requirement" "$register" | head -n 1 || true)"
  if [[ -z "$row" ]]; then fail "traceability register: missing accepted requirement $requirement"; continue; fi
  verification_cell="$(printf '%s\n' "$row" | awk -F'|' '{print $9}')"
  controls="$(printf '%s\n' "$verification_cell" | grep -oE 'PP-VER-[0-9]{3}' | sort -u || true)"
  if [[ -z "$controls" ]]; then fail "traceability register: $requirement has no verification mapping"; continue; fi
  while IFS= read -r control; do
    [[ -z "$control" ]] && continue
    if ! grep -Fq "| \`$control\` |" "$verification"; then fail "traceability register: $requirement references undefined control $control"; fi
  done <<< "$controls"
done < <(awk -F'|' '$2 ~ /PP-REQ-[0-9][0-9][0-9]/ && tolower($5) ~ /accepted/ {gsub(/[^A-Z0-9-]/, "", $2); print $2}' "$contracts")
if [[ "$accepted_count" -eq 0 ]]; then fail 'contracts: no accepted requirements found'; fi

if [[ "$FAILURES" -gt 0 ]]; then
  printf 'Documentation integrity: FAIL (%d finding(s), %d Markdown files, %d links, %d anchors)\n' "$FAILURES" "$FILES" "$LINKS" "$ANCHORS"
  exit 1
fi
printf 'Documentation integrity: PASS (%d Markdown files, %d internal links, %d anchors, %d accepted requirements traced)\n' "$FILES" "$LINKS" "$ANCHORS" "$accepted_count"
