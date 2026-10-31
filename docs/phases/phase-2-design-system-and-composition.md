# Phase 2 — Design system and page composition

| Field | Value |
| --- | --- |
| Status | Authorized after source-led G0 approval under DEC-018; G2 evidence remains required |
| Objective | Translate the approved visual reference into design tokens, semantic page structure, and working React components |
| Depends on | Phase 0 approval and Phase 1 application foundation |
| Primary outputs | Implemented design tokens, asset integration, page composition, typed components |

## 1. Objective

Build the website's primary visual composition from the verified Canva specification. The implementation should preserve the source's design identity while using native web layout and semantic content rather than flattening the complete design into a single image.

## 2. Entry conditions

- Phase 0 inventories and source-led seven-section scope are owner-approved under DEC-018.
- Unavailable original assets and rights-dependent items have explicit placeholders; no unapproved substitute is permitted.
- Typography choices and asset-use constraints are known: Aileron Regular/Bold; text wordmark fallback until the original logo symbol is supplied.
- Phase 1 type checking, development, and production build are operational.
- All seven source sections are in scope. Preserve the Statistics, Testimonials, Contact/footer and image regions using explicit placeholder states where values, permissions, destinations or originals are unavailable.
- The PDF source remains owner-held; re-supply it before detailed side-by-side visual comparison and before G2 exit. The exact CSS comparison viewport must be recorded when the source is available.

## 3. Scope and workstreams

### 3.1 Design-token implementation

- Translate approved colors into semantic tokens.
- Implement the measured typography hierarchy, font weights, sizes, line heights, and fallbacks.
- Implement spacing, layout, border, radius, and elevation values where present in the source.
- Keep tokens centralized in the convention supported by the selected styling approach.
- Preserve distinct source values where their visual roles differ.
- Do not introduce decorative tokens that are not supported by the reference or a confirmed web requirement.

### 3.2 Asset integration

- Add the approved source images, logos, icons, illustrations, and font assets.
- Preserve aspect ratios and documented crop/focal-point behavior.
- Choose appropriate image formats and dimensions for the rendered use.
- Use descriptive asset names and maintain a traceable mapping to the asset inventory.
- Provide appropriate alternative text in the page implementation.
- Avoid embedding meaningful page copy in raster images when it can be represented as HTML text.

### 3.3 Semantic page structure

- Translate the approved content hierarchy into semantic HTML.
- Use headings in a meaningful order.
- Use sections, navigation, lists, figures, and other semantics when they accurately describe the content.
- Keep visible copy faithful to the approved content inventory.
- Preserve the specified reading order independently of visual positioning.

### 3.4 Component implementation

- Build substantial page sections as components when the boundary improves clarity.
- Extract shared components for repeated patterns or shared behavior.
- Use typed props and clear component responsibilities.
- Keep page-specific composition close to the page.
- Prefer composition over components with many boolean variants.
- Do not introduce abstraction without a real use case.

### 3.5 Page composition

- Implement the page or pages in the approved section order.
- Match the reference's hierarchy, alignment, proportions, typography, imagery, and spacing at the primary comparison viewport.
- Implement the specified links and actions with semantic controls.
- Keep any unresolved behavior visibly unimplemented only when it is explicitly listed as a blocker; do not ship inert controls that look complete.

### 3.6 Incremental visual review

- Compare implementation screenshots with the source at the agreed primary viewport.
- Review major geometry, section boundaries, typography, image crop, content density, and alignment.
- Correct differences while the relevant section is being implemented.
- Record accepted deviations and their reasons.

This phase establishes the composition. Full viewport coverage and accessibility verification are completed in Phase 3 and final release verification in Phase 4.

## 4. Deliverables

| Artifact | Required content |
| --- | --- |
| Design tokens | Implemented semantic visual values from the approved inventory |
| Asset integration | Approved assets with correct usage and alternatives |
| Page composition | All in-scope pages and sections |
| Component implementation | Typed components with justified responsibilities |
| Content integration | Approved copy, hierarchy, and destinations |
| Visual review record | Comparison viewport, identified differences, disposition |

## 5. Verification

- Confirm all approved page sections are present and ordered correctly.
- Compare visible copy against the content inventory.
- Verify image selection, dimensions, cropping, and focal points.
- Check that the implemented token values map to the approved design inventory.
- Confirm interactive elements use appropriate semantic controls.
- Run type checking, linting, relevant tests, and production build.
- Capture and review a screenshot at the primary reference viewport.
- Record deviations and obtain approval for any material visual/content change.

## 6. Exit criteria

Phase 2 is complete only when:

- All in-scope page sections are implemented.
- Source content and assets are represented accurately.
- The design-token inventory is implemented or deviations are documented.
- Components have clear responsibilities and typed interfaces.
- The primary composition has been reviewed against the reference.
- All material differences are fixed or owner-approved.
- Configured automated checks and the production build pass.
- No interactive control falsely implies functionality that is not implemented.

## 7. Out of scope

- Final responsive verification across the full viewport matrix.
- Final WCAG conformance assessment.
- Unrequested backend integration or data persistence.
- Unapproved changes to source copy, brand assets, or page hierarchy.
- Final production release approval.

## 8. Handoff to Phase 3

Phase 3 receives the complete primary composition, recorded reference screenshots, known interactive behavior, and an explicit list of responsive and accessibility risks. Phase 2 should not be considered complete while core sections are still missing.
