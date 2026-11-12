import Image from "next/image";
import FadeIn from "../FadeIn";
import { WWA } from "@/lib/working-with-americans";
import { Container, PageTop, Sparkle, StepDot, TapedPhoto } from "./ui";

const weeks = [
  {
    title: "Say it clearly",
    points: [
      "You’ll open a call with two easy minutes of small talk: share a hobby or something from your day, and ask about theirs.",
      "You’ll write and send real requests that lead with the ask, so your American readers act on them instead of skimming past. You keep the template for the next one.",
      "You’ll spot your own home rule for asking and for small talk, and decide what to keep and where to adapt.",
    ],
  },
  {
    title: "Find your place in the room",
    points: [
      "You’ll share your opinion in meetings, which is what Americans are actually waiting for you to do.",
      "You’ll give your view to managers and senior people before a decision is made, then commit once it is.",
      "You’ll build trust with your boss or clients by showing your work early, before it is perfect. In American work culture, trust grows from work done well.",
    ],
  },
  {
    title: "Handle the hard conversations",
    points: [
      "You’ll say when you disagree and still feel part of the team, following “this isn’t working” with “here’s what I suggest”. Americans expect a proposal, not only a problem.",
      "You’ll read American feedback correctly and hear the real message that often comes after the praise (“Great work! Just one small thing…”).",
      "You’ll understand work relationships: friendly doesn’t always mean friendship, and asking for an introduction or advice is normal, not pushy.",
    ],
  },
  {
    title: "Be seen and valued",
    points: [
      "You’ll send a short update to the people who make decisions: what you did, with a number, what it means, and what comes next.",
      "You’ll share one real result and ask for feedback on it.",
      "You’ll keep a wins log, so your results are ready whenever someone asks what you have been working on.",
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

export default function Course() {
  return (
    <section id="course" className="py-20 lg:py-28 border-t-2 border-[#1a1a1a]">
      <Container>
        <FadeIn>
          <PageTop label={`The course · starts ${WWA.course.startText}`} right="05 / 08" />
          <h2 className="font-serif font-black text-[#1a1a1a] text-[clamp(34px,5vw,58px)] leading-[1.02] tracking-[-0.02em] max-w-[900px]">
            Week by <span className="italic text-[#a8221d]">week.</span>
          </h2>
          <p className="mt-6 mb-10 font-body text-[19px] sm:text-[21px] leading-[1.6] text-[#3a3a3a] max-w-[720px]">
            This course is not only about knowing the rules. It is about using
            them. Each week, you also look at your own home rule and decide
            what to keep and where to adapt.
          </p>
        </FadeIn>
        <ol className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {weeks.map((w, i) => (
            <li key={w.title} className="flex flex-col rounded-2xl border-2 border-[#1a1a1a] bg-white p-6 sm:p-7">
              <div className="flex items-center gap-4">
                <StepDot n={i + 1} className="h-14 w-14 text-[28px]" />
                <span className="font-sans text-[12px] font-bold uppercase tracking-[0.2em] text-[#a8221d]">
                  Week {i + 1}
                </span>
              </div>
              <p className="mt-5 font-serif font-black text-[26px] sm:text-[28px] leading-[1.1] text-[#1a1a1a]">
                {w.title}
              </p>
              <ul className="mt-5 space-y-4">
                {w.points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <Sparkle className="mt-1.5 w-3.5 h-3.5 shrink-0 text-[#d4302a]" />
                    <span className="font-body text-[16px] sm:text-[17px] leading-[1.55] text-[#3a3a3a]">{p}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <FadeIn>
          <h3 className="mt-24 font-serif font-black text-[#1a1a1a] text-[clamp(30px,4vw,46px)] leading-[1.05] tracking-[-0.015em]">
            Your <span className="italic text-[#a8221d]">week.</span>
          </h3>
          <p className="mt-5 font-body text-[19px] sm:text-[21px] leading-[1.6] text-[#3a3a3a] max-w-[700px]">
            The same rhythm every week, so you always know what comes next.
            Only the rule changes.
          </p>
        </FadeIn>
        <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {rhythm.map((r) => (
            <li key={r.day} className="flex flex-col rounded-2xl border-2 border-[#1a1a1a] bg-white p-6">
              <span className="self-start rounded-full border-2 border-[#d4302a] px-3.5 py-1 font-sans text-[12px] font-bold uppercase tracking-[0.14em] text-[#a8221d]">
                {r.day}
              </span>
              <p className="mt-5 font-serif font-black text-[24px] leading-[1.15] text-[#1a1a1a]">
                {r.title}
              </p>
              <p className="mt-3 font-body text-[16px] leading-[1.55] text-[#3a3a3a]">{r.text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-16 grid lg:grid-cols-[1.4fr_0.8fr] gap-10 lg:gap-12 items-center">
          <div className="rounded-2xl bg-[#1a1a1a] p-6 sm:p-8 text-white">
            <h3 className="font-sans text-[12px] font-bold uppercase tracking-[0.2em] text-[#ff8a80]">
              What this course is not
            </h3>
            <p className="mt-5 font-body text-[18px] leading-[1.6] text-white/90">
              No lectures on cultural theory. No charts to memorise. Just you,
              practising one real thing each week, with a group of people going
              through the same.
            </p>
          </div>
          <TapedPhoto tilt="-rotate-2" className="mx-auto w-full max-w-[260px]">
            <Image
              src="/working-with-americans/laptop.webp"
              alt="Hands on a laptop next to a notebook and a cup of tea"
              width={542}
              height={833}
              sizes="260px"
              className="w-full h-auto rounded-[3px]"
            />
          </TapedPhoto>
        </div>
      </Container>
    </section>
  );
}
