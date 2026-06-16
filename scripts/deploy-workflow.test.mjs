import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const workflowPath = resolve(rootDir, ".github/workflows/deploy-hostinger.yml");
const workflow = readFileSync(workflowPath, "utf8");

function sectionBetween(startMarker, endMarker) {
  const startIndex = workflow.indexOf(startMarker);
  assert.notEqual(startIndex, -1, `Missing workflow section: ${startMarker}`);
  if (!endMarker) {
    return workflow.slice(startIndex);
  }
  const endIndex = workflow.indexOf(endMarker, startIndex + startMarker.length);
  assert.notEqual(endIndex, -1, `Missing workflow section after: ${endMarker}`);
  return workflow.slice(startIndex, endIndex);
}

test("FTP inspection honors configured protocol and port without blocking deploy", () => {
  const inspectStep = sectionBetween(
    "- name: Inspect Hostinger FTP paths before deploy",
    "- name: Install dependencies",
  );

  assert.match(inspectStep, /continue-on-error:\s*true/);
  assert.match(inspectStep, /HOSTINGER_FTP_PROTOCOL:\s*\$\{\{\s*env\.HOSTINGER_FTP_PROTOCOL\s*\}\}/);
  assert.match(inspectStep, /HOSTINGER_FTP_PORT:\s*\$\{\{\s*env\.HOSTINGER_FTP_PORT\s*\}\}/);
});

test("FTP diagnostic scripts support FTP_TLS and connect to the configured port", () => {
  assert.match(workflow, /from ftplib import FTP,\s*FTP_TLS,\s*error_perm/);
  assert.match(workflow, /port = int\(os\.environ\.get\("HOSTINGER_FTP_PORT", "21"\)\)/);
  assert.match(workflow, /ftp\.connect\(os\.environ\["HOSTINGER_FTP_SERVER"\], port\)/);
  assert.match(workflow, /ftp\.prot_p\(\)/);
});

test("FTP verification uses the same protocol and port environment as deploy", () => {
  const verifyStep = sectionBetween(
    "- name: Verify uploaded files over FTP",
    "",
  );

  assert.match(verifyStep, /HOSTINGER_FTP_PROTOCOL:\s*\$\{\{\s*env\.HOSTINGER_FTP_PROTOCOL\s*\}\}/);
  assert.match(verifyStep, /HOSTINGER_FTP_PORT:\s*\$\{\{\s*env\.HOSTINGER_FTP_PORT\s*\}\}/);
});
