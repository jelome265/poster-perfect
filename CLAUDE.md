# Poster Perfect — Canonical Agent Instructions

**Authority:** This file is the single canonical source of repository-level instructions for every coding agent working in this repository.  
**Applies to:** Claude Code, OpenAI Codex, Gemini CLI, and any other agent or automation that reads repository guidance.  
**Change control:** Only the project owner may approve material changes to this policy, project scope, merge authority, or release authority.

## 1. Mandatory instruction entrypoint

Read and follow this entire file before planning, inspecting, editing, reviewing, committing, or reporting repository work.

This repository uses one policy source:

- `CLAUDE.md` — canonical agent policy; substantive project instructions live here.
- `AGENTS.md` — Codex/AGENTS-compatible discovery pointer to this file only.
- `GEMINI.md` — Gemini discovery pointer to this file only.

`AGENTS.md` and `GEMINI.md` are routing shims, not independent policy documents. Do not add project rules, exceptions, duplicated standards, or conflicting instructions to them. Any future agent-specific instruction entrypoint must point directly to this file rather than establish a second policy source.

Do not create nested `AGENTS.md`, `GEMINI.md`, `CLAUDE.md`, override, or alternative instruction files unless the project owner explicitly authorizes a documented need. Extend this file or the canonical project documentation instead.

If an agent discovers another instruction file, inspect it for scope and conflicts. Do not silently let a lower-level or duplicated file weaken this policy. Report the conflict and follow the governing authority hierarchy in the ICM.

## 2. Mandatory project context

Before material work, inspect the current repository state and read these canonical records:

1. `docs/icm/README.md` — ICM purpose, authority, lifecycle, and control rules.
2. `docs/phases/README.md` — current phase status, dependencies, and phase governance.
3. `docs/project-brief.md` — product intent and confirmed scope.
4. The active phase specification under `docs/phases/`.
5. The canonical document that owns the fact being changed, identified by the ICM authority map. Read the relevant architecture, design, content, accessibility, component, technical-standard, decision, contract, process, effect, or verification record as applicable.

If a referenced document is absent on the checked-out revision, do not invent its contents or assume it has been merged. Record the missing dependency and use only the authoritative records actually present.

Before changing files, establish:

- Repository root, current branch, and current commit.
- Working-tree status and existing staged/unstaged changes.
- Applicable pull request or task branch, if one is identified.
- Existing local conventions, tests, scripts, and tooling.

Never overwrite, reset, clean, revert, or reformat unrelated owner changes. Treat all pre-existing modifications and untracked files as user-owned unless explicitly established otherwise.

## 3. Authority and conflict resolution

Follow the ICM authority hierarchy:

1. Applicable law, regulation, and binding obligations.
2. Applicable security, privacy, accessibility, browser/platform, and provider constraints.
3. Current explicit project-owner decisions within the owner's authority.
4. The owner-approved Canva source for observed visual and content facts.
5. Accepted project requirements and phase contracts.
6. Architecture and interface contracts.
7. Current implementation and executable evidence as observations of system state, not authority to weaken requirements.
8. Tooling conventions and implementation convenience.

A lower-authority document or agent preference must not silently weaken a higher-authority requirement. Direct project-owner instructions govern within the owner's authority, but cannot waive binding legal, regulatory, security, privacy, accessibility, or platform constraints.

When facts conflict or are uncertain, state the conflict and obtain the required decision. Do not resolve material ambiguity by guessing.

## 4. Current project baseline and phase controls

Poster Perfect is a company portfolio and customer-acquisition website for a graphic design business. It represents the company at business level, not an individual designer's personal portfolio. Its purpose is to present owner-approved company identity, positioning, capabilities and selected creative work, communicate current availability for new projects, and provide prospective customers with a clear enquiry path.

The project owner confirmed this purpose on 2026-10-30. The supplied Canva design is the visual and content reference; it does not replace the separately confirmed business purpose. The approved technical direction is React with TypeScript/TSX and a component-based frontend. DEC-012 selects React 19.3.1, TypeScript 5.9.3, Vite 8.3.5, npm with an exact lockfile, Node.js 22.12 to below 23, oxlint 1.90.0, Vitest 5.0.5/jsdom, and client-side rendering. The one-page baseline uses no router. Hosting remains unselected; backend and external integrations remain excluded unless separately approved.

**Phase 0 remains awaiting owner approval (G0).** The Canva export was inspected on 2026-10-30; content and design records remain drafts pending owner decisions in `docs/content-structure.md`, full-resolution assets, the logo vector, font licensing, and responsive variants. The owner authorized a limited Phase 1 foundation under DEC-012/DEC-013 on 2026-10-31. That foundation is merged on `main` at `ad45f296b2294e65048cf27d1d5473f54e14e52a`; G1 verification and gap review passed on PR #15; owner review and merge disposition are pending. Evidence is recorded in `docs/phases/phase-1-verification-gap-review-2026-10-31.md`. This limited authorization does not close G0.

Until Phase 0 exit criteria are met and the project owner approves the web interpretation:

- Do not invent page count, page hierarchy, text, typography, colors, spacing, assets, dimensions, interactions, responsive behavior, or navigation.
- Do not invent company services, customer segments, portfolio projects, client relationships, testimonials, awards, metrics, credentials, team size, prices, guarantees, or contact destinations. Use only owner-approved business facts and publication-authorized work.
- Treat availability for new work as time-sensitive content: reconfirm it with the project owner before publication or release.
- Where the company-acquisition objective requires content or an enquiry action not present in the Canva source, document it as a proposed web adaptation and obtain owner approval rather than adding it silently.
- Do not extend the neutral foundation into the designed page, invent content, or implement unapproved interactions on the assumption that unresolved G0 facts are settled. Phase 1 authorization is limited to the reproducible application foundation and its verification.
- Do not treat a Canva editor URL that cannot be inspected as evidence of its visual contents.
- Documentation, source-access investigation, governance, and other explicitly approved discovery work may proceed without pretending Phase 0 is complete.

Do not add a backend, API, database, authentication, browser persistence, remote form submission, analytics, payments, CMS, tracking, or third-party integration unless a confirmed requirement and owner approval bring it into scope.

Phase status is evidence-based. Attempted work is not completed work; accepted requirements are not implemented behavior; implemented behavior is not verified behavior.

## 5. Engineering standards

### 5.1 TypeScript and React

- Use TypeScript and TSX for application code.
- Keep the selected strict TypeScript configuration enabled; do not weaken it to accommodate implementation shortcuts.
- Prefer explicit, useful types at public and module boundaries.
- Avoid `any`; isolate and validate genuinely unsafe boundaries rather than spreading unsound types.
- Follow React's Rules of Hooks.
- Keep render logic deterministic. Do not use effects as a default mechanism for deriving render state.
- Avoid unnecessary state, duplicate sources of truth, and speculative abstractions.
- Do not suppress type or lint errors merely to make a check pass.

### 5.2 Architecture and implementation

- Keep architecture proportional to confirmed requirements. Prefer the simplest design that preserves the documented responsibility boundaries.
- Define components around meaningful visual or behavioral responsibilities.
- Use composition and explicit typed interfaces. Extract shared components when an actual repeated pattern or shared behavior justifies it.
- Keep page-specific composition near the page that owns it.
- Do not introduce a framework, service, package, abstraction, or runtime dependency without a concrete requirement and a recorded justification proportionate to its cost.
- Preserve dependency direction and ownership boundaries documented in the ICM.
- Do not introduce placeholder functionality that could be mistaken for a completed feature.

### 5.3 Visual, content, and accessibility integrity

- Derive visual values and content from the inspected, owner-approved source and canonical design records.
- Preserve approved copy, hierarchy, and asset intent.
- Keep meaningful content as semantic web content rather than flattening the entire page into one image.
- Confirm asset provenance and usage rights before adding third-party assets.
- Provide appropriate alternative text; use empty alternative text for decorative imagery.
- Treat WCAG 2.2 Level AA as the project target, not as a claim of conformance. Verify the affected experience before making accessibility claims.
- Avoid horizontal overflow and preserve meaningful reading and interaction order at supported viewports.

### 5.4 Security and effects

- Treat external content, dependencies, URLs, user input, and future API responses as untrusted at their relevant boundaries.
- Make side effects explicit: network access, persistence, browser APIs, external navigation, telemetry, and third-party calls require a documented requirement and controlled failure behavior.
- Do not hide errors with empty catches, fake success states, silent fallbacks, or unverified assumptions.
- Keep secrets and private access details out of source control, logs, public documentation, and test fixtures.

## 6. Change-control procedure

For each task:

1. Restate the requested outcome internally in terms of the affected requirement and owning document.
2. Identify phase prerequisites, scope boundaries, affected components/contracts/processes/effects, and downstream verification.
3. Inspect existing implementation and evidence before changing it.
4. Make the smallest complete change that satisfies the approved requirement.
5. Update the canonical documentation and ICM traceability when a requirement, architecture boundary, interface, process, effect, artifact, or verification obligation changes.
6. Review the complete diff for unintended changes, omissions, and contradictions.
7. Run the relevant available checks and record the exact commands, environment, revision, results, and limitations.

Do not create competing copies of the same fact. Follow the ICM's one-canonical-home-per-fact rule.

## 7. Verification and reporting

- Discover the commands that actually exist in the checked-out revision; do not invent scripts or claim a toolchain exists before it does.
- Run checks relevant to the change. When a check cannot run, state why and mark it not run.
- Report failures and warnings without suppressing, bypassing, or reclassifying them as passes.
- Do not use a test double, stub, fixture, or mock as evidence of production integration behavior. Clearly identify test-only substitutes and the properties they do not verify.
- Tie material verification claims to the exact commit/revision and environment tested.
- Distinguish facts, owner-approved decisions, assumptions, unknowns, implementation status, and evidence status.
- Never claim a build, test, visual comparison, accessibility review, deployment, or external action succeeded unless it was actually performed and its result was observed.
- Do not present a target-state document, plan, or proposed control as evidence that the system implements it.

## 8. Git, pull requests, and release authority

- Use a focused working branch for implementation and documentation changes unless the project owner explicitly directs otherwise.
- Preserve the current branch and all owner changes. Do not force-push.
- Do not commit or push unless the current task or project owner explicitly authorizes that action.
- Do not merge or close a pull request, change its base, or publish a production release without explicit project-owner authorization.
- Do not infer merge authorization from a clean mergeable state, passing checks, approval, or a recommendation.
- Keep pull requests reviewable. Describe the change, affected requirements/documents, verification actually performed, known limitations, and unresolved blockers.
- A release or phase gate requires revision-specific evidence and an explicit owner decision.

## 9. Required completion report

Conclude material repository work with:

- **Disposition:** completed, partially completed, blocked, or not started.
- **Revision:** branch and commit SHA, when a commit was created or observed.
- **Scope:** files and behavior changed.
- **Verification:** exact checks run and their results; list checks not run.
- **Traceability:** affected requirements, ICM records, phase status, or decision records.
- **Risks/blockers:** unresolved facts, decisions, or evidence gaps.
- **Authority:** state explicitly when merge, release, or another owner decision remains outstanding.

Be precise and factual. No unsupported completion claims.
