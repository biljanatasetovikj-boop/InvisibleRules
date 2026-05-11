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
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight text-[#111111] mb-14"
        >
          <span className="block">
            Do you think strong work speaks for itself? Depends where you work.
          </span>
          <span className="block mt-10 md:mt-12">
            If you&apos;re a non-Western professional inside a global company, you already know it doesn&apos;t. The rules of who gets seen, heard, and advanced were written for someone else.
          </span>
          <span className="block mt-10 md:mt-12">
            They can be learned. You can thrive in a place that wasn&apos;t built for you.
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
