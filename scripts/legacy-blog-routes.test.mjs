import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const postsPath = resolve(rootDir, "public/data/blog-posts.json");
const htaccessPath = resolve(rootDir, "public/.htaccess");
const posts = JSON.parse(readFileSync(postsPath, "utf8"));
const sampleSlug = posts[0]?.slug;

assert.ok(sampleSlug, "Expected at least one cached WordPress post slug");

test("static export serves blog posts only at the canonical blog path", () => {
  const canonicalPath = resolve(rootDir, "out/blog", `${sampleSlug}.html`);
  const legacyPath = resolve(rootDir, "out", `${sampleSlug}.html`);

  assert.ok(existsSync(canonicalPath), `Missing canonical blog HTML: ${canonicalPath}`);
  assert.equal(existsSync(legacyPath), false, `Unexpected duplicate legacy HTML: ${legacyPath}`);
});

test("legacy root blog URLs redirect permanently to canonical blog URLs", () => {
  const htaccess = readFileSync(htaccessPath, "utf8");
  const escapedSlug = sampleSlug.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");

  assert.match(
    htaccess,
    new RegExp(`RewriteRule \\^${escapedSlug}/\\?\\$ /blog/${sampleSlug} \\[R=301,L,NE\\]`),
  );
  assert.match(
    htaccess,
    new RegExp(`RewriteRule \\^${escapedSlug}\\\\\\.html\\$ /blog/${sampleSlug} \\[R=301,L,NE\\]`),
  );
});
