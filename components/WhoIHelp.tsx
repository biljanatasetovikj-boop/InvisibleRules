import FadeIn from "./FadeIn";

export default function WhoIHelp() {
  return (
    <section
      id="who-i-help"
      className="py-28 bg-[#fafaf7] border-t-2 border-[#1a1a1a]"
    >
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-22 items-start">
          <FadeIn>
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[#d4302a]">
                  03 — Who it&apos;s for
                </span>
                <span className="w-10 h-px bg-[#e0ddd5]" />
              </div>
              <h2 className="font-serif font-black text-[#1a1a1a] text-[clamp(42px,6vw,82px)] tracking-[-0.025em] leading-none mb-6">
                This is
                <br />
                for <span className="text-[#d4302a] italic">you</span>.
              </h2>
              <p className="font-body text-[21px] leading-[1.65] text-[#3a3a3a] max-w-[740px] mb-16">
                If you&apos;ve ever felt like the rules were obvious to everyone but you — this is
                for you.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <ul className="list-none">
              <li className="py-6 flex gap-5 items-baseline border-t border-b border-[#e0ddd5]">
                <span className="flex-none w-7 pt-1 font-sans text-[10px] font-bold tracking-[0.1em] text-[#d4302a]">
                  01
                </span>
                <span className="font-body text-xl leading-[1.5] text-[#1a1a1a]">
                  You&apos;re highly competent, often more than your peers, yet
                  somehow{" "}
                  <em className="italic text-[#d4302a] font-medium">
                    less visible
                  </em>
                  .
                </span>
              </li>
              <li className="py-6 flex gap-5 items-baseline border-b border-[#e0ddd5]">
                <span className="flex-none w-7 pt-1 font-sans text-[10px] font-bold tracking-[0.1em] text-[#d4302a]">
                  02
                </span>
                <span className="font-body text-xl leading-[1.5] text-[#1a1a1a]">
                  You&apos;ve built your career without ever{" "}
                  <em className="italic text-[#d4302a] font-medium">
                    living or studying
                  </em>{" "}
                  in the countries where your company and Western colleagues
                  operate.
                </span>
              </li>
              <li className="py-6 flex gap-5 items-baseline border-b border-[#e0ddd5]">
                <span className="flex-none w-7 pt-1 font-sans text-[10px] font-bold tracking-[0.1em] text-[#d4302a]">
                  03
                </span>
                <span className="font-body text-xl leading-[1.5] text-[#1a1a1a]">
                  No one ever taught you this was a skill. You assumed{" "}
                  <em className="italic text-[#d4302a] font-medium">
                    results would speak for themselves
                  </em>
                  .
                </span>
              </li>
              <li className="py-6 flex gap-5 items-baseline border-b border-[#e0ddd5]">
                <span className="flex-none w-7 pt-1 font-sans text-[10px] font-bold tracking-[0.1em] text-[#d4302a]">
                  04
                </span>
                <span className="font-body text-xl leading-[1.5] text-[#1a1a1a]">
                  You navigate additional layers such as{" "}
                  <em className="italic text-[#d4302a] font-medium">
                    accent, name, and cultural communication style
                  </em>{" "}
                  that make the standard playbook harder to apply.
                </span>
              </li>
              <li className="py-6 flex gap-5 items-baseline border-b border-[#e0ddd5]">
                <span className="flex-none w-7 pt-1 font-sans text-[10px] font-bold tracking-[0.1em] text-[#d4302a]">
                  05
                </span>
                <span className="font-body text-xl leading-[1.5] text-[#1a1a1a]">
                  No one in your corner has explained these dynamics in a way
                  that{" "}
                  <em className="italic text-[#d4302a] font-medium">
                    accounts for where you&apos;re starting from
                  </em>
                  .
                </span>
              </li>
              <li className="py-6 flex gap-5 items-baseline border-b border-[#e0ddd5]">
                <span className="flex-none w-7 pt-1 font-sans text-[10px] font-bold tracking-[0.1em] text-[#d4302a]">
                  06
                </span>
                <span className="font-body text-xl leading-[1.5] text-[#1a1a1a]">
                  You&apos;re done guessing and ready to work with someone{" "}
                  <em className="italic text-[#d4302a] font-medium">
                    who has actually lived this
                  </em>
                  .
                </span>
              </li>
              <li className="py-6 flex gap-5 items-baseline border-b border-[#e0ddd5]">
                <span className="flex-none w-7 pt-1 font-sans text-[10px] font-bold tracking-[0.1em] text-[#d4302a]">
                  07
                </span>
                <span className="font-body text-xl leading-[1.5] text-[#1a1a1a]">
                  You don&apos;t want to sound like everyone else. You want{" "}
                  <em className="italic text-[#d4302a] font-medium">
                    your value to come across clearly
                  </em>
                  .
                </span>
              </li>
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
