import FadeIn from "./FadeIn";

const cohortPillars = [
  {
    label: "Read the room you're in",
    text: "You learn to see what's shaping decisions in your organization. How trust gets built, how visibility happens, what 'executive presence' looks like in your specific culture. Once you can see the system, you stop guessing how to operate inside it.",
  },
  {
    label: "Know what drives your work",
    text: "We work out what's actually driving you, what kind of career fits the person you are, and what you want to be known for. The kind of career work most advice skips entirely.",
  },
  {
    label: "Build the bridge between them",
    text: "What you've learned about your organization and what you've learned about yourself only matter if you can use both. So we work on using both, with strategy and cultural fluency, in a way that stays useful as workplaces and norms keep changing.",
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
              It&apos;s cultural intelligence, earned by living it.
            </span>
          </h2>
          <p className="text-lg text-[#6B6B6B] mb-16 max-w-2xl leading-relaxed">
            I work with non-Western professionals and the organizations that
            employ them, in three different formats. Which one fits depends on
            where you are and what you need.
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
                  Private advisory sessions. We look at your specific situation:
                  your organization, your role, the dynamics you&apos;re
                  navigating. From there we build a clear picture of what&apos;s
                  happening and what to do about it.
                </p>
                <p>
                  This is for you if you want a thought partner who understands
                  the cultural layer beneath the career mechanics.
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
              <h3 className="font-serif text-2xl font-bold text-[#111111] mb-1">
                Global Cohort Program
              </h3>
              <p className="font-serif text-xl italic text-[#1B3557] mb-6">
                Read the room. Show up as yourself. Move on your terms.
              </p>
              <p className="text-[#6B6B6B] leading-relaxed mb-8">
                A structured program for professionals navigating global
                organizations, alongside a cohort that&apos;s in the same
                terrain.
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
                  international hires. I work with your team: HR, managers, or
                  the international employees themselves.
                </p>
                <p>
                  This isn&apos;t a diversity awareness session. It&apos;s a
                  working session that produces real behavioral shifts on both
                  sides: international employees who understand the rules better,
                  and local managers who understand what their international
                  colleagues are navigating.
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
