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
            I&apos;ve spent 18 years as the bridge between non-Western talent
            and Western institutions.
            <br />
            <span className="italic text-[#1B3557]">
              I know this gap from the inside.
            </span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start">
          <div>
            <FadeIn delay={0.1}>
              <div className="space-y-6 text-lg text-[#6B6B6B] leading-relaxed">
                <p>
                  I&apos;m Biljana, and I&apos;m from North Macedonia. I built my
                  career learning how to navigate institutions that weren&apos;t
                  designed for people like me — and teaching others to do the same.
                </p>
                <p>
                  For 18 years I worked as a college access counselor, helping
                  students from non-Western countries get into Harvard, MIT, and
                  other top U.S. universities — earning over $1 million in
                  scholarships along the way. Two U.S. Ambassadors recognized my
                  work with certificates of achievement. I received the EducationUSA
                  Innovative Virtual Programming Award for the entire European region
                  — one winner per world region.
                </p>
                <p>
                  I&apos;ve presented at international conferences across the U.S.,
                  Spain, Turkey, Lithuania, Croatia, Ukraine, and Austria.
                </p>
                <p>
                  I didn&apos;t just study this. I lived it. I built Invisible Rules
                  because I know what it costs to navigate an institution alone — and
                  what becomes possible when someone finally explains the rules.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <blockquote className="mt-12 border-l-2 border-[#C4923A] pl-8">
                <p className="font-serif text-2xl md:text-3xl text-[#111111] italic leading-snug">
                  &ldquo;I teach the rules that global organizations run on — the ones
                  nobody tells you, but everyone expects you to know.&rdquo;
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
