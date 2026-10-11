"use client";

import { useState } from "react";

export default function GuideForm() {
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
            name,
            email: data.get("email"),
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

  if (submitted) {
    return (
      <div>
        <p className="font-serif italic text-[#1a1a1a] text-[17px] leading-[1.4] mb-3">
          It&apos;s on its way. Here&apos;s your copy:
        </p>
        <a
          href="/guides/asking-your-manager.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[#d4302a] hover:text-[#1a1a1a] transition-colors underline decoration-1 underline-offset-4"
        >
          Download the guide →
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" suppressHydrationWarning>
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
      <label className="flex items-start gap-2.5 cursor-pointer">
        <input
          type="checkbox"
          name="newsletter"
          className="mt-1 accent-[#d4302a]"
          suppressHydrationWarning
        />
        <span className="font-body text-[14px] text-[#3a3a3a] leading-[1.5]">
          Also send me the newsletter
        </span>
      </label>
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
        {loading ? "Sending…" : "Send me the guide"}
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
