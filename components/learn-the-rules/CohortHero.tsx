import FadeIn from "../FadeIn";
import { cohortMeta, premise } from "@/lib/cohort-data";

export default function CohortHero() {
  return (
    <section className="pt-20 pb-24 lg:pt-28 lg:pb-28">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[#d4302a]">
              {cohortMeta.kicker}
            </span>
            <span className="w-10 h-px bg-[#e0ddd5]" />
          </div>

          <h1 className="font-serif font-black text-[#1a1a1a] text-[clamp(48px,8vw,110px)] tracking-[-0.03em] leading-[0.95] mb-8">
            Learn the <span className="text-[#d4302a] italic">Rules</span>.
          </h1>

          <p className="font-body text-[clamp(19px,2.2vw,23px)] leading-[1.6] text-[#3a3a3a] max-w-[820px] mb-12">
            {cohortMeta.standfirst}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <ul className="flex flex-wrap gap-x-8 gap-y-3 border-t-2 border-b border-t-[#1a1a1a] border-b-[#e0ddd5] py-5 list-none mb-20">
            {cohortMeta.strip.map((item) => (
              <li
                key={item}
                className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-[#1a1a1a]"
              >
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-10 lg:gap-20 items-start">
            <h2 className="font-serif font-black text-[#1a1a1a] text-[clamp(34px,4.5vw,58px)] tracking-[-0.025em] leading-[1.02]">
              A cohort,
              <br />
              not a <span className="text-[#d4302a] italic">course</span>.
            </h2>
            <div>
              <p className="font-body text-[19px] leading-[1.7] text-[#3a3a3a] mb-6">
                {premise.body}
              </p>
              <p className="font-serif italic text-[#d4302a] text-[22px] leading-[1.4]">
                {premise.note}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
