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
            You&apos;re past the beginner stage. You&apos;re capable. You&apos;re credible.
            <br />
            <span className="italic text-[#1B3557]">
              And somehow, you&apos;re still stuck.
            </span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-6 text-lg text-[#6B6B6B] leading-relaxed max-w-3xl">
            <p>
              You&apos;ve been in your role for a few years. You do good work. You
              get good feedback — sometimes. But you&apos;re not moving the way you
              expected to. Peers with similar experience seem to be advancing in
              ways that feel invisible to you.
            </p>
            <p>
              You&apos;re probably not missing skills. You&apos;re missing context. The
              informal rules about how to be read in your organization. How to
              build influence. How to make your contributions land the way they
              deserve to.
            </p>
            <p>
              You might be carrying this as a private weight — taking up enormous
              mental space, affecting your income, affecting your confidence,
              affecting whether you stay or leave a place that actually needs you.
            </p>
            <p className="text-[#111111] font-medium text-xl">
              This is the work I do with you.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
