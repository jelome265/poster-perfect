# Component blueprint

**Artifact:** `PP-ART-019`  
**Class:** Contract / architecture (see `PP-CON-003`)  
**Status:** Blocked — no component is specified until Phase 0 source inspection is complete (`PP-RSK-001`, `PP-RSK-003`)  
**Canonical owner:** Component maintainer (`PP-MAP-013`); section owners for their sections; approval by the project owner  
**Update trigger:** Any change to a component's props, state, events, semantics, effects, responsive behavior, or accessibility obligations  

## 1. Purpose and status

The component blueprint records, for each component in `components.md`, the **contract** that its consumers and reviewers depend on: responsibility boundary, typed inputs, owned state, native semantics, browser effects, keyboard and focus behavior, responsive variants, asset dependencies, accessibility obligations, and verification controls.

**No component entry exists yet.** A component is listed here only when the inspected source shows a repeated pattern or a coherent region that justifies it (`components.md` criteria). Do not create entries from the component names in the earlier templates, from typical landing-page patterns, or from the project name.

## 2. Ownership split

| Fact | Canonical home | This document's role |
| --- | --- | --- |
| Component inventory, one-line responsibility, reuse | `components.md` (`PP-ART-007`) | References component IDs |
| Section and page placement | `information-architecture.md` (`PP-ART-018`) | References section IDs |
| Copy and content values passed to a component | `content-structure.md` (`PP-ART-006`) | References content rows; does not duplicate text |
| Token values and responsive rules | `design-system.md` (`PP-ART-005`) | References token and rule names |
| Effect classes and controls | `docs/icm/04-effects.md`, `docs/icm/03-processes.md` | References `PP-EFF` and `PP-PRC` IDs |
| Verification controls | `docs/icm/07-verification.md` | References `PP-VER` IDs |

## 3. Identifiers

Component IDs use the pattern `PP-CMP-<nnn>`. They are assigned after inspection, never reused, and retired rather than deleted. The `<nnn>` pattern here is a format description, not an assigned identifier.

## 4. Entry template

Copy this template for each component once it is justified by the source. Do not leave unanswered fields in an entry marked "Accepted".

```text
### PP-CMP-<nnn> — <Component name from components.md>

Specification: Blocked | Partially specified | Accepted
Implementation: Not started
Evidence: Not collected

Responsibility:        <one coherent responsibility>
Used in sections:      PP-IA-<nnn>, ...
Reused by:             <list, or "single use" with reason>
Native element(s):     <semantic element and reason; links vs buttons per PP-CON-006>

Typed inputs (props):  <name: type — data source (content row / design token / asset)>
Owned state:           <none | state name, values, valid transitions>
Events emitted:        <name: payload, when>
Content inputs:        <content-structure rows referenced by ID>

Browser effects:       <PP-EFF-00x per effect; "none" if pure render>
Keyboard and focus:    <tab order, activation keys, focus return, visible focus>
Responsive variants:   <design-system rule IDs; reflow and visibility behavior>
Asset dependencies:    <asset IDs from PP-CON-005; alt-text rule (informative / decorative)>
Accessibility:         <WCAG 2.2 AA criteria to assess; accessible name source>
Failure behavior:      <what is shown when content or asset is missing>
Verification:          <PP-VER-00x list>
Open questions:        <none | list with owner>
```

## 5. Global rules for every entry

- Props describe data, state, or callbacks the component actually needs. A boolean prop that creates unpredictable combinations is split into separate components or variants with explicit names.
- A component that performs a network request, persistence, or external navigation MUST declare the corresponding `PP-EFF` ID. No such effect is in the baseline (`PP-CON-007`).
- Shared components MUST NOT depend on a page-specific section, copy row, or route.
- Decorative elements MUST NOT be specified as operable controls.
- Native elements are preferred. A clickable container is not a substitute for a link or button.
- Local state stays in the owning component. Shared state requires a recorded justification, consistent with `docs/icm/03-processes.md` §10.

## 6. Inventory status

| Component ID | Name (from `components.md`) | Specification | Notes |
| --- | --- | --- | --- |
| Pending | Pending source inspection | Blocked | No component is specified |

## 7. Verification

| Control | What it checks against this blueprint |
| --- | --- |
| `PP-VER-016` | Every component has at least one IA section reference; every IA section with a repeated or coherent region has a component entry or a recorded local-markup reason; every entry declares effects and verification |
| `PP-VER-002` | Props are typed; no escape hatch hides an unsound boundary |
| `PP-VER-014` | Implemented components match their entries and dependency rules (Phase 2 onward) |
| `PP-VER-008` | Keyboard, focus, and accessible-name expectations hold for interactive components |
| `PP-VER-010` | Asset dependencies and alternative text match `PP-CON-005` |
| `PP-VER-015` | Declared effects match observed effects |

## 8. Change control

1. Identify the affected component(s), the section(s) they serve, and the requirement or contract.
2. Update the entry here, the inventory row in `components.md`, and any affected IA node in the same change.
3. Update `PP-CON-003` status if the change alters the component interface model.
4. Re-run the affected verification controls against the new revision.
5. Retire, do not delete, a removed component and retain its ID with a successor reference.
