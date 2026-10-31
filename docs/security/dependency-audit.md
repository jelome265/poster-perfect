# Dependency security and license policy

**Owner approval:** DEC-015, 2026-10-31  
**Scope:** the complete npm dependency graph in `package-lock.json`  
**CI workflow:** `.github/workflows/dependency-audit.yml`

## Controls

Every pull request targeting `main`, every push to `main`, a weekly scheduled run, and a manual workflow dispatch execute these independent controls:

| Control | Source | Gate |
| --- | --- | --- |
| npm advisory audit | npm registry advisory database | Fail on any reported severity (low or higher) |
| Vulnerability scan | OSV database via OSV-Scanner v2.7.0 | Fail on any known vulnerability in the locked npm graph; upload SARIF to Code Scanning |
| SPDX inventory | Committed package-lock metadata and Node.js built-ins | Fail on missing/non-string metadata, unapproved identifiers, or MPL-2.0 outside development scope |
| License metadata cross-check | deps.dev via OSV-Scanner v2.7.0 | Fail when dependency license metadata is outside the approved SPDX list |

The inventory is generated without `npm install`, package lifecycle scripts, or additional npm dependencies. CI uploads JSON and Markdown inventory artifacts for 30 days.

## SPDX policy

Permitted in runtime and development scopes:

- `MIT`
- `MIT-0`
- `Apache-2.0`
- `ISC`
- `BSD-2-Clause`
- `BSD-3-Clause`
- `BlueOak-1.0.0`
- `CC0-1.0`

A scoped exception permits `MPL-2.0` only for development dependencies. The current lockfile records it for Lightning CSS and its optional platform packages; those entries are marked development-only. The local inventory script rejects any MPL-2.0 package in the runtime graph.

The policy fails closed on missing metadata, expressions that are not exact approved SPDX identifiers, and any new license. No blanket overrides are allowed. A new identifier requires review of the full license text, package usage/scope, distribution model, attribution and notice requirements, followed by an owner-approved update to DEC-015 and the allowlist.

## Local commands

Run from the repository root:

```bash
npm run audit:licenses
npm audit --audit-level=low
```

The inventory is written to `artifacts/dependency-audit/license-inventory.json` and `artifacts/dependency-audit/license-inventory.md`. The OSV vulnerability scan runs in GitHub Actions.

## Exceptions and remediation

- Do not run `npm audit fix` automatically in CI.
- Upgrade dependencies through a reviewed change to `package.json` and `package-lock.json`; rerun application quality and security workflows on the candidate.
- Vulnerability exceptions require an advisory ID, affected package/version, reachability and impact assessment, owner, reason, compensating control, expiry date, and revalidation plan.
- License exceptions require the exact SPDX identifier, affected packages and scopes, license text review, distribution analysis, owner approval, and an expiry/review condition.

## Coverage and limitations

- The audit covers npm dependencies in the committed lockfile, including transitive, optional, and development dependencies.
- npm and OSV advisory databases contain known issues; a clean result cannot prove absence of unknown vulnerabilities.
- Lockfile and deps.dev license identifiers are metadata sources; they do not replace inspecting the actual license and notices shipped with a package.
- Non-npm software, vendored sources outside the package graph, fonts, images, Canva artwork, and other creative assets are not covered. Their provenance and usage rights remain separate Phase 0/Phase 4 controls.
- Automated results are not legal advice or a full legal opinion on compatibility with every distribution/business model.

## References

- [OSV-Scanner usage](https://google.github.io/osv-scanner/usage/)
- [OSV-Scanner license scanning](https://google.github.io/osv-scanner/usage/license-scanning/)
- [OSV-Scanner GitHub Action](https://github.com/google/osv-scanner-action)
- [npm audit](https://docs.npmjs.com/cli/commands/npm-audit/)
- [SPDX License List](https://spdx.org/licenses/)
