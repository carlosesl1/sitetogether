import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const flickeringGridSource = await readFile(
  new URL("../src/components/ui/backgrounds/flickering-grid.tsx", import.meta.url),
  "utf8",
);
const animationVisibilitySource = await readFile(
  new URL("../src/components/ui/animation-visibility-provider.tsx", import.meta.url),
  "utf8",
);
const authorityStripSource = await readFile(
  new URL("../src/components/ui/authority-strip.tsx", import.meta.url),
  "utf8",
);

test("flickering grid redraws only changed cells after its initial paint", () => {
  assert.match(flickeringGridSource, /drawGrid\(true\)/);
  assert.match(flickeringGridSource, /if\s*\(fullRedraw\)\s*\{\s*ctx\.clearRect\(0,\s*0/);
  assert.match(
    flickeringGridSource,
    /ctx\.clearRect\(col\s*\*\s*step,\s*row\s*\*\s*step,\s*squareSize,\s*squareSize\)/,
  );
});

test("offscreen CSS animations pause and resume through IntersectionObserver", () => {
  assert.match(animationVisibilitySource, /IntersectionObserver/);
  assert.match(animationVisibilitySource, /data-pause-offscreen-animation/);
  assert.match(animationVisibilitySource, /data-animation-paused/);
  assert.match(authorityStripSource, /data-pause-offscreen-animation/);
});
