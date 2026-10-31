# Design system inventory

## Status

**Source-derived design baseline approved under DEC-014/DEC-019 (2026-10-31).** Colors and dimensions remain approximate values from a 72 dpi render, approved as starting references rather than exact measurements. Aileron Regular/Bold is approved and its CC0-1.0 source license is recorded in PP-REF-014. Preserve all seven source sections and image/card/logo regions; use named placeholders for original assets, statistics, testimonials, contact values and social URLs that require later updates or permission. Responsive reflow is approved; detailed implementation and validation remain Phase 2–3 work.

## Token principles

- Record the observed source value and its intended role.
- Use one shared token for values that represent the same design decision.
- Preserve meaningful distinctions in the source instead of collapsing similar-looking values prematurely.
- Record responsive changes separately when the source changes a value or composition across viewport variants.
- If an exact source value cannot be established, mark it as an estimate and obtain owner approval before treating it as canonical.

## Token inventory

| Category | Values | Status |
| --- | --- | --- |
| Color | Six approximate values (see the color table below) | Owner-approved starting references under DEC-014/DEC-019; not exact brand specifications |
| Typography | Aileron Bold for headings and labels; Aileron Regular for body text. Sizes, line heights, and letter spacing are not measured | Family and source license approved; exact distribution/license metadata and rendered metrics must be verified during Phase 2 |
| Spacing | Section gaps, component gaps, padding, and margins not yet measured | Pending measurement |
| Layout | One page, 1024.5 × 4032 pt. Content width, columns, and alignment not yet measured | Partially measured |
| Shape | Badge and button corner radii; dividers and rules (a short rule sits above some headings) | Pending measurement |
| Elevation | Not assessed | Pending |
| Imagery | Hero magazine-cover image, three service images, and footer sample image are observed in the source | Preserve each image region with a named placeholder until original or rights-cleared assets are supplied |
| Responsive | No source variant; owner-approved fluid reflow, content-driven breakpoints, and column stacking | Web adaptation approved under DEC-014/DEC-019; implement in Phase 2 and verify in Phases 2–3 |
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

No responsive variant is in the source. DEC-014/DEC-019 approve content-driven reflow that preserves semantic order. Statistics and testimonial regions remain in the composition as placeholder cards until claims are substantiated and customer permissions are recorded. Placeholder states must not resemble verified claims or endorsements.

## Review checklist

- [x] Colors are recorded as approximate source-derived values and approved as starting tokens; validate contrast in the rendered site.
- [ ] Font files and fallback behavior are not integrated. Aileron CC0-1.0 source licensing is recorded; verify the exact package/files and preserve its license metadata when added.
- [ ] Typography hierarchy is recorded.
- [ ] Spacing and alignment measurements are recorded.
- [ ] Image crop and focal-point behavior are documented.
- [ ] Approved responsive changes are implemented and tested in Phases 2–3.
- [ ] All estimates are identified and approved.
