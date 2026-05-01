"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formsubmit.co/ajax/biljanatasetovikj@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          _subject: "New message from Invisible Rules website",
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        setLoading(false);
        return;
      }
    } catch {
      // network error — still show success, message may not have sent
    }
    setLoading(false);
  }

  return (
    <section
      id="lets-talk"
      className="py-24 lg:py-32 px-6 lg:px-8 bg-[#FAFAF7]"
    >
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <p className="text-xs uppercase tracking-widest text-[#C4923A] font-medium mb-5">
            Let&apos;s Talk
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-6 text-[#111111]">
            Not sure if this is the right fit?
            <br />
            <span className="italic text-[#1B3557]">
              Start with a conversation.
            </span>
          </h2>
          <p className="text-lg text-[#6B6B6B] leading-relaxed mb-12">
            I&apos;m not here to sell you a package. I&apos;m here to understand
            what you&apos;re navigating and tell you honestly whether I can help.
            If you&apos;re a professional who&apos;s been quietly wondering why
            things aren&apos;t moving the way they should — or a company watching
            international talent stall — reach out. Let&apos;s figure out
            what&apos;s actually going on.
          </p>
        </FadeIn>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#1B3557] text-white rounded-2xl p-10 text-center"
          >
            <p className="font-serif text-2xl font-bold mb-3">
              Message received.
            </p>
            <p className="text-white/70 leading-relaxed">
              I read every message personally and will be in touch within a few days.
            </p>
          </motion.div>
        ) : (
          <FadeIn delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#111111] mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border border-[#E5E2DB] rounded-xl px-4 py-3.5 text-[#111111] bg-white focus:outline-none focus:border-[#1B3557] transition-colors placeholder:text-[#6B6B6B]/40"
                  placeholder="Your name"
                  suppressHydrationWarning
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#111111] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border border-[#E5E2DB] rounded-xl px-4 py-3.5 text-[#111111] bg-white focus:outline-none focus:border-[#1B3557] transition-colors placeholder:text-[#6B6B6B]/40"
                  placeholder="your@email.com"
                  suppressHydrationWarning
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#111111] mb-2"
                >
                  Tell me a little about your situation
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full border border-[#E5E2DB] rounded-xl px-4 py-3.5 text-[#111111] bg-white focus:outline-none focus:border-[#1B3557] transition-colors resize-none placeholder:text-[#6B6B6B]/40"
                  placeholder="What are you navigating? What's not moving the way it should?"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#C4923A] text-white font-medium py-4 rounded-full hover:bg-[#B07E2E] transition-colors disabled:opacity-60 cursor-pointer"
                suppressHydrationWarning
              >
                {loading ? "Sending..." : "Send →"}
              </button>
            </form>
            <p className="text-sm text-[#6B6B6B] text-center mt-5">
              I read every message personally and respond within a few days.
            </p>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
