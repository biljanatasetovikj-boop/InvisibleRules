"use client";

import { useState } from "react";
import FadeIn from "../FadeIn";

interface QuizEmailGateProps {
  onUnlock: (email: string) => Promise<void>;
}

// Simple, forgiving email shape check — enough to catch typos, not so strict
// it rejects real addresses.
function looksLikeEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export default function QuizEmailGate({ onUnlock }: QuizEmailGateProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;

    if (!looksLikeEmail(email)) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      await onUnlock(email.trim());
      // On success the parent advances to results; this screen unmounts.
    } catch {
      setStatus("error");
    }
  }

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
            <p>
              Almost there — pop your email in below and your full friction map
              is waiting on the next screen. Take your time with it once
              you&apos;re there.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-12 max-w-[520px]">
            <label htmlFor="quiz-email" className="sr-only">
              Email address
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
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
                className="flex-1 bg-white border-2 border-[#1a1a1a] px-5 py-4 font-body text-[17px] text-[#1a1a1a] placeholder:text-[#a0a0a0] focus:outline-none focus:border-[#d4302a] transition-colors disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-[#1a1a1a] text-white px-8 py-4 font-sans text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-[#d4302a] transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-default whitespace-nowrap"
              >
                {status === "sending" ? "One moment…" : "Show my results →"}
              </button>
            </div>

            {status === "error" && (
              <p
                role="alert"
                className="mt-4 font-body text-[15px] text-[#d4302a] leading-[1.5]"
              >
                {looksLikeEmail(email)
                  ? "Something went wrong on our end. Please try again."
                  : "That doesn't look like a complete email — mind checking it?"}
              </p>
            )}
          </form>

          <p className="mt-8 font-body italic text-[14px] text-[#707070]">
            Your results are one click away.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
