import FadeIn from "../FadeIn";
import { forYou, notForYou } from "@/lib/cohort-data";

export default function CohortFit() {
  return (
    <section id="who-its-for" className="py-28 border-t-2 border-[#1a1a1a]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[#d4302a]">
              04 — Who this is for
            </span>
            <span className="w-10 h-px bg-[#e0ddd5]" />
          </div>
          <h2 className="font-serif font-black text-[#1a1a1a] text-[clamp(38px,5.5vw,72px)] tracking-[-0.025em] leading-none mb-16 max-w-[900px]">
            Eight seats. They should go
            <br />
            to the <span className="text-[#d4302a] italic">right</span> eight.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <FadeIn delay={0.05}>
            <h3 className="font-serif italic text-[#d4302a] text-[clamp(24px,3vw,32px)] mb-8">
              This is for you if
            </h3>
            <ul className="list-none space-y-6">
              {forYou.map((item) => (
                <li key={item} className="border-t border-[#e0ddd5] pt-5">
                  <p className="font-body text-[18px] text-[#1a1a1a] leading-[1.65]">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.12}>
            <h3 className="font-serif italic text-[#707070] text-[clamp(24px,3vw,32px)] mb-8">
              This is not for you if
            </h3>
            <ul className="list-none space-y-6">
              {notForYou.map((item) => (
                <li key={item} className="border-t border-[#e0ddd5] pt-5">
                  <p className="font-body text-[18px] text-[#707070] leading-[1.65]">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
