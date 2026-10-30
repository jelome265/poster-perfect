# Technical standards

These standards apply to the implementation once the application scaffold exists. They describe expected engineering practice; they are not evidence that tooling or checks have already been installed.

## TypeScript and React

- Write application components in TypeScript and TSX.
- Enable TypeScript strict mode in the project configuration.
- Prefer explicit, useful types at component and module boundaries.
- Avoid `any`. When an unsafe boundary cannot be avoided, isolate it, validate the data, and document why the exception is necessary.
- Use function components and React hooks in accordance with the Rules of Hooks.
- Keep render logic predictable. Use effects to synchronize with external systems, not as a default mechanism for deriving render state.
- Avoid unnecessary state, duplicated state, and prop drilling that indicates a genuinely shared concern.
- Do not suppress type errors to make a build pass.

## Component design

- Define a component around a meaningful visual or behavioral responsibility.
- Keep props explicit and typed; avoid broad configuration objects that make component behavior difficult to understand.
- Prefer composition over deeply nested boolean variants.
- Extract shared components when there is a real repeated pattern or shared behavior.
- Keep page-specific composition close to the page that uses it.
- Do not build a generic design system before the reference design demonstrates the need for one.

## Styling and responsive behavior

- Derive visual values from the inspected reference and record them in the design-system inventory.
- Use shared tokens for values that should remain consistent.
- Prefer fluid layout primitives and content-driven sizing over fixed coordinates copied from a static canvas.
- Avoid horizontal overflow at supported viewport sizes.
- Preserve intentional hierarchy and alignment as content reflows.
- Do not select a styling framework until its benefits are clear for this project.

## Content and assets

- Preserve source copy unless a change is explicitly approved.
- Keep meaningful text available as text in the document rather than flattening the complete design into an image.
- Provide appropriate alternative text for informative images; use empty alternative text for purely decorative images.
- Use appropriately sized image assets and avoid shipping unnecessarily large files.
- Confirm asset provenance and usage rights before including third-party assets.

## Dependencies

- Prefer platform capabilities and existing project dependencies when they satisfy the requirement.
- Add a dependency only when it provides a clear benefit that justifies its maintenance and security cost.
- Use the package manager's lockfile and commit it with dependency changes.
- Avoid unmaintained packages and broad dependency additions for small isolated tasks.
- Record material architectural dependencies in the README or architecture documentation.

## Code quality

- Keep naming consistent and descriptive.
- Remove dead code, temporary scaffolding, unused imports, and debugging output before review.
- Handle errors explicitly; do not hide failures behind empty catches or misleading success states.
- Keep comments focused on non-obvious intent and constraints rather than narrating straightforward code.
- Do not introduce placeholders that look like completed functionality.

## Verification gates

Once the scaffold defines the relevant commands, changes should pass the available checks before review:

1. TypeScript type checking.
2. Linting and formatting checks, where configured.
3. Relevant unit or component tests.
4. Production build.
5. Visual inspection at the agreed viewport sizes.
6. Keyboard and accessibility checks for affected flows.

Document which checks are automated and which are manual. Do not claim a check passed unless it was actually run against the current changes.

## Git workflow

- Implement work on a focused branch.
- Keep pull requests scoped and explain the change, verification performed, and known limitations.
- Do not merge a pull request without explicit authorization from the project owner.
- Never use force-push to bypass review or recover from a conflicting update.
