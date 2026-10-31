# Phase 1 — Application foundation

| Field | Value |
| --- | --- |
| Status | In progress: foundation merged to `main` at `ad45f296b2294e65048cf27d1d5473f54e14e52a`; G1 verification and gap review passed on PR #15; owner review and merge disposition are pending. See [Phase 1 verification and gap review](phase-1-verification-gap-review-2026-10-31.md). |
| Objective | Establish a reproducible, minimal React and TypeScript application |
| Depends on | Phase 0 specification and approved scope |
| Primary outputs | Application scaffold, dependency lockfile, strict TypeScript configuration, quality scripts, setup documentation |

## 1. Objective

Create the smallest sound technical foundation needed to implement the approved design. The result must be reproducible on a clean environment, straightforward to develop, and verifiable through documented commands.

React and TypeScript with TSX are confirmed. The owner-selected toolchain and delivery decisions are recorded in [DEC-012](../decision-log.md); brand tokens and the styling framework remain deferred to Phase 2.

## 2. Entry conditions

- Phase 0 exit criteria are met, or the owner has explicitly approved a limited foundation task that does not depend on unresolved design choices.
- The page model and routing needs are known from the accepted information architecture (`PP-ART-018`).
- The intended deployment/runtime constraints are understood sufficiently to select compatible tooling.
- The project owner has approved any material tooling decision that changes the delivery or maintenance model.

## 3. Scope and workstreams

### 3.1 Toolchain selection

Evaluate only the choices required by the known application:

- Build tool and development server.
- Package manager and lockfile format.
- Supported Node.js version and runtime constraints.
- Client-side versus server-rendered delivery, if the use case requires that decision.
- Styling approach.
- Routing library, only if more than one route or navigation behavior requires it.
- Test runner and browser-level test approach.

Record significant choices in the decision log, including the reason and relevant trade-offs. Do not add a framework, router, state-management package, component library, or backend by default.

### 3.2 Scaffold

- Create the minimal React application and TypeScript/TSX entry point.
- Establish a clear application composition boundary.
- Create only the source, public asset, and test directories required by the selected setup.
- Add a baseline page or shell only to prove the scaffold works; do not invent final design content.
- Add an appropriate .gitignore file.
- Keep environment-specific configuration separate from source code.

### 3.3 TypeScript configuration

- Enable strict TypeScript checking.
- Configure JSX handling for the selected React setup.
- Keep type declarations and compiler options aligned with the actual toolchain.
- Avoid suppressing errors or weakening strictness to accommodate avoidable implementation shortcuts.

### 3.4 Quality and verification tooling

Configure only checks appropriate to the project:

- Type checking.
- Linting.
- Formatting, if a formatter is selected.
- Unit/component testing.
- Production build.
- Browser automation or screenshot tooling when it will be used for the project's verification needs.

Ensure each command has a clear purpose and documented result. Do not add overlapping tools without a reason.

### 3.5 Dependency and repository hygiene

- Commit the package manifest and generated lockfile.
- Declare the supported runtime version.
- Review dependencies for purpose, maintenance status, and license compatibility.
- Avoid committing secrets, access tokens, private Canva links requiring authorization, or local environment files.
- Document required environment variables only when a confirmed integration requires them.
- Keep the repository free of generated build output and local caches.

### 3.6 Developer experience

- Document prerequisites and clean-install instructions.
- Document development, type-check, lint, test, and build commands that actually exist.
- Ensure a new contributor can start the app from the README without relying on undocumented local state.

## 4. Deliverables

| Artifact | Required content |
| --- | --- |
| Application scaffold | React + TypeScript application entry point |
| Package manifest | Dependencies, scripts, runtime constraints |
| Lockfile | Reproducible resolved dependency graph |
| TypeScript configuration | Strict checks and valid TSX configuration |
| Quality configuration | Selected lint, format, and test tooling |
| Repository hygiene | Ignore rules and no committed secrets |
| Setup documentation | Prerequisites and verified development commands |
| Decision updates | Toolchain choices and rationale |

## 5. Verification

Run against the committed project state:

1. Clean dependency installation using the committed lockfile.
2. TypeScript type checking.
3. Configured lint and formatting checks.
4. Relevant scaffold smoke test, if a test runner is configured.
5. Production build.
6. Start the development server and verify the application loads.
7. Inspect browser console output for application errors.

Record the exact commands and results. A successful local install alone is not proof that the production build works.

## 6. Exit criteria

Phase 1 is complete only when:

- The application runs with the selected React and TypeScript toolchain.
- A clean install succeeds using the committed lockfile.
- Strict TypeScript checks pass.
- Configured static checks pass.
- The production build succeeds.
- The development entry point is documented and works.
- Dependencies and significant technical decisions are documented.
- No unapproved backend or unnecessary infrastructure has been introduced.

## 7. Out of scope

- Full recreation of the Canva design.
- Final typography, color, and spacing implementation.
- Unrequested backend services or external integrations.
- Premature generalized component library or design system.
- Production deployment unless it is required to validate the selected delivery model.

## 8. Handoff to Phase 2

Phase 2 receives a reproducible application foundation, the approved page/content specification, source assets, and the measured design-token inventory. If a source dependency changes, update Phase 0 artifacts before proceeding.
