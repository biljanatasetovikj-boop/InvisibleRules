"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "The Problem", href: "#the-problem" },
  { label: "Who I Help", href: "#who-i-help" },
  { label: "How I Work", href: "#how-i-work" },
  { label: "About", href: "#about" },
  { label: "For Companies", href: "#for-companies" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAFAF7]/95 backdrop-blur-sm border-b border-[#E5E2DB]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-serif text-lg font-bold tracking-tight text-[#111111]"
        >
          Invisible Rules
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#6B6B6B] hover:text-[#111111] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#lets-talk"
            className="text-sm bg-[#1B3557] text-white px-5 py-2.5 rounded-full hover:bg-[#16294A] transition-colors"
          >
            Let's Talk
          </a>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#111111] transition-all duration-200 origin-center ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#111111] transition-opacity duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#111111] transition-all duration-200 origin-center ${
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
            className="md:hidden bg-[#FAFAF7] border-b border-[#E5E2DB] overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base text-[#111111] py-1"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#lets-talk"
                className="text-base font-medium text-[#C4923A] py-1"
                onClick={() => setOpen(false)}
              >
                Let's Talk →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
