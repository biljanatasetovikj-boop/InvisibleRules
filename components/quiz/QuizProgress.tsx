"use client";

interface QuizProgressProps {
  current: number;
  total: number;
}

export default function QuizProgress({ current, total }: QuizProgressProps) {
  const percent = Math.min(100, Math.max(0, (current / total) * 100));

  return (
    <div
      className="h-px w-full bg-[#e0ddd5]"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={total}
      aria-valuenow={current}
      aria-label={`Question ${current} of ${total}`}
    >
      <div
        className="h-px bg-[#d4302a] transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
