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
            Global companies have figured out how to hire internationally.
            <br />
            <span className="text-[#F0EDE8]/40 italic">
              They haven&apos;t figured out how to help those hires actually succeed.
            </span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-6 text-lg text-[#F0EDE8]/65 leading-relaxed max-w-3xl">
            <p>
              The gap between a talented professional from a non-Western background
              and a visible, advancing one is almost never skill.
            </p>
            <p>
              It&apos;s knowing how decisions actually get made behind closed doors.
              How to advocate for yourself in a way that reads as confident, not
              aggressive. What &ldquo;executive presence&rdquo; really means in these
              cultures. How trust is built — and lost — in ways that can feel
              completely arbitrary if nobody explains them.
            </p>
            <p>
              When you can&apos;t see the rules, the only explanation left is a quiet,
              damaging one:{" "}
              <span className="text-[#F0EDE8] italic">
                Maybe the problem is me. Maybe I&apos;m not as good as I thought.
                Maybe I don&apos;t belong here.
              </span>
            </p>
            <p>
              That slow erosion of self-belief is happening right now, inside
              competent people. People who are not the problem.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <blockquote className="mt-16 border-l-2 border-[#C4923A] pl-8">
            <p className="font-serif text-2xl md:text-3xl text-[#F0EDE8] italic leading-snug">
              &ldquo;What I give people isn&apos;t just career tools. I give them
              back an accurate picture of their own capability.&rdquo;
            </p>
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}
