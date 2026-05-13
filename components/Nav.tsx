"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { label: "The Work", href: "#how-i-work" },
  { label: "Individuals", href: "#who-i-help" },
  { label: "Companies", href: "#lets-talk" },
  { label: "Essays", href: "https://invisiblerules.substack.com/", external: true },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <nav className="py-6 flex justify-between items-center border-b-2 border-[#1a1a1a]">
          <a
            href="#"
            className="font-serif font-black text-[26px] tracking-[-0.01em] text-[#1a1a1a]"
          >
            Invisible <em className="italic text-[#d4302a] font-bold">Rules</em>
          </a>

          <div className="hidden md:flex items-stretch">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-[#1a1a1a] hover:text-[#d4302a] transition-colors px-5 flex items-center border-l border-[#e0ddd5]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:biljanatasetovikj@gmail.com?subject=Discovery%20call%20%E2%80%94%20Invisible%20Rules"
              className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-white bg-[#d4302a] hover:bg-[#a8221d] transition-colors px-5 flex items-center border-l border-[#e0ddd5]"
            >
              Book a call
            </a>
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
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
              className="md:hidden overflow-hidden border-b border-[#e0ddd5]"
            >
              <div className="py-5 flex flex-col gap-3">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-[#1a1a1a] py-1"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="mailto:biljanatasetovikj@gmail.com?subject=Discovery%20call%20%E2%80%94%20Invisible%20Rules"
                  className="font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-[#d4302a] py-1"
                  onClick={() => setOpen(false)}
                >
                  Book a call
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
