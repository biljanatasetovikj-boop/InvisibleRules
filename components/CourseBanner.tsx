import Image from "next/image";
import FadeIn from "./FadeIn";
import { WWA } from "@/lib/working-with-americans";

const details = [
  WWA.course.datesText,
  "2–3 hours a week",
  "Small group, up to 15",
  `€${WWA.course.price} founding price`,
];

// The current course, right under the hero. Links to the full page.
export default function CourseBanner() {
  return (
    <section
      id="course"
      className="py-20 md:py-24 bg-[#fafaf7] border-t-2 border-[#1a1a1a]"
    >
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="grid md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] border-[3px] border-[#1a1a1a] bg-white">
            <a
              href={WWA.pagePath}
              tabIndex={-1}
              aria-hidden="true"
              className="relative block min-h-[280px] md:min-h-0 border-b-[3px] md:border-b-0 md:border-r-[3px] border-[#1a1a1a] overflow-hidden"
            >
              <Image
                src="/working-with-americans/biljana-teaching.webp"
                alt=""
                fill
                sizes="(min-width: 768px) 480px, 100vw"
                className="object-cover object-[50%_35%]"
              />
            </a>
            <div className="px-7 py-10 md:px-10 md:py-14 lg:px-14">
              <p className="font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-[#d4302a]">
                New course · starts {WWA.course.startText} · online
              </p>
              <h2 className="mt-5 font-serif font-black text-[#1a1a1a] text-[clamp(32px,4vw,52px)] leading-[1.05] tracking-[-0.02em]">
                Working with{" "}
                <span className="italic text-[#d4302a]">Americans</span>
              </h2>
              <p className="mt-2 font-serif font-bold text-[#1a1a1a] text-[clamp(20px,2vw,26px)] leading-[1.2]">
                A 4-Week Starter Course
              </p>
              <p className="mt-6 font-body italic text-[clamp(18px,1.8vw,21px)] leading-[1.55] text-[#1a1a1a] max-w-[560px]">
                Stop guessing what Americans expect from you, and start
                feeling at ease at work.
              </p>
              <ul className="mt-7 flex flex-wrap gap-2">
                {details.map((d) => (
                  <li
                    key={d}
                    className="border-2 border-[#1a1a1a] px-3 py-1.5 font-sans text-[12px] font-bold uppercase tracking-[0.12em] text-[#1a1a1a]"
                  >
                    {d}
                  </li>
                ))}
              </ul>
              <div className="mt-9">
                <a
                  href={WWA.pagePath}
                  className="inline-block whitespace-nowrap bg-[#d4302a] text-white px-6 sm:px-9 py-4 font-sans text-[13px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.18em] hover:bg-[#1a1a1a] transition-colors"
                >
                  See the full course →
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
