import FadeIn from "./FadeIn";

export default function Problem() {
  return (
    <section id="the-pattern" className="py-28 border-t-2 border-[#1a1a1a]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[#d4302a]">
              01 — The pattern
            </span>
            <span className="w-10 h-px bg-[#e0ddd5]" />
          </div>
          <h2 className="font-serif font-black text-[#1a1a1a] text-[clamp(42px,6vw,82px)] tracking-[-0.025em] leading-none mb-8 max-w-[960px]">
            You&apos;re sensing more
            <br />
            than you can{" "}
            <span className="text-[#d4302a] italic">name</span>.
          </h2>
          <p className="font-body text-[21px] leading-[1.65] text-[#3a3a3a] max-w-[740px] mb-8">
            The chill in a meeting after you spoke. The conversation you
            didn&apos;t get invited to. The promotion that went to someone with
            less experience. The feedback that contradicted itself. There&apos;s
            a pattern underneath all of it.
          </p>
          <p className="font-body text-[18px] leading-[1.7] text-[#3a3a3a] max-w-[740px] mb-8">
            The pattern is the unwritten rules. How decisions actually get made
            behind closed doors. How to advocate for yourself in a way that
            reads as confident rather than aggressive. What &ldquo;executive
            presence&rdquo; really means in these cultures. How trust gets
            built, and how it gets lost, in ways that can feel arbitrary when
            nobody explains them.
          </p>
          <p className="font-body text-[18px] leading-[1.7] text-[#3a3a3a] max-w-[740px] mb-16">
            When you can&apos;t see the rules, there&apos;s only one explanation
            left, and it&apos;s the wrong one:{" "}
            <em className="italic text-[#d4302a]">
              maybe the problem is me
            </em>
            . You&apos;re not the problem. The rules were written for someone
            else. That doesn&apos;t mean you can&apos;t learn them.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <blockquote className="border-l-4 border-[#d4302a] pl-8 font-serif italic font-bold text-[#1a1a1a] text-[clamp(24px,2.8vw,36px)] leading-[1.2] max-w-[900px]">
            &ldquo;The work is about giving people back an accurate picture of
            their own capability.&rdquo;
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}
