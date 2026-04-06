import type { Metadata } from "next";

import { GalleryShowcase } from "@/components/gallery-showcase";
import { Section } from "@/components/section";
import { getGalleryImages } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Gallery | HAO / STUDIO",
  description: "A centered photography-style gallery with category filtering.",
};

export default async function GalleryPage() {
  const images = await getGalleryImages();

  return (
    <main>
      <Section background="white" withDivider={false}>
        <div className="space-y-10">
          <GalleryShowcase images={images} />
          <div className="space-y-3 text-center">
            <h1 className="text-4xl font-black uppercase tracking-tight sm:text-5xl">
              Nature
            </h1>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-foreground/60">
              Photography
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
