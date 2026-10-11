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
            <span className="font-sans text-[12px] font-bold uppercase tracking-[0.28em] text-[#d4302a]">
              Free tools
            </span>
            <span className="w-10 h-px bg-[#e0ddd5]" />
          </div>
        </FadeIn>

        {/* Each quiz is one oversized row, pulled out to the gutters so the
            red reads edge to edge. */}
        <div className="mb-20">
          {quizzes.map((q, i) => (
            <FadeIn key={q.title} delay={i * 0.08}>
              <a
                href={q.href}
                className={`group block bg-[#d4302a] border-b-[3px] border-[#1a1a1a] -mx-6 px-6 lg:-mx-12 lg:px-12 ${
                  i === 0 ? "border-t-[3px]" : ""
                }`}
              >
                <div className="py-11 grid grid-cols-[1fr_auto] gap-8 items-center">
                  <div>
                    <h3 className="font-serif font-black text-white text-[clamp(32px,5.4vw,72px)] tracking-[-0.03em] leading-[0.98] mb-4">
                      {q.title}
                    </h3>
                    <p className="font-body text-[17px] text-white/90 leading-[1.6] max-w-[620px] mb-4">
                      {q.body}
                    </p>
                    <span className="font-sans text-[12px] font-bold uppercase tracking-[0.22em] text-white/75">
                      {q.meta}
                    </span>
                  </div>
                  <span
                    aria-hidden
                    className="font-serif text-[clamp(34px,5vw,64px)] leading-none text-white transition-transform duration-300 group-hover:translate-x-3"
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
          <div className="bg-[#1a1a1a] -mx-6 lg:-mx-12 px-6 py-10 lg:px-12 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20">
              <div>
                <span className="font-sans text-[12px] font-bold uppercase tracking-[0.28em] text-[#d4302a]">
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
