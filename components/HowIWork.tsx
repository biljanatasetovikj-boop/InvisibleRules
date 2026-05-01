import FadeIn from "./FadeIn";

const cohortAreas = [
  {
    label: "Mindset Outcomes",
    text: "Separate cultural friction from your actual performance — and rebuild an accurate picture of your own capability. Hold it steady even when the environment doesn't reflect it back.",
  },
  {
    label: "Immediate Skills",
    text: "Make your contributions visible. Advocate for yourself in ways that land as assured, not aggressive. Read the room — the informal signals, real decision-making dynamics, unspoken hierarchies.",
  },
  {
    label: "Long-term Outcomes",
    text: "Build the professional presence that gets you considered for things before you have to ask. Stop spending mental energy decoding the environment and start spending it on work that actually advances you.",
  },
  {
    label: "Business Outcomes",
    text: "Higher visibility with the people who influence your path. Stronger positioning for promotions, raises, and expanded responsibilities. Contributing at the level you were always capable of.",
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
            This isn&apos;t generic career advice.
            <br />
            <span className="italic">
              This is specific, earned, cultural intelligence.
            </span>
          </h2>
          <p className="text-lg text-[#6B6B6B] mb-16 max-w-2xl leading-relaxed">
            I work with non-Western professionals and the organizations that
            employ them through three different formats — depending on where you
            are and what you need.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
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
                  Private advisory sessions where we look at your specific
                  situation — your organization, your role, the dynamics
                  you&apos;re navigating — and build a clear picture of
                  what&apos;s actually happening and what to do about it.
                </p>
                <p>
                  This is for you if you want a thought partner who understands
                  the cultural layer, not just the career advice.
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
                For non-Western professionals ready to accelerate — together
              </p>
              <h3 className="font-serif text-2xl font-bold text-[#111111] mb-1">
                Global Cohort Program
              </h3>
              <p className="font-serif text-xl italic text-[#1B3557] mb-6">
                Stop navigating alone.
              </p>
              <p className="text-[#6B6B6B] leading-relaxed mb-8">
                A structured program for non-Western professionals working
                inside global companies who are done with quiet stalling and
                ready to move. You&apos;ll work through the invisible rules
                alongside a cohort of peers who understand exactly what
                you&apos;re up against — because they&apos;re in it too.
              </p>

              <div className="space-y-5 flex-1">
                {cohortAreas.map((area) => (
                  <div key={area.label} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C4923A] mt-2 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-[#111111] text-sm">
                        {area.label}:{" "}
                      </span>
                      <span className="text-[#6B6B6B] text-sm leading-relaxed">
                        {area.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

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

          {/* Workshops */}
          <FadeIn delay={0.2}>
            <div className="border border-[#E5E2DB] rounded-2xl p-8 bg-white h-full flex flex-col">
              <p className="text-xs uppercase tracking-widest text-[#C4923A] font-medium mb-2">
                For organizations with international teams
              </p>
              <h3 className="font-serif text-2xl font-bold text-[#111111] mb-6">
                Workshops & Training
              </h3>
              <div className="space-y-4 text-[#6B6B6B] leading-relaxed flex-1">
                <p>
                  A tailored workshop or training program for companies where
                  cultural friction is quietly undermining the performance of
                  international hires. I work with your team — HR, managers, or
                  the international employees themselves.
                </p>
                <p>
                  This isn&apos;t a diversity awareness session. It&apos;s a
                  working session that produces real behavioral shifts on both
                  sides: international employees who understand the rules better,
                  and local managers who understand what their international
                  colleagues are actually navigating.
                </p>
              </div>
              <a
                href="#lets-talk"
                className="mt-8 text-[#1B3557] font-medium hover:text-[#C4923A] transition-colors inline-block"
              >
                → Let&apos;s Talk about your team
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
