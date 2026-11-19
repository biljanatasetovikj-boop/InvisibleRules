import Image from "next/image";
import FadeIn from "../FadeIn";
import { WWA } from "@/lib/working-with-americans";
import { Container, Tape } from "./ui";
import { Rosettes, Strip } from "./Backgrounds";

// Built from Biljana's "About me" poster.

const threads = [
  {
    title: "I build things that didn’t exist yet.",
    colour: "bg-wip-red",
    stat: "700+",
    statLabel: "Teachers",
    line: "#e20a39",
    text: "My own English school, the first regional TOEFL testing centre in Bitola, and a project that helped 700+ teachers bring new tools into their classrooms.",
  },
  {
    title: "I listen to people at the moment they decide to change.",
    colour: "bg-wip-blue",
    stat: "10,000+",
    statLabel: "Advised",
    line: "#363b8f",
    text: "10,000+ students, parents and educators advised, and 600+ interviews with adults starting new careers.",
  },
  {
    title: "I bring two cultures into one room.",
    colour: "bg-wip-ink",
    stat: "4,500",
    statLabel: "Events",
    line: "#000000",
    text: "Nearly 4,500 cultural events between two cultures, and training for new advisers across Europe.",
  },
];

const mono = "font-mono text-[12px] uppercase tracking-[0.14em]";
const body = "font-editor text-[18px] sm:text-[19px] leading-[1.6] text-wip-ink/80";
const link =
  "inline-flex items-center min-h-[44px] font-editor text-[18px] text-wip-ink underline decoration-wip-red decoration-2 underline-offset-[5px] hover:text-wip-red";

export default function AboutShort() {
  return (
    <section id="about" className="relative pt-20 pb-28 lg:py-28">
      <Rosettes className="absolute hidden xl:block right-[3%] bottom-[190px] w-[260px]" />
      <Container className="relative">
        <p className={`${mono} text-wip-ink`}>
          <b className="text-wip-red font-bold">07</b>&nbsp;&nbsp;About me
        </p>

        {/* Photo, name, two numbers */}
        <div className="mt-10 grid md:grid-cols-[minmax(0,320px)_1fr] gap-12 lg:gap-16 items-start">
          <div className="relative mx-auto w-full max-w-[280px] md:max-w-none -rotate-2">
            <div aria-hidden="true" className="absolute inset-0 translate-x-5 translate-y-5 bg-wip-red" />
            <figure className="relative border-[1.5px] border-wip-ink bg-white p-3 pb-4">
              <Tape className="-top-3 left-1/2 -translate-x-1/2 rotate-1 bg-[#f6e7c1]/90! border-transparent!" />
              <Image
                src="/biljana-new.png"
                alt="Portrait of Biljana"
                width={1254}
                height={1254}
                sizes="(min-width: 768px) 320px, 280px"
                className="w-full h-auto"
              />
              <figcaption className={`mt-4 ${mono} text-wip-ink`}>Macedonia</figcaption>
            </figure>
          </div>

          <div>
            <h2 className="font-editor font-medium text-wip-ink text-[clamp(60px,9vw,120px)] leading-[0.9] tracking-[-0.035em]">
              I’m Biljana
            </h2>
            <p className="mt-6 font-editor text-[20px] sm:text-[24px] leading-[1.35] text-wip-ink">
              Cross-cultural consultant &amp; mentor |{" "}
              <span className="whitespace-nowrap">
                Founder, <span className="italic text-wip-red">Invisible Rules</span>
              </span>
            </p>
            <div className="mt-8 flex flex-wrap gap-5">
              <div className="-rotate-1 border-2 border-wip-ink bg-wip-paper px-5 py-4 min-w-[150px]">
                <p className="font-editor text-[48px] leading-none text-wip-ink">44</p>
                <p className={`mt-3 ${mono} text-wip-ink`}>Years old</p>
              </div>
              <div className="rotate-1 border-2 border-wip-red bg-wip-paper px-5 py-4 min-w-[190px]">
                <p className="font-editor text-[48px] leading-none text-wip-ink">18</p>
                <p className={`mt-3 ${mono} text-wip-ink leading-[1.5]`}>
                  Years at an
                  <br />
                  American organisation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The story and the project I lost */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-4 max-w-[560px]">
            <p className={body}>
              I’m 44, and I have never lived in the U.S. Still, for 18 years I
              worked for an American organisation from Macedonia.
            </p>
            <p className={body}>
              I studied and taught languages, so I thought I was ready.{" "}
              <b className="font-semibold text-wip-ink">I wasn’t.</b> I once lost a
              project because I wouldn’t show unfinished work. My manager wanted
              to see it at 60% so he could help me. Where I come from, you never
              show up unready.
            </p>
          </div>

          <figure
            className="border-[1.5px] border-wip-ink bg-white px-5 py-6 sm:px-6 shadow-[10px_10px_0_var(--color-wip-ink)] mr-3"
            aria-label="The project I lost: my manager wanted to see it at 60%, I waited until I was ready to show it at 100%."
          >
            <p className={`${mono} text-wip-ink`}>The project I lost</p>
            <div aria-hidden="true" className="mt-5 relative h-5 border-2 border-wip-ink">
              <div className="absolute inset-y-0 left-0 w-[60%] bg-wip-red" />
              {[70, 80, 90].map((x) => (
                <span key={x} className="absolute inset-y-0 w-px bg-wip-ink/25" style={{ left: `${x}%` }} />
              ))}
            </div>
            <div aria-hidden="true" className="grid grid-cols-[60%_40%]">
              <div className="border-r-2 border-wip-red pr-3 pt-2 pb-2 text-right">
                <p className="font-editor text-[26px] leading-tight text-wip-red">60%</p>
                <p className="font-editor text-[15px] sm:text-[16px] leading-snug text-wip-ink">when my manager wanted to see it</p>
              </div>
              <div className="pl-3 pt-2 text-right">
                <p className="font-editor text-[26px] leading-tight text-wip-ink">100%</p>
                <p className="font-editor text-[15px] sm:text-[16px] leading-snug text-wip-ink">when I was ready to show it</p>
              </div>
            </div>
          </figure>
        </div>

        {/* The line that sums it up, on a torn blue strip */}
        <FadeIn>
          <p className="mt-20 bg-wip-blue px-7 py-12 sm:px-12 sm:py-16 font-editor italic text-[32px] sm:text-[48px] lg:text-[56px] leading-[1.12] tracking-[-0.015em] text-white [clip-path:polygon(0_6%,4%_3%,12%_5%,22%_1%,35%_4%,48%_2%,60%_5%,72%_1%,85%_3%,100%_0,99%_90%,90%_93%,78%_91%,64%_95%,50%_92%,36%_96%,22%_93%,10%_97%,0_94%)]">
            I spoke the language, but{" "}
            <span className="underline decoration-wip-red decoration-[3px] underline-offset-[8px]">
              I didn’t speak the culture
            </span>{" "}
            yet.
          </p>
        </FadeIn>

        <p className={`mt-6 max-w-[620px] ${body}`}>
          I learned it slowly, mostly through mistakes. Along the way, I found out
          what I do best.
        </p>

        {/* 18 years, 3 threads */}
        <div className="mt-12">
          <div className="flex justify-center">
            <span className={`bg-wip-ink px-3 py-2 ${mono} text-white`}>18 years · 3 threads</span>
          </div>
          <svg aria-hidden="true" viewBox="0 0 1000 70" preserveAspectRatio="none" className="hidden lg:block w-full h-[70px]">
            <path d="M500 0 C 500 40, 167 20, 167 70" fill="none" stroke={threads[0].line} strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
            <path d="M500 0 L 500 70" fill="none" stroke={threads[1].line} strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
            <path d="M500 0 C 500 40, 833 20, 833 70" fill="none" stroke={threads[2].line} strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
          </svg>
          <ol className="mt-8 lg:mt-0 grid lg:grid-cols-3 gap-10 lg:gap-6">
            {threads.map((t, i) => (
              <li key={t.title} className="relative flex flex-col border-[1.5px] border-wip-ink bg-white">
                <div className={`flex items-start gap-4 px-5 py-5 pr-24 lg:min-h-[120px] text-white ${t.colour}`}>
                  <span className="font-editor text-[48px] leading-none">{i + 1}</span>
                  <p className="pt-1 font-editor font-medium text-[21px] sm:text-[23px] leading-[1.2]">{t.title}</p>
                </div>
                <span className="absolute -top-5 -right-3 rotate-3 bg-[#ffe66e] border border-wip-ink px-3 py-1.5 text-center shadow-[0_6px_12px_rgba(0,0,0,0.15)]">
                  <span className="block font-editor text-[24px] leading-none text-wip-ink">{t.stat}</span>
                  <span className="block mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-wip-ink">{t.statLabel}</span>
                </span>
                <p className={`px-5 py-6 ${body}`}>{t.text}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Closing */}
        <FadeIn>
          <div className="mt-20">
            <p className={body}>
              Now I’m building Invisible Rules, so many talented people are still
              learning these rules alone, the way I did.
            </p>
            <p className="mt-4 max-w-[760px] font-editor text-[40px] sm:text-[56px] leading-[1.1] tracking-[-0.02em] text-wip-ink">
              I’d love to make that road{" "}
              <span className="bg-[linear-gradient(transparent_60%,rgba(226,10,57,0.22)_60%)]">a little lighter.</span>
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 pt-5 flex flex-wrap items-center gap-x-7 gap-y-1 border-t-2 border-wip-ink">
          <span className={`${mono} text-wip-blue`}>Contact</span>
          <a href={`mailto:${WWA.contactEmail}`} className={`${link} break-all`}>
            {WWA.contactEmail}
          </a>
          <a href={WWA.linkedIn} target="_blank" rel="noopener noreferrer" className={link}>
            LinkedIn ↗
          </a>
        </div>
      </Container>
      <Strip kind="rosettes" id="wwa-s3" className="absolute inset-x-0 bottom-0 lg:hidden" />
    </section>
  );
}
