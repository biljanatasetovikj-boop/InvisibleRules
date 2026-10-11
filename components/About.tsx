import Image from "next/image";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="py-28 border-t-2 border-[#1a1a1a]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-sans text-[12px] font-bold uppercase tracking-[0.28em] text-[#d4302a]">
              About me
            </span>
            <span className="w-10 h-px bg-[#e0ddd5]" />
          </div>
          <h2 className="font-serif font-black text-[#1a1a1a] text-[clamp(42px,6vw,82px)] tracking-[-0.025em] leading-none mb-4">
            I&apos;m Biljana.
          </h2>
          <p className="font-serif italic text-[#d4302a] text-[22px] mb-12">
            Career specialist for non-Western professionals.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start">
          <div>
            <FadeIn delay={0.1}>
              <div className="space-y-6 font-body text-[18px] text-[#3a3a3a] leading-[1.7] max-w-[700px]">
                <p>
                  For more than 18 years, I built my career helping people
                  make their dreams come true: getting into the top
                  universities in the world, winning full scholarships, and
                  understanding cultures they had only read about or seen on
                  screen. I was good at it, too. Country coordinator,
                  European trainer for new advisers, one of the 15% of
                  advisers in a global network of 400 to reach senior status,
                  and recipient of the Honorary Ambassador Award. But
                  somewhere between writing the same monthly reports and
                  missing yet another chance to build something I truly
                  cared about, I realised I was building someone else&apos;s
                  dream, not my own. So I left to work directly with
                  clients.
                </p>
                <p>
                  My work has always centred on the same passion: helping
                  people reach their goals and their full potential. I would
                  love my app and my program to reach users all over the
                  world, but what I truly enjoy are 1:1 conversations. I see
                  people&apos;s faces light up, their attitude towards
                  opportunities changes, and they leave with a plan and a
                  next step. The teacher in me smiles every time.
                </p>
                <p>
                  These days, I offer the same support to professionals
                  working across cultures. I was one of them, and I know the
                  frustration, the surprise and the disappointment
                  first-hand. I also know that you can navigate complex
                  cultural systems and build a successful global career,
                  especially if you work in a Western-led workplace.
                </p>
                <p>
                  I like mornings with my son, freedom, learning about new
                  cultures, and following whatever seems interesting now
                  instead of postponing it until I have time. I dislike
                  scheduled meetings where I&apos;m only there to nod, posts
                  that make a topic much more complicated than it is, and AI
                  trainings that promise more than they deliver.
                </p>
              </div>

              <div className="mt-10">
                <a
                  href="https://www.linkedin.com/in/biljana-kuzmanovska-tasetovikj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#1a1a1a] text-white px-9 py-4 font-sans text-[13px] font-bold uppercase tracking-[0.18em] hover:bg-[#d4302a] transition-colors"
                >
                  More about me ↗
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.15} className="lg:sticky lg:top-12">
            <div className="relative overflow-hidden bg-[#e0ddd5] aspect-[3/4]">
              <Image
                src="/biljana-new.png"
                alt="Biljana Kuzmanovska Tasetovikj, founder of Invisible Rules"
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
