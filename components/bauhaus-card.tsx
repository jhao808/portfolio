import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type BauhausCardProps = {
  title: string;
  description: string;
  accent?: "red" | "blue" | "yellow";
  shape?: "circle" | "square" | "triangle";
  href?: string;
  className?: string;
  footer?: ReactNode;
};

const accentClasses = {
  red: "bg-red",
  blue: "bg-blue",
  yellow: "bg-yellow",
} as const;

function CornerShape({
  accent,
  shape,
}: {
  accent: "red" | "blue" | "yellow";
  shape: "circle" | "square" | "triangle";
}) {
  if (shape === "triangle") {
    return (
      <span
        className={cn("block h-5 w-5 border-2 border-black", accentClasses[accent])}
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      />
    );
  }

  return (
    <span
      className={cn(
        "block h-5 w-5 border-2 border-black",
        accentClasses[accent],
        shape === "circle" ? "rounded-full" : "rounded-none",
      )}
    />
  );
}

export function BauhausCard({
  title,
  description,
  accent = "red",
  shape = "circle",
  href,
  className,
  footer,
}: BauhausCardProps) {
  const body = (
    <article
      className={cn(
        "group flex h-full flex-col justify-between border-4 border-black bg-white p-6 shadow-bauhausLg transition duration-200 ease-out hover:-translate-y-1",
        className,
      )}
    >
      <div className="mb-8 flex items-start justify-between gap-4">
        <div className="space-y-4">
          <h3 className="max-w-xl text-3xl font-black uppercase leading-[0.9] tracking-tight sm:text-4xl">
            {title}
          </h3>
          <p className="max-w-2xl text-base font-medium leading-relaxed text-foreground/80 sm:text-lg">
            {description}
          </p>
        </div>
        <CornerShape accent={accent} shape={shape} />
      </div>
      <div className="mt-auto flex items-center justify-between gap-4 text-sm font-bold uppercase tracking-[0.2em]">
        <span>Open Case</span>
        <ArrowRight className="h-5 w-5 transition duration-200 ease-out group-hover:translate-x-1" />
      </div>
      {footer}
    </article>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {body}
      </Link>
    );
  }

  return body;
}
