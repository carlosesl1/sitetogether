import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const trackerSource = await readFile(
  new URL("../src/components/analytics/industry-marketing-tracker.tsx", import.meta.url),
  "utf8",
).catch(() => "");

const analyticsSource = await readFile(
  new URL("../src/lib/analytics.ts", import.meta.url),
  "utf8",
);

const layoutSource = await readFile(
  new URL("../src/app/layout.tsx", import.meta.url),
  "utf8",
);

const contactFormPaths = [
  "../src/components/industry/saas/saas-contact-section.tsx",
  "../src/components/industry/private-schools/private-schools-contact-section.tsx",
  "../src/components/industry/higher-education-contact-section.tsx",
  "../src/components/industry/industry-contact-section.tsx",
  "../src/roads-release/components/industry/industry-contact-section.tsx",
];

const contactFormSources = await Promise.all(
  contactFormPaths.map(async (path) => ({
    path,
    source: await readFile(new URL(path, import.meta.url), "utf8"),
  })),
);

test("tracks the four decision-oriented interaction events on all six landing pages", () => {
  for (const eventName of ["cta_click", "form_start", "form_error", "contact_click"]) {
    assert.match(trackerSource, new RegExp(`["]${eventName}["]`));
  }

  for (const route of [
    "/solucoes/privacidade-saas",
    "/solucoes/privacidade-escolas-particulares",
    "/solucoes/privacidade-ensino-superior",
    "/solucoes/privacidade-transporte-fracionado",
    "/solucoes/privacidade-transporte-lotacao",
    "/solucoes/privacidade-gestao-de-rodovias",
  ]) {
    assert.match(trackerSource, new RegExp(route.replaceAll("/", "\\/")));
  }

  assert.match(trackerSource, /addEventListener\(["']click["']/);
  assert.match(trackerSource, /addEventListener\(["']focusin["']/);
  assert.match(trackerSource, /addEventListener\(["']invalid["']/);
  assert.match(layoutSource, /<IndustryMarketingTracker\s*\/>/);
});

test("interaction payloads expose context without sending submitted field values", () => {
  for (const parameter of [
    "page_sector",
    "cta_location",
    "cta_text",
    "destination_path",
    "contact_method",
    "form_id",
    "form_name",
    "form_source",
    "error_type",
    "field_name",
    "page_path",
  ]) {
    assert.match(`${trackerSource}\n${analyticsSource}`, new RegExp(`${parameter}:`));
  }

  assert.doesNotMatch(trackerSource, /\.value\b/);
  assert.doesNotMatch(analyticsSource, /\b(email|phone|firstName|lastName|company):/);
});

test("each interaction clears parameters that belong to earlier events", () => {
  for (const parameter of [
    "page_sector",
    "cta_location",
    "cta_text",
    "destination_path",
    "contact_method",
    "form_id",
    "form_name",
    "form_source",
    "error_type",
    "field_name",
    "page_path",
  ]) {
    assert.match(
      analyticsSource,
      new RegExp(`${parameter}: undefined`),
      `${parameter} must be cleared before the next event payload is merged`,
    );
  }

  assert.match(
    analyticsSource,
    /\.\.\.EMPTY_EVENT_PARAMETERS,\s*event,\s*\.\.\.parameters/s,
  );
});

test("all six forms identify themselves and emit a non-PII server error event", () => {
  for (const { path, source } of contactFormSources) {
    assert.match(source, /data-analytics-form-id=/, `${path} must expose its form id`);
    assert.match(source, /data-analytics-form-name=/, `${path} must expose its form name`);
    assert.match(source, /data-analytics-form-source=/, `${path} must expose its form source`);
    assert.match(source, /import\s*\{[^}]*pushFormErrorEvent[^}]*\}\s*from\s*["']@\/lib\/analytics["']/s);

    const catchIndex = source.indexOf("catch (error)");
    const errorEventIndex = source.indexOf("pushFormErrorEvent(", catchIndex);
    assert.ok(catchIndex >= 0, `${path} must handle failed submissions`);
    assert.ok(
      errorEventIndex > catchIndex,
      `${path} must emit form_error after a failed submission`,
    );
  }
});
