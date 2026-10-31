# ICM phase routing and gate mapping

**Role:** Connect delivery phases to ICM control levels  
**Status:** Initial routing baseline

## 1. Purpose

Delivery phases define when work is performed. ICM levels define which control properties must be addressed. They are related but are not the same numbering system.

| Dimension | Meaning |
|---|---|
| Delivery phase 0–4 | Project execution sequence |
| ICM level L0–L4 | Engineering control depth |
| Verification gate G0–G4 | Evidence required before progressing |

A phase may touch multiple ICM levels, and an ICM level may be revisited across several phases.

## 2. Routing matrix

| Delivery phase | L0 Intent | L1 Structure | L2 Contracts/processes | L3 Effects | L4 Evidence | Gate |
|---|---|---|---|---|---|---|
| Phase 0 — Source discovery | Primary | Define company purpose and customer context; record page/route hierarchy (`PP-ART-018`) and component boundaries (`PP-ART-019`) | Specify company positioning, approved portfolio content, availability and enquiry path (`PP-CON-011`); accept `PP-CON-010` and component contracts | Identify possible effects; exclude unapproved remote submission and integrations | Source reconciliation, PP-PRC-007, PP-VER-016, PP-VER-017 and owner approval | G0 |
| Phase 1 — Application foundation | Confirm scope | Primary | Define runtime/build contracts | Control package-registry access, advisory/license metadata reads, and build artifact writes; deployment remains excluded unless authorized | Install, type, static checks, architecture/dependency review, SCA/license audit, build, smoke test | G1 |
| Phase 2 — Design system/composition | Preserve approved design intent | Implement page/component boundaries | Implement page/section/component contracts | Implement only required local/browser effects | Content, asset, functional and primary visual checks | G2 |
| Phase 3 — Responsive/accessibility | Validate visitor scope across contexts | Refine responsive responsibility | Verify semantic and interaction behavior | Verify focus, navigation, and other browser effects | Viewport and accessibility evidence | G3 |
| Phase 4 — Verification/release | Confirm final approved scope | Reconcile final topology | Verify all required flows | Verify all effects and failure handling | Revision-bound evidence and owner disposition | G4 |

## 3. Gate definitions

### G0 — Specification ready

Required:
- Inspectable source and completed source inventory.
- PP-PRC-007 source inspection/reconciliation completed.
- Approved company-level purpose, target customer segments or accepted limitations, positioning, service/capability information, publishable work and permissions, availability wording, and enquiry path (`PP-VER-017`).
- Approved page/content hierarchy.
- Asset, typography, and design-token inventory.
- Interaction and responsive interpretation.
- Information architecture (`PP-ART-018`) reconciled with the source inventory (`PP-VER-016`).
- Component inventory and blueprint recorded (`PP-ART-007`, `PP-ART-019`), with each open component question explicit.
- Explicit non-goals and owner decisions.
- Updated requirements and traceability records.

Blocks:
- Guessing the design or its behavior.
- Inventing routes, sections, or components to fill the information architecture or blueprint.
- Selecting foundational tools based on assumptions that may be invalidated by the design.

### G1 — Application foundation ready

Required:
- Approved and documented toolchain.
- Clean install from the lockfile.
- Strict TypeScript check.
- Configured static checks.
- Architecture/component-boundary review (PP-VER-014) for the established scaffold.
- Dependency and side-effect surface review (PP-VER-015), including package manifest/lockfile and build scripts.
- Automated npm/OSV vulnerability and SPDX license audit (PP-VER-018).
- Successful production build and runtime smoke test.
- Documented setup commands and dependency decisions.

Blocks:
- Building page features on a non-reproducible foundation.
- Claiming type safety based solely on transpilation.

### G2 — Composition ready

Required:
- Approved content and assets integrated.
- All in-scope sections represented.
- Typed component interfaces.
- Architecture/component-boundary review for implemented page/section components (PP-VER-014).
- Information architecture and component blueprint reconciled with the implemented composition (`PP-VER-016`).
- Source/token reconciliation.
- Primary viewport visual review.
- Required interactions implemented or explicitly blocked.
- Company positioning, approved work, availability content and the customer-enquiry path reconciled with `PP-CON-011` and `PP-VER-017`.

Blocks:
- Missing core sections or content.
- Unknown or inert interactive controls.
- Unapproved deviations from visual source.

### G3 — Responsive and accessibility ready

Required:
- Agreed viewport matrix passed.
- No unintended content overflow or clipping.
- Accessibility manual assessment (PP-VER-008), including keyboard/focus, semantics, contrast, and representative assistive-technology checks.
- Accessible names and text alternatives reviewed.
- Applicable WCAG 2.2 AA criteria assessed.
- Findings fixed or explicitly accepted.

Blocks:
- Critical keyboard, focus, reflow, contrast, or assistive-technology issues.
- Unsupported claims of accessibility conformance.

### G4 — Release ready

Required:
- All applicable automated checks pass on the candidate commit.
- Architecture and dependency/effect reviews are current for the candidate.
- Functional and visual review complete.
- Responsive/accessibility evidence current.
- Known limitations and deviations recorded.
- Release artifact tied to a commit.
- Owner reviews evidence and explicitly authorizes merge/release action.

Blocks:
- Stale verification evidence.
- Unresolved release blockers.
- Missing owner authorization.

## 4. Phase/ICM progression rules

- Completing Phase 0 does not mean L0–L4 are all complete. It means the initial context and source contracts are sufficiently grounded.
- Phase 1 establishes executable tooling, dependency/effect controls, and some L1/L4 controls; it does not implement the design.
- Phase 2 implements major L1/L2 boundaries and the relevant L3 effects; its visual review is not final release evidence.
- Phase 3 deepens L2/L3 correctness across viewport and assistive-technology contexts and supplies G3 evidence.
- Phase 4 reconciles all levels against the actual release candidate and establishes G4.
- Defects discovered later may reopen an earlier level or phase. Do not force linear status when evidence shows a previous contract is unsatisfied.
- Phase 1 foundational decisions (router, rendering model, source layout) use the accepted information architecture as input (`PP-REQ-009`, DEC-007).

## 5. Current routing disposition

| Gate | Status | Reason |
|---|---|---|
| G0 | In progress; conservative business/content/design dispositions owner-approved under DEC-014 | Exact contact and availability values, original logo/asset files, and publication rights for testimonials/sample artwork remain open; approved responsive adaptation and Aileron source license are recorded |
| G1 | Foundation/runtime evidence passed; PP-VER-018 SCA/license audit implemented on PR #15; exact-head audit evidence pending | Earlier application-quality and documentation-integrity checks passed. New dependency audit runs on this candidate; owner phase disposition remains pending |
| G2 | Not started | No application composition |
| G3 | Not started | No responsive implementation |
| G4 | Not started | No release candidate or execution evidence |

## 6. Gate approval

A gate record must identify:
- Candidate commit.
- Applicable requirements and contracts.
- Verification controls run.
- Evidence references.
- Failed controls and accepted limitations.
- Owner decision and date.

The phase owner may prepare the evidence, but only the project owner can approve material scope changes, merge, or production release.
