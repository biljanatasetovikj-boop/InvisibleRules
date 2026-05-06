import FadeIn from "./FadeIn";

const cohortPillars = [
  {
    label: "See the system without absorbing it",
    text: "Most cultural training treats the dominant culture as the standard and you as the deficit. We do the opposite. You learn to read it from the outside while operating inside it. The dominant culture stops being the “real” one. It becomes one room you know how to walk into.",
  },
  {
    label: "Reclaim what you bring",
    text: "Your original culture isn’t baggage. It’s an asset your colleagues don’t have. The warmth from a relational culture. The ability to read what isn’t being said. The precision drilled in by training abroad. The work is learning to deploy them for the room you’re in.",
  },
  {
    label: "Choose your adaptation",
    text: "Adaptation stops being a demand. It becomes a strategic skill you choose. The way a bilingual person doesn’t feel less themselves when speaking their second language. That choice requires knowing yourself: what’s driving you, what kind of career fits, what you want to be known for. From there you draw your own line. Which adaptations are strategic. Which are who you are.",
  },
];

export default function HowIWork() {
  return (
    <section id="how-i-work" className="py-24 lg:py-32 px-6 lg:px-8 bg-[#F4F1EC]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-xs uppercase tracking-widest text-[#C4923A] font-medium mb-5">
            The Approach
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-[#111111]">
            How I Work.
            <br />
            <span className="italic">
              Two formats. Which one fits depends on where you are.
            </span>
          </h2>
          <p className="text-lg text-[#6B6B6B] mb-16 max-w-2xl leading-relaxed">
            I work with professionals inside global organizations.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* 1:1 Advisory */}
          <FadeIn delay={0}>
            <div className="border border-[#E5E2DB] rounded-2xl p-8 bg-white h-full flex flex-col">
              <p className="text-xs uppercase tracking-widest text-[#C4923A] font-medium mb-2">
                For professionals who want to work through this privately
              </p>
              <h3 className="font-serif text-2xl font-bold text-[#111111] mb-6">
                1:1 Advisory
              </h3>
              <div className="space-y-4 text-[#6B6B6B] leading-relaxed flex-1">
                <p>
                  Private sessions. We look at your specific organization,
                  your role, the situation in front of you, and we work out
                  what&apos;s actually going on and what to do next.
                </p>
              </div>
              <a
                href="#lets-talk"
                className="mt-8 text-[#1B3557] font-medium hover:text-[#C4923A] transition-colors inline-block"
              >
                → Let&apos;s Talk
              </a>
            </div>
          </FadeIn>

          {/* Cohort Program */}
          <FadeIn delay={0.1}>
            <div className="border-2 border-[#1B3557] rounded-2xl p-8 bg-white relative flex flex-col">
              <div className="absolute -top-3.5 left-8">
                <span className="bg-[#1B3557] text-white text-xs px-3 py-1.5 rounded-full font-medium">
                  Launching soon
                </span>
              </div>
              <p className="text-xs uppercase tracking-widest text-[#C4923A] font-medium mb-2 mt-2">
                For professionals ready to stop navigating alone
              </p>
              <h3 className="font-serif text-2xl font-bold text-[#111111] mb-6">
                Global Cohort Program
              </h3>
              <p className="text-[#6B6B6B] leading-relaxed mb-8">
                Most cultural training delivers information. This program
                delivers experience. An integrated experience of being
                culturally fluent while staying whole.
              </p>

              <div className="space-y-5 flex-1">
                {cohortPillars.map((pillar) => (
                  <div key={pillar.label} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C4923A] mt-2 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-[#111111] text-sm">
                        {pillar.label}.{" "}
                      </span>
                      <span className="text-[#6B6B6B] text-sm leading-relaxed">
                        {pillar.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-[#6B6B6B] text-sm leading-relaxed">
                The shift is from “I’m failing at being them” to “I’m
                skilled at operating across cultures, including theirs.”
                Not a list of cultural rules. Not a personality makeover.
                A different relationship to adaptation, one that doesn’t
                cost you your self.
              </p>

              <div className="mt-8">
                <a
                  href="#lets-talk"
                  className="inline-flex items-center gap-2 bg-[#1B3557] text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-[#16294A] transition-colors"
                >
                  Join the Waitlist →
                </a>
                <p className="text-xs text-[#6B6B6B] mt-3 leading-relaxed">
                  The cohort is in development. Get on the list to be notified
                  first and shape what it becomes.
                </p>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
