import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
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
  assert.match(faqSource, /aria-hidden=\{!isOpen\}/);
  assert.match(faqSource, /role="region"/);
  assert.match(faqSource, /type="button"/);
  assert.match(faqSource, /useReducedMotion/);
  assert.doesNotMatch(faqSource, /Agendar Call Técnica/);
  assert.doesNotMatch(faqSource, /<ActionLink/);
});

const heroSource = await readOptional(
  "../src/components/industry/industry-hero.tsx",
);

test("road hero uses static art direction and a decorative image", () => {
  assert.match(heroSource, /<picture/);
  assert.match(heroSource, /max-width: 767px/);
  assert.match(heroSource, /image\.mobile\.avif/);
  assert.match(heroSource, /image\.desktop\.avif/);
  assert.match(heroSource, /width=\{image\.desktop\.width\}/);
  assert.match(heroSource, /height=\{image\.desktop\.height\}/);
  assert.match(heroSource, /alt=""/);
  assert.match(heroSource, /fetchPriority="high"/);
});

test("optimized AVIF and WebP hero assets stay within budget", async () => {
  const budgets = new Map([
    ["hero-desktop.avif", 350_000],
    ["hero-desktop.webp", 500_000],
    ["hero-mobile.avif", 250_000],
    ["hero-mobile.webp", 350_000],
  ]);

  for (const [filename, maxBytes] of budgets) {
    const file = new URL(
      `../public/images/industries/roads/${filename}`,
      import.meta.url,
    );
    const fileStat = await stat(file);
    assert.ok(
      fileStat.size <= maxBytes,
      `${filename} is ${fileStat.size} bytes; maximum is ${maxBytes}`,
    );
  }

  for (const filename of ["hero-desktop.png", "hero-mobile.png"]) {
    await stat(
      new URL(
        `../public/images/industries/roads/${filename}`,
        import.meta.url,
      ),
    );
  }
});

const roadsContextSource = await readOptional(
  "../src/components/industry/roads/roads-context-sections.tsx",
);

test("road context renders the required campaign destination and varied layouts", () => {
  assert.match(roadsContextSource, /id="free-flow"/);
  assert.match(roadsContextSource, /RoadsOperationalContextSection/);
  assert.match(roadsContextSource, /RoadsLifecycleSection/);
  assert.match(roadsContextSource, /RoadsFreeFlowSection/);
  assert.match(roadsContextSource, /lg:grid-cols-5/);
  assert.match(roadsContextSource, /md:grid-cols-\[0\.9fr_1\.1fr\]/);
});

test("road context uses small yellow signals, not yellow section backgrounds", () => {
  assert.match(
    roadsContextSource,
    /h-3 w-3 rounded-\[3px\] bg-brand-400/,
  );
  assert.doesNotMatch(
    roadsContextSource,
    /<section[^>]*className="[^"]*bg-brand-(?:100|200|300|400)/,
  );
});

const roadsCapabilitySource = await readOptional(
  "../src/components/industry/roads/roads-capability-sections.tsx",
);

test("road capability story renders every declared campaign destination", () => {
  for (const id of ["privacy-by-design", "fornecedores", "internacional"]) {
    assert.match(roadsCapabilitySource, new RegExp(`id="${id}"`));
  }
  assert.match(roadsCapabilitySource, /index === 0 \? "dpo"/);
  assert.match(roadsCapabilitySource, /index === 1 \? "incidentes"/);
});

test("capability mosaic keeps the yellow card compact", () => {
  assert.match(roadsCapabilitySource, /max-w-\[280px\]/);
  assert.match(roadsCapabilitySource, /tone === "brand-compact"/);
  assert.match(roadsCapabilitySource, /position="capabilities"/);
  assert.doesNotMatch(
    roadsCapabilitySource,
    /<section[^>]*className="[^"]*bg-brand-(?:100|200|300|400)/,
  );
});

test("continuous operation carries training and technology proof", () => {
  assert.match(roadsCapabilitySource, /IndustryTechnologyRail/);
  assert.match(roadsCapabilitySource, /training\.audiences/);
  assert.match(roadsCapabilitySource, /RoadsOperationsSection/);
  assert.match(roadsCapabilitySource, /RoadsInternationalMethodSection/);
});

const finalCtaSource = await readOptional(
  "../src/components/industry/industry-final-cta.tsx",
);
const pageSource = await readOptional(
  "../src/components/industry/roads-industry-page.tsx",
);

test("road page composes the complete approved narrative", () => {
  const requiredComponents = [
    "Navbar",
    "IndustryHero",
    "IndustryProofStrip",
    "RoadsOperationalContextSection",
    "RoadsLifecycleSection",
    "RoadsFreeFlowSection",
    "RoadsCapabilitiesSection",
    "RoadsPrivacyByDesignSection",
    "RoadsOperationsSection",
    "RoadsInternationalMethodSection",
    "IndustryFaqSection",
    "IndustryFinalCta",
    "Footer",
  ];

  for (const component of requiredComponents) {
    assert.match(pageSource, new RegExp(`<${component}`));
  }
});

test("road page has exactly the three approved CTA positions", () => {
  const combinedSource = `${pageSource}\n${heroSource}\n${roadsCapabilitySource}\n${finalCtaSource}`;
  assert.equal((combinedSource.match(/position="hero"/g) ?? []).length, 1);
  assert.equal(
    (combinedSource.match(/position="capabilities"/g) ?? []).length,
    1,
  );
  assert.equal((combinedSource.match(/position="final"/g) ?? []).length, 1);
});

test("only the final CTA uses a full yellow section", () => {
  assert.match(finalCtaSource, /<section[^>]*bg-brand-400/);
  assert.doesNotMatch(pageSource, /bg-brand-100/);
  assert.doesNotMatch(pageSource, /bg-brand-200/);
  assert.doesNotMatch(pageSource, /overflow-x-(?:hidden|clip)/);
});

const routeSource = await readOptional(
  "../src/app/solucoes/privacidade-gestao-de-rodovias/page.tsx",
);
const layoutSource = await readOptional(
  "../src/app/solucoes/privacidade-gestao-de-rodovias/layout.tsx",
);
const sitemapSource = await readOptional("../public/sitemap.xml");
const sitemapGeneratorSource = await readOptional("./sync-wordpress-posts.mjs");

test("road solution route delegates to the road page", () => {
  assert.match(routeSource, /RoadsIndustryPage/);
});

test("road solution metadata declares title, canonical and Open Graph", () => {
  assert.match(layoutSource, /roadsIndustryContent\.metadata/);
  assert.match(layoutSource, /alternates/);
  assert.match(layoutSource, /canonical/);
  assert.match(layoutSource, /openGraph/);
  assert.match(layoutSource, /pt_BR/);
});

test("sitemap source and generator preserve the road route", () => {
  const route = "/solucoes/privacidade-gestao-de-rodovias";
  assert.match(sitemapGeneratorSource, new RegExp(`"${route}"`));
  assert.match(
    sitemapSource,
    /https:\/\/togetherprivacy\.tech\/solucoes\/privacidade-gestao-de-rodovias/,
  );
});

test("every declared campaign anchor has one rendered target", () => {
  const renderedSources = `${roadsContextSource}\n${roadsCapabilitySource}`;
  const staticAnchors = [
    "free-flow",
    "privacy-by-design",
    "fornecedores",
    "internacional",
  ];

  for (const anchor of staticAnchors) {
    const matches = renderedSources.match(new RegExp(`id="${anchor}"`, "g"));
    assert.equal(matches?.length, 1, `${anchor} must render exactly once`);
  }

  assert.equal(
    (roadsCapabilitySource.match(/index === 0 \? "dpo"/g) ?? []).length,
    1,
    "dpo must render exactly once",
  );
  assert.equal(
    (roadsCapabilitySource.match(/index === 1 \? "incidentes"/g) ?? []).length,
    1,
    "incidentes must render exactly once",
  );
});
