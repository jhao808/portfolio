import type { Metadata } from "next";

import { Section } from "@/components/section";
import { getGalleryImages } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Gallery | HAO / STUDIO",
  description: "A responsive Bauhaus-style gallery sourced from the public photos folder.",
};

export default async function GalleryPage() {
  const images = await getGalleryImages();

  return (
    <main>
      <Section background="white">
        <div className="space-y-6">
          <p className="inline-flex border-2 border-black bg-yellow px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] shadow-bauhausSm sm:text-sm">
            Gallery
          </p>
          <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-8xl">
            一组直接从照片文件夹生成的图像网格
          </h1>
          <p className="max-w-3xl text-base font-medium leading-relaxed sm:text-lg">
            这里的图片会从 <code>/public/photos</code> 自动读取。后续只要继续往文件夹里添加照片，画廊页面就会自动扩展。
          </p>
        </div>
      </Section>

      <Section background="blue" withDivider={false}>
        {images.length === 0 ? (
          <div className="border-4 border-black bg-white p-8 text-foreground shadow-bauhausLg">
            <p className="text-lg font-bold uppercase tracking-[0.2em]">No Photos Yet</p>
            <p className="mt-4 text-base font-medium leading-relaxed">
              Add image files to <code>/public/photos</code> and they will appear here automatically.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {images.map((image, index) => (
              <figure
                key={image.src}
                className="group overflow-hidden border-4 border-black bg-white shadow-bauhausLg transition duration-200 ease-out hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="block h-auto w-full transition duration-300 ease-out group-hover:scale-[1.03] group-hover:opacity-90"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                </div>
                <figcaption className="flex items-center justify-between gap-4 border-t-4 border-black px-4 py-3 text-xs font-bold uppercase tracking-[0.2em] text-foreground sm:px-5">
                  <span className="truncate">{image.alt}</span>
                  <span
                    className={[
                      "h-4 w-4 shrink-0 border-2 border-black bg-yellow",
                      index % 3 === 0 ? "rounded-full" : "",
                      index % 3 === 1 ? "rotate-45 bg-red" : "",
                    ].join(" ")}
                    style={
                      index % 3 === 2
                        ? { clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", backgroundColor: "#1040C0" }
                        : undefined
                    }
                  />
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </Section>
    </main>
  );
}
