"use client";

import { useState } from "react";
import FadeIn from "../FadeIn";

export interface ArchetypeQuizLead {
  firstName: string;
  lastName: string;
  email: string;
}

interface ArchetypeQuizEmailGateProps {
  onUnlock: (lead: ArchetypeQuizLead) => void;
}

// Simple, forgiving email shape check — enough to catch typos, not so strict
// it rejects real addresses.
function looksLikeEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export default function ArchetypeQuizEmailGate({
  onUnlock,
}: ArchetypeQuizEmailGateProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  function fail(message: string) {
    setErrorMsg(message);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!firstName.trim()) return fail("Please add your first name.");
    if (!lastName.trim()) return fail("Please add your surname.");
    if (!looksLikeEmail(email)) {
      return fail("That doesn't look like a complete email — mind checking it?");
    }

    // The parent fires the webhook without awaiting it and moves straight to
    // the result, so there's no sending state to show here.
    onUnlock({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
    });
  }

  const inputClass =
    "w-full bg-[var(--white)] border-2 border-[var(--ink)] px-5 py-4 font-body text-[17px] text-[var(--ink)] placeholder:text-[var(--grey-soft)] focus:outline-none focus:border-[var(--red)] transition-colors";

  return (
    <section className="py-28">
      <div className="max-w-[760px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex items-center gap-3 mb-12">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--red)]">
              Your result
            </span>
            <span className="w-10 h-px bg-[var(--line)]" />
          </div>

          <h1 className="font-serif font-black text-[var(--ink)] text-[clamp(34px,4.5vw,60px)] tracking-[-0.025em] leading-[1.02] mb-8">
            Your <span className="text-[var(--red)] italic">pattern</span> is
            ready.
          </h1>

          <div className="space-y-5 font-body text-[18px] text-[var(--ink-soft)] leading-[1.7] max-w-[600px]">
            <p>One more step before I show you which one it is.</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-12 max-w-[520px] space-y-3"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="archetype-first-name" className="sr-only">
                  First name
                </label>
                <input
                  id="archetype-first-name"
                  type="text"
                  autoComplete="given-name"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    if (errorMsg) setErrorMsg("");
                  }}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="archetype-last-name" className="sr-only">
                  Surname
                </label>
                <input
                  id="archetype-last-name"
                  type="text"
                  autoComplete="family-name"
                  placeholder="Surname"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                    if (errorMsg) setErrorMsg("");
                  }}
                  className={inputClass}
                />
              </div>
            </div>

            <label htmlFor="archetype-email" className="sr-only">
              Email address
            </label>
            <input
              id="archetype-email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errorMsg) setErrorMsg("");
              }}
              className={inputClass}
            />

            <button
              type="submit"
              className="w-full sm:w-auto bg-[var(--ink)] text-[var(--white)] px-8 py-4 font-sans text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-[var(--red)] transition-colors cursor-pointer whitespace-nowrap"
            >
              Show my result →
            </button>

            {errorMsg && (
              <p
                role="alert"
                className="font-body text-[15px] text-[var(--red)] leading-[1.5]"
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
