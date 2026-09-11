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
    "Simplifique a LGPD e a privacidade na sua instituição de ensino.",
  );
  assert.equal(
    content.hero.description,
    "A TOGETHER ajuda a entender o que precisa ser feito, organizar a adequação e manter o trabalho em dia, com apoio em documentos, contratos, processos e treinamento das equipes.",
  );
  assert.equal(content.hero.cta, "Conversar com a TOGETHER");
  assert.equal(content.finalCta.cta, "Solicitar contato");
  assert.deepEqual(content.hero.secondaryCta, {
    label: "Ver como podemos ajudar",
    href: "#seis-frentes",
  });
});

test("higher education explains the problem before the next-step context and services", () => {
  assert.deepEqual(Object.keys(content.narrative), [
    "problem",
    "context",
    "sixFronts",
    "togetherApproach",
    "outcomes",
  ]);
  assert.deepEqual(
    Object.values(content.narrative).map(({ pill }) => pill),
    [
      "O desafio da instituição",
      "Quando a adequação já começou",
      "Como podemos ajudar",
      "Como trabalhamos com a instituição",
      "O que o trabalho ajuda a organizar",
    ],
  );
});

test("higher education context states the institutional need directly", () => {
  assert.equal(
    `${content.narrative.context.title} ${content.narrative.context.accent}`,
    "Sua instituição já tem uma política de privacidade. O que precisa ser feito depois?",
  );
  assert.equal(
    content.narrative.context.description,
    "A política de privacidade é uma parte da adequação. O restante precisa estar organizado na rotina da instituição.",
  );
  assert.deepEqual(
    content.narrative.context.areas.map(({ label }) => label),
    [
      "Contratos",
      "Processos",
      "Treinamento das equipes",
      "Atendimento às solicitações",
    ],
  );
  assert.deepEqual(content.narrative.context.actions, [
    "Avaliar o que já foi feito",
    "Identificar o que ainda precisa de atenção",
    "Organizar ações, responsáveis e prazos",
  ]);
  assert.equal(
    content.narrative.context.note,
    "Quando necessário, a TOGETHER também apoia ajustes em documentos e processos, capacitação e acompanhamento contínuo.",
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
    "da sua instituição.",
  );
});

test("higher education requests the compact 64px desktop hero", () => {
  assert.match(heroSource, /2xl:text-\[4rem\]/);
});

test("higher education names all six privacy fronts in plain language", () => {
  assert.deepEqual(
    content.narrative.sixFronts.items.map(({ title }) => title),
    [
      "Diagnóstico e plano de adequação",
      "Políticas e documentos",
      "Contratos e fornecedores",
      "Acompanhamento da privacidade",
      "Treinamentos e orientações",
      "Solicitações, auditorias e incidentes",
    ],
  );
  assert.equal(content.narrative.sixFronts.items.length, 6);
});

test("every privacy front explains how TOGETHER helps", () => {
  for (const front of content.narrative.sixFronts.items) {
    assert.ok(front.description.length >= 40);
    assert.ok(front.togetherHelp.length >= 40);
    assert.notEqual(front.description, front.togetherHelp);
  }
});

test("TOGETHER approach is continuous and not a false six-step sequence", () => {
  assert.deepEqual(
    content.narrative.togetherApproach.items.map(({ title }) => title),
    ["Entender a situação", "Definir as prioridades", "Executar as adequações", "Acompanhar a evolução"],
  );
  assert.match(
    content.narrative.sixFronts.description,
    /começar por uma demanda específica/i,
  );
  assert.doesNotMatch(
    content.narrative.sixFronts.description,
    /seis etapas|passo a passo/i,
  );
});

test("higher education presents the six fronts as a scannable service grid", () => {
  assert.match(narrativeSource, /ariaLabel="Seis frentes de um programa de privacidade"/);
  assert.match(narrativeSource, /Como a TOGETHER ajuda/);
  assert.match(narrativeSource, /data-front-index=\{item\.label\}/);
  assert.match(narrativeSource, /xl:grid-cols-3/);
  assert.match(narrativeSource, /rounded-\[1\.5rem\] border border-neutral-200 bg-white/);
  assert.doesNotMatch(narrativeSource, /lg:mt-4 lg:block/);
  assert.doesNotMatch(narrativeSource, /academic-mosaic/);
});

test("higher education keeps the approved two-column outcomes layout", () => {
  assert.match(narrativeSource, /ariaLabel="Entregas e acompanhamento da privacidade"/);
  assert.match(narrativeSource, /className="grid gap-4 sm:grid-cols-2"/);
  assert.doesNotMatch(narrativeSource, /sm:grid-cols-2 lg:grid-cols-3/);
});

test("TOGETHER approach includes a contextual CTA to the final form", () => {
  assert.deepEqual(content.narrative.togetherApproach.cta, {
    eyebrow: "Próximo passo",
    title: "Sua instituição precisa começar ou dar continuidade?",
    description:
      "Conte o que já foi feito e o que precisa de apoio. Ajudamos a definir os próximos passos.",
    label: "Conversar com a TOGETHER",
    href: "#cta",
  });
  assert.match(narrativeSource, /<ActionLink/);
  assert.match(narrativeSource, /href=\{content\.narrative\.togetherApproach\.cta\.href\}/);
});

test("higher education conversion copy is transparent", () => {
  const serialized = JSON.stringify(content);
  assert.match(serialized, /conte sua dúvida/i);
  assert.match(serialized, /proposta/i);
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
