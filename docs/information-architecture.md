# Information architecture

**Artifact:** `PP-ART-018`  
**Class:** Specification (contract-backed; see `PP-CON-010`)  
**Status:** Blocked — Phase 0 source inspection required (`PP-RSK-001`, `PP-RSK-002`)  
**Canonical owner:** Page implementation owner (`PP-MAP-011`, role as defined in `icm/01-architecture-map.md`)  
**Producer:** Page implementation owner, from the source-inspection record  
**Approval:** Project owner  
**Update trigger:** Any change to the set of pages or routes, section order, navigation structure, anchor targets, or responsive navigation behavior  

## 1. Purpose and status

This document is the canonical record of the **structure** of the Poster Perfect website: which pages or routes exist, how they nest, how navigation connects them, what order sections appear in, and where in-page anchor targets exist.

**No page, route, section, navigation entry, or anchor is recorded here until it is observed in the inspected Canva source or explicitly approved by the project owner as a web requirement/adaptation.** The sections below are templates. They contain no sitemap, because none has been established. Do not infer one from the project name, from typical company-portfolio patterns, or from the component names in `components.md`.

### Business-purpose constraint

The owner-confirmed company purpose and prospective-customer objective are defined in `docs/project-brief.md` and `PP-CON-011`. The information architecture must support the approved company-level presentation and enquiry journey; it must not turn the site into an individual designer's personal portfolio.

The Canva source supplies observed visual and content structure. If the company objective requires an additional section, page, navigation entry, or enquiry action that is not present in the source, record it as a proposed web adaptation and obtain explicit owner approval before adding it. Do not label an approved adaptation as source-observed. Exact page count and IA nodes remain blocked until the required source inspection and approvals are complete.


## 2. Ownership split

Each fact has one home. This document references other records by identifier and does not copy their content.

| Fact | Canonical home | This document's role |
| --- | --- | --- |
| Set of pages and routes; parent/child hierarchy | **This document** (`PP-ART-018`) | Owns |
| Navigation structure, nav entries and their order | **This document** | Owns; each nav entry references an interaction ID |
| Section order within each page; reading order | **This document** | Owns; references section IDs |
| Anchor and deep-link targets | **This document** | Owns |
| Section copy, headings, media, and per-section content | `content-structure.md` (`PP-ART-006`) | References section IDs; does not duplicate content |
| Link destinations, control behavior, keyboard expectations | `content-structure.md` interaction inventory | References interaction rows; does not duplicate behavior |
| Responsive layout changes and breakpoints | `design-system.md` (`PP-ART-005`) | References responsive rule IDs for each affected node |
| Component inventory and responsibilities | `components.md` (`PP-ART-007`) | References component IDs for each section |
| Per-component contracts (props, state, effects, accessibility) | `component-blueprint.md` (`PP-ART-019`) | References component IDs; does not restate contracts |
| Routing library or route-model decision | `decision-log.md` (open decision) | Supplies the route inventory that the decision requires |

## 3. Identifiers

| Node kind | Identifier pattern | Notes |
| --- | --- | --- |
| Site or page / route | `PP-IA-<nnn>` | One per page or route in scope |
| Section (within a page) | `PP-IA-<nnn>` | Also the key used by `content-structure.md` section inventory |
| Navigation entry | `PP-IA-<nnn>` | Must reference exactly one interaction row |
| Anchor target | `PP-IA-<nnn>` | Only where a visible or programmatic in-page target is required |

Identifiers are assigned only after source inspection, are never reused, and are retired rather than deleted (see `docs/icm/README.md` §5). The `<nnn>` pattern in this document is a format description, not an assigned identifier.

## 4. Required fields per node

Every node MUST record the following. A field that does not apply is marked "not applicable" with a reason.

| Field | Requirement |
| --- | --- |
| ID | Stable `PP-IA-<nnn>` identifier |
| Kind | Page/route, section, navigation entry, or anchor target |
| Parent | Exactly one parent ID (none for the root only) |
| Order | Position among siblings, as observed in the source |
| Source locator | Page/artboard and region in `PP-REF-001`, recorded without private editor URLs |
| Content reference | Section inventory entry in `content-structure.md` (for sections) |
| Interaction reference | Interaction row in `content-structure.md` (for navigation entries) |
| Responsive rule | Reference to the applicable rule in `design-system.md`, or "none observed" |
| Component reference | Component ID(s) from `components.md`, or "local markup" with a reason |
| Status | Specification state per `docs/icm/README.md` §5.1 |

## 5. Structure (pending source inspection)

### 5.1 Page and route inventory

| ID | Page / route | Parent | Purpose | Status |
| --- | --- | --- | --- | --- |
| Pending | Pending source inspection | Pending | Pending | Blocked |

### 5.2 Hierarchy

```text
Pending source inspection.
No hierarchy is recorded. Do not infer one.
```

### 5.3 Section order per page

| Page ID | Order | Section ID | Source region | Status |
| --- | --- | --- | --- | --- |
| Pending | Pending | Pending | Pending | Blocked |

### 5.4 Navigation

| Nav ID | Label source | Destination (interaction ID) | Location(s) | Keyboard and focus expectation | Status |
| --- | --- | --- | --- | --- | --- |
| Pending | Pending | Pending | Pending | Pending | Blocked |

Navigation entries MUST use semantic links (`PP-CON-006`). A navigation entry without an observed destination is not recorded as a link.

### 5.5 Anchor and deep-link targets

| Anchor ID | Target section | Used by | Status |
| --- | --- | --- | --- |
| Pending | Pending | Pending | Blocked |

Anchor identifiers MUST be unique within the document and MUST NOT be generated from display text that may change.

## 6. Responsive navigation and reflow

For each navigation region and each page that changes structure at a viewport width, record:

- The applicable responsive rule in `design-system.md`.
- Which navigation entries or sections move, collapse, reorder, or hide.
- Whether reading order and DOM order change. A change in reading order is a web adaptation and requires owner approval under `PP-REQ-004` and `PP-CON-008`.

No breakpoint is defined here. Breakpoints are derived from observed content constraints in Phase 0 or 3.

## 7. Route-model inputs

The routing and rendering decisions in `decision-log.md` ("Page and route structure", "Build tool and rendering model") depend on this document. Phase 1 uses the accepted route inventory (§5.1) and navigation model (§5.4) as inputs. Until those tables are accepted:

- No router, route library, or route-based file layout is selected.
- A single-page structure is not assumed.

## 8. Reading-order rule

Unless an owner-approved adaptation says otherwise, the DOM order of each page MUST match the visual reading order at the primary viewport, and the section order in §5.3 is the authority for both. Verification is defined in `PP-VER-016` and `PP-VER-009`.

## 9. Verification

| Control | What it checks against this document |
| --- | --- |
| `PP-VER-016` | Every in-scope page and section is recorded exactly once; references resolve to content, interaction, component, and design-system records |
| `PP-VER-005` | Visible copy in each recorded section matches the content inventory |
| `PP-VER-009` | Each navigation entry resolves to its recorded destination and behaves as a link |
| `PP-VER-007` | Each recorded responsive rule is exercised at the agreed viewport matrix |
| `PP-VER-014` | Implemented page composition matches the accepted section order (Phase 2 onward) |

## 10. Change control

1. Identify the affected node(s) and the requirement or decision that changes.
2. Update this document and the referenced content, interaction, component, or design-system record in the same change.
3. Update `PP-CON-010`, the ICM register entries, and the affected verification controls.
4. Obtain owner approval for any addition, removal, or reordering of pages, routes, or sections.
5. Retire, do not delete, superseded nodes; retain their identifiers with a successor reference.
