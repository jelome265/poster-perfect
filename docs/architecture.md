# Frontend architecture

## Architectural direction

The confirmed implementation direction is React with TypeScript and TSX. The frontend should be component-based, responsive, and maintainable.

This document defines boundaries and principles, not a prematurely fixed directory structure. The concrete scaffold will be selected after the design's page model and behavior are understood.

## Logical responsibilities

The implementation should keep these responsibilities distinct:

1. **Application composition** — application entry point, page composition, and any confirmed route handling.
2. **Page sections** — substantial regions that express the hierarchy and layout of the source design.
3. **Reusable interface components** — repeated presentation or interaction patterns with a clear shared contract.
4. **Content and data** — copy, links, labels, and other content that should not be buried in presentation markup.
5. **Styling and design tokens** — shared visual values and responsive rules used consistently across the interface.
6. **Static assets** — images, icons, and fonts that belong to the project and are used by the interface.

These are logical boundaries. They do not require a separate folder or abstraction for every item.

## Component and dependency rules

- Compose pages from meaningful sections and smaller components.
- Keep components focused on one coherent presentation or interaction responsibility.
- Pass data and callbacks through explicit typed props.
- Keep local state close to the component that owns the interaction.
- Introduce shared state only when multiple parts of the interface genuinely need the same state.
- Keep low-level presentation components independent of page-specific content where practical.
- Avoid circular imports and avoid coupling reusable components to a specific page.
- Do not create abstractions solely to satisfy a folder taxonomy.

## Decisions deliberately deferred

The following choices remain open until implementation requirements justify them:

- Vite, another build tool, or a framework with server rendering.
- Client-side-only rendering versus server rendering.
- Routing library and route structure.
- CSS approach or styling framework.
- Package manager and Node.js version.
- Testing libraries and browser automation.
- Deployment provider and hosting configuration.
- Any backend or external service.

Do not add a router, state-management package, component library, backend, or other infrastructure without a demonstrated requirement.

## Suggested implementation shape

The eventual source tree should make the application entry point, page composition, reusable components, styles, and assets easy to find. The exact paths should be documented once the scaffold is selected; this document does not prescribe unverified paths.

## Architecture acceptance checks

- Dependencies flow from page composition toward lower-level reusable components.
- Component props and shared data contracts are typed.
- Content is not duplicated across multiple implementations without a reason.
- State is no more global than necessary.
- The architecture remains understandable without tracing through unnecessary wrapper layers.
- Each selected dependency has a clear purpose and is reflected in the project documentation.
