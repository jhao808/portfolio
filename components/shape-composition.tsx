import { cn } from "@/lib/utils";

type ShapeCompositionProps = {
  variant?: "hero" | "detail" | "cta";
  className?: string;
};

export function ShapeComposition({
  variant = "hero",
  className,
}: ShapeCompositionProps) {
  if (variant === "detail") {
    return (
      <div className={cn("relative h-[360px] w-full overflow-hidden border-4 border-black bg-white shadow-bauhausLg", className)}>
        <div className="absolute left-8 top-8 h-24 w-24 rounded-full border-4 border-black bg-yellow" />
        <div className="absolute right-10 top-12 h-28 w-28 rotate-45 border-4 border-black bg-red" />
        <div className="absolute bottom-10 left-1/2 h-32 w-32 -translate-x-1/2 border-4 border-black bg-blue" />
        <div className="absolute bottom-8 right-8 h-24 w-24 rounded-full border-4 border-black bg-background" />
        <div className="absolute left-1/2 top-1/2 h-1 w-40 -translate-x-1/2 -translate-y-1/2 -rotate-12 bg-black" />
        <div className="absolute left-[38%] top-[42%] h-5 w-5 rounded-full bg-black" />
        <div className="absolute right-[34%] top-[38%] h-6 w-6 bg-black" />
      </div>
    );
  }

  if (variant === "cta") {
    return (
      <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
        <div className="absolute -left-14 -top-14 h-40 w-40 rounded-full border-4 border-black/80 bg-red/50" />
        <div className="absolute -right-16 bottom-8 h-44 w-44 rotate-45 border-4 border-black/80 bg-blue/50" />
        <div
          className="absolute bottom-12 left-1/3 h-24 w-24 border-4 border-black/80 bg-white/60"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        />
      </div>
    );
  }

  return (
    <div className={cn("relative h-[320px] w-full overflow-hidden border-b-4 border-l-4 border-black bg-blue sm:h-[420px] lg:border-b-0 lg:border-l-4", className)}>
      <div className="absolute left-8 top-12 h-24 w-24 rounded-full border-4 border-black bg-yellow sm:h-32 sm:w-32" />
      <div className="absolute right-10 top-16 h-24 w-24 rotate-45 border-4 border-black bg-red sm:h-36 sm:w-36" />
      <div className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center border-4 border-black bg-background sm:h-56 sm:w-56">
        <div
          className="h-20 w-20 border-4 border-black bg-yellow sm:h-28 sm:w-28"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        />
      </div>
      <div className="absolute bottom-10 left-10 h-16 w-16 border-4 border-black bg-white" />
      <div className="absolute bottom-12 right-12 h-12 w-12 rounded-full border-4 border-black bg-red" />
    </div>
  );
}
