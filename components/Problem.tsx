import FadeIn from "./FadeIn";

export default function Problem() {
  return (
    <section
      id="the-problem"
      className="bg-[#0F1117] text-[#F0EDE8] py-24 lg:py-32 px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-xs uppercase tracking-widest text-[#C4923A] font-medium mb-5">
            Why This Exists
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-14">
            You&apos;re sensing more than you can name.
            <br />
            <span className="text-[#F0EDE8]/40 italic">
              And what you can&apos;t name, you can&apos;t act on.
            </span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-6 text-lg text-[#F0EDE8]/65 leading-relaxed max-w-3xl">
            <p>
              You&apos;re not imagining what you&apos;re sensing. The chill in a
              meeting after you spoke. The conversation you didn&apos;t get
              invited to. The promotion that went to someone with less experience.
              The feedback that contradicted itself. There&apos;s a pattern
              underneath all of it.
            </p>
            <p>
              The pattern is the unwritten rules. How decisions actually get made
              behind closed doors. How to advocate for yourself in a way that
              reads as confident rather than aggressive. What &ldquo;executive
              presence&rdquo; really means in these cultures. How trust gets
              built, and how it gets lost, in ways that can feel arbitrary when
              nobody explains them.
            </p>
            <p>
              When you can&apos;t see the rules, there&apos;s only one explanation
              left, and it&apos;s the wrong one:{" "}
              <span className="text-[#F0EDE8] italic">
                Maybe the problem is me. Maybe I&apos;m not as good as I thought.
              </span>
            </p>
            <p>
              You are. The rules were written for someone else. That doesn&apos;t
              mean you can&apos;t learn them.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <blockquote className="mt-16 border-l-2 border-[#C4923A] pl-8">
            <p className="font-serif text-2xl md:text-3xl text-[#F0EDE8] italic leading-snug">
              &ldquo;The work is about giving people back an accurate picture of
              their own capability.&rdquo;
            </p>
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}
