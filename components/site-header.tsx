import Link from "next/link";
import { Menu } from "lucide-react";

import { getText, siteContent } from "@/data/content";
import { BauhausButton } from "@/components/bauhaus-button";
import { GeometricMark } from "@/components/geometric-mark";

export function SiteHeader() {
  return (
    <header className="border-b-4 border-black bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-4">
          <GeometricMark />
          <span className="text-sm font-black uppercase tracking-[0.3em] sm:text-base">
            {getText(siteContent.brand)}
          </span>
        </Link>

        <nav className="hidden items-center gap-3 md:flex" aria-label="Primary navigation">
          {siteContent.nav.map((item) => (
            <BauhausButton
              key={item.href}
              href={item.href}
              variant="ghost"
              shape="pill"
              className="px-4 py-2 text-xs sm:text-sm"
            >
              {getText(item.label)}
            </BauhausButton>
          ))}
        </nav>

        <details className="relative md:hidden">
          <summary className="flex list-none cursor-pointer items-center gap-2 border-2 border-black bg-white px-4 py-3 font-bold uppercase tracking-[0.2em] shadow-bauhausSm">
            <Menu className="h-4 w-4" />
            Menu
          </summary>
          <div className="absolute right-0 top-[calc(100%+8px)] z-20 flex min-w-48 flex-col border-4 border-black bg-white p-2 shadow-bauhausLg">
            {siteContent.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-3 text-sm font-bold uppercase tracking-[0.2em] transition hover:bg-muted"
              >
                {getText(item.label)}
              </Link>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
