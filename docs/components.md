# Component guidelines

## Status

**Drafted from the export (2026-10-30); owner approval pending.** The inventory is produced from the inspected source and the information architecture (`PP-ART-018`). Component contracts (inputs, state, effects, keyboard and focus, accessibility) are recorded in the [component blueprint](component-blueprint.md) (`PP-ART-019`), not in this file. Naming and boundaries should reflect the actual composition rather than a presumed poster or landing-page pattern.

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

**Status:** Structural inventory accepted under DEC-013; profile-only component dispositions approved under DEC-017 (2026-10-31). The initial implementation uses text-only value points, service categories and brand wordmark. Statistics/testimonials, sample artwork, check/social icons and the original logo symbol are excluded.

Derived from the export (2026-10-30). Repeated patterns and coherent regions are listed as components. Single-use markup is listed as local markup with its reason. Contract details are in the [component blueprint](component-blueprint.md) (`PP-ART-019`).

| Component ID | Component | Responsibility (one line) | IA section(s) | Reused by | Blueprint |
| --- | --- | --- | --- | --- | --- |
| `PP-CMP-001` | ValueBadge | Show one text-only value point; omit the unavailable check icon | `PP-IA-004` (4 instances) | Value band only | `PP-CMP-001` |
| `PP-CMP-002` | ServiceCard | Source pattern pairs service imagery and label; initial implementation uses text-only service categories | `PP-IA-005` (3 instances) | Services only | `PP-CMP-002` |
| `PP-CMP-003` | StatTile | Source-only pattern; excluded from initial website under DEC-017 | `PP-IA-006` (3 instances) | Not rendered | `PP-CMP-003` |
| `PP-CMP-004` | TestimonialCard | Source-only pattern; excluded pending individual publication permission and claim substantiation | `PP-IA-007` (3 instances) | Not rendered | `PP-CMP-004` |
| `PP-CMP-005` | BrandLockup | Source lockup; render text-only wordmark, omit unavailable logo symbol | `PP-IA-002`, `PP-IA-008` (2 instances) | Hero and footer | `PP-CMP-005` |

### Local markup (not extracted)

| Markup | IA section | Reason it stays local |
| --- | --- | --- |
| Hero block and headline | `PP-IA-002` | Single instance with a unique layout |
| "LEARN MORE" button | `PP-IA-002` | Single observed use. Reassess if the enquiry path (`PP-CON-011`) adds a second button |
| About block | `PP-IA-003` | Single prose block |
| Section headings | `PP-IA-003` to `PP-IA-007` | Treatment varies: a rule sits above two of five headings. Reassess after the owner confirms the heading style |
| Contact block | `PP-IA-008` | Single use |
| Social icon group | `PP-IA-008` | Single use. Reassess when destinations are confirmed |

## Approved component dispositions (DEC-017)

- Value points render as accessible text list items; no replacement icon is invented.
- Service names render as text, not image cards; no source image or portfolio destination is substituted.
- Statistics and testimonials are not rendered in the initial website.
- The hero and footer use a text-only brand wordmark; the source logo symbol is not recreated.
- The single hero action points to the About anchor. There are no contact, social, form, or remote actions.

## Review checklist

- [ ] Each component has a clear responsibility.
- [ ] Props are typed and intentionally scoped.
- [ ] Page-specific content is not hidden inside unrelated reusable components.
- [ ] Shared components are genuinely shared.
- [ ] Interactive components expose keyboard-accessible behavior.
- [ ] The component tree reflects the page hierarchy without unnecessary wrapper layers.
