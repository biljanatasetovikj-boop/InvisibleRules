import FadeIn from "../FadeIn";
import { faqs } from "@/lib/cohort-data";

export default function CohortFaq() {
  return (
    <section className="py-28 bg-[#fafaf7] border-t-2 border-[#1a1a1a]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[#d4302a]">
              07 — Questions
            </span>
            <span className="w-10 h-px bg-[#e0ddd5]" />
          </div>
          <h2 className="font-serif font-black text-[#1a1a1a] text-[clamp(38px,5.5vw,72px)] tracking-[-0.025em] leading-none mb-16 max-w-[900px]">
            The awkward ones,
            <br />
            answered <span className="text-[#d4302a] italic">plainly</span>.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
          {faqs.map((item, i) => (
            <FadeIn key={item.q} delay={i * 0.04}>
              <div className="border-t-2 border-[#1a1a1a] py-8">
                <h3 className="font-serif italic font-black text-[24px] text-[#1a1a1a] leading-[1.2] mb-4">
                  {item.q}
                </h3>
                <p className="font-body text-[17px] text-[#3a3a3a] leading-[1.7]">
                  {item.a}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
