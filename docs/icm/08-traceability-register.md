# ICM master traceability register

**Role:** Single reconciliation index for requirements, maps, contracts, processes, effects, artifacts, verification, and phase delivery  
**Status:** Initial baseline; entries change only through reviewed updates  
**Last reconciled:** 2026-10-30

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

## 3. Map registry

| ID | Record | Canonical owner | Status |
|---|---|---|---|
| `PP-MAP-001` | Project owner | System context | Confirmed |
| `PP-MAP-002` | Website visitor | System context | Expected actor |
| `PP-MAP-003` | Browser runtime | System context | Confirmed boundary |
| `PP-MAP-004` | Canva source design | System context | Inspected 2026-10-30 (export) |
| `PP-MAP-005` | Build/package ecosystem | System context | Not selected |
| `PP-MAP-006` | Hosting/delivery | System context | Not selected |
| `PP-MAP-007` | External destinations/services | System context | Unknown; not assumed |
| `PP-MAP-008` | Poster Perfect graphic design business represented by the website | System context | Company-level purpose confirmed; details pending Phase 0 |
| `PP-MAP-010`–`PP-MAP-017` | Frontend and engineering-tooling boundaries | Architecture map | Accepted logical boundaries; physical layout pending |
| `PP-MAP-018` | Cross-cutting documentation/ICM governance boundary, not a runtime component | Architecture map | Accepted governance boundary |

## 4. Contract registry

| ID | Contract | Specification | Implementation | Evidence |
|---|---|---|---|---|
| `PP-CON-001` | Application runtime | Accepted | Not started | Not collected |
| `PP-CON-002` | Page composition | Partially specified; Phase 0 dependent | Not started | Not collected |
| `PP-CON-003` | Component interface | Accepted | Not started | Not collected |
| `PP-CON-004` | Design token | Partially specified; values approximate, owner confirmation pending | Not started | Not collected |
| `PP-CON-005` | Asset | Partially specified; originals and permissions pending | Not started | Not collected |
| `PP-CON-006` | Interaction | Partially specified; visible controls inventoried, destinations/behavior pending owner decisions | Not started | Not collected |
| `PP-CON-007` | External integration | Excluded from baseline | Not applicable | Not applicable at baseline |
| `PP-CON-008` | Accessibility/responsive | Partially specified; target accepted, details pending | Not started | Not collected |
| `PP-CON-009` | Change/release | Accepted | Not applicable (governance contract) | Not collected per individual change |
| `PP-CON-010` | Information architecture and navigation | Partially specified; one-page/seven-section draft exists, owner approval/adaptations pending | Not started | Not collected |
| `PP-CON-011` | Company positioning, portfolio and customer engagement | Partially specified; company purpose accepted, details pending Phase 0 | Not started | Not collected |

## 5. Process registry

| ID | Process | Specification | Implementation |
|---|---|---|---|
| `PP-PRC-001` | Build and delivery | Target process | Not started |
| `PP-PRC-002` | Initial page load/render | Target process; runtime decisions pending | Not started |
| `PP-PRC-003` | Link/navigation | Conditional on source | Not started |
| `PP-PRC-004` | Local interface interaction | Conditional on source | Not started |
| `PP-PRC-005` | Remote form/API | Excluded baseline; future extension | Not started |
| `PP-PRC-006` | Verification/review/release | Target governance process | Applies per change |
| `PP-PRC-007` | Source inspection/specification | Source inspected 2026-10-30; owner approval outstanding (G0) | Phase 0 human workflow |

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

## 7. Verification registry

| ID | Control | Current status | Mandatory phase gate |
|---|---|---|---|
| `PP-VER-001` | Clean dependency install | Planned | G1, G4 |
| `PP-VER-002` | Strict type check | Planned | G1, G2, G4 |
| `PP-VER-003` | Lint/static quality | Planned | G1, G2, G4 |
| `PP-VER-004` | Production build/runtime smoke | Planned | G1, G2, G4 |
| `PP-VER-005` | Content/source reconciliation | Not yet run: copy transcribed from export text; reconciliation pending | G0, G2, G4 |
| `PP-VER-006` | Visual fidelity comparison | Blocked on application; export is a reference only | G2, G4 |
| `PP-VER-007` | Responsive viewport matrix | Planned | G3, G4 |
| `PP-VER-008` | Accessibility manual assessment | Planned | G3, G4 |
| `PP-VER-009` | Navigation/interaction behavior | Pending interaction inventory | G2, G3, G4 |
| `PP-VER-010` | Asset loading/alt text | Pending asset inventory | G2, G3, G4 |
| `PP-VER-011` | Release artifact provenance | Planned | G4 |
| `PP-VER-012` | Owner review/release disposition | Required | G4 |
| `PP-VER-013` | ICM reference/traceability integrity | Failed at `877933a` (PP-ART-017 §10 R4): stale statuses and missing §9 reference; remediation pending. Prior: passed at `76f990f` (§8 R3) for that revision only | All gates and material documentation changes |
| `PP-VER-014` | Architecture/component-boundary review | Planned | G1, G2, G4 |
| `PP-VER-015` | Dependency/side-effect surface review | Defined; not yet run | G1, G2, G4 |
| `PP-VER-016` | IA and component-blueprint reconciliation | Executed by author 2026-10-30; owner review pending | G0, G2 |
| `PP-VER-017` | Company positioning, approved portfolio and customer journey reconciliation | Partially specified; details pending Phase 0 | G0, G2, G4 |

## 8. Open questions and blockers

| ID | Question/blocker | Owner | Resolution phase | Current disposition |
|---|---|---|---|---|
| `PP-RSK-001` | Canva editor URL was not inspectable; an export was subsequently supplied | Project owner supplies accessible export/reference | Phase 0 | Mitigated 2026-10-30: export inspected (see `design-reference.md`); residual asset/measurement items recorded there |
| `PP-RSK-002` | Target customer segments and owner approval of the observed page/section hierarchy remain outstanding | Project owner / source inspection | Phase 0 | One-page/seven-section hierarchy drafted from the export; G0 approval pending |
| `PP-RSK-003` | Source copy is transcribed; interaction destinations and control behavior remain unresolved | Source inspection / owner | Phase 0 | Copy inventory drafted; CTA, service-card, logo, social and contact behavior await owner decisions |
| `PP-RSK-004` | Toolchain, routing, styling, package manager, and hosting are undecided | Maintainer / owner decision | Phase 1 | Open; choose from actual requirements |
| `PP-RSK-005` | Font and asset availability/licensing not verified | Project owner / source inspection | Phase 0 | Pending |
| `PP-RSK-006` | Responsive source variants or owner-approved adaptations are not known | Project owner / source inspection | Phase 0 | Pending |
| `PP-RSK-007` | Foundational tooling (router, rendering model, source layout) could be chosen before the page set and component boundaries are known | Maintainer / project owner | Phase 1 entry | Mitigated by `PP-REQ-009` and DEC-007: foundational decisions wait for the accepted information architecture |
| `PP-RSK-008` | Specific positioning, customer segments, service offering, publishable portfolio items/permissions, availability wording, contact details and enquiry destination remain unconfirmed | Project owner | Phase 0 | Blocks company-content and customer-journey acceptance. Source contact values are withheld from the current public content record until confirmed; do not invent or restore them without approval |

These are risk/blocker records, not claims that the listed conditions have caused implementation defects.

## 9. Reconciliation rules

- Update this register in the same change that adds or materially alters an ICM record.
- New requirement IDs must appear in both the contract inventory and this register.
- New effects must be linked to their initiating process and relevant verification.
- New verification controls must identify the requirements/contracts they prove.
- Retired records remain visible and point to their successor.
- Do not add a "complete" status without revision-specific evidence.
- Keep the detailed acceptance criteria in the owning document, not duplicated here.
