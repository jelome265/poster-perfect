# Design system inventory

## Status

**Source values pending inspection.** This document defines what must be measured and recorded from the Canva reference. It does not establish a palette, font, spacing scale, or breakpoint by assumption.

## Token principles

- Record the observed source value and its intended role.
- Use one shared token for values that represent the same design decision.
- Preserve meaningful distinctions in the source instead of collapsing similar-looking values prematurely.
- Record responsive changes separately when the source changes a value or composition across viewport variants.
- If an exact source value cannot be established, mark it as an estimate and obtain owner approval before treating it as canonical.

## Token inventory

| Category | Values to record | Status |
| --- | --- | --- |
| Color | Brand, surface, background, text, border, accent, state colors | Pending |
| Typography | Font family, weight, size, line height, letter spacing, text role | Pending |
| Spacing | Section gaps, component gaps, padding, margins, content rhythm | Pending |
| Layout | Canvas dimensions, content width, columns, alignment, grid behavior | Pending |
| Shape | Border widths, corner radii, dividers, outlines | Pending |
| Elevation | Shadow values and intended use | Pending |
| Imagery | Asset dimensions, crop, aspect ratio, focal point | Pending |
| Responsive | Breakpoints, reflow rules, visibility changes | Pending |
| Motion | Animation, transition, duration, easing, reduced-motion behavior | Pending |

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

## Review checklist

- [ ] Colors are recorded with source references and semantic roles.
- [ ] Font files, licensing, weights, and fallback behavior are known.
- [ ] Typography hierarchy is recorded.
- [ ] Spacing and alignment measurements are recorded.
- [ ] Image crop and focal-point behavior are documented.
- [ ] Responsive changes are explicit and tested.
- [ ] All estimates are identified and approved.
