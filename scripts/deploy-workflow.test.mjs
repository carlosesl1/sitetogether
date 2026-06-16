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

test("Hostinger transfer defaults to SFTP on the Hostinger hosting port", () => {
  assert.match(workflow, /HOSTINGER_FTP_PROTOCOL:\s*\$\{\{\s*secrets\.HOSTINGER_FTP_PROTOCOL\s*\|\|\s*vars\.HOSTINGER_FTP_PROTOCOL\s*\|\|\s*'sftp'\s*\}\}/);
  assert.match(workflow, /HOSTINGER_FTP_PORT:\s*\$\{\{\s*secrets\.HOSTINGER_FTP_PORT\s*\|\|\s*vars\.HOSTINGER_FTP_PORT\s*\|\|\s*65002\s*\}\}/);
});

test("FTP inspection honors configured protocol and port without blocking deploy", () => {
  const inspectStep = sectionBetween(
    "- name: Inspect Hostinger FTP paths before deploy",
    "- name: Install dependencies",
  );

  assert.match(inspectStep, /continue-on-error:\s*true/);
  assert.match(inspectStep, /HOSTINGER_FTP_PROTOCOL:\s*\$\{\{\s*env\.HOSTINGER_FTP_PROTOCOL\s*\}\}/);
  assert.match(inspectStep, /HOSTINGER_FTP_PORT:\s*\$\{\{\s*env\.HOSTINGER_FTP_PORT\s*\}\}/);
  assert.match(inspectStep, /if protocol == "sftp":/);
});

test("FTP diagnostic scripts support FTP_TLS and connect to the configured port", () => {
  assert.match(workflow, /from ftplib import FTP,\s*FTP_TLS,\s*error_perm/);
  assert.match(workflow, /port = int\(os\.environ\.get\("HOSTINGER_FTP_PORT", "65002"\)\)/);
  assert.match(workflow, /ftp\.connect\(os\.environ\["HOSTINGER_FTP_SERVER"\], port\)/);
  assert.match(workflow, /ftp\.prot_p\(\)/);
});

test("Hostinger deploy uses lftp with SFTP support instead of the FTP-only action", () => {
  const deployStep = sectionBetween(
    "- name: Deploy out directory to Hostinger",
    "- name: Verify uploaded files over lftp",
  );

  assert.doesNotMatch(workflow, /SamKirkland\/FTP-Deploy-Action/);
  assert.match(workflow, /sudo apt-get install -y lftp/);
  assert.match(deployStep, /ftp\|ftps\|ftps-legacy\|sftp/);
  assert.match(deployStep, /lftp -u/);
  assert.match(deployStep, /mirror --reverse --delete/);
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
  assert.match(deployStep, /--exclude-glob 'public_html\/\*\*'/);
  assert.match(deployStep, /--exclude-glob 'domains\/\*\*'/);
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
