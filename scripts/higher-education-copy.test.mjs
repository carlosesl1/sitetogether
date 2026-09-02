import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { higherEducationIndustryContent as content } from "../src/content/industries/higher-education.ts";

const narrativeSource = await readFile(
  new URL(
    "../src/components/industry/narratives/higher-education-narrative.tsx",
    import.meta.url,
  ),
  "utf8",
);

const routeSource = await readFile(
  new URL(
    "../src/app/solucoes/privacidade-ensino-superior/page.tsx",
    import.meta.url,
  ),
  "utf8",
);

const heroSource = await readFile(
  new URL("../src/components/industry/higher-education-hero.tsx", import.meta.url),
  "utf8",
);

const contactSource = await readFile(
  new URL(
    "../src/components/industry/higher-education-contact-section.tsx",
    import.meta.url,
  ),
  "utf8",
);

test("higher education hero states the program outcome and next step", () => {
  assert.equal(
    `${content.hero.title} ${content.hero.accent}`,
    "Estruture a privacidade da sua instituição, dos dados à rotina das pessoas.",
  );
  assert.equal(
    content.hero.description,
    "A TOGETHER ajuda sua instituição a organizar dados, decisões, fornecedores, procedimentos e capacitação para que a privacidade funcione na prática.",
  );
  assert.equal(content.hero.cta, "Agendar uma conversa");
  assert.equal(content.finalCta.cta, "Agendar uma conversa");
  assert.deepEqual(content.hero.secondaryCta, {
    label: "Conhecer as seis frentes",
    href: "#seis-frentes",
  });
});

test("higher education narrative follows the approved four-chapter sequence", () => {
  assert.deepEqual(Object.keys(content.narrative), [
    "context",
    "sixFronts",
    "togetherApproach",
    "outcomes",
  ]);
  assert.deepEqual(
    Object.values(content.narrative).map(({ pill }) => pill),
    [
      "Privacidade na prática",
      "As seis frentes",
      "Como a TOGETHER atua",
      "O que muda na prática",
    ],
  );
});

test("higher education context states the institutional need directly", () => {
  assert.equal(
    `${content.narrative.context.title} ${content.narrative.context.accent}`,
    "Sua instituição precisa de um programa de privacidade que englobe dados, sistemas, contratos e pessoas.",
  );
  assert.equal(
    content.narrative.context.description,
    "Somente políticas de privacidade não organizam sozinhas onde os dados estão, por que são utilizados, quem pode acessá-los ou como agir diante de uma solicitação ou incidente.",
  );
});

test("higher education uses one ECA-style closing CTA", () => {
  assert.doesNotMatch(narrativeSource, /IndustryNarrativeDiagnostic/);
  assert.doesNotMatch(narrativeSource, /data-chapter="diagnostic"/);
  assert.match(routeSource, /HigherEducationContactSection/);
  assert.match(
    routeSource,
    /finalCta=\{\s*<HigherEducationContactSection/,
  );
  assert.match(contactSource, /id="cta"/);
  assert.match(contactSource, /data-layout-family="eca-contact-cta"/);
  assert.match(
    contactSource,
    /xl:grid-cols-\[minmax\(0,0\.82fr\)_minmax\(360px,0\.78fr\)\]/,
  );
  assert.match(contactSource, /<form/);
  assert.equal(
    content.finalCta.nextStep,
    "Descubra quais frentes precisam avançar primeiro.",
  );
});

test("higher education requests the compact 64px desktop hero", () => {
  assert.match(heroSource, /2xl:text-\[4rem\]/);
});

test("higher education names all six privacy fronts with recognized terms", () => {
  assert.deepEqual(
    content.narrative.sixFronts.items.map(({ title }) => title),
    [
      "Mapeamento de dados, sistemas e fluxos",
      "Finalidade, base legal, acesso e retenção",
      "Governança integrada entre as áreas",
      "Governança de terceiros",
      "Direitos dos titulares e resposta a incidentes",
      "Capacitação e cultura de privacidade",
    ],
  );
  assert.equal(content.narrative.sixFronts.items.length, 6);
});

test("every privacy front explains how TOGETHER helps", () => {
  for (const front of content.narrative.sixFronts.items) {
    assert.match(front.togetherHelp, /A TOGETHER/);
    assert.ok(front.description.length >= 90);
    assert.ok(front.togetherHelp.length >= 80);
  }
});

test("TOGETHER approach is continuous and not a false six-step sequence", () => {
  assert.deepEqual(
    content.narrative.togetherApproach.items.map(({ title }) => title),
    ["Diagnosticar", "Planejar", "Implantar", "Acompanhar"],
  );
  assert.match(
    content.narrative.sixFronts.description,
    /atuam juntas|evoluem com a instituição/i,
  );
  assert.doesNotMatch(
    content.narrative.sixFronts.description,
    /seis etapas|passo a passo/i,
  );
});

test("higher education uses one consistent editorial treatment for the fronts", () => {
  assert.match(narrativeSource, /ariaLabel="Seis frentes de um programa de privacidade"/);
  assert.match(narrativeSource, /Como a TOGETHER ajuda/);
  assert.match(narrativeSource, /data-front-index=\{item\.label\}/);
  assert.match(narrativeSource, /lg:grid-cols-\[7rem_1fr_1fr\]/);
  assert.doesNotMatch(narrativeSource, /lg:mt-4 lg:block/);
  assert.doesNotMatch(narrativeSource, /academic-mosaic/);
  assert.doesNotMatch(narrativeSource, /lg:grid-cols-3/);
});

test("TOGETHER approach includes a contextual CTA to the final form", () => {
  assert.deepEqual(content.narrative.togetherApproach.cta, {
    eyebrow: "Próximo passo",
    title: "Leve as prioridades da instituição para um plano de ação.",
    description:
      "Converse com a TOGETHER para identificar o ponto de partida e o escopo mais adequado.",
    label: "Agendar uma conversa",
    href: "#cta",
  });
  assert.match(narrativeSource, /<ActionLink/);
  assert.match(narrativeSource, /href=\{content\.narrative\.togetherApproach\.cta\.href\}/);
});

test("higher education conversion copy is transparent", () => {
  const serialized = JSON.stringify(content);
  assert.match(serialized, /realidade da sua instituição/i);
  assert.match(serialized, /escopo/i);
  assert.doesNotMatch(
    serialized,
    /diagnóstico gratuito|garantia de conformidade|aprovado pela ANPD|elimina(?:r|ção) (?:todos )?os riscos/i,
  );
});

test("higher education keeps source data without exposing the disclosure", () => {
  assert.doesNotMatch(narrativeSource, /IndustrySourcesDisclosure/);
  assert.ok(content.sources.length >= 1);
  assert.ok(content.sources.every(({ url }) => url.startsWith("https://")));
  assert.doesNotMatch(
    `${JSON.stringify(content)}\n${narrativeSource}`,
    /case comprovado no ensino superior|garantia de conformidade|aprovado pela ANPD/i,
  );
});
