import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { saasIndustryContent } from "../src/content/industries/saas.ts";
import {
  buildIndustryContactHref,
  getIndustryCtaEvent,
} from "../src/components/industry/saas/saas-attribution.ts";

async function read(relativePath) {
  return readFile(new URL(relativePath, import.meta.url), "utf8");
}

const expectedChapters = [
  "growth-complexity",
  "policy-decisions",
  "privacy-by-design",
  "evolution",
  "method",
  "real-situations",
  "capabilities",
  "cross-functional",
  "social-proof",
  "capacity",
  "saas-stage",
];

const expectedClients = [
  "Mercado Bitcoin",
  "Tarea",
  "InHire",
  "Eletrobras",
  "Unimed",
];

test("SaaS exposes the revised hero and a consistent CTA", () => {
  assert.equal(
    `${saasIndustryContent.hero.title} ${saasIndustryContent.hero.accent}`,
    "Tenha um SaaS adequado à LGPD e às normas de privacidade aplicáveis.",
  );
  assert.equal(
    saasIndustryContent.hero.description,
    "A TOGETHER aplica a privacidade no produto, nos processos, nos contratos e nos fornecedores. Sua equipe evita atrasos em releases, contratos e respostas a clientes.",
  );
  assert.equal(saasIndustryContent.hero.cta, "Solicite seu diagnóstico inicial");
  assert.deepEqual(saasIndustryContent.hero.secondaryCta, {
    label: "Entenda como funciona",
    href: "#como-colocamos-em-pratica",
  });
  assert.equal(
    `${saasIndustryContent.finalCta.title} ${saasIndustryContent.finalCta.accent}`,
    "Comece a adequar seu SaaS à LGPD.",
  );
  assert.equal(saasIndustryContent.finalCta.cta, "Solicite seu diagnóstico inicial");
  assert.equal(
    saasIndustryContent.finalCta.nextStep,
    "A primeira conversa serve para entender a situação e definir um ponto de partida.",
  );
  assert.equal(
    saasIndustryContent.narrative.decisions.cta,
    "Solicite seu diagnóstico inicial",
  );
  assert.equal(
    saasIndustryContent.narrative.method.cta,
    "Solicite seu diagnóstico inicial",
  );
  assert.equal(
    saasIndustryContent.narrative.stage.cta,
    "Solicite seu diagnóstico inicial",
  );
});

test("SaaS copy stays concrete and reader-centered", () => {
  const serialized = JSON.stringify(saasIndustryContent);

  for (const vaguePhrase of [
    "A pergunta é:",
    "pontos necessários",
    "diferentes realidades empresariais",
  ]) {
    assert.doesNotMatch(serialized, new RegExp(vaguePhrase, "i"));
  }

  assert.equal(
    saasIndustryContent.narrative.situations.items[1],
    "Uma integração leva dados para outro serviço ou país.",
  );
  assert.match(
    saasIndustryContent.narrative.capabilities.items[0].description,
    /dados.*sistemas.*países.*fornecedores.*acesso/i,
  );

  for (const promisedOutcome of [
    /normas de privacidade aplicáveis/i,
    /equipe evita atrasos em releases, contratos e respostas a clientes/i,
    /equipe resolve situações comuns sozinha/i,
    /reduzir a reconstrução de respostas/i,
    /sem criar uma aprovação para cada release/i,
    /solicite seu diagnóstico inicial/i,
  ]) {
    assert.match(serialized, promisedOutcome);
  }
});

test("SaaS content keeps approved counts, order, and exact clients", () => {
  const narrative = saasIndustryContent.narrative;
  assert.deepEqual(narrative.growth.path, [
    "USUÁRIO",
    "PRODUTO",
    "API",
    "CLOUD",
    "CRM",
    "ANALYTICS",
    "FORNECEDORES",
  ]);
  assert.equal(narrative.decisions.items.length, 5);
  assert.equal(narrative.method.items.length, 5);
  assert.equal(narrative.situations.items.length, 6);
  assert.equal(narrative.capabilities.items.length, 8);
  assert.deepEqual(narrative.evolution.stages, [
    "Em construção: incluir privacidade desde o início",
    "Em operação: corrigir o que falta",
    "Em expansão: manter a adequação",
  ]);
  assert.deepEqual(narrative.socialProof.clients, expectedClients);
  assert.equal(narrative.stage.items.length, 3);
  assert.equal(saasIndustryContent.faq.items.length, 5);
});

test("SaaS narrative renders the approved chapter signature", async () => {
  const source = await read(
    "../src/components/industry/narratives/saas-narrative.tsx",
  );
  const chapters = [...source.matchAll(/data-chapter="([^"]+)"/g)].map(
    (match) => match[1],
  );
  assert.deepEqual(chapters, expectedChapters);
  assert.match(source, /SaasClientProof/);
  assert.match(source, /SaasContactLink/);
  assert.match(source, /pill=\{chapter\.pill\}/);
  assert.match(source, /accent=\{chapter\.accent\}/);
  assert.doesNotMatch(source, /IndustrySourcesDisclosure/);
  assert.doesNotMatch(source, /IndustryNarrativeDiagnostic/);

  for (const chapter of Object.values(saasIndustryContent.narrative)) {
    assert.ok(chapter.pill.trim());
    assert.ok(chapter.title.trim());
    assert.ok(chapter.accent.trim());
  }
});

test("SaaS client proof owns only the five approved accessible logos", async () => {
  const source = await read(
    "../src/components/industry/saas/saas-client-proof.tsx",
  );
  for (const client of expectedClients) {
    assert.ok(source.includes(`"${client}"`), `${client} asset is missing`);
  }
  assert.match(source, /alt=\{client\.name\}/);
  assert.match(source, /rounded-\[40px\]/);
  assert.doesNotMatch(source, /rounded-t-\[40px\]/);
  assert.doesNotMatch(source, /animate-marquee|LogoMarqueeSet|duplicate/);
});

test("SaaS campaign anchors resolve only to rendered approved chapters", () => {
  assert.deepEqual(saasIndustryContent.campaignAnchors, [
    { id: "privacy-by-design", sectionKey: "privacy-by-design" },
    { id: "fornecedores", sectionKey: "capabilities" },
    { id: "dpo", sectionKey: "cross-functional" },
    { id: "incidentes", sectionKey: "real-situations" },
  ]);
});

test("SaaS mid-page and final contact links retain analytics fallback", () => {
  assert.equal(getIndustryCtaEvent("map"), "cta_midpage");
  assert.equal(getIndustryCtaEvent("proof"), "cta_midpage");
  assert.equal(getIndustryCtaEvent("final"), "cta_final");
  assert.equal(
    buildIndustryContactHref({
      sector: "saas",
      position: "proof",
      allowedAnchors: ["privacy-by-design"],
    }),
    "/contato?sector=saas&cta_position=proof",
  );
});


test("SaaS local contact keeps the campaign and original chapter", () => {
  const href=buildIndustryContactHref({sector:"saas",position:"proof",localForm:true,allowedAnchors:["privacy-by-design"],entryUrl:new URL("https://togetherprivacy.tech/solucoes/privacidade-saas?utm_source=search&utm_campaign=saas&ignored=drop#privacy-by-design")});
  const url=new URL(href,"https://togetherprivacy.tech");
  assert.equal(url.pathname,"/solucoes/privacidade-saas");
  assert.equal(url.hash,"#contato-saas");
  assert.equal(url.searchParams.get("entry_anchor"),"privacy-by-design");
  assert.equal(url.searchParams.get("utm_source"),"search");
  assert.equal(url.searchParams.get("utm_campaign"),"saas");
  assert.equal(url.searchParams.get("cta_position"),"proof");
  assert.equal(url.searchParams.has("ignored"),false);
});
