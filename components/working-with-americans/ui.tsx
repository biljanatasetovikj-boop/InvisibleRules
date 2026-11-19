// Shared pieces for /working-with-americans, styled after worksinprogress.co:
// warm paper, black ink, one red and one blue, an editorial serif for
// reading and a plain sans for labels and buttons.

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}

// Section opener, like a magazine contents line: a black rule, the section
// number in blue and a short label.
export function SectionHead({
  no,
  label,
  inverted = false,
}: {
  no: string;
  label: string;
  inverted?: boolean;
}) {
  return (
    <div
      className={`flex items-baseline gap-4 border-t-2 pt-4 mb-10 sm:mb-12 ${
        inverted ? "border-wip-paper" : "border-wip-ink"
      }`}
    >
      <span
        className={`font-ui text-[15px] font-bold tabular-nums ${
          inverted ? "text-wip-paper" : "text-wip-blue"
        }`}
      >
        {no}
      </span>
      <span
        className={`font-ui text-[13px] font-semibold uppercase tracking-[0.14em] ${
          inverted ? "text-wip-paper/85" : "text-wip-ink"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export const h2Cls =
  "font-editor font-medium text-wip-ink text-[clamp(36px,5.2vw,64px)] leading-[1.02] tracking-[-0.02em]";

export const leadCls =
  "font-editor text-[20px] sm:text-[22px] leading-[1.5] text-wip-ink/80";

// A strip of tape, for the collage frames.
export function Tape({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute h-6 w-20 bg-wip-paper/80 border border-wip-ink/15 shadow-[0_1px_0_rgba(0,0,0,0.08)] ${className}`}
    />
  );
}

// A photo in a thin black frame, with a flat colour block offset behind it.
export function FramedPhoto({
  children,
  block = "bg-wip-blue",
  className = "",
}: {
  children: React.ReactNode;
  block?: string;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div aria-hidden="true" className={`absolute inset-0 translate-x-4 translate-y-4 ${block}`} />
      <div className="relative border-2 border-wip-ink bg-wip-paper p-2.5">{children}</div>
    </div>
  );
}

export const btnPrimary =
  "inline-flex items-center justify-center gap-2 min-h-[52px] rounded-full bg-wip-red text-white px-8 py-3.5 font-ui text-[16px] font-semibold text-center border-2 border-wip-red hover:bg-wip-ink hover:border-wip-ink transition-colors disabled:opacity-60 cursor-pointer";

export const linkCls =
  "inline-flex items-center min-h-[44px] underline decoration-2 underline-offset-[5px] hover:decoration-wip-red transition-colors";
