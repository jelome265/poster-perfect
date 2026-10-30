# Accessibility requirements

## Conformance target

Use **WCAG 2.2 Level AA** as the project accessibility target. WCAG 2.2 is a W3C Recommendation, and W3C advises using the latest WCAG version when developing or updating accessibility policies.

Reference: [W3C Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/).

This is a target, not a claim of conformance. Conformance can only be assessed against the implemented page and its responsive variations.

## Requirements

### Structure and semantics

- Use landmarks and semantic elements that reflect the page structure.
- Maintain a logical heading hierarchy.
- Use links for navigation and buttons for actions.
- Ensure meaningful content and controls remain available to assistive technology.
- Do not use visual styling alone to communicate essential meaning.

### Keyboard and focus

- All interactive functionality must be operable using a keyboard.
- Focus order must follow a meaningful sequence.
- Provide a visible focus indicator.
- Do not create keyboard traps.
- Ensure focused elements are not obscured by sticky or overlay content.

### Color and text

- Do not rely on color alone to convey information.
- Check text and interface contrast against WCAG 2.2 requirements.
- Support text resizing and browser zoom without loss of content or functionality.
- Avoid embedding essential copy only in image assets.

### Images and media

- Provide text alternatives for informative images.
- Use empty alternative text for decorative images.
- Give controls and linked images accessible names that describe their purpose.
- Provide captions or alternatives when audio or video content is introduced.

### Responsive and input behavior

- Keep content usable at narrow viewports and at increased zoom.
- Ensure controls have usable target sizes and adequate spacing.
- Do not require a specific pointer gesture when an accessible alternative is needed.
- Respect the user's reduced-motion preference when motion is present.

### Forms and feedback

If forms are required by the inspected design:

- Associate visible labels with their controls.
- Identify required fields and validation errors clearly.
- Associate error messages with the relevant fields.
- Announce important dynamic feedback to assistive technology.
- Do not communicate submission success unless the action actually succeeded.

## Verification

Combine automated checks with manual review. Automated tooling alone cannot establish WCAG conformance.

- Inspect the page with keyboard-only navigation.
- Check focus visibility and order.
- Test representative screen-reader output.
- Check contrast for text and controls.
- Test zoom and narrow viewport layouts.
- Review image alternatives and heading structure.
- Test reduced-motion behavior where applicable.
- Record findings and remediation in the relevant pull request.

Do not add an accessibility badge or publish a conformance claim without evidence.
