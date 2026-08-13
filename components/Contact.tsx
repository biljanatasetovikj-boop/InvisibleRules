"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      // Post straight to formsubmit from the browser. Routing through our own
      // server gets blocked — formsubmit refuses requests from datacenter IPs.
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
            message: data.get("message"),
            _subject: "Discovery call request - Invisible Rules",
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
    <section id="lets-talk" className="bg-white py-[130px]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[#d4302a]">
              04 — Start here
            </span>
            <span className="w-10 h-px bg-[#e0ddd5]" />
          </div>
          <h2 className="font-serif font-black text-[#1a1a1a] text-[clamp(42px,6vw,82px)] tracking-[-0.025em] leading-none mb-7">
            Let&apos;s <span className="text-[#d4302a] italic">talk</span>.
          </h2>
          <p className="font-body text-[21px] leading-[1.65] text-[#3a3a3a] max-w-[740px] mb-16">
            A free 30-minute conversation. Tell me where things feel harder
            than they should, about the boss you can&apos;t quite read, the
            meetings where your voice gets lost, the sense that everyone knows a
            rulebook you never got. We&apos;ll make sense of it together, and
            you&apos;ll walk away with at least one rule you didn&apos;t have
            before.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-start">
          <FadeIn delay={0.1}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="border-l-4 border-[#d4302a] pl-8 py-6"
              >
                <p className="font-serif italic text-[#1a1a1a] text-[clamp(24px,3vw,34px)] leading-[1.2] mb-4">
                  Got it. Thank you.
                </p>
                <p className="font-body text-[#3a3a3a] text-[17px] leading-[1.65]">
                  I read every message personally and will reply within a few
                  days.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-7"
                suppressHydrationWarning
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-[#1a1a1a] mb-2"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-transparent border-0 border-b-2 border-[#1a1a1a] py-3 font-body text-[18px] text-[#1a1a1a] focus:outline-none focus:border-[#d4302a] transition-colors placeholder:text-[#a8a8a8]"
                    placeholder="—"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-[#1a1a1a] mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-transparent border-0 border-b-2 border-[#1a1a1a] py-3 font-body text-[18px] text-[#1a1a1a] focus:outline-none focus:border-[#d4302a] transition-colors placeholder:text-[#a8a8a8]"
                    placeholder="—"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-[#1a1a1a] mb-2"
                  >
                    What would you like to discuss?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-transparent border-0 border-b-2 border-[#1a1a1a] py-3 font-body text-[17px] text-[#1a1a1a] leading-[1.65] focus:outline-none focus:border-[#d4302a] transition-colors placeholder:text-[#a8a8a8] resize-none"
                    placeholder="A sentence or two is enough."
                  />
                </div>
                {error && (
                  <p className="font-body italic text-[15px] text-[#d4302a]">
                    Something went wrong. Please try again, or email me
                    directly at biljanatasetovikj@gmail.com.
                  </p>
                )}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-block bg-[#1a1a1a] text-white px-9 py-4 font-sans text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-[#d4302a] transition-colors disabled:opacity-60 cursor-pointer"
                    suppressHydrationWarning
                  >
                    {loading ? "Sending…" : "Send request →"}
                  </button>
                </div>
              </form>
            )}
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="lg:border-l-2 lg:border-[#e0ddd5] lg:pl-12">
              <p className="font-serif italic text-[#d4302a] text-[22px] mb-7">
                Or find me here
              </p>
              <ul className="space-y-6 list-none">
                <li>
                  <a
                    href="https://invisiblerules.substack.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[#1a1a1a] hover:text-[#d4302a] transition-colors inline-flex items-center gap-2"
                  >
                    Substack <span className="text-[#d4302a]">↗</span>
                  </a>
                  <p className="font-body italic text-[14px] text-[#707070] mt-1.5">
                    Stories from people like you.
                  </p>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/biljana-kuzmanovska-tasetovikj/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[#1a1a1a] hover:text-[#d4302a] transition-colors inline-flex items-center gap-2"
                  >
                    LinkedIn <span className="text-[#d4302a]">↗</span>
                  </a>
                  <p className="font-body italic text-[14px] text-[#707070] mt-1.5">
                    Connect professionally.
                  </p>
                </li>
                <li>
                  <a
                    href="mailto:biljanatasetovikj@gmail.com"
                    className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[#1a1a1a] hover:text-[#d4302a] transition-colors inline-flex items-center gap-2"
                  >
                    Email <span className="text-[#d4302a]">↗</span>
                  </a>
                  <p className="font-body italic text-[14px] text-[#707070] mt-1.5 break-all">
                    biljanatasetovikj@gmail.com
                  </p>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
