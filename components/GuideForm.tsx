"use client";

import { useEffect, useId, useRef, useState } from "react";

interface GuideFormProps {
  // Restyles the form for a dark panel.
  inverted?: boolean;
}

export default function GuideForm({ inverted = false }: GuideFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const id = useId();
  const doneRef = useRef<HTMLDivElement>(null);

  // The form is replaced on success; send focus to the download so it is
  // the next thing a keyboard or screen-reader user reaches.
  useEffect(() => {
    if (submitted) doneRef.current?.focus();
  }, [submitted]);

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const wantsNewsletter = data.get("newsletter") ? "Yes" : "No";
    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/biljanatasetovikj@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            "This is a": "Free guide download from theinvisiblerules.com",
            "Guide requested": "Asking Your Manager: A Short Guide",
            Name: name,
            Email: data.get("email"),
            "Also wants the newsletter": wantsNewsletter,
            _subject: `Guide download — ${name}`,
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

  const inputClass = inverted
    ? "w-full bg-transparent border-0 border-b-2 border-white/35 py-3 font-body text-[17px] text-white focus:border-[#d4302a] transition-colors"
    : "w-full bg-transparent border-0 border-b-2 border-[#1a1a1a] py-2.5 font-body text-[16px] text-[#1a1a1a] focus:border-[#d4302a] transition-colors";
  const labelClass = `block font-sans text-[12px] font-bold uppercase tracking-[0.22em] mb-1 ${
    inverted ? "text-white/75" : "text-[#1a1a1a]"
  }`;

  if (submitted) {
    return (
      <div ref={doneRef} tabIndex={-1} role="status">
        <p
          className={`font-serif italic text-[20px] leading-[1.4] mb-3 ${
            inverted ? "text-white" : "text-[#1a1a1a]"
          }`}
        >
          It&apos;s on its way. Here&apos;s your copy:
        </p>
        <a
          href="/guides/asking-your-manager.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block font-sans text-[13px] font-bold uppercase tracking-[0.18em] underline decoration-1 underline-offset-4 transition-colors ${
            inverted
              ? "text-white hover:text-[#d4302a]"
              : "text-[#d4302a] hover:text-[#1a1a1a]"
          }`}
        >
          Download the guide →
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" suppressHydrationWarning>
      <div className={inverted ? "grid sm:grid-cols-2 gap-5" : "space-y-4"}>
        <div>
          <label htmlFor={`${id}-name`} className={labelClass}>
            First name
          </label>
          <input
            id={`${id}-name`}
            type="text"
            name="name"
            required
            autoComplete="given-name"
            className={inputClass}
            suppressHydrationWarning
          />
        </div>
        <div>
          <label htmlFor={`${id}-email`} className={labelClass}>
            Email
          </label>
          <input
            id={`${id}-email`}
            type="email"
            name="email"
            required
            autoComplete="email"
            className={inputClass}
            suppressHydrationWarning
          />
        </div>
      </div>
      <label className="flex items-start gap-2.5 cursor-pointer">
        <input
          type="checkbox"
          name="newsletter"
          className="mt-1 accent-[#d4302a]"
          suppressHydrationWarning
        />
        <span
          className={`font-body text-[14px] leading-[1.5] ${
            inverted ? "text-white/75" : "text-[#3a3a3a]"
          }`}
        >
          Also send me the newsletter
        </span>
      </label>
      {error && (
        <p
          role="alert"
          className={`font-body italic text-[14px] ${
            inverted ? "text-white" : "text-[#d4302a]"
          }`}
        >
          Something went wrong. Please try again, or email me directly at
          biljanatasetovikj@gmail.com.
        </p>
      )}
      <div className="flex items-center gap-6 flex-wrap">
        <button
          type="submit"
          disabled={loading}
          className={`inline-block px-8 py-4 font-sans text-[13px] font-bold uppercase tracking-[0.18em] transition-colors disabled:opacity-60 cursor-pointer ${
            inverted
              ? "bg-white text-[#1a1a1a] hover:bg-[#d4302a] hover:text-white"
              : "bg-[#1a1a1a] text-white hover:bg-[#d4302a]"
          }`}
          suppressHydrationWarning
        >
          {loading ? "Sending…" : "Send me the guide"}
        </button>
        <p
          className={`font-body text-[13px] ${
            inverted ? "text-white/55" : "text-[#707070]"
          }`}
        >
          By signing up you agree to the{" "}
          <a
            href="/privacy"
            className="underline decoration-1 underline-offset-4 hover:decoration-[#d4302a] transition-colors"
          >
            privacy policy
          </a>
          .
        </p>
      </div>
    </form>
  );
}
