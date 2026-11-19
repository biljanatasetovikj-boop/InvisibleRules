import Image from "next/image";
import FadeIn from "../FadeIn";
import { WWA } from "@/lib/working-with-americans";
import { Container, FramedPhoto, SectionHead, h2Cls, leadCls } from "./ui";

// Each point: the key words (bold) and a short tail.
const weeks = [
  {
    title: "Say it clearly",
    points: [
      ["Small talk", " that opens a call in two easy minutes"],
      ["Requests that lead with the ask,", " and a template you keep"],
      ["Your home rule", " for asking: what to keep, where to adapt"],
    ],
  },
  {
    title: "Find your place in the room",
    points: [
      ["Your opinion in meetings,", " the thing Americans are waiting for"],
      ["Your view before the decision,", " your commitment after it"],
      ["Show work early,", " before it is perfect, to build trust"],
    ],
  },
  {
    title: "Handle the hard conversations",
    points: [
      ["Disagree with a proposal,", " not only a problem"],
      ["Hear the real message", " that comes after the praise"],
      ["Friendly isn’t friendship,", " and asking for advice isn’t pushy"],
    ],
  },
  {
    title: "Be seen and valued",
    points: [
      ["A short update", " with a number and what comes next"],
      ["One real result,", " shared, with feedback asked for"],
      ["A wins log,", " ready whenever someone asks"],
    ],
  },
];

const rhythm = [
  {
    day: "Monday",
    title: "Know what is expected, and why",
    text: "An email and video from Biljana: one unwritten rule of American work culture, the research behind it, and her own story of learning it. Bonus videos from international experts.",
  },
  {
    day: "Every workday",
    title: "Practise a little every day",
    text: "One small task, repeated each day in real life, whether you have a job right now or not.",
  },
  {
    day: "Thursday",
    title: "Speak up with confidence",
    text: "One hour live online. Share what happened, ask the hard questions, and reflect on how it felt.",
  },
  {
    day: "Friday",
    title: "Get answers before you act",
    text: "Open hours, 10:00–12:00 and 17:00–19:00 CET: a private 15-minute conversation with Biljana about anything from your week.",
  },
];

const weekColours = ["bg-wip-red", "bg-wip-blue", "bg-wip-ink", "bg-wip-red"];

export default function Course() {
  return (
    <section id="course" className="py-20 lg:py-28">
      <Container>
        <SectionHead no="05" label={`The course · starts ${WWA.course.startText}`} />
        <FadeIn>
          <h2 className={h2Cls}>
            Week by <span className="italic text-wip-red">week.</span>
          </h2>
          <p className={`mt-6 mb-12 max-w-[720px] ${leadCls}`}>
            This course is not only about knowing the rules. It is about using
            them. Each week, you also look at your own home rule and decide
            what to keep and where to adapt.
          </p>
        </FadeIn>
        <ol className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {weeks.map((w, i) => (
            <li key={w.title} className="flex flex-col border-2 border-wip-ink bg-white">
              <div className={`flex items-baseline gap-3 px-6 py-4 sm:px-7 text-white ${weekColours[i]}`}>
                <span className="font-ui text-[14px] font-bold uppercase tracking-[0.12em]">
                  Week {i + 1}
                </span>
              </div>
              <div className="px-6 py-6 sm:px-7 sm:py-7">
                <p className="font-editor font-medium text-[28px] sm:text-[32px] leading-[1.1] text-wip-ink">
                  {w.title}
                </p>
                <ul className="mt-5 space-y-3">
                  {w.points.map(([key, tail]) => (
                    <li key={key} className="flex items-start gap-3 font-editor text-[18px] leading-[1.45] text-wip-ink/85">
                      <span aria-hidden="true" className="mt-[11px] h-2 w-2 shrink-0 bg-wip-red" />
                      <span>
                        <strong className="font-semibold text-wip-ink">{key}</strong>
                        {tail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <FadeIn>
          <h3 className="mt-24 font-editor font-medium text-wip-ink text-[clamp(32px,4.2vw,50px)] leading-[1.05] tracking-[-0.015em]">
            Your <span className="italic text-wip-red">week.</span>
          </h3>
          <p className={`mt-5 max-w-[700px] ${leadCls}`}>
            The same rhythm every week, so you always know what comes next.
            Only the rule changes.
          </p>
        </FadeIn>
        <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {rhythm.map((r) => (
            <li key={r.day} className="flex flex-col border-2 border-wip-ink bg-white p-6">
              <span className="self-start rounded-full border-2 border-wip-blue px-3.5 py-1 font-ui text-[13px] font-semibold uppercase tracking-[0.1em] text-wip-blue">
                {r.day}
              </span>
              <p className="mt-5 font-editor font-medium text-[24px] leading-[1.15] text-wip-ink">
                {r.title}
              </p>
              <p className="mt-3 font-editor text-[17px] leading-[1.5] text-wip-ink/80">{r.text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-20 grid lg:grid-cols-[1.4fr_0.8fr] gap-12 items-center">
          <div className="on-dark bg-wip-ink p-7 sm:p-9 text-wip-paper">
            <h3 className="font-ui text-[13px] font-semibold uppercase tracking-[0.14em] text-wip-paper">
              What this course is not
            </h3>
            <p className="mt-5 font-editor text-[21px] sm:text-[24px] leading-[1.45]">
              No lectures on cultural theory. No charts to memorise. Just you,
              practising one real thing each week, with a group of people going
              through the same.
            </p>
          </div>
          <FramedPhoto block="bg-wip-red" className="mx-auto w-full max-w-[260px] -rotate-2">
            <Image
              src="/working-with-americans/laptop.webp"
              alt="Hands on a laptop next to a notebook and a cup of tea"
              width={542}
              height={833}
              sizes="260px"
              className="w-full h-auto"
            />
          </FramedPhoto>
        </div>
      </Container>
    </section>
  );
}
