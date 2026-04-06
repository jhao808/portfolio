"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { photoFilters, type PhotoFilter, type PhotoItem } from "@/data/photos";
import { cn } from "@/lib/utils";

type GalleryCarouselProps = {
  images: PhotoItem[];
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function GalleryCarousel({ images }: GalleryCarouselProps) {
  const [activeFilter, setActiveFilter] = useState<PhotoFilter>("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const isProgrammaticScroll = useRef(false);

  const filteredImages = useMemo(() => {
    if (activeFilter === "All") {
      return images;
    }

    return images.filter((image) => image.category === activeFilter);
  }, [activeFilter, images]);

  useEffect(() => {
    const nextIndex = Math.floor(Math.max(filteredImages.length - 1, 0) / 2);
    setActiveIndex(nextIndex);
  }, [filteredImages.length]);

  useEffect(() => {
    const track = trackRef.current;
    const activeCard = cardRefs.current[activeIndex];

    if (!track || !activeCard) {
      return;
    }

    isProgrammaticScroll.current = true;

    const targetLeft =
      activeCard.offsetLeft - track.clientWidth / 2 + activeCard.clientWidth / 2;

    track.scrollTo({
      left: targetLeft,
      behavior: "smooth",
    });

    const timeoutId = window.setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 320);

    return () => window.clearTimeout(timeoutId);
  }, [activeIndex, filteredImages]);

  const updateClosestToCenter = () => {
    const track = trackRef.current;

    if (!track || isProgrammaticScroll.current) {
      return;
    }

    const trackCenter = track.scrollLeft + track.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cardRefs.current.forEach((card, index) => {
      if (!card) {
        return;
      }

      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const distance = Math.abs(cardCenter - trackCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex((currentIndex) => (
      currentIndex === closestIndex ? currentIndex : closestIndex
    ));
  };

  const moveToIndex = (direction: -1 | 1) => {
    setActiveIndex((currentIndex) =>
      clamp(currentIndex + direction, 0, Math.max(filteredImages.length - 1, 0)),
    );
  };

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-center gap-3">
        {photoFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "border-2 border-black px-5 py-2 text-[11px] font-bold uppercase tracking-[0.3em] transition duration-200 ease-out",
              activeFilter === filter
                ? "bg-black text-white shadow-bauhausSm"
                : "bg-white text-black hover:bg-yellow",
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="relative">
        <button
          type="button"
          aria-label="Previous image"
          onClick={() => moveToIndex(-1)}
          className="absolute left-0 top-1/2 z-30 hidden -translate-y-1/2 border-2 border-black bg-white p-3 shadow-bauhausSm transition hover:bg-yellow lg:inline-flex"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div
          ref={trackRef}
          className="overflow-x-auto overflow-y-hidden scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          onScroll={updateClosestToCenter}
        >
          <div className="flex min-h-[30rem] items-center gap-2 px-[14vw] py-6 sm:min-h-[36rem] sm:gap-4 sm:px-[18vw] lg:min-h-[42rem] lg:gap-6 lg:px-[22vw]">
            {filteredImages.map((image, index) => {
              const distance = Math.abs(index - activeIndex);
              const isActive = distance === 0;
              const scale = isActive ? 1.16 : distance === 1 ? 0.9 : 0.8;
              const opacity = isActive ? 1 : distance === 1 ? 0.82 : 0.62;
              const rotation = isActive ? 0 : index < activeIndex ? -6 : 6;
              const translateX = isActive ? 0 : index < activeIndex ? 24 : -24;
              const zIndex = 30 - distance;

              return (
                <div
                  key={image.src}
                  ref={(node) => {
                    cardRefs.current[index] = node;
                  }}
                  className="relative shrink-0"
                  style={{
                    zIndex,
                    transform: `translateX(${translateX}px) scale(${scale}) rotate(${rotation}deg)`,
                    opacity,
                    transition:
                      "transform 320ms ease, opacity 320ms ease, box-shadow 320ms ease",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "group block overflow-hidden border-4 border-black bg-white shadow-bauhausLg transition duration-300 ease-out",
                      isActive && "shadow-[10px_10px_0px_0px_black]",
                    )}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading={isActive ? "eager" : "lazy"}
                      className="aspect-[4/5] w-[14rem] object-cover transition duration-300 ease-out group-hover:scale-[1.04] sm:w-[16rem] lg:w-[18rem]"
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          aria-label="Next image"
          onClick={() => moveToIndex(1)}
          className="absolute right-0 top-1/2 z-30 hidden -translate-y-1/2 border-2 border-black bg-white p-3 shadow-bauhausSm transition hover:bg-yellow lg:inline-flex"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
