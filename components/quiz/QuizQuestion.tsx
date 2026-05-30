"use client";

import type { QuizQuestionData } from "@/lib/quiz-data";

const LETTERS = ["A", "B", "C", "D"];

interface QuizQuestionProps {
  data: QuizQuestionData;
  questionNumber: number;
  totalQuestions: number;
  selectedIndex: number | null;
  onSelect: (index: number) => void;
  onNext: () => void;
  onBack: () => void;
  canGoBack: boolean;
}

export default function QuizQuestion({
  data,
  questionNumber,
  totalQuestions,
  selectedIndex,
  onSelect,
  onNext,
  onBack,
  canGoBack,
}: QuizQuestionProps) {
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
      <p className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[#707070] mb-3">
        Question {questionNumber} of {totalQuestions}
      </p>

      <fieldset className="border-0 p-0 m-0">
        <legend className="p-0">
          <span className="block font-serif italic text-[#d4302a] text-[15px] leading-[1.4] mb-5">
            {data.dimensionLabel}
          </span>
          <span className="block font-serif font-black text-[#1a1a1a] text-[clamp(26px,3.4vw,40px)] tracking-[-0.02em] leading-[1.12] mb-10">
            {data.question}
          </span>
        </legend>

        <div className="space-y-3.5">
          {data.options.map((option, i) => {
            const selected = selectedIndex === i;
            return (
              <label
                key={i}
                className={`group flex items-start gap-4 p-5 border-2 cursor-pointer transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[#d4302a] has-[:focus-visible]:ring-offset-2 ${
                  selected
                    ? "border-[#d4302a] bg-[#d4302a]/[0.04]"
                    : "border-[#e0ddd5] hover:border-[#a8a8a8]"
                }`}
              >
                <input
                  type="radio"
                  name={`question-${data.id}`}
                  value={i}
                  checked={selected}
                  onChange={() => onSelect(i)}
                  className="sr-only"
                />
                <span
                  className={`flex-none flex items-center justify-center w-7 h-7 rounded-full border-2 font-sans text-[12px] font-bold transition-colors ${
                    selected
                      ? "border-[#d4302a] bg-[#d4302a] text-white"
                      : "border-[#a8a8a8] text-[#707070] group-hover:border-[#707070]"
                  }`}
                  aria-hidden="true"
                >
                  {LETTERS[i]}
                </span>
                <span className="font-body text-[16px] text-[#1a1a1a] leading-[1.5] pt-0.5">
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
          className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[#1a1a1a] hover:text-[#d4302a] transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:text-[#1a1a1a] cursor-pointer"
        >
          ← Back
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!hasSelection}
          className="inline-block bg-[#1a1a1a] text-white px-9 py-4 font-sans text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-[#d4302a] transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-[#1a1a1a] cursor-pointer"
        >
          Next →
        </button>
      </div>
    </form>
  );
}
