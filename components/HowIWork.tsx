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
    label: "Use both",
    text: "Reading the system and knowing yourself only matter if you act on both. We work on doing that, with strategy and with cultural fluency, in a way that holds up as workplaces keep changing.",
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
                A program for professionals working through this alongside
                others in the same terrain.
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

        </div>
      </div>
    </section>
  );
}
