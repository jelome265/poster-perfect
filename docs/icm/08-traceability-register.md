# ICM master traceability register

**Role:** Single reconciliation index for requirements, maps, contracts, processes, effects, artifacts, verification, and phase delivery  
**Status:** Initial baseline; entries change only through reviewed updates  
**Last reconciled:** 2026-10-31

## 1. Register rules

This register is an index, not a replacement for the canonical subject documents. Keep detailed definitions in their owning documents and update this table when records are added, retired, or materially changed.

The register must distinguish:
- Specification acceptance.
- Implementation completion.
- Evidence status.
- Phase status.

Do not infer an implementation status from a specification or a verification status from a test file existing.

## 2. Requirement-to-control matrix

| Requirement | L0/L1 map | Contract | Process | Effect | Artifact | Reference | Verification | Phase |
|---|---|---|---|---|---|---|---|---|
| `PP-REQ-001` Canva design recreation | PP-MAP-004, PP-MAP-011–015 | PP-CON-002, 004, 005, 006, 010 | PP-PRC-002–004, 007 | PP-EFF-001–004; conditional effects only with approval | PP-ART-001, 002, 005, 006, 013, 014, 018, 019 | PP-REF-001, 002, 005, 010, 011 | PP-VER-005, 006, 009, 010, 013, 016 | 0, 2, 3, 4 |
| `PP-REQ-002` React + TypeScript/TSX | PP-MAP-010, 017 | PP-CON-001 | PP-PRC-001, 002 | PP-EFF-001, 008, 009 | PP-ART-003, 004, 011, 012, 015 | PP-REF-007, 008 | PP-VER-001–004, 013 | 1, 4 |
| `PP-REQ-003` Maintainable component structure | PP-MAP-010–014 | PP-CON-003 | PP-PRC-002, 004 | PP-EFF-001, 002 | PP-ART-003, 007, 011, 015, 019 | PP-REF-004, 007, 008, 011 | PP-VER-002, 003, 013, 014, 016 | 0, 1, 2, 4 |
| `PP-REQ-004` Visual identity and responsive web behavior | PP-MAP-004, 011–015 | PP-CON-002, 004, 008 | PP-PRC-002–004, 007 | PP-EFF-001–004 | PP-ART-002, 005, 006, 014, 015 | PP-REF-001, 006 | PP-VER-005–007, 013 | 0, 2, 3, 4 |
| `PP-REQ-005` WCAG 2.2 AA target | PP-MAP-002, 003, 012–016 | PP-CON-006, 008 | PP-PRC-003, 004 | PP-EFF-001–004 | PP-ART-004, 007, 015 | PP-REF-006 | PP-VER-007–010, 013 | 2, 3, 4 |
| `PP-REQ-006` No invented source facts | PP-MAP-001, 004 | PP-CON-002, 004, 005, 010 | PP-PRC-007 | PP-EFF-004 | PP-ART-001, 002, 005, 006, 007, 013, 015, 018, 019 | PP-REF-001, 002, 010, 011 | PP-VER-005, 006, 010, 013, 016 | 0, 2, 4 |
| `PP-REQ-007` No unapproved backend/integration/persistence | PP-MAP-007, 016 | PP-CON-007 | PP-PRC-005 | PP-EFF-005–007 | PP-ART-004, 011, 012, 015 | PP-REF-004 | PP-VER-013, 015; future integration-specific controls if scope changes | 0–4 |
| `PP-REQ-008` Owner retains merge/release authority | PP-MAP-001, 017, 018 | PP-CON-009 | PP-PRC-001, 006 | PP-EFF-010 only under owner authorization | PP-ART-008, 009, 010, 016 | PP-REF-003, 005 | PP-VER-011–013 | 0–4 |
| `PP-REQ-009` Phase 0 IA and component blueprint before foundational decisions | PP-MAP-010–013, 018 | PP-CON-002, 003, 010 | PP-PRC-007 | None (documentation output; no runtime effect) | PP-ART-006, 007, 009, 018, 019 | PP-REF-001, 003, 010, 011 | PP-VER-005, 013, 016 | 0, 1 |
| `PP-REQ-010` Company portfolio and prospective-customer acquisition purpose | PP-MAP-001, 002, 008, 011–013, 015 | PP-CON-002, 005, 006, 010, 011 | PP-PRC-002, 003, 007 | PP-EFF-001, 003, 004; PP-EFF-007 only with separate approval | PP-ART-001, 002, 006, 007, 009, 013, 018, 019 | PP-REF-001, 002, 003, 005, 010, 011 | PP-VER-005, 009, 010, 013, 016, 017 | 0, 2, 3, 4 |
| `PP-REQ-011` npm dependency vulnerability and SPDX license assurance | PP-MAP-005, PP-MAP-017 | PP-CON-012 | PP-PRC-001 | PP-EFF-008, PP-EFF-011 | PP-ART-003, PP-ART-004, PP-ART-015, PP-ART-021 | PP-REF-012, PP-REF-013 | PP-VER-018 | 1, 4 |

## 3. Map registry

| ID | Record | Canonical owner | Status |
|---|---|---|---|
| `PP-MAP-001` | Project owner | System context | Confirmed |
| `PP-MAP-002` | Website visitor | System context | Expected actor |
| `PP-MAP-003` | Browser runtime | System context | Confirmed boundary |
| `PP-MAP-004` | Canva source design | System context | Inspected 2026-10-30 (export) |
| `PP-MAP-005` | Build/package ecosystem | System context | Vite/npm/Node 22 selected (DEC-012) |
| `PP-MAP-006` | Hosting/delivery | System context | Not selected |
| `PP-MAP-007` | External destinations/services | System context | Unknown; not assumed |
| `PP-MAP-008` | Poster Perfect graphic design business represented by the website | System context | Canva-derived company information and seven-section baseline accepted under DEC-018; missing values/assets/rights have explicit placeholders |
| `PP-MAP-010`–`PP-MAP-017` | Frontend and engineering-tooling boundaries | Architecture map | Accepted logical boundaries; minimal application topology implemented and reviewed; page topology pending |
| `PP-MAP-018` | Cross-cutting documentation/ICM governance boundary, not a runtime component | Architecture map | Accepted governance boundary |

## 4. Contract registry

| ID | Contract | Specification | Implementation | Evidence |
|---|---|---|---|---|
| `PP-CON-001` | Application runtime | Accepted | Foundation implemented; neutral shell only | PP-ART-020; exact merge-SHA application-quality run `41172107909` on `9e81adb7a178db9c48106292b3351d0bafe0a9e8` |
| `PP-CON-002` | Page composition | Partially specified; Phase 0 dependent | Not started | Not collected |
| `PP-CON-003` | Component interface | Accepted | Foundation shell only; reusable page/section component contracts not implemented | PP-ART-020; typecheck/build/shell smoke on merge SHA `9e81adb7a178db9c48106292b3351d0bafe0a9e8` (run `41172107909`) |
| `PP-CON-004` | Design token | Partially specified; values approximate, owner confirmation pending | Not started | Not collected |
| `PP-CON-005` | Asset | Partially specified; originals and permissions pending | Not started | Not collected |
| `PP-CON-006` | Interaction | Partially specified; visible controls inventoried, destinations/behavior pending owner decisions | Not started | Not collected |
| `PP-CON-007` | External integration | Excluded from baseline | Not applicable | Not applicable at baseline |
| `PP-CON-008` | Accessibility/responsive | Partially specified; target accepted, details pending | Not started | Not collected |
| `PP-CON-009` | Change/release | Accepted | Not applicable (governance contract) | Not collected per individual change |
| `PP-CON-010` | Information architecture and navigation | Accepted 2026-10-31 (DEC-013); web adaptations and content decisions still open | Not started | Not collected |
| `PP-CON-011` | Company positioning, portfolio and customer engagement | Accepted for Canva-led seven-section baseline under DEC-018; unavailable values/assets/rights use explicit placeholders | Seven sections and source-derived company content in scope; contact/social controls inactive until verified destinations are supplied | DEC-018; asset rights, testimonial permissions and factual claims remain release controls |
| `PP-CON-012` | npm dependency security and license compliance | Accepted under DEC-015 | Implemented and passed on PR #15 merge SHA `9e81adb7a178db9c48106292b3351d0bafe0a9e8` | PP-ART-021; PP-VER-018; Actions run `41172108087` |

## 5. Process registry

| ID | Process | Specification | Implementation |
|---|---|---|---|
| `PP-PRC-001` | Build and delivery | Implemented at foundation level | Production-preview smoke passed in application-quality run `41172107909`; npm/OSV/SPDX/deps.dev audit passed in run `41172108087` on merge SHA `9e81adb7a178db9c48106292b3351d0bafe0a9e8` |
| `PP-PRC-002` | Initial page load/render | Neutral `App` shell renders; complete page composition held by G0/G2 | Dev-server browser smoke recorded at `ef613375`; production-preview HTTP/asset smoke passed on PR #15 merge SHA `9e81adb7a178db9c48106292b3351d0bafe0a9e8` (run `41172107909`) |
| `PP-PRC-003` | Link/navigation | Conditional on source | Not started |
| `PP-PRC-004` | Local interface interaction | Conditional on source | Not started |
| `PP-PRC-005` | Remote form/API | Excluded baseline; future extension | Not started |
| `PP-PRC-006` | Verification/review/release | Target governance process | Applies per change |
| `PP-PRC-007` | Source inspection/specification | Canva company content, seven sections and explicit future-update placeholder rules approved under DEC-018 | G0 source-led specification workflow complete |

## 6. Effect registry

| ID | Effect | Class | Baseline disposition |
|---|---|---|---|
| `PP-EFF-001` | Pure rendering and derivation | E0 | Expected |
| `PP-EFF-002` | Ephemeral UI state | E1 | Conditional |
| `PP-EFF-003` | Browser navigation and focus management | E2 | Conditional |
| `PP-EFF-004` | Static asset retrieval | E2/resource | Expected |
| `PP-EFF-005` | Remote data request | E3 | Excluded unless approved |
| `PP-EFF-006` | Durable browser persistence | E4 | Excluded unless approved |
| `PP-EFF-007` | External mutation/submission | E5 | Excluded unless approved |
| `PP-EFF-008` | Build-time dependency retrieval | E3 | Expected only during approved build |
| `PP-EFF-009` | Build artifact generation | E4 | Expected only during approved build |
| `PP-EFF-010` | Repository merge, deployment or production promotion | E5 | Excluded until explicitly authorized |
| `PP-EFF-011` | CI vulnerability advisory and license metadata retrieval | E3 | Approved only for dependency audit; no application runtime use |

## 7. Verification registry

| ID | Control | Current status | Mandatory phase gate |
|---|---|---|---|
| `PP-VER-001` | Clean dependency install | Passed on merge SHA `9e81adb7a178db9c48106292b3351d0bafe0a9e8` (Actions run `41172107909`) | G1, G4 |
| `PP-VER-002` | Strict type check | Passed on merge SHA `9e81adb7a178db9c48106292b3351d0bafe0a9e8` (Actions run `41172107909`) | G1, G2, G4 |
| `PP-VER-003` | Lint/static quality | Passed on merge SHA `9e81adb7a178db9c48106292b3351d0bafe0a9e8` (Actions run `41172107909`) | G1, G2, G4 |
| `PP-VER-004` | Production build/runtime smoke | Passed on merge SHA `9e81adb7a178db9c48106292b3351d0bafe0a9e8` (Actions run `41172107909`); production build, 1/1 shell test, preview HTML/root and same-origin JS/CSS asset fetch passed; no real-browser bundle execution | G1, G2, G4 |
| `PP-VER-005` | Content/source reconciliation | Not yet run: copy transcribed from export text; reconciliation pending | G0, G2, G4 |
| `PP-VER-006` | Visual fidelity comparison | Blocked on application; export is a reference only | G2, G4 |
| `PP-VER-007` | Responsive viewport matrix | Planned | G3, G4 |
| `PP-VER-008` | Accessibility manual assessment | Planned | G3, G4 |
| `PP-VER-009` | Navigation/interaction behavior | Pending interaction inventory | G2, G3, G4 |
| `PP-VER-010` | Asset loading/alt text | Pending asset inventory | G2, G3, G4 |
| `PP-VER-011` | Release artifact provenance | Planned | G4 |
| `PP-VER-012` | Owner review/release disposition | Required | G4 |
| `PP-VER-013` | ICM reference/traceability integrity | Passed on PR #15 merge SHA `9e81adb7a178db9c48106292b3351d0bafe0a9e8` (Actions run `41172107907`); must pass again on this close-out PR revision before merge | All gates and material documentation changes |
| `PP-VER-014` | Architecture/component-boundary review | Passed by manual review of neutral foundation; re-run after page/section modules are added | G1, G2, G4 |
| `PP-VER-015` | Dependency/side-effect surface review | Passed by manual foundation review; dedicated automated SCA/license controls are recorded separately under PP-VER-018 | G1, G2, G4 |
| `PP-VER-016` | IA and component-blueprint reconciliation | Source hierarchy/component inventory reconciled 2026-10-30; seven-section composition and placeholder regions approved under DEC-018 | G0, G2 |
| `PP-VER-017` | Company positioning, source-derived content and customer-journey placeholder reconciliation | G0 source-led company content and all seven sections approved under DEC-018; missing values and rights-dependent content have explicit placeholders | G0, G2, G4 |
| `PP-VER-018` | npm dependency vulnerability and SPDX license audit | Passed on merge SHA `9e81adb7a178db9c48106292b3351d0bafe0a9e8` (Actions run `41172108087`); npm, OSV, SPDX, deps.dev checks passed; 140 entries and zero policy violations | G1, G4 |

## 8. Open questions and blockers

| ID | Question/blocker | Owner | Resolution phase | Current disposition |
|---|---|---|---|---|
| `PP-RSK-001` | Canva editor URL was not inspectable; an export was subsequently supplied | Project owner supplies accessible export/reference | Phase 0 | Mitigated 2026-10-30: export inspected (see `design-reference.md`); residual asset/measurement items recorded there |
| `PP-RSK-002` | Target customer segments and owner approval of the observed page/section hierarchy remain outstanding | Project owner / source inspection | Phase 0 | Mitigated: source-derived customer groups and seven-section Canva hierarchy approved under DEC-014/DEC-013/DEC-018 |
| `PP-RSK-003` | Source copy is transcribed; interaction destinations and control behavior remain unresolved | Source inspection / owner | Phase 0 | Mitigated for source-visible baseline: source copy/sections and About CTA recorded; withheld external destinations remain explicit placeholders and are not active links |
| `PP-RSK-004` | Toolchain, styling, and hosting choices were unresolved | Maintainer / owner decision | Phase 1 | Mitigated: core toolchain, rendering model, and no-router baseline selected under DEC-012; styling framework and hosting remain open |
| `PP-RSK-005` | Font and asset availability/licensing not verified | Project owner / source inspection | Phase 0/G2 | Aileron source license recorded; missing original logo/images use named placeholders. Verify font distribution and record individual asset permissions before integration/publication |
| `PP-RSK-006` | Responsive source variants or owner-approved adaptations are not known | Project owner / source inspection | Phase 0/G2/G3 | Mitigated: content-driven responsive reflow approved under DEC-014/DEC-018; implement in Phase 2 and verify in Phases 2–3 |
| `PP-RSK-007` | Foundational tooling (router, rendering model, source layout) could be chosen before the page set and component boundaries are known | Maintainer / project owner | Phase 1 entry | Mitigated by `PP-REQ-009` and DEC-007: foundational decisions wait for the accepted information architecture |
| `PP-RSK-008` | Specific positioning, customer segments, service offering, publishable portfolio items/permissions, availability wording, contact details and enquiry destination remain unconfirmed | Project owner | G2/G4 publication | Canva-derived positioning, customer groups and services approved; missing contact/social/availability values have update placeholders; stats/testimonials/assets require substantiation/permission before publication. Does not block source-led Phase 2 composition |
| `PP-RSK-009` | `main` ruleset requires zero approving reviews; required-check failure behavior has not been deliberately tested | Project owner / repository administrator | Continuous governance | The no-status-check gap is mitigated: active ruleset `26256454` requires six named contexts with strict checks and no bypass actors. Zero approving reviews remain configured; no intentionally failing PR has been used to test merge blocking. |
| `PP-RSK-010` | License metadata can be missing/inaccurate or a development-only license can enter runtime scope | Maintainer / project owner | Continuous; before release | Missing/unknown identifiers fail closed; MPL-2.0 is machine-restricted to development scope; actual license text and non-npm asset rights still need release review |

These are risk/blocker records, not claims that the listed conditions have caused implementation defects.

## 9. Reconciliation rules

- Update this register in the same change that adds or materially alters an ICM record.
- New requirement IDs must appear in both the contract inventory and this register.
- New effects must be linked to their initiating process and relevant verification.
- New verification controls must identify the requirements/contracts they prove.
- Retired records remain visible and point to their successor.
- Do not add a "complete" status without revision-specific evidence.
- Keep the detailed acceptance criteria in the owning document, not duplicated here.

## 10. Phase 1/G1 final disposition — 2026-10-31

DEC-016 records the project owner's Phase 1 completion instruction. The merged baseline is PR #15 merge SHA `9e81adb7a178db9c48106292b3351d0bafe0a9e8`.

| Control | Final evidence |
|---|---|
| PP-VER-001 to PP-VER-004 | Application quality run [41172107909](https://github.com/jelome265/poster-perfect/actions/runs/41172107909) on the merge SHA; install, lint, strict typecheck, 1/1 test, production build, and production-preview HTTP/asset smoke passed |
| PP-VER-013 | Documentation integrity run [41172107907](https://github.com/jelome265/poster-perfect/actions/runs/41172107907) on the merge SHA; the documentation-only close-out revision must pass the same required check on its PR |
| PP-VER-018 | Dependency security/license run [41172108087](https://github.com/jelome265/poster-perfect/actions/runs/41172108087) on the merge SHA; npm, OSV, SPDX, and deps.dev checks passed; 140 package entries and zero policy violations |
| Protect main | Ruleset [26256454](https://github.com/jelome265/poster-perfect/rules/26256454) active; strict six-context requirement; no bypass actors. All six contexts passed on PR #15 head `ecfc625bcc206771bfc1a6b05a20888a51d862ce`; five Actions checks are listed on the merge SHA and the GHAS `osv-scanner` check passed on the PR head |

Historical verification rows above retain the revisions on which those earlier checks were run. G1 is complete under DEC-016. G0 is complete for the Canva-led seven-section specification under DEC-018: source company information, all seven sections, source-derived component regions and explicit update placeholders are recorded. Missing contact/social/availability values and rights-dependent claims/assets remain unknown and are not fabricated. Phase 2 may begin after this correction is merged; G2/G4 evidence still governs composition, publication and release.
