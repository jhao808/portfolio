import type { Metadata } from "next";

import { GalleryCarousel } from "@/components/GalleryCarousel";
import { Section } from "@/components/section";
import { galleryPhotos } from "@/data/photos";

export const metadata: Metadata = {
  title: "Gallery | HAO / STUDIO",
  description: "A center-focused interactive photography carousel.",
};

export default function GalleryPage() {
  return (
    <main>
      <Section background="white" withDivider={false}>
        <div className="space-y-10">
          <GalleryCarousel images={galleryPhotos} />
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
