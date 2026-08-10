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

const layoutSource = await readOptional(
  "../src/app/solucoes/escritorios-de-advocacia/layout.tsx",
);
const routeSource = await readOptional(
  "../src/app/solucoes/escritorios-de-advocacia/page.tsx",
);
const contentSource = await readOptional(
  "../src/components/legal-partners/law-firm-lgpd-content.ts",
);

test("law-firm LGPD route declares focused metadata and canonical", () => {
  assert.match(layoutSource, /LGPD para Escritórios de Advocacia/);
  assert.match(layoutSource, /Parceria TOGETHER/);
  assert.match(layoutSource, /solucoes\/escritorios-de-advocacia/);
});

test("law-firm LGPD route delegates rendering to its page component", () => {
  assert.match(routeSource, /LawFirmLgpdPage/);
});

test("content preserves the approved role boundary", () => {
  assert.match(contentSource, /Seu escritório mantém a condução jurídica/);
  assert.match(contentSource, /Implementação e operação/);
  assert.match(contentSource, /estratégia e interpretação jurídica/i);
  assert.match(contentSource, /diagnóstico e mapeamento de dados/i);
  assert.match(contentSource, /confidencialidade/i);
});

const mapSource = await readOptional(
  "../src/components/legal-partners/co-delivery-map.tsx",
);

test("responsibility map exposes the approved role boundary", () => {
  assert.match(mapSource, /roles\.office/);
  assert.match(mapSource, /roles\.together/);
  assert.match(mapSource, /roles\.result/);
  assert.match(mapSource, /summary/);
  assert.match(mapSource, /md:hidden/);
  assert.match(mapSource, /hidden[^"\n]*md:block/);
  assert.doesNotMatch(mapSource, /Solicitação recebida/);
  assert.match(mapSource, /useReducedMotion/);
  assert.match(mapSource, /initial=\{false\}/);
});

const pageSource = await readOptional(
  "../src/components/legal-partners/law-firm-lgpd-page.tsx",
);
const portfolioOfferSource = await readOptional(
  "../src/components/legal-partners/partner-portfolio-offer.tsx",
);
const capacitySource = await readOptional(
  "../src/components/legal-partners/partner-capacity-section.tsx",
);
const partnerFaqSource = await readOptional(
  "../src/components/legal-partners/partner-faq-section.tsx",
);
const homeSource = await readOptional("../src/app/page.tsx");
const announcementSource = await readOptional(
  "../src/components/ui/eca-digital-announcement.tsx",
);
const staggeredMenuSource = await readOptional(
  "../src/components/ui/staggered-menu.tsx",
);

test("landing page renders the approved narrative and conversion path", () => {
  assert.match(pageSource, /<Navbar/);
  assert.match(pageSource, /<CoDeliveryMap/);
  assert.match(pageSource, /id="coentrega"/);
  assert.match(pageSource, /lawFirmLgpdContent/);
  assert.match(pageSource, /content\.portfolioOffer/);
  assert.match(pageSource, /content\.capacity/);
  assert.match(pageSource, /content\.partnerModels/);
  assert.match(pageSource, /content\.process/);
  assert.match(pageSource, /content\.faqs/);
  assert.match(pageSource, /content\.finalCta/);
  assert.match(contentSource, /Conversar sobre uma parceria/);
  assert.match(contentSource, /href: "\/contato"/);
  assert.match(pageSource, /<Footer/);
});

test("landing page reuses the incumbent TOGETHER visual primitives", () => {
  const visualSources = `${pageSource}\n${capacitySource}`;

  assert.match(pageSource, /SectionPill/);
  assert.match(pageSource, /ActionLink/);
  assert.match(pageSource, /PixelDecor/);
  assert.match(capacitySource, /bg-\[#0a0a0a\]/);
  assert.match(pageSource, /brand-400/);
  assert.doesNotMatch(pageSource, /font-family/);

  const rawColors = visualSources.match(/#[0-9a-fA-F]{6,8}/g) ?? [];
  const approvedRawColors = new Set(["#0a0a0a", "#0000000a"]);
  assert.deepEqual(
    [...new Set(rawColors.map((color) => color.toLowerCase()))].sort(),
    [...approvedRawColors].sort(),
  );
});

test("landing page preserves the Home institutional framing", () => {
  assert.match(homeSource, /EcaDigitalAnnouncement/);
  assert.match(pageSource, /EcaDigitalAnnouncement/);
  assert.match(pageSource, /AuthorityStrip/);
  assert.doesNotMatch(pageSource, /eyebrow="Experiência em campo"/);
  assert.match(pageSource, /Empresas que confiam em nosso trabalho/);
  assert.match(announcementSource, /ECA Digital/);
  assert.match(announcementSource, /Ver diagn.stico/);
});

test("authority strip renders the supplied social-proof text without requiring an eyebrow", async () => {
  const authoritySource = await readOptional(
    "../src/components/ui/authority-strip.tsx",
  );
  assert.match(authoritySource, /title \?/);
  assert.match(authoritySource, /\{title\}/);
});

test("hero and responsibility breakpoints remain usable from tablet upward", () => {
  assert.match(pageSource, /xl:grid-cols-\[minmax\(0,1fr\)_minmax\(400px,0\.86fr\)\]/);
  assert.match(pageSource, /sm:grid-cols-2/);
  assert.match(pageSource, /sm:whitespace-normal/);
  assert.match(pageSource, /content\.hero\.pillShort/);
  assert.match(pageSource, /pillShort="Modelos de parceria"/);
  assert.match(mapSource, /md:hidden/);
  assert.match(mapSource, /hidden[^"\n]*md:block/);
  assert.match(mapSource, /roles\.office\.summary/);
  assert.match(mapSource, /roles\.together\.summary/);
});

test("all section labels use the shared pill treatment", () => {
  assert.match(pageSource, /<SectionPill/);
  assert.match(pageSource, /<SectionPill tone="brand">\{content\.finalCta\.pill\}<\/SectionPill>/);
  assert.match(capacitySource, /<SectionPill tone="dark">\{content\.pill\}<\/SectionPill>/);
});

test("proof and final CTA copy are public-facing", () => {
  assert.doesNotMatch(pageSource, /As provas abaixo reproduzem/);
  assert.doesNotMatch(contentSource, /exibida no site/);
  assert.match(pageSource, /Fale diretamente com nosso time/);
});

test("landing page contains the newly approved partnership narrative", () => {
  assert.match(contentSource, /Nova frente de negócios/);
  assert.match(contentSource, /Demandas de LGPD/);
  assert.match(contentSource, /Estrutura TOGETHER/);
  assert.match(pageSource, /Responsabilidades definidas/);
  assert.match(pageSource, /Modelos de parceria/);
  assert.match(pageSource, /Início da parceria/);
  assert.match(pageSource, /Confidencialidade desde o primeiro contato/);
  assert.match(partnerFaqSource, /Perguntas/);
  assert.match(contentSource, /Conduzir um projeto completo/);
  assert.match(contentSource, /Leve uma nova solução de LGPD/);
  assert.match(pageSource, /Primeiro alinhamos o projeto/);
  assert.match(contentSource, /03 \/ Trabalho conjunto/);
});

test("landing page honors the user's reduced-motion preference", () => {
  assert.match(pageSource, /MotionConfig/);
  assert.match(pageSource, /reducedMotion="user"/);
});

test("essential landing-page content is visible even when the animation timeline is paused", () => {
  assert.match(pageSource, /const fadeUp = \{\s*initial: false,/);
  assert.doesNotMatch(pageSource, /initial:\s*\{\s*opacity:\s*0/);
  assert.doesNotMatch(mapSource, /initial:\s*\{\s*opacity:\s*0/);
  assert.match(mapSource, /initial=\{false\}/);
});

test("shared mobile navigation mounts its portal after hydration", () => {
  assert.match(staggeredMenuSource, /useSyncExternalStore/);
  assert.match(staggeredMenuSource, /canUsePortal \? document\.body : null/);
  assert.doesNotMatch(staggeredMenuSource, /typeof document ===/);
});

const sitemapSource = await readOptional("../public/sitemap.xml");
const sitemapGeneratorSource = await readOptional("./sync-wordpress-posts.mjs");
const approvedCopy = `${contentSource}\n${pageSource}`;

test("sitemap publishes the law-firm LGPD route", () => {
  assert.match(
    sitemapSource,
    /https:\/\/togetherprivacy\.tech\/solucoes\/escritorios-de-advocacia/,
  );
});

test("WordPress sync preserves the law-firm LGPD route", () => {
  assert.match(
    sitemapGeneratorSource,
    /"\/solucoes\/escritorios-de-advocacia"/,
  );
});

test("public copy avoids unapproved commercial promises", () => {
  assert.doesNotMatch(approvedCopy, /white-label/i);
  assert.doesNotMatch(approvedCopy, /exclusividade/i);
  assert.doesNotMatch(approvedCopy, /não abordamos o cliente/i);
  assert.doesNotMatch(approvedCopy, /advogado não (entende|domina)/i);
  assert.doesNotMatch(approvedCopy, /garantia de resultado/i);
  assert.doesNotMatch(approvedCopy, /aumento garantido/i);
  assert.doesNotMatch(approvedCopy, /faturamento garantido/i);
  assert.doesNotMatch(approvedCopy, /sem risco/i);
});

test("landing page leads with the partner revenue opportunity", () => {
  assert.match(contentSource, /Amplie os serviços do seu escritório/);
  assert.match(contentSource, /Adequação TOGETHER/);
  assert.match(contentSource, /Escritório Parceiro TOGETHER/);
  assert.match(contentSource, /nova frente de faturamento/);
  assert.doesNotMatch(contentSource, /garantia de faturamento/i);
});

test("hero uses configurable media and no longer contains the responsibility map", () => {
  const heroStart = pageSource.indexOf("content.hero");
  const heroEnd = pageSource.indexOf("</section>", heroStart);
  const heroSource = pageSource.slice(0, heroEnd);

  assert.match(heroSource, /content\.hero\.image/);
  assert.match(heroSource, /<Image/);
  assert.doesNotMatch(heroSource, /<CoDeliveryMap/);
  assert.ok(pageSource.indexOf("<CoDeliveryMap") > heroEnd);
});

test("page replaces repetitive service grids with distinct narrative sections", () => {
  assert.match(pageSource, /<PartnerPortfolioOffer/);
  assert.match(pageSource, /<PartnerCapacitySection/);
  assert.match(pageSource, /<PartnerFaqSection/);
  assert.match(pageSource, /content\.partnerModels/);
  assert.doesNotMatch(pageSource, /content\.capabilities/);
  assert.doesNotMatch(pageSource, /content\.audiences/);
});

test("capacity section reuses approved Home proof points", () => {
  assert.match(contentSource, /\+200/);
  assert.match(contentSource, /\+5 anos/);
  assert.match(contentSource, /certificações internacionais/i);
  assert.match(contentSource, /GDPR/);
  assert.match(contentSource, /PDPL/);
  assert.match(capacitySource, /onetrust\.svg/);
  assert.match(capacitySource, /privacy-tools\.svg/);
});

test("partner FAQ follows the Home interaction pattern", () => {
  assert.match(partnerFaqSource, /index === 0/);
  assert.match(partnerFaqSource, /aria-expanded/);
  assert.match(partnerFaqSource, /border-b border-neutral-100/);
  assert.match(partnerFaqSource, /border-l-2 border-brand-400/);
  assert.match(partnerFaqSource, /rounded-full/);
  assert.match(partnerFaqSource, /Ainda com dúvidas/);
  assert.doesNotMatch(pageSource, /AccordionItem/);
});

test("public copy does not overuse the old execution vocabulary", () => {
  const diagnosisMentions = approvedCopy.match(/diagnóstico/gi) ?? [];
  const mappingMentions = approvedCopy.match(/mapeamento de dados/gi) ?? [];

  assert.ok(diagnosisMentions.length <= 3);
  assert.ok(mappingMentions.length <= 3);
  assert.doesNotMatch(approvedCopy, /diagnóstico e execução/gi);
});
