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
          className="font-serif font-black text-[#d4302a] leading-[0.88] tracking-[-0.03em]"
        >
          <span className="block text-[clamp(88px,15vw,200px)]">invisible</span>
          <span className="block italic text-[clamp(88px,15vw,200px)] mb-8">rules</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="font-body italic text-[clamp(18px,2.2vw,26px)] text-[#1a1a1a] tracking-[0.01em] mb-15"
        >
          The manual nobody handed you
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease }}
          className="mx-auto mb-15 aspect-square w-[clamp(240px,32vw,380px)]"
          aria-label="A key — unlocking the unwritten rules"
        >
          <svg
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            style={{ filter: "drop-shadow(0 10px 22px rgba(0,0,0,0.12))" }}
          >
            <circle cx="140" cy="160" r="80" fill="none" stroke="#d4302a" strokeWidth="22" />
            <circle cx="140" cy="160" r="28" fill="#d4302a" />
            <rect x="200" y="148" width="180" height="24" fill="#d4302a" />
            <rect x="320" y="172" width="22" height="38" fill="#d4302a" />
            <rect x="350" y="172" width="22" height="26" fill="#d4302a" />
            <path
              d="M 80 280 Q 140 250, 200 290 Q 260 330, 320 300"
              stroke="#1a1a1a"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="220" cy="305" r="36" fill="none" stroke="#1a1a1a" strokeWidth="10" />
            <circle cx="220" cy="305" r="10" fill="#1a1a1a" />
            <rect x="252" y="297" width="80" height="14" fill="#1a1a1a" />
            <rect x="300" y="311" width="10" height="18" fill="#1a1a1a" />
            <rect x="320" y="311" width="10" height="12" fill="#1a1a1a" />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease }}
          className="font-serif font-black text-[#1a1a1a] text-[clamp(38px,5.5vw,68px)] tracking-[-0.02em] leading-none mb-3"
        >
          Biljana
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
          className="font-body italic text-lg text-[#707070] mb-13"
        >
          cultural fluency · career growth · belonging
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease }}
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
            Read the essays
          </a>
        </motion.div>
      </div>
    </section>
  );
}
