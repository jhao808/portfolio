import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type BauhausButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "yellow" | "outline" | "ghost";
  shape?: "square" | "pill";
  href?: string;
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
};

const variantClasses = {
  primary: "bg-red text-white border-2 border-border shadow-bauhausSm hover:bg-red/90",
  secondary:
    "bg-blue text-white border-2 border-border shadow-bauhausSm hover:bg-blue/90",
  yellow: "bg-yellow text-foreground border-2 border-border shadow-bauhausSm hover:bg-yellow/90",
  outline: "bg-white text-foreground border-2 border-border shadow-bauhausSm hover:bg-muted",
  ghost: "bg-transparent text-foreground border-0 hover:bg-black/5",
} as const;

const shapeClasses = {
  square: "rounded-none",
  pill: "rounded-full",
} as const;

const baseClassName =
  "inline-flex items-center justify-center gap-3 px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black focus-visible:ring-offset-background active:translate-x-[2px] active:translate-y-[2px] active:shadow-none";

export function BauhausButton({
  children,
  variant = "primary",
  shape = "square",
  href,
  onClick,
  className,
  showArrow = false,
}: BauhausButtonProps) {
  const content = (
    <>
      {children}
      {showArrow ? <ArrowRight className="h-4 w-4 shrink-0" /> : null}
    </>
  );

  const classes = cn(baseClassName, variantClasses[variant], shapeClasses[shape], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
