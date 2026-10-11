import FadeIn from "./FadeIn";
import GuideForm from "./GuideForm";

const quizzes = [
  {
    title: "The Diagnostic",
    body: "A few questions to see whether what you are feeling at work is a cultural pattern, or something else.",
    meta: "9 questions · 3 minutes",
    href: "/quiz",
  },
  {
    title: "Your Archetype",
    body: "Find out which of the five archetypes shapes how you show up at work, and what it costs you.",
    meta: "20 questions · 5 minutes",
    href: "/archetype-quiz",
  },
];

export default function FreeTools() {
  return (
    <section
      id="free-tools"
      className="py-28 bg-[#fafaf7] border-t-2 border-[#1a1a1a] overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex items-center gap-3 mb-12">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[#d4302a]">
              Free tools
            </span>
            <span className="w-10 h-px bg-[#e0ddd5]" />
          </div>
        </FadeIn>

        {/* Each quiz is one oversized row. The whole row is the link, and the
            red flood is pulled out to the gutters so it reads edge to edge. */}
        <div className="border-t-2 border-[#1a1a1a] mb-20">
          {quizzes.map((q, i) => (
            <FadeIn key={q.title} delay={i * 0.08}>
              {/* Red by default on touch, where there is no hover to reveal
                  it. From md up it starts plain and floods on hover. */}
              <a
                href={q.href}
                className="group block border-b-2 border-[#1a1a1a] -mx-6 px-6 lg:-mx-12 lg:px-12 transition-colors duration-300 bg-[#d4302a] md:bg-transparent md:hover:bg-[#d4302a]"
              >
                <div className="py-11 grid grid-cols-[1fr_auto] gap-8 items-center">
                  <div>
                    <h3 className="font-serif font-black text-white md:text-[#1a1a1a] text-[clamp(32px,5.4vw,72px)] tracking-[-0.03em] leading-[0.98] mb-4 transition-colors duration-300 md:group-hover:text-white">
                      {q.title}
                    </h3>
                    <p className="font-body text-[17px] text-white/85 md:text-[#3a3a3a] leading-[1.6] max-w-[620px] mb-4 transition-colors duration-300 md:group-hover:text-white/85">
                      {q.body}
                    </p>
                    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-white/70 md:text-[#707070] transition-colors duration-300 md:group-hover:text-white/70">
                      {q.meta}
                    </span>
                  </div>
                  <span
                    aria-hidden
                    className="font-serif text-[clamp(34px,5vw,64px)] leading-none text-white md:text-[#d4302a] transition-all duration-300 md:group-hover:text-white md:group-hover:translate-x-3"
                  >
                    →
                  </span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        {/* The guide anchors the section: inverted panel, so it reads as the
            one thing here that asks for something back. */}
        <FadeIn delay={0.1}>
          <div className="bg-[#1a1a1a] p-10 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20">
              <div>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[#d4302a]">
                  The free guide
                </span>
                <h3 className="font-serif font-black text-white text-[clamp(30px,3.6vw,48px)] tracking-[-0.025em] leading-[1.02] mt-5 mb-5">
                  Asking Your Manager.
                </h3>
                <p className="font-body text-[17px] text-[#e8e5de] leading-[1.65] max-w-[520px]">
                  How to write to an American manager: clear, warm, direct,
                  and still you. A free 5-step guide for the small message
                  that somehow became a long paragraph before you got to the
                  point.
                </p>
              </div>
              <div className="lg:pt-10">
                <GuideForm inverted />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
