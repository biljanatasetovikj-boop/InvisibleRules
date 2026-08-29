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
          <h2 className="font-serif font-black text-[#1a1a1a] text-[clamp(42px,6vw,82px)] tracking-[-0.025em] leading-none mb-12">
            I&apos;m Biljana.
            <br />
            <span className="italic text-[#d4302a]">
              I&apos;m a cross-cultural consultant.
            </span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start">
          <div>
            <FadeIn delay={0.1}>
              <div className="space-y-6 font-body text-[18px] text-[#3a3a3a] leading-[1.7] max-w-[700px]">
                <p>
                  For 18 years, I watched the same pattern repeat itself while
                  working in global organizations, navigating teams,
                  supervisors, and stakeholders from all over the world. I also
                  watched people from non-Western backgrounds step into elite
                  international institutions and achieve their biggest dreams
                  while quietly struggling with the cultural transition that
                  came with it.
                </p>
                <p className="font-serif italic text-[#1a1a1a] text-[22px] leading-[1.4]">
                  I saw what worked. What got misread. Where the friction
                  points sat. Not theory. Field data.
                </p>
                <p>
                  Now, I&apos;m passing that knowledge on to others walking the
                  same path and trying to navigate the invisible rules that
                  quietly stall careers. I want to close the gap between what
                  you bring into the room and what others actually see, and
                  help you build a career you truly own.
                </p>
              </div>

              <div className="mt-10">
                <a
                  href="https://www.linkedin.com/in/biljana-kuzmanovska-tasetovikj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#1a1a1a] text-white px-9 py-4 font-sans text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-[#d4302a] transition-colors"
                >
                  More about me
                </a>
              </div>
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
