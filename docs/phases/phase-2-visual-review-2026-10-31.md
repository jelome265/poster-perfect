# Phase 2 visual review — 2026-10-31

| Field | Value |
| --- | --- |
| Reference | Owner-held Canva export at `docs/source/Company_Website_Business_Website_in_Dark_Blue_White_Bright_Blue_Simple_Professional_Style.pdf` (SHA-256 `173bd1a71399067253292eed129af90df0a8caa425679a2674f932ae475baea6`, DEC-018); 72 dpi raster, approximately 1025 × 4032 px |
| Primary comparison viewport | 1024 CSS px wide; nearest integer match for the approximately 1025 px-wide 72 dpi reference raster. PDF points and CSS pixels are different units; this is a raster-width comparison, not a conversion from the 1024.5 pt PDF page width |
| Method | Production build served by `vite preview`, full-page screenshot in headless Chromium 1.56.1, section boxes measured with `getBoundingClientRect`, compared band by band with the reference |
| Commit | `3a2b26b5d65020fb68b6ff605f83716c120ba442` (`feat/phase2-design-composition`; PR #20 head at review) |

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

## Recorded deviations and G2 dispositions

| # | Area | Reference | Built | Review disposition | Reason |
| --- | --- | --- | --- | --- | --- |
| D1 | Hero heading | Underlined | Not underlined | Accept for G2 | The heading is not interactive; omitting the underline avoids a false link affordance |
| D2 | Images and logo | Sample photographs, logo symbol, footer artwork | Named dashed placeholders; text wordmark | Accept; required by policy | DEC-014/DEC-019: publication rights are not evidenced and the original logo was not supplied |
| D3 | About heading | Two lines | Three lines | Accept for G2 | Uses the owner-approved editorial heading (DEC-014 PP-CNT-09) and approved company copy |
| D4 | About body | Beside the heading, starts lower | Beside the heading, starts higher | Accept as a documented composition variance | The approved company copy is longer; the body remains in the right column and follows the heading in document order |
| D5 | Services text | Duplicate About paragraph in left column | Short "Featured service categories" label | Accept under PP-CNT-04 | Removes the duplicated paragraph instead of repeating company copy |
| D6 | Statistics | "99%", "1+", "Worldwide" | "Statistic to be confirmed" in three tiles | Accept; required by DEC-019 | Unverified claims are not published; the source region remains represented |
| D7 | Testimonials | Quotations and attributions | "Client testimonial to be added" placeholder cards | Accept; required by DEC-009/DEC-019 | No quotation or attribution is published without substantiation and permission |
| D8 | Contact and footer | Telephone, email, headquarters values; social profile links | Labelled update placeholders, no links | Accept; required by DEC-019 | Missing or unverified values are not fabricated and placeholders are not operable links |
| D9 | Footer heading | Visible "Contact" heading absent in source | Visually hidden `h2` for document structure | Accept for semantic structure | Provides a meaningful section name without adding visible copy absent from the source |
| D10 | Type sizes | Measured from a 72 dpi render | Approximate `clamp()` sizes | Accept for primary composition; refine only if later evidence requires | The source measurements are approximate starting references (PP-CNT-16); pixel-level image comparison is explicitly deferred |


## G2 review disposition

**Result: PASS (2026-10-31).**

The G2 criteria in DEC-019 are met by the reviewed PR #20 head:

- All seven source sections are present in the approved order.
- Visible company copy, source service examples and value points are represented from the approved content inventory.
- Statistics, testimonials, imagery, contact details and social destinations remain explicit placeholders where substantiation, permission, original assets or verified values are missing.
- The `LEARN MORE` action targets the existing About section; placeholders are not links, and no fabricated contact destinations are emitted.
- The primary-viewport comparison record reports section-height differences from 0 to 7 px, no horizontal overflow, no console/page errors, no failed requests, and successful Aileron Bold loading.

**Review basis:** the recorded production-preview full-page screenshot/crop inspection and `getBoundingClientRect` measurements for the exact commit above were cross-checked against the PR's section components, content inventory, CSS tokens/layout, automated tests and successful CI. The visual record contains the measurements and method, but no screenshot PNG is committed as a replayable artifact. This is a geometry and visual-inspection disposition, not an automated pixel-diff result.

**Disposition:** G2 is closed as PASS for the Phase 2 composition and source-led content/placeholder criteria. The G2 pass does not claim responsive readiness, WCAG conformance, keyboard verification or pixel-level equivalence. Those are explicitly deferred to Phase 3. Phase 2 remains in progress on PR #20 until its implementation is merged and the phase record is reconciled.

## Not verified in this review

- Responsive behaviour below 1024 px and at other zoom levels (Phase 3).
- Colour contrast ratios and keyboard operation of the in-page link (Phase 3).
- Pixel-level visual fidelity. No automated image diff was run; pixel-level comparison is deferred to Phase 3 under the project owner's instruction. The G2 comparison was by measured geometry and visual inspection of crops.
- Production hosting and deployment (Phase 4).
