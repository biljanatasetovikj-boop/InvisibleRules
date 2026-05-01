"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-[#111111] mb-8"
        >
          You were hired for your talent.
          <br />
          <span className="italic text-[#1B3557]">Nobody told you the rest.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
          className="text-xl md:text-2xl text-[#6B6B6B] leading-relaxed max-w-2xl mx-auto mb-6"
        >
          There&apos;s a gap between being good at your job and being seen as
          someone who advances. That gap isn&apos;t your skill. It&apos;s the
          unwritten rules — the ones global organizations run on, but never
          explain.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.27, ease }}
          className="text-base md:text-lg font-medium text-[#111111] mb-12"
        >
          I help non-Western professionals in international organizations close that gap.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.38, ease }}
        >
          <a
            href="#lets-talk"
            className="inline-flex items-center gap-2 bg-[#C4923A] text-white text-base font-medium px-8 py-4 rounded-full hover:bg-[#B07E2E] transition-colors"
          >
            Let&apos;s Talk →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
