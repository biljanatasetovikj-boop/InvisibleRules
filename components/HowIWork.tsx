import FadeIn from "./FadeIn";

const phases = [
  {
    phase: "Phase one",
    title: "Decode",
    text: "The unwritten rules of communication, hierarchy, disagreement, and visibility — named clearly, not abstractly. So you can finally see the patterns that have been costing you.",
  },
  {
    phase: "Phase two",
    title: "Adapt",
    text: "Fluency, not assimilation. You keep your voice and identity — and gain the language to move with confidence in rooms that weren't designed with you in mind.",
  },
  {
    phase: "Phase three",
    title: "Move",
    text: "From decoded knowledge to actual practice: how to push back, negotiate, be visible without performing. Where the work meets the world.",
  },
];

export default function HowIWork() {
  return (
    <section id="how-i-work" className="py-28 border-t-2 border-[#1a1a1a]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[#d4302a]">
              02 — The work
            </span>
            <span className="w-10 h-px bg-[#e0ddd5]" />
          </div>
          <h2 className="font-serif font-black text-[#1a1a1a] text-[clamp(42px,6vw,82px)] tracking-[-0.025em] leading-none mb-6 max-w-[960px]">
            Most of what holds people back
            <br />
            isn&apos;t <span className="text-[#d4302a] italic">talent</span>.
          </h2>
          <p className="font-body text-[21px] leading-[1.65] text-[#3a3a3a] max-w-[740px] mb-16">
            It&apos;s the rules nobody taught you. There&apos;s a gap between what you can do and how
            you&apos;re perceived. Between contributing and being heard. I work with you to close
            it — <em className="italic text-[#d4302a]">without losing who you are</em>.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-13">
          {phases.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.1}>
              <div className="border-t-4 border-[#d4302a] pt-7">
                <div className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-[#d4302a] mb-3.5">
                  — {p.phase}
                </div>
                <h3 className="font-serif italic font-black text-[36px] text-[#1a1a1a] tracking-[-0.02em] leading-none mb-4">
                  {p.title}
                </h3>
                <p className="font-body text-base text-[#3a3a3a] leading-[1.7]">{p.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
