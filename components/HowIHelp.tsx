import FadeIn from "./FadeIn";
import WaitlistForm from "./WaitlistForm";

export default function HowIHelp() {
  return (
    <section id="how-i-help" className="py-20 md:py-28 border-t-2 border-[#1a1a1a]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-sans text-[12px] font-bold uppercase tracking-[0.28em] text-[#d4302a]">
              How I help
            </span>
            <span className="w-10 h-px bg-[#e0ddd5]" />
          </div>
          <h2 className="font-serif font-black text-[#1a1a1a] text-[clamp(42px,6vw,82px)] tracking-[-0.025em] leading-none mb-6 max-w-[960px]">
            Three ways to work with me.
          </h2>
          <p className="font-body text-[21px] leading-[1.65] text-[#3a3a3a] max-w-[740px] mb-16">
            Everything I do follows the same three steps: decode the rule,
            adapt without losing yourself, and move.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-13">
          <FadeIn delay={0}>
            <div className="border-t-4 border-[#d4302a] pt-7 flex flex-col h-full">
              <h3 className="font-serif italic font-black text-[28px] text-[#1a1a1a] tracking-[-0.02em] leading-[1.1] mb-4">
                The Decoder
              </h3>
              <p className="font-body text-base text-[#3a3a3a] leading-[1.7] mb-4">
                Something happened at work and you can&apos;t tell if it was
                you, them, or culture. The Decoder walks you through it in
                three steps: name the moment, decode the rule behind it,
                then choose your move and hold it when it feels
                uncomfortable.
              </p>
              <p className="font-serif italic text-[#d4302a] text-[16px] mb-6">
                I&apos;m building it now.
              </p>
              <div className="mt-auto">
                <WaitlistForm
                  triggerLabel="Join the Decoder waitlist →"
                  subjectTag="Decoder"
                  signedUpFor="The Decoder — the app, not yet released"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="border-t-4 border-[#d4302a] pt-7 flex flex-col h-full">
              <h3 className="font-serif italic font-black text-[28px] text-[#1a1a1a] tracking-[-0.02em] leading-[1.1] mb-4">
                The spring cohort
              </h3>
              <p className="font-body text-base text-[#3a3a3a] leading-[1.7] mb-4">
                Five weeks. Eight people. You bring real situations from your
                own work, and we decode them together.
              </p>
              <p className="font-body text-base text-[#3a3a3a] leading-[1.7] mb-4">
                Each week: one hour with me, and one hour with a guest who
                knows a Western workplace culture from the inside. You also
                look at your own culture, because that is where the rules
                you carry come from.
              </p>
              <p className="font-body text-base text-[#3a3a3a] leading-[1.7] mb-4">
                You leave with the Decoder method, practised on your own
                cases, and recordings to come back to.
              </p>
              <a
                href="/learn-the-rules"
                className="group self-start mb-2 py-2.5 inline-block font-serif italic text-[#1a1a1a] text-[16px] hover:text-[#d4302a] transition-colors"
              >
                <span className="underline decoration-[#e0ddd5] decoration-1 underline-offset-4 group-hover:decoration-[#d4302a] transition-colors">
                  See how the five weeks work
                </span>{" "}
                →
              </a>
              <p className="font-serif italic text-[#d4302a] text-[16px] mb-6">
                Enrolment opens in January 2027.
              </p>
              <div className="mt-auto">
                <WaitlistForm
                  triggerLabel="Join the cohort waitlist →"
                  subjectTag="Spring 2027 cohort"
                  signedUpFor="Learn the Rules — the Spring 2027 cohort, five weeks, eight people"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="border-t-4 border-[#d4302a] pt-7 flex flex-col h-full">
              <h3 className="font-serif italic font-black text-[28px] text-[#1a1a1a] tracking-[-0.02em] leading-[1.1] mb-4">
                One to one
              </h3>
              <p className="font-body text-base text-[#3a3a3a] leading-[1.7] mb-4">
                Bring me one situation you can&apos;t read. A meeting that
                went cold. An email you don&apos;t know how to answer.
                Feedback that doesn&apos;t add up. We look at it together,
                name the rule, and find a move that still sounds like you.
              </p>
              <p className="font-serif italic text-[#d4302a] text-[16px] mb-6">
                It&apos;s free.
              </p>
              <div className="mt-auto">
                <a
                  href="https://cal.com/biljana-tasetovikj-wblqwh/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-3 font-sans text-[13px] font-bold uppercase tracking-[0.18em] text-[#1a1a1a] hover:text-[#d4302a] transition-colors"
                >
                  Book a free session ↗
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
