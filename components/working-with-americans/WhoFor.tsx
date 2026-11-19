import FadeIn from "../FadeIn";
import { Container, SectionHead, Tape, h2Cls } from "./ui";

// Five cut-out cards, pinned up like a collage. Colours and tilts vary so
// they read as separate pieces of paper.
export const AUDIENCE = [
  {
    text: "A professional working with American colleagues, managers or clients",
    style: "bg-wip-red text-white -rotate-2",
    tape: "-top-3 left-6 -rotate-6",
  },
  {
    text: "A freelancer working with American clients",
    style: "bg-white text-wip-ink border-2 border-wip-ink rotate-1 lg:translate-y-6",
    tape: "-top-3 right-8 rotate-3",
  },
  {
    text: "An entrepreneur starting to work with U.S. partners and clients",
    style: "bg-wip-blue text-white rotate-2",
    tape: "-top-3 left-1/2 -translate-x-1/2 -rotate-2",
  },
  {
    text: "A Work & Travel student, before or during your summer in the U.S.",
    style: "bg-wip-ink text-wip-paper -rotate-1 lg:col-start-2",
    tape: "-top-3 left-8 rotate-6",
  },
  {
    text: "An online student or intern at a U.S. university or program",
    style: "bg-wip-paper text-wip-ink border-2 border-wip-ink rotate-[1.5deg] lg:translate-y-4",
    tape: "-top-3 right-6 -rotate-3",
  },
];

export default function WhoFor() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHead no="02" label="Is this course for you?" />
        <FadeIn>
          <h2 className={`${h2Cls} max-w-[860px]`}>
            For people who work with Americans but were never taught the{" "}
            <span className="italic text-wip-red">rules:</span>
          </h2>
        </FadeIn>
        <ul className="mt-16 grid sm:grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-12 lg:gap-y-16 px-2">
          {AUDIENCE.map((a, i) => (
            <li
              key={a.text}
              className={`relative lg:col-span-2 flex flex-col justify-between min-h-[190px] p-7 shadow-[6px_6px_0_rgba(0,0,0,0.9)] ${a.style}`}
            >
              <Tape className={a.tape} />
              <span className="font-ui text-[14px] font-bold tabular-nums">
                0{i + 1}
              </span>
              <span className="mt-6 font-editor font-medium text-[24px] sm:text-[26px] leading-[1.2]">
                {a.text}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
