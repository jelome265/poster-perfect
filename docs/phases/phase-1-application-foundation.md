# Phase 1 — Application foundation

| Field | Value |
| --- | --- |
| Status | Complete: G1 accepted by the project owner under DEC-016 on 2026-10-31. Foundation and verification follow-up merged to `main` at `9e81adb7a178db9c48106292b3351d0bafe0a9e8` through PR #15. See [Phase 1 verification and gap review](phase-1-verification-gap-review-2026-10-31.md). |
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

Phase 2 receives the reproducible application foundation and Phase 0 specification outputs. **Phase 2 remains blocked while G0 is open**: exact contact/availability facts, original asset files and rights, social URLs, and publication permissions must be supplied or explicitly excluded/accepted by the owner. If a source dependency changes, update Phase 0 artifacts before proceeding.

## 9. Final G1 disposition

**Disposition:** Complete, owner-authorized on 2026-10-31 under [DEC-016](../decision-log.md).

**Merged baseline:** PR #15 merged to `main` at [`9e81adb7a178db9c48106292b3351d0bafe0a9e8`](https://github.com/jelome265/poster-perfect/commit/9e81adb7a178db9c48106292b3351d0bafe0a9e8).

**Verification on the exact merge commit:**
- [Application quality — run 41172107909](https://github.com/jelome265/poster-perfect/actions/runs/41172107909): PASS — `npm ci`, lint, strict TypeScript, 1/1 shell test, production build, and production-preview HTTP/asset smoke.
- [Documentation integrity — run 41172107907](https://github.com/jelome265/poster-perfect/actions/runs/41172107907): PASS on the merge revision. This close-out documentation change must independently pass PP-VER-013 on its pull request.
- [Dependency security and license audit — run 41172108087](https://github.com/jelome265/poster-perfect/actions/runs/41172108087): PASS — npm advisory audit, OSV vulnerability audit, SPDX inventory/license policy, and deps.dev metadata check.

PR #15 candidate `ecfc625bcc206771bfc1a6b05a20888a51d862ce` passed all six configured required contexts. The merge commit reports five GitHub Actions check runs; the separate GitHub Advanced Security `osv-scanner` context passed on the PR candidate. The active `Protect main` ruleset (ID `26256454`) targets `main`, enforces strict required checks, and has no bypass actors. It requires six contexts: `Strict lint, type check, and build`, `PP-VER-013 / documentation integrity`, `npm advisory audit`, `OSV vulnerability audit / osv-scan`, `SPDX inventory and license policy` (GitHub Actions app ID `15368`), and `osv-scanner` (GitHub Advanced Security app ID `57789`).

**Accepted limitations:** the shell test suite contains one heading assertion; the production-preview smoke requests HTML and same-origin JS/CSS assets but does not execute the client bundle in a real browser. A historical headless Chromium smoke was recorded against the development server at `ef613375`. No production deployment was performed. A deliberately failing PR check was not used to test merge blocking, and the ruleset requires zero approving reviews. These limits do not invalidate the Phase 1 exit criteria; they remain explicit verification/governance boundaries.

**Phase boundary:** G1 is complete. G0 remains open, so Phase 2 is not authorized to start. This disposition does not authorize production deployment or publication of unverified contact details, assets, testimonials, or client work.
