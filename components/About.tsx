import Image from "next/image";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 px-6 lg:px-8 bg-[#FAFAF7]">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-xs uppercase tracking-widest text-[#C4923A] font-medium mb-5">
            Who I Am
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-14 text-[#111111]">
            I&apos;m Biljana.
            <br />
            <span className="italic text-[#1B3557]">
              I&apos;ve spent 18 years watching the same pattern.
            </span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start">
          <div>
            <FadeIn delay={0.1}>
              <div className="space-y-6 text-lg text-[#6B6B6B] leading-relaxed">
                <p>
                  I&apos;ve spent the last 18 years inside global
                  institutions, watching the same pattern again and again.
                  Smart people from outside the dominant culture, working
                  twice as hard to read a room nobody briefed them on.
                </p>
                <p>
                  For most of those years I worked as a college access
                  counselor. I helped students from non-Western countries get
                  into U.S. universities they&apos;d been told were out of
                  reach. The students were never the problem. The problem
                  was always the same: nobody had translated the rules.
                </p>
                <p>
                  I&apos;m building Invisible Rules because the same gap
                  shows up at work, and the cost is higher there. People
                  stall, doubt themselves, leave. Not because they
                  aren&apos;t good. Because the system is one they were
                  never let into.
                </p>
                <p>
                  I&apos;m at the start of this. Talking to people. Testing
                  whether what I&apos;m seeing matches what they&apos;re
                  feeling. If you recognize yourself in any of the writing
                  on this page, I&apos;d like to hear from you.
                </p>
                <p>
                  I&apos;ve been recognized by U.S. Ambassadors and the
                  EducationUSA Innovative Programming Award for past work.
                  I live in Ohrid, Macedonia, with my husband and our
                  five-year-old son. I&apos;m always up for a conversation
                  about K-culture, Claude Code, remote work, learning foreign
                  languages, or life as a solopreneur and a parent.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <blockquote className="mt-12 border-l-2 border-[#C4923A] pl-8">
                <p className="font-serif text-2xl md:text-3xl text-[#111111] italic leading-snug">
                  &ldquo;Nobody translated the rules when you walked in.
                  That&apos;s the work.&rdquo;
                </p>
              </blockquote>
            </FadeIn>
          </div>

          <FadeIn delay={0.15} className="lg:sticky lg:top-24">
            <div className="relative rounded-2xl overflow-hidden bg-[#E5E2DB] aspect-[3/4]">
              <Image
                src="/biljana.jpg"
                alt="Biljana Kuzmanovska Tasetovikj"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 380px"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
