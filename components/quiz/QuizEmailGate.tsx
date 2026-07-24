"use client";

import { useState } from "react";
import FadeIn from "../FadeIn";

interface QuizLead {
  firstName: string;
  lastName: string;
  email: string;
}

interface QuizEmailGateProps {
  onUnlock: (lead: QuizLead) => Promise<void>;
}

// Simple, forgiving email shape check — enough to catch typos, not so strict
// it rejects real addresses.
function looksLikeEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export default function QuizEmailGate({ onUnlock }: QuizEmailGateProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function fail(message: string) {
    setErrorMsg(message);
    setStatus("error");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;

    if (!firstName.trim()) return fail("Please add your first name.");
    if (!lastName.trim()) return fail("Please add your surname.");
    if (!looksLikeEmail(email)) {
      return fail("That doesn't look like a complete email — mind checking it?");
    }

    setStatus("sending");
    try {
      await onUnlock({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
      });
      // On success the parent advances to results; this screen unmounts.
    } catch {
      fail("Something went wrong on our end. Please try again.");
    }
  }

  const inputClass =
    "w-full bg-white border-2 border-[#1a1a1a] px-5 py-4 font-body text-[17px] text-[#1a1a1a] placeholder:text-[#a0a0a0] focus:outline-none focus:border-[#d4302a] transition-colors disabled:opacity-60";

  return (
    <section className="py-28">
      <div className="max-w-[760px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex items-center gap-3 mb-12">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[#d4302a]">
              Your results are ready
            </span>
            <span className="w-10 h-px bg-[#e0ddd5]" />
          </div>

          <h1 className="font-serif font-black text-[#1a1a1a] text-[clamp(34px,4.5vw,60px)] tracking-[-0.025em] leading-[1.02] mb-8">
            Where should we send your{" "}
            <span className="text-[#d4302a] italic">friction map</span>?
          </h1>

          <div className="space-y-5 font-body text-[18px] text-[#3a3a3a] leading-[1.7] max-w-[600px]">
            <p>Almost there. Where should I send your results?</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-12 max-w-[520px] space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="quiz-first-name" className="sr-only">
                  First name
                </label>
                <input
                  id="quiz-first-name"
                  type="text"
                  autoComplete="given-name"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  disabled={status === "sending"}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="quiz-last-name" className="sr-only">
                  Surname
                </label>
                <input
                  id="quiz-last-name"
                  type="text"
                  autoComplete="family-name"
                  placeholder="Surname"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  disabled={status === "sending"}
                  className={inputClass}
                />
              </div>
            </div>

            <label htmlFor="quiz-email" className="sr-only">
              Email address
            </label>
            <input
              id="quiz-email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              disabled={status === "sending"}
              className={inputClass}
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full sm:w-auto bg-[#1a1a1a] text-white px-8 py-4 font-sans text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-[#d4302a] transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-default whitespace-nowrap"
            >
              {status === "sending" ? "One moment…" : "Show my results →"}
            </button>

            {status === "error" && (
              <p
                role="alert"
                className="font-body text-[15px] text-[#d4302a] leading-[1.5]"
              >
                {errorMsg}
              </p>
            )}
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
