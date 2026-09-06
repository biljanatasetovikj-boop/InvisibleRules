import FadeIn from "../FadeIn";
import { weeks } from "@/lib/cohort-data";

export default function CohortWeeks() {
  return (
    <section id="the-five-weeks" className="py-28 border-t-2 border-[#1a1a1a]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[#d4302a]">
              02 — The five weeks
            </span>
            <span className="w-10 h-px bg-[#e0ddd5]" />
          </div>
          <h2 className="font-serif font-black text-[#1a1a1a] text-[clamp(38px,5.5vw,72px)] tracking-[-0.025em] leading-none mb-16 max-w-[900px]">
            What we actually <span className="text-[#d4302a] italic">do</span>.
          </h2>
        </FadeIn>

        <div className="space-y-0">
          {weeks.map((week, i) => (
            <FadeIn key={week.number} delay={i * 0.05}>
              <article className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6 lg:gap-16 border-t-2 border-[#1a1a1a] py-12">
                <div>
                  <div className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-[#d4302a] mb-2">
                    {week.number}
                  </div>
                  <div className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-[#707070]">
                    {week.date}
                  </div>
                </div>

                <div>
                  <h3 className="font-serif italic font-black text-[clamp(28px,3.2vw,40px)] text-[#1a1a1a] tracking-[-0.02em] leading-[1.08] mb-5">
                    {week.title}
                  </h3>
                  <p className="font-body text-[18px] text-[#3a3a3a] leading-[1.7] max-w-[720px] mb-7">
                    {week.teaches}
                  </p>
                  <div className="border-l-4 border-[#d4302a] pl-6 max-w-[720px]">
                    <div className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-[#d4302a] mb-2">
                      Homework
                    </div>
                    <p className="font-body text-[17px] text-[#1a1a1a] leading-[1.65]">
                      {week.homework}
                    </p>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
