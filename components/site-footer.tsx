import { getText, siteContent } from "@/data/content";

export function SiteFooter() {
  return (
    <footer className="border-t-4 border-black bg-foreground text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow">HAO / STUDIO</p>
        <p className="max-w-2xl text-sm font-medium leading-relaxed text-white/80">
          {getText(siteContent.footer)}
        </p>
      </div>
    </footer>
  );
}
