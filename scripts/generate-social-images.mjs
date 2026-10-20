// Run with Playwright installed, or --playwright-module /path/to/playwright-core/index.mjs.
// The generated PNGs are committed; deployment does not need a browser.
import { mkdir } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const moduleArg = process.argv.indexOf("--playwright-module");
const browserArg = process.argv.indexOf("--browser");
const { chromium } = await import(moduleArg >= 0
  ? pathToFileURL(path.resolve(process.argv[moduleArg + 1])).href
  : "playwright");
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "public/images/social");
await mkdir(output, { recursive: true });
const browser = await chromium.launch({
  headless: true,
  ...(browserArg >= 0 ? { executablePath: process.argv[browserArg + 1] } : {}),
});
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  const cards = [
    "together", "blog", "contato", "dpo-as-a-service",
    "consultoria-adequacao", "mentoria-e-cultura", "escritorios-de-advocacia",
  ];
  for (const card of cards) {
    const url = pathToFileURL(path.join(root, "scripts/social-images.html"));
    url.searchParams.set("card", card);
    await page.goto(url.href);
    await page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all([...document.images].map(image => image.decode()));
      if (!document.fonts.check("700 66px Jakarta")) throw new Error("Brand font did not load");
      const heading = document.querySelector("h1").getBoundingClientRect();
      const text = document.querySelector("p").getBoundingClientRect();
      const footer = document.querySelector("footer").getBoundingClientRect();
      if (heading.right > 1132 || text.bottom + 24 > footer.top) throw new Error("Card content overflows");
    });
    await page.screenshot({ path: path.join(output, `${card}-v1.png`), type: "png" });
    console.log(`Generated ${card}-v1.png (1200 × 630)`);
  }
} finally {
  await browser.close();
}
