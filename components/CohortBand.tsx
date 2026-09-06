import FadeIn from "./FadeIn";

// Homepage pointer to /learn-the-rules. Deliberately short — its only job is
// to make sure the offer is reachable from the front page.
export default function CohortBand() {
  return (
    <section className="py-24 bg-[#1a1a1a] border-t-2 border-[#1a1a1a]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-20 items-end">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[#d4302a]">
                  The cohort — October 2026
                </span>
                <span className="w-10 h-px bg-[#4a4a4a]" />
              </div>
              <h2 className="font-serif font-black text-white text-[clamp(38px,5.5vw,68px)] tracking-[-0.025em] leading-none mb-6">
                Learn the <span className="text-[#d4302a] italic">Rules</span>.
              </h2>
              <p className="font-body text-[19px] leading-[1.65] text-[#e8e5de] max-w-[620px]">
                Five weeks, eight people, starting 12 October. You cannot learn
                this in a mirror — so you run the moves in front of someone who
                reads what you send back.
              </p>
            </div>

            <div className="lg:text-right">
              <a
                href="/learn-the-rules"
                className="inline-block bg-white text-[#1a1a1a] px-9 py-4 font-sans text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-[#d4302a] hover:text-white transition-colors"
              >
                See the five weeks →
              </a>
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-[#a8a8a8] mt-5">
                Applications close 9 October
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
