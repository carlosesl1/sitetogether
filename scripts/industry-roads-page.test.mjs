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

const attributionModule = await import(
  new URL("../src/lib/industry-attribution.ts", import.meta.url),
);
const actionLinkSource = await readOptional(
  "../src/components/ui/site-primitives.tsx",
);
const contactLinkSource = await readOptional(
  "../src/components/industry/industry-contact-link.tsx",
);

test("industry contact href preserves only approved campaign data", () => {
  const entryUrl = new URL(
    "https://togetherprivacy.tech/solucoes/privacidade-gestao-de-rodovias?utm_source=google&utm_campaign=free-flow&gclid=abc&unsafe=value#free-flow",
  );
  const href = attributionModule.buildIndustryContactHref({
    sector: "gestao-de-rodovias",
    position: "hero",
    entryUrl,
    allowedAnchors: ["free-flow", "privacy-by-design"],
  });

  assert.equal(
    href,
    "/contato?sector=gestao-de-rodovias&cta_position=hero&entry_anchor=free-flow&utm_source=google&utm_campaign=free-flow&gclid=abc",
  );
  assert.doesNotMatch(href, /unsafe/);
});

test("industry contact href keeps a useful no-JavaScript fallback", () => {
  assert.equal(
    attributionModule.buildIndustryContactHref({
      sector: "gestao-de-rodovias",
      position: "final",
      allowedAnchors: ["free-flow"],
    }),
    "/contato?sector=gestao-de-rodovias&cta_position=final",
  );
});

test("malformed hashes cannot break the contact link", () => {
  assert.doesNotThrow(() =>
    attributionModule.buildIndustryContactHref({
      sector: "gestao-de-rodovias",
      position: "hero",
      entryUrl: new URL("https://togetherprivacy.tech/solucoes#%E0%A4%A"),
      allowedAnchors: ["free-flow"],
    }),
  );
});

test("industry CTA maps positions to the three approved events", () => {
  assert.equal(attributionModule.getIndustryCtaEvent("hero"), "cta_hero");
  assert.equal(
    attributionModule.getIndustryCtaEvent("capabilities"),
    "cta_midpage",
  );
  assert.equal(attributionModule.getIndustryCtaEvent("final"), "cta_final");
});

test("industry contact link enhances ActionLink without blocking navigation", () => {
  assert.match(actionLinkSource, /onClick\?: MouseEventHandler/);
  assert.match(contactLinkSource, /dataLayer\?\.push/);
  assert.match(contactLinkSource, /buildIndustryContactHref/);
  assert.match(contactLinkSource, /useSyncExternalStore/);
  assert.doesNotMatch(contactLinkSource, /preventDefault/);
});

const proofSource = await readOptional(
  "../src/components/industry/industry-proof-strip.tsx",
);
const technologyRailSource = await readOptional(
  "../src/components/industry/industry-technology-rail.tsx",
);
const privacyPlatformsSource = await readOptional(
  "../src/content/privacy-platforms.ts",
);
const techIntegrationSource = await readOptional(
  "../src/components/ui/tech-integration.tsx",
);

test("industry proof is stats-only and cannot imply road-sector clients", () => {
  assert.match(proofSource, /<dl/);
  assert.match(proofSource, /rounded-t-\[40px\]/);
  assert.doesNotMatch(proofSource, /LogoMarquee/);
  assert.doesNotMatch(proofSource, /Clientes que confiam/);
});

test("privacy platform data is shared without changing the home section", () => {
  for (const label of [
    "OneTrust",
    "TrustWorks",
    "Securiti",
    "Privacy Tools",
    "DPONet",
    "BeCompliance",
    "Privally",
  ]) {
    assert.match(
      privacyPlatformsSource,
      new RegExp(label.replace(" ", "\\s*"), "i"),
    );
  }
  assert.match(techIntegrationSource, /privacyPlatforms/);
  assert.match(technologyRailSource, /privacyPlatforms/);
});

const faqSource = await readOptional(
  "../src/components/industry/industry-faq-section.tsx",
);

test("industry FAQ is configurable and exposes accordion semantics", () => {
  assert.match(faqSource, /items: readonly IndustryFaqItem\[\]/);
  assert.match(faqSource, /aria-expanded=\{isOpen\}/);
  assert.match(faqSource, /aria-controls=\{panelId\}/);
  assert.match(faqSource, /aria-labelledby=\{buttonId\}/);
  assert.match(faqSource, /role="region"/);
  assert.match(faqSource, /type="button"/);
  assert.match(faqSource, /useReducedMotion/);
  assert.doesNotMatch(faqSource, /Agendar Call Técnica/);
  assert.doesNotMatch(faqSource, /<ActionLink/);
});
