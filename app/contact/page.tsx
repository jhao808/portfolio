import type { Metadata } from "next";

import { BauhausButton } from "@/components/bauhaus-button";
import { ContactMethodGrid } from "@/components/contact-method-grid";
import { Section } from "@/components/section";
import { ShapeComposition } from "@/components/shape-composition";
import { getText, siteContent } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact | HAO / STUDIO",
  description: "Contact HAO / STUDIO at jhao6881@gmail.com.",
};

export default function ContactPage() {
  return (
    <main>
      <Section background="white">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="space-y-8">
            <p className="inline-flex border-2 border-black bg-yellow px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] shadow-bauhausSm sm:text-sm">
              Contact
            </p>
            <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-8xl">
              {getText(siteContent.contact.title)}
            </h1>
            <p className="max-w-2xl text-base font-medium leading-relaxed sm:text-lg">
              {getText(siteContent.contact.description)}
            </p>
            <div className="border-4 border-black bg-red p-6 text-white shadow-bauhausLg sm:p-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-yellow">
                Primary Email
              </p>
              <a
                href="mailto:jhao6881@gmail.com"
                className="inline-flex break-all text-3xl font-black uppercase leading-[0.95] tracking-tight underline decoration-4 underline-offset-4 transition hover:text-yellow sm:text-5xl"
              >
                jhao6881@gmail.com
              </a>
            </div>
            <BauhausButton href="mailto:jhao6881@gmail.com" variant="secondary" shape="pill" showArrow>
              Send Email
            </BauhausButton>
          </div>
          <ShapeComposition variant="detail" />
        </div>
      </Section>

      <Section background="yellow" withDivider={false}>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="space-y-4">
            <p className="inline-flex border-2 border-black bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] shadow-bauhausSm sm:text-sm">
              Reach Out
            </p>
            <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-5xl">
              邮件最直接，也欢迎你从 GitHub 了解我最近的工作。
            </h2>
          </div>
          <ContactMethodGrid />
        </div>
      </Section>
    </main>
  );
}
