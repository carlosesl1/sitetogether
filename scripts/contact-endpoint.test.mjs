import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { PHP } from "@php-wasm/universal";
import { loadNodeRuntime } from "@php-wasm/node";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const pluginPath = resolve(
  rootDir,
  "public/wp-content/mu-plugins/together-contact-endpoint.php",
);
const pluginSource = readFileSync(pluginPath, "utf8");
const pluginPhp = pluginSource.replace(/^<\?php\s*/, "");
const expectedRecipients = [
  "contato@togetherprivacy.com",
  "carlos.leite@noirdigital.com.br",
];
const pastedTogetherRecipients =
  "contato@togetherprivacy.comcarlos.leite@noirdigital.com.br";
const commaSeparatedRecipients =
  "contato@togetherprivacy.com,carlos.leite@noirdigital.com.br";
let phpProcessId = 1;

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

function phpString(value) {
  return JSON.stringify(value);
}

async function executeRecipientParserCases() {
  const code = `<?php
define('ABSPATH', __DIR__);
define('TOGETHER_CONTACT_RECIPIENTS', ${phpString(pastedTogetherRecipients)});
function add_action(...$args): void {}
function add_filter(...$args): void {}
function is_email($email): bool { return filter_var($email, FILTER_VALIDATE_EMAIL) !== false; }
function sanitize_email($email): string { return is_email($email) ? $email : ''; }
${pluginPhp}
echo json_encode([
    'configured' => together_get_contact_recipients(),
    'pasted' => together_parse_contact_recipients(${phpString(pastedTogetherRecipients)}),
    'comma' => together_parse_contact_recipients(${phpString(commaSeparatedRecipients)}),
]);
`;

  const php = new PHP(
    await loadNodeRuntime("8.3", {
      emscriptenOptions: { processId: phpProcessId },
    }),
  );
  phpProcessId += 1;

  try {
    const output = await php.runStream({ code });
    const stderr = await output.stderrText;
    assert.equal(stderr.trim(), "", stderr);

    const stdout = (await output.stdoutText).trim();
    assert.notEqual(stdout, "", "PHP runtime did not emit parser output");

    return JSON.parse(stdout);
  } finally {
    php.exit();
  }
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

test("contact recipient parser returns separate addresses for pasted-together recipients", async () => {
  const parsed = await executeRecipientParserCases();

  assert.deepEqual(parsed, {
    configured: expectedRecipients,
    pasted: expectedRecipients,
    comma: expectedRecipients,
  });
});
