"use client";

import { useState } from "react";

interface WaitlistFormProps {
  // The visible call-to-action before the form opens, e.g. "Join the Decoder waitlist →".
  triggerLabel: string;
  // Short tag for the email subject line, e.g. "Decoder" or "Spring 2027 cohort".
  subjectTag: string;
  // Spelled out inside the email body, so the message says what it is on its own.
  signedUpFor: string;
}

export default function WaitlistForm({
  triggerLabel,
  subjectTag,
  signedUpFor,
}: WaitlistFormProps) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    try {
      // Same client-side formsubmit.co pattern as the Contact and quiz forms —
      // routing through our own server gets blocked by formsubmit's
      // datacenter-IP filter, so this has to run in the browser.
      const res = await fetch(
        "https://formsubmit.co/ajax/biljanatasetovikj@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            "This is a": "Waitlist sign-up from theinvisiblerules.com",
            "Waitlist for": signedUpFor,
            Name: name,
            Email: data.get("email"),
            _subject: `Waitlist: ${subjectTag} — ${name}`,
            _template: "table",
            _captcha: "false",
          }),
        }
      );
      if (res.ok) {
        setSubmitted(true);
        setLoading(false);
        return;
      }
      setError(true);
      setLoading(false);
    } catch {
      setError(true);
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <p className="font-serif italic text-[#1a1a1a] text-[17px] leading-[1.4]">
        You&apos;re on the list. I&apos;ll write to you as soon as it&apos;s
        ready.
      </p>
    );
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-block bg-[#1a1a1a] text-white px-7 py-3.5 font-sans text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-[#d4302a] transition-colors cursor-pointer"
      >
        {triggerLabel}
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-[320px]" suppressHydrationWarning>
      <div>
        <input
          type="text"
          name="name"
          required
          placeholder="First name"
          className="w-full bg-transparent border-0 border-b-2 border-[#1a1a1a] py-2.5 font-body text-[16px] text-[#1a1a1a] focus:outline-none focus:border-[#d4302a] transition-colors placeholder:text-[#a8a8a8]"
          suppressHydrationWarning
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          className="w-full bg-transparent border-0 border-b-2 border-[#1a1a1a] py-2.5 font-body text-[16px] text-[#1a1a1a] focus:outline-none focus:border-[#d4302a] transition-colors placeholder:text-[#a8a8a8]"
          suppressHydrationWarning
        />
      </div>
      {error && (
        <p className="font-body italic text-[13px] text-[#d4302a]">
          Something went wrong. Please try again, or email me directly at
          biljanatasetovikj@gmail.com.
        </p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="inline-block bg-[#1a1a1a] text-white px-7 py-3.5 font-sans text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-[#d4302a] transition-colors disabled:opacity-60 cursor-pointer"
        suppressHydrationWarning
      >
        {loading ? "Joining…" : "Join the waitlist"}
      </button>
      <p className="font-body text-[12px] text-[#707070]">
        By signing up you agree to the{" "}
        <a
          href="/privacy"
          className="underline decoration-[#e0ddd5] decoration-1 underline-offset-4 hover:decoration-[#d4302a] transition-colors"
        >
          privacy policy
        </a>
        .
      </p>
    </form>
  );
}
