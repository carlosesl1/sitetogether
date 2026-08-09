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
  assert.match(contentSource, /Seu escritório conduz o jurídico/);
  assert.match(contentSource, /A TOGETHER sustenta a execução da LGPD/);
  assert.match(contentSource, /estratégia e interpretação jurídica/i);
  assert.match(contentSource, /diagnóstico e data mapping/i);
  assert.match(contentSource, /confidencialidade/i);
});

const mapSource = await readOptional(
  "../src/components/legal-partners/co-delivery-map.tsx",
);

test("co-delivery map exposes both responsibilities without motion dependency", () => {
  assert.match(mapSource, /Mapa da demanda/);
  assert.match(mapSource, /Escritório/);
  assert.match(mapSource, /TOGETHER/);
  assert.match(mapSource, /useReducedMotion/);
  assert.match(mapSource, /aria-label="Mapa da demanda de LGPD"/);
});

const pageSource = await readOptional(
  "../src/components/legal-partners/law-firm-lgpd-page.tsx",
);

test("landing page renders the approved narrative and conversion path", () => {
  assert.match(pageSource, /<Navbar/);
  assert.match(pageSource, /<CoDeliveryMap/);
  assert.match(pageSource, /id="coentrega"/);
  assert.match(pageSource, /lawFirmLgpdContent/);
  assert.match(pageSource, /content\.capabilities/);
  assert.match(pageSource, /content\.audiences/);
  assert.match(pageSource, /content\.process/);
  assert.match(pageSource, /content\.proofs/);
  assert.match(pageSource, /content\.faqs/);
  assert.match(pageSource, /Agendar conversa de parceria/);
  assert.match(pageSource, /href="\/contato"/);
  assert.match(pageSource, /<Footer/);
});

test("landing page reuses the incumbent TOGETHER visual primitives", () => {
  assert.match(pageSource, /SectionPill/);
  assert.match(pageSource, /ActionLink/);
  assert.match(pageSource, /PixelDecor/);
  assert.match(pageSource, /bg-\[#0a0a0a\]/);
  assert.match(pageSource, /brand-400/);
  assert.doesNotMatch(pageSource, /font-family/);

  const rawColors = pageSource.match(/#[0-9a-fA-F]{6,8}/g) ?? [];
  const approvedRawColors = new Set(["#0a0a0a", "#0000000a"]);
  assert.deepEqual(
    [...new Set(rawColors.map((color) => color.toLowerCase()))].sort(),
    [...approvedRawColors].sort(),
  );
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
});
