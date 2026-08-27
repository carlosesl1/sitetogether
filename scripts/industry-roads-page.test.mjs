import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function readOptional(relativePath) {
  try {
    return await readFile(new URL(relativePath, import.meta.url), "utf8");
  } catch {
    return "";
  }
}

const typesSource = await readOptional(
  "../src/components/industry/industry-page-types.ts",
);
const contentSource = await readOptional(
  "../src/content/industries/roads.ts",
);

test("road content declares the approved sector promise and CTA", () => {
  assert.match(
    contentSource,
    /Privacidade incorporada à operação rodoviária, do projeto ao free flow\./,
  );
  assert.match(contentSource, /Agende uma Conversa/);
  assert.match(contentSource, /Ainda não temos experiência nem case específico/);
  assert.doesNotMatch(contentSource, /case comprovado no setor/i);
  assert.doesNotMatch(contentSource, /garantia de conformidade/i);
  assert.doesNotMatch(contentSource, /aprovado pela ANPD/i);
});

test("road content declares six unique campaign anchors", () => {
  const anchors = [
    "free-flow",
    "privacy-by-design",
    "fornecedores",
    "dpo",
    "incidentes",
    "internacional",
  ];

  for (const anchor of anchors) {
    assert.match(contentSource, new RegExp(`id: "${anchor}"`));
  }

  assert.match(typesSource, /campaignAnchors/);
  assert.match(typesSource, /sectionKey/);
  assert.match(contentSource, /reviewedAt: "2026-08-27"/);
  assert.match(contentSource, /gov\.br\/antt/);
  assert.match(contentSource, /eur-lex\.europa\.eu/);
});
