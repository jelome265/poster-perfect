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
| `PP-ART-002` | Design reference inventory | `docs/design-reference.md` | Specification | Source inspection | Blocked |
| `PP-ART-003` | Frontend architecture | `docs/architecture.md` | Architecture | Maintainer / owner approval | Current logical baseline |
| `PP-ART-004` | Technical standards | `docs/technical-standards.md` | Contract | Maintainer / owner approval | Current baseline |
| `PP-ART-005` | Design-token inventory | `docs/design-system.md` | Specification | Source inspection | Pending |
| `PP-ART-006` | Content and page inventory | `docs/content-structure.md` | Specification | Source inspection | Pending |
| `PP-ART-007` | Component inventory | `docs/components.md` | Architecture/contract | Source inspection and implementation | Pending |
| `PP-ART-008` | Delivery phase specifications | `docs/phases/` | Contract | Maintainer / owner approval | Current |
| `PP-ART-009` | Decision log | `docs/decision-log.md` | Governance | Project owner | Current |
| `PP-ART-010` | ICM charter and indexes | `docs/icm/README.md` and related files | Architecture/governance | Maintainer / owner approval | Initial baseline |
| `PP-ART-011` | Application source | Not yet created | Implementation | Implementation contributor | Not started |
| `PP-ART-012` | Application dependency manifest and lockfile | Not yet created | Implementation/reproducibility | Toolchain setup | Not started |
| `PP-ART-013` | Approved source assets | Not yet inventoried | Static asset | Project owner/source inspection | Pending |
| `PP-ART-014` | Visual reference captures | Not yet created | Verification evidence | Phase 0/2/4 | Pending |
| `PP-ART-015` | Executable verification reports | Not yet created | Verification evidence | CI and manual review | Pending |
| `PP-ART-016` | Release build and deployment record | Not yet created | Release artifact | Release pipeline / owner | Not started |

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
