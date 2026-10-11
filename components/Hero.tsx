"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="text-center pt-20 pb-24 px-6 lg:px-12">
      <div className="max-w-[1240px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="flex items-center justify-center gap-4 mb-7"
        >
          <span className="w-9 h-px bg-[#d4302a]" />
          <span className="font-sans text-[11px] font-bold uppercase tracking-[0.28em] text-[#d4302a]">
            A field guide for global careers
          </span>
          <span className="w-9 h-px bg-[#d4302a]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
          className="font-serif font-black text-[#d4302a] leading-[0.88] tracking-[-0.03em] mb-10"
        >
          <span className="block text-[clamp(88px,15vw,200px)]">invisible</span>
          <span className="block italic text-[clamp(88px,15vw,200px)]">rules</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="font-body italic text-[clamp(18px,2.1vw,24px)] text-[#1a1a1a] leading-[1.5] tracking-[0.01em] mb-14 max-w-[900px] mx-auto space-y-5"
        >
          <p>
            Your work is good. The culture around you just reads it
            differently. I help you close that gap.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease }}
          className="flex flex-col items-center gap-5"
        >
          <a
            href="#lets-talk"
            className="inline-block bg-[#1a1a1a] text-white px-9 py-4 font-sans text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-[#d4302a] transition-colors"
          >
            Tell me your story
          </a>
          <a
            href="#free-tools"
            className="inline-block font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[#1a1a1a] hover:text-[#d4302a] transition-colors"
          >
            Or start with the free guide →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
