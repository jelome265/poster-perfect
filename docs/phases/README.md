# Delivery phases

This directory contains the phase-level execution specifications for Poster Perfect. The [implementation plan](../implementation-plan.md) is the short overview; these documents define the entry conditions, work, deliverables, verification, and exit criteria for each phase.

## Phase register

| Phase | Name | Current status | Primary exit condition |
| --- | --- | --- | --- |
| 0 | [Source discovery and specification](phase-0-source-discovery.md) | Source-led seven-section specification complete under DEC-019 (2026-10-31) | Canva company content, source layout and explicit future-update placeholders reconciled |
| 1 | [Application foundation](phase-1-application-foundation.md) | Complete (DEC-016; owner-authorized G1 close-out on 2026-10-31; merge SHA `9e81adb`) | Reproducible React and TypeScript application foundation |
| 2 | [Design system and page composition](phase-2-design-system-and-composition.md) | Not started | Approved design translated into complete page composition |
| 3 | [Responsive and accessible implementation](phase-3-responsive-accessibility.md) | Not started | Agreed viewport and accessibility requirements verified |
| 4 | [Verification and release readiness](phase-4-verification-release.md) | Not started | Release evidence complete and owner approval obtained |

Statuses describe project progress, not the maturity of the documentation. A phase remains incomplete until its exit evidence is recorded.

## Phase governance

### Progression

- Work proceeds in phase order because later phases depend on outputs from earlier phases.
- A phase may overlap with a later phase only when its required inputs are stable and the overlap is explicitly recorded.
- Do not mark a phase complete because its tasks were attempted. Its exit criteria must be met and supported by evidence.
- If new information changes scope or invalidates an earlier decision, update the affected documentation before treating dependent work as approved.

### Phase records

For each phase, maintain:

- Current status and owner-approved scope.
- Inputs and dependencies.
- Work items and resulting artifacts.
- Verification performed, including commands, viewport sizes, test results, and relevant links.
- Unresolved issues, accepted limitations, and decisions.
- Exit-gate disposition.

A status change should identify the evidence supporting it. Do not report tests, visual checks, accessibility checks, or deployment actions as complete unless they were actually performed.

### Change control

A new page, interaction, backend integration, external service, or materially different design may change scope. Update the project brief, relevant inventories, decision log, and affected phase specification before expanding implementation.

### Review and authority

Pull requests are review boundaries. The project owner retains the decision to approve and merge changes. Do not merge a pull request or publish a production release without explicit owner authorization.
