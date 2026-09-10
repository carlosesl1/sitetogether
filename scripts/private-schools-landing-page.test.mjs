import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { privateSchoolsIndustryContent } from "../src/content/industries/private-schools.ts";

async function read(relativePath) {
  return readFile(new URL(relativePath, import.meta.url), "utf8");
}

test("private schools landing page keeps the approved conversion structure", async () => {
  const [route, narrative, proof, contact, landing, globals] = await Promise.all([
    read("../src/app/solucoes/privacidade-escolas-particulares/page.tsx"),
    read("../src/components/industry/narratives/private-schools-narrative.tsx"),
    read("../src/components/industry/private-schools/private-schools-proof-strip.tsx"),
    read("../src/components/industry/private-schools/private-schools-contact-section.tsx"),
    read("../src/components/industry/private-schools/private-schools-landing-page.tsx"),
    read("../src/app/globals.css"),
  ]);

  assert.equal(privateSchoolsIndustryContent.hero.title, "Organize a LGPD da sua escola");
  assert.equal(privateSchoolsIndustryContent.hero.accent, "sem complicar a rotina.");
  assert.equal(
    privateSchoolsIndustryContent.hero.description,
    "A TOGETHER ajuda sua escola a organizar a privacidade, mapear onde os dados são usados e orientar a equipe sobre como agir em cada situação.",
  );
  assert.equal(privateSchoolsIndustryContent.hero.cta, "Conversar sobre minha escola");
  assert.equal(privateSchoolsIndustryContent.narrative.problem.title, "A escola usa dados o dia inteiro.");
  assert.equal(privateSchoolsIndustryContent.narrative.tension.title, "A escola pode ter os documentos.");
  assert.equal(privateSchoolsIndustryContent.narrative.integration.title, "Para organizar o uso de uma foto,");
  assert.equal(privateSchoolsIndustryContent.narrative.solutions.title, "Escolha o serviço que");
  assert.equal(privateSchoolsIndustryContent.narrative.capacity.title, "Experiência para simplificar a LGPD");
  assert.equal(privateSchoolsIndustryContent.narrative.selfAssessment.title, "Qual situação mais precisa");
  assert.equal(privateSchoolsIndustryContent.narrative.process.title, "Depois que você envia o formulário,");
  assert.equal(privateSchoolsIndustryContent.narrative.positioning.title, "Sua equipe para de adivinhar");
  assert.equal(privateSchoolsIndustryContent.faq.title, "O que sua escola precisa");
  assert.equal(privateSchoolsIndustryContent.finalCta.title, "Conte qual assunto de privacidade precisa ficar mais claro.");
  assert.equal(privateSchoolsIndustryContent.faq.items.length, 6);

  assert.match(proof, /AuthorityStrip/);

  for (const label of ["Matrículas", "Saúde", "Fotos e vídeos", "Sistemas", "Equipe", "Fornecedores"]) {
    assert.match(`${JSON.stringify(privateSchoolsIndustryContent)}\n${narrative}`, new RegExp(label));
  }

  for (const field of [
    'name="firstName"',
    'name="lastName"',
    'name="email"',
    'name="company"',
    'name="phone"',
    'name="message"',
  ]) {
    assert.match(contact, new RegExp(field));
  }

  assert.match(contact, /Conte a principal dúvida da sua escola/);
  assert.match(contact, /Sobre qual assunto você quer conversar/);
  assert.match(contact, /PrivateSchoolsContactLogoStrip/);
  assert.match(contact, /md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2/);
  assert.match(landing, /data-private-schools-page/);
  assert.match(landing, /PrivateSchoolsFaqSection/);
  assert.match(landing, /PrivateSchoolsStructuredData/);
  assert.doesNotMatch(landing, /IndustryFaqSection|IndustryStructuredData/);
  assert.match(globals, /body:has\(\[data-private-schools-page\]\) \.nld-chatbot-invite-container/);
  assert.match(globals, /body:has\(\[data-private-schools-page\]\) \.nld-avatar/);
  assert.match(route, /PrivateSchoolsLandingPage/);
  assert.match(contact, /submitContact/);
});
