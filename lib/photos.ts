import { readdir } from "node:fs/promises";
import path from "node:path";

const supportedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif", ".heic"]);

export type GalleryCategory = "LOVER" | "UK";

export type GalleryImage = {
  src: string;
  name: string;
  alt: string;
  category: GalleryCategory;
};

async function getCategoryImages(category: GalleryCategory) {
  const categoryDirectory = path.join(process.cwd(), "public", "photos", category);
  const files = await readdir(categoryDirectory, { withFileTypes: true });

  return files
    .filter((file) => file.isFile())
    .map((file) => file.name)
    .filter((fileName) => supportedExtensions.has(path.extname(fileName).toLowerCase()))
    .sort((left, right) => left.localeCompare(right, undefined, { numeric: true }))
    .map((fileName) => ({
      src: `/photos/${category}/${fileName}`,
      name: fileName,
      alt: path.parse(fileName).name.replace(/[-_]+/g, " "),
      category,
    }));
}

export async function getGalleryImages() {
  const categories: GalleryCategory[] = ["LOVER", "UK"];
  const imageGroups = await Promise.all(categories.map((category) => getCategoryImages(category)));

  return imageGroups.flat();
}
