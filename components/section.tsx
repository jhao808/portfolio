import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  background?: "canvas" | "red" | "blue" | "yellow" | "black" | "white";
  withDivider?: boolean;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
};

const backgrounds = {
  canvas: "bg-background text-foreground",
  red: "bg-red text-white",
  blue: "bg-blue text-white",
  yellow: "bg-yellow text-foreground",
  black: "bg-foreground text-white",
  white: "bg-white text-foreground",
} as const;

export function Section({
  id,
  background = "canvas",
  withDivider = true,
  className,
  innerClassName,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        backgrounds[background],
        withDivider && "border-b-4 border-border",
        className,
      )}
    >
      <div className={cn("mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24", innerClassName)}>
        {children}
      </div>
    </section>
  );
}
