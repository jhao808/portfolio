import { ExternalLink } from "lucide-react";

import { getText, siteContent } from "@/data/content";
import { cn } from "@/lib/utils";

const contactAccent = {
  red: "bg-red text-white",
  blue: "bg-blue text-white",
  yellow: "bg-yellow text-foreground",
} as const;

export function ContactMethodGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
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
            />
            <ExternalLink className="h-5 w-5 transition duration-200 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.3em]">
              {getText(method.label)}
            </p>
            <p className="break-all text-xl font-black uppercase leading-tight sm:text-2xl">
              {method.value}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}
