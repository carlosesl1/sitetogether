import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const analyticsSource = await readFile(
  new URL("../src/lib/analytics.ts", import.meta.url),
  "utf8",
).catch(() => "");

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

test("defines a non-PII generate_lead dataLayer event", () => {
  assert.match(analyticsSource, /event:\s*["']generate_lead["']/);
  assert.match(analyticsSource, /form_id:/);
  assert.match(analyticsSource, /form_name:/);
  assert.match(analyticsSource, /form_source:/);
  assert.match(analyticsSource, /page_path:/);
  assert.doesNotMatch(analyticsSource, /\b(email|phone|firstName|lastName|company):/);
});

test("all six industry landing pages emit generate_lead only after a successful request", () => {
  for (const { path, source } of contactFormSources) {
    assert.match(source, /import\s*\{\s*pushLeadConversionEvent\s*\}/);

    const submitIndex = source.indexOf("await submitContact(");
    const conversionIndex = source.indexOf("pushLeadConversionEvent(");
    const resetIndex = source.indexOf("form.reset()");

    assert.ok(submitIndex >= 0, `${path} must submit the contact request`);
    assert.ok(
      conversionIndex > submitIndex,
      `${path} must emit the conversion only after submitContact succeeds`,
    );
    assert.ok(
      resetIndex > conversionIndex,
      `${path} must emit the conversion before resetting the successful form`,
    );
  }
});
