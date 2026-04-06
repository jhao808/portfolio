import { Circle, ExternalLink, Square, Triangle } from "lucide-react";

import { BauhausButton } from "@/components/bauhaus-button";
import { BauhausCard } from "@/components/bauhaus-card";
import { Section } from "@/components/section";
import { ShapeComposition } from "@/components/shape-composition";
import { getText, siteContent } from "@/data/content";
import { cn } from "@/lib/utils";

const statShapes = [Circle, Square, Triangle];
const statAccent = ["bg-red", "bg-blue", "bg-yellow", "bg-white"];
const contactAccent = {
  red: "bg-red text-white",
  blue: "bg-blue text-white",
  yellow: "bg-yellow text-foreground",
} as const;

export default function HomePage() {
  return (
    <main>
      <Section withDivider={false} innerClassName="px-0 py-0">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="border-b-4 border-black px-4 py-12 sm:px-6 sm:py-16 lg:border-b-0 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-3xl space-y-8">
              <p className="inline-flex border-2 border-black bg-yellow px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] shadow-bauhausSm sm:text-sm">
                {getText(siteContent.hero.eyebrow)}
              </p>
              <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-8xl">
                {getText(siteContent.hero.title)}
              </h1>
              <p className="max-w-2xl text-base font-medium leading-relaxed sm:text-lg">
                {getText(siteContent.hero.description)}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <BauhausButton href={siteContent.featuredProject.href} variant="primary" showArrow>
                  {getText(siteContent.hero.primaryCta)}
                </BauhausButton>
                <BauhausButton href="#contact" variant="outline" shape="pill">
                  {getText(siteContent.hero.secondaryCta)}
                </BauhausButton>
              </div>
              <div className="grid border-4 border-black bg-white shadow-bauhausLg sm:grid-cols-2 lg:grid-cols-4">
                {[
                  "Brand Systems",
                  "Portfolio Design",
                  "Creative Frontend",
                  "Editorial Layouts",
                ].map((item, index) => {
                  const Icon = statShapes[index % statShapes.length];
                  return (
                    <div
                      key={item}
                      className={cn(
                        "flex min-h-32 flex-col justify-between gap-8 border-b-4 border-black p-5 sm:min-h-36",
                        index % 2 === 1 && "sm:border-l-4",
                        index > 1 && "lg:border-l-4 lg:border-b-0",
                        index === 1 && "lg:border-l-0",
                        index === 3 && "border-b-0",
                        index === 2 && "sm:border-b-0 lg:border-l-4",
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-14 w-14 items-center justify-center border-4 border-black",
                          statAccent[index],
                          index === 2 && "rotate-45",
                        )}
                      >
                        <Icon
                          className={cn("h-6 w-6 text-black", index === 2 && "-rotate-45")}
                          strokeWidth={2.5}
                        />
                      </span>
                      <span className="text-sm font-bold uppercase tracking-[0.2em]">
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <ShapeComposition />
        </div>
      </Section>

      <Section background="yellow">
        <div className="space-y-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <p className="inline-flex border-2 border-black bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] shadow-bauhausSm sm:text-sm">
                {getText(siteContent.featuredProject.label)}
              </p>
              <h2 className="max-w-4xl text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-5xl lg:text-6xl">
                {getText(siteContent.featuredProject.title)}
              </h2>
            </div>
            <BauhausButton href={siteContent.featuredProject.href} variant="secondary" shape="pill" showArrow>
              Read Case Study
            </BauhausButton>
          </div>
          <BauhausCard
            title={getText(siteContent.featuredProject.title)}
            description={getText(siteContent.featuredProject.description)}
            href={siteContent.featuredProject.href}
            accent="blue"
            shape="triangle"
          />
        </div>
      </Section>

      <Section id="contact" background="red">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="space-y-5">
            <p className="inline-flex border-2 border-black bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-foreground shadow-bauhausSm sm:text-sm">
              Contact
            </p>
            <h2 className="max-w-3xl text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-5xl lg:text-6xl">
              {getText(siteContent.contact.title)}
            </h2>
            <p className="max-w-2xl text-base font-medium leading-relaxed text-white/90 sm:text-lg">
              {getText(siteContent.contact.description)}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {siteContent.contact.methods.map((method, index) => (
              <a
                key={method.value}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                className={cn(
                  "group flex min-h-52 flex-col justify-between border-4 border-black p-6 shadow-bauhausLg transition duration-200 ease-out hover:-translate-y-1",
                  contactAccent[method.accent],
                )}
              >
                <div className="flex justify-between gap-4">
                  <span
                    className={cn(
                      "block h-6 w-6 border-2 border-black bg-white",
                      index === 0 && "rounded-full",
                      index === 1 && "rotate-45",
                    )}
                    style={index === 2 ? { clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" } : undefined}
                  />
                  <ExternalLink className="h-5 w-5 transition duration-200 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <div className="space-y-3">
                  <p className="text-xs font-bold uppercase tracking-[0.3em]">
                    {getText(method.label)}
                  </p>
                  <p className="text-xl font-black uppercase leading-tight sm:text-2xl">
                    {method.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Section>

      <Section background="blue" className="relative overflow-hidden" withDivider={false}>
        <ShapeComposition variant="cta" />
        <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <p className="inline-flex border-2 border-black bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-foreground shadow-bauhausSm sm:text-sm">
              Final Call
            </p>
            <h2 className="max-w-4xl text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-5xl lg:text-6xl">
              想做一张不那么温吞的个人网站，就从清晰的结构开始。
            </h2>
          </div>
          <BauhausButton href="mailto:hello@hao.studio" variant="yellow" shape="pill" showArrow>
            Start a Project
          </BauhausButton>
        </div>
      </Section>
    </main>
  );
}
