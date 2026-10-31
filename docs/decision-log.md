# Decision log

This log records explicit project decisions and distinguishes them from proposals or open questions.

## Accepted decisions

### DEC-001 — React with TypeScript and TSX

**Status:** Accepted

The website will be implemented with React and TypeScript, with TSX for component markup.

**Reason:** This is the implementation direction agreed for the project.

### DEC-002 — Component-based frontend

**Status:** Accepted

The frontend will use a maintainable component-based structure.

**Reason:** Page composition and repeated interface patterns should have clear boundaries without introducing unnecessary abstraction.

### DEC-003 — Responsive, design-faithful implementation

**Status:** Accepted

The implementation must preserve the visual identity of the Canva source while adapting to supported web viewports.

**Reason:** The objective is to translate the supplied design into a usable website rather than reproduce a fixed-size canvas without adaptation.

### DEC-004 — Design values must come from the source

**Status:** Accepted

Colors, typography, spacing, imagery, content hierarchy, and page structure will not be guessed. They will be documented after source inspection.

**Reason:** Unverified visual assumptions would undermine fidelity and create avoidable rework.

### DEC-005 — WCAG 2.2 Level AA as the accessibility target

**Status:** Accepted as a project target

Use WCAG 2.2 Level AA as the engineering target and verify the implemented pages before making any conformance claim.

**Reference:** [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/).

### DEC-006 — Implementation Control Model

**Status:** Accepted

Use the five-level ICM (L0–L4) to govern traceability from requirements through architecture, contracts, processes, effects, artifacts, and verification.

**Reason:** A company portfolio website still requires explicit ownership, behavior, side-effect, and evidence boundaries. The model must remain proportionate to a frontend website and must not invent backend or infrastructure requirements.

**Authority:** [ICM charter](icm/README.md).

### DEC-007 — Phase 0 information architecture and component blueprint

**Status:** Accepted (project owner directive). The Canva export was inspected on 2026-10-30; the information architecture and component blueprint are drafted from that source and await owner approval at G0.

Phase 0 produces two canonical specification artifacts: the [information architecture](information-architecture.md) (`PP-ART-018`) and the [component blueprint](component-blueprint.md) (`PP-ART-019`). Both are derived from the inspected source. Neither is populated by inference. Phase 1 routing, rendering, and source-layout decisions use the accepted information architecture as an input.

**Reason:** Foundational technical choices made before the page set and component boundaries are known would create rework and invent structure the source may not contain.

**Authority:** `PP-REQ-009`; `PP-CON-010`; ICM ownership rules in [the ICM charter](icm/README.md) §2.2.

### DEC-008 — Company portfolio and prospective-customer acquisition purpose

**Status:** Accepted (project owner clarification, 2026-10-30).

Poster Perfect is a company portfolio website for a graphic design business, not an individual designer's personal portfolio. The website is intended to present the company's approved identity, positioning, capabilities and selected creative work, communicate that the company is open to new work, and attract prospective customers through a clear, owner-approved enquiry path.

This decision establishes business purpose and company-level representation only. It does not establish legal registration, company size or team structure, target customer segments, exact services, portfolio items or publication rights, client relationships, testimonials, awards, credentials, metrics, prices, guarantees, contact channel, CTA wording, or page/route structure. Those details require owner confirmation in Phase 0. Availability must be reconfirmed before publication because it can change.

The Canva source remains the visual/content reference. Business content or an enquiry action not represented in the source must be documented as a proposed web adaptation and approved before inclusion.

**Reason:** The company portfolio must serve the business objective of attracting prospective customers; treating it only as an individual portfolio or a generic Canva recreation would omit the actual product purpose.

**Authority:** Project owner clarification dated 2026-10-30; PP-REQ-010; PP-CON-011.

### DEC-009 — Testimonial content retained in the repository

**Status:** Accepted (project owner, 2026-10-30).

The three testimonial quotations recorded from the Canva export are retained in `content-structure.md` at the project owner's direction. Customer names remain withheld. This repository-retention decision is not approval to publish the quotations on the website: permission for each quotation and attribution must be confirmed before website publication (Owner decision 4). No history rewrite is authorized.

**Authority:** project owner decision recorded in the remediation PR.

### DEC-010 — Phase 0 status text and repository branch protection

**Status:** Accepted (project owner, 2026-10-30).

- `CLAUDE.md` §4 now states that Phase 0 is awaiting owner approval (G0), not blocked. Phase 1 has not started.
- Branch protection is active on `main`: pull request required, force-push and deletion blocked, enforced for administrators with no bypass.
- G0 remains unapproved.

**Authority:** project owner approval under `CLAUDE.md` change control and §8.

## Open decisions

| Decision | Status | Resolution gate |
| --- | --- | --- |
| Build tool and rendering model | Open | After page and delivery requirements are understood |
| Package manager and Node.js version | Open | Before application scaffold |
| Styling approach | Open | After design-system requirements are known |
| Page and route structure | Open | After G0 owner approval; the observed one-page/seven-section inventory is drafted in `information-architecture.md` (DEC-007) |
| Test and browser automation stack | Open | During application foundation |
| Hosting and deployment | Open | Before release planning |
| Backend or external integrations | Not established | Only if a confirmed requirement needs one |

## Decision policy

Record a decision when it changes architecture, dependencies, user-visible behavior, accessibility expectations, or delivery constraints. Update or supersede earlier decisions explicitly; do not silently turn a proposal into an accepted requirement.
