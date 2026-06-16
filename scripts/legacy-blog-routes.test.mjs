import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const postsPath = resolve(rootDir, "public/data/blog-posts.json");
const posts = JSON.parse(readFileSync(postsPath, "utf8"));
const sampleSlug = posts[0]?.slug;

assert.ok(sampleSlug, "Expected at least one cached WordPress post slug");

test("static export serves blog posts at canonical and legacy root paths", () => {
  const canonicalPath = resolve(rootDir, "out/blog", `${sampleSlug}.html`);
  const legacyPath = resolve(rootDir, "out", `${sampleSlug}.html`);

  assert.ok(existsSync(canonicalPath), `Missing canonical blog HTML: ${canonicalPath}`);
  assert.ok(existsSync(legacyPath), `Missing legacy blog HTML: ${legacyPath}`);
});

test("legacy root blog pages point search engines to the canonical blog URL", () => {
  const legacyPath = resolve(rootDir, "out", `${sampleSlug}.html`);
  const legacyHtml = readFileSync(legacyPath, "utf8");

  assert.match(
    legacyHtml,
    new RegExp(
      `<link rel="canonical" href="https://togetherprivacy\\.tech/blog/${sampleSlug}"/>`,
    ),
  );
});
