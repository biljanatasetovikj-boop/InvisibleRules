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
                  Smart people from outside the dominant culture, working
                  twice as hard to read a room nobody briefed them on.
                </p>
                <p>
                  For seven of those years, I ran a U.S. State Department
                  cultural program, designing and delivering more than 4,000
                  events across my region. The work meant operating across
                  hierarchies — embassies, host institutions, local partners,
                  audiences — and watching thousands of people from my region
                  engage with American diplomats, academics, and
                  businesspeople. I saw what worked, what got misread, and
                  where the friction points sat. Not theory. Field data.
                </p>
                <p>
                  Alongside that, I spent years as a college access
                  counselor, helping students from non-Western countries get
                  into U.S. universities they&apos;d been told were out of
                  reach.
                </p>
                <p>Different rooms. Same pattern.</p>
                <p>
                  The students were never the problem. The professionals I
                  now work with aren&apos;t either. The problem was always
                  the same: nobody had translated the rules. Nobody had
                  named the codes that everyone inside the system already
                  knew. I spent seven years building bridges between those
                  codes for thousands of people.
                </p>
                <p>
                  I&apos;m building Invisible Rules because the same gap
                  shows up at work, and the cost is higher there. People
                  stall, doubt themselves, leave. Not because they
                  aren&apos;t good. Because the system is one they were
                  never let into.
                </p>
                <p>
                  Invisible Rules is just beginning. I&apos;m talking to
                  people. Testing whether what I&apos;m observing matches
                  what professionals are actually living. If you recognize
                  yourself in any of this, I&apos;d like to hear from you.
                </p>
                <p>
                  A few things for the record: students I mentored received
                  over $1 million in financial aid and got into Harvard, MIT,
                  and other top U.S. universities. My cultural diplomacy
                  work was recognized by U.S. Ambassadors and received the
                  EducationUSA Innovative Programming Award. I live in
                  Ohrid, Macedonia, with my husband and our five-year-old
                  son. I&apos;m always up for a conversation about K-culture,
                  Claude Code, remote work, learning foreign languages, or
                  balancing parenting and solopreneurship.
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
