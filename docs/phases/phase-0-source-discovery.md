# Phase 0 — Source discovery and specification

| Field | Value |
| --- | --- |
| Status | Source-led G0 specification complete under DEC-014/DEC-019 (2026-10-31); future-update placeholders explicitly inventoried |
| Objective | Produce an owner-approved company portfolio and customer-journey specification alongside the verified Canva-to-web design specification |
| Depends on | Project brief and accessible source material |
| Primary outputs | Company positioning and customer-journey specification, source inventory, page/content specification, information architecture, component inventory and blueprint, design-token inventory, interaction inventory, approved web interpretation |

## 1. Objective

Establish the approved business purpose, company-facing content requirements and prospective-customer journey, then produce a sufficiently complete and reliable description of the Canva source so implementation does not depend on guesses. Phase 0 is a discovery and specification phase; it does not include building the website. Its specification outputs include the information architecture (`PP-ART-018`) and component blueprint (`PP-ART-019`), per `PP-REQ-009` and DEC-007, plus the company positioning and customer-engagement contract (`PP-CON-011`).

Poster Perfect is a company portfolio for a graphic design business, not an individual designer's personal portfolio (`DEC-008`, `PP-REQ-010`). The source design is the visual reference; accepted business requirements establish the company purpose. Owner-approved requirements govern any business content, behavior or responsive adaptation that cannot be determined from a static design.

## 2. Entry conditions

- The project owner has supplied an inspectable, full-resolution export of every in-scope design page or artboard, or an accessible view-only reference.
- Any assets that need to be used independently are available in a suitable format, or their source and licensing constraints are known.
- The project brief and existing documentation are available for updating.

A PNG or equivalent image export is suitable for visual inspection. A PDF is suitable for a multi-page design. Where the source uses separate logos, illustrations, icons, or photographs, provide those assets separately when possible.

**Current status:** the owner-supplied Canva export was inspected on 2026-10-30 (see `design-reference.md`) and its source copy, seven-section hierarchy, visual inventory and company information are transcribed in the canonical inventories. The owner clarified on 2026-10-31 that the Canva content is the company's information and must form the website baseline. DEC-019 supersedes the narrower profile-only interpretation in DEC-017. All seven source sections remain in scope. Missing supplementary details (withheld contact values, social URLs, current availability, original asset files) and rights-dependent claims/artwork are represented by explicit update placeholders rather than removed sections or fabricated values. The company-voice copy removes personal education details while retaining source-derived facts and positioning.
## 3. Scope

### 3.1 Source capture and inventory

- Record the source reference, inspection date, number of pages/artboards, canvas dimensions, and aspect ratios.
- Identify the original asset files and distinguish editable source assets from flattened artwork.
- Record source limitations, missing assets, unavailable fonts, and any uncertain details.
- Keep private editor access credentials and private sharing details out of the public repository.

### 3.2 Visual structure

For each page or artboard, record:

- Overall composition, content boundaries, alignment, columns, and major regions.
- Visual hierarchy and the relationship between headings, body copy, labels, captions, and calls to action.
- Typography: family, weight, size, line height, letter spacing, text transformation, and fallback needs where identifiable.
- Colors: observed values and their semantic roles.
- Spacing, dimensions, borders, radii, shadows, image crops, and focal points.
- Repeated visual patterns that may become reusable components.

Record exact source values when they can be measured. Mark approximations as estimates and obtain owner approval before treating them as canonical.

### 3.3 Content and assets

- Transcribe the visible copy accurately, including punctuation, capitalization, and intended line hierarchy.
- Inventory every in-scope image, icon, illustration, logo, and font.
- Record asset dimensions, format, crop, intended use, provenance, and usage constraints.
- Identify whether an asset should remain a standalone image or be recreated as HTML/CSS.
- Do not replace source assets with unrelated imagery without approval.

### 3.4 Behavior and semantics

Identify every element that appears interactive or communicates an action:

- Navigation items and links, including their destinations.
- Buttons and calls to action, including expected outcomes.
- Forms and fields, including validation and submission expectations if present.
- Expandable, dismissible, animated, or other stateful elements if present.
- External links, downloads, contact methods, and other hand-offs.

For each interaction, record the trigger, expected result, destination or state change, keyboard behavior, and unresolved questions. Do not assume that a decorative shape is an interactive control.

### 3.5 Responsive interpretation

- Inventory any mobile, tablet, or alternate layout variants present in the source.
- Identify content that must remain visible and its semantic reading order.
- Record which regions can naturally reflow, stack, resize, or change alignment.
- Identify any desktop composition that cannot be preserved literally on a narrow viewport.
- Apply the owner-approved responsive reflow in DEC-014 while preserving the source reading order; materially different hierarchy, order, or behavior still requires a new owner decision.

Do not invent fixed breakpoint values during discovery. Breakpoints should be derived from content constraints and validated in later phases.

### 3.6 Requirements and decisions

- The company-level website purpose is owner-confirmed in DEC-008. Confirm the specific target customer segments and what those customers need to understand before making an enquiry.
- Confirm whether the source maps to one page, multiple pages, or a reusable template.
- Confirm the in-scope content and required behavior.
- Record non-goals and explicitly out-of-scope functionality.
- Resolve material unknowns with the project owner; the remaining contact, availability, original-asset, and publication-rights evidence is listed in DEC-014 and `content-structure.md`.
- Update the project brief, design reference, content structure, design system, component inventory, decision log, and ICM records affected by accepted company requirements.

### 3.7 Information architecture and component blueprint

Derived from the inspected source and owner-approved requirements (`PP-REQ-009`, `PP-REQ-010`, DEC-007 and DEC-008):

- Record every in-scope page or artboard once in `information-architecture.md` with its parent, order, and source locator.
- Record the section order per page. Map each section to its content entry in `content-structure.md` and to any responsive rule in `design-system.md`.
- Record every navigation entry as a reference to an interaction row. A visible item with no observed destination is an open question, not a link.
- Identify repeated patterns (two or more observed instances) and coherent regions with one responsibility. For each, add a `components.md` row and a `component-blueprint.md` entry, or record why it stays local markup.
- Do not split, merge, or rename pages, sections, or components to suit an anticipated framework, router, or styling approach.
- The route count, navigation model, and component boundaries are inputs to Phase 1 decisions. They are not presumed before acceptance.

### 3.8 Company positioning and prospective-customer engagement

Apply DEC-008, PP-REQ-010, and PP-CON-011.

- Use the source-derived company voice, customer groups, and service categories approved under DEC-014. Do not assume legal registration, company size, ownership structure, or team composition.
- Confirm the target customer segments and the design problems or needs the company wants to serve.
- Confirm the services and capabilities the company actually offers; do not infer categories or guarantees from common industry practice.
- Identify the creative work the company wants to showcase. Record the source, client/confidentiality constraints, and owner-confirmed permission for each item, client name, or logo before publication.
- Confirm whether testimonials, case studies, awards, credentials, metrics, client lists, or other proof are available and authorized. Omit unsupported claims.
- Record the company's current availability for new work and the date it was reconfirmed. Reconfirm before publication/release.
- Define the intended prospective-customer journey: the action a visitor should take, the approved CTA wording, the contact destination, expected hand-off, and any restrictions.
- Do not assume email, telephone, WhatsApp, remote forms, CRM, analytics, or another contact/integration technology. Record only the owner-approved destination and behavior.
- If the business objective requires content or an enquiry action not present in the Canva source, describe it as a proposed web adaptation and obtain owner approval before adding it.
- Where an item is intentionally excluded or cannot yet be verified, record that disposition rather than filling the gap with invented content.

## 4. Deliverables

| Artifact | Required content |
| --- | --- |
| Source inspection record | Source availability, page count, dimensions, date, limitations |
| Page and section inventory | Page purpose, sections in order, hierarchy, content |
| Content inventory | Exact copy, labels, links, destinations, action outcomes |
| Asset inventory | Files, dimensions, provenance, intended use, constraints |
| Design-token inventory | Measured colors, typography, spacing, layout, shape, elevation |
| Interaction inventory | Trigger, result, destination/state, keyboard expectations |
| Responsive interpretation | Source variants, expected reflow, proposed adaptations |
| Company positioning and customer-engagement specification | Owner-approved company description, customer segments, services/capabilities, publishable portfolio and permissions, availability statement, enquiry action/destination, customer journey and exclusions; recorded in the project brief, content and interaction inventories, and ICM without duplicating canonical facts |
| Information architecture (`PP-ART-018`) | Page and route set, parent/child hierarchy, section order, navigation entries, anchor targets, responsive navigation rules |
| Component inventory and blueprint (`PP-ART-007`, `PP-ART-019`) | Component list, one-line responsibility, IA placement, typed inputs, owned state, effects, keyboard and focus, accessibility obligations |
| Decision record | Approved assumptions, unresolved questions, non-goals |

The relevant project documents are the authoritative records; avoid maintaining conflicting copies of the same values in multiple places.

## 5. Verification

- Reconcile every in-scope visible section against the source export.
- Reconcile all visible text against the content inventory.
- Confirm every visible asset is accounted for.
- Confirm every apparent control has a documented behavior or is explicitly decorative.
- Ensure measurements and estimates are distinguishable.
- Ensure responsive adaptations and content-order changes are recorded.
- Review open questions and obtain the owner decisions needed for implementation.
- Reconcile the information architecture with the source page/artboard inventory: every in-scope page and section appears exactly once with a valid parent and order (`PP-VER-016`).
- Confirm every IA section, navigation entry, and anchor references existing content, interaction, responsive, and component records, with no unresolved identifiers.
- Confirm every component entry is referenced by at least one IA section and declares its effects and verification controls (`PP-VER-016`).
- Reconcile the company-facing content, publication permissions, availability statement, and prospective-customer enquiry path against owner-approved facts (`PP-VER-017`).
- Run `PP-VER-013` after the ICM change and record the exact revision and result. A prior pass does not transfer to this revision.

## 6. Exit criteria

Phase 0 is complete when the Canva source has been inspected, the company information and all seven sections have been transcribed/reconciled, company-voice adaptations are approved, and missing supplementary facts/assets/permissions have explicit placeholder or publication controls. DEC-019 records the owner's source-led clarification; it does not imply that absent contact values, third-party rights or unverified claims have been obtained.



- Every in-scope artboard/page has been inspected at sufficient resolution.
- The page, section, and content structure is documented.
- Required assets and their usage constraints are known.
- Visual tokens are measured or explicitly recorded as approved estimates.
- Interactive behavior is specified.
- Responsive interpretation is documented.
- The information architecture (`PP-ART-018`) is accepted and reconciled with the source inventory (`PP-VER-016`).
- The component inventory and blueprint are recorded for every component the source justifies. Each entry is accepted, or it is explicitly marked partially specified with its open questions.
- Company positioning, source-derived customer groups, services/capabilities, all seven sections, source copy, and available source-visible office-hours content are recorded. Missing contact/social/availability values and rights-dependent assets, testimonials and statistics have explicit update placeholders and publication controls (`PP-VER-017`).
- Material ambiguities and scope questions are resolved or recorded as accepted limitations; unresolved contact and rights dependencies must not be presented as completed evidence.
- The project owner approves the web interpretation and implementation scope.

## 7. Out of scope

- React application scaffolding.
- Production components or page styling.
- Backend/API design or integration.
- Unrequested authentication, persistence, analytics, CMS, or payment features.
- Guessing missing content, imagery, typography, or behavior.
- Fabricating company claims, service categories, client relationships, portfolio permissions, endorsements, metrics, or contact destinations.

## 8. Handoff to Phase 1

Phase 1 may begin when Phase 0's specification is stable enough to determine the application's page model, asset handling, routing needs, and delivery constraints. The accepted information architecture (`PP-ART-018`) is the input for the page model and routing decisions; those decisions are not made before it is accepted. Any remaining uncertainty must be listed explicitly and must not affect foundational decisions.
