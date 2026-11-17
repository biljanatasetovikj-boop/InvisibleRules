"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WWA } from "@/lib/working-with-americans";

const ease = [0.22, 1, 0.36, 1] as const;

const courseDetails = [
  WWA.course.datesText,
  "2–3 hours a week",
  "Small group, up to 15",
  `€${WWA.course.price} founding price`,
];

// Left: what the site is for and where to click. Right: the current course,
// so it is visible without scrolling on desktop and sits right under the
// buttons on a phone.
export default function Hero() {
  return (
    <section className="pt-14 pb-20 md:pt-20 md:pb-24 px-6 lg:px-12">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] gap-12 lg:gap-16 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="font-serif font-black text-[#1a1a1a] text-[clamp(72px,10vw,136px)] leading-[0.9] tracking-[-0.03em] mb-8"
          >
            <span className="block">invisible</span>
            <span className="block text-[#d4302a]">rules</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="font-body text-[clamp(19px,2vw,24px)] text-[#1a1a1a] leading-[1.5] mb-10 max-w-[600px]"
          >
            Your work is good. The culture around you just reads it
            differently. I help you close that gap.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-8 gap-y-2"
          >
            <a
              href="#free-tools"
              className="inline-flex justify-center items-center whitespace-nowrap min-h-[52px] bg-[#1a1a1a] text-white px-9 py-4 font-sans text-[14px] font-bold uppercase tracking-[0.16em] hover:bg-[#d4302a] transition-colors"
            >
              Start with a free quiz
            </a>
            <a
              href="#lets-talk"
              className="inline-flex items-center whitespace-nowrap min-h-[48px] py-3 font-sans text-[14px] font-bold uppercase tracking-[0.16em] text-[#1a1a1a] underline decoration-[#e0ddd5] decoration-2 underline-offset-[6px] hover:decoration-[#d4302a] transition-colors"
            >
              Or let&apos;s talk first →
            </a>
          </motion.div>
        </div>

        <motion.aside
          id="course"
          aria-label="Current course"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease }}
          className="border-[3px] border-[#1a1a1a] bg-white"
        >
          <div className="relative aspect-[16/9] border-b-[3px] border-[#1a1a1a] overflow-hidden">
            <Image
              src="/working-with-americans/team-table.webp"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover object-[50%_30%]"
            />
          </div>
          <div className="px-6 py-7 sm:px-8 sm:py-8">
            <p className="font-body text-[16px] text-[#3a3a3a]">
              New course, online. Starts {WWA.course.startText}.
            </p>
            <h2 className="mt-2 font-serif font-black text-[#1a1a1a] text-[clamp(28px,3vw,38px)] leading-[1.08] tracking-[-0.02em]">
              Working with Americans
            </h2>
            <p className="mt-1 font-serif font-bold text-[#1a1a1a] text-[19px] leading-[1.3]">
              A 4-week starter course
            </p>
            <ul className="mt-5 space-y-1.5 font-body text-[16px] text-[#1a1a1a] list-none">
              {courseDetails.map((d) => (
                <li key={d} className="flex gap-2.5">
                  <span aria-hidden className="text-[#d4302a]">
                    —
                  </span>
                  {d}
                </li>
              ))}
            </ul>
            <a
              href={WWA.pagePath}
              className="mt-7 flex sm:inline-flex justify-center items-center min-h-[52px] bg-[#d4302a] text-white px-7 py-4 font-sans text-[14px] font-bold uppercase tracking-[0.14em] hover:bg-[#1a1a1a] transition-colors"
            >
              See the full course →
            </a>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
