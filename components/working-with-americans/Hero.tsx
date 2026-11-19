import Image from "next/image";
import { WWA } from "@/lib/working-with-americans";
import { Container, FramedPhoto, btnPrimary } from "./ui";

const glance = [
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
    <section className="pt-10 pb-20 sm:pt-14 lg:pt-16 lg:pb-28">
      <Container>
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-14 lg:gap-16 items-center">
          <div>
            <p className="font-ui text-[13px] font-semibold uppercase tracking-[0.14em] text-wip-blue">
              4-week starter course · starts {WWA.course.startText} · online
            </p>

            <h1 className="mt-6 font-editor font-medium text-wip-ink text-[clamp(46px,6vw,84px)] leading-[0.98] tracking-[-0.03em]">
              Your First Year Working with{" "}
              <span className="italic text-wip-red">Americans</span>
            </h1>

            <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-1.5 max-w-[600px]">
              {glance.map((g) => (
                <li key={g} className="flex items-center gap-3 font-editor text-[19px] text-wip-ink">
                  <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 bg-wip-red" />
                  {g}
                </li>
              ))}
            </ul>

            <a href="#course-form" className={`${btnPrimary} mt-9`}>
              Register for the course
            </a>

            <dl className="mt-10 grid grid-cols-2 max-w-[560px] border-t-2 border-wip-ink">
              {facts.map((f, i) => (
                <div
                  key={f.label}
                  className={`py-4 pr-4 border-b border-wip-ink ${i % 2 === 1 ? "pl-5 border-l" : ""}`}
                >
                  <dt className="font-ui text-[13px] font-semibold uppercase tracking-[0.12em] text-wip-blue">
                    {f.label}
                  </dt>
                  <dd className="mt-1 font-editor text-[18px] leading-[1.35] text-wip-ink">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <FramedPhoto className="mx-auto w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] rotate-1">
            <Image
              src="/working-with-americans/biljana-teaching.webp"
              alt="Biljana talking with a group of students in a classroom"
              width={576}
              height={830}
              priority
              sizes="(min-width: 1024px) 420px, 380px"
              className="w-full h-auto"
            />
          </FramedPhoto>
        </div>
      </Container>
    </section>
  );
}
