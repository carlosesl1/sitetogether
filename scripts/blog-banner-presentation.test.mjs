import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const featured = readFileSync("src/components/blog/blog-featured.tsx", "utf8");
const card = readFileSync("src/components/blog/blog-card.tsx", "utf8");
const article = readFileSync("src/app/blog/[slug]/page.tsx", "utf8");

test("blog cards preserve native 1216:600 artwork without crop or hover zoom", () => {
  for (const [name, source] of [["featured", featured], ["card", card]]) {
    assert.match(source, /aspect-\[152\/75\]/, `${name} must use the 1216:600 aspect ratio`);
    assert.match(source, /object-contain/, `${name} must preserve the complete image`);
    assert.doesNotMatch(source, /aspect-\[16\/9\]/, `${name} must not force a 16:9 crop`);
    assert.doesNotMatch(source, /group-hover:scale-105/, `${name} must not zoom text-bearing artwork`);
  }
});

test("featured blog card keeps title and metadata outside the artwork", () => {
  assert.doesNotMatch(featured, /absolute inset-0 bg-gradient/);
  assert.doesNotMatch(featured, /absolute bottom-0 left-0 right-0/);
  assert.match(featured, /<div className="p-6 md:p-10">/);
});

test("article featured image preserves the complete native banner", () => {
  const heroStart = article.indexOf("Post Hero Header");
  const start = article.indexOf("{/* Featured Image */}");
  const end = article.indexOf("Post Content & Sidebar", start);
  assert.notEqual(heroStart, -1, "article hero section must be identifiable");
  assert.notEqual(start, -1, "article featured-image section must be identifiable");
  assert.notEqual(end, -1, "article content boundary must be identifiable");
  const hero = article.slice(heroStart, start);
  assert.doesNotMatch(hero, /src=\{featuredImage\}/, "text-bearing artwork must not be reused as a hero backdrop");
  const section = article.slice(start, end);
  assert.match(section, /aspect-\[152\/75\]/);
  assert.match(section, /object-contain/);
  assert.doesNotMatch(section, /object-cover/);
  assert.doesNotMatch(section, /max-h-\[350px\]/);
});
