# Component guidelines

## Status

The component inventory will be produced after the source design is inspected. Naming and boundaries should reflect the actual composition rather than a presumed poster or landing-page pattern.

## Component criteria

Create a component when one or more of these conditions apply:

- A visual or interaction pattern is repeated.
- A section has a coherent responsibility and benefits from a clear boundary.
- A piece of behavior needs to be isolated and tested.
- The component has a useful typed contract that simplifies its consumers.

Do not create a component solely because a block of JSX is visually large. Keep simple, one-off markup local when extraction would make the code harder to follow.

## Responsibilities

A component should have one coherent responsibility. Its public props should communicate what it renders or does without requiring consumers to understand its internal implementation.

Prefer:

- Explicit typed props.
- Composition for related visual elements.
- Semantic HTML for document structure.
- Native links and buttons for their intended behaviors.
- Local state for local interactions.
- Shared components for genuinely shared patterns.

Avoid:

- Components that mix unrelated page sections.
- Components with many boolean props that create unpredictable combinations.
- Duplicated markup whose differences are only accidental.
- Generic abstractions that have no concrete second use.
- Using clickable containers where a semantic link or button is appropriate.

## Component inventory

After inspecting the design, list components by page or section.

| Component | Responsibility | Inputs / interactions | Reused by |
| --- | --- | --- | --- |
| Pending source review | Pending | Pending | Pending |

## Review checklist

- [ ] Each component has a clear responsibility.
- [ ] Props are typed and intentionally scoped.
- [ ] Page-specific content is not hidden inside unrelated reusable components.
- [ ] Shared components are genuinely shared.
- [ ] Interactive components expose keyboard-accessible behavior.
- [ ] The component tree reflects the page hierarchy without unnecessary wrapper layers.
