import Image from "next/image";
import FadeIn from "../FadeIn";
import { WWA } from "@/lib/working-with-americans";
import { Container, PageTop } from "./ui";

const stats = [
  { n: "10,000+", text: "students, parents and educators advised" },
  { n: "4,000+", text: "cultural community events organised between two cultures" },
  { n: "$5M+", text: "in scholarships for students placed at Harvard, MIT and other top U.S. universities" },
];

const body = "mt-5 font-body text-[18px] sm:text-[19px] leading-[1.7] text-white/85";

// Dark, like the zine's last page.
export default function AboutShort() {
  return (
    <section className="bg-[#1a1a1a] text-white py-20 lg:py-28">
      <Container>
        <PageTop label="About me" right="07 / 08" inverted />
        <div className="grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-16 items-start">
          <FadeIn className="mx-auto w-full max-w-[240px] lg:max-w-none lg:sticky lg:top-10">
            <Image
              src="/biljana-new.png"
              alt="Portrait of Biljana"
              width={1254}
              height={1254}
              sizes="(min-width: 1024px) 300px, 240px"
              className="w-full h-auto rounded-2xl rotate-1 border-2 border-white/90"
            />
          </FadeIn>
          <div className="max-w-[700px]">
            <p className="font-serif font-bold text-[clamp(26px,3.2vw,36px)] leading-[1.2]">
              Hi, I&apos;m Biljana, a career specialist for non-Western
              professionals, intercultural mentor and the founder of{" "}
              <span className="italic text-[#ff8a80]">Invisible Rules.</span>
            </p>

            <p className="mt-8 font-body text-[18px] sm:text-[19px] leading-[1.7] text-white/85">
              Languages were my thing. I studied them, then taught them. So
              when I started working for an American organisation, I thought I
              was ready.
            </p>
            <p className="mt-3 font-serif font-bold italic text-[24px] text-white">
              I wasn&apos;t.
            </p>
            <p className={body}>
              When my manager asked for next year&apos;s plan, I only knew how
              to plan the next month. My emails explained everything except the
              one thing that mattered, my request, which usually came last. And
              I lost a project because I wouldn&apos;t show unfinished work. My
              manager wanted to see it at 60% and help me. Where I come from,
              you never show up unready.
            </p>

            <p className="mt-8 -rotate-1 font-hand text-[30px] sm:text-[36px] leading-[1.15] text-[#ff8a80]">
              I spoke the language. I didn&apos;t speak the culture yet.
            </p>

            <p className="mt-8 font-body text-[18px] sm:text-[19px] leading-[1.7] text-white/85">
              Slowly, mostly through mistakes, I learned. I shared my work
              early and asked sooner. I learned to negotiate for what mattered
              to me, even when it wasn&apos;t money. And I found that learning a
              new work culture shows you how little you know your own. Today,
              planning a year ahead feels natural. I also learned not to
              over-adapt, and to keep both cultures, because that is where
              growth comes from.
            </p>
            <p className={body}>
              That learning carried me through 18 years. The quiet girl who
              waited to be called on became a senior adviser in a global
              network of 400, a trainer for new advisers across Europe, and the
              person who helped the smartest kids from Macedonia get into
              Harvard, MIT and more, with over $5M in scholarships.
            </p>
            <p className={body}>
              In September I left that career, and now I&apos;m a beginner
              again. I&apos;m building Invisible Rules because so many talented
              people are still learning these rules alone, like I did.
              I&apos;d love to make that road a little lighter.
            </p>

            <ul className="mt-12 grid sm:grid-cols-3 gap-6 border-t border-white/20 pt-8">
              {stats.map((s) => (
                <li key={s.n}>
                  <p className="font-serif font-black text-[24px] leading-none text-[#ff8a80]">
                    {s.n}
                  </p>
                  <p className="mt-2 font-body text-[14px] leading-[1.5] text-white/70">
                    {s.text}
                  </p>
                </li>
              ))}
            </ul>

            <p className="mt-10 font-sans text-[13px] font-bold uppercase tracking-[0.16em] text-white/70">
              Contact
            </p>
            <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 font-body text-[17px]">
              <a
                href={`mailto:${WWA.contactEmail}`}
                className="break-all underline decoration-[#ff8a80] decoration-1 underline-offset-4 hover:text-[#ff8a80]"
              >
                {WWA.contactEmail}
              </a>
              <span aria-hidden="true" className="text-white/40">·</span>
              <a
                href={WWA.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-[#ff8a80] decoration-1 underline-offset-4 hover:text-[#ff8a80]"
              >
                LinkedIn ↗
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
