import { readdir } from "node:fs/promises";
import path from "node:path";

const supportedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif", ".heic"]);

export async function getGalleryImages() {
  const photosDirectory = path.join(process.cwd(), "public", "photos");
  const files = await readdir(photosDirectory, { withFileTypes: true });

  return files
    .filter((file) => file.isFile())
    .map((file) => file.name)
    .filter((fileName) => supportedExtensions.has(path.extname(fileName).toLowerCase()))
    .sort((left, right) => left.localeCompare(right, undefined, { numeric: true }))
    .map((fileName) => ({
      src: `/photos/${fileName}`,
      name: fileName,
      alt: path.parse(fileName).name.replace(/[-_]+/g, " "),
    }));
}
