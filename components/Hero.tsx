"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.2] tracking-tight text-[#111111] mb-14"
        >
          <span className="font-normal">
            Decode the unwritten rules and build a career you actually own.
          </span>{" "}
          <span className="font-bold">
            Close the gap between what you bring and what the room sees.
          </span>{" "}
          <span className="italic font-medium text-[#1B3557]">
            Flourish in workplaces that weren&apos;t designed with you in mind.
          </span>
        </motion.h1>

        <motion.a
          href="#how-i-work"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
          className="inline-flex items-center gap-2 bg-[#1B3557] text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-[#16294A] transition-colors"
        >
          Get started →
        </motion.a>
      </div>
    </section>
  );
}
