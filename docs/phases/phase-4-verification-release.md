# Phase 4 — Verification and release readiness

| Field | Value |
| --- | --- |
| Status | Not started |
| Objective | Establish evidence that the implementation matches the approved design and is ready for owner-authorized release |
| Depends on | Phase 2 implementation and Phase 3 responsive/accessibility verification |
| Primary outputs | Final verification record, visual comparison evidence, resolved defect list, release checklist |

## 1. Objective

Perform the final quality review of the website against the approved source specification. Confirm that visual composition, content, interactions, responsive behavior, accessibility work, and build quality meet the agreed acceptance criteria.

Phase completion means release readiness has been demonstrated. It does not authorize merging or production deployment by itself.

## 2. Entry conditions

- In-scope pages and interactions are implemented.
- Phase 2 and Phase 3 exit criteria are satisfied.
- Approved source exports and baseline screenshots are available.
- Supported browsers and viewport sizes are documented.
- Known limitations and accepted deviations are recorded.
- A release target and deployment requirements are known, if deployment is in scope.

## 3. Scope and workstreams

### 3.1 Visual regression and design fidelity

For each in-scope page:

- Capture the implementation at the same viewport dimensions as the source comparison.
- Compare section geometry, alignment, spacing, typography, colors, borders, image crop, and content density.
- Inspect both the overall composition and details at normal reading scale.
- Distinguish meaningful visual defects from harmless rasterization differences caused by font rendering or browser differences.
- Record every material difference and its disposition.
- Obtain owner approval for intentional deviations.

Visual similarity should be judged using the approved source and documented criteria, not an arbitrary numerical pixel-difference threshold alone.

### 3.2 Functional verification

- Test every navigation link and destination.
- Test every button and call to action.
- Test any forms, validation, and success/error feedback if included.
- Test menu, modal, expandable, or stateful behavior if included.
- Confirm external links, downloads, and contact methods behave as documented.
- Confirm no control appears functional while remaining inert.
- Verify failure states where a real external operation is present.

Record the expected behavior and actual result for each interactive element.

### 3.3 Responsive and browser verification

- Repeat the agreed viewport matrix on the release candidate.
- Check critical flows in the supported browser set.
- Inspect layout shifts, overflow, text clipping, image loading, and interaction behavior.
- Confirm the application remains usable with zoom and keyboard input.
- Recheck accessibility fixes after final visual changes.

### 3.4 Automated quality gates

Run all configured checks against the final candidate:

- Clean dependency installation using the committed lockfile.
- TypeScript type checking.
- Lint and formatting checks.
- Unit/component tests.
- Browser/e2e tests where configured.
- Production build.
- Any configured dependency or security checks appropriate to the project's dependency surface.

Record exact commands, results, and the commit SHA being verified. A result from an earlier commit does not establish that the current candidate passes.

### 3.5 Runtime and deployment review

If a deployment target has been approved:

- Confirm the production build and output configuration.
- Verify required environment variables without exposing their values.
- Confirm the correct repository, branch, build command, and output directory.
- Review asset paths, routing fallback behavior, caching, and HTTPS as applicable.
- Test the deployed candidate and inspect browser console and network errors.
- Confirm no private source links, credentials, debug interfaces, or local-only configuration are exposed.

Do not configure a production deployment or publish a release without explicit owner authorization.

### 3.6 Defect disposition

Classify every release finding as one of:

- Fixed and reverified.
- Accepted by the project owner with rationale.
- Deferred with explicit scope and impact.
- Release blocker.

A release blocker must not be silently reclassified as a cosmetic difference. Record its impact and required action.

## 4. Deliverables

| Artifact | Required content |
| --- | --- |
| Visual comparison record | Reference and implementation viewport, findings, approved deviations |
| Functional test record | Each interaction, expected result, actual result |
| Responsive verification | Final tested viewport/browser matrix |
| Accessibility disposition | Findings, fixes, accepted limitations |
| Automated check record | Commands, results, commit SHA |
| Release checklist | Build, runtime, deployment, and configuration checks |
| Known limitations | Explicit remaining defects and scope decisions |
| Owner disposition | Approval to merge and/or release, recorded separately |

## 5. Verification

The release candidate must be verified from a known commit. At minimum:

1. Confirm the working tree and commit under review.
2. Perform a clean dependency install.
3. Run type checks, lint, tests, and production build.
4. Execute functional checks for every documented interaction.
5. Compare source and implementation screenshots at the agreed viewports.
6. Repeat responsive and accessibility spot checks after final changes.
7. Verify the deployed candidate if deployment is authorized.
8. Record results and attach relevant evidence to the pull request or release record.

## 6. Exit criteria

Phase 4 is complete only when:

- All in-scope functionality is verified.
- Material visual differences are fixed or owner-approved.
- Responsive and accessibility checks have documented results.
- Automated quality gates pass on the release candidate commit.
- Runtime/deployment checks pass if deployment is in scope.
- Remaining limitations are explicit and accepted.
- The project owner has reviewed the evidence and authorized the next action.

## 7. Out of scope

- Adding new requirements during final verification without change control.
- Hiding or suppressing failing checks to produce a green result.
- Merging pull requests without explicit owner approval.
- Production deployment or public release without explicit owner approval.
- Claiming complete accessibility conformance without sufficient assessment.

## 8. Completion and handoff

On successful exit, provide a concise release record containing the verified commit, test evidence, visual review evidence, known limitations, deployment reference if applicable, and the owner's merge/release disposition. The final handoff must distinguish verified facts from accepted risks.
