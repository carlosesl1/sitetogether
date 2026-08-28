import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const visiblePhoneSources = [
  "../src/app/contato/page.tsx",
  "../src/components/ui/cta-section.tsx",
  "../src/components/ui/footer.tsx",
];

test("every visible fixed-phone surface also displays the mobile number", async () => {
  for (const relativePath of visiblePhoneSources) {
    const source = await readFile(new URL(relativePath, import.meta.url), "utf8");

    assert.match(
      source,
      /\(11\) 5178-3235 \/ (?:\+55 11|\(11\)) 92642-0123/,
      `${relativePath} must display the mobile number beside the fixed phone`,
    );
  }
});
