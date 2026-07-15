import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const layoutSource = await readFile(
  new URL("../src/app/layout.tsx", import.meta.url),
  "utf8",
);

test("loads the GTM container in the global layout", () => {
  assert.match(layoutSource, /googletagmanager\.com\/gtm\.js/);
  assert.match(layoutSource, /googletagmanager\.com\/ns\.html\?id=GTM-NRXBFNQN/);
  assert.equal(layoutSource.match(/GTM-NRXBFNQN/g)?.length, 2);
});
