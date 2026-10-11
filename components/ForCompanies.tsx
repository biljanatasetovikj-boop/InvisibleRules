import FadeIn from "./FadeIn";

// A full-bleed dark band so it reads as a separate audience, not a
// continuation of Let's talk above. Black rather than red: red belongs to
// the quizzes, the page's main action. The link is stretched over the whole
// band so it all clicks, while its accessible name stays the short label.
export default function ForCompanies() {
  return (
    <section id="for-companies" className="group relative bg-[#1a1a1a]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 py-20 md:py-28">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-20 lg:items-end">
            <h2 className="font-serif font-black text-white text-[clamp(52px,8.5vw,120px)] tracking-[-0.035em] leading-[0.9]">
              For <span className="italic text-[#d4302a]">companies</span>.
            </h2>
            <div>
              <p className="font-body text-[19px] leading-[1.65] text-[#e8e5de] max-w-[520px] mb-8">
                Some of this work happens with teams where people come from
                different countries. I take on one or two company clients at
                a time, and I start by finding where the friction actually
                sits.
              </p>
              <a
                href="/for-companies"
                className="inline-flex items-center gap-5 py-2 font-sans text-[13px] font-bold uppercase tracking-[0.18em] text-white after:absolute after:inset-0 after:content-['']"
              >
                How I work with companies
                <span
                  aria-hidden
                  className="font-serif text-[clamp(34px,4vw,52px)] leading-none text-[#d4302a] transition-transform duration-300 group-hover:translate-x-3"
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
