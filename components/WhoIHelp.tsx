import FadeIn from "./FadeIn";

export default function WhoIHelp() {
  return (
    <section
      id="who-i-help"
      className="py-28 bg-[#fafaf7] border-t-2 border-[#1a1a1a]"
    >
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <h2 className="sr-only">Who this is for</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <FadeIn delay={0} className="h-full">
            <div className="bg-white border-t-4 border-[#d4302a] p-8 h-full">
              <p className="font-body text-[17px] leading-[1.6] text-[#1a1a1a]">
                You&apos;re highly competent, often more than your peers, yet
                somehow{" "}
                <em className="italic text-[#d4302a] font-medium">
                  less visible
                </em>
                .
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.07} className="h-full">
            <div className="bg-white border-t-4 border-[#d4302a] p-8 h-full">
              <p className="font-body text-[17px] leading-[1.6] text-[#1a1a1a]">
                You&apos;ve built your career without ever{" "}
                <em className="italic text-[#d4302a] font-medium">
                  living or studying
                </em>{" "}
                in the countries where your company and Western colleagues
                operate.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.14} className="h-full">
            <div className="bg-white border-t-4 border-[#d4302a] p-8 h-full">
              <p className="font-body text-[17px] leading-[1.6] text-[#1a1a1a]">
                No one ever taught you this was a skill. You assumed{" "}
                <em className="italic text-[#d4302a] font-medium">
                  results would speak for themselves
                </em>
                .
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.21} className="h-full">
            <div className="bg-white border-t-4 border-[#d4302a] p-8 h-full">
              <p className="font-body text-[17px] leading-[1.6] text-[#1a1a1a]">
                You navigate additional layers such as{" "}
                <em className="italic text-[#d4302a] font-medium">
                  accent, name, and cultural communication style
                </em>{" "}
                that make the standard playbook harder to apply.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.28} className="h-full">
            <div className="bg-white border-t-4 border-[#d4302a] p-8 h-full">
              <p className="font-body text-[17px] leading-[1.6] text-[#1a1a1a]">
                No one in your corner has explained these dynamics in a way
                that{" "}
                <em className="italic text-[#d4302a] font-medium">
                  accounts for where you&apos;re starting from
                </em>
                .
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.35} className="h-full">
            <div className="bg-white border-t-4 border-[#d4302a] p-8 h-full">
              <p className="font-body text-[17px] leading-[1.6] text-[#1a1a1a]">
                You&apos;re done guessing and ready to work with someone{" "}
                <em className="italic text-[#d4302a] font-medium">
                  who has actually lived this
                </em>
                .
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
