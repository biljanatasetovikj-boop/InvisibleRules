"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease }}
          className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold leading-snug tracking-tight text-[#111111] mb-12"
        >
          Do you think strong work speaks for itself? Depends where you work. If you&apos;re a remote professional inside an international organization, you already know it doesn&apos;t. The rules of who gets seen, heard, and advanced were written for someone else. They can be learned. You can thrive in a place that wasn&apos;t built for you.
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
