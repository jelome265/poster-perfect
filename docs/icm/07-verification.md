# L4 — Verification model and evidence gates

**Canonical level:** L4 — Verification and evidence  
**Record class:** Verification contract  
**Status:** Phase 1 G1 controls complete and owner disposition recorded under DEC-016; application/design-specific controls remain pending their owning phases

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

| ID | Control | Type | Covers | Known limitation | Status |
|---|---|---|---|---|---|
| `PP-VER-001` | Clean dependency install | Automated | PP-REQ-002, PP-CON-001 | Does not establish dependency safety or application runtime correctness | Passed on exact PR #15 merge SHA `9e81adb7a178db9c48106292b3351d0bafe0a9e8`; `npm ci` succeeded in Actions run `41172107909` |
| `PP-VER-002` | TypeScript strict type check | Automated | PP-REQ-002, PP-CON-001, PP-CON-003 | Does not prove runtime behavior, semantic correctness, or visual fidelity | Passed on exact PR #15 merge SHA `9e81adb7a178db9c48106292b3351d0bafe0a9e8`; `npm run typecheck` succeeded in Actions run `41172107909` |
| `PP-VER-003` | Lint/format/static quality checks | Automated | PP-REQ-003, technical standards | Only detects configured static rules; does not prove functional correctness or complete security | Passed on exact PR #15 merge SHA `9e81adb7a178db9c48106292b3351d0bafe0a9e8`; `npm run lint` succeeded with `--deny-warnings` in Actions run `41172107909` |
| `PP-VER-004` | Production build and runtime smoke test | Automated/manual | PP-REQ-002, PP-CON-001 | HTTP preview/asset smoke does not execute client JavaScript or prove browser rendering; jsdom smoke does not replace browser testing | Passed on exact PR #15 merge SHA `9e81adb7a178db9c48106292b3351d0bafe0a9e8` (run `41172107909`): production build and 1/1 Vitest shell test; preview HTML, root mount, JS reference and same-origin JS/CSS asset fetch. Historical Chromium dev-server smoke at `ef613375`; not production browser E2E |
| `PP-VER-005` | Source-to-page content reconciliation | Manual | PP-REQ-001, PP-REQ-006, PP-CON-002 | Verifies inventoried source content; does not prove pixel-level visual fidelity | Not yet run; copy transcribed from export text; reconciliation pending |
| `PP-VER-006` | Visual fidelity comparison | Manual/hybrid | PP-REQ-001, PP-REQ-004, PP-CON-004, PP-CON-005 | Limited to captured references, selected viewports, browser and rendering conditions | Blocked on implementation; export available as the reference |
| `PP-VER-007` | Responsive viewport matrix | Manual/hybrid | PP-REQ-004, PP-CON-008 | Evidence covers tested widths/browsers, not every possible device or viewport | Planned |
| `PP-VER-008` | Accessibility manual assessment (keyboard, focus, semantics, contrast, assistive technology) | Manual/hybrid | PP-REQ-005, PP-CON-006, PP-CON-008 | Scope is limited to assessed pages, states, criteria and assistive-technology combinations; not a blanket conformance claim | Planned |
| `PP-VER-009` | Navigation and interaction behavior | Automated/manual | PP-CON-006 | Covers inventoried controls and destinations; does not guarantee permanent availability of external destinations | Pending interaction inventory |
| `PP-VER-010` | Asset loading and alternative text review | Automated/manual | PP-CON-005 | Does not independently establish copyright/licensing or full design fidelity | Pending asset inventory |
| `PP-VER-011` | Release artifact and revision provenance | Automated/manual | PP-REQ-008, PP-CON-009 | Establishes traceability, not the artifact's complete security or runtime correctness | Planned |
| `PP-VER-012` | Owner review and release disposition | Manual approval | PP-REQ-008, PP-CON-009 | Records authorization; it does not replace technical verification | Required for each release |
| `PP-VER-013` | ICM reference and traceability integrity | Automated structural checks plus manual review of authority, ownership, and status semantics | All accepted requirements and ICM registers | Proves documentation/link/identifier/traceability integrity only; not application implementation, visual fidelity, or accessibility | Passed on PR #15 merge SHA `9e81adb7a178db9c48106292b3351d0bafe0a9e8` in Actions run `41172107907`. This documentation-only close-out change must pass PP-VER-013 on its own PR revision before merge |
| `PP-VER-014` | Architecture and component-boundary review | Manual/hybrid | PP-REQ-003, PP-CON-003 | Review covers only the neutral application foundation, not the future page/section composition | Passed by manual review of the neutral foundation; no changes to application source were made by PR #15. Findings and limits recorded in PP-ART-020. Re-run after Phase 2 introduces page/section modules |
| `PP-VER-015` | Dependency and side-effect surface review | Manual/hybrid | PP-REQ-007, PP-CON-007, PP-EFF-005–010 | Surface review does not replace software-composition analysis, license review, or vulnerability scanning | Passed by manual foundation review; locked dependency/effect inventory and limits recorded in PP-ART-020. Automated npm/OSV/SPDX/deps.dev audit recorded under PP-VER-018; rerun whenever the dependency graph or policy changes |
| `PP-VER-016` | Information architecture and component-blueprint reconciliation against inspected source | Manual | PP-REQ-001, PP-REQ-003, PP-REQ-006, PP-REQ-009, PP-CON-002, PP-CON-003, PP-CON-010 | Verifies source structure, all seven sections, component regions and placeholder traceability; does not prove implemented DOM, visual fidelity or accessibility | Structural source reconciliation executed 2026-10-30; seven-section source baseline and component regions approved under DEC-013/DEC-019 (2026-10-31) |
| `PP-VER-017` | Company positioning, source-derived content and customer-journey placeholder reconciliation | Manual | PP-REQ-010, PP-CON-011 | Confirms Canva-derived company facts/services, company-voice edits, seven source sections, and explicit placeholders for absent/permission-gated material; does not prove unresolved contact values, customer permissions or business claims | G0 source-led content/placeholder specification completed under DEC-019; verify implementation and publication permissions at G2/G4 |
| `PP-VER-018` | npm dependency vulnerability and SPDX license audit | Automated | PP-REQ-011, PP-CON-012, PP-EFF-011 | Scans the locked npm graph against known advisory and license metadata; cannot establish absence of unknown vulnerabilities, legal compatibility for every distribution, or rights to non-npm assets | Passed on exact PR #15 merge SHA `9e81adb7a178db9c48106292b3351d0bafe0a9e8` in Actions run `41172108087`: npm audit, OSV vulnerability scan, lockfile SPDX inventory, deps.dev license check, and artifact upload all succeeded; 140 entries, zero policy violations. MPL-2.0 is development-only |

## 4. Automated controls

### 4.0 Documentation integrity (PP-VER-013)

Run `python3 -B scripts/validate_docs.py` from the repository root. The standard-library-only validator checks repository-relative Markdown links and heading anchors, canonical identifier definitions/references, accepted-requirement traceability, process/effect mappings, stale current-state statements, and withholding of unconfirmed contact values from `content-structure.md`. The same command runs in `.github/workflows/docs-integrity.yml` on pull requests and pushes to `main`. The manual procedure in §10 remains required for authority and semantic judgments that a structural checker cannot prove.


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

Exact commands are recorded in `docs/development.md` and the `package.json` scripts. Their revision-specific results are tracked in PP-ART-020 and the CI run history.

### 4.6 Dependency vulnerability and license audit (PP-VER-018)

Run `npm run audit:licenses` from the repository root. This Node.js built-in-only script reads the committed lockfile, inventories every package entry (including transitive, optional, runtime, and development entries), validates exact SPDX identifiers against DEC-015, and writes JSON/Markdown artifacts under `artifacts/dependency-audit/`.

The dedicated workflow `.github/workflows/dependency-audit.yml` additionally:
- runs `npm audit --audit-level=low` against the complete locked graph;
- runs the pinned OSV-Scanner v2.7.0 reusable workflow against `package-lock.json`, failing on any known vulnerability;
- runs the OSV-Scanner/deps.dev license metadata check using the approved SPDX identifiers;
- uploads the complete lockfile inventory as a 30-day workflow artifact.

The workflow runs on pull requests to `main`, pushes to `main`, weekly, and on manual dispatch. Scanner failure, missing scan output, missing license metadata, an unapproved identifier, or MPL-2.0 outside development scope MUST fail the audit. CI MUST NOT apply automatic package upgrades or unreviewed ignore rules.

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
- Text and non-text contrast for applicable WCAG 2.2 AA criteria.
- Accessible target sizing/spacing and focus visibility/obstruction.
- Representative screen-reader output and reading order.
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
| G0 — Specification ready | Canva source inspected; company content, all seven sections, company-voice adaptations, design/asset inventories, interactions and explicit update placeholders approved | Source content/structure is not reconciled; material unknowns are hidden, guessed, or not represented by an explicit placeholder/publication control |
| G1 — Foundation ready | Clean install, strict types, static checks, build, smoke test | Toolchain is not reproducible or checks fail |
| G2 — Composition ready | All seven source sections implemented; source company content integrated; image/statistics/testimonial/contact/social placeholders correctly rendered; internal About CTA works; source/token reconciliation and visual comparison complete | Any source section/region is removed without approval; placeholder resembles real data/claims; unapproved asset/content is used; source visual comparison is absent |
| G3 — Responsive/accessibility ready | Viewport matrix, keyboard/manual checks, accessibility findings | Critical usability/accessibility issue remains unresolved |
| G4 — Release ready | Current build/test evidence, final visual/functional review, approved contact/social destinations, current availability/hours, and permission/substantiation for published artwork, testimonials and statistics; explicit owner disposition | Evidence is stale, placeholders remain in fields required for public use, rights/claims are unresolved for published material, or owner authorization is absent |

Passing a phase gate requires evidence and approval, not merely completion of a task list.

## 10. ICM integrity control — PP-VER-013

The purpose of this control is to detect an internally inconsistent ICM before it becomes an implementation authority. The 2026-10-30 audit result is recorded in [PP-ART-017](integrity-audit-2026-10-30.md). Its pass applies only to the documentation-integrity scope, not to application/runtime behavior.

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
11. Confirm every architecture map node that represents an implementation boundary has an accountable owner role and permitted dependency direction.
12. Confirm every defined process names its governing contract, effects, and verification controls.
13. Confirm dependency, persistence, network, and deployment effects are represented in the effect register and are either approved or explicitly excluded.

### Failure conditions

- Broken internal links or missing canonical records.
- Duplicate IDs or ambiguous ownership.
- Accepted requirement without verification mapping.
- Orphaned effect or verification claim.
- Missing revision attribution for implementation evidence.
- A target-state statement represented as current implementation.
- A release/merge status that lacks owner authorization.

### Automation policy

The application toolchain is selected under DEC-012. A narrow Python tooling exception is accepted under DEC-011: the PP-VER-013 documentation validator uses Python 3's standard library only on the GitHub Actions runner. It adds no third-party package, application dependency, package manifest, lockfile, browser runtime, or Python requirement for the website. This exception is limited to `scripts/validate_docs.py`; it does not authorize Python for application code or other repository scripts.

The validator must fail non-zero for mandatory structural failures and report diagnostics. Its successful workflow result proves only the automated subset described in §4.0. Manual review of authority, ownership, dependency direction, process semantics, status distinctions, and unsupported completion claims remains required. Automation of PP-VER-016 is still deferred until its source-reconciliation criteria can be justified against the selected Phase 1 toolchain.

## 11. Architecture and dependency controls

### PP-VER-014 — Architecture and component-boundary review

Review the implemented source tree and component graph against the approved L1 map and L2 contracts.

Check:
- Every implemented module/component has one coherent responsibility and an accountable owner role.
- Cross-component interfaces have explicit typed contracts.
- Shared components do not import or depend on page-specific implementations.
- There are no unjustified circular dependencies or unnecessary architectural layers.
- Browser APIs and interaction behavior are owned by the component/adapter that needs them.
- Physical folders and abstractions correspond to actual design responsibilities rather than unused planned boxes.

Use code review initially. Add a static architecture check only when the actual source tree and repeated failure mode justify it.

### PP-VER-015 — Dependency and side-effect surface review

Reconcile the dependency manifest, lockfile, build scripts, application source, and produced client artifact with the approved scope.

Check:
- Every direct dependency has a stated purpose and acceptable maintenance/license posture.
- Lockfile and package-manager configuration are consistent with the selected toolchain.
- No unapproved third-party scripts, remote fonts, CDN resources, analytics, tracking, remote APIs, persistence, or external mutations are introduced.
- Network destinations and data flows match accepted contracts.
- No secret or credential is exposed in client-side source, build output, URLs, or logs.
- Build-time registry access, generated output, and production deployment effects are distinguished from runtime behavior.
- Any scope expansion has an approved decision and corresponding contract/effect/verification records.

Use package/lockfile review and source inspection. Add automated dependency/bundle/network checks when the selected toolchain supports them. Manual review remains required for semantics.

### PP-VER-016 — Information architecture and component-blueprint reconciliation

Covers `PP-REQ-009` and the information-architecture and component-blueprint portions of `PP-REQ-001`, `PP-REQ-003`, and `PP-REQ-006`.

Checks:

- Every in-scope page or artboard in the source inventory appears exactly once in `information-architecture.md` §5.1, with a valid parent and order.
- Every IA section has a unique identifier, one parent, and an order, and maps to exactly one section entry in `content-structure.md`.
- Every navigation entry references exactly one interaction row, and that row's destination is an observed value.
- Every anchor target is unique and resolves to a recorded section.
- Every component entry is referenced by at least one IA section. Every IA section with a repeated or coherent region has a component entry or a recorded local-markup reason.
- Every component entry declares its `PP-EFF` effects, keyboard and focus expectations, and verification controls.
- Every `PP-IA`, `PP-CMP`, `PP-CON`, and `PP-VER` reference resolves to an existing record.
- No identifier is reused. No record marked Accepted contains a Pending field or an unresolved open question.

Method: manual reconciliation against the inspected export (`PP-REF-001`). Record the export identity, the IA and blueprint revision, and the date in the report template (§13). This remains a manual control because owner approval and visual-source judgments are not safely reducible to identifier checks.

Limitation: validates the records against the source only. It does not prove that the implementation matches them (`PP-VER-014`) or that the rendered page matches the design (`PP-VER-006`).

### PP-VER-017 — Company positioning and prospective-customer journey reconciliation

Covers PP-REQ-010 and PP-CON-011. Run during Phase 0 against the current project brief, owner-confirmed business details, content inventory, information architecture, interaction inventory, and any proposed web adaptations. Repeat the relevant checks before release where availability, portfolio permissions, or contact destinations may have changed.

Checks:

- The project brief and proposed page content represent Poster Perfect as a graphic design business/company, not as an individual designer's personal portfolio.
- The company description, positioning, target customer segments, capabilities and service statements are supported by owner-approved information.
- Each displayed portfolio item, client name or logo has a recorded source and owner-confirmed publication permission; confidential client information is excluded.
- Testimonials, awards, credentials, client counts, metrics, project outcomes, prices, guarantees and other trust claims are omitted unless their facts and publication approval are established.
- The availability statement is explicitly approved and reconfirmed before publication/release.
- The prospective-customer journey has a clear, owner-approved enquiry action and destination. Every visible CTA has a documented expected outcome in the interaction inventory; no decorative or inert control is represented as an enquiry action.
- Any business content or enquiry behavior absent from the Canva source is recorded as an owner-approved web adaptation, not mislabeled as source-observed content.
- Any deliberate omission (for example, no public client list or no remote form) is recorded as an owner-approved scope decision or accepted limitation.

Method: manual review of the canonical records and owner confirmation. Record the approved company-content revision, portfolio permission references, availability confirmation date, enquiry destination/behavior, reviewer, and date in the verification report (§13).

Limitation: this control verifies specification and content authorization. It does not establish that the site will generate leads, that a prospective customer will convert, or that any future external contact channel remains available. Functional behavior of links and controls is covered by PP-VER-009; WCAG assessment is covered by PP-VER-008. Analytics or CRM measurement is not implied.

## 12. Failure and waiver policy

- A failed mandatory check blocks the affected gate.
- A flaky test is not a pass; investigate and record the failure.
- A control may be waived only by the project owner with scope, rationale, risk, and expiry/revisit condition documented.
- A waiver cannot silently waive a legal or external standard obligation.
- A waiver does not convert a failure into a pass; report the control as waived.
- A release blocker must be fixed or explicitly accepted through the approved risk process before release.

## 13. Verification report template

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

## 14. L4 completion condition

L4 is complete for a release only when all mandatory controls applicable to the approved scope have current evidence, failures and limitations have explicit disposition, and the project owner has authorized the release action.

## 12. Final Phase 1/G1 disposition — 2026-10-31

The project owner accepted G1 completion under DEC-016. The authoritative merged baseline is PR #15 merge commit `9e81adb7a178db9c48106292b3351d0bafe0a9e8`.

| Evidence | Exact revision | Result |
|---|---|---|
| Application quality | [Actions run 41172107909](https://github.com/jelome265/poster-perfect/actions/runs/41172107909) on `9e81adb7a178db9c48106292b3351d0bafe0a9e8` | PASS — `npm ci`, lint, strict typecheck, unit test (1/1), production build, production-preview HTTP/asset smoke |
| Documentation integrity | [Actions run 41172107907](https://github.com/jelome265/poster-perfect/actions/runs/41172107907) on `9e81adb7a178db9c48106292b3351d0bafe0a9e8` | PASS — PP-VER-013 on the merged revision; later documentation changes require their own revision-bound run |
| Dependency security/license | [Actions run 41172108087](https://github.com/jelome265/poster-perfect/actions/runs/41172108087) on `9e81adb7a178db9c48106292b3351d0bafe0a9e8` | PASS — npm advisory, OSV vulnerability, SPDX license policy/inventory, and deps.dev metadata |

The PR #15 head `ecfc625bcc206771bfc1a6b05a20888a51d862ce` had six successful required contexts. Five Actions contexts are present as check runs on the merge commit; the separate GitHub Advanced Security `osv-scanner` context passed on the PR head. Ruleset `26256454` is active, strict, has six required contexts and no bypass actors.

The production-preview smoke verifies HTTP delivery of the preview document and referenced same-origin JavaScript/CSS assets. It does not execute the client bundle in a real browser. The current neutral-shell suite contains one heading assertion; behavior/component tests are required as features are introduced. No deliberately failing PR was used to demonstrate required-check merge blocking. The ruleset requires zero approving reviews. No production deployment was performed.

**G1 is complete under DEC-016. G0 is complete for the Canva-led seven-section specification under DEC-019; Phase 2 may begin after the DEC-019 documentation correction is merged.**
