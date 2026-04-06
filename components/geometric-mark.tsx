export function GeometricMark() {
  return (
    <div className="flex items-center gap-2" aria-hidden="true">
      <span className="block h-5 w-5 rounded-full border-2 border-black bg-red sm:h-6 sm:w-6 sm:border-[3px]" />
      <span className="block h-5 w-5 border-2 border-black bg-blue sm:h-6 sm:w-6 sm:border-[3px]" />
      <span
        className="block h-5 w-5 border-2 border-black bg-yellow sm:h-6 sm:w-6 sm:border-[3px]"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      />
    </div>
  );
}
