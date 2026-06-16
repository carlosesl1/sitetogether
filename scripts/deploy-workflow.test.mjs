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

test("Hostinger transfer uses the FTP Access defaults shown in hPanel", () => {
  assert.match(workflow, /HOSTINGER_FTP_PROTOCOL:\s*ftp/);
  assert.match(workflow, /HOSTINGER_FTP_PORT:\s*21/);
  assert.match(workflow, /HOSTINGER_FTP_SERVER_DIR:\s*"\.\/public_html\/"/);
  assert.doesNotMatch(workflow, /secrets\.HOSTINGER_FTP_PROTOCOL/);
  assert.doesNotMatch(workflow, /secrets\.HOSTINGER_FTP_PORT/);
  assert.doesNotMatch(workflow, /vars\.HOSTINGER_FTP_PROTOCOL/);
  assert.doesNotMatch(workflow, /vars\.HOSTINGER_FTP_PORT/);
});

test("FTP inspection honors configured protocol and port without blocking deploy", () => {
  const inspectStep = sectionBetween(
    "- name: Inspect Hostinger FTP paths before deploy",
    "- name: Install dependencies",
  );

  assert.match(inspectStep, /continue-on-error:\s*true/);
  assert.match(inspectStep, /HOSTINGER_FTP_PROTOCOL:\s*\$\{\{\s*env\.HOSTINGER_FTP_PROTOCOL\s*\}\}/);
  assert.match(inspectStep, /HOSTINGER_FTP_PORT:\s*\$\{\{\s*env\.HOSTINGER_FTP_PORT\s*\}\}/);
  assert.match(inspectStep, /def normalize_host\(value\):/);
  assert.match(inspectStep, /server = normalize_host\(os\.environ\["HOSTINGER_FTP_SERVER"\]\)/);
});

test("FTP diagnostic scripts support FTP_TLS and connect to the configured port", () => {
  assert.match(workflow, /from ftplib import FTP,\s*FTP_TLS,\s*error_perm/);
  assert.match(workflow, /port = int\(os\.environ\.get\("HOSTINGER_FTP_PORT", "21"\)\)/);
  assert.match(workflow, /ftp\.connect\(server, port\)/);
  assert.match(workflow, /ftp\.prot_p\(\)/);
});

test("Hostinger deploy uses lftp and normalizes copied hPanel FTP hostnames", () => {
  const deployStep = sectionBetween(
    "- name: Deploy out directory to Hostinger",
    "- name: Verify uploaded files over lftp",
  );

  assert.doesNotMatch(workflow, /SamKirkland\/FTP-Deploy-Action/);
  assert.match(workflow, /sudo apt-get install -y lftp/);
  assert.match(deployStep, /ftp\|ftps\|ftps-legacy\|sftp/);
  assert.match(deployStep, /normalize_host\(\)/);
  assert.match(deployStep, /transfer_host="\$\(normalize_host "\$HOSTINGER_FTP_SERVER"\)"/);
  assert.match(deployStep, /timeout 10m lftp -u/);
  assert.match(deployStep, /mirror --reverse --delete/);
  assert.match(deployStep, /Hostinger FTP deploy failed/);
  assert.match(deployStep, /HOSTINGER_FTP_PROTOCOL:\s*\$\{\{\s*env\.HOSTINGER_FTP_PROTOCOL\s*\}\}/);
  assert.match(deployStep, /HOSTINGER_FTP_PORT:\s*\$\{\{\s*env\.HOSTINGER_FTP_PORT\s*\}\}/);
});

test("Hostinger deploy keeps WordPress and private server-side paths out of the static sync", () => {
  const deployStep = sectionBetween(
    "- name: Deploy out directory to Hostinger",
    "- name: Verify uploaded files over lftp",
  );

  assert.match(deployStep, /--exclude-glob 'wp-admin\/\*\*'/);
  assert.match(deployStep, /--exclude-glob 'wp-content\/\*\*'/);
  assert.match(deployStep, /--exclude-glob 'wp-includes\/\*\*'/);
  assert.doesNotMatch(deployStep, /--exclude-glob 'public_html/);
  assert.doesNotMatch(deployStep, /--exclude-glob 'domains/);
  assert.match(deployStep, /--exclude-glob '\.ssh\/\*\*'/);
});

test("lftp verification uses the same protocol and port environment as deploy", () => {
  const verifyStep = sectionBetween(
    "- name: Verify uploaded files over lftp",
    undefined,
  );

  assert.match(verifyStep, /lftp -u/);
  assert.match(verifyStep, /HOSTINGER_FTP_PROTOCOL:\s*\$\{\{\s*env\.HOSTINGER_FTP_PROTOCOL\s*\}\}/);
  assert.match(verifyStep, /HOSTINGER_FTP_PORT:\s*\$\{\{\s*env\.HOSTINGER_FTP_PORT\s*\}\}/);
});
