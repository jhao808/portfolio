import type { Metadata } from "next";

import { getGalleryImages } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Gallery | HAO / STUDIO",
  description: "A horizontally layered visual gallery sourced from the public photos folder.",
};

export default async function GalleryPage() {
  const images = await getGalleryImages();
  const centerIndex = Math.floor(images.length / 2);

  return (
    <main className="min-h-screen overflow-hidden bg-background">
      <div className="relative flex min-h-screen items-center overflow-hidden">
        <div className="w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex min-h-[calc(100vh-4rem)] items-center px-[8vw] sm:px-[10vw] lg:px-[12vw]">
            {images.map((image, index) => {
              const distanceFromCenter = Math.abs(index - centerIndex);
              const isCenterCard = index === centerIndex;

              return (
                <div
                  key={image.src}
                  className={[
                    "group relative shrink-0 snap-center transition duration-300 ease-out",
                    index === 0 ? "ml-0" : "-ml-[12vw] sm:-ml-[10vw] lg:-ml-[8vw]",
                    isCenterCard
                      ? "z-20 w-[72vw] sm:w-[58vw] lg:w-[42vw]"
                      : distanceFromCenter === 1
                        ? "z-10 w-[54vw] sm:w-[42vw] lg:w-[30vw]"
                        : "z-0 w-[42vw] sm:w-[32vw] lg:w-[22vw]",
                    "hover:z-30",
                  ].join(" ")}
                >
                  <div className="overflow-hidden border-4 border-black bg-white shadow-[8px_8px_0px_0px_black] transition duration-300 ease-out group-hover:scale-[1.04]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading={index < 3 ? "eager" : "lazy"}
                      className="block h-auto w-full object-contain transition duration-300 ease-out group-hover:opacity-95"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
