"use client";

import FadeIn from "../FadeIn";

interface ArchetypeQuizIntroProps {
  onBegin?: () => void;
}

export default function ArchetypeQuizIntro({
  onBegin,
}: ArchetypeQuizIntroProps) {
  return (
    <section className="py-28">
      <div className="max-w-[760px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex items-center gap-3 mb-12">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--red)]">
              00 — The archetype quiz
            </span>
            <span className="w-10 h-px bg-[var(--line)]" />
          </div>

          <h1 className="font-serif font-black text-[var(--ink)] text-[clamp(34px,4.4vw,58px)] tracking-[-0.025em] leading-[1.04] mb-6">
            Who are you at work when the culture{" "}
            <span className="text-[var(--red)] italic">isn&apos;t yours</span>?
          </h1>

          <p className="font-serif italic text-[var(--red)] text-[clamp(20px,2.3vw,29px)] leading-[1.35] mb-11">
            Discover your foreigner-at-work archetype.
          </p>

          {/* The five names land as a drumbeat before any explanation. They
              don't give the scoring away — options are scrambled and never name
              an archetype. */}
          <p className="font-serif font-bold text-[var(--ink)] text-[clamp(18px,2vw,23px)] leading-[1.45] mb-7">
            The Held-Back Voice. The Decoder. The Invisible Expert. The
            Over-Preparer. The Half-Self at Work.
          </p>

          <div className="space-y-5 font-body text-[18px] text-[var(--ink-soft)] leading-[1.7]">
            <p>
              Five patterns people build when the workplace was written for
              another culture.
            </p>
            <p>
              At the end you get the one that is strongest in you right now,
              what it costs you, and three things you can start with.
            </p>
          </div>

          {/* The reference layout this borrows from also carries a "X people
              have taken this" line above the list. Deliberately left out until
              there are real completions to count. */}
          <ul className="mt-10 space-y-3">
            {[
              "20 questions",
              "About five minutes",
              "No right answers",
              "Your result on screen at the end",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3.5">
                <span
                  aria-hidden="true"
                  className="flex-none font-sans text-[15px] font-bold text-[var(--red)] leading-none"
                >
                  ✓
                </span>
                <span className="font-body text-[16px] text-[var(--ink-soft)] leading-[1.5]">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <button
              type="button"
              onClick={onBegin}
              className="inline-block bg-[var(--ink)] text-[var(--white)] px-9 py-4 font-sans text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-[var(--red)] transition-colors cursor-pointer"
            >
              Begin →
            </button>
          </div>

          <p className="mt-8 font-body italic text-[14px] text-[var(--grey)]">
            Free. I ask for your name and email before the result.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
