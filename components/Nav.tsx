"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { label: "The Pattern", href: "#the-pattern" },
  { label: "The Work", href: "#how-i-work" },
  { label: "The Diagnostic", href: "/quiz" },
  { label: "Who Is This For", href: "#who-i-help" },
  { label: "Your Archetype", href: "/archetype-quiz" },
  { label: "About Me", href: "#about" },
  { label: "Newsletter", href: "#newsletter" },
  { label: "For Companies", href: "#for-companies" },
];

// Held out of the list above and rendered as a filled button. With nine
// items the bar read as an undifferentiated wall; pulling the one action out
// gives the eye somewhere to land.
const cta = { label: "Let's Talk", href: "#lets-talk" };

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <nav className="py-6 flex justify-between items-center border-b-2 border-[#1a1a1a]">
          <a href="#" className="flex items-center" aria-label="Invisible Rules — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.svg"
              alt="Invisible Rules"
              width={44}
              height={44}
              className="w-9 h-9 lg:w-11 lg:h-11"
            />
          </a>

          <div className="hidden lg:flex items-stretch">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-[9px] font-bold uppercase tracking-[0.14em] text-[#1a1a1a] hover:text-[#d4302a] transition-colors px-3 flex items-center border-l border-[#e0ddd5]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={cta.href}
              className="ml-4 bg-[#1a1a1a] text-white font-sans text-[9px] font-bold uppercase tracking-[0.14em] px-4 flex items-center hover:bg-[#d4302a] transition-colors"
            >
              {cta.label}
            </a>
          </div>

          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-[#1a1a1a] transition-transform duration-200 origin-center ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#1a1a1a] transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#1a1a1a] transition-transform duration-200 origin-center ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden overflow-hidden border-b border-[#e0ddd5]"
            >
              <div className="py-5 flex flex-col gap-3 items-start">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-[#1a1a1a] py-1"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={cta.href}
                  className="mt-2 bg-[#1a1a1a] text-white font-sans text-[12px] font-bold uppercase tracking-[0.18em] px-5 py-3"
                  onClick={() => setOpen(false)}
                >
                  {cta.label}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
