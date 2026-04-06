import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";

import { BauhausButton } from "@/components/bauhaus-button";
import { Section } from "@/components/section";
import { ShapeComposition } from "@/components/shape-composition";
import { featuredProject, getText } from "@/data/content";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return [{ slug: featuredProject.slug }];
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  if (slug !== featuredProject.slug) {
    return {};
  }

  return {
    title: `${getText(featuredProject.title)} | HAO / STUDIO`,
    description: getText(featuredProject.summary),
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  if (slug !== featuredProject.slug) {
    notFound();
  }

  return (
    <main>
      <Section background="white">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div className="space-y-8">
            <p className="inline-flex border-2 border-black bg-yellow px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] shadow-bauhausSm sm:text-sm">
              {getText(featuredProject.heroLabel)}
            </p>
            <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-8xl">
              {getText(featuredProject.title)}
            </h1>
            <p className="max-w-2xl text-base font-medium leading-relaxed sm:text-lg">
              {getText(featuredProject.summary)}
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {featuredProject.meta.map((item, index) => (
                <div
                  key={getText(item.label)}
                  className="border-4 border-black bg-background p-5 shadow-bauhausMd"
                >
                  <span className="mb-6 inline-flex border-2 border-black bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.2em]">
                    {getText(item.label)}
                  </span>
                  <p className="text-lg font-black uppercase leading-tight">
                    {getText(item.value)}
                  </p>
                  <div
                    className={[
                      "mt-6 h-4 w-4 border-2 border-black",
                      index === 0 ? "rounded-full bg-red" : "",
                      index === 1 ? "rotate-45 bg-blue" : "",
                      index === 2 ? "bg-yellow" : "",
                    ].join(" ")}
                    style={
                      index === 2
                        ? { clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }
                        : undefined
                    }
                  />
                </div>
              ))}
            </div>
          </div>
          <ShapeComposition variant="detail" />
        </div>
      </Section>

      <Section background="yellow">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="inline-flex border-2 border-black bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] shadow-bauhausSm sm:text-sm">
              Outcomes
            </p>
            <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-5xl">
              这个项目解决了什么
            </h2>
          </div>
          <div className="grid gap-4">
            {featuredProject.outcomes.map((outcome) => (
              <div
                key={getText(outcome)}
                className="flex items-start gap-4 border-4 border-black bg-white p-5 shadow-bauhausMd"
              >
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-black bg-red text-white">
                  <Check className="h-5 w-5" strokeWidth={3} />
                </span>
                <p className="text-base font-medium leading-relaxed sm:text-lg">
                  {getText(outcome)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section background="blue">
        <div className="grid gap-6">
          {featuredProject.sections.map((section, index) => (
            <article
              key={getText(section.title)}
              className="grid border-4 border-black bg-white text-foreground shadow-bauhausLg lg:grid-cols-[0.35fr_1fr]"
            >
              <div className="border-b-4 border-black bg-red p-6 text-white lg:border-b-0 lg:border-r-4">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-3xl font-black uppercase leading-[0.9] tracking-tight">
                    {getText(section.title)}
                  </p>
                  <span
                    className={[
                      "h-6 w-6 border-2 border-black bg-yellow",
                      index % 3 === 0 ? "rounded-full" : "",
                      index % 3 === 1 ? "rotate-45" : "",
                    ].join(" ")}
                    style={
                      index % 3 === 2
                        ? { clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }
                        : undefined
                    }
                  />
                </div>
              </div>
              <div className="space-y-5 p-6 sm:p-8">
                {section.body.map((paragraph) => (
                  <p
                    key={getText(paragraph)}
                    className="text-base font-medium leading-relaxed sm:text-lg"
                  >
                    {getText(paragraph)}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section background="red" withDivider={false}>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <p className="inline-flex border-2 border-black bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-foreground shadow-bauhausSm sm:text-sm">
              Next Step
            </p>
            <h2 className="max-w-4xl text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-5xl lg:text-6xl">
              如果你也想把案例页做得更像品牌宣言，而不是普通说明书，我们可以继续往下推进。
            </h2>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <BauhausButton href={featuredProject.cta.href} variant="yellow" shape="pill">
              <ArrowLeft className="h-4 w-4" />
              {getText(featuredProject.cta.label)}
            </BauhausButton>
            <BauhausButton href="/contact" variant="outline" showArrow>
              Contact Studio
            </BauhausButton>
          </div>
        </div>
        <a
          href={featuredProject.cta.href}
          className="mt-10 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-white/80 transition hover:text-white"
        >
          Scroll back into the grid
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </Section>
    </main>
  );
}
