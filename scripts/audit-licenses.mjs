#!/usr/bin/env node
/**
 * Fail-closed SPDX inventory for the exact npm dependency graph.
 * Uses only Node.js built-ins and never installs or executes dependencies.
 */
import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const LOCKFILE = path.join(ROOT, "package-lock.json");
const OUTPUT = path.join(ROOT, "artifacts", "dependency-audit");

const ALLOWED = new Set([
  "Apache-2.0",
  "BSD-2-Clause",
  "BSD-3-Clause",
  "BlueOak-1.0.0",
  "CC0-1.0",
  "ISC",
  "MIT",
  "MIT-0",
]);
// MPL-2.0 is permitted only in development dependencies.
const DEVELOPMENT_ONLY = new Set(["MPL-2.0"]);

function packageName(lockPath) {
  const marker = "node_modules/";
  const offset = lockPath.lastIndexOf(marker);
  return offset < 0 ? lockPath : lockPath.slice(offset + marker.length);
}

function renderMarkdown(report) {
  const lines = [
    "# Dependency licence inventory",
    "",
    `- Lockfile version: ${report.lockfile.version}`,
    `- Lockfile SHA-256: \`${report.lockfile.sha256}\``,
    `- Package entries: **${report.summary.total}** (${report.summary.runtime} runtime, ${report.summary.development} development)`,
    `- Policy result: **${report.result}**`,
    "",
    "## SPDX summary",
    "",
    "| SPDX identifier | Runtime | Development | Total |",
    "| --- | ---: | ---: | ---: |",
  ];

  for (const [license, count] of Object.entries(report.summary.byLicense)) {
    lines.push(`| ${license} | ${count.runtime} | ${count.development} | ${count.total} |`);
  }

  lines.push(
    "",
    "## Development-only exception",
    "",
    "MPL-2.0 is approved only for development dependencies. The inventory rejects any MPL-2.0 package in the runtime dependency graph.",
    "",
    "## Complete package inventory",
    "",
    "| Package | Version | SPDX identifier | Scope | Optional |",
    "| --- | --- | --- | --- | --- |",
  );

  for (const item of report.packages) {
    lines.push(`| ${item.name.replaceAll("|", "\\|")} | ${item.version} | ${item.license || "UNDECLARED"} | ${item.scope} | ${item.optional ? "yes" : "no"} |`);
  }

  if (report.violations.length > 0) {
    lines.push("", "## Policy violations", "");
    for (const violation of report.violations) {
      lines.push(`- ${violation.package}: ${violation.reason}`);
    }
  }

  lines.push(
    "",
    "## Scope and limitations",
    "",
    "This report inventories license metadata declared in package-lock.json. CI separately checks vulnerability advisories through npm and OSV and cross-checks license metadata through deps.dev. Metadata does not replace inspection of actual license texts, notices, attribution, fonts, images, Canva artwork, or other non-npm assets.",
    "",
  );

  return lines.join("\n");
}

async function main() {
  const raw = await readFile(LOCKFILE);
  const lock = JSON.parse(raw.toString("utf8"));

  if (lock.lockfileVersion !== 3) {
    throw new Error(`Expected npm lockfile version 3; found ${lock.lockfileVersion ?? "unknown"}.`);
  }
  if (!lock.packages || typeof lock.packages !== "object") {
    throw new Error("package-lock.json has no package inventory.");
  }

  const packages = Object.entries(lock.packages)
    .filter(([lockPath]) => lockPath !== "")
    .map(([lockPath, metadata]) => ({
      name: packageName(lockPath),
      version: typeof metadata.version === "string" ? metadata.version : "",
      license: typeof metadata.license === "string" ? metadata.license.trim() : "",
      scope: metadata.dev === true ? "development" : "runtime",
      optional: metadata.optional === true,
    }))
    .sort((a, b) => a.name.localeCompare(b.name) || a.version.localeCompare(b.version));

  if (packages.length === 0) {
    throw new Error("Dependency inventory is empty; refusing to report a clean audit.");
  }

  const violations = [];
  for (const item of packages) {
    if (!item.version) {
      violations.push({ package: item.name, reason: "missing locked version" });
    }
    if (!item.license) {
      violations.push({ package: item.name, reason: "missing or non-string SPDX license metadata" });
      continue;
    }
    if (ALLOWED.has(item.license)) continue;
    if (DEVELOPMENT_ONLY.has(item.license)) {
      if (item.scope !== "development") {
        violations.push({
          package: item.name,
          reason: `${item.license} is approved only for development dependencies; found in runtime scope`,
        });
      }
      continue;
    }
    violations.push({
      package: item.name,
      reason: `unapproved SPDX identifier or expression: ${item.license}`,
    });
  }

  const byLicense = {};
  for (const item of packages) {
    const license = item.license || "UNDECLARED";
    byLicense[license] ??= { runtime: 0, development: 0, total: 0 };
    byLicense[license][item.scope] += 1;
    byLicense[license].total += 1;
  }

  const report = {
    schemaVersion: 1,
    lockfile: {
      path: "package-lock.json",
      version: lock.lockfileVersion,
      sha256: createHash("sha256").update(raw).digest("hex"),
    },
    policy: {
      allowedInAllScopes: [...ALLOWED].sort(),
      developmentOnly: [...DEVELOPMENT_ONLY].sort(),
    },
    summary: {
      total: packages.length,
      runtime: packages.filter((item) => item.scope === "runtime").length,
      development: packages.filter((item) => item.scope === "development").length,
      byLicense: Object.fromEntries(Object.entries(byLicense).sort(([a], [b]) => a.localeCompare(b))),
    },
    packages,
    violations,
    result: violations.length === 0 ? "PASS" : "FAIL",
  };

  await mkdir(OUTPUT, { recursive: true });
  await writeFile(path.join(OUTPUT, "license-inventory.json"), `${JSON.stringify(report, null, 2)}\n`, "utf8");
  await writeFile(path.join(OUTPUT, "license-inventory.md"), `${renderMarkdown(report)}\n`, "utf8");

  console.log(`SPDX inventory: ${report.summary.total} packages; ${report.summary.runtime} runtime; ${report.summary.development} development.`);
  console.log(`Licenses: ${Object.keys(report.summary.byLicense).join(", ")}`);
  console.log(`Policy result: ${report.result}`);
  console.log("Reports written to artifacts/dependency-audit/");

  for (const violation of violations) {
    console.error(`LICENSE POLICY VIOLATION: ${violation.package}: ${violation.reason}`);
  }
  if (violations.length > 0) process.exitCode = 1;
}

main().catch((error) => {
  console.error(`License audit failed: ${error instanceof Error ? error.message : String(error)}`);
  process.exitCode = 1;
});
