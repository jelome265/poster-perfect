# Content and page structure

## Status

**Pending source inspection.** The number of pages, sections, and content hierarchy have not yet been established. Do not assume a particular landing-page structure.

Ownership: the page set, hierarchy, section order, and navigation structure are canonical in [the information architecture](information-architecture.md) (`PP-ART-018`). This document owns section content and the interaction inventory. Each fact has one home; reference IDs rather than copying values.

## Content capture rules

- Transcribe visible text exactly before making editorial changes.
- Preserve capitalization, punctuation, line breaks, and hierarchy where they affect the design.
- Record the relationship between headings, body copy, labels, captions, and calls to action.
- Record link destinations and expected behavior for interactive content.
- Do not invent copy to fill apparent whitespace.
- Separate content from presentation when doing so makes the content easier to maintain or reuse.

## Page inventory

Complete one entry for every page or artboard that is in scope.

| Field | Value |
| --- | --- |
| Page / route | Enter the `PP-IA` identifier from `information-architecture.md` §5.1; do not record the route here |
| Purpose | Pending |
| Primary audience | Pending |
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

Before implementation is considered complete, verify that all source content is represented, the reading order is sensible, every interactive element has an agreed outcome, and no copy or destination was invented during translation.
