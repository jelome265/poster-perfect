# Component guidelines

## Status

**Source-derived component inventory accepted under DEC-013/DEC-018 (2026-10-31).** The five repeated/coherent component patterns map to the seven-section Canva page. The source regions remain in scope; missing images, statistics, customer permissions and contact/social values are represented by explicit placeholders, not removed.

## Component criteria

Create a component when one or more of these conditions apply:

- A visual or interaction pattern is repeated.
- A section has a coherent responsibility and benefits from a clear boundary.
- A piece of behavior needs to be isolated and tested.
- The component has a useful typed contract that simplifies its consumers.

Do not create a component solely because a block of JSX is visually large. Keep simple, one-off markup local when extraction would make the code harder to follow.

## Responsibilities

A component should have one coherent responsibility. Its public props should communicate what it renders or does without requiring consumers to understand its internal implementation.

Prefer:

- Explicit typed props.
- Composition for related visual elements.
- Semantic HTML for document structure.
- Native links and buttons for their intended behaviors.
- Local state for local interactions.
- Shared components for genuinely shared patterns.

Avoid:

- Components that mix unrelated page sections.
- Components with many boolean props that create unpredictable combinations.
- Duplicated markup whose differences are only accidental.
- Generic abstractions that have no concrete second use.
- Using clickable containers where a semantic link or button is appropriate.

## Component inventory

**Status:** Source-derived seven-section component inventory accepted under DEC-013/DEC-018. Initial page composition retains source component regions with clear placeholder states where source assets, claim substantiation, permissions or destinations are unavailable.

Derived from the export (2026-10-30). Repeated patterns and coherent regions are listed as components. Single-use markup is listed as local markup with its reason. Contract details are in the [component blueprint](component-blueprint.md) (`PP-ART-019`).

| Component ID | Component | Responsibility (one line) | IA section(s) | Reused by | Blueprint |
| --- | --- | --- | --- | --- | --- |
| `PP-CMP-001` | ValueBadge | Render one of the four source value points; use text if the source icon asset is unavailable | `PP-IA-004` (4 instances) | Value band only | `PP-CMP-001` |
| `PP-CMP-002` | ServiceCard | Preserve service image/card geometry with an explicit image placeholder and source label | `PP-IA-005` (3 instances) | Services only | `PP-CMP-002` |
| `PP-CMP-003` | StatTile | Preserve one source statistic tile with a non-claim placeholder until its value is substantiated | `PP-IA-006` (3 instances) | Statistics section | `PP-CMP-003` |
| `PP-CMP-004` | TestimonialCard | Preserve one source testimonial card with placeholder content until quote/attribution permissions and claims are cleared | `PP-IA-007` (3 instances) | Testimonials section | `PP-CMP-004` |
| `PP-CMP-005` | BrandLockup | Render the source Poster Perfect wordmark; reserve a logo-mark slot until original vector is available | `PP-IA-002`, `PP-IA-008` (2 instances) | Hero and footer | `PP-CMP-005` |

### Local markup (not extracted)

| Markup | IA section | Reason it stays local |
| --- | --- | --- |
| Hero block and headline | `PP-IA-002` | Single instance with a unique layout |
| "LEARN MORE" button | `PP-IA-002` | Single observed use. Reassess if the enquiry path (`PP-CON-011`) adds a second button |
| About block | `PP-IA-003` | Single prose block |
| Section headings | `PP-IA-003` to `PP-IA-007` | Treatment varies: a rule sits above two of five headings. Reassess after the owner confirms the heading style |
| Contact block | `PP-IA-008` | Single use |
| Social icon group | `PP-IA-008` | Preserve the source region with three destination placeholders; do not activate links until exact profile URLs are verified |

## Source-led component dispositions (DEC-018)

- Render all seven source sections in the source order.
- Keep four source value points; use text fallbacks if original check icons are unavailable.
- Preserve the three service-card image areas with named image placeholders until original, rights-cleared assets are available.
- Keep all three statistic tiles as placeholders; do not present unsubstantiated figures as claims.
- Keep all three testimonial cards as placeholders until quote permissions and material claims are cleared.
- Use a text wordmark fallback and reserve the logo-mark region until the original logo vector is supplied.
- Preserve contact and social regions; values/URLs are explicit update placeholders, not live links.
## Review checklist

- [ ] Each component has a clear responsibility.
- [ ] Props are typed and intentionally scoped.
- [ ] Page-specific content is not hidden inside unrelated reusable components.
- [ ] Shared components are genuinely shared.
- [ ] Interactive components expose keyboard-accessible behavior.
- [ ] The component tree reflects the page hierarchy without unnecessary wrapper layers.
