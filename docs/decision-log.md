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

**Reason:** A design recreation still requires explicit ownership, behavior, side-effect, and evidence boundaries. The model must remain proportionate to a frontend website and must not invent backend or infrastructure requirements.

**Authority:** [ICM charter](icm/README.md).

## Open decisions

| Decision | Status | Resolution gate |
| --- | --- | --- |
| Build tool and rendering model | Open | After page and delivery requirements are understood |
| Package manager and Node.js version | Open | Before application scaffold |
| Styling approach | Open | After design-system requirements are known |
| Page and route structure | Open | After source inspection |
| Test and browser automation stack | Open | During application foundation |
| Hosting and deployment | Open | Before release planning |
| Backend or external integrations | Not established | Only if a confirmed requirement needs one |

## Decision policy

Record a decision when it changes architecture, dependencies, user-visible behavior, accessibility expectations, or delivery constraints. Update or supersede earlier decisions explicitly; do not silently turn a proposal into an accepted requirement.
