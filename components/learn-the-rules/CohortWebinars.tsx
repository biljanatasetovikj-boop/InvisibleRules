"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "../FadeIn";
import { webinars } from "@/lib/cohort-data";

export default function CohortWebinars() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const data = new FormData(e.currentTarget);
    try {
      // Straight to formsubmit from the browser — routing through our own
      // server gets blocked, formsubmit refuses datacenter IPs. Same pattern
      // as the contact form.
      const res = await fetch(
        "https://formsubmit.co/ajax/biljanatasetovikj@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: data.get("name"),
            email: data.get("email"),
            session: data.get("session"),
            _subject: "Free session signup - Learn the Rules",
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

  return (
    <section id="free-sessions" className="py-28 border-t-2 border-[#1a1a1a]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[#d4302a]">
              06 — Come and see first
            </span>
            <span className="w-10 h-px bg-[#e0ddd5]" />
          </div>
          <h2 className="font-serif font-black text-[#1a1a1a] text-[clamp(38px,5.5vw,72px)] tracking-[-0.025em] leading-none mb-6 max-w-[900px]">
            Three free <span className="text-[#d4302a] italic">sessions</span>.
          </h2>
          <p className="font-body text-[21px] leading-[1.65] text-[#3a3a3a] max-w-[740px] mb-16">
            One hour each, before the cohort starts. You do not have to be
            thinking about joining anything to come to one — they stand on
            their own, and you will leave with at least one rule you did not
            have before.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start">
          <FadeIn delay={0.08}>
            <ul className="list-none space-y-0">
              {webinars.map((w) => (
                <li
                  key={w.date}
                  className="border-t-2 border-[#1a1a1a] py-7 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8"
                >
                  <div className="sm:w-[210px] shrink-0">
                    <div className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-[#d4302a] mb-1">
                      {w.date}
                    </div>
                    <div className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-[#707070]">
                      {w.time}
                    </div>
                  </div>
                  <p className="font-body text-[19px] text-[#1a1a1a] leading-[1.5]">
                    {w.title}
                  </p>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.16}>
            <div className="bg-[#fafaf7] border-t-4 border-[#d4302a] p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="font-serif italic text-[#1a1a1a] text-[26px] leading-[1.2] mb-3">
                    Saved you a seat.
                  </p>
                  <p className="font-body text-[#3a3a3a] text-[17px] leading-[1.65]">
                    I will send you the link a few days before.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning>
                  <p className="font-serif italic text-[#d4302a] text-[22px] mb-2">
                    Save me a seat
                  </p>

                  <div>
                    <label
                      htmlFor="webinar-name"
                      className="block font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-[#1a1a1a] mb-2"
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      id="webinar-name"
                      name="name"
                      required
                      placeholder="—"
                      className="w-full bg-transparent border-0 border-b-2 border-[#1a1a1a] py-3 font-body text-[17px] text-[#1a1a1a] focus:outline-none focus:border-[#d4302a] transition-colors placeholder:text-[#a8a8a8]"
                      suppressHydrationWarning
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="webinar-email"
                      className="block font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-[#1a1a1a] mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="webinar-email"
                      name="email"
                      required
                      placeholder="—"
                      className="w-full bg-transparent border-0 border-b-2 border-[#1a1a1a] py-3 font-body text-[17px] text-[#1a1a1a] focus:outline-none focus:border-[#d4302a] transition-colors placeholder:text-[#a8a8a8]"
                      suppressHydrationWarning
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="webinar-session"
                      className="block font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-[#1a1a1a] mb-2"
                    >
                      Which session
                    </label>
                    <select
                      id="webinar-session"
                      name="session"
                      required
                      defaultValue={webinars[0].date}
                      className="w-full bg-transparent border-0 border-b-2 border-[#1a1a1a] py-3 font-body text-[17px] text-[#1a1a1a] focus:outline-none focus:border-[#d4302a] transition-colors"
                      suppressHydrationWarning
                    >
                      {webinars.map((w) => (
                        <option key={w.date} value={`${w.date} — ${w.title}`}>
                          {w.date}
                        </option>
                      ))}
                    </select>
                  </div>

                  {error && (
                    <p className="font-body italic text-[15px] text-[#d4302a]">
                      Something went wrong. Please try again, or email me at
                      biljanatasetovikj@gmail.com.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-block bg-[#1a1a1a] text-white px-8 py-4 font-sans text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-[#d4302a] transition-colors disabled:opacity-60 cursor-pointer"
                    suppressHydrationWarning
                  >
                    {loading ? "Sending…" : "Save my seat →"}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
