"use client";

import { useState } from "react";

export default function RemovalForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const data = new FormData(e.currentTarget);
    const email = data.get("email");
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
            "This is a":
              "Request to be deleted from your lists, from theinvisiblerules.com",
            "Action needed":
              "Delete this address from your records and any list it is on",
            Email: email,
            Note: data.get("note") || "(none)",
            _subject: `Removal request — ${email}`,
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
      <div className="bg-[#fafaf7] border-t-4 border-[#d4302a] p-8">
        <p className="font-serif italic text-[#1a1a1a] text-[20px] leading-[1.3] mb-3">
          Sent. Your details will be removed.
        </p>
        <p className="font-body text-[16px] text-[#3a3a3a] leading-[1.7]">
          I do this by hand, so it may take a few days. You do not need to
          do anything else.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#fafaf7] border-t-4 border-[#d4302a] p-8">
      <form onSubmit={handleSubmit} className="space-y-5" suppressHydrationWarning>
        <div>
          <label
            htmlFor="removal-email"
            className="block font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-[#1a1a1a] mb-2"
          >
            Your email
          </label>
          <input
            type="email"
            id="removal-email"
            name="email"
            required
            placeholder="The address you used"
            className="w-full bg-transparent border-0 border-b-2 border-[#1a1a1a] py-3 font-body text-[17px] text-[#1a1a1a] focus:outline-none focus:border-[#d4302a] transition-colors placeholder:text-[#a8a8a8]"
            suppressHydrationWarning
          />
        </div>
        <div>
          <label
            htmlFor="removal-note"
            className="block font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-[#1a1a1a] mb-2"
          >
            Anything to add (optional)
          </label>
          <input
            type="text"
            id="removal-note"
            name="note"
            placeholder="For example, which list"
            className="w-full bg-transparent border-0 border-b-2 border-[#1a1a1a] py-3 font-body text-[17px] text-[#1a1a1a] focus:outline-none focus:border-[#d4302a] transition-colors placeholder:text-[#a8a8a8]"
            suppressHydrationWarning
          />
        </div>
        {error && (
          <p className="font-body italic text-[15px] text-[#d4302a]">
            Something went wrong. Please write to
            biljanatasetovikj@gmail.com instead and I will remove you.
          </p>
        )}
        <button
          type="submit"
          disabled={loading}
          className="inline-block bg-[#1a1a1a] text-white px-8 py-4 font-sans text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-[#d4302a] transition-colors disabled:opacity-60 cursor-pointer"
          suppressHydrationWarning
        >
          {loading ? "Sending…" : "Remove me from your lists"}
        </button>
      </form>
    </div>
  );
}
