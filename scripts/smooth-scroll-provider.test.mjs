import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const providerPath = resolve(rootDir, "src/components/ui/smooth-scroll-provider.tsx");
const providerSource = readFileSync(providerPath, "utf8");

test("Lenis ignores wheel and touch gestures inside Leadster overlays", () => {
  assert.match(providerSource, /function\s+shouldPreventSmoothScroll/);
  assert.match(providerSource, /\.nld-chatbot/);
  assert.match(providerSource, /\[class\*=['"]nld-['"]\]/);
  assert.match(providerSource, /prevent:\s*shouldPreventSmoothScroll/);
});
