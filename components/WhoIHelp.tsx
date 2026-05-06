import FadeIn from "./FadeIn";

export default function WhoIHelp() {
  return (
    <section
      id="who-i-help"
      className="py-24 lg:py-32 px-6 lg:px-8 bg-[#FAFAF7]"
    >
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-xs uppercase tracking-widest text-[#C4923A] font-medium mb-5">
            Who This Is For
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-14 text-[#111111]">
            Competent. Several years in.
            <br />
            <span className="italic text-[#1B3557]">
              Reading a room nobody briefed you on.
            </span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-6 text-lg text-[#6B6B6B] leading-relaxed max-w-3xl">
            <p>
              If you grew up and were professionally formed in Eastern
              Europe, the Balkans, or Southeast Asia, and now work fully
              remotely for a Western-headquartered company (North America,
              the UK, the Nordics) with no office in your country, this
              work is for you.
            </p>
            <p>
              Most of your colleagues are in another time zone and a
              different culture. Every meeting you take is in your second
              or third language. The informal moments where you used to
              pick up the rules have mostly disappeared.
            </p>
            <p>
              You are competent. Several years in. Told you&apos;re too
              direct, too quiet, too formal, too much. Or not quite
              leadership material. You suspect the feedback says more
              about the room than about you.
            </p>
            <p>
              You&apos;ve succeeded at adapting and you&apos;re wondering
              why it feels hollow. You are not asking how to get hired
              remotely. You are asking why, despite delivering, you feel
              drained and quietly off-track.
            </p>
            <p className="text-[#111111] font-medium text-xl">
              If you keep wondering why visibility isn&apos;t building, why
              feedback contradicts itself, why the promotion went somewhere
              else, this is the work.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
