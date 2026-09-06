import FadeIn from "../FadeIn";
import { details } from "@/lib/cohort-data";

export default function CohortDetails() {
  return (
    <section className="py-28 bg-[#fafaf7] border-t-2 border-[#1a1a1a]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">
          <FadeIn>
            <div className="flex items-center gap-3 mb-5">
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[#d4302a]">
                05 — The details
              </span>
              <span className="w-10 h-px bg-[#e0ddd5]" />
            </div>
            <h2 className="font-serif font-black text-[#1a1a1a] text-[clamp(34px,4.5vw,58px)] tracking-[-0.025em] leading-[1.02] mb-7">
              Everything you would
              <br />
              want to <span className="text-[#d4302a] italic">check</span>.
            </h2>
            <a
              href="#apply"
              className="inline-block bg-[#1a1a1a] text-white px-9 py-4 font-sans text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-[#d4302a] transition-colors"
            >
              Book a conversation →
            </a>
          </FadeIn>

          <FadeIn delay={0.1}>
            <dl className="bg-white border-t-4 border-[#d4302a] px-8 py-4">
              {details.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-8 py-5 border-b border-[#e0ddd5] last:border-b-0"
                >
                  <dt className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-[#707070] sm:w-[170px] shrink-0">
                    {row.label}
                  </dt>
                  <dd className="font-body text-[18px] text-[#1a1a1a] leading-[1.5] m-0">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
