# Component blueprint

**Artifact:** `PP-ART-019`  
**Class:** Contract / architecture (see `PP-CON-003`)  
**Status:** Source-derived five-component inventory accepted under DEC-013/DEC-018. All component regions remain in the seven-section composition; missing assets, claims, permissions and destinations use explicit placeholder states.
**Canonical owner:** Component maintainer (`PP-MAP-013`, role as defined in `icm/01-architecture-map.md`)  
**Producer:** Component maintainer; Section implementation owner (`PP-MAP-012`) for entries in their section  
**Approval:** Project owner  
**Update trigger:** Any change to a component's props, state, events, semantics, effects, responsive behavior, or accessibility obligations  

## 1. Purpose and status

The component blueprint records, for each component in `components.md`, the **contract** that its consumers and reviewers depend on: responsibility boundary, typed inputs, owned state, native semantics, browser effects, keyboard and focus behavior, responsive variants, asset dependencies, accessibility obligations, and verification controls.

Five component entries were derived from the Canva export (`PP-CMP-001` to `PP-CMP-005`) and their structure was accepted under DEC-013. DEC-018 confirms all component regions remain part of the seven-section composition. Where original assets, claim substantiation, permissions or destinations are missing, define typed placeholder inputs rather than excluding the component.

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

## 6. Entries and inventory status

Entries below record the source-derived patterns (2026-10-30). The structural inventory is owner-accepted under DEC-013/DEC-018; individual implementation contracts remain partially specified. All five component regions remain part of the seven-section composition, with explicit placeholder inputs where values, assets, claims or permissions are unavailable.

### PP-CMP-001 — ValueBadge

Specification: Partially specified | Implementation: Not started | Evidence: Not collected

- Responsibility: show one text-only value point; the original decorative check icon is unavailable and is not recreated.
- Used in sections: `PP-IA-004`. Reused by: value band only (single instance per point; 4 instances).
- Native element: list item (`li`) in a list. Not interactive.
- Typed inputs: `label: string` (source text: "RELIABILITY", "PERSONALIZED APPROACH", "TIMELY DELIVERY", "HIGH STANDARDS"). No icon input is present in the initial baseline.
- Owned state: none. Events emitted: none.
- Browser effects: none (`PP-EFF` not triggered).
- Keyboard and focus: not applicable (not interactive).
- Responsive variants: none in source. Reflow of four items is an open question.
- Asset dependencies: check-mark icon. Original vector not supplied.
- Accessibility: icon is decorative and hidden from assistive technology; label is the accessible text. Contrast of the label on the blue band to be checked.
- Failure behavior: open question.
- Verification: `PP-VER-002`, `PP-VER-005`, `PP-VER-008`.

### PP-CMP-002 — ServiceCard

Specification: Partially specified | Initial implementation: source label plus explicit image placeholder under DEC-018 | Evidence: pending Phase 2

- Responsibility: preserve the source service image/card pattern and label, with an explicit placeholder until an original, permission-cleared image is available.
- Used in sections: `PP-IA-005`. Reused by: services only (3 instances).
- Native element: figure with caption (`figure` / `figcaption`) if non-interactive. A link element if the owner approves links.
- Typed inputs: `label: string`; `image: AssetSlot` (resolved asset or named placeholder); `altText: string` when a real informative image is supplied. A placeholder is not a portfolio claim.
- Owned state: none.
- Browser effects: none if non-interactive. If linked, the destination type is an open question.
- Keyboard and focus: open question. It depends on whether the card links to portfolio content.
- Responsive variants: none in source. Reflow of three cards is an open question.
- Asset dependencies: three sample images. Originals not supplied; publication permission pending (`content-structure.md`, Owner decisions 6).
- Accessibility: alternative text required for each image, and it must describe the sample rather than repeat the label.
- Failure behavior: open question (what is shown if a sample is withdrawn).
- Verification: `PP-VER-002`, `PP-VER-005`, `PP-VER-010`.

### PP-CMP-003 — StatTile

Specification: Partially specified | Implementation: Placeholder tile retained under DEC-018 | Evidence: pending Phase 2

- Responsibility: preserve one source statistic tile; render a placeholder until the numerical claim and label are substantiated and approved.
- Used in sections: `PP-IA-006`. Reused by: statistics only (3 instances).
- Native element: list item (`li`) or a group with the figure and label. Not interactive.
- Typed inputs: `value: string | null`; `label: string | null`; `placeholder: string`. Do not pass the source's unverified values as displayed claims.
- Owned state: none. Browser effects: none.
- Keyboard and focus: not applicable.
- Responsive variants: none in source.
- Accessibility: value and label read together as one statement. Open question: whether "Worldwide" should be a variant with no label, or whether it should carry a figure.
- Failure behavior: open question.
- Verification: `PP-VER-002`, `PP-VER-005`. Claims are subject to owner confirmation (`content-structure.md`, Owner decisions 3).

### PP-CMP-004 — TestimonialCard

Specification: Partially specified | Implementation: Placeholder testimonial card retained under DEC-018 | Evidence: pending Phase 2

- Responsibility: preserve one source testimonial card; display a placeholder until quote/attribution publication permission and any material-claim evidence are approved.
- Used in sections: `PP-IA-007`. Reused by: testimonials only (3 instances).
- Native element: figure with block quote and caption (`figure` / `blockquote` / `figcaption`). Not interactive.
- Typed inputs: `quote: string | null`; `attribution: string | null`; `roleAndLocation: string | null`; `placeholder: string`. Populate quote and attribution only after the required publication permission.
- Owned state: none. Browser effects: none.
- Keyboard and focus: not applicable.
- Responsive variants: none in source.
- Publication: each card may publish only after the owner confirms permission for the quote and attribution (`content-structure.md`, Owner decisions 4).
- Accessibility: the quote is in a block quote, with the attribution in the caption. Quotation marks come from the markup, not from typed characters.
- Verification: `PP-VER-002`, `PP-VER-005`, `PP-VER-006`.

### PP-CMP-005 — BrandLockup

Specification: Partially specified | Implementation: Not started | Evidence: Not collected

- Responsibility: preserve the source logo lockup; render the wordmark and reserve the mark slot until the original logo vector is supplied. Do not recreate the symbol.
- Used in sections: `PP-IA-002` (hero) and `PP-IA-008` (footer). Reused by: hero and footer (2 instances).
- Native element: open question. A link to the home page, or a plain image group, depending on the owner's decision (`content-structure.md`, Owner decisions 9 and the logo-lockup row).
- Typed inputs: none. The lockup has a fixed brand asset. Its only variant is the background, and both instances sit on dark navy.
- Owned state: none. Browser effects: none, unless linked.
- Keyboard and focus: open question. Depends on the link decision.
- Asset dependencies: logo mark vector. Not supplied in the export; the owner must supply it.
- Accessibility: alternative text "Poster Perfect" for a link, or a decorative mark with the wordmark as text.
- Verification: `PP-VER-008`, `PP-VER-010`.

## 7. Inventory status

| Component ID | Name (from `components.md`) | Specification | Notes |
| --- | --- | --- | --- |
| `PP-CMP-001` | ValueBadge | Partially specified | Reflow and label contrast open |
| `PP-CMP-002` | ServiceCard | Partially specified | Link decision and alternative text open; permissions pending |
| `PP-CMP-003` | StatTile | Placeholder tile retained under DEC-018 | Three-column source layout; do not render unsubstantiated source values |
| `PP-CMP-004` | TestimonialCard | Placeholder card retained under DEC-018 | Three-card source layout; quotes/attributions await permissions and claim substantiation |
| `PP-CMP-005` | BrandLockup | Partially specified | Text-only wordmark in baseline; original symbol unavailable |

## 8. Verification

| Control | What it checks against this blueprint |
| --- | --- |
| `PP-VER-016` | Every component has at least one IA section reference; every IA section with a repeated or coherent region has a component entry or a recorded local-markup reason; every entry declares effects and verification |
| `PP-VER-002` | Props are typed; no escape hatch hides an unsound boundary |
| `PP-VER-014` | Implemented components match their entries and dependency rules (Phase 2 onward) |
| `PP-VER-008` | Keyboard, focus, and accessible-name expectations hold for interactive components |
| `PP-VER-010` | Asset dependencies and alternative text match `PP-CON-005` |
| `PP-VER-015` | Declared effects match observed effects |

## 9. Change control

1. Identify the affected component(s), the section(s) they serve, and the requirement or contract.
2. Update the entry here, the inventory row in `components.md`, and any affected IA node in the same change.
3. Update `PP-CON-003` status if the change alters the component interface model.
4. Re-run the affected verification controls against the new revision.
5. Retire, do not delete, a removed component and retain its ID with a successor reference.
