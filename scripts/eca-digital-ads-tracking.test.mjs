import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const readSource = (path) =>
  readFile(new URL(path, import.meta.url), "utf8").catch(() => "");

const [
  pageSource,
  clientSource,
  trackerSource,
  actionLinkSource,
  socialImageSource,
  htaccessSource,
] = await Promise.all([
  readSource("../src/app/eca-digital/page.tsx"),
  readSource("../src/app/eca-digital/eca-digital-client.tsx"),
  readSource("../src/components/analytics/industry-marketing-tracker.tsx"),
  readSource("../src/components/ui/site-primitives.tsx"),
  readSource("../src/app/eca-digital/opengraph-image.tsx"),
  readSource("../public/.htaccess"),
]);

test("includes ECA Digital in the shared marketing tracker", () => {
  assert.match(trackerSource, /["']\/eca-digital["']\s*:\s*["']eca_digital["']/);
});

test("tracks only intentionally marked ECA Digital CTAs with their locations", () => {
  assert.match(trackerSource, /hasAttribute\(["']data-analytics-cta["']\)/);
  assert.match(actionLinkSource, /analyticsCta\??:\s*boolean/);
  assert.match(actionLinkSource, /data-analytics-cta=/);

  const trackedCtas = clientSource.match(/analyticsCta/g) ?? [];
  const locations = clientSource.match(/analyticsLocation=/g) ?? [];
  assert.equal(trackedCtas.length, 4);
  assert.equal(locations.length, 4);
});

test("emits ECA Digital generate_lead only after a successful request", () => {
  assert.match(clientSource, /pushLeadConversionEvent/);

  const submitIndex = clientSource.indexOf("await submitContact(");
  const conversionIndex = clientSource.indexOf("pushLeadConversionEvent(", submitIndex);
  const resetIndex = clientSource.indexOf("form.reset()", submitIndex);

  assert.ok(submitIndex >= 0, "the form must submit the contact request");
  assert.ok(
    conversionIndex > submitIndex,
    "the conversion must be emitted only after submitContact succeeds",
  );
  assert.ok(
    resetIndex > conversionIndex,
    "the conversion must be emitted before the successful form is reset",
  );
});

test("exposes the ECA form metadata and tracks failed submissions", () => {
  assert.match(clientSource, /data-analytics-form-id=["']eca-digital-diagnostico["']/);
  assert.match(clientSource, /data-analytics-form-name=["']Diagnóstico ECA Digital["']/);
  assert.match(clientSource, /data-analytics-form-source=["']eca-digital["']/);
  assert.match(clientSource, /pushFormErrorEvent\(\{[\s\S]*?errorType:\s*["']submission_failed["']/);
});

test("keeps the diagnostic card icon decorative instead of exposing a fake button", () => {
  assert.doesNotMatch(clientSource, /aria-label=["']Baixar diagnóstico["']/);
  assert.match(clientSource, /aria-hidden=["']true["'][\s\S]*?<Download/);
});

test("publishes concise metadata and Service structured data for ECA Digital", () => {
  assert.match(pageSource, /title:\s*["']Adequação ao ECA Digital["']/);
  assert.match(pageSource, /twitter:\s*\{/);
  assert.match(pageSource, /type=["']application\/ld\+json["']/);
  assert.match(pageSource, /["']@type["']:\s*["']Service["']/);
  assert.match(socialImageSource, /new ImageResponse/);
  assert.match(socialImageSource, /width:\s*1200/);
  assert.match(socialImageSource, /height:\s*630/);
});

test("serves the extensionless social image with an explicit PNG content type", () => {
  assert.match(
    htaccessSource,
    /<Files\s+["']opengraph-image["']>[\s\S]*?ForceType\s+image\/png[\s\S]*?<\/Files>/,
  );
});

test("uses clear, supportable ECA Digital copy", () => {
  assert.doesNotMatch(clientSource, /pelo o que/);
  assert.doesNotMatch(clientSource, /Se sua empresa tem um ou mais desses pontos\?/);
  assert.doesNotMatch(clientSource, /já avaliam conformidade/);
  assert.doesNotMatch(clientSource, /Diligências em andamento/);
});
