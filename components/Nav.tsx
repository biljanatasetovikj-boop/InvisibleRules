"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Hash targets are written absolute ("/#…") so the bar also works from
// standalone routes like /learn-the-rules, where those sections don't exist
// on the page.
const links = [
  { label: "Events", href: "/working-with-americans" },
  { label: "Free Tools", href: "/#free-tools" },
  { label: "How I Help", href: "/#how-i-help" },
  { label: "About", href: "/#about" },
  { label: "For Companies", href: "/for-companies" },
];

// Held out of the list above and rendered as a filled button so the one
// action anyone deciding whether to work with Biljana needs has somewhere
// to land.
const cta = { label: "Let's Talk", href: "/#lets-talk" };

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <nav className="py-6 flex justify-between items-center border-b-2 border-[#1a1a1a]">
          <a href="/" className="flex items-center min-w-[44px] min-h-[44px]" aria-label="Invisible Rules — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.svg"
              alt="Invisible Rules"
              width={44}
              height={44}
              className="w-9 h-9 lg:w-11 lg:h-11"
            />
          </a>

          <div className="hidden lg:flex items-stretch gap-1 xl:gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-[15px] font-bold text-[#1a1a1a] hover:text-[#d4302a] transition-colors px-3 min-h-[44px] flex items-center"
              >
                {link.label}
              </a>
            ))}
            <a
              href={cta.href}
              className="ml-3 bg-[#1a1a1a] text-white font-sans text-[15px] font-bold px-5 min-h-[44px] flex items-center hover:bg-[#d4302a] transition-colors"
            >
              {cta.label}
            </a>
          </div>

          <button
            className="lg:hidden flex flex-col items-center justify-center gap-1.5 w-11 h-11 -mr-2.5"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
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
              className="lg:hidden overflow-hidden"
            >
              <div className="py-3 flex flex-col items-start">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-sans text-[18px] font-bold text-[#1a1a1a] py-3 min-h-[48px] flex items-center"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={cta.href}
                  className="mt-3 mb-4 bg-[#1a1a1a] text-white font-sans text-[18px] font-bold px-6 py-3.5"
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
