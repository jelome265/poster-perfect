# Phase 2 visual review — 2026-10-31

| Field | Value |
| --- | --- |
| Reference | Owner-held Canva export committed at `docs/source/` (SHA-256 `173bd1a7…baea6`, DEC-018). 72 dpi render, 1025 × 4032 px |
| Primary comparison viewport | 1024 CSS px wide (matches the 1024.5 pt artboard width). Recorded separately from the PDF page size |
| Method | Production build served by `vite preview`, full-page screenshot in headless Chromium 1.56.1, section boxes measured with `getBoundingClientRect`, compared band by band with the reference |
| Commit | Working tree of `feat/phase2-design-composition` at the time of review; re-verify at the commit that introduces it |

## Section geometry

| Section | Reference height (px) | Built height (px) | Disposition |
| --- | --- | --- | --- |
| Hero | 576 | 576 | Matches |
| About | 576 | 574 | Matches within 2 px |
| Value statement | 576 | 574 | Matches within 2 px |
| Services | 576 | 573 | Matches within 3 px |
| Statistics | 460 | 460 | Matches |
| Testimonials | 576 | 569 | Matches within 7 px |
| Contact and footer | 576 | 575 | Matches within 1 px |

Horizontal overflow at 1024 px: 0 px. Console errors and warnings: none. Failed requests: none. The Aileron Bold face loads (`document.fonts.check` returns true).

## Accepted deviations

| # | Area | Reference | Built | Reason |
| --- | --- | --- | --- | --- |
| D1 | Hero heading | Underlined | Not underlined | An underline reads as a link and the heading is not interactive |
| D2 | Images and logo | Sample photographs, logo symbol, footer artwork | Named dashed placeholders; text wordmark | DEC-014 and DEC-019: rights not evidenced; original logo not supplied. A placeholder never looks like verified content |
| D3 | About heading | Two lines | Three lines | Approved editorial heading (DEC-014 PP-CNT-09) and approved company copy are longer |
| D4 | About body | Beside the heading, starts lower | Beside the heading, starts higher | Approved copy length; alignment kept on the right column |
| D5 | Services text | Duplicate About paragraph in left column | Short "Featured service categories" label | Removes the duplicate paragraph under PP-CNT-04 |
| D6 | Statistics | "99%", "1+", "Worldwide" | "Statistic to be confirmed" in three tiles | PP-CNT-05 and DEC-019 |
| D7 | Testimonials | Quotations and attributions | "Client testimonial to be added" placeholder cards | PP-CNT-06 and DEC-009 scope; not published before permission |
| D8 | Contact and footer | Telephone, email, headquarters values; social profile links | Labelled update placeholders, no links | PP-CNT-14 and PP-CNT-11: no dead or invented links |
| D9 | Footer heading | Visible "Contact" heading absent in source | Visually hidden `h2` for document structure | Keeps the heading outline valid without adding visible copy |
| D10 | Type sizes | Measured from a 72 dpi render | Approximate `clamp()` sizes | Sizes are approximate starting references (PP-CNT-16); exact rendered metrics not yet measured |

## Not verified in this review

- Responsive behaviour below 1024 px and at other zoom levels (Phase 3).
- Colour contrast ratios and keyboard operation of the in-page link (Phase 3).
- Pixel-level visual fidelity. The comparison was by measured geometry and visual inspection of crops; no automated image diff was run.
- Production hosting and deployment (Phase 4).
