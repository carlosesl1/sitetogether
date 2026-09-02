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

  assert.equal(privateSchoolsIndustryContent.hero.title, "LGPD para escolas particulares,");
  assert.equal(privateSchoolsIndustryContent.hero.accent, "na prática.");
  assert.equal(privateSchoolsIndustryContent.hero.cta, "Quero avaliar minha escola");
  assert.equal(privateSchoolsIndustryContent.faq.items.length, 5);

  for (const name of ["Mercado Bitcoin", "Tarea", "InHire", "Eletrobras", "Unimed"]) {
    assert.match(proof, new RegExp(name));
  }

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

  assert.match(contact, /Solicitar avaliação de LGPD/);
  assert.match(contact, /Conte sobre sua escola/);
  assert.match(contact, /PrivateSchoolsContactLogoStrip/);
  assert.match(contact, /md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2/);
  assert.match(proof, /rounded-\[40px\]/);
  assert.match(landing, /data-private-schools-page/);
  assert.match(landing, /PrivateSchoolsFaqSection/);
  assert.match(landing, /PrivateSchoolsStructuredData/);
  assert.doesNotMatch(landing, /IndustryFaqSection|IndustryStructuredData/);
  assert.match(globals, /body:has\(\[data-private-schools-page\]\) \.nld-chatbot-invite-container/);
  assert.match(globals, /body:has\(\[data-private-schools-page\]\) \.nld-avatar/);
  assert.match(route, /PrivateSchoolsLandingPage/);
  assert.match(contact, /submitContact/);
});
