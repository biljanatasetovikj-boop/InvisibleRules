"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import QuizProgress from "../quiz/QuizProgress";
import ArchetypeQuizIntro from "./ArchetypeQuizIntro";
import ArchetypeQuizQuestion from "./ArchetypeQuizQuestion";
import ArchetypeQuizEmailGate, {
  type ArchetypeQuizLead,
} from "./ArchetypeQuizEmailGate";
import ArchetypeQuizResult from "./ArchetypeQuizResult";
import {
  answerCodes,
  archetypeResults,
  questions,
  tallyScores,
  winningArchetype,
} from "@/lib/archetype-quiz-data";

// ─────────────────────────────────────────────────────────────────────────────
// PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL HERE.
// Deploy the Apps Script as a Web App with access set to "Anyone", then paste
// the /exec URL between the quotes. Leaving it empty simply skips the POST —
// the quiz still works end to end.
export const SHEET_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbx5qfSRTe6gpoNDD2SVXhQr3ZTOMItd4U2eZlA4VNflEqTm4FJCe5O-UjDCJf9e3dP4/exec";
// ─────────────────────────────────────────────────────────────────────────────

type Phase = "intro" | "quiz" | "email" | "result";

export default function ArchetypeQuizContainer() {
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
      setPhase("email");
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

  // Scoring — one point per answer to the archetype that option belongs to.
  // Highest total wins; ties break by the fixed archetype order.
  const scores = tallyScores(answers);
  const archetype = winningArchetype(scores);

  // Records the response to the Google Sheet and shows the result immediately.
  // The POST is deliberately not awaited: a slow or failing webhook must never
  // stand between someone and the result they just earned. Errors go to the
  // console only.
  function handleUnlock(lead: ArchetypeQuizLead) {
    // Reveal first, so the result screen never waits on the network.
    setPhase("result");

    if (!SHEET_WEBHOOK_URL) {
      console.warn(
        "Archetype quiz: SHEET_WEBHOOK_URL is empty — response not recorded."
      );
      return;
    }

    // q1…q20, each holding the archetype code that answer mapped to.
    const codes = answerCodes(answers);
    const answerFields: Record<string, string> = {};
    codes.forEach((code, i) => {
      answerFields[`q${i + 1}`] = code ?? "";
    });

    // `scores` and `answers` are nested, not flattened onto the top level —
    // that's the shape the Apps Script reads. Flat keys silently produce a row
    // with the name and result filled in but every score at 0 and every answer
    // blank, which looks like it worked.
    const payload = {
      timestamp: new Date().toISOString(),
      name: `${lead.firstName} ${lead.lastName}`,
      email: lead.email,
      result: archetypeResults[archetype].name,
      result_code: archetype,
      scores: {
        HBV: scores.HBV,
        DEC: scores.DEC,
        IEX: scores.IEX,
        OVP: scores.OVP,
        HSW: scores.HSW,
      },
      answers: answerFields,
    };

    // Sent as text/plain rather than application/json on purpose. A JSON
    // content type makes the browser fire a CORS preflight, which Apps Script
    // web apps don't answer — the request would fail before it ever arrived.
    // text/plain keeps it a "simple" request that goes straight through; the
    // body is still JSON, so the script reads it with
    // JSON.parse(e.postData.contents).
    // keepalive lets the request finish even as the screen changes.
    void fetch(SHEET_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch((err) => {
      // A warning, not an error: the person already has their result, and
      // nothing about the page is broken. Losing one row is the whole cost.
      // "Failed to fetch" here almost always means the Apps Script deployment
      // isn't public — in Apps Script, Deploy → Manage deployments → edit the
      // live deployment → Who has access → Anyone.
      console.warn(
        "Archetype quiz: response not recorded to the Sheet.",
        "Check that the Apps Script deployment's access is set to \"Anyone\".",
        err
      );
    });
  }

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
          {phase === "intro" && <ArchetypeQuizIntro onBegin={handleBegin} />}

          {phase === "quiz" && (
            <div className="pt-10 pb-28">
              <ArchetypeQuizQuestion
                data={questions[currentIndex]}
                questionNumber={currentIndex + 1}
                totalQuestions={total}
                selectedIndex={answers[currentIndex]}
                onSelect={handleSelect}
                onNext={handleNext}
                onBack={handleBack}
                canGoBack={currentIndex > 0}
                isLast={currentIndex === total - 1}
              />
            </div>
          )}

          {phase === "email" && (
            <ArchetypeQuizEmailGate onUnlock={handleUnlock} />
          )}

          {phase === "result" && (
            <ArchetypeQuizResult
              archetype={archetype}
              onRetake={handleRetake}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
