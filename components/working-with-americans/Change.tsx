import FadeIn from "../FadeIn";
import { Container, SectionHead, h2Cls } from "./ui";

// Short on purpose: one line for where you are, one for where you'll be.
const rows = [
  { now: "Rereading every email", after: "Sending clear requests" },
  { now: "Replaying meetings", after: "Knowing you were heard" },
  { now: "Carrying feedback for days", after: "Handling it calmly" },
  { now: "Translating yourself all day", after: "Feeling like yourself" },
  { now: "Watching others get noticed", after: "Seen for your work" },
];

export default function Change() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHead no="04" label="What changes" />
        <FadeIn>
          <h2 className={h2Cls}>
            What changes in <span className="italic text-wip-red">4 weeks.</span>
          </h2>
        </FadeIn>

        <div className="mt-12 max-w-[900px]">
          <div className="grid grid-cols-[1fr_auto_1fr] gap-x-3 sm:gap-x-6 pb-3 border-b-2 border-wip-ink font-ui text-[13px] font-semibold uppercase tracking-[0.12em]">
            <span className="text-wip-ink/70">Now</span>
            <span aria-hidden="true" />
            <span className="text-wip-blue">In 4 weeks</span>
          </div>
          <ul>
            {rows.map((r) => (
              <li
                key={r.now}
                className="grid grid-cols-[1fr_auto_1fr] items-center gap-x-3 sm:gap-x-6 py-4 border-b border-wip-ink/30"
              >
                <span className="font-editor text-[18px] sm:text-[22px] leading-[1.3] text-wip-ink/65">
                  <span className="sr-only">Now: </span>
                  {r.now}
                </span>
                <span aria-hidden="true" className="font-ui text-[22px] text-wip-red">
                  →
                </span>
                <span className="font-editor font-semibold text-[18px] sm:text-[22px] leading-[1.3] text-wip-ink">
                  <span className="sr-only">In 4 weeks: </span>
                  {r.after}
                </span>
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
    </section>
  );
}
