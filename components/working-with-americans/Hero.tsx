import Image from "next/image";
import { WWA } from "@/lib/working-with-americans";
import { Container, PageTop, Sparkle, TapedPhoto, Wave, btnPrimary } from "./ui";

const glance = [
  "Build your confidence in 4 weeks",
  "Know the unwritten rules",
  "Make them a habit",
  "Adapt and keep both cultures",
  "Grow your international career",
];

const facts = [
  { label: "Dates", value: WWA.course.datesText },
  { label: "Time", value: "2–3 hours a week" },
  { label: "Group", value: "Small group, up to 15" },
  { label: "Price", value: `€${WWA.course.price} per person` },
];

export default function Hero() {
  return (
    <section className="relative pt-10 pb-20 sm:pt-14 lg:pt-16 lg:pb-28 overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-[1.35fr_1fr] gap-14 lg:gap-16 items-center">
          <div>
            <PageTop label="Working with Americans · 4-week starter course · online" right="" />

            <h1 className="font-serif font-black text-[#1a1a1a] text-[clamp(38px,6.2vw,74px)] leading-[1.02] tracking-[-0.025em]">
              Stop guessing what Americans expect from you, and start feeling{" "}
              <span className="relative inline-block italic text-[#a8221d] pr-1">
                at ease
                <Wave className="absolute -bottom-2 left-0 w-full h-3.5 text-[#d4302a]" />
              </span>{" "}
              at work.
            </h1>

            <ul className="mt-9 flex flex-wrap gap-x-5 gap-y-3 max-w-[640px]">
              {glance.map((g) => (
                <li key={g} className="flex items-center gap-2 font-body text-[17px] sm:text-[18px] text-[#3a3a3a]">
                  <Sparkle className="w-3.5 h-3.5 shrink-0 text-[#d4302a]" />
                  {g}
                </li>
              ))}
            </ul>

            <dl className="mt-9 grid grid-cols-2 max-w-[560px] rounded-2xl border-2 border-[#1a1a1a] bg-white overflow-hidden">
              {facts.map((f, i) => (
                <div
                  key={f.label}
                  className={`px-4 sm:px-5 py-4 ${i % 2 === 1 ? "border-l-2" : ""} ${i >= 2 ? "border-t-2" : ""} border-[#1a1a1a]`}
                >
                  <dt className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#a8221d]">
                    {f.label}
                  </dt>
                  <dd className="mt-1 font-body text-[16px] leading-[1.35] text-[#1a1a1a]">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-9">
              <a href="#course-form" className={btnPrimary}>
                Register for the course
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[400px]">
            <Sparkle outline className="absolute -top-8 -right-2 w-12 h-12 text-[#d4302a] z-10" />
            <Sparkle className="absolute top-10 -left-8 w-6 h-6 text-[#1a1a1a] z-10" />
            <TapedPhoto tilt="rotate-2">
              <Image
                src="/working-with-americans/biljana-teaching.webp"
                alt="Biljana talking with a group of students in a classroom"
                width={576}
                height={830}
                priority
                sizes="(min-width: 1024px) 400px, 360px"
                className="w-full h-auto rounded-[3px]"
              />
            </TapedPhoto>
          </div>
        </div>
      </Container>
    </section>
  );
}
