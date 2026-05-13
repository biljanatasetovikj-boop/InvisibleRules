import Image from "next/image";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="py-28 border-t-2 border-[#1a1a1a]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[#d4302a]">
              About me
            </span>
            <span className="w-10 h-px bg-[#e0ddd5]" />
          </div>
          <h2 className="font-serif font-black text-[#1a1a1a] text-[clamp(42px,6vw,82px)] tracking-[-0.025em] leading-none mb-12 max-w-[960px]">
            I&apos;m Biljana.
            <br />
            <span className="italic text-[#d4302a]">
              Eighteen years watching the same pattern.
            </span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start">
          <div>
            <FadeIn delay={0.1}>
              <div className="space-y-6 font-body text-[18px] text-[#3a3a3a] leading-[1.7]">
                <p>
                  Smart people from outside the dominant culture, working twice
                  as hard to read a room nobody briefed them on.
                </p>
                <p>
                  For seven of those years I ran a U.S. State Department
                  cultural program. Four thousand events across my region. The
                  work moved between embassies, host institutions, local
                  partners, and audiences. I watched thousands of people from
                  my region meet American diplomats, academics, and
                  businesspeople. I saw what worked, what got misread, where
                  the friction points sat. Not theory. Field data.
                </p>
                <p>
                  Alongside that, I worked for years as a college access
                  counselor. I helped students from non-Western countries get
                  into U.S. universities they&apos;d been told were out of
                  reach.
                </p>
                <p className="font-serif italic text-[#1a1a1a] text-[22px]">
                  Different rooms. Same pattern.
                </p>
                <p>
                  The students were never the problem. The professionals I now
                  work with aren&apos;t either. The problem was always the same:
                  nobody had translated the rules. Nobody had named the codes
                  everyone inside the system already knew.
                </p>
                <p>
                  I&apos;m building Invisible Rules because the same gap shows
                  up at work, and the cost is higher there. People stall, doubt
                  themselves, leave. Not because they aren&apos;t good. Because
                  the system is one they were never let into.
                </p>
                <p>
                  Invisible Rules is just beginning. I&apos;m talking to people.
                  Testing whether what I&apos;m observing matches what
                  professionals are actually living. If you recognize yourself
                  in any of this, I&apos;d like to hear from you.
                </p>
                <p className="text-[#707070] text-base">
                  A few things for the record: students I mentored received
                  over $1 million in financial aid and got into Harvard, MIT,
                  and other top U.S. universities. My cultural diplomacy work
                  was recognized by U.S. Ambassadors and received the
                  EducationUSA Innovative Programming Award. I live in Ohrid,
                  Macedonia, with my husband and our five-year-old son.
                  I&apos;m always up for a conversation about K-culture, Claude
                  Code, remote work, learning foreign languages, or balancing
                  parenting and solopreneurship.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <blockquote className="mt-12 border-l-4 border-[#d4302a] pl-8 font-serif italic font-bold text-[#1a1a1a] text-[clamp(22px,2.6vw,32px)] leading-[1.25] max-w-[800px]">
                &ldquo;Nobody translated the rules when you walked in.
                That&apos;s the work.&rdquo;
              </blockquote>
            </FadeIn>
          </div>

          <FadeIn delay={0.15} className="lg:sticky lg:top-12">
            <div className="relative overflow-hidden bg-[#e0ddd5] aspect-[3/4]">
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
