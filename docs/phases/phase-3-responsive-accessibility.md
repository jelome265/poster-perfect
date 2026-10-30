# Phase 3 — Responsive and accessible implementation

| Field | Value |
| --- | --- |
| Status | Not started |
| Objective | Make the approved composition usable across supported viewports, input methods, and assistive technologies |
| Depends on | Phase 2 page composition and interaction implementation |
| Primary outputs | Responsive layouts, accessible semantics and interactions, viewport/accessibility verification record |

## 1. Objective

Adapt the implemented source composition for the web without losing its hierarchy or usability. Verify that content and interactions remain perceivable and operable across the supported viewport range, keyboard input, and assistive technology.

The project accessibility target is WCAG 2.2 Level AA. This target must be assessed against the implementation; it is not an automatic claim of conformance.

Reference: [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/).

## 2. Entry conditions

- Phase 2 composition is implemented and has passed its exit criteria.
- The owner-approved responsive interpretation is documented.
- The supported viewport/browser matrix is agreed.
- Interactive elements and expected outcomes are inventoried.
- The primary design reference and screenshots are available for comparison.

## 3. Scope and workstreams

### 3.1 Responsive layout

- Implement the approved responsive interpretation for each page and section.
- Derive breakpoints from content/layout constraints rather than arbitrary device labels.
- Allow text and content regions to reflow without clipping or unintended overlap.
- Adapt grid, columns, navigation, spacing, typography, and image crops as documented.
- Preserve semantic reading order when the visual layout changes.
- Avoid fixed widths and absolute positioning where they make the layout brittle.
- Ensure no unintended horizontal scrolling for ordinary page content at supported narrow viewports.

### 3.2 Viewport and zoom verification

- Test the agreed narrow, intermediate, and wide viewport sizes.
- Test content reflow at a width equivalent to 320 CSS pixels where applicable to WCAG 2.2 Reflow requirements.
- Verify text can be resized to 200% without loss of content or functionality.
- Review browser zoom and layout behavior for clipping, obscured controls, and overlap.
- Record any content that legitimately requires two-dimensional layout and assess applicable WCAG exceptions.

### 3.3 Semantic structure and assistive technology

- Verify landmarks and heading hierarchy.
- Verify accessible names for controls and meaningful images.
- Use empty alternative text for decorative images.
- Ensure the reading order makes sense independently of visual placement.
- Associate form labels, instructions, and errors with the relevant controls if forms exist.
- Ensure dynamic feedback is exposed to assistive technology when applicable.

### 3.4 Keyboard and focus behavior

- Verify all interactive functionality is keyboard-operable.
- Confirm focus order is meaningful and predictable.
- Provide visible focus indicators.
- Ensure focus is not trapped or hidden by overlays or sticky elements.
- Confirm menus, dialogs, and custom controls expose appropriate keyboard behavior if present.
- Prefer native links and buttons over custom interactive containers.

### 3.5 Contrast, targets, and motion

- Check text and relevant non-text contrast against WCAG 2.2 AA requirements.
- Do not communicate essential information through color alone.
- Review pointer target size and spacing against applicable WCAG 2.2 criteria and exceptions.
- Respect reduced-motion preferences for non-essential motion.
- Ensure animation does not interfere with reading, control, or comprehension.

### 3.6 Accessibility assessment

- Use automated accessibility checks to identify detectable issues.
- Perform manual keyboard, zoom, screen-reader, and visual checks.
- Record findings with affected page/element, impact, reproduction details, and disposition.
- Fix issues or obtain explicit acceptance for a documented limitation before exit.

Automated tools are diagnostic aids and do not by themselves establish WCAG conformance.

## 4. Deliverables

| Artifact | Required content |
| --- | --- |
| Responsive implementation | Layouts for the agreed viewport range |
| Viewport matrix | Tested viewport sizes and outcomes |
| Accessibility findings | Issues, impact, remediation, disposition |
| Keyboard verification | Focus sequence and control operation results |
| Assistive technology review | Relevant screen-reader observations |
| Contrast review | Text and interface contrast findings |
| Responsive deviation record | Approved differences from the source design |

## 5. Verification

- Test every in-scope page at each agreed viewport category.
- Verify no unintended horizontal overflow, clipped text, overlapping sections, or inaccessible controls.
- Verify navigation and all controls using keyboard only.
- Inspect focus visibility, order, and obstruction.
- Test text resizing and reflow.
- Review semantic landmarks, headings, accessible names, and image alternatives.
- Perform a representative screen-reader review.
- Check applicable color and non-text contrast requirements.
- Test reduced-motion behavior where motion is implemented.
- Run type checks, linting, relevant tests, and production build after changes.

Record the specific pages, viewport dimensions, browser, tools, and manual procedures used.

## 6. Exit criteria

Phase 3 is complete only when:

- The approved responsive behavior is implemented and tested.
- The interface remains usable at all agreed viewport sizes.
- Keyboard operation and visible focus are verified.
- Semantic structure and accessible names are reviewed.
- Applicable WCAG 2.2 AA checks have been assessed.
- Accessibility findings are resolved or explicitly accepted with rationale.
- Responsive deviations are documented and approved.
- Configured automated checks and the production build pass.

Do not describe the site as WCAG-conformant solely because automated checks report no violations.

## 7. Out of scope

- Adding new pages or interactions not present in the approved scope.
- Introducing a backend solely to support a visual interaction.
- Final release authorization and deployment approval.
- Claiming conformance without a complete assessment of the relevant content and states.

## 8. Handoff to Phase 4

Phase 4 receives the responsive implementation, test matrix, accessibility findings and dispositions, visual reference set, and known limitations. Any unresolved issue that affects release must be clearly identified before the release review.
