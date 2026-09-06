"use client";

import type { ArchetypeQuestionData } from "@/lib/archetype-quiz-data";

// Five options per question, so the letters run one further than the Culture
// Map quiz's A–D.
const LETTERS = ["A", "B", "C", "D", "E"];

interface ArchetypeQuizQuestionProps {
  data: ArchetypeQuestionData;
  questionNumber: number;
  totalQuestions: number;
  selectedIndex: number | null;
  onSelect: (index: number) => void;
  onNext: () => void;
  onBack: () => void;
  canGoBack: boolean;
  isLast: boolean;
}

export default function ArchetypeQuizQuestion({
  data,
  questionNumber,
  totalQuestions,
  selectedIndex,
  onSelect,
  onNext,
  onBack,
  canGoBack,
  isLast,
}: ArchetypeQuizQuestionProps) {
  const hasSelection = selectedIndex !== null;

  function handleKeyDown(e: React.KeyboardEvent<HTMLFormElement>) {
    // Enter advances once an answer is chosen — radios already handle space/arrows.
    if (e.key === "Enter" && hasSelection) {
      e.preventDefault();
      onNext();
    }
  }

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      onKeyDown={handleKeyDown}
      className="max-w-[760px] mx-auto px-6 lg:px-12"
    >
      <p className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--grey)] mb-3">
        Question {questionNumber} of {totalQuestions}
      </p>

      <fieldset className="border-0 p-0 m-0">
        <legend className="p-0">
          <span className="block font-serif font-black text-[var(--ink)] text-[clamp(26px,3.4vw,40px)] tracking-[-0.02em] leading-[1.12] mb-10">
            {data.question}
          </span>
        </legend>

        <div className="space-y-3.5">
          {/* Options render in the order they're authored. That order is
              deliberately scrambled per question so the archetype pattern isn't
              visible — the mapping lives on each option, never on its position,
              and is never shown on screen. */}
          {data.options.map((option, i) => {
            const selected = selectedIndex === i;
            return (
              <label
                key={i}
                className={`group flex items-start gap-4 p-5 border-2 cursor-pointer transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[var(--red)] has-[:focus-visible]:ring-offset-2 ${
                  selected
                    ? "border-[var(--red)] bg-[var(--red)]/[0.04]"
                    : "border-[var(--line)] hover:border-[var(--grey-soft)]"
                }`}
              >
                <input
                  type="radio"
                  name={`archetype-question-${data.id}`}
                  value={i}
                  checked={selected}
                  onChange={() => onSelect(i)}
                  className="sr-only"
                />
                <span
                  className={`flex-none flex items-center justify-center w-7 h-7 rounded-full border-2 font-sans text-[12px] font-bold transition-colors ${
                    selected
                      ? "border-[var(--red)] bg-[var(--red)] text-[var(--white)]"
                      : "border-[var(--grey-soft)] text-[var(--grey)] group-hover:border-[var(--grey)]"
                  }`}
                  aria-hidden="true"
                >
                  {LETTERS[i]}
                </span>
                <span className="font-body text-[16px] text-[var(--ink)] leading-[1.5] pt-0.5">
                  {option.text}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="flex justify-between items-center mt-12">
        <button
          type="button"
          onClick={onBack}
          disabled={!canGoBack}
          className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--ink)] hover:text-[var(--red)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:text-[var(--ink)] cursor-pointer"
        >
          ← Back
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!hasSelection}
          className="inline-block bg-[var(--ink)] text-[var(--white)] px-9 py-4 font-sans text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-[var(--red)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-[var(--ink)] cursor-pointer"
        >
          {isLast ? "Finish →" : "Next →"}
        </button>
      </div>
    </form>
  );
}
