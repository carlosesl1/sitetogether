import assert from "node:assert/strict";
import { access, readFile, stat } from "node:fs/promises";
import test from "node:test";

async function readOptional(relativePath) {
  try {
    return await readFile(new URL(relativePath, import.meta.url), "utf8");
  } catch {
    return "";
  }
}

const sectorDefinitions = [
  {
    id: "saas",
    route: "privacidade-saas",
    content: "saas.ts",
    imageDir: "saas",
    title: "Privacidade que acompanha o produto",
  },
  {
    id: "escolas-particulares",
    route: "privacidade-escolas-particulares",
    content: "private-schools.ts",
    imageDir: "private-schools",
    title: "Proteja dados de alunos e responsáveis",
  },
  {
    id: "ensino-superior",
    route: "privacidade-ensino-superior",
    content: "higher-education.ts",
    imageDir: "higher-education",
    title: "Privacidade para uma operação acadêmica que não para",
  },
  {
    id: "transporte-fracionado",
    route: "privacidade-transporte-fracionado",
    content: "fractional-freight.ts",
    imageDir: "fractional-freight",
    title: "Privacidade em cada etapa da carga fracionada",
  },
  {
    id: "transporte-lotacao",
    route: "privacidade-transporte-lotacao",
    content: "full-truckload.ts",
    imageDir: "full-truckload",
    title: "Privacidade conectada à operação de carga lotação",
  },
];

const typesSource = await readOptional(
  "../src/components/industry/industry-page-types.ts",
);
const finalCtaSource = await readOptional(
  "../src/components/industry/industry-final-cta.tsx",
);
const pageSource = await readOptional(
  "../src/components/industry/sector-industry-page.tsx",
);
const structuredDataSource = await readOptional(
  "../src/components/industry/industry-structured-data.tsx",
);
const sectionSources = (
  await Promise.all([
    "../src/components/industry/sector/sector-operational-section.tsx",
    "../src/components/industry/sector/sector-journey-section.tsx",
    "../src/components/industry/sector/sector-priority-section.tsx",
    "../src/components/industry/sector/sector-support-section.tsx",
  ].map(readOptional))
).join("\n");

test("shared industry types support all five sectors", () => {
  assert.match(typesSource, /export type SectorIndustryContent/);
  assert.match(typesSource, /export type IndustryFinalCtaContent/);
  for (const { id } of sectorDefinitions) {
    assert.match(typesSource, new RegExp(`"${id}"`));
  }
  assert.match(finalCtaSource, /IndustryFinalCtaContent/);
  assert.doesNotMatch(finalCtaSource, /RoadsIndustryContent/);
});

test("sector page composes a varied TOGETHER narrative", () => {
  for (const symbol of [
    "IndustryStructuredData",
    "SectorOperationalSection",
    "SectorJourneySection",
    "SectorPrioritySection",
    "SectorSupportSection",
    "IndustryFaqSection",
    "IndustryFinalCta",
  ]) {
    assert.match(pageSource, new RegExp(symbol));
  }
  assert.match(pageSource, /AuthorityStrip/);
  assert.match(sectionSources, /bg-neutral-950/);
  assert.match(sectionSources, /PixelDecor/);
  assert.match(sectionSources, /rounded-\[2rem\]/);
  assert.doesNotMatch(
    sectionSources,
    /<section[^>]+className="[^"]*bg-brand-400(?:\s|"|')/,
  );
});

test("sector pages publish service and FAQ structured data", () => {
  assert.match(structuredDataSource, /application\/ld\+json/);
  assert.match(structuredDataSource, /"@type": "Service"/);
  assert.match(structuredDataSource, /"@type": "FAQPage"/);
  assert.match(structuredDataSource, /content\.faq\.items\.map/);
  assert.match(structuredDataSource, /content\.metadata\.canonical/);
});

test("all sector content and route modules are present and distinct", async () => {
  for (const sector of sectorDefinitions) {
    const contentSource = await readOptional(
      `../src/content/industries/${sector.content}`,
    );
    const routeSource = await readOptional(
      `../src/app/solucoes/${sector.route}/page.tsx`,
    );
    const layoutSource = await readOptional(
      `../src/app/solucoes/${sector.route}/layout.tsx`,
    );
    const metadataSource = `${routeSource}\n${layoutSource}`;

    assert.match(contentSource, new RegExp(sector.title));
    assert.match(contentSource, /Agende uma Conversa/g);
    assert.match(contentSource, /faq:/);
    assert.match(contentSource, /campaignAnchors:/);
    assert.match(contentSource, new RegExp(`/${sector.route}`));
    assert.match(routeSource, /SectorIndustryPage/);
    assert.match(metadataSource, /export const metadata/);
    assert.match(metadataSource, /alternates:\s*\{\s*canonical/);
  }
});

test("sector hero assets provide desktop and mobile art direction", async () => {
  const filenames = [
    "hero-desktop.avif",
    "hero-desktop.webp",
    "hero-desktop.png",
    "hero-mobile.avif",
    "hero-mobile.webp",
    "hero-mobile.png",
  ];

  for (const { imageDir } of sectorDefinitions) {
    for (const filename of filenames) {
      const asset = new URL(
        `../public/images/industries/${imageDir}/${filename}`,
        import.meta.url,
      );
      await access(asset);
      const info = await stat(asset);
      assert.ok(info.size > 0, `${imageDir}/${filename} is empty`);
    }
  }
});

test("sitemap generator and checked-in sitemap contain all five routes", async () => {
  const generatorSource = await readOptional("./sync-wordpress-posts.mjs");
  const sitemapSource = await readOptional("../public/sitemap.xml");

  for (const { route } of sectorDefinitions) {
    assert.match(generatorSource, new RegExp(`"/solucoes/${route}"`));
    assert.match(
      sitemapSource,
      new RegExp(`https://togetherprivacy\\.tech/solucoes/${route}`),
    );
  }
});
