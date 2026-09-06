import FadeIn from "../FadeIn";
import { outcomes } from "@/lib/cohort-data";

export default function CohortOutcomes() {
  return (
    <section className="py-28 bg-[#1a1a1a] border-t-2 border-[#1a1a1a]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[#d4302a]">
              03 — What you leave with
            </span>
            <span className="w-10 h-px bg-[#4a4a4a]" />
          </div>
          <h2 className="font-serif font-black text-white text-[clamp(38px,5.5vw,72px)] tracking-[-0.025em] leading-none mb-16 max-w-[900px]">
            Six things, and none of them
            <br />
            is a <span className="text-[#d4302a] italic">certificate</span>.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {outcomes.map((item, i) => (
            <FadeIn key={item} delay={i * 0.05}>
              <div className="flex gap-5">
                <span className="font-sans text-[11px] font-bold text-[#d4302a] pt-1.5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-body text-[18px] text-[#e8e5de] leading-[1.65]">
                  {item}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
