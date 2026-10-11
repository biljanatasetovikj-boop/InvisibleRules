import FadeIn from "./FadeIn";
import GuideForm from "./GuideForm";

export default function FreeTools() {
  return (
    <section
      id="free-tools"
      className="py-28 bg-[#fafaf7] border-t-2 border-[#1a1a1a]"
    >
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[#d4302a]">
              Free tools
            </span>
            <span className="w-10 h-px bg-[#e0ddd5]" />
          </div>
          <h2 className="font-serif font-black text-[#1a1a1a] text-[clamp(42px,6vw,82px)] tracking-[-0.025em] leading-none mb-16 max-w-[960px]">
            Not sure where to start?
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          <FadeIn delay={0}>
            <div className="bg-white border-t-4 border-[#d4302a] p-8 h-full flex flex-col">
              <h3 className="font-serif font-bold text-[#1a1a1a] text-[22px] leading-[1.2] tracking-[-0.01em] mb-4">
                The Diagnostic
              </h3>
              <p className="font-body text-[16px] text-[#3a3a3a] leading-[1.65] mb-6">
                A few questions to see whether what you are feeling at work
                is a cultural pattern, or something else.
              </p>
              <div className="mt-auto">
                <a
                  href="/quiz"
                  className="inline-block bg-[#1a1a1a] text-white px-7 py-3.5 font-sans text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-[#d4302a] transition-colors"
                >
                  Take the diagnostic →
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white border-t-4 border-[#d4302a] p-8 h-full flex flex-col">
              <h3 className="font-serif font-bold text-[#1a1a1a] text-[22px] leading-[1.2] tracking-[-0.01em] mb-4">
                Your Archetype
              </h3>
              <p className="font-body text-[16px] text-[#3a3a3a] leading-[1.65] mb-6">
                Find out which of the five archetypes shapes how you show up
                at work, and what it costs you.
              </p>
              <div className="mt-auto">
                <a
                  href="/archetype-quiz"
                  className="inline-block bg-[#1a1a1a] text-white px-7 py-3.5 font-sans text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-[#d4302a] transition-colors"
                >
                  Find your archetype →
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white border-t-4 border-[#d4302a] p-8 h-full flex flex-col">
              <h3 className="font-serif font-bold text-[#1a1a1a] text-[22px] leading-[1.2] tracking-[-0.01em] mb-4">
                Asking Your Manager: A Short Guide
              </h3>
              <p className="font-body text-[16px] text-[#3a3a3a] leading-[1.65] mb-6">
                How to write to an American manager: clear, warm, direct, and
                still you. A free 5-step guide for the small message that
                somehow became a long paragraph before you got to the point.
              </p>
              <div className="mt-auto">
                <GuideForm />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
