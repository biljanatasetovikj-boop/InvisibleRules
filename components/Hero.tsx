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

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease }}
          className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[#1a1a1a] mb-13"
        >
          For mid-career professionals from non-western backgrounds
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

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="font-body italic text-[clamp(18px,2.1vw,24px)] text-[#1a1a1a] leading-[1.5] tracking-[0.01em] mb-14 max-w-[900px] mx-auto"
        >
          The new fluency of global careers. What MBA graduates and CEOs absorb
          through networks and access, here it gets decoded for people who had
          to figure it out the hard way.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease }}
          className="flex justify-center gap-3.5 flex-wrap"
        >
          <a
            href="#lets-talk"
            className="inline-block bg-[#1a1a1a] text-white px-9 py-4 font-sans text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-[#d4302a] transition-colors"
          >
            Book a discovery call
          </a>
          <a
            href="https://invisiblerules.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-transparent text-[#1a1a1a] border-2 border-[#1a1a1a] px-9 py-4 font-sans text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-[#1a1a1a] hover:text-white transition-colors"
          >
            Stories from people like you
          </a>
        </motion.div>
      </div>
    </section>
  );
}
