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

This is the complete accepted requirement baseline at the time of writing. New requirements receive new IDs; do not repurpose an existing ID to mean something different.

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
**Requirement:** PP-REQ-001, PP-REQ-003, PP-REQ-004

A page MUST compose the sections in the approved source order and preserve the approved content hierarchy. Page count, route names, section order, and exact content are unknown until Phase 0.

**Inputs:** Approved page specification, tokens, and assets.  
**Outputs:** A semantic page composition.  
**Invariants:** No invented section, hidden content, or silent copy rewrite; no duplicated shared composition without reason.  
**Verification:** Page inventory reconciliation, DOM/reading-order review, visual comparison.

**Specification:** Partially defined  
**Implementation:** Not started  
**Evidence:** Not collected

### PP-CON-003 — Component interface

**Owner:** Component implementation  
**Consumers:** Page and section composition  
**Requirement:** PP-REQ-003

Every reusable component MUST expose an explicit typed interface. Props must describe data, state, or callbacks that the component actually needs. Components MUST NOT conceal page-specific network, persistence, or business behavior.

**Inputs:** Typed props and explicitly owned local state.  
**Outputs:** Semantic rendered content and explicitly declared events.  
**Invariants:** Clear single responsibility; no circular dependency; links and buttons use correct native semantics.  
**Verification:** Type checks, component review, interaction tests where applicable.

**Specification:** Accepted  
**Implementation:** Not started  
**Evidence:** Not collected

### PP-CON-004 — Design token contract

**Owner:** Design tokens and styling  
**Consumers:** Pages, sections, shared components  
**Requirement:** PP-REQ-001, PP-REQ-004

Shared visual values MUST be derived from the inspected and approved source or recorded as owner-approved adaptations. Tokens MUST describe semantic roles rather than merely duplicate raw values.

**Inputs:** Measured source tokens and approved responsive adaptations.  
**Outputs:** Consistent styles across relevant components.  
**Invariants:** No guessed canonical palette, typography, spacing scale, or breakpoints.  
**Verification:** Design-token inventory reconciliation and rendered comparison.

**Specification:** Blocked on Phase 0  
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

**Specification:** Blocked on Phase 0  
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

**Specification:** Pending source inspection  
**Implementation:** Not started  
**Evidence:** Not collected

### PP-CON-007 — External integration boundary

**Owner:** Project owner and integration adapter, if introduced  
**Consumers:** Approved page/process  
**Requirement:** PP-REQ-007

No external API, remote form submission, analytics provider, payment provider, or durable persistence is part of the baseline. If one is approved, its request/response schema, data classification, credential boundary, permissions, timeout, error policy, retry behavior, privacy obligations, and verification must be contracted before implementation.

**Specification:** Not applicable at baseline; future contract required if scope changes  
**Implementation:** Not started  
**Evidence:** Not applicable

### PP-CON-008 — Accessibility and responsive contract

**Owner:** Page/component implementation  
**Consumers:** Visitors using different viewport sizes, browsers, and input/assistive technologies  
**Requirement:** PP-REQ-004, PP-REQ-005

The implementation MUST follow the approved responsive interpretation and be assessed against applicable WCAG 2.2 AA criteria. Semantic structure, keyboard operation, visible focus, readable content, contrast, zoom/reflow, and appropriate alternatives are mandatory review dimensions.

**Specification:** Target accepted; page-specific criteria pending Phase 0  
**Implementation:** Not started  
**Evidence:** Not collected

### PP-CON-009 — Change and release contract

**Owner:** Project owner  
**Consumers:** Contributors and maintainers  
**Requirement:** PP-REQ-008

Changes MUST be made on a reviewable branch with scope and verification recorded. A passing CI run does not authorize merging. The project owner authorizes merge and any production release.

**Specification:** Accepted  
**Implementation:** Applies to repository workflow  
**Evidence:** PR/release records required per change

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
