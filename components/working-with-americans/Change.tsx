import FadeIn from "../FadeIn";
import { Container, SectionHead, h2Cls } from "./ui";
import { Checker, Strip } from "./Backgrounds";

// Built from Biljana's "What changes in 4 weeks" design: a paper slip for
// where you are now, a circled arrow, and a blue card for where you'll be.
const rows = [
  { now: "Rereading every email", after: "Sending clear requests", tilt: "-rotate-[0.6deg]" },
  { now: "Replaying meetings", after: "Knowing you were heard", tilt: "rotate-[0.5deg]" },
  { now: "Carrying feedback for days", after: "Handling it calmly", tilt: "-rotate-[0.4deg]" },
  { now: "Translating yourself all day", after: "Feeling like yourself", tilt: "rotate-[0.6deg]" },
  { now: "Watching others get noticed", after: "Seen for your work", tilt: "-rotate-[0.3deg]" },
];

const dots = "bg-[radial-gradient(rgba(54,59,143,0.35)_1px,transparent_1.4px)] [background-size:10px_10px]";

export default function Change() {
  return (
    <section className="relative pt-20 pb-28 lg:py-28 overflow-hidden">
      <div aria-hidden="true" className={`absolute top-28 right-16 h-40 w-64 hidden md:block ${dots}`} />
      <div aria-hidden="true" className="absolute top-6 -right-20 h-28 w-28 sm:-right-24 sm:h-56 sm:w-56 lg:h-64 lg:w-64 rounded-full bg-wip-red" />
      <Checker id="wwa-c1" className="absolute hidden xl:block right-[3%] bottom-10 w-[185px]" />
      <Container className="relative">
        <SectionHead no="04" label="What changes" />
        <FadeIn>
          <h2 className={`${h2Cls} max-w-[900px]`}>
            When you speak the language and know{" "}
            <span className="italic text-wip-red">the culture</span>
          </h2>
        </FadeIn>

        <div className="mt-14 sm:mt-16 max-w-[1000px]">
          <div className="grid grid-cols-[1fr_auto_1fr] gap-x-3 sm:gap-x-8 mb-5">
            <span className="justify-self-start border-[1.5px] border-wip-ink px-3 py-1.5 font-mono text-[13px] uppercase tracking-[0.14em] text-wip-ink">
              Now
            </span>
            <span aria-hidden="true" className="w-10 sm:w-14" />
            <span className="justify-self-start bg-wip-ink px-3 py-1.5 font-mono text-[13px] uppercase tracking-[0.14em] text-white">
              In 4 weeks
            </span>
          </div>

          <ul>
            {rows.map((r) => (
              <li
                key={r.now}
                className="grid grid-cols-[1fr_auto_1fr] items-center gap-x-3 sm:gap-x-8 py-3 sm:py-4 border-b border-dashed border-wip-ink/25 last:border-b-0"
              >
                <p className={`flex items-center min-h-[64px] sm:min-h-[88px] border-[1.5px] border-wip-ink bg-white px-3 sm:px-7 py-3 font-editor italic text-[16px] sm:text-[26px] leading-[1.25] text-wip-ink ${r.tilt}`}>
                  <span className="sr-only">Now: </span>
                  {r.now}
                </p>
                <span
                  aria-hidden="true"
                  className="flex items-center justify-center h-10 w-10 sm:h-14 sm:w-14 rounded-full border-2 border-wip-red font-ui text-[16px] sm:text-[20px] text-wip-red"
                >
                  →
                </span>
                <p className="flex items-center min-h-[64px] sm:min-h-[88px] bg-wip-blue px-3 sm:px-7 py-3 font-editor text-[16px] sm:text-[26px] leading-[1.25] text-white shadow-[8px_8px_0_var(--color-wip-ink)]">
                  <span className="sr-only">In 4 weeks: </span>
                  {r.after}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <FadeIn>
          <figure className="relative mt-20 max-w-[860px] -rotate-1">
            <div aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 bg-wip-red" />
            <div className="relative bg-wip-blue p-3 sm:p-4">
              <div className="border-2 border-dashed border-white/70 px-6 py-8 sm:px-10 sm:py-10">
                <p className="font-ui text-[13px] font-semibold uppercase tracking-[0.14em] text-white">
                  What this opens for you ↓
                </p>
                <p className="mt-4 font-editor font-medium text-[24px] sm:text-[32px] leading-[1.3] text-white">
                  More visibility and more trust at work open the door to more
                  responsibility, new projects, referrals and connections.
                </p>
              </div>
            </div>
          </figure>
        </FadeIn>
      </Container>
      <Strip kind="waves" id="wwa-s2" className="absolute inset-x-0 bottom-0 lg:hidden" />
    </section>
  );
}
