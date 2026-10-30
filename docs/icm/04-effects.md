# L3 — Effects, state and external boundaries

**Canonical level:** L3 — Effects and resources  
**Record class:** Side-effect control specification  
**Status:** Effect classes defined; concrete effect instances depend on Phase 0 and implementation

## 1. Purpose

This document prevents hidden side effects from appearing inside rendering or presentation code. It classifies effects by impact and defines the minimum control required for each class.

A React component can be visually simple while still triggering network, storage, navigation, privacy, or financial effects. Those effects must be explicit.

## 2. Effect classes

| Class | Name | Examples | Baseline policy |
|---|---|---|---|
| `E0` | Pure computation/render | Formatting a label, deriving a class name, rendering props | Preferred; deterministic for given inputs |
| `E1` | Ephemeral in-memory UI state | Open/closed menu, selected tab, input draft | Allowed only when source behavior requires it |
| `E2` | Browser/platform effect | URL navigation, focus, download, clipboard, media playback | Requires an interaction contract and user gesture where browser policy requires it |
| `E3` | Network read | Loading approved remote content, calling an API, retrieving package dependencies from a registry | Runtime requests require an approved destination/data contract; build-time dependency retrieval requires a locked dependency graph and trusted registry configuration |
| `E4` | Durable local state or artifact write | localStorage, IndexedDB, cookies, service worker cache, generated build output | Browser persistence is not assumed; build output must be isolated, attributable to the source revision, and excluded from source control unless explicitly required |
| `E5` | External mutation/action | Form submission, email provider, payment, booking, remote account mutation, deployment/promotion of a live site | Not in baseline; explicit owner approval and full failure/duplicate controls required |

Loading a same-origin asset from the deployed build is an expected browser resource request; it is tracked under PP-EFF-004. Loading a third-party asset or remote resource is an E3 boundary and requires an approved source. Track asset provenance, size, and failure behavior in the asset inventory.

## 3. Effect inventory

| ID | Effect | Class | Status | Control |
|---|---|---|---|---|
| `PP-EFF-001` | Pure rendering and derivation | E0 | Expected | No hidden mutation or network access during render |
| `PP-EFF-002` | Ephemeral component state | E1 | Conditional | Typed state transitions and accessible state reflection |
| `PP-EFF-003` | Browser navigation | E2 | Conditional | Approved destination, semantic link, safe navigation |
| `PP-EFF-004` | Static asset retrieval | E2/resource | Expected | Asset inventory, correct path, format, size, fallback |
| `PP-EFF-005` | Remote data request | E3 | Excluded until approved | API contract, validation, timeout, failure and data minimization |
| `PP-EFF-006` | Durable browser persistence | E4 | Excluded until approved | Data classification, retention, consent/notice if required, versioning and clear/reset behavior |
| `PP-EFF-007` | External mutation or submission | E5 | Excluded until approved | Explicit authority, validation, duplicate handling, confirmation, auditability where needed |
| `PP-EFF-008` | Build-time dependency retrieval | E3 | Expected only during an approved build | Locked manifest/lockfile, trusted registry configuration, integrity checks, no credentials in repository |
| `PP-EFF-009` | Build artifact generation | E4 | Expected during an approved build | Clean output directory, known source revision, reproducible build inputs, artifact provenance |
| `PP-EFF-010` | Deployment or production promotion | E5 | Excluded until explicitly authorized | Owner approval, target verification, revision attribution, rollback/recovery plan where supported |

The expected/conditional/excluded statuses do not claim that these effects already exist in code.

## 4. Required effect record

Every concrete effect must record:

| Field | Required question |
|---|---|
| Initiator | Which user action, lifecycle boundary, or process starts it? |
| Owner | Which component or adapter owns the operation? |
| Target | Browser capability, asset, storage area, API, or external service? |
| Inputs | Which values cross the boundary, and how are they validated? |
| Authority | Who is allowed to cause the effect? |
| Data | What information is disclosed, read, written, or retained? |
| Timing | Synchronous, asynchronous, cancellable, or background? |
| Failure | What happens on rejection, timeout, unavailable target, or partial completion? |
| Retry | Is retry safe? Could it duplicate an action? |
| Idempotency | Is an idempotency key or duplicate suppression required? |
| Observability | How is failure visible without leaking sensitive data? |
| Cleanup | What resources, listeners, timers, or state must be released? |
| Verification | Which control proves the effect's behavior? |

Fields that do not apply must be marked not applicable with a reason, not silently omitted when the effect is material.

## 5. React-specific effect rules

- Rendering MUST remain pure. Do not trigger requests, mutate global state, navigate, write storage, or perform irreversible work during render.
- Use React state for UI state that belongs to the component tree.
- Use effects to synchronize with an external system, not as a default mechanism for deriving values from props/state.
- Every subscription, event listener, timer, observer, or manually managed resource must have a corresponding cleanup.
- Effects must tolerate React development behavior that may expose repeated setup/cleanup.
- Do not use an effect when a direct event handler or derived render value is the correct mechanism.
- Avoid duplicate requests caused by component remounts or unstable dependencies; where requests are required, define cancellation or stale-response handling.
- Do not store secrets in client-side code, build-time public environment variables, local storage, or browser-readable configuration.

## 6. Network and external-action controls

If an E3 or E5 effect becomes approved:
- Contract the endpoint, method, payload, response, error schema, and version.
- Validate untrusted inputs at the receiving authority.
- Apply least privilege and use server-side secrets only in a server-side environment.
- Define timeout and cancellation behavior.
- Define retry rules based on operation safety, not generic retry loops.
- Make duplicate submissions safe where the operation can mutate external state.
- Display success only after authoritative confirmation.
- Prevent sensitive values from entering URLs, logs, analytics, or user-facing error messages unnecessarily.
- Verify behavior against a controlled test endpoint before production.

## 7. Persistence controls

If E4 becomes necessary:
- Establish why persistence is required and why in-memory state is insufficient.
- Classify the persisted data.
- Define schema/version migration and invalidation behavior.
- Define retention, clearing, privacy, and multi-user/device implications.
- Treat browser storage as user-accessible and potentially unavailable or corrupted.
- Do not store credentials or sensitive data in browser storage as a shortcut.
- Test empty, corrupt, old-version, quota-exceeded, and unavailable-storage cases.

## 8. Failure and partial-completion semantics

For every non-pure effect, distinguish:
- Not started.
- In progress.
- Succeeded.
- Failed.
- Cancelled.
- Outcome unknown (for example, a network timeout after a request may have reached the service).

Do not present `Outcome unknown` as a definitive failure when a mutation may already have occurred. The recovery process must reconcile with the authoritative target before retrying.

For purely local UI state, failure handling may be simple, but invalid or impossible transitions must still be prevented.

## 9. Effect budgets

The baseline website should have the smallest effect surface compatible with the source:
- No application API requests unless required by approved behavior. Build-time dependency retrieval through the selected package manager is controlled under PP-EFF-008.
- No persistence unless required.
- No analytics or tracking by default.
- No auto-playing media or motion not approved by the source and accessibility review.
- No unnecessary third-party scripts, fonts, widgets, or embedded services.
- No hidden mutation from presentation components.

## 10. L3 verification

For each concrete effect, verify:
- Only the intended trigger invokes it.
- Inputs and destinations match the accepted contract.
- Failure and cancellation behavior are correct.
- State is not reported as successful prematurely.
- Resources are cleaned up.
- Any privacy/security obligation is met.
- Test evidence is attributable to the exact revision.

L3 is not complete merely because the UI looks correct. Every material non-pure effect must have a control and verification path.
