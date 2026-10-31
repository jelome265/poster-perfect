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

The Canva design is the primary source for company information, page content, section order and visual composition. Use the transcribed source facts as the company baseline. For information not present or values withheld from the public inventory, reserve clearly named update placeholders. Do not replace source content with generic company-site assumptions.

## Translation rules

1. Treat the inspected Canva design as the visual reference and use owner-approved business requirements as the authority for company purpose and required customer journey.
2. Record source copy accurately and preserve its hierarchy. Any approved company-voice or editorial adaptation must be traceable to the source and DEC-014/DEC-018; do not add unsupported facts.
3. Content or enquiry actions required by the approved company objective but absent from the Canva source must be recorded as proposed web adaptations and approved before inclusion.
4. Recreate layout with HTML and CSS rather than using a full-page screenshot as the website, unless an image-only implementation is explicitly approved.
5. Use source assets where available and permitted. Do not substitute unrelated stock imagery or approximate brand assets without approval.
6. Distinguish source properties from web adaptations. Document any change required for responsive behavior or accessibility.
7. Record deviations from the reference and the reason for each deviation. Where original assets or supplementary values are unavailable, preserve their layout region with an explicit update placeholder rather than removing the section.

## Inspection record

| Field | Result |
| --- | --- |
| Inspection date | 2026-10-30 |
| Source export received | Yes: one PDF (see Source) |
| Number of pages / artboards | 1 page: one long scrolling layout |
| Canvas dimensions | 1024.5 × 4032 pt (PDF page size). Canva artboard size not separately confirmed |
| Primary content purpose | Company portfolio for a graphic design business and prospective-customer acquisition (owner-confirmed 2026-10-30; DEC-008) |
| Target audience | Prospective customers; specific segments pending owner confirmation |
| Typography identified | Aileron, embedded in Regular and Bold. Family identified; sizes and line heights approximate or pending; CC0-1.0 source license recorded under DEC-014 and PP-REF-014 owner confirmation |
| Color palette identified | Six dominant colors, approximate (see `design-system.md`) |
| Assets inventoried | Hero image (magazine-style sample); three service samples (brochure, logo, magazine cover); footer sample image; logo mark (used twice); four check-mark icons; three social-media icons. Originals not extracted. Publication permission pending |
| Interactive behavior identified | One button ("LEARN MORE"); contact email and telephone as text; three social icons. Destinations not shown in the source (see `content-structure.md`) |
| Responsive variants supplied | None. Single desktop-width layout; responsive reflow is an owner-approved web adaptation under DEC-014 |
| Owner-approved adaptations | DEC-014 approves company voice, conservative content exclusions, an in-page About action, and responsive reflow. Contact hand-off details and publication rights remain gated (see `content-structure.md`) |

## Residual dependencies and accepted limitations (DEC-017)

- The owner-held PDF was inspected on 2026-10-30 and is identified above by filename and SHA-256. It is not committed to the repository. Re-supply the PDF before detailed side-by-side visual comparison or any review that requires access to the actual source image.
- Original image files, the original logo vector, and standalone icon files were not extracted or supplied. They are unavailable to the initial implementation and are excluded under DEC-017. Do not recreate the mark or substitute stock/AI imagery.
- No rights evidence was supplied for third-party/sample artwork, customer work, or testimonials. Their publication status is **not authorized**; exclude them unless item-specific permissions and provenance are later recorded.
- Aileron Regular/Bold and its CC0-1.0 source license are identified. Verify the exact font distribution and preserve its license metadata when the font files are added.
- Six dominant color values are recorded as approximate starting references in design-system.md; they are not precise brand specifications. Typography metrics, spacing, detailed geometry, crop/focal points, and the CSS comparison viewport remain unmeasured or uncertain and must be validated during Phase 2 with the source available.
- No responsive source variants were supplied. The owner-approved responsive reflow is a web adaptation and is specified in design-system.md.

The known absences above satisfy the G0 inventory requirement for the scoped baseline; they do not establish ownership, consent, or availability.