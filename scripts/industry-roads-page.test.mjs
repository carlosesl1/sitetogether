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

async function readOptionalBinary(relativePath) {
  try {
    return await readFile(new URL(relativePath, import.meta.url));
  } catch {
    return Buffer.alloc(0);
  }
}

const typesSource = await readOptional(
  "../src/components/industry/industry-page-types.ts",
);
const contentSource = await readOptional(
  "../src/content/industries/roads.ts",
);
const globalStylesSource = await readOptional("../src/app/globals.css");
const navbarSource = await readOptional("../src/components/ui/navbar.tsx");

test("road content declares the approved sector promise and CTA", () => {
  assert.match(contentSource, /title: "Organize a privacidade da operação, do projeto ao"/);
  assert.match(contentSource, /accent: "pedágio digital\."/);
  assert.match(contentSource, /Agende uma Conversa/);
  assert.match(contentSource, /Ainda não temos experiência nem case específico/);
  assert.doesNotMatch(contentSource, /case comprovado no setor/i);
  assert.doesNotMatch(contentSource, /garantia de conformidade/i);
  assert.doesNotMatch(contentSource, /aprovado pela ANPD/i);
});

test("road copy stays clear for non-specialist decision makers", () => {
  assert.match(contentSource, /title: "Uma rodovia também é"/);
  assert.match(contentSource, /accent: "uma operação de dados\."/);
  assert.match(contentSource, /controles necessários em cada etapa/);
  assert.match(contentSource, /title: "Uma equipe para"/);
  assert.match(contentSource, /accent: "colocar a LGPD em prática\."/);
  assert.match(contentSource, /title: "A privacidade precisa funcionar"/);
  assert.match(contentSource, /accent: "todos os dias\."/);
  assert.doesNotMatch(contentSource, /O que sai da primeira fase/);
  assert.doesNotMatch(
    contentSource,
    /\b(?:go-live|runbooks|subprocessadores|cadência|premissas|atores|entregáveis)\b/i,
  );
});

test("road metadata leaves the root layout responsible for the title brand", () => {
  assert.match(
    contentSource,
    /metadata:\s*\{\s*title: "Privacidade e LGPD para .+ Rodovias"/,
  );
  assert.doesNotMatch(
    contentSource,
    /metadata:\s*\{\s*title: "[^"]*\| TOGETHER"/,
  );
});

test("mobile Leadster invitation cannot cover primary page actions", () => {
  assert.match(globalStylesSource, /\.nld-chatbot-invite-container/);
  assert.match(globalStylesSource, /display:\s*none\s*!important/);
});

test("desktop navbar CTA exposes one interactive element", () => {
  assert.match(navbarSource, /<Button\s+asChild/);
  assert.match(navbarSource, /<Link href="\/contato">/);
  assert.doesNotMatch(navbarSource, /<Link href="\/contato">\s*<Button/);
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
const authorityStripSource = await readOptional(
  "../src/components/ui/authority-strip.tsx",
);

test("industry proof is stats-only, fully rounded, and the road page omits the disclaimer", () => {
  assert.match(proofSource, /<dl/);
  assert.match(proofSource, /rounded-\[40px\]/);
  assert.doesNotMatch(proofSource, /rounded-t-/);
  assert.match(proofSource, /absolute inset-x-12 top-0 h-px bg-brand-400/);
  assert.match(proofSource, /note\?: string/);
  assert.doesNotMatch(contentSource, /proofNote:/);
  assert.doesNotMatch(typesSource, /proofNote: string/);
  assert.doesNotMatch(proofSource, /LogoMarquee/);
  assert.doesNotMatch(proofSource, /Clientes que confiam/);
});

test("industry proof overlaps the following section with responsive spacing", () => {
  assert.match(
    proofSource,
    /-my-10 sm:-my-14 lg:-my-16 xl:-my-20 2xl:-my-\[100px\]/,
  );
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
  assert.match(
    technologyRailSource,
    /brightness-0 invert opacity-75/,
    "the dark technology rail should normalize every logo to a high-contrast monochrome treatment",
  );
});

const faqSource = await readOptional(
  "../src/components/industry/industry-faq-section.tsx",
);
const sectionHeadingSource = await readOptional(
  "../src/components/industry/industry-section-heading.tsx",
);
const languageSwitcherSource = await readOptional(
  "../src/components/i18n/language-switcher.tsx",
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

test("shared industry typography stays readable from mobile through tablet", () => {
  assert.match(sectionHeadingSource, /clamp\(2rem,8vw,3rem\)/);
  assert.match(faqSource, /leading-\[1\.3\]/);
  assert.match(faqSource, /py-20 sm:py-24 lg:py-28 xl:py-40/);
  assert.match(languageSwitcherSource, /h-11/);
  assert.match(actionLinkSource, /text-\[11px\].*sm:text-xs/);
});

const heroSource = await readOptional(
  "../src/components/industry/industry-hero.tsx",
);
const industrySectionHeadingSource = await readOptional(
  "../src/components/industry/industry-section-heading.tsx",
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

test("road hero uses the yellow brand CTA", () => {
  assert.match(heroSource, /position="hero"[\s\S]*?variant="primary"/);
  assert.doesNotMatch(heroSource, /position="hero"[\s\S]*?variant="dark"/);
  assert.match(heroSource, /lg:text-\[3\.5rem\] xl:text-\[4rem\]/);
  assert.match(heroSource, /content\.accent/);
  assert.match(heroSource, /font-light italic text-brand-500/);
  assert.match(heroSource, /overflow-hidden bg-white/);
  assert.doesNotMatch(heroSource, /bg-\[#fffdf8\]/i);
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
  assert.match(roadsContextSource, /id="privacy-by-design"/);
  assert.match(roadsContextSource, /index === 1 \? "fornecedores"/);
  assert.match(roadsContextSource, /RoadsOperationalContextSection/);
  assert.match(roadsContextSource, /RoadsLifecycleSection/);
  assert.match(roadsContextSource, /RoadsFreeFlowSection/);
  assert.match(roadsContextSource, /lg:grid-cols-3[^"\n]*xl:grid-cols-5/);
  assert.match(roadsContextSource, /lg:grid-cols-\[0\.9fr_1\.1fr\]/);
  assert.doesNotMatch(roadsContextSource, /md:grid-cols-\[0\.9fr_1\.1fr\]/);
  assert.match(
    roadsContextSource,
    /py-20 sm:py-24 lg:py-32 xl:py-36/,
  );
  assert.doesNotMatch(roadsContextSource, /lg:sticky lg:top-28/);
});

test("lifecycle uses semantic stage icons and omits redundant outcomes", () => {
  for (const icon of [
    "Search",
    "FileSignature",
    "Settings2",
    "BadgeCheck",
    "RefreshCw",
  ]) {
    assert.match(roadsContextSource, new RegExp(`\\b${icon}\\b`));
  }

  assert.match(roadsContextSource, /lg:grid-cols-3[^"\n]*xl:grid-cols-5/);
  assert.match(roadsContextSource, /xl:block/);
  assert.doesNotMatch(roadsContextSource, /content\.outcomes/);
  assert.doesNotMatch(contentSource, /outcomesTitle:|outcomes:/);
  assert.doesNotMatch(typesSource, /readonly outcomesTitle:|readonly outcomes:/);
});

test("road context uses small yellow signals, not yellow section backgrounds", () => {
  assert.match(
    roadsContextSource,
    /h-2\.5 w-2\.5 rounded-\[3px\] bg-brand-400/,
  );
  assert.doesNotMatch(
    roadsContextSource,
    /<section[^>]*className="[^"]*bg-brand-(?:100|200|300|400)/,
  );
});

const roadsCapabilitySource = await readOptional(
  "../src/components/industry/roads/roads-capability-sections.tsx",
);

function sourceBetween(source, startMarker, endMarker) {
  const start = source.indexOf(startMarker);
  assert.notEqual(start, -1, `missing source marker: ${startMarker}`);

  const end = endMarker ? source.indexOf(endMarker, start) : source.length;
  assert.notEqual(end, -1, `missing source marker: ${endMarker}`);

  return source.slice(start, end);
}

const operationalContextSource = sourceBetween(
  roadsContextSource,
  "export function RoadsOperationalContextSection",
  "export function RoadsLifecycleSection",
);
const lifecycleSectionSource = sourceBetween(
  roadsContextSource,
  "export function RoadsLifecycleSection",
  "export function RoadsFreeFlowSection",
);
const freeFlowSectionSource = sourceBetween(
  roadsContextSource,
  "export function RoadsFreeFlowSection",
);
const deliveryLightSource = sourceBetween(
  roadsCapabilitySource,
  '<div className="relative py-20 sm:py-24 lg:py-28 xl:py-32">',
  '<div className="relative bg',
);
const internationalSectionSource = sourceBetween(
  roadsCapabilitySource,
  "export function RoadsInternationalSection",
);
const deliveryDarkSource = sourceBetween(
  roadsCapabilitySource,
  '<div className="relative bg-neutral-950',
  "export function RoadsInternationalSection",
);

test("operational context follows the TOGETHER editorial and card language", () => {
  assert.match(typesSource, /readonly accent: string/);
  assert.match(typesSource, /readonly emphasis: string/);
  assert.match(typesSource, /readonly emphasisAccent: string/);
  assert.match(
    operationalContextSource,
    /font-light italic text-brand-500/,
  );
  assert.match(operationalContextSource, /bg-brand-100/);
  assert.match(
    operationalContextSource,
    /border-brand-400\/35 bg-white/,
  );
  assert.match(
    operationalContextSource,
    /bg-neutral-950 text-brand-400/,
  );
  assert.match(operationalContextSource, /index === 2/);
  assert.match(operationalContextSource, /Fluxo operacional/);
  assert.match(operationalContextSource, /Da entrada ao atendimento/);
  assert.match(operationalContextSource, /text-brand-600/);
  assert.doesNotMatch(
    operationalContextSource,
    /text-\[#(?:B48600|8F6A00)\]/,
  );
  assert.doesNotMatch(operationalContextSource, /hover:-translate/);
});

test("the full road page uses the TOGETHER editorial accent system", () => {
  assert.match(
    typesSource,
    /export type IndustryHeroContent = \{[\s\S]*?readonly accent: string/,
  );
  assert.match(industrySectionHeadingSource, /accent\?: string/);
  assert.match(
    industrySectionHeadingSource,
    /font-light italic text-brand-500/,
  );

  for (const accent of [
    "antes do sistema entrar no ar.",
    "precisam de regras claras.",
    "colocar a LGPD em prática.",
    "todos os dias.",
    "uma análise específica.",
  ]) {
    assert.match(contentSource, new RegExp(`accent: "${accent.replace(".", "\\.")}"`));
  }

  assert.equal(
    (roadsContextSource.match(/accent=\{content\.accent\}/g) ?? []).length,
    2,
  );
  assert.equal(
    (roadsCapabilitySource.match(
      /accent=\{(?:capabilities|operations|content)\.accent\}/g,
    ) ?? []).length,
    3,
  );
});

test("the full road page uses official TOGETHER surface and yellow tokens", () => {
  const roadVisualSources = [
    heroSource,
    roadsContextSource,
    roadsCapabilitySource,
    industrySectionHeadingSource,
  ].join("\n");

  assert.doesNotMatch(
    roadVisualSources,
    /#(?:fffdf8|0a0a0a|B48600|8F6A00)/i,
  );
  assert.match(heroSource, /bg-white/);
  assert.match(roadsContextSource, /bg-neutral-950/);
  assert.match(roadsCapabilitySource, /bg-neutral-950/);
  assert.match(roadsCapabilitySource, /border-brand-400\/25/);
  assert.match(roadsCapabilitySource, /bg-brand-400\/10/);
});

test("light road sections use restrained TOGETHER pixel framing", () => {
  assert.equal(
    (operationalContextSource.match(/<PixelDecor/g) ?? []).length,
    2,
  );
  assert.match(
    operationalContextSource,
    /placement="topRight"[\s\S]*placement="bottomLeft"/,
  );

  assert.equal((deliveryLightSource.match(/<PixelDecor/g) ?? []).length, 2);
  assert.match(
    deliveryLightSource,
    /placement="topRight"[\s\S]*placement="bottomLeft"/,
  );

  assert.equal(
    (internationalSectionSource.match(/<PixelDecor/g) ?? []).length,
    2,
  );
  assert.match(
    internationalSectionSource,
    /<section className="relative overflow-hidden bg-white/,
  );
  assert.match(internationalSectionSource, /container relative z-10/);
  assert.match(
    internationalSectionSource,
    /placement="topRight"[\s\S]*placement="bottomLeft"/,
  );
});

test("light road pixel framing stays visibly present", () => {
  for (const sectionSource of [
    operationalContextSource,
    deliveryLightSource,
    internationalSectionSource,
  ]) {
    assert.match(
      sectionSource,
      /placement="topRight"[\s\S]{0,180}opacity=\{0\.18\}/,
    );
    assert.match(
      sectionSource,
      /placement="bottomLeft"[\s\S]{0,180}opacity=\{0\.14\}/,
    );
  }
});

test("lifecycle section frames the highlighted opposite corners", () => {
  assert.equal((lifecycleSectionSource.match(/<PixelDecor/g) ?? []).length, 2);
  assert.match(
    lifecycleSectionSource,
    /placement="topRight"[\s\S]{0,240}opacity=\{0\.18\}[\s\S]{0,240}left-0 right-auto -scale-x-100/,
  );
  assert.match(
    lifecycleSectionSource,
    /placement="bottomRight"[\s\S]{0,180}opacity=\{0\.14\}/,
  );
  assert.match(lifecycleSectionSource, /container relative z-10/);
  assert.match(
    lifecycleSectionSource,
    /from-brand-400 via-neutral-300 to-brand-400\/30/,
  );
  assert.match(lifecycleSectionSource, /border-brand-400\/25 bg-white/);
});

test("dark road sections use the TOGETHER pixel framing at both corners", () => {
  for (const sectionSource of [freeFlowSectionSource, deliveryDarkSource]) {
    assert.equal((sectionSource.match(/<PixelDecor/g) ?? []).length, 2);
    assert.match(
      sectionSource,
      /placement="topRight"[\s\S]*placement="bottomLeft"/,
    );
  }
});

test("distilled delivery story renders its campaign destinations", () => {
  assert.match(roadsCapabilitySource, /id="internacional"/);
  assert.match(roadsCapabilitySource, /index === 0 \? "dpo"/);
  assert.match(roadsCapabilitySource, /index === 1 \? "incidentes"/);
});

test("delivery section replaces the repeated capability card mosaic", () => {
  assert.match(roadsCapabilitySource, /RoadsDeliverySection/);
  assert.match(roadsCapabilitySource, /RoadsInternationalSection/);
  assert.match(roadsCapabilitySource, /position="capabilities"/);
  assert.doesNotMatch(roadsCapabilitySource, /max-w-\[280px\]/);
  assert.doesNotMatch(roadsCapabilitySource, /tone === "brand-compact"/);
  assert.doesNotMatch(
    roadsCapabilitySource,
    /<section[^>]*className="[^"]*bg-brand-(?:100|200|300|400)/,
  );
});

test("continuous operation carries training and technology proof", () => {
  assert.match(roadsCapabilitySource, /IndustryTechnologyRail/);
  assert.match(roadsCapabilitySource, /training\.audiences/);
  assert.doesNotMatch(roadsCapabilitySource, /RoadsOperationsSection/);
  assert.doesNotMatch(roadsCapabilitySource, /RoadsInternationalMethodSection/);
  assert.doesNotMatch(roadsCapabilitySource, /RoadsPrivacyByDesignSection/);
});

test("training is presented as a structured responsive module", () => {
  assert.match(roadsCapabilitySource, /GraduationCap/);
  assert.match(
    roadsCapabilitySource,
    /rounded-\[28px\] border border-brand-400\/20 bg-white\/\[0\.04\]/,
  );
  assert.match(
    roadsCapabilitySource,
    /sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2/,
  );
  assert.match(roadsCapabilitySource, /training\.audiences\.map/);
});

test("nested delivery grids expand only when their columns stay readable", () => {
  assert.match(roadsCapabilitySource, /xl:grid-cols-2/);
  assert.doesNotMatch(
    roadsCapabilitySource,
    /className="grid border-t border-neutral-300 md:grid-cols-2"/,
  );
  assert.match(
    roadsCapabilitySource,
    /py-20 sm:py-24 lg:py-28 xl:py-32/,
  );
});

test("international section renders a transparent project-owned illustration", async () => {
  const asset = await readOptionalBinary(
    "../public/images/industries/roads/international-data-routes-v3.png",
  );

  assert.ok(asset.length > 10_000, "illustration must not be an empty placeholder");
  assert.equal(asset.subarray(1, 4).toString("ascii"), "PNG");
  assert.ok([4, 6].includes(asset[25]), "PNG must preserve an alpha channel");
  assert.match(roadsCapabilitySource, /import Image from "next\/image"/);
  assert.match(roadsCapabilitySource, /content\.illustration/);
  assert.match(contentSource, /international-data-routes-v3\.png/);
  assert.doesNotMatch(contentSource, /international-data-routes-v2\.png/);
  assert.match(typesSource, /readonly illustration:/);
});

const finalCtaSource = await readOptional(
  "../src/components/industry/industry-final-cta.tsx",
);
const pageSource = await readOptional(
  "../src/components/industry/roads-industry-page.tsx",
);

test("road page reuses the home client-logo strip and moves proof into the support section", () => {
  assert.match(authorityStripSource, /Clientes que confiam:/);
  assert.match(authorityStripSource, /animate-marquee/);
  assert.match(pageSource, /<AuthorityStrip\s*\/>/);
  assert.doesNotMatch(pageSource, /<IndustryProofStrip/);
  assert.match(pageSource, /proof=\{content\.proof\}/);
  assert.match(
    roadsCapabilitySource,
    /proof: RoadsIndustryContent\["proof"\]/,
  );
  assert.match(roadsCapabilitySource, /items\.map/);
  assert.match(roadsCapabilitySource, /function RoadsCapabilityProofRail/);
  assert.match(
    roadsCapabilitySource,
    /grid grid-cols-2 gap-px xl:grid-cols-4/,
  );
  assert.match(
    roadsCapabilitySource,
    /<RoadsCapabilityProofRail items=\{proof\} \/>/,
  );
  assert.match(
    roadsCapabilitySource,
    /relative mt-4 flex flex-col items-start/,
  );
  assert.doesNotMatch(
    roadsCapabilitySource,
    /rounded-\[18px\] border border-neutral-200 bg-neutral-50/,
  );
});

test("final industry CTA exposes complete direct contact options", () => {
  assert.match(finalCtaSource, /Contato/);
  assert.match(finalCtaSource, /\(11\) 5178-3235/);
  assert.match(finalCtaSource, /\(11\) 92642-0123/);
  assert.match(finalCtaSource, /contato@togetherprivacy\.com/);
  assert.match(finalCtaSource, /https:\/\/wa\.me\/551151783235/);
  assert.match(finalCtaSource, /https:\/\/wa\.me\/5511926420123/);
  assert.match(finalCtaSource, /mailto:contato@togetherprivacy\.com/);
  assert.match(finalCtaSource, /focus-visible:ring-2/);
});

test("final CTA groups its pill and copy in a centered text block", () => {
  assert.match(finalCtaSource, /grid items-center gap-12/);
  assert.match(
    finalCtaSource,
    /<div className="min-w-0">[\s\S]*?<SectionPill tone="brand">[\s\S]*?<h2 className="mt-6[^"]*lg:text-\[3\.5rem\] xl:text-\[4rem\][^"]*">[\s\S]*?<p className="mt-6 max-w-lg/,
  );
  assert.doesNotMatch(finalCtaSource, /items-end/);
  assert.doesNotMatch(finalCtaSource, /lg:text-7xl/);
});

test("final CTA uses compact mobile spacing and legible microcopy", () => {
  assert.match(finalCtaSource, /py-20[^"\n]*sm:py-24 lg:py-28 xl:py-36/);
  assert.match(finalCtaSource, /text-\[11px\]/);
  assert.doesNotMatch(finalCtaSource, /text-\[(?:9|10)px\]/);
});

test("road page composes the complete approved narrative", () => {
  const requiredComponents = [
    "Navbar",
    "IndustryHero",
    "AuthorityStrip",
    "RoadsOperationalContextSection",
    "RoadsLifecycleSection",
    "RoadsFreeFlowSection",
    "RoadsDeliverySection",
    "RoadsInternationalSection",
    "IndustryFaqSection",
    "IndustryFinalCta",
    "Footer",
  ];

  for (const component of requiredComponents) {
    assert.match(pageSource, new RegExp(`<${component}`));
  }

  for (const removedComponent of [
    "RoadsCapabilitiesSection",
    "RoadsPrivacyByDesignSection",
    "RoadsOperationsSection",
    "RoadsInternationalMethodSection",
  ]) {
    assert.doesNotMatch(pageSource, new RegExp(`<${removedComponent}`));
  }

  assert.doesNotMatch(pageSource, /note=\{content\.proofNote\}/);
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
    "internacional",
  ];

  for (const anchor of staticAnchors) {
    const matches = renderedSources.match(new RegExp(`id="${anchor}"`, "g"));
    assert.equal(matches?.length, 1, `${anchor} must render exactly once`);
  }

  assert.equal(
    (roadsContextSource.match(/index === 1 \? "fornecedores"/g) ?? []).length,
    1,
    "fornecedores must render exactly once",
  );

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

test("road content removes the redundant standalone process contracts", () => {
  assert.doesNotMatch(typesSource, /proofNote: string/);
  assert.doesNotMatch(typesSource, /outcomes: readonly string\[\]/);
  assert.doesNotMatch(typesSource, /readonly privacyByDesign:/);
  assert.doesNotMatch(typesSource, /readonly method:/);
  assert.doesNotMatch(contentSource, /privacyByDesign:/);
  assert.doesNotMatch(contentSource, /method:/);
  assert.equal((contentSource.match(/tone:/g) ?? []).length, 0);
});
