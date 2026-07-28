import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const layoutSource = await readFile(
  new URL("../src/app/layout.tsx", import.meta.url),
  "utf8",
);
const deferredThirdPartiesSource = await readFile(
  new URL("../src/components/analytics/deferred-third-parties.tsx", import.meta.url),
  "utf8",
);

test("loads the GTM container globally without blocking the critical render path", () => {
  assert.match(layoutSource, /DeferredThirdParties/);
  assert.match(deferredThirdPartiesSource, /googletagmanager\.com\/gtm\.js/);
  assert.match(layoutSource, /googletagmanager\.com\/ns\.html\?id=GTM-NRXBFNQN/);
  assert.equal(
    `${layoutSource}\n${deferredThirdPartiesSource}`.match(/GTM-NRXBFNQN/g)?.length,
    2,
  );
  assert.doesNotMatch(layoutSource, /strategy="beforeInteractive"/);
  assert.match(deferredThirdPartiesSource, /THIRD_PARTY_FALLBACK_DELAY_MS\s*=\s*12_000/);
  assert.match(deferredThirdPartiesSource, /pointerdown/);
  assert.match(deferredThirdPartiesSource, /touchstart/);
  assert.match(deferredThirdPartiesSource, /keydown/);
  assert.match(deferredThirdPartiesSource, /scroll/);
});
