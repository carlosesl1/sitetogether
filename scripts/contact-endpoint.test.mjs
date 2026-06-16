import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const pluginPath = resolve(
  rootDir,
  "public/wp-content/mu-plugins/together-contact-endpoint.php",
);
const pluginSource = readFileSync(pluginPath, "utf8");

function readStringConst(name) {
  const match = pluginSource.match(new RegExp(`const\\s+${name}\\s*=\\s*'([^']*)';`));
  assert.ok(match, `Missing PHP constant ${name}`);
  return match[1];
}

function extractPhpFunction(name) {
  const startPattern = new RegExp(`function\\s+${name}\\s*\\(`);
  const startMatch = startPattern.exec(pluginSource);
  assert.ok(startMatch, `Missing PHP function ${name}`);

  const openBrace = pluginSource.indexOf("{", startMatch.index);
  assert.notEqual(openBrace, -1, `Missing body for PHP function ${name}`);

  let depth = 0;
  for (let index = openBrace; index < pluginSource.length; index += 1) {
    const char = pluginSource[index];
    if (char === "{") {
      depth += 1;
    }
    if (char === "}") {
      depth -= 1;
      if (depth === 0) {
        return pluginSource.slice(startMatch.index, index + 1);
      }
    }
  }

  assert.fail(`Could not find end of PHP function ${name}`);
}

test("default contact recipients contain separate email addresses", () => {
  const defaultRecipients = readStringConst("TOGETHER_DEFAULT_CONTACT_RECIPIENTS")
    .split(",")
    .map((email) => email.trim());

  assert.deepEqual(defaultRecipients, [
    "contato@togetherprivacy.com",
    "carlos.leite@noirdigital.com.br",
  ]);
});

test("contact recipient fallback parses the comma-separated default list", () => {
  const getRecipients = extractPhpFunction("together_get_contact_recipients");

  assert.match(
    getRecipients,
    /together_parse_contact_recipients\(TOGETHER_DEFAULT_CONTACT_RECIPIENTS\)/,
  );
  assert.doesNotMatch(
    getRecipients,
    /\$recipients\s*=\s*\[\s*TOGETHER_DEFAULT_CONTACT_RECIPIENTS\s*\]/,
  );
});

test("configured contact recipients use the same parser as the fallback", () => {
  const getRecipients = extractPhpFunction("together_get_contact_recipients");

  assert.match(
    getRecipients,
    /together_parse_contact_recipients\(\(string\)\s*TOGETHER_CONTACT_RECIPIENTS\)/,
  );
});
