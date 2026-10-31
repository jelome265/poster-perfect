# Design system inventory

## Status

**Source-derived design baseline approved under DEC-014/DEC-019 and styling implementation ratified under DEC-020 (2026-10-31).** Colors and dimensions remain approximate values from a 72 dpi render, not exact brand specifications. Four colour values and two font weights are implemented as CSS custom-property tokens. Aileron Regular/Bold is self-hosted through `@fontsource/aileron` 5.3.0; the lockfile records CC0-1.0. Preserve all seven source sections and image/card/logo regions; use named placeholders for original assets, statistics, testimonials, contact values and social URLs that require later updates or permission. Responsive reflow is approved; full viewport and accessibility verification remain Phase 3 work.

## Token principles

- Record the observed source value and its intended role.
- Use one shared token for values that represent the same design decision.
- Preserve meaningful distinctions in the source instead of collapsing similar-looking values prematurely.
- Record responsive changes separately when the source changes a value or composition across viewport variants.
- If an exact source value cannot be established, mark it as an estimate and obtain owner approval before treating it as canonical.

## Token inventory

| Category | Values | Status |
| --- | --- | --- |
| Color | Six approximate design values (see the table below); four are active CSS tokens under DEC-020 | Owner-approved starting references; active token mapping is explicit, other observed values remain unassigned |
| Typography | Aileron Bold for headings and labels; Aileron Regular for body text. Sizes, line heights, and letter spacing remain approximate | Aileron 400/700 is integrated and self-hosted via `@fontsource/aileron` 5.3.0; lockfile SPDX metadata records CC0-1.0; the primary-viewport preview reports the Bold face loaded |
| Spacing | Section gaps, component gaps, padding, and margins not yet measured | Pending measurement |
| Layout | One page, 1024.5 × 4032 pt; 72 dpi raster approximately 1025 × 4032 px. Primary web comparison uses 1024 CSS px | Source page dimensions are PDF points; the CSS viewport was selected to approximate raster width, not by equating pt and CSS px |
| Shape | Badge and button corner radii; dividers and rules (a short rule sits above some headings) | Pending measurement |
| Elevation | Not assessed | Pending |
| Imagery | Hero magazine-cover image, three service images, and footer sample image are observed in the source | Preserve each image region with a named placeholder until original or rights-cleared assets are supplied |
| Responsive | No source variant; owner-approved fluid reflow, content-driven breakpoints, and column stacking | Web adaptation approved under DEC-014/DEC-019; implement in Phase 2 and verify in Phases 2–3 |
| Motion | Not present in a static export | Not in source |

## Color values (approximate)

Values were measured from a quantized 72 dpi render of the export. Use locations describe what the render shows and are for review only; they are not approved token roles.

| Approximate value | Share of page (render) | Where it appears in the render | Implemented token role or disposition |
| --- | --- | --- | --- |
| `#002F69` | about 33% | Hero, services band, contact and footer band | `--color-brand-primary` (dark navy; DEC-020) |
| `#0087FF` | about 16% | Value band background, left statistic, button | `--color-accent` (bright blue; DEC-020) |
| `#EEEEF0` | about 35% | About band, middle statistic, testimonials | `--color-surface` (light grey; DEC-020) |
| `#FEFEFD` | about 3% | Badge cards and text on dark bands | `--color-text-inverse` (DEC-020) |
| `#595459` | about 3% | Body text on light bands | Unassigned; no token until role is verified |
| `#B1BEC9` | about 2% | Location not confirmed | Unassigned; no token until location and role are verified |
| `#141010` | about 7% | Mostly inside sample images, not as a brand color | Not a token unless the owner confirms it as a brand color |

## Token naming

Use semantic names based on purpose rather than values or appearance alone. The active names and roles are recorded in DEC-020 and `src/styles/tokens.css`; new tokens require an evidenced role and a corresponding inventory update.

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
- [x] Aileron Regular (400) and Bold (700) are integrated and self-hosted through `@fontsource/aileron` 5.3.0; the exact version and CC0-1.0 license are recorded in `package-lock.json` and passed the dependency/license CI audit. The fallback stack is declared in `src/styles/tokens.css`; behavior when the font files are unavailable is not separately fault-injected.
- [ ] Typography hierarchy is recorded.
- [ ] Spacing and alignment measurements are recorded.
- [ ] Image crop and focal-point behavior are documented.
- [ ] Approved responsive changes are implemented and tested in Phases 2–3.
- [ ] All estimates are identified and approved.
