"use client";

import { useMemo, useState } from "react";

import type { GalleryCategory, GalleryImage } from "@/lib/photos";
import { cn } from "@/lib/utils";

type GalleryFilter = "All" | GalleryCategory;

type GalleryShowcaseProps = {
  images: GalleryImage[];
};

const filters: GalleryFilter[] = ["All", "LOVER", "UK"];

function getVisibleImages(images: GalleryImage[]) {
  if (images.length <= 5) {
    return images;
  }

  const centerIndex = Math.floor(images.length / 2);
  const start = Math.max(0, centerIndex - 2);
  const end = Math.min(images.length, start + 5);

  return images.slice(Math.max(0, end - 5), end);
}

export function GalleryShowcase({ images }: GalleryShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>("All");

  const filteredImages = useMemo(() => {
    const nextImages =
      activeFilter === "All"
        ? images
        : images.filter((image) => image.category === activeFilter);

    return getVisibleImages(nextImages);
  }, [activeFilter, images]);

  const centerIndex = Math.floor(filteredImages.length / 2);

  return (
    <div className="space-y-12">
      <div className="flex items-center justify-center gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "border-2 border-black px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] transition duration-200 ease-out",
              activeFilter === filter
                ? "bg-black text-white shadow-bauhausSm"
                : "bg-white text-black hover:bg-yellow",
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <div className="mx-auto flex min-w-max items-center justify-center gap-2 px-4 sm:gap-4 lg:gap-6">
          {filteredImages.map((image, index) => {
            const distanceFromCenter = Math.abs(index - centerIndex);

            return (
              <figure
                key={image.src}
                className={cn(
                  "group relative shrink-0 overflow-hidden border-4 border-black bg-white shadow-bauhausLg transition duration-300 ease-out hover:z-20 hover:scale-[1.04]",
                  distanceFromCenter === 0 && "w-[46vw] max-w-[420px]",
                  distanceFromCenter === 1 && "w-[24vw] max-w-[220px]",
                  distanceFromCenter >= 2 && "w-[18vw] max-w-[160px]",
                )}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="block h-[420px] w-full object-cover transition duration-300 ease-out group-hover:opacity-95 sm:h-[460px] lg:h-[520px]"
                  loading={distanceFromCenter === 0 ? "eager" : "lazy"}
                />
              </figure>
            );
          })}
        </div>
      </div>
    </div>
  );
}
