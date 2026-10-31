# L2 — Requirement and interface contracts

**Canonical level:** L2 — Contracts and behaviour  
**Record class:** Normative project contract index  
**Status:** Initial requirement set accepted; design-dependent interface contracts pending Phase 0

## 1. Purpose

This document defines requirements and the boundary contracts required to implement Poster Perfect. It connects owner-approved intent to verifiable behavior.

A contract is not a suggestion and is not implementation evidence. If implementation cannot satisfy an accepted contract, record a gap and obtain an approved disposition; do not silently weaken the contract.

## 2. Contract structure

Every material contract must define, as applicable:

- Stable ID and title.
- Authority and source requirement.
- Owning component and consuming component.
- Purpose and explicit scope.
- Inputs, outputs, types, and invariants.
- Preconditions and postconditions.
- State transitions and error cases.
- Accessibility and responsive obligations.
- Effects and external dependencies.
- Verification controls and evidence requirements.
- Specification, implementation, and evidence status.

Not every visual component needs a separate long-form document. The contract must be detailed enough to make the boundary unambiguous and testable.

## 3. Accepted project requirements

| ID | Requirement | Authority | Status | Verification route |
|---|---|---|---|---|
| `PP-REQ-001` | Recreate the owner-supplied Canva design as a working website. | Owner request and project brief | Accepted | Design fidelity controls and owner review |
| `PP-REQ-002` | Use React with TypeScript and TSX. | Owner-approved technical direction | Accepted | Type configuration, source inspection, build |
| `PP-REQ-003` | Use a maintainable component-based frontend structure. | Owner-approved technical direction | Accepted | Architecture and component review |
| `PP-REQ-004` | Preserve the source design's visual identity while adapting it to web viewports. | Project brief | Accepted | Visual comparison and responsive matrix |
| `PP-REQ-005` | Use WCAG 2.2 Level AA as the accessibility engineering target. | Project accessibility decision | Accepted target | Accessibility assessment; no presumption of conformance |
| `PP-REQ-006` | Do not invent source-specific colors, typography, dimensions, assets, content, page structure, or interactions. | Project brief and source-inspection limitation | Accepted | Phase 0 source reconciliation |
| `PP-REQ-007` | Do not add a backend, API, persistence, analytics, payments, or other external integration without an approved requirement. | Project scope boundary | Accepted | Dependency/effect review and decision log |
| `PP-REQ-008` | Merge and production-release authorization remain with the project owner. | Project workflow rule | Accepted | Pull request and release disposition |
| `PP-REQ-009` | Phase 0 produces an information architecture and component blueprint derived from the inspected source and approved requirements, before Phase 1 foundational technical decisions are made. | DEC-007; project owner directive | Accepted | Phase 0 reconciliation (`PP-VER-016`) and `PP-VER-013` |
| `PP-REQ-010` | Poster Perfect is a company portfolio for a graphic design business, not an individual designer's personal portfolio; it must present the company's approved offering and work, communicate current availability for new projects, and provide a clear owner-approved enquiry path for prospective customers. | DEC-008; project owner clarification dated 2026-10-30 | Accepted; contact/availability and publication-rights evidence remains pending Phase 0 | Company-purpose and customer-journey reconciliation (`PP-VER-017`) |
| `PP-REQ-011` | The complete locked npm dependency graph must be scanned for known vulnerabilities and inventoried against an explicit SPDX license policy; unknown licenses and scope violations must fail closed. | DEC-015; project owner instruction dated 2026-10-31 | Accepted | Dependency vulnerability and license audit (`PP-VER-018`) |

This is the accepted requirement baseline as of DEC-008. New requirements receive new IDs; do not repurpose an existing ID to mean something different.

## 4. Boundary contracts

### PP-CON-001 — Application runtime

**Owner:** Application composition  
**Consumers:** Browser runtime and page composition  
**Requirement:** PP-REQ-002

The application runtime MUST be built with React and TypeScript/TSX. Its exact entry point, rendering mode, bundler, route model, and build output remain implementation decisions for Phase 1.

**Inputs:** Browser document and application assets; any runtime configuration only if approved.  
**Outputs:** Rendered page content and declared browser interactions.  
**Invariants:** No untyped escape hatch may be used to hide a broken boundary; no remote service is implied by this contract.  
**Verification:** Type check, development-server smoke test, and production build.

**Specification:** Accepted  
**Implementation:** Not started  
**Evidence:** Not collected

### PP-CON-002 — Page composition

**Owner:** Page/route composition  
**Consumers:** Application composition and page sections  
**Requirement:** PP-REQ-001, PP-REQ-003, PP-REQ-004, PP-REQ-009

A page MUST compose the sections in the approved source order and preserve the approved content hierarchy. Page count, route names, section order, and exact content are unknown until Phase 0; the accepted structure is recorded in `information-architecture.md` (`PP-ART-018`) under `PP-CON-010`.

**Inputs:** Approved page specification, tokens, and assets.  
**Outputs:** A semantic page composition.  
**Invariants:** No invented section, hidden content, or silent copy rewrite; no duplicated shared composition without reason.  
**Verification:** Page inventory reconciliation, DOM/reading-order review, visual comparison.

**Specification:** Partially specified  
**Implementation:** Not started  
**Evidence:** Not collected

### PP-CON-003 — Component interface

**Owner:** Component implementation  
**Consumers:** Page and section composition  
**Requirement:** PP-REQ-003, PP-REQ-009

Every reusable component MUST expose an explicit typed interface. Props must describe data, state, or callbacks that the component actually needs. Components MUST NOT conceal page-specific network, persistence, or business behavior. Per-component details are recorded in `component-blueprint.md` (`PP-ART-019`).

**Inputs:** Typed props and explicitly owned local state.  
**Outputs:** Semantic rendered content and explicitly declared events.  
**Invariants:** Clear single responsibility; no circular dependency; links and buttons use correct native semantics.  
**Verification:** Type checks, component review, interaction tests where applicable.

**Specification:** Accepted  
**Implementation:** No reusable page/section components introduced; neutral application shell only  
**Evidence:** PP-ART-020; strict type check and shell smoke at `ad45f296`

### PP-CON-004 — Design token contract

**Owner:** Design tokens and styling  
**Consumers:** Pages, sections, shared components  
**Requirement:** PP-REQ-001, PP-REQ-004

Shared visual values MUST be derived from the inspected and approved source or recorded as owner-approved adaptations. Tokens MUST describe semantic roles rather than merely duplicate raw values.

**Inputs:** Measured source tokens and approved responsive adaptations.  
**Outputs:** Consistent styles across relevant components.  
**Invariants:** No guessed canonical palette, typography, spacing scale, or breakpoints.  
**Verification:** Design-token inventory reconciliation and rendered comparison.

**Specification:** Partially specified; source values are inventoried, with measurement and owner approval pending  
**Implementation:** Not started  
**Evidence:** Not collected

### PP-CON-005 — Asset contract

**Owner:** Static asset inventory and consuming component  
**Consumers:** Pages and components  
**Requirement:** PP-REQ-001, PP-REQ-006

An included asset MUST have a traceable source, intended use, and appropriate web treatment. Informative imagery requires an appropriate text alternative; decorative imagery must not create redundant announcements.

**Inputs:** Owner-approved source asset and usage constraints.  
**Outputs:** Browser-loadable asset with defined dimensions/crop/alternative text as applicable.  
**Invariants:** No unapproved substitutions; no invented brand assets; no unnecessary original-resolution payloads.  
**Verification:** Asset inventory, visual review, network/resource inspection, accessibility review.

**Specification:** Partially specified; assets are inventoried from the export, with originals, provenance, and publication permissions pending  
**Implementation:** Not started  
**Evidence:** Not collected

### PP-CON-006 — Interaction contract

**Owner:** Page or component that owns the interaction  
**Consumers:** Website visitor and browser runtime  
**Requirement:** PP-REQ-001, PP-REQ-005

Every control MUST have a documented trigger and observable outcome. Navigation MUST use links; actions MUST use buttons or an appropriate native control. A decorative element MUST NOT be presented as an operable control.

**Inputs:** User action and any typed control value.  
**Outputs:** Navigation, local state transition, or explicitly approved external operation.  
**Invariants:** Keyboard operation, visible focus, accessible name, and meaningful failure feedback when an operation can fail.  
**Verification:** Interaction inventory, keyboard checks, functional tests.

**Specification:** Partially specified; visible controls are inventoried, with destinations and behavior awaiting owner decisions  
**Implementation:** Not started  
**Evidence:** Not collected

### PP-CON-007 — External integration boundary

**Owner:** Project owner and integration adapter, if introduced  
**Consumers:** Approved page/process  
**Requirement:** PP-REQ-007

No external API, remote form submission, analytics provider, payment provider, or durable persistence is part of the baseline. If one is approved, its request/response schema, data classification, credential boundary, permissions, timeout, error policy, retry behavior, privacy obligations, and verification must be contracted before implementation.

**Specification:** Excluded from baseline; a future inclusion requires a new approved contract  
**Implementation:** Not applicable  
**Evidence:** Not applicable

### PP-CON-008 — Accessibility and responsive contract

**Owner:** Page/component implementation  
**Consumers:** Visitors using different viewport sizes, browsers, and input/assistive technologies  
**Requirement:** PP-REQ-004, PP-REQ-005

The implementation MUST follow the approved responsive interpretation and be assessed against applicable WCAG 2.2 AA criteria. Semantic structure, keyboard operation, visible focus, readable content, contrast, zoom/reflow, and appropriate alternatives are mandatory review dimensions.

**Specification:** Partially specified; WCAG target accepted, with page-specific responsive and semantic criteria pending Phase 0  
**Implementation:** Not started  
**Evidence:** Not collected

### PP-CON-009 — Change and release contract

**Owner:** Project owner  
**Consumers:** Contributors and maintainers  
**Requirement:** PP-REQ-008

Changes MUST be made on a reviewable branch with scope and verification recorded. A passing CI run does not authorize merging. The project owner authorizes merge and any production release.

**Specification:** Accepted  
**Implementation:** Not applicable (governance contract; not application runtime code)  
**Evidence:** Not collected per individual change

### PP-CON-010 — Information architecture and navigation

**Owner:** Page composition (`PP-MAP-011`)  
**Consumers:** Application composition, page sections, navigation controls (`PP-CON-006`), verification  
**Requirement:** PP-REQ-001, PP-REQ-006, PP-REQ-009

The information architecture MUST define every in-scope page or route, section, navigation entry, and anchor target exactly once, with one parent, a stated order, and a reference to its content, interaction, responsive, and component records. A navigation entry MUST reference an observed destination in the interaction inventory. No route, page, section, or navigation entry MAY be added, removed, or reordered without an approved change to `information-architecture.md`. The set of routes is unknown until Phase 0.

**Inputs:** Inspected source page/artboard inventory; accepted owner-approved business and functional requirements; owner-approved responsive interpretation.  
**Outputs:** Accepted IA record (`PP-ART-018`) used as the input to page composition and to Phase 1 routing decisions.  
**Invariants:** Unique identifiers; no orphan nodes; DOM order matches visual reading order unless an owner-approved adaptation says otherwise; no route or section is inferred from the project name.  
**Verification:** `PP-VER-016`, `PP-VER-005`, `PP-VER-009`, `PP-VER-014` (after composition exists).

**Specification:** Partially specified; source hierarchy and navigation are drafted, with owner approval and web adaptations pending  
**Implementation:** Not started  
**Evidence:** Not collected

### PP-CON-011 — Company positioning, portfolio and customer engagement

**Business content authority:** Project owner  
**Implementation owner:** Page implementation owner (PP-MAP-011)  
**Consumers:** Page and section composition, content inventory, navigation and interaction controls  
**Requirement:** PP-REQ-010; related contracts PP-CON-002, PP-CON-005, PP-CON-006 and PP-CON-010

The website MUST represent Poster Perfect at company level as a graphic design business, not as an individual designer's personal portfolio. It MUST present owner-approved company identity and positioning, the approved service/capability offering, selected creative work the company is authorized to publish, its current availability for new work, and an accessible, owner-approved path for prospective customers to make enquiries.

The exact company description, target customer segments, service list, portfolio items, publication permissions, supporting claims, availability wording, call-to-action copy, contact destination and customer journey are not established by this contract. They MUST be confirmed and recorded during Phase 0. Availability MUST be reconfirmed before publication because it can change.

The website MUST NOT fabricate or imply company registration, size, team structure, client relationships, testimonials, awards, credentials, metrics, project outcomes, prices, guarantees, or service commitments. Portfolio materials MUST have an identified source and owner-confirmed permission for publication; confidential client information MUST NOT be exposed.

A business requirement not represented in the Canva source may be implemented only as an explicitly recorded and owner-approved web adaptation. The Canva source remains the visual/content reference, not an authorization to invent business facts.

**Inputs:** Owner-approved company profile, positioning, service/capability content, publishable portfolio material, current availability statement, and enquiry destination/behavior.  
**Outputs:** Company-level presentation and a documented prospective-customer enquiry path.  
**Invariants:** No personal-portfolio framing; no invented business claims; no unapproved portfolio publication; no stale availability claim; no inert or unverified enquiry control. Remote submission, data persistence, CRM, or other external integration is not implied and remains subject to PP-REQ-007 and PP-CON-007.  
**Verification:** PP-VER-017, PP-VER-005, PP-VER-009, PP-VER-010 and owner review before release.

**Specification:** Partially specified; business purpose accepted, detailed content and journey pending Phase 0  
**Implementation:** Not started  
**Evidence:** Not collected

### PP-CON-012 — Dependency security and license compliance

**Owner:** Build and delivery process (`PP-PRC-001`)  
**Consumers:** Maintainers, project owner, and release verification  
**Requirement:** PP-REQ-011

Every npm dependency represented in the committed `package-lock.json`, including transitive, optional, and development dependencies, MUST be included in the vulnerability and license audit.

The audit MUST:
- run npm advisory auditing and an independent OSV vulnerability scan against the locked dependency graph;
- inventory every lockfile package with its exact version, license identifier, and dependency scope;
- cross-check license metadata against the approved SPDX allowlist;
- reject missing/unsupported metadata, any unapproved identifier, and a development-only exception in the runtime graph;
- produce revision-attributable machine-readable and human-readable evidence.

**Inputs:** `package.json`, `package-lock.json`, the accepted SPDX policy in DEC-015, and current advisory/license metadata from configured sources.  
**Outputs:** CI status, OSV results/SARIF where enabled, and JSON/Markdown package license inventory.  
**Invariants:** CI does not run automatic dependency fixes; no blanket vulnerability or license ignores; the lockfile is not rewritten by the audit; scanner/network failure is not treated as a clean result; non-npm assets remain subject to separate provenance and rights review.  
**Verification:** PP-VER-018.

**Specification:** Accepted under DEC-015  
**Implementation:** Added to PR #15 candidate; exact-head CI evidence pending  
**Evidence:** To be recorded after the dedicated workflow passes.


## 5. Conditional contracts

The following are not active requirements. If introduced by an approved scope change, create a dedicated contract before implementation:

- Form submission or email/contact automation.
- Remote API reads or writes.
- Browser storage, IndexedDB, local persistence, or cookies.
- Authentication or user accounts.
- Analytics, tracking, advertising, or telemetry.
- Payment, subscription, booking, or transaction handling.
- CMS or administrator editing workflows.
- File uploads/download processing.

A button in the artwork is evidence of a visual element, not enough evidence to infer its system behavior.

## 6. Contract change rules

- Update the original contract when its meaning is clarified without changing the requirement.
- Create a new contract for a genuinely new interface or behavior.
- Record breaking changes and affected consumers.
- Update the process and effect maps whenever a contract changes its state or side effects.
- Update L4 verification mappings before marking the change complete.
- Never use a test-only fake as proof of a production boundary unless the property under test is specifically the fake-independent contract.

## 7. Contract exit conditions

A contract may be marked accepted only when its authority, owner, scope, inputs, outputs, invariants, and verification obligations are clear. It may be marked implemented only when code exists. It may be marked verified only when current evidence passes for that implementation.
