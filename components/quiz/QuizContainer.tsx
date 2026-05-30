"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import QuizIntro from "./QuizIntro";
import QuizQuestion from "./QuizQuestion";
import QuizProgress from "./QuizProgress";
import QuizResults from "./QuizResults";
import { questions } from "@/lib/quiz-data";

type Phase = "intro" | "quiz" | "results";

export default function QuizContainer() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(() =>
    questions.map(() => null)
  );

  const total = questions.length;

  function handleBegin() {
    setCurrentIndex(0);
    setPhase("quiz");
  }

  function handleSelect(optionIndex: number) {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = optionIndex;
      return next;
    });
  }

  function handleNext() {
    if (currentIndex < total - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setPhase("results");
    }
  }

  function handleBack() {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  }

  function handleRetake() {
    setAnswers(questions.map(() => null));
    setCurrentIndex(0);
    setPhase("intro");
  }

  // Scoring — one score per dimension, in question order.
  const dimensionScores = questions.map((q, i) => {
    const selected = answers[i];
    return {
      dimension: q.dimension,
      score: selected === null ? 0 : q.options[selected].score,
    };
  });
  const totalScore = dimensionScores.reduce((sum, d) => sum + d.score, 0);
  const topThreeDimensions = [...dimensionScores]
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((d) => d.dimension);

  const screenKey = phase === "quiz" ? `quiz-${currentIndex}` : phase;

  return (
    <main className="min-h-screen">
      {phase === "quiz" && (
        <div className="max-w-[760px] mx-auto px-6 lg:px-12 pt-16">
          <QuizProgress current={currentIndex + 1} total={total} />
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={screenKey}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {phase === "intro" && <QuizIntro onBegin={handleBegin} />}

          {phase === "quiz" && (
            <div className="pt-10 pb-28">
              <QuizQuestion
                data={questions[currentIndex]}
                questionNumber={currentIndex + 1}
                totalQuestions={total}
                selectedIndex={answers[currentIndex]}
                onSelect={handleSelect}
                onNext={handleNext}
                onBack={handleBack}
                canGoBack={currentIndex > 0}
              />
            </div>
          )}

          {phase === "results" && (
            <QuizResults
              totalScore={totalScore}
              dimensionScores={dimensionScores}
              topThreeDimensions={topThreeDimensions}
              onRetake={handleRetake}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
