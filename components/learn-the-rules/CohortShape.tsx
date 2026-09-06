import FadeIn from "../FadeIn";
import { weekShape } from "@/lib/cohort-data";

export default function CohortShape() {
  return (
    <section className="py-28 bg-[#fafaf7] border-t-2 border-[#1a1a1a]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[#d4302a]">
              01 — How a week works
            </span>
            <span className="w-10 h-px bg-[#e0ddd5]" />
          </div>
          <h2 className="font-serif font-black text-[#1a1a1a] text-[clamp(38px,5.5vw,72px)] tracking-[-0.025em] leading-none mb-6 max-w-[900px]">
            You send me your work.
            <br />
            I <span className="text-[#d4302a] italic">write back</span>.
          </h2>
          <p className="font-body text-[21px] leading-[1.65] text-[#3a3a3a] max-w-[740px] mb-16">
            A move you make once is a story. A move you repeat is a different
            career. What holds the repetition is not the system you go back
            into — it is having someone watch you run it, badly at first, and
            tell you what they saw.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {weekShape.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.07} className="h-full">
              <div className="bg-white border-t-4 border-[#d4302a] p-7 h-full">
                <div className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-[#d4302a] mb-3.5">
                  — {item.label}
                </div>
                <p className="font-body text-[16px] text-[#3a3a3a] leading-[1.65]">
                  {item.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
