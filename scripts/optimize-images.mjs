import { readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const worksDir = path.join(root, "public/works");
const maxWidth = 800;

const covers = [
  "podmoskovye-house/3.jpg",
  "pushkino-house/7.jpg",
  "north-moscow-apartment/2.jpg",
  "moscow-apartment/1.jpg",
  "podmoskovye-apartment/1.jpg",
  "river-tower/6.jpg",
  "areal/06.jpg",
  "areal-spa/4.jpg",
  "khimki-house/2.jpg",
];

async function collectJpegs(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectJpegs(full)));
    } else if (/\.jpe?g$/i.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

const coverSet = new Set(covers.map((rel) => path.join(worksDir, rel)));
const files = (await collectJpegs(worksDir)).filter((file) => coverSet.has(file));

if (files.length !== covers.length) {
  const found = new Set(files);
  const missing = covers.filter((rel) => !found.has(path.join(worksDir, rel)));
  throw new Error(`Missing covers: ${missing.join(", ")}`);
}

for (const file of files) {
  const image = sharp(file);
  const meta = await image.metadata();
  const resized =
    (meta.width ?? 0) > maxWidth
      ? image.resize({ width: maxWidth, withoutEnlargement: true })
      : image;
  const out = file.replace(/\.jpe?g$/i, ".webp");
  const info = await resized.webp({ quality: 75 }).toFile(out);
  const rel = path.relative(worksDir, out);
  console.log(
    `${rel}  ${meta.width}x${meta.height} -> ${info.width}x${info.height}  ${info.size}b`,
  );
}
