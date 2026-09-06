"use client";

import FadeIn from "../FadeIn";
import {
  LEARN_MORE_URL,
  OUTRO_LINE,
  archetypeResults,
  type ArchetypeCode,
} from "@/lib/archetype-quiz-data";

interface ArchetypeQuizResultProps {
  archetype: ArchetypeCode;
  onRetake: () => void;
}

export default function ArchetypeQuizResult({
  archetype,
  onRetake,
}: ArchetypeQuizResultProps) {
  const result = archetypeResults[archetype];

  // "The Held-Back Voice" reads better with the article set small above the
  // name, the way the site handles its other headlines.
  const [article, ...rest] = result.name.split(" ");
  const name = rest.join(" ");

  return (
    <section className="py-28">
      <div className="max-w-[760px] mx-auto px-6 lg:px-12">
        {/* The result itself */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-10">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--red)]">
              01 — Your pattern
            </span>
            <span className="w-10 h-px bg-[var(--line)]" />
          </div>

          <h1 className="font-serif font-black text-[var(--ink)] text-[clamp(40px,5.2vw,68px)] tracking-[-0.025em] leading-[0.98] mb-10">
            <span className="block font-serif italic font-normal text-[var(--grey)] text-[clamp(20px,2.2vw,28px)] tracking-normal mb-1">
              {article}
            </span>
            <span className="text-[var(--red)]">{name}</span>
          </h1>

          <div className="space-y-5 font-body text-[18px] text-[var(--ink-soft)] leading-[1.75]">
            <p>{result.opening}</p>
            <p>{result.reframe}</p>
          </div>
        </FadeIn>

        {/* The move */}
        <FadeIn delay={0.1}>
          <div className="mt-20 border-t-2 border-[var(--ink)] pt-12">
            <div className="flex items-center gap-3 mb-10">
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--red)]">
                02 — The move
              </span>
              <span className="w-10 h-px bg-[var(--line)]" />
            </div>

            <p className="bg-[var(--paper)] border-l-2 border-[var(--red)] py-9 px-7 sm:px-9 font-body text-[17px] text-[var(--ink)] leading-[1.7]">
              {result.move}
            </p>

            {/* The line that carries the whole result. Kept small and tucked
                under the move so it reads as the conclusion of it, not as a
                second headline competing with the archetype name. */}
            <p className="mt-9 font-serif font-bold italic text-[var(--ink)] text-[clamp(19px,2.1vw,25px)] leading-[1.4] max-w-[560px]">
              {result.line}
            </p>
          </div>
        </FadeIn>

        {/* Outro — identical on all five results */}
        <FadeIn delay={0.1}>
          <div className="mt-24 border-t-2 border-[var(--ink)] pt-12">
            {/* Same size, face and colour as the opening and reframe above, so
                it reads as a closing note rather than a second pull quote. */}
            <p className="font-body text-[18px] text-[var(--ink-soft)] leading-[1.7] max-w-[640px]">
              {OUTRO_LINE}
            </p>

            <div className="mt-12">
              <a
                href={LEARN_MORE_URL}
                className="inline-block bg-[var(--ink)] text-[var(--white)] px-9 py-4 font-sans text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-[var(--red)] transition-colors"
              >
                Read more at Learn the Rules →
              </a>
            </div>

            <div className="mt-10">
              <button
                type="button"
                onClick={onRetake}
                className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--ink)] hover:text-[var(--red)] transition-colors cursor-pointer"
              >
                ↺ Retake the quiz
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
