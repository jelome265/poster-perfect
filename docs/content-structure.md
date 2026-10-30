# Content and page structure

## Status

**Pending source inspection.** The number of pages, sections, and content hierarchy have not yet been established. The company-level purpose is owner-confirmed: Poster Perfect is a graphic design company portfolio intended to attract prospective customers (DEC-008, PP-REQ-010). Do not assume a particular page structure.

Ownership: the page set, hierarchy, section order, and navigation structure are canonical in [the information architecture](information-architecture.md) (`PP-ART-018`). This document owns section content and the interaction inventory. Each fact has one home; reference IDs rather than copying values.

## Content capture rules

- Transcribe visible text exactly before making editorial changes.
- Preserve capitalization, punctuation, line breaks, and hierarchy where they affect the design.
- Record the relationship between headings, body copy, labels, captions, and calls to action.
- Record link destinations and expected behavior for interactive content.
- Do not invent copy to fill apparent whitespace. Company-specific copy must be based on owner-confirmed facts; any new web-specific copy absent from the Canva source requires approval and must be recorded as an adaptation.
- Record approved company positioning, services/capabilities, portfolio items, publication permissions, availability wording and enquiry details. Do not invent client relationships, testimonials, awards, credentials, metrics, project results, prices, guarantees or contact destinations.
- Record the source and publication permission for each portfolio item, client name or logo; exclude confidential or unauthorized material.
- Keep current availability tied to its owner-confirmation date and reconfirm it before publication.
- Separate content from presentation when doing so makes the content easier to maintain or reuse.

## Page inventory

Complete one entry for every page or artboard that is in scope.

| Field | Value |
| --- | --- |
| Page / route | Enter the `PP-IA` identifier from `information-architecture.md` §5.1; do not record the route here |
| Purpose | Pending |
| Primary audience | Prospective customers; specific segments pending owner confirmation |
| Main heading | Pending |
| Primary action | Pending |
| Secondary actions | Pending |
| Sections in order | Not recorded here; see `information-architecture.md` §5.3 |
| Required assets | Pending |
| Responsive variations | Pending |

## Section inventory

For each section, record:

- Its `PP-IA` section identifier from `information-architecture.md`. Position and order are owned by that document.
- Its role and intended message.
- Exact text content.
- Associated imagery or other media.
- Relevant links and interactions.
- Desktop layout and responsive reflow.
- Semantic HTML element or heading level.

## Interaction inventory

| Element | Expected behavior | Destination or outcome | Status |
| --- | --- | --- | --- |
| Pending source review | Pending | Pending | Not assessed |

Navigation entries are structured in `information-architecture.md` §5.4 and reference rows in this table. Use a link for navigation to a destination. Use a button for an action performed on the current page. Do not create decorative controls that appear interactive but do nothing.

## Content review

Before implementation is considered complete, verify that all source content and owner-approved company content are represented, the reading order is sensible, every customer-facing action has an agreed outcome and destination, portfolio publication permissions are recorded, availability is current, and no company claim or contact destination was invented during translation.
