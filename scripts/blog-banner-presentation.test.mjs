import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import ts from "typescript";

const files = [
  "src/components/blog/blog-featured.tsx",
  "src/components/blog/blog-card.tsx",
  "src/app/blog/[slug]/page.tsx",
];
function parse(file) {
  return ts.createSourceFile(file, readFileSync(new URL(`../${file}`, import.meta.url), "utf8"), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
}
function elements(root, predicate) {
  const found = [];
  function visit(node) {
    if (predicate(node)) found.push(node);
    ts.forEachChild(node, visit);
  }
  visit(root);
  return found;
}
function attr(node, name) {
  const opening = ts.isJsxElement(node) ? node.openingElement : node;
  return opening.attributes?.properties.find(p => ts.isJsxAttribute(p) && p.name.text === name)?.initializer;
}
function classes(node) { return attr(node, "className")?.text || ""; }
function jsxChildren(node) {
  return node.children.filter(n => ts.isJsxElement(n) || ts.isJsxSelfClosingElement(n) ||
    (ts.isJsxText(n) && n.text.trim()) || (ts.isJsxExpression(n) && n.expression));
}
for (const file of files) {
  test(`${file}: banners preserve the complete artwork without overlays or zoom`, () => {
    const source = parse(file);
    const images = elements(source, n => ts.isJsxSelfClosingElement(n) && n.tagName.getText(source) === "Image");
    assert.equal(images.length, 1, "Only the actual banner; no cropped decorative duplicate");
    const image = images[0];
    const media = image.parent;
    assert.ok(ts.isJsxElement(media));
    assert.match(classes(media), /(?:^|\s)aspect-\[1216\/600\](?:\s|$)/);
    assert.match(classes(image), /(?:^|\s)object-contain(?:\s|$)/);
    assert.ok(attr(image, "sizes"), "Responsive sizes must be explicit");
    assert.equal(jsxChildren(media).length, 1, "Media contains only Image, never HTML titles/badges/gradients");
    for (let node = image; node && !ts.isSourceFile(node); node = node.parent) {
      if (!ts.isJsxElement(node) && !ts.isJsxSelfClosingElement(node)) continue;
      assert.doesNotMatch(classes(node), /object-cover|(?:hover:)?scale-|opacity-(?:[1-9]0)|(?:max-)?h-\[\d+px\]/);
      // Square media corners are intentional: a rounded clipping mask also removes artwork.
      assert.doesNotMatch(classes(node), /overflow-hidden/);
      assert.doesNotMatch(classes(node), /(?:^|\s)(?:\w+:)?rounded-(?:\[|t)/);
    }
  });
}
test("blog links, copy and related-card reuse stay intact", () => {
  const featured = parse(files[0]).text;
  const card = parse(files[1]).text;
  const article = parse(files[2]).text;
  for (const source of [featured, card]) {
    assert.ok(source.includes('href={`/blog/${post.slug}`}'));
    assert.ok(source.includes('alt={post.imageAlt}'));
    assert.ok(source.includes('__html: post.titleHtml'));
    assert.ok(source.includes('{post.category}'));
    assert.ok(source.includes('{post.dateLabel}'));
  }
  assert.ok(featured.includes('Em Destaque'));
  assert.ok(featured.includes('Ler artigo completo'));
  assert.ok(article.includes('<BlogCard key={post.id} post={post} index={idx} />'));
});
