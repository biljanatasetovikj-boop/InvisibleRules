import FadeIn from "../FadeIn";
import Familiar from "./Familiar";
import { Container, SectionHead, Tape, h2Cls } from "./ui";

// Three cut-outs, pinned up like the cards in "Is this course for you?".
const limits = [
  {
    text: "“We are all humans, we understand each other.”",
    caption: "What one person told me in an interview",
    style: "bg-wip-red text-white -rotate-2",
  },
  {
    text: "You know American culture mostly through screens (films, series, social media, online work), not from living in it.",
    style: "bg-wip-blue text-white rotate-1 lg:translate-y-10",
  },
  {
    text: "You believe that hard work and dedication will be enough to do well in your job.",
    style: "bg-wip-ink text-wip-paper -rotate-1",
  },
];

export default function Pattern() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHead no="03" label="Before you start" />
        <FadeIn>
          <h2 className={h2Cls}>
            What might be getting in{" "}
            <span className="italic text-wip-red">your way.</span>
          </h2>
        </FadeIn>

        <ul className="mt-14 grid md:grid-cols-3 gap-x-8 gap-y-12 px-2 lg:pb-10">
          {limits.map((l, i) => (
            <li
              key={l.text}
              className={`relative flex flex-col justify-between min-h-[220px] p-7 sm:p-8 shadow-[6px_6px_0_rgba(0,0,0,0.9)] ${l.style}`}
            >
              <Tape className={i === 1 ? "-top-3 right-8 rotate-3" : "-top-3 left-8 -rotate-3"} />
              <p className={`font-editor text-[23px] sm:text-[25px] leading-[1.3] ${l.caption ? "italic font-medium" : ""}`}>
                {l.text}
              </p>
              {l.caption && (
                <p className="mt-6 font-ui text-[13px] font-semibold uppercase tracking-[0.12em]">
                  {l.caption}
                </p>
              )}
            </li>
          ))}
        </ul>

      </Container>
      <Familiar />
    </section>
  );
}
