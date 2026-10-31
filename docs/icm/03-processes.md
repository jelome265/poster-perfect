# L2 — Process and behaviour model

**Canonical level:** L2 — Contracts and behaviour  
**Record class:** Process specification  
**Status:** Baseline process patterns defined; design-specific user flows pending Phase 0

## 1. Process definition

A process is a named, observable sequence that transforms a trigger and its inputs into a result. Each process must identify:
- Trigger and initiating actor.
- Preconditions and required contract.
- Ordered steps and decisions.
- State read and state changed.
- Effects invoked.
- Success outcome.
- Failure/timeout/cancellation behavior where relevant.
- User-visible feedback.
- Verification control.

Do not document every JSX render as a process. A process represents meaningful behavior or an operational workflow.

## 2. Process inventory

| ID | Process | Trigger | Classification | Status |
|---|---|---|---|---|
| `PP-PRC-001` | Build and delivery | Approved source revision enters build | Engineering lifecycle | Target |
| `PP-PRC-002` | Initial page load and render | Visitor opens a website URL | Runtime lifecycle | Target |
| `PP-PRC-003` | Link/navigation activation | Visitor activates a link | User interaction | Conditional on source inventory |
| `PP-PRC-004` | Local interface interaction | Visitor operates a stateful control | User interaction | Conditional on source inventory |
| `PP-PRC-005` | Remote form/API operation | Visitor submits or requests remote data | External operation | Not in baseline; future only |
| `PP-PRC-006` | Verification and release | Candidate revision is submitted for review | Governance lifecycle | Target |
| `PP-PRC-007` | Source inspection and specification | Owner supplies an inspectable design export or view-only source | Human specification workflow | Source inspected 2026-10-30; conservative dispositions approved under DEC-014; G0 evidence dependencies remain |

## 3. PP-PRC-001 — Build and delivery

**Purpose:** turn a known source revision into a browser-deliverable artifact.  
**Contracts:** PP-CON-001, PP-CON-009, PP-CON-012.

```text
reviewed source revision
        |
        v
clean dependency installation
        |
        v
static checks and tests
        |
        v
production build
        |
        v
artifact/output inspection
        |
        v
owner-authorized deployment
```

**Effects:** PP-EFF-008, PP-EFF-009, PP-EFF-011, and PP-EFF-010 only when deployment/promotion is explicitly authorized.  
**Preconditions**
- Toolchain and package manager have been selected.
- Lockfile is committed.
- Build scripts and required configuration are documented.
- No required secret is embedded in the client artifact.

**Success**
- Checks pass on the intended commit.
- Build output is produced and attributable to that commit.
- Deployment occurs only after explicit owner authorization.

**Failure**
- Any required check or build failure blocks promotion.
- Do not mask a failure with a fallback exit code.
- Do not deploy an artifact from an unverified or unknown revision.

**Verification:** PP-VER-001, PP-VER-002, PP-VER-003, PP-VER-004, PP-VER-011, PP-VER-018.

**Implementation status:** Foundation build pipeline and production-preview HTTP/asset smoke are implemented. Dedicated npm advisory, OSV vulnerability, SPDX inventory, and deps.dev license checks passed on PR #15 merge SHA `9e81adb7a178db9c48106292b3351d0bafe0a9e8` in Actions run `41172108087`.

## 4. PP-PRC-002 — Initial page load and render

**Purpose:** present the approved page to a visitor.  
**Contracts:** PP-CON-001, PP-CON-002, PP-CON-011.

```text
visitor navigates to URL
        |
        v
browser requests document/resources
        |
        v
delivery layer returns application assets
        |
        v
application entry executes
        |
        v
page composition is rendered
        |
        v
visitor can perceive and operate available content
```

This is a logical target flow. Exact document delivery, route fallback, rendering mode, and asset strategy depend on Phase 1 toolchain and hosting decisions.

**Effects:** PP-EFF-001 and PP-EFF-004; PP-EFF-005 only if an approved remote read is part of the page contract.  
**Preconditions**
- Production or preview artifact exists.
- Requested URL is in the supported route set.
- Required assets are part of the delivery or intentionally external.

**Success**
- The expected page renders.
- Content hierarchy and semantics are present.
- Required assets load.
- There are no uncaught application errors.

**Failure**
- Missing document/asset, unavailable route, or runtime exception must not silently render a false success state.
- Where an error page is required, its content and behavior must be specified by the project owner or derived from an approved route contract.

**Verification:** PP-VER-004, PP-VER-005, PP-VER-006, PP-VER-010.

**Implementation status:** Partially implemented: the neutral `App` shell renders through the selected React/Vite runtime. The approved content/page composition remains blocked on G0/G2; no business content or designed sections are implemented.

## 5. PP-PRC-003 — Link and navigation activation

**Purpose:** move a visitor to an approved destination, including the company-approved prospective-customer enquiry destination where applicable.  
**Contracts:** PP-CON-006, PP-CON-011.

**Preconditions**
- The interaction inventory contains an explicit destination.
- The element is a semantic anchor or equivalent native navigation control.
- External-destination behavior is documented where applicable.

**Success**
- Browser navigation resolves to the intended destination.
- The link has an accessible name and meaningful destination.
- Focus and keyboard activation work.

**Failure**
- Unknown or empty destinations are not shipped as misleading links.
- Broken or prohibited destinations are recorded and corrected.
- Opening a new browsing context must be justified and communicated; do not add it by default.

**Effects:** PP-EFF-003.  
**Verification:** PP-VER-008, PP-VER-009 and PP-VER-017.

**Implementation status:** Conditional; actual links unknown.

## 6. PP-PRC-004 — Local interface interaction

**Purpose:** support a stateful control that is actually present in the approved design.  
**Contracts:** PP-CON-006, PP-CON-008.

Examples may include a menu, accordion, tab, dialog, dismissible notice, or local selector. These are examples, not current requirements.

**Preconditions**
- The source or owner-approved behavior establishes the control.
- The state model and keyboard interaction are documented.
- A semantic native element is preferred where it provides the required behavior.

**Success**
- The control transitions from a defined prior state to a defined next state.
- The rendered state matches the model.
- Keyboard and assistive technology users receive equivalent access.

**Failure**
- An invalid transition leaves the control in a safe, understandable state.
- State cannot become contradictory between visual output and accessible state.
- A purely visual toggle is not represented as a successful remote operation.

**Effects:** PP-EFF-001, PP-EFF-002, and PP-EFF-003 when programmatic focus/navigation behavior is required.  
**Verification:** PP-VER-008, PP-VER-009, and component tests where configured.

**Implementation status:** Conditional; no specific stateful control has been confirmed.

## 7. PP-PRC-005 — Remote form or API operation

**Status:** Excluded from the current baseline.  
**Contract:** PP-CON-007 (future extension only).  
**Effects:** PP-EFF-005, PP-EFF-006, and PP-EFF-007 are inactive while this process is excluded; activate them only through approved scope change and detailed effect contracts.  
**Verification:** Not applicable while excluded. Before activation, define process-specific tests and rerun PP-VER-015 for the expanded dependency/effect surface.

This process exists as a controlled extension point, not an implementation instruction.

Before this process becomes active, the project owner must approve:
- Business purpose and target user.
- Exact data fields and data classification.
- Destination system and API contract.
- Authentication and credential handling.
- Validation and error semantics.
- Timeouts, cancellation, retry and duplicate-submission behavior.
- Privacy, retention, consent and security requirements.
- User-visible pending, success, and failure states.
- Test environment and production verification.

**Minimum control flow if approved**

```text
user submits
    |
    v
client validates for usability
    |
    v
request sent to approved service
    |
    +---- failure/timeout ---> explicit error state
    |
    v
authoritative service validates and processes
    |
    +---- rejection ---------> actionable validation/error state
    |
    v
confirmed result returned
    |
    v
success state shown only after confirmation
```

The browser is not the authority for a remote operation. Client-side validation does not replace server-side validation.

## 8. PP-PRC-006 — Verification, review and release

**Purpose:** reconcile the candidate implementation with approved requirements and authorize controlled repository/release changes.  
**Contract:** PP-CON-009.

```text
change proposed
    |
    v
requirements/contracts updated
    |
    v
implementation on focused branch
    |
    v
checks and evidence captured for commit
    |
    v
pull request review
    |
    +---- findings ---> remediate and rerun affected controls
    |
    v
owner approval
    |
    v
merge / release only as explicitly authorized
```

**Effects:** PP-EFF-009 for candidate build artifact generation; PP-EFF-010 only for an explicitly authorized merge, deployment, or production promotion.  
**Invariants**
- Evidence identifies the commit tested.
- A changed commit invalidates evidence for changed behavior until affected checks are rerun.
- Mergeability and passing CI are not owner approval.
- No merge or production deployment is performed without explicit owner authorization.

**Verification:** PP-VER-001 through PP-VER-015 as applicable.

## 9. PP-PRC-007 — Source inspection and specification

**Purpose:** convert the owner-supplied Canva source into a verified page, content, asset, interaction, and responsive specification.  
**Contracts:** PP-CON-002, PP-CON-004, PP-CON-005, PP-CON-006, PP-CON-008, PP-CON-011.  
**Initiator:** Project owner supplies an inspectable export or view-only reference.  
**Owner:** Project owner for source authority and scope approval; maintainer for recording and reconciling the specification.

**Preconditions**
- The supplied design can be inspected at sufficient resolution.
- Required source assets can be inspected or are explicitly recorded as unavailable.
- The project brief and source inventory are available.

**Process**
1. Record source identity, inspection date, dimensions, and page/artboard count.
2. Reconcile page sections, content hierarchy, and exact visible copy.
3. Inventory images, fonts, icons, dimensions, provenance, and usage constraints.
4. Identify visible controls, destinations, and confirmed behavior; do not infer behavior from appearance alone.
5. Record source-responsive variants and proposed web adaptations.
6. Mark measurements, estimates, and unknowns distinctly.
7. Update canonical source, design-token, content, asset, interaction, and decision records.
8. Obtain owner approval for material adaptations and scope.

**Success:** all in-scope source facts are recorded and unresolved questions are explicit; the owner approves the web interpretation.  
**Failure/blocking:** if the source is inaccessible or material assets/requirements cannot be established, keep Phase 0 blocked. Do not substitute guesses.

**Effects:** no website runtime effect. Outputs are documentation and source-inventory artifacts, not application behavior.  
**Verification:** PP-VER-005, PP-VER-006, PP-VER-010, PP-VER-013, and PP-VER-017.

## 10. State-transition discipline

For every stateful process:
- Enumerate valid states.
- Enumerate allowed transitions.
- Define invalid transitions.
- Define who can trigger each transition.
- Define whether a transition is reversible.
- Identify the source of truth for the state.
- Identify any asynchronous or external boundary.
- Define what evidence proves the transition behavior.

Do not introduce global state management unless multiple independent components need shared state and local component state cannot express the contract clearly.

## 11. Process completion rule

A process is complete only when its contract is accepted, implementation is present, normal and relevant failure paths are verified, effects are accounted for, and evidence references the current revision. A diagram alone is not implementation.
