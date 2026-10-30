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

Derived from the export (2026-10-30). Repeated patterns and coherent regions are listed as components. Single-use markup is listed as local markup with its reason. Contract details are in the [component blueprint](component-blueprint.md) (`PP-ART-019`).

| Component ID | Component | Responsibility (one line) | IA section(s) | Reused by | Blueprint |
| --- | --- | --- | --- | --- | --- |
| `PP-CMP-001` | ValueBadge | Show one value point: a check icon with a short label | `PP-IA-004` (4 instances) | Value band only | `PP-CMP-001` |
| `PP-CMP-002` | ServiceCard | Show one service with a sample image and a label | `PP-IA-005` (3 instances) | Services only | `PP-CMP-002` |
| `PP-CMP-003` | StatTile | Show one figure with its label | `PP-IA-006` (3 instances) | Statistics only | `PP-CMP-003` |
| `PP-CMP-004` | TestimonialCard | Show one quote with role and location | `PP-IA-007` (3 instances) | Testimonials only | `PP-CMP-004` |
| `PP-CMP-005` | BrandLockup | Show the logo mark with the "Poster Perfect" wordmark | `PP-IA-002`, `PP-IA-008` (2 instances) | Hero and footer | `PP-CMP-005` |

### Local markup (not extracted)

| Markup | IA section | Reason it stays local |
| --- | --- | --- |
| Hero block and headline | `PP-IA-002` | Single instance with a unique layout |
| "LEARN MORE" button | `PP-IA-002` | Single observed use. Reassess if the enquiry path (`PP-CON-011`) adds a second button |
| About block | `PP-IA-003` | Single prose block |
| Section headings | `PP-IA-003` to `PP-IA-007` | Treatment varies: a rule sits above two of five headings. Reassess after the owner confirms the heading style |
| Contact block | `PP-IA-008` | Single use |
| Social icon group | `PP-IA-008` | Single use. Reassess when destinations are confirmed |

## Review checklist

- [ ] Each component has a clear responsibility.
- [ ] Props are typed and intentionally scoped.
- [ ] Page-specific content is not hidden inside unrelated reusable components.
- [ ] Shared components are genuinely shared.
- [ ] Interactive components expose keyboard-accessible behavior.
- [ ] The component tree reflects the page hierarchy without unnecessary wrapper layers.
