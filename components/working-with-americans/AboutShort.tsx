import Image from "next/image";
import FadeIn from "../FadeIn";
import { WWA } from "@/lib/working-with-americans";
import { Container, PageTop } from "./ui";

const stats = [
  { n: "18 years", text: "in international education" },
  { n: "10,000+", text: "students, parents and educators advised" },
  { n: "4,000+", text: "cultural community events between two cultures" },
  { n: "$1M+", text: "in scholarships for students placed at Harvard, MIT and other top U.S. universities" },
];

// Dark, like the zine's last page.
export default function AboutShort() {
  return (
    <section className="bg-[#1a1a1a] text-white py-20 lg:py-28">
      <Container>
        <PageTop label="About me" right="07 / 08" inverted />
        <div className="grid lg:grid-cols-[320px_1fr] gap-10 lg:gap-16 items-start">
          <FadeIn className="mx-auto w-full max-w-[260px] lg:max-w-none">
            <Image
              src="/biljana-new.png"
              alt="Portrait of Biljana"
              width={1254}
              height={1254}
              sizes="(min-width: 1024px) 320px, 260px"
              className="w-full h-auto rounded-2xl rotate-1 border-2 border-white/90"
            />
          </FadeIn>
          <div>
            <p className="font-serif font-bold text-[clamp(26px,3.4vw,38px)] leading-[1.2]">
              Hi, I&apos;m Biljana, a career specialist for non-Western
              professionals and the founder of{" "}
              <span className="italic text-[#ff8a80]">Invisible Rules.</span>
            </p>
            <p className="mt-6 font-body text-[18px] sm:text-[19px] leading-[1.65] text-white/85 max-w-[680px]">
              I&apos;ve been a teacher, a trainer and a facilitator for 18
              years, working across two cultures, the American and the
              Macedonian. I went through a cultural adaptation on my own, and
              it took me years. The hardest part was finding the balance: not
              over-adapting, but feeling at ease and confident working in both
              cultures.
            </p>

            <ul className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 border-t border-white/20 pt-10">
              {stats.map((s) => (
                <li key={s.n}>
                  <p className="font-serif font-black text-[32px] sm:text-[40px] leading-none text-[#ff8a80]">
                    {s.n}
                  </p>
                  <p className="mt-3 font-body text-[16px] leading-[1.5] text-white/80">
                    {s.text}
                  </p>
                </li>
              ))}
            </ul>

            <p className="mt-12 font-sans text-[13px] font-bold uppercase tracking-[0.16em] text-white/70">
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
