# Poster Perfect — Implementation Control Model (ICM)

**Role:** Canonical engineering control model for translating the approved design into a verified website  
**Scope:** Product intent, system boundaries, architecture, contracts, processes, effects, references, artifacts, and verification  
**Status:** Initial baseline — design-dependent entries remain unapproved until Phase 0  
**Applies to:** All implementation phases, pull requests, and release decisions

---

## 1. Purpose

The Implementation Control Model (ICM) is the control plane for engineering Poster Perfect. It defines how a requirement becomes an architecture decision, an executable behavior, a controlled effect, a repository artifact, and verifiable evidence.

The ICM is not a second product specification, not an implementation plan, and not a claim that the target system already exists.

Its governing chain is:

```text
OWNER / SOURCE REQUIREMENT
          |
          v
       SYSTEM MAP
          |
          v
     INTERFACE CONTRACT
          |
          v
        PROCESS
          |
          v
        EFFECT
          |
          v
       ARTIFACT
          |
          v
     VERIFICATION
          |
          v
  PHASE GATE / RELEASE DECISION
```

Every edge must be explainable. An unmapped requirement is an untracked requirement; the missing mapping alone does not establish whether code is implemented. An unlinked effect is an uncontrolled side effect; an unlinked artifact has unclear authority; an unlinked verification claim is not evidence.

## 2. Authority boundary

The ICM governs engineering traceability and control. It does not override the source design, approved product decisions, external standards, or actual implementation behavior.

### 2.1 Authority hierarchy

The canonical conflict-resolution hierarchy is maintained in [the reference integrity contract](06-references.md#3-authority-hierarchy). In summary:

1. Applicable law, regulation, and binding obligations.
2. Applicable security, privacy, accessibility, browser/platform, and provider constraints.
3. Current explicit project-owner decisions within the owner's authority.
4. The owner-approved Canva source as the baseline for observed visual and content facts.
5. Accepted project requirements and phase contracts.
6. Architecture and interface contracts.
7. Current implementation and executable evidence as observations of system state, not authority to weaken requirements.
8. Tooling conventions and implementation convenience.

A newer explicit owner decision may approve a change to the source-design baseline, but it cannot waive a binding legal/regulatory obligation or an applicable security/platform constraint. A lower-level document cannot silently weaken a higher-authority requirement. When implementation and contract disagree, record the gap and disposition it explicitly.

### 2.2 One canonical home per fact

Each substantive fact has one canonical owner:
- Product scope and goals: `docs/project-brief.md`.
- Source-design observations: `docs/design-reference.md`.
- Design tokens: `docs/design-system.md`.
- Section content, copy, media, and interaction inventory: `docs/content-structure.md`.
- Component inventory and responsibilities: `docs/components.md`.
- Page set, hierarchy, navigation, and section order: `docs/information-architecture.md`.
- Per-component contract details: `docs/component-blueprint.md`.
- Technical architecture: `docs/architecture.md`.
- Technical coding rules: `docs/technical-standards.md`.
- Phase delivery requirements: `docs/phases/`.
- Engineering map, contracts, processes, effects, artifact/reference routing, and evidence rules: `docs/icm/`.

The ICM references canonical facts; it must not create competing copies of them.

## 3. Control levels

The ICM uses five levels. The levels are control abstractions, not application folders or deployment tiers.

| Level | Name | Governs | Required output |
|---|---|---|---|
| **L0** | Intent and context | Purpose, stakeholders, scope, system boundary, assumptions, non-goals | Approved intent and context map |
| **L1** | Structure and ownership | Runtime topology, modules, dependency direction, boundaries, interfaces | Architecture map and ownership rules |
| **L2** | Contracts and behaviour | Inputs, outputs, state transitions, user journeys, error and fallback paths | Typed contracts and process definitions |
| **L3** | Effects and resources | Browser, network, persistence, external actions, failure semantics, resource lifecycle | Effect inventory and side-effect controls |
| **L4** | Verification and evidence | Test obligations, visual comparison, accessibility, build, release, evidence freshness | Verification matrix and phase-gate record |

References and artifacts are cross-cutting records. They establish where authority comes from and what evidence is produced at each level.

### 3.1 Level rules

- L0 determines what is allowed to exist in scope.
- L1 determines where responsibilities live and which dependencies are permitted.
- L2 determines what behavior and contracts are expected.
- L3 determines what a process may change outside pure rendering and how failure is controlled.
- L4 determines how a requirement is proven and whether the evidence is current.
- No level can claim completion on behalf of another level.

## 4. Canonical ICM documents

| Document | Canonical responsibility |
|---|---|
| [System context](00-system-context.md) | L0 purpose, actors, scope and trust boundary |
| [Architecture map](01-architecture-map.md) | L1 components, ownership, dependency direction and interfaces |
| [Contracts](02-contracts.md) | Normative requirements and boundary contracts |
| [Processes](03-processes.md) | L2 workflows, transitions, branches and failure paths |
| [Effects](04-effects.md) | L3 side-effect classification and control requirements |
| [Artifacts](05-artifacts.md) | Artifact ownership, identity, provenance and lifecycle |
| [References](06-references.md) | Source authority, reference classes and reference integrity |
| [Verification](07-verification.md) | L4 controls, test obligations, evidence and release gates |
| [Traceability register](08-traceability-register.md) | Requirement-to-evidence reconciliation |
| [Phase routing](09-phase-routing.md) | Mapping between delivery phases and ICM control levels |
| [Integrity audit](integrity-audit-2026-10-30.md) | Current ICM documentation-integrity audit evidence |

## 5. Stable identifiers

Use stable identifiers in documents, review comments, issues, commits, and evidence records.

| Record | Prefix | Example |
|---|---|---|
| Requirement | `PP-REQ` | `PP-REQ-001` |
| Map node | `PP-MAP` | `PP-MAP-001` |
| Contract | `PP-CON` | `PP-CON-001` |
| Process | `PP-PRC` | `PP-PRC-001` |
| Effect | `PP-EFF` | `PP-EFF-001` |
| Artifact | `PP-ART` | `PP-ART-001` |
| Reference | `PP-REF` | `PP-REF-001` |
| Verification control | `PP-VER` | `PP-VER-001` |
| Risk | `PP-RSK` | `PP-RSK-001` |
| Decision | `DEC` | `DEC-006` |
| Information architecture node | `PP-IA` | `PP-IA-<nnn>` (format only; assigned after source inspection) |
| Component | `PP-CMP` | `PP-CMP-<nnn>` (format only; assigned after source inspection) |

Identifiers are never reused. If a record is retired, retain its identifier and mark it retired with a successor reference where applicable.

### 5.1 Record lifecycle

Keep approval, implementation, and verification states separate.

**Specification state**
- `Proposed`: drafted but not approved.
- `Accepted`: approved as a project requirement or contract, with its scope sufficiently defined.
- `Partially specified`: the high-level intent is accepted, but some details remain dependent on a source or later decision.
- `Blocked`: cannot be resolved because a required input or decision is missing.
- `Excluded`: explicitly outside the approved baseline; a future inclusion requires change control.
- `Retired`: no longer applicable; retain its history.

**Implementation state**
- `Not started`
- `In progress`
- `Implemented`
- `Partially implemented`
- `Not applicable`

**Evidence state**
- `Not collected`
- `Collected`
- `Passed`
- `Failed`
- `Stale`
- `Waived` (owner-approved, reason and scope recorded)

Do not compress these into one ambiguous status. `Accepted` does not mean implemented; `Implemented` does not mean verified; `Passed` is only valid for the exact revision and scope tested.

## 6. Normative language

- **MUST / MUST NOT**: mandatory within its authority domain. Only the authority that owns the governing requirement may change it; an owner decision cannot waive applicable law, regulation, or binding external/platform constraints.
- **SHOULD / SHOULD NOT**: default requirement; a deviation needs a recorded reason.
- **MAY**: optional behavior.
- **UNKNOWN**: not established by current evidence.
- **TARGET**: desired future state, not evidence of implementation.
- **CURRENT**: observed in a specific repository revision or running deployment.

A requirement cannot be changed from MUST to SHOULD by editing a lower-authority document. Update the owning decision/contract and explain the change.

## 7. Traceability invariants

1. Every accepted requirement has an owner/source and one or more verification controls.
2. Every architecture component has a responsibility, owner, and permitted dependency direction.
3. Every public or cross-component interface has a contract.
4. Every stateful or interactive process defines its trigger, transition, outcome, and failure behavior.
5. Every non-pure effect has an identified initiator, target, permission, and failure policy.
6. Every release artifact is attributable to a source revision.
7. Every verification result names the control, scope, environment, date, and revision tested.
8. A target-state document is never presented as implementation evidence.
9. A test's existence is not proof that it passes; a passing test is not proof of untested properties.
10. Design facts remain blocked until observed from an inspectable source or explicitly confirmed by the owner.
11. No unrequested backend, persistence, external API, analytics, or payment behavior is assumed.
12. Merge and production-release authorization remain with the project owner.

## 8. Change control

Changes that affect scope, page hierarchy, component boundaries, runtime behavior, external effects, accessibility, dependency selection, or release behavior require:

1. Identify the affected requirement and decision.
2. Update the owning contract and dependent process/effect records.
3. Update artifact and verification mappings.
4. Evaluate downstream phase impacts.
5. Obtain owner approval when a product or material architecture decision changes.
6. Implement in a focused branch and attach revision-specific evidence.
7. Preserve the old record as history if an identifier or contract is retired.

## 9. Current baseline

At this baseline:
- React and TypeScript/TSX are accepted implementation choices.
- A component-based, maintainable frontend is accepted.
- Visual fidelity and responsive behavior are project objectives.
- WCAG 2.2 Level AA is the accessibility target.
- The owner's Canva export was inspected on 2026-10-30 (see `docs/design-reference.md`). Page structure, colors, typeface, and asset inventory are drafted from it with approximate measurements and await owner approval.
- Canvas dimensions (artboard size not confirmed), interactions, responsive variants, routing, build tool, styling strategy, hosting, and external integrations remain unknown or undecided.
- No application runtime or executable application verification exists in the repository yet.

This ICM is therefore a target-state control specification, not a claim that the website or its controls have been implemented.
