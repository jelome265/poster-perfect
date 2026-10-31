# Cross-cutting — Artifact registry and provenance

**Control levels:** L0–L4  
**Record class:** Artifact ownership and provenance register  
**Status:** Documentation artifacts current; application artifacts not yet produced

## 1. Purpose

An artifact is a durable output that conveys approved intent, defines a contract, records implementation, or supplies verification evidence. The artifact registry identifies which file or output owns a fact, who produces it, which phase consumes it, and whether it is current.

A file existing in Git does not automatically make it authoritative or prove that the described system exists.

## 2. Artifact classes

| Class | Meaning | Examples |
|---|---|---|
| Specification | Describes approved intent, scope, or design truth | Project brief, inspected design inventory |
| Contract | Normative behavior or interface expectation | Component, interaction, responsive, runtime contract |
| Architecture | Describes module topology and responsibility | Architecture map |
| Process | Describes a workflow or state transition | Navigation, build, form process |
| Implementation | Executable source or configuration | TSX component, CSS, package manifest |
| Static asset | Content consumed by the website | Approved image, logo, font, icon |
| Verification evidence | Result of a defined control on a known revision | Test output, screenshot comparison, accessibility report |
| Release artifact | Identifiable deployable output | Production build, deployment URL, release record |
| Navigation | Index that routes readers to canonical records | README, phase register, ICM index |
| Historical | Retained prior state with no current authority | Superseded contract or old test report |

## 3. Artifact registry

| ID | Artifact | Canonical path | Class | Producer | Status |
|---|---|---|---|---|---|
| `PP-ART-001` | Project brief | `docs/project-brief.md` | Specification | Project owner / maintainer | Current; source details incomplete |
| `PP-ART-002` | Design reference inventory | `docs/design-reference.md` | Specification | Source inspection | Drafted from export 2026-10-30; owner confirmation pending |
| `PP-ART-003` | Frontend architecture | `docs/architecture.md` | Architecture | Maintainer / owner approval | Current logical baseline |
| `PP-ART-004` | Technical standards | `docs/technical-standards.md` | Contract | Maintainer / owner approval | Current baseline |
| `PP-ART-005` | Design-token inventory | `docs/design-system.md` | Specification | Source inspection | Partially measured from export; approximate colors and typeface identified; remaining measurements/licence and owner confirmation pending |
| `PP-ART-006` | Content and section inventory | `docs/content-structure.md` | Specification | Source inspection | Drafted from export 2026-10-30; owner confirmations pending; page set and section order owned by `PP-ART-018` |
| `PP-ART-007` | Component inventory | `docs/components.md` | Architecture/contract | Source inspection and implementation | Drafted from export 2026-10-30; owner approval pending; contract details owned by `PP-ART-019` |
| `PP-ART-008` | Delivery phase specifications | `docs/phases/` | Contract | Maintainer / owner approval | Current |
| `PP-ART-009` | Decision log | `docs/decision-log.md` | Governance | Project owner | Current |
| `PP-ART-010` | ICM charter and indexes | `docs/icm/README.md` and related files | Architecture/governance | Maintainer / owner approval | Initial baseline |
| `PP-ART-011` | Application source | Not yet created | Implementation | Implementation contributor | Not started |
| `PP-ART-012` | Application dependency manifest and lockfile | Not yet created | Implementation/reproducibility | Toolchain setup | Not started |
| `PP-ART-013` | Approved source assets | Not yet created as original web assets; inventory in `docs/design-reference.md` and `docs/content-structure.md` | Static asset | Project owner/source inspection | Source items inventoried from PDF; original files, provenance and publication permission pending |
| `PP-ART-014` | Visual reference captures | Not yet created | Verification evidence | Phase 0/2/4 | Pending |
| `PP-ART-015` | Executable verification reports | Not yet created | Verification evidence | CI and manual review | Pending |
| `PP-ART-016` | Release build and deployment record | Not yet created | Release artifact | Release pipeline / owner | Not started |
| `PP-ART-017` | ICM integrity audit (2026-10-30) | `docs/icm/integrity-audit-2026-10-30.md` | Verification evidence | ICM/documentation reviewer | R4 failed at `877933a`; status/template/reference corrections are included in this remediation branch. The current PP-VER-013 outcome is revision-specific and is reported by the Documentation Integrity workflow, not inferred from R4. Prior R3 pass at `76f990f` applies only to that revision; not application verification |
| `PP-ART-018` | Information architecture | `docs/information-architecture.md` | Specification (contract-backed) | Page implementation owner (`PP-MAP-011`); approval: project owner | Drafted from export 2026-10-30; owner approval pending (G0) |
| `PP-ART-019` | Component blueprint | `docs/component-blueprint.md` | Contract / architecture | Component maintainer (`PP-MAP-013`); approval: project owner | Drafted from export 2026-10-30; owner approval pending (G0) |
| `PP-ART-020` | Documentation integrity validator and CI workflow | `scripts/validate_docs.py`, `scripts/test_validate_docs.py`, `.github/workflows/docs-integrity.yml` | Verification tooling / CI configuration | Build/CI maintainer (`PP-MAP-017`) | Implemented in this remediation; first workflow result pending on the PR revision |

The registry is a navigation and lifecycle record. Subject-specific details remain in the canonical file listed above.

## 4. Required provenance

Every material implementation or evidence artifact must be traceable to:
- Repository and path.
- Stable revision (commit SHA or release identifier).
- Producer/tool or responsible reviewer.
- Creation or verification date.
- Applicable requirement, contract, phase, or verification ID.
- Status and known limitations.

For screenshots, include the page/route, viewport dimensions, browser, source comparison reference, and capture revision. For test reports, include exact commands and environment where material.

## 5. Artifact lifecycle

```text
planned
  -> produced
  -> reviewed
  -> accepted or rejected
  -> superseded / archived
```

For executable artifacts, separate implementation state from evidence state. A source file may exist while its test evidence is absent or stale.

A changed implementation invalidates prior evidence for affected behavior. Re-run the relevant controls and retain the old evidence as historical rather than overwriting it as if it tested the new revision.

## 6. Naming and storage rules

- Use descriptive, stable filenames.
- Keep canonical documents in one path.
- Keep source assets separate from generated build output.
- Do not commit access tokens, credentials, or private Canva editor URLs.
- Do not commit unnecessary duplicate exports or opaque generated bundles.
- Store visual captures in a documented location once the project establishes whether they belong in Git, pull-request attachments, or an external evidence store.
- Do not invent an evidence directory or artifact retention policy until its maintenance cost is understood.

## 7. Retention and supersession

- Do not delete a contract or decision merely because it was superseded.
- Mark it historical and identify the successor.
- Preserve evidence for any released revision where it is needed for audit or regression diagnosis.
- Avoid storing personal data or secret-bearing network traces in evidence artifacts.
- An artifact marked historical must not be used to claim current implementation status.

## 8. Artifact acceptance

A deliverable is accepted only when its identity, owner, intended consumer, contents, and verification expectations are clear. An implementation artifact additionally requires review and relevant test evidence. A release artifact requires revision provenance and owner-authorized release disposition.
