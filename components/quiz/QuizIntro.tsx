"use client";

import FadeIn from "../FadeIn";

interface QuizIntroProps {
  onBegin?: () => void;
}

export default function QuizIntro({ onBegin }: QuizIntroProps) {
  return (
    <section className="py-28">
      <div className="max-w-[760px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex items-center gap-3 mb-12">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[#d4302a]">
              00 — The diagnostic
            </span>
            <span className="w-10 h-px bg-[#e0ddd5]" />
          </div>

          <h1 className="font-serif font-black text-[#1a1a1a] text-[clamp(42px,5.5vw,72px)] tracking-[-0.025em] leading-[0.98] mb-10">
            Are the unwritten rules{" "}
            <span className="text-[#d4302a] italic">holding you back</span>?
          </h1>

          <div className="space-y-5 font-body text-[18px] text-[#3a3a3a] leading-[1.7]">
            <p>
              A short reflection for professionals from non-Western backgrounds
              working in global organizations. Nine questions, about three
              minutes. No pass or fail — just a clearer picture of where the
              friction sits.
            </p>
            <p className="text-[16px] text-[#707070]">
              This quiz is built on Erin Meyer&apos;s research in{" "}
              <em className="italic">The Culture Map</em> — the framework most
              global organizations use to understand how culture shapes work.
              The questions translate her eight dimensions into the small,
              specific moments that actually happen at your desk.
            </p>
          </div>

          <div className="mt-12">
            <button
              type="button"
              onClick={onBegin}
              className="inline-block bg-[#1a1a1a] text-white px-9 py-4 font-sans text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-[#d4302a] transition-colors cursor-pointer"
            >
              Begin →
            </button>
          </div>

          <p className="mt-8 font-body italic text-[14px] text-[#707070]">
            9 questions · ~3 minutes · Your results sent straight to your inbox
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
