import path from "node:path";
import process from "node:process";
import { mkdir } from "node:fs/promises";
import sharp from "sharp";

function readArgument(name) {
  const index = process.argv.indexOf(name);
  const value = index >= 0 ? process.argv[index + 1] : undefined;
  if (!value) throw new Error(`Missing required argument ${name}`);
  return path.resolve(value);
}

const desktopSource = readArgument("--desktop");
const mobileSource = readArgument("--mobile");
const outputDir = readArgument("--output");

await mkdir(outputDir, { recursive: true });

async function generate(source, name) {
  const image = sharp(source).rotate();
  await Promise.all([
    image
      .clone()
      .avif({ quality: 55, effort: 6 })
      .toFile(path.join(outputDir, `${name}.avif`)),
    image
      .clone()
      .webp({ quality: 78, effort: 6 })
      .toFile(path.join(outputDir, `${name}.webp`)),
    image
      .clone()
      .png({ compressionLevel: 9, adaptiveFiltering: true })
      .toFile(path.join(outputDir, `${name}.png`)),
  ]);
}

await Promise.all([
  generate(desktopSource, "hero-desktop"),
  generate(mobileSource, "hero-mobile"),
]);

console.log(`Generated road hero assets in ${outputDir}`);
