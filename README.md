# Poster Perfect

A responsive company portfolio website for a graphic design business, built with React and TypeScript (TSX). It presents the company and its approved creative work, communicates availability for new projects, and gives prospective customers a clear enquiry path. The supplied Canva design is the visual reference for the web implementation.

## Project status

**Documentation baseline established; application implementation not started.** The owner's Canva export was inspected on 2026-10-30. Records drafted from it await owner approval (Phase 0, G0). Visual values are approximate, and several content and publication decisions remain open.

## Application development

See [development setup](docs/development.md) for prerequisites and commands.

## Documentation

### Project specification

- [Project brief](docs/project-brief.md)
- [Design reference and inspection record](docs/design-reference.md)
- [Architecture](docs/architecture.md)
- [Technical standards](docs/technical-standards.md)
- [Design system](docs/design-system.md)
- [Content structure](docs/content-structure.md)
- [Information architecture](docs/information-architecture.md)
- [Component guidelines](docs/components.md)
- [Component blueprint](docs/component-blueprint.md)
- [Accessibility requirements](docs/accessibility.md)
- [Implementation plan](docs/implementation-plan.md)
- [Decision log](docs/decision-log.md)

### Delivery phases

See [the phase register](docs/phases/README.md) for the delivery sequence, current phase statuses, and governance rules.

- [Phase 0 — Source discovery and specification](docs/phases/phase-0-source-discovery.md)
- [Phase 1 — Application foundation](docs/phases/phase-1-application-foundation.md)
- [Phase 2 — Design system and page composition](docs/phases/phase-2-design-system-and-composition.md)
- [Phase 3 — Responsive and accessible implementation](docs/phases/phase-3-responsive-accessibility.md)
- [Phase 4 — Verification and release readiness](docs/phases/phase-4-verification-release.md)

### Implementation Control Model

The [ICM charter](docs/icm/README.md) defines L0–L4 control levels and the traceability model governing requirements, architecture, contracts, processes, effects, artifacts, references, verification, and release gates.

Start with the [system context](docs/icm/00-system-context.md), [architecture map](docs/icm/01-architecture-map.md), and [master traceability register](docs/icm/08-traceability-register.md).

## Agent instructions

[`CLAUDE.md`](CLAUDE.md) is the single canonical source of repository-level agent instructions. [`AGENTS.md`](AGENTS.md) and [`GEMINI.md`](GEMINI.md) are discovery pointers that direct agents to it; they do not define separate policies.

## Agreed direction

- Company-level portfolio for a graphic design business; not an individual designer's personal portfolio.
- Present approved company capabilities and work, communicate current availability, and support prospective-customer enquiries.
- React with TypeScript and TSX.
- Component-based implementation with maintainable boundaries.
- Responsive behavior across supported viewport sizes.
- Visual decisions must be derived from the source design, not guessed.
- Tooling, routing, styling framework, and deployment target will be selected when implementation requirements are confirmed.

## Development

The application scaffold and package scripts have not been established yet. Setup and verification commands will be documented here after the toolchain is selected and added to the repository.
