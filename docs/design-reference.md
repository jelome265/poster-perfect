# Design reference and inspection record

## Source

The project owner supplied a Canva design as the visual and content reference. The Canva editor URL is intentionally not copied into this public repository; access to the editable document stays under the owner's control.

The export inspected for this record is identified below. The PDF itself is not committed. It contains owner-supplied content and third-party sample imagery whose publication permission is not yet confirmed, so the owner holds it and this record identifies it by name and hash.

| Field | Value |
| --- | --- |
| Export file name | `Company_Website_Business_Website_in_Dark_Blue_White_Bright_Blue_Simple_Professional_Style.pdf` |
| SHA-256 | `173bd1a71399067253292eed129af90df0a8caa425679a2674f932ae475baea6` |
| Exporting tool | Canva (PDF metadata) |
| Received | 2026-10-30, owner upload |

## Inspection status

**Inspected 2026-10-30, with measurement limits.** The export was inspected by text extraction, embedded-font inspection, and a 72 dpi render. Values marked "approximate" are estimates from that render and must be confirmed before they become canonical tokens (see `design-system.md`). No values were inferred from the project name or from generic company-website conventions.

## Required source material

Before design-specific implementation begins, inspect and record:

- A full-resolution export of every relevant Canva page or artboard.
- The original dimensions and aspect ratio of each artboard.
- All copy, text hierarchy, and content order.
- Images, illustrations, icons, logos, and other assets used by the design.
- Font families and weights, including font files or legitimate web-licensing details where required.
- Any links, calls to action, navigation, forms, or other interactive behavior.
- Any existing mobile or alternate-layout variants.
- Any source content, portfolio work, company claims, or calls to action that need separate owner confirmation or publication permission.

The company-level purpose is established by the project brief and DEC-008, independently of source inspection. If the business objective requires additional web content or an enquiry action not visible in the Canva source, record it as an owner-approved web adaptation; do not represent it as an observed source feature.

## Translation rules

1. Treat the inspected Canva design as the visual reference and use owner-approved business requirements as the authority for company purpose and required customer journey.
2. Record source copy accurately and preserve its hierarchy. Do not silently rewrite, omit, or invent content or company claims.
3. Content or enquiry actions required by the approved company objective but absent from the Canva source must be recorded as proposed web adaptations and approved before inclusion.
4. Recreate layout with HTML and CSS rather than using a full-page screenshot as the website, unless an image-only implementation is explicitly approved.
5. Use source assets where available and permitted. Do not substitute unrelated stock imagery or approximate brand assets without approval.
6. Distinguish source properties from web adaptations. Document any change required for responsive behavior or accessibility.
7. Record deviations from the reference and the reason for each deviation.

## Inspection record

| Field | Result |
| --- | --- |
| Inspection date | 2026-10-30 |
| Source export received | Yes: one PDF (see Source) |
| Number of pages / artboards | 1 page: one long scrolling layout |
| Canvas dimensions | 1024.5 × 4032 pt (PDF page size). Canva artboard size not separately confirmed |
| Primary content purpose | Company portfolio for a graphic design business and prospective-customer acquisition (owner-confirmed 2026-10-30; DEC-008) |
| Target audience | Prospective customers; specific segments pending owner confirmation |
| Typography identified | Aileron, embedded in Regular and Bold. Family identified; sizes and line heights approximate or pending; licence terms pending owner confirmation |
| Color palette identified | Six dominant colors, approximate (see `design-system.md`) |
| Assets inventoried | Hero image (magazine-style sample); three service samples (brochure, logo, magazine cover); footer sample image; logo mark (used twice); four check-mark icons; three social-media icons. Originals not extracted. Publication permission pending |
| Interactive behavior identified | One button ("LEARN MORE"); contact email and telephone as text; three social icons. Destinations not shown in the source (see `content-structure.md`) |
| Responsive variants supplied | None. Single desktop-width layout |
| Owner-approved adaptations | None yet. Enquiry path required by PP-CON-011 is not in the source (see `content-structure.md`) |

## Residual dependencies

- Full-resolution original image files and the logo vector, which the owner must supply separately (the export is a rendered PDF).
- Confirmation of approximate color and type values, and of the Aileron licence.
- Responsive variants, if the owner wants them (none supplied).
- Owner confirmation of the claims, testimonials, portfolio permissions, and contact destinations recorded in `content-structure.md`.
