# L4 — Verification model and evidence gates

**Canonical level:** L4 — Verification and evidence  
**Record class:** Verification contract  
**Status:** Controls specified; executable verification not yet available

## 1. Purpose

L4 defines how the project proves that accepted requirements and contracts are satisfied. It distinguishes automated checks, manual design review, accessibility assessment, and release authorization.

A verification control must name what property it proves and what it cannot prove. Passing a build does not prove visual fidelity; passing an accessibility scanner does not prove WCAG conformance; a screenshot does not prove interaction behavior.

## 2. Verification control format

Every control must specify:
- Stable ID and name.
- Requirement/contract IDs covered.
- Property under test and explicit limitations.
- Method: automated, manual, or hybrid.
- Preconditions and environment.
- Command or reproducible procedure.
- Expected result and failure condition.
- Evidence location and revision identity.
- Owner/reviewer and date where manual approval is needed.

## 3. Verification inventory

| ID | Control | Type | Covers | Status |
|---|---|---|---|---|
| `PP-VER-001` | Clean dependency install | Automated | PP-REQ-002, PP-CON-001 | Planned; toolchain not selected |
| `PP-VER-002` | TypeScript strict type check | Automated | PP-REQ-002, PP-CON-001, PP-CON-003 | Planned |
| `PP-VER-003` | Lint/format/static quality checks | Automated | PP-REQ-003, technical standards | Planned |
| `PP-VER-004` | Production build and runtime smoke test | Automated/manual | PP-REQ-002, PP-CON-001 | Planned |
| `PP-VER-005` | Source-to-page content reconciliation | Manual | PP-REQ-001, PP-REQ-006, PP-CON-002 | Blocked on source |
| `PP-VER-006` | Visual fidelity comparison | Manual/hybrid | PP-REQ-001, PP-REQ-004, PP-CON-004, PP-CON-005 | Blocked on source and implementation |
| `PP-VER-007` | Responsive viewport matrix | Manual/hybrid | PP-REQ-004, PP-CON-008 | Planned |
| `PP-VER-008` | Keyboard/focus/semantics check | Manual/hybrid | PP-REQ-005, PP-CON-006, PP-CON-008 | Planned |
| `PP-VER-009` | Navigation and interaction behavior | Automated/manual | PP-CON-006 | Pending interaction inventory |
| `PP-VER-010` | Asset loading and alternative text review | Automated/manual | PP-CON-005 | Pending asset inventory |
| `PP-VER-011` | Release artifact and revision provenance | Automated/manual | PP-REQ-008, PP-CON-009 | Planned |
| `PP-VER-012` | Owner review and release disposition | Manual approval | PP-REQ-008, PP-CON-009 | Required for each release |
| `PP-VER-013` | ICM reference and traceability integrity | Manual initially; automation when justified | All accepted requirements and ICM registers | Defined; not yet run on final ICM revision |

## 4. Automated controls

### 4.1 Dependency reproducibility

Use the selected package manager and frozen/locked install mode. A clean install must not silently rewrite the lockfile. Verify on a clean checkout or isolated CI environment.

### 4.2 Type checking

Enable strict TypeScript and run the compiler in no-emit/check mode appropriate to the selected build. A successful transpile alone is not a type-check result.

### 4.3 Lint and static checks

Run the selected lint checks against the source. Do not suppress rules globally to make the baseline pass. Every exception must be narrow, documented, and reviewed.

### 4.4 Production build

Build from the committed lockfile and intended environment. Verify output exists and that the application can be served using the chosen delivery model. Record the revision.

### 4.5 Tests

Test meaningful behavior and component contracts rather than asserting implementation details. Add browser automation for critical flows where it creates real value. Do not introduce tests for hypothetical interactions that have not been approved.

Exact commands remain undefined until Phase 1 selects the toolchain.

## 5. Visual verification protocol

For each in-scope page:
1. Capture the source reference at a known dimension/scale.
2. Capture the implementation at the same CSS viewport dimensions.
3. Record browser, zoom, font loading state, and commit SHA.
4. Compare global composition first, then sections and details.
5. Check typography, line wrapping, alignment, whitespace, color, assets, crop, borders, and elevation.
6. Record each material difference with severity and disposition.
7. Re-run the comparison after material changes.

A visual-diff tool may support review, but a pixel score is not the sole acceptance criterion. Font rasterization and browser rendering can create noise; semantic and perceptual review remains necessary.

## 6. Responsive verification protocol

Define the viewport matrix after Phase 0 and refine it after Phase 2. Include:
- Narrow phone/content width.
- Typical phone width.
- Intermediate/tablet width if supported by the design.
- Wide desktop reference width.
- Any additional width where layout constraints change.

For each viewport, record:
- Width and height in CSS pixels.
- Browser and zoom.
- Page/route tested.
- Overflow/clipping/overlap result.
- Navigation and interaction behavior.
- Screenshot or evidence reference.

Do not declare responsive support based only on device emulation presets. Test the actual widths needed by the content.

## 7. Accessibility verification protocol

Assess applicable WCAG 2.2 Level AA criteria using both automated and manual methods.

At minimum review:
- Semantic landmarks and heading order.
- Accessible names and text alternatives.
- Keyboard operability and focus visibility/order.
- Contrast of text and meaningful controls.
- Reflow/zoom and content preservation.
- Forms and error associations if forms exist.
- Reduced-motion preferences where motion is present.
- Focus not obscured by overlays or sticky elements.

Automated checks are useful but insufficient to establish conformance. Any conformance statement must identify the scope assessed and evidence supporting it.

## 8. Evidence freshness and revision binding

A verification result is valid only for:
- The exact tested commit or immutable artifact.
- The environment and configuration used.
- The pages, features, and controls included.
- The time it was executed, subject to known external changes.

A code change affecting a tested property makes the prior evidence stale for that property. Rerun the relevant controls where impact analysis is sound; otherwise repeat the broader suite.

## 9. Phase gates

| Gate | Required evidence | Blocks progression when |
|---|---|---|
| G0 — Specification ready | Source inspection, inventories, decisions, approved scope | Source or material requirements are unknown |
| G1 — Foundation ready | Clean install, strict types, static checks, build, smoke test | Toolchain is not reproducible or checks fail |
| G2 — Composition ready | Content/asset reconciliation, visual comparison, functional controls | Core sections or approved behavior are missing |
| G3 — Responsive/accessibility ready | Viewport matrix, keyboard/manual checks, accessibility findings | Critical usability/accessibility issue remains unresolved |
| G4 — Release ready | Current build/test evidence, final visual/functional review, known limitations, owner disposition | Evidence is stale, a release blocker remains, or owner authorization is absent |

Passing a phase gate requires evidence and approval, not merely completion of a task list.

## 10. ICM integrity control — PP-VER-013

The purpose of this control is to detect an internally inconsistent ICM before it becomes an implementation authority.

### Manual procedure

1. Confirm every canonical ICM document listed in the ICM charter exists.
2. Resolve every internal Markdown link from its referring file.
3. Confirm all accepted `PP-REQ` identifiers are unique and occur in both the contract inventory and master traceability register.
4. Confirm every accepted requirement maps to at least one `PP-VER` control.
5. Confirm every referenced contract, process, effect, artifact, reference, and verification identifier has a canonical definition.
6. Confirm IDs are stable and not reused for different meanings.
7. Confirm each effect is linked to a process or explicitly marked as a resource effect.
8. Confirm every verification record states its scope and limitation.
9. Confirm specified, implemented, and verified states have not been conflated.
10. Review the current project status for unsupported completion claims.

### Failure conditions

- Broken internal links or missing canonical records.
- Duplicate IDs or ambiguous ownership.
- Accepted requirement without verification mapping.
- Orphaned effect or verification claim.
- Missing revision attribution for implementation evidence.
- A target-state statement represented as current implementation.
- A release/merge status that lacks owner authorization.

### Automation policy

A repository script may automate link resolution, ID uniqueness, registry coverage, and presence checks. The first implementation should use the repository's already-selected scripting/runtime ecosystem. Do not introduce a new language or dependency solely for this check before Phase 1 establishes the toolchain.

The script must fail non-zero for mandatory integrity failures and report diagnostics with file and record ID. Until such automation exists, describe the procedure as manual and do not claim a CI gate exists.

## 11. Failure and waiver policy

- A failed mandatory check blocks the affected gate.
- A flaky test is not a pass; investigate and record the failure.
- A control may be waived only by the project owner with scope, rationale, risk, and expiry/revisit condition documented.
- A waiver cannot silently waive a legal or external standard obligation.
- A waiver does not convert a failure into a pass; report the control as waived.
- A release blocker must be fixed or explicitly accepted through the approved risk process before release.

## 12. Verification report template

For each significant change, record:

```text
Change / PR:
Commit SHA:
Requirements / contracts:
Controls executed:
Environment:
Automated results:
Manual review:
Visual evidence:
Accessibility evidence:
Failures / limitations:
Waivers / owner decisions:
Disposition:
Reviewer and date:
```

## 13. L4 completion condition

L4 is complete for a release only when all mandatory controls applicable to the approved scope have current evidence, failures and limitations have explicit disposition, and the project owner has authorized the release action.
