// Small visual pieces borrowed from the zine: the red step circles, the
// sparkles, the wavy underline, the tilted red sticker and the page counter.

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-[1160px] mx-auto px-5 sm:px-6 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}

// The zine's top row: a red label on the left, a page counter on the right.
export function PageTop({
  label,
  right,
  inverted = false,
}: {
  label: string;
  right: string;
  inverted?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between gap-6 mb-8 sm:mb-10">
      <span
        className={`font-sans text-[12px] font-bold uppercase tracking-[0.2em] leading-[1.6] ${
          inverted ? "text-[#ff8a80]" : "text-[#a8221d]"
        }`}
      >
        {label}
      </span>
      <span
        aria-hidden="true"
        className={`shrink-0 font-sans text-[12px] font-bold uppercase tracking-[0.2em] ${
          inverted ? "text-white/70" : "text-[#a8221d]"
        }`}
      >
        {right}
      </span>
    </div>
  );
}

export function Sparkle({
  className = "",
  outline = false,
}: {
  className?: string;
  outline?: boolean;
}) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M12 1C12.8 8 16 11.2 23 12C16 12.8 12.8 16 12 23C11.2 16 8 12.8 1 12C8 11.2 11.2 8 12 1Z"
        fill={outline ? "none" : "currentColor"}
        stroke="currentColor"
        strokeWidth={outline ? 1.4 : 0}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Wave({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 20"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M3 15C55 4 105 3 160 10S255 18 297 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function StepDot({
  n,
  className = "",
}: {
  n: number | string;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-[#d4302a] text-white font-serif font-black italic ${className}`}
    >
      {n}
    </span>
  );
}

// Red tilted tag with handwriting, like "my first cultural awareness zine".
export function Sticker({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-block -rotate-2 rounded-md bg-[#d4302a] px-4 py-1.5 font-hand text-[22px] leading-none text-white shadow-[0_2px_0_rgba(0,0,0,0.12)] ${className}`}
    >
      {children}
    </span>
  );
}

// A photo in a white frame with a strip of tape, tilted slightly.
export function TapedPhoto({
  children,
  tilt = "rotate-2",
  className = "",
}: {
  children: React.ReactNode;
  tilt?: string;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div
        className={`${tilt} bg-white p-3 rounded-[6px] border-2 border-[#1a1a1a] shadow-[6px_6px_0_#1a1a1a]`}
      >
        {children}
      </div>
      <span
        aria-hidden="true"
        className="absolute -top-3 left-1/2 -translate-x-1/2 -rotate-3 h-7 w-28 bg-[#d4302a]/35"
      />
    </div>
  );
}

export const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[#d4302a] text-white px-6 sm:px-8 py-4 font-sans text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.1em] sm:tracking-[0.14em] text-center border-2 border-[#d4302a] hover:bg-[#1a1a1a] hover:border-[#1a1a1a] transition-colors disabled:opacity-60 cursor-pointer";

export const btnDark =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[#1a1a1a] text-white px-6 sm:px-8 py-4 font-sans text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.1em] sm:tracking-[0.14em] text-center border-2 border-[#1a1a1a] hover:bg-[#d4302a] hover:border-[#d4302a] transition-colors disabled:opacity-60 cursor-pointer";
