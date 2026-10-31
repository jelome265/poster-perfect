# Implementation plan

This is the phase overview for Poster Perfect. Detailed execution specifications are maintained in [docs/phases](phases/README.md). The engineering control model is defined separately in [docs/icm](icm/README.md).

The project follows gated phase progression. A phase is not complete because work was attempted; its exit criteria must be met and the evidence recorded.

## Phase register

| Phase | Name | Status | Objective |
| --- | --- | --- | --- |
| 0 | [Source discovery and specification](phases/phase-0-source-discovery.md) | Awaiting owner approval (G0) | Establish the company positioning/customer journey and the verified design/web specification |
| 1 | [Application foundation](phases/phase-1-application-foundation.md) | Not started | Establish a minimal, reproducible React + TypeScript application |
| 2 | [Design system and page composition](phases/phase-2-design-system-and-composition.md) | Not started | Translate the approved design into page structure and components |
| 3 | [Responsive and accessible implementation](phases/phase-3-responsive-accessibility.md) | Not started | Verify responsive behavior and accessibility requirements |
| 4 | [Verification and release readiness](phases/phase-4-verification-release.md) | Not started | Establish final quality evidence and owner-authorized release readiness |

## Phase dependencies

```text
Phase 0: Source discovery and specification
  |
  v
Phase 1: Application foundation
  |
  v
Phase 2: Design system and page composition
  |
  v
Phase 3: Responsive and accessible implementation
  |
  v
Phase 4: Verification and release readiness
```

Phase 1 may only begin after the company positioning/customer-journey specification and source specification are stable enough to inform foundational technical choices. Any explicitly approved overlap must identify which inputs are stable and which remain unresolved.

## ICM control model

The ICM defines five control levels across all phases:

- **L0 — Intent and context:** purpose, actors, scope, boundaries, non-goals.
- **L1 — Structure and ownership:** architecture map, modules, dependencies and interfaces.
- **L2 — Contracts and behaviour:** interfaces, processes, inputs, outputs and state transitions.
- **L3 — Effects and resources:** browser, network, persistence, external actions and failure handling.
- **L4 — Verification and evidence:** tests, visual review, accessibility, build and release gates.

See the [ICM phase routing](icm/09-phase-routing.md) for the mapping between phases and control levels. The [master traceability register](icm/08-traceability-register.md) reconciles requirements through evidence.

## Current project state

- Phase 0 is awaiting owner approval (G0). The owner's Canva export was inspected on 2026-10-30; records are drafted, and the owner decisions in `content-structure.md` remain open.
- Phases 1–4 have not started.
- The repository currently contains documentation only; no application scaffold, build scripts, or automated application checks have been established.
- The company-level purpose is confirmed: Poster Perfect is a graphic design company portfolio intended to attract prospective customers, not an individual designer's portfolio.
- Specific customer segments, approved positioning copy, service categories, publishable portfolio material and permissions, current availability wording, enquiry route, and responsive adaptations remain to be confirmed. The one-page/seven-section hierarchy, source copy, approximate visual values, and observed components are drafted from the export and await G0 approval; none is inferred from the project name.

## Governance

- Maintain phase status and evidence in [the phase register](phases/README.md).
- Maintain requirement, contract, effect, artifact and evidence routing in the [ICM](icm/README.md).
- Update the project brief, design inventories, and decision log when approved requirements change.
- Record exact verification commands, tested viewports, relevant commit SHAs, and unresolved findings.
- Do not report checks as passed unless they were run against the relevant commit.
- Pull-request approval and merging, as well as production deployment, remain subject to explicit project-owner authorization.

## Change control

A new page, interaction, backend integration, external service, or material change to the source design may affect scope. Update the affected specifications and obtain the required approval before expanding implementation.
