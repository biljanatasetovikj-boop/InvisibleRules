import FadeIn from "./FadeIn";

const signs = [
  "You deliver consistently and still feel quietly off-track.",
  "Feedback you've received contradicts itself.",
  "You're told you're “too direct,” “too quiet,” or not quite leadership material.",
  "Every meeting is in your second or third language.",
  "You've succeeded at adapting and it feels hollow.",
];

export default function Problem() {
  return (
    <section id="the-pattern" className="py-28 border-t-2 border-[#1a1a1a]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex items-center gap-3 mb-12">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[#d4302a]">
              01 — The pattern
            </span>
            <span className="w-10 h-px bg-[#e0ddd5]" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-20 items-start">
          <div>
            <FadeIn>
              <h2 className="font-serif font-black text-[#1a1a1a] text-[clamp(42px,5.5vw,72px)] tracking-[-0.025em] leading-[0.98] mb-10">
                You&apos;re sensing more than you can{" "}
                <span className="text-[#d4302a] italic">name</span>.
              </h2>
              <div className="space-y-5 font-body text-[18px] text-[#3a3a3a] leading-[1.7] max-w-[600px]">
                <p>
                  You&apos;re not imagining the chill in a meeting after you
                  spoke. The conversation you weren&apos;t invited to. The
                  promotion that went elsewhere. The feedback that contradicted
                  itself.
                </p>
                <p>
                  There&apos;s a{" "}
                  <strong className="font-bold text-[#1a1a1a]">pattern</strong>{" "}
                  underneath all of it. It&apos;s the unwritten rules — how
                  decisions actually get made, how trust gets built, what
                  &ldquo;presence&rdquo; really means in these cultures. When
                  you can&apos;t see the rules, there&apos;s only one
                  explanation left, and it&apos;s the wrong one.
                </p>
              </div>
              <p className="mt-10 font-serif italic text-[#1a1a1a] text-[clamp(22px,2.4vw,30px)] leading-[1.3] max-w-[600px]">
                The rules were written for someone else. That doesn&apos;t mean
                you can&apos;t learn them.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.15}>
            <div className="lg:pt-4">
              <p className="font-serif italic text-[#d4302a] text-[20px] mb-7">
                Signs you know this work
              </p>
              <ul className="space-y-0">
                {signs.map((sign, i) => (
                  <li
                    key={i}
                    className={`flex gap-4 py-4 ${
                      i !== signs.length - 1
                        ? "border-b border-dashed border-[#e0ddd5]"
                        : ""
                    }`}
                  >
                    <span className="flex-none font-serif font-bold text-[#d4302a] text-[18px] leading-[1.5] w-4">
                      §
                    </span>
                    <span className="font-body text-[#1a1a1a] text-[16px] leading-[1.55]">
                      {sign}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="/quiz"
                className="group mt-8 inline-block font-serif italic text-[#1a1a1a] text-[15px] hover:text-[#d4302a] transition-colors"
              >
                <span className="text-[#d4302a] mr-1.5">↗</span> if three or
                more land,{" "}
                <span className="underline decoration-[#e0ddd5] decoration-1 underline-offset-4 group-hover:decoration-[#d4302a] transition-colors">
                  take the diagnostic
                </span>
                .
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
