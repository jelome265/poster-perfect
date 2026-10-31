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

- `CLAUDE.md` §4 records Phase 0 as awaiting owner approval (G0). The owner later authorized a limited Phase 1 foundation task under DEC-012/DEC-013; the foundation is now merged, while G0 remains open.
- Branch protection is active on `main`: pull request required, force-push and deletion blocked, enforced for administrators with no bypass.
- G0 remains unapproved.

**Authority:** project owner approval under `CLAUDE.md` change control and §8.


### DEC-011 — Standard-library Python for documentation-integrity CI only

**Status:** Accepted (project owner, through merge of PR #10 on 2026-10-31).

The repository may use Python 3's standard library solely for the PP-VER-013 documentation validator executed by GitHub Actions (`scripts/validate_docs.py`). This is a CI-runner tooling exception; it adds no third-party package, application runtime, website dependency, package manifest or lockfile. The React/TypeScript application toolchain is separately selected under DEC-012. This decision does not authorize Python for application code or unrelated repository tooling.

**Reason:** The validator needs deterministic repository/document parsing and runs without installing packages on the GitHub-hosted Ubuntu runner. Keeping the exception narrow avoids turning a documentation check into an application-toolchain decision.

**Authority:** Project-owner merge of PR #10 at `486a81b687d6dee48802b617e0c0e9f0141bd0a8`, 2026-10-31.

### DEC-012 — Phase 1 application toolchain

**Status:** Accepted (project owner, 2026-10-31). Implemented and merged to `main` at `ad45f296b2294e65048cf27d1d5473f54e14e52a` through PR #14.

| Choice | Selected | Alternative and trade-off |
| --- | --- | --- |
| Build tool and dev server | Vite 8.3.5 | Other bundlers; Vite is the default for a client-side React application with a static build |
| React | React 19.3.1 and react-dom 19.3.1 | Confirmed in `CLAUDE.md` §4 |
| TypeScript | 5.9.3, strict mode enabled explicitly | TypeScript 7.0.2 (native) was resolved by the template and tested. 5.9 chosen for a mature stable line; revisit when 7.x is established |
| Package manager | npm with `package-lock.json`, exact pins | pnpm or yarn would be equally valid; npm needs no additional tooling |
| Node.js | 22.12 to below 23 (`.nvmrc` 22) | Node 24 is not selected for this project baseline; CI follows `.nvmrc` |
| Lint | oxlint 1.90.0 | ESLint would add plugin and configuration cost; oxlint suffices for the foundation |
| Test runner | Vitest 5.0.5, jsdom 30.1.3, Testing Library (React 16.3.3, DOM 10.4.2) | Required by Phase 1 §3.4 for unit and component testing; the smallest set that renders and queries components |
| Routing | None | Single page in the IA draft. Revisit only if the accepted IA defines more than one route |
| Styling | Neutral base CSS only | No framework until the design tokens are approved (Phase 2) |
| Formatter | None | Not selected; Phase 1 §3.4 requires a formatter only if one is selected |
| Rendering | Client-side single-page application | Static pre-rendering may be reconsidered if hosting or search requirements change |

**Rationale:** smallest toolchain that satisfies Phase 1 §3.1–§3.6 and the React/TypeScript direction in `CLAUDE.md` §4.

**Authority:** project owner ratification, 2026-10-31.

### DEC-013 — Information architecture and component inventory accepted as baseline

**Status:** Accepted (project owner, 2026-10-31).

The information architecture (`PP-ART-018`, `PP-CON-010`) and the component inventory and blueprint (`PP-ART-019`) are accepted as the structural baseline drawn from the 2026-10-30 Canva export. Phase 1 may use them as its page-model input.

Not closed by this decision: the content and web-adaptation decisions in `content-structure.md` (duplicated About paragraph, voice, statistics, testimonial permissions, service terms, portfolio permissions, copy typos, hero button destination, social profile URLs, font licence, enquiry path under `PP-CON-011`), the component link decisions (`PP-CMP-002`, `PP-CMP-005`), and responsive reflow. Phase 0 exit criteria therefore remain open, and G0 is not closed.

**Authority:** project owner acceptance, 2026-10-31.

### DEC-014 — Owner approval of conservative business, content, and design dispositions

**Status:** Accepted (project owner instruction, 2026-10-31).

The project owner authorized the maintainer to resolve the outstanding business, content, and web-design decisions from the source-derived records and to implement conservative dispositions. The canonical implementation decisions are recorded in [content structure](content-structure.md) and [design system](design-system.md).

- Preserve the one-page, seven-section hierarchy and source order.
- Present the company in company voice; remove personal education details and individual-designer framing.
- Use the source-derived customer groups and service categories as approved content, without adding pricing, guarantees, or service commitments.
- Remove duplicated About copy and unsupported statistics. Do not publish testimonials or sample artwork until customer permissions and asset rights are evidenced.
- Omit unverified service promises, unavailable social links, and unconfirmed current availability/contact/office details.
- Make “LEARN MORE” an in-page link to About; do not add a remote form, backend, CRM, or tracking.
- Use Aileron under the recorded CC0-1.0 source license; preserve the license metadata with the actual font distribution.
- Treat extracted palette values as approximate source-derived starting tokens; implement responsive reflow while preserving reading order.

This approval does not create missing contact data, confirm current availability, grant customer permission, or establish third-party asset ownership. Those remain evidence-gated Phase 0/release dependencies.

**Authority:** Project owner instruction dated 2026-10-31; PP-REQ-001, PP-REQ-004, PP-REQ-010, PP-CON-011.

### DEC-015 — Automated npm vulnerability and license policy

**Status:** Accepted (project owner instruction, 2026-10-31).

The dedicated [dependency security and license policy](security/dependency-audit.md) is normative for the npm dependency graph. CI runs npm advisory auditing, OSV vulnerability scanning, a complete lockfile SPDX inventory, and an independent OSV-Scanner/deps.dev license metadata check on pull requests, pushes to `main`, weekly schedule, and manual dispatch.

The license allowlist is exact and fail-closed. MIT, MIT-0, Apache-2.0, ISC, BSD-2-Clause, BSD-3-Clause, BlueOak-1.0.0, and CC0-1.0 are accepted in both scopes. MPL-2.0 is accepted only in development dependencies because the current lockfile uses it for the Lightning CSS development toolchain; the inventory script rejects it if it enters the runtime dependency graph. Missing metadata, unsupported expressions, and new identifiers require explicit review.

Vulnerability and license exceptions require a documented, time-bounded owner decision. CI does not automatically mutate dependencies.

**Authority:** Project owner instruction dated 2026-10-31; PP-REQ-011; PP-CON-012.

## Open decisions

| Decision | Status | Resolution gate |
| --- | --- | --- |
| Build tool, runtime, package manager, rendering model, and test runner | Resolved in DEC-012 | Reopen only through an approved change |
| Route model | One-page baseline; no client router in DEC-012/DEC-013/DEC-014; hero action targets About | Revisit only if the owner changes the accepted page/route inventory |
| Styling implementation | Neutral CSS foundation; source-derived visual values and responsive adaptations approved under DEC-014; implementation is Phase 2 work | Phase 2 after Phase 1 disposition |
| Hosting and deployment | Open | Before release planning |
| Backend or external integrations | Not established; excluded from baseline | Only if a confirmed requirement and owner approval require one |

## Decision policy

Record a decision when it changes architecture, dependencies, user-visible behavior, accessibility expectations, or delivery constraints. Update or supersede earlier decisions explicitly; do not silently turn a proposal into an accepted requirement.
