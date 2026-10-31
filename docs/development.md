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
| `npm run lint` | Lint with oxlint |
| `npm test` | Run the unit and component tests once (Vitest, jsdom) |
| `npm run build` | Type-check, then produce the production bundle in `dist/` |
| `npm run preview` | Serve the production bundle locally after `npm run build` |

Each command was run against the working tree on 2026-10-31. Results are recorded in the pull request that introduces this file; see the decision log for the toolchain rationale.

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
