# Design system inventory

## Status

**Partially measured from the export (2026-10-30).** Colors are approximate values from a 72 dpi render. The typeface family is identified; sizes, spacing, and layout are not yet measured. No breakpoints are defined: the export is a single desktop-width layout. All values below are estimates until the owner confirms them, as required by the token principles.

## Token principles

- Record the observed source value and its intended role.
- Use one shared token for values that represent the same design decision.
- Preserve meaningful distinctions in the source instead of collapsing similar-looking values prematurely.
- Record responsive changes separately when the source changes a value or composition across viewport variants.
- If an exact source value cannot be established, mark it as an estimate and obtain owner approval before treating it as canonical.

## Token inventory

| Category | Values | Status |
| --- | --- | --- |
| Color | Six approximate values (see the color table below) | Approximate: owner to confirm |
| Typography | Aileron Bold for headings and labels; Aileron Regular for body text. Sizes, weights per role, line heights, and letter spacing pending | Family identified; licence and sizes pending |
| Spacing | Section gaps, component gaps, padding, and margins not yet measured | Pending measurement |
| Layout | One page, 1024.5 × 4032 pt. Content width, columns, and alignment not yet measured | Partially measured |
| Shape | Badge and button corner radii; dividers and rules (a short rule sits above some headings) | Pending measurement |
| Elevation | Not assessed | Pending |
| Imagery | Sample images placed in the service row, hero, and footer. Crop, aspect ratio, and focal point pending | Pending |
| Responsive | None supplied | Not in source |
| Motion | Not present in a static export | Not in source |

## Color values (approximate)

Values were measured from a quantized 72 dpi render of the export. Use locations describe what the render shows and are for review only; they are not approved token roles.

| Approximate value | Share of page (render) | Where it appears in the render | Proposed token role (pending approval) |
| --- | --- | --- | --- |
| `#002F69` | about 33% | Hero, services band, contact and footer band | `color-brand-primary` (dark navy) |
| `#0087FF` | about 16% | Value band background, left statistic, button | `color-accent` (bright blue) |
| `#EEEEF0` | about 35% | About band, middle statistic, testimonials | `color-surface` (light grey) |
| `#FEFEFD` | about 3% | Badge cards and text on dark bands | `color-surface-raised` or `color-text-inverse`, to confirm |
| `#595459` | about 3% | Body text on light bands | `color-text-muted`, to confirm |
| `#B1BEC9` | about 2% | Location not confirmed | Not assigned |
| `#141010` | about 7% | Mostly inside sample images, not as a brand color | Not a token unless the owner confirms it as a brand color |

## Token naming

Use semantic names based on purpose rather than values or appearance alone. For example, a text color token should describe its role, not its hexadecimal value. The final naming convention should be consistent with the selected styling approach.

Do not create tokens for one-off values unless doing so improves consistency, clarity, or future adjustment.

## Responsive specification

Breakpoints should be chosen from the content and layout behavior observed during implementation. Do not select device labels as a substitute for testing actual layout constraints.

For each meaningful layout change, record:

- The viewport condition that triggers the change.
- Which elements move, resize, wrap, or disappear.
- Whether order or alignment changes.
- Any typography or spacing changes.
- Whether the change is directly represented in the source or is a web-specific adaptation.

No responsive variant is in the source. Any reflow for the four value badges, three service cards, three statistics, and three testimonials is a web adaptation and needs owner approval.

## Review checklist

- [ ] Colors are recorded with source references and semantic roles. (Values recorded; roles and confirmation pending.)
- [ ] Font files, licensing, weights, and fallback behavior are known. (Family and weights identified; licence and fallback pending.)
- [ ] Typography hierarchy is recorded.
- [ ] Spacing and alignment measurements are recorded.
- [ ] Image crop and focal-point behavior are documented.
- [ ] Responsive changes are explicit and tested.
- [ ] All estimates are identified and approved.
