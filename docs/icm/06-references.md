# Cross-cutting — Reference authority and integrity

**Control levels:** L0–L4  
**Record class:** Reference integrity contract  
**Status:** Active for repository documentation

## 1. Purpose

This document governs how engineering decisions and claims are grounded in their sources. A reference that resolves to a file or URL is not automatically authoritative, current, or relevant.

Reference integrity has two dimensions:
- **Mechanical integrity:** the target exists and links resolve deterministically.
- **Semantic integrity:** the target is the correct authority for the claim being made.

Both are required.

## 2. Reference classes

| Class | Meaning | Use |
|---|---|---|
| Canonical | Current source of truth for a subject | Cite for current approved facts |
| Contract | Normative requirement for implementation | Implement and verify against it |
| Evidence | Observed implementation or test/review result | Support current-state claims within its revision/scope |
| Historical | Retained record from an earlier state | Context only; never current proof |
| Compatibility | Old path maintained to redirect readers | Navigation only |
| Navigation | Index derived from canonical sources | Discovery; not substantive authority |
| External standard | Standards body or platform authority | Cite for external requirements and platform behavior |

A document may have different classes for different sections only when clearly marked. Avoid ambiguous documents that mix proposed requirements, current implementation status, and historical evidence without labels.

## 3. Authority hierarchy

Use the authority hierarchy defined in [the ICM charter](README.md#21-authority-hierarchy). The detailed rule distinguishes binding law/regulation, applicable security/privacy/accessibility and platform/provider constraints, current owner decisions within the owner's authority, the approved source-design baseline, accepted project contracts, architecture contracts, implementation evidence, and convenience.

For external requirements, cite the authoritative source close to the relevant claim. A third-party tutorial, blog post, search result, or AI-generated summary does not supersede primary documentation.

## 4. Reference register

| ID | Reference | Class | Authority / purpose | Current applicability |
|---|---|---|---|---|
| `PP-REF-001` | Owner-supplied Canva design (export PDF, SHA-256 `173bd1a7…baea6`; see `docs/design-reference.md`) | Canonical source for visual/content facts | Project owner | Export inspected 2026-10-30; editor URL not used |
| `PP-REF-002` | `docs/project-brief.md` | Canonical | Project scope and objectives | Current |
| `PP-REF-003` | `docs/decision-log.md` | Canonical decision record | Accepted and open decisions | Current |
| `PP-REF-004` | `docs/architecture.md` | Architecture contract | Logical architecture and boundaries | Current |
| `PP-REF-005` | `docs/phases/` | Contract | Phase entry/exit requirements | Current |
| `PP-REF-006` | [WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/) | External standard | Accessibility assessment target | Current project target; verify relevant criteria during implementation |
| `PP-REF-007` | [React documentation](https://react.dev/learn) | External platform reference | React component, state, and effect semantics | Use the specific official page relevant to the implementation decision |
| `PP-REF-008` | [TypeScript documentation](https://www.typescriptlang.org/docs/) | External platform reference | TypeScript language and compiler behavior | Use the specific official page relevant to the implementation decision |
| `PP-REF-009` | Selected build/package tool documentation | External platform reference | Build and dependency behavior | Not selected |
| `PP-REF-010` | [Information architecture](../information-architecture.md) | Canonical | Page set, hierarchy, navigation, section order | Accepted 2026-10-31 (DEC-013) |
| `PP-REF-011` | [Component blueprint](../component-blueprint.md) | Contract | Per-component contract details | Accepted as baseline 2026-10-31 (DEC-013) |
| `PP-REF-012` | [OSV-Scanner usage and license scanning](https://google.github.io/osv-scanner/usage/) | External security/tool reference | OSV vulnerability matching and SPDX license metadata scanning | Adopted in DEC-015; scanner action pinned to v2.7.0 commit |
| `PP-REF-013` | [npm audit documentation](https://docs.npmjs.com/cli/commands/npm-audit/) | External package-manager reference | npm registry advisory audit and severity threshold semantics | Adopted in DEC-015 |
| `PP-REF-014` | [Fontsource Aileron license record](https://fontsource.org/fonts/aileron/about) | External asset/license reference | Aileron font provenance and CC0-1.0 source license | Recorded under DEC-014; verify exact distribution metadata when font files are added |

Do not add a reference solely to make the register look complete. Add a specific official documentation page when it materially governs a decision or contract.

## 5. Integrity rules

1. Every internal Markdown link MUST resolve from the referring file.
2. Path references MUST be deterministic and repository-relative where possible.
3. Do not rely on ambiguous bare filenames.
4. References that escape the repository MUST be rejected unless an explicit external URL is intended.
5. External references MUST use the canonical domain and stable page path where available.
6. A renamed canonical document requires all incoming links and artifact records to be updated.
7. Navigation documents must route to canonical sources and must not create competing specifications.
8. Historical evidence must be labeled with the tested revision and date.
9. A design value must link to the inspected source or approved decision.
10. A version/regulatory claim that can change must be verified against a current primary source and dated.

## 6. Claim-evidence discipline

Use these labels when describing system state:
- **Confirmed:** directly supported by an owner decision, current source, or inspected artifact.
- **Observed:** measured or read from a specific current revision/environment.
- **Specified:** included in an accepted contract but not necessarily implemented.
- **Implemented:** code/configuration exists in a named revision.
- **Verified:** a named control passed against that revision and scope.
- **Assumed:** temporary working assumption; identify owner and expiry/resolution gate.
- **Unknown:** evidence is unavailable.
- **Blocked:** an identified dependency prevents resolution.

Never convert "specified" to "implemented" or "implemented" to "verified" through wording alone.

## 7. Repository reference audit

Before merge of a documentation change:
- Check all changed relative Markdown links.
- Check references to moved or renamed documents.
- Confirm navigation indexes reflect the actual tree.
- Review internal link targets for canonical status.
- Verify any new external standard/platform assertion against its primary source.
- Inspect for stale status claims and ungrounded links.

The repository may add a mechanical Markdown-link checker when there is sufficient value. Until then, manual inspection must be disclosed as manual; do not claim automated reference checking.

## 8. Liveness and ownership

Every canonical document has an owner role and an update trigger. A canonical reference with no update trigger can become stale. Update the relevant ICM register when:
- An accepted decision changes.
- A phase contract is revised.
- An implementation boundary changes.
- An external standard/tool version changes.
- Evidence is superseded by a new revision.
- A page, interaction, or external integration enters or leaves scope.
