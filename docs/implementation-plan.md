# Implementation plan

This is the phase overview for Poster Perfect. Detailed execution specifications are maintained in [docs/phases](phases/README.md). The engineering control model is defined separately in [docs/icm](icm/README.md).

The project follows gated phase progression. A phase is not complete because work was attempted; its exit criteria must be met and the evidence recorded.

## Phase register

| Phase | Name | Status | Objective |
| --- | --- | --- | --- |
| 0 | [Source discovery and specification](phases/phase-0-source-discovery.md) | In progress — conservative business/content/design dispositions approved under DEC-014; contact, availability, original-asset, and publication-rights evidence outstanding | Complete the company positioning/customer journey and verified design/web specification |
| 1 | [Application foundation](phases/phase-1-application-foundation.md) | In progress — merged foundation; G1 evidence passed on PR #15; owner disposition pending | Establish a minimal, reproducible React + TypeScript application |
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

Phase 1 normally depends on stable Phase 0 inputs. The owner authorized a limited foundation overlap under DEC-012/DEC-013. DEC-014 now approves conservative content/design dispositions and responsive reflow; G0 remains open for current contact and availability data, original assets, and publication rights. Phase 2 implementation remains gated on the Phase 1 disposition and those remaining G0 inputs.

## ICM control model

The ICM defines five control levels across all phases:

- **L0 — Intent and context:** purpose, actors, scope, boundaries, non-goals.
- **L1 — Structure and ownership:** architecture map, modules, dependencies and interfaces.
- **L2 — Contracts and behaviour:** interfaces, processes, inputs, outputs and state transitions.
- **L3 — Effects and resources:** browser, network, persistence, external actions and failure handling.
- **L4 — Verification and evidence:** tests, visual review, accessibility, build and release gates.

See the [ICM phase routing](icm/09-phase-routing.md) for the mapping between phases and control levels. The [master traceability register](icm/08-traceability-register.md) reconciles requirements through evidence.

## Current project state

- Phase 0 remains in progress (G0 open). The owner approved conservative business/content/design dispositions under DEC-014; current contact and availability values, original assets, and publication rights for testimonials and sample artwork remain evidence-gated.
- Phase 1 foundation is merged on `main` at `ad45f296b2294e65048cf27d1d5473f54e14e52a`; the neutral React shell, npm lockfile, strict TypeScript configuration, lint/test/build scripts, and CI workflows are present. G1 verification and gap-review evidence passed on PR #15; owner phase disposition remains pending.
- Phases 2–4 have not started. No designed page composition, final brand styling, responsive implementation, or production deployment has been introduced.
- The company-level purpose is confirmed: Poster Perfect is a graphic design company portfolio intended to attract prospective customers, not an individual designer's portfolio.
- Source-derived customer groups, company voice, service categories, conservative content exclusions, the About anchor action, and responsive reflow are approved under DEC-014. Exact contact/availability values, original logo and asset files, and publication rights for testimonials/sample artwork remain unresolved and are not to be inferred.

## Governance

- Maintain phase status and evidence in [the phase register](phases/README.md).
- Maintain requirement, contract, effect, artifact and evidence routing in the [ICM](icm/README.md).
- Update the project brief, design inventories, and decision log when approved requirements change.
- Record exact verification commands, tested viewports, relevant commit SHAs, and unresolved findings.
- Do not report checks as passed unless they were run against the relevant commit.
- Pull-request approval and merging, as well as production deployment, remain subject to explicit project-owner authorization.

## Change control

A new page, interaction, backend integration, external service, or material change to the source design may affect scope. Update the affected specifications and obtain the required approval before expanding implementation.
