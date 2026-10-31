# Development setup

This application is at the Phase 1 foundation stage. It contains a neutral shell, not the designed website. See [Phase 1](phases/phase-1-application-foundation.md).

## Prerequisites

- Node.js 22.12 or later, below 23. The repository's `.nvmrc` pins `22`.
- npm, which ships with Node 22.

## Clean install

```sh
npm ci
```

`npm ci` installs exactly the versions in `package-lock.json`. Do not run `npm install` as a substitute when reproducing the build.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server (default `http://localhost:5173`) |
| `npm run typecheck` | Type-check with strict TypeScript (`tsc -b`) |
| `npm run lint` | Strict lint with oxlint; any warning fails (`--deny-warnings`) |
| `npm test` | Run the unit and component tests once (Vitest, jsdom) |
| `npm run build` | Type-check, then produce the production bundle in `dist/` |
| `npm run preview` | Serve the production bundle locally after `npm run build` |

CI (`.github/workflows/app-quality.yml`) runs `npm ci`, strict lint, type-check, unit tests, production build, and a production-preview HTTP/asset smoke on pull requests to `main`.

The initial toolchain commands were run on 2026-10-31. Revision-specific results and limitations are recorded in [the Phase 1 verification and gap review](phases/phase-1-verification-gap-review-2026-10-31.md); see the decision log for toolchain rationale.

## Repository layout

- `index.html`: HTML entry point.
- `src/main.tsx`: mounts the application into `#root`.
- `src/App.tsx`: neutral application shell.
- `src/App.test.tsx`: smoke test.
- `src/index.css`: neutral base styles only. Brand values are not defined until the owner approves the design tokens.
- `vite.config.ts`: build and test configuration.
- `tsconfig*.json`: strict TypeScript configuration for the application and for the build configuration.

## Not in this foundation

No router, styling framework, state-management library, backend, analytics, form submission, or third-party integration is present. Each requires a confirmed requirement and owner approval (see `CLAUDE.md` §4).
