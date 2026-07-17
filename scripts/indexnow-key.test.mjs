import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const indexNowKey = "fd37805952d34f34a0f7936d8bd0cf6a";

test("publishes the configured IndexNow key at the site root", async () => {
  const keyFile = await readFile(
    new URL(`../public/${indexNowKey}.txt`, import.meta.url),
    "utf8",
  );

  assert.equal(keyFile.trim(), indexNowKey);
});
