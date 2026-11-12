import FadeIn from "../FadeIn";
import { Container, PageTop, Sparkle } from "./ui";

const startingPoints = [
  "You know American culture mostly through screens (films, series, social media, online work), not from living in it.",
  "You may think you already know how to work with Americans, so you act on instinct or assumption.",
  "You don’t yet see cultural competence as a skill, something you can learn and practise.",
];

// Quotes are real lines from Biljana's interviews. Never add one that
// someone didn't say.
const stages = [
  {
    when: "In the moment",
    items: [
      { text: "You don’t have the language to explain what is happening.", quote: "I felt so confused by their email." },
      { text: "You don’t know it’s a cultural difference, so you blame yourself or the other person.", quote: "I might not be good at my job." },
    ],
  },
  {
    when: "Over the next weeks",
    items: [
      { text: "You have no one to talk it through with.", quote: "I used Reddit to find some answers." },
      { text: "You withdraw: you go silent and stop speaking up.", quote: "I decided not to bring that part of me to a meeting again." },
    ],
  },
  {
    when: "Over the next months",
    items: [
      { text: "You stop caring.", quote: "I just do the work." },
      { text: "You start looking for another job.", quote: "I’m already applying for other jobs." },
      { text: "Your career stalls.", quote: "They offered me a position that was obviously not meant for me." },
    ],
  },
];

export default function Pattern() {
  return (
    <section className="py-20 lg:py-28 border-t-2 border-[#1a1a1a]">
      <Container>
        <FadeIn>
          <PageTop label="Before you start" right="03 / 08" />
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-start">
            <div>
              <h2 className="font-serif font-black text-[#1a1a1a] text-[clamp(32px,4.6vw,54px)] leading-[1.05] tracking-[-0.02em]">
                What might be getting in{" "}
                <span className="italic text-[#a8221d]">your way.</span>
              </h2>
              <p className="mt-7 font-body text-[19px] leading-[1.6] text-[#3a3a3a]">
                You may assume your way of working is everyone’s way of
                working: that people are the same everywhere, whatever the
                culture. You may also believe that hard work and dedication
                will be enough to do well in your job.
              </p>
              <p className="mt-5 font-body text-[19px] leading-[1.6] text-[#3a3a3a]">
                This belief often comes from where you are starting:
              </p>
              <ul className="mt-5 space-y-4">
                {startingPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <Sparkle className="mt-1.5 w-4 h-4 shrink-0 text-[#d4302a]" />
                    <span className="font-body text-[18px] leading-[1.55] text-[#1a1a1a]">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <figure className="lg:mt-24 -rotate-1 rounded-2xl bg-[#d4302a] text-white px-7 py-8 sm:px-9 sm:py-10 shadow-[6px_6px_0_#1a1a1a] border-2 border-[#1a1a1a]">
              <blockquote className="font-hand text-[34px] sm:text-[40px] leading-[1.15]">
                “We are all humans, we understand each other.”
              </blockquote>
              <figcaption className="mt-4 font-sans text-[12px] font-bold uppercase tracking-[0.2em] text-white/85">
                What one person told me in an interview
              </figcaption>
            </figure>
          </div>
        </FadeIn>

        <FadeIn>
          <h3 className="mt-24 font-serif font-black text-[#1a1a1a] text-[clamp(30px,4vw,46px)] leading-[1.05] tracking-[-0.015em]">
            Does this sound <span className="italic text-[#a8221d]">familiar?</span>
          </h3>
          <p className="mt-5 font-body text-[19px] sm:text-[21px] leading-[1.6] text-[#3a3a3a] max-w-[700px]">
            Something happens at work that you can’t read. Then a pattern
            starts.
          </p>
        </FadeIn>

        <ol className="mt-10 grid lg:grid-cols-3 gap-5 lg:gap-6">
          {stages.map((s, i) => (
            <li key={s.when} className="flex flex-col rounded-2xl border-2 border-[#1a1a1a] bg-white p-6 sm:p-7">
              <p className="font-sans text-[12px] font-bold uppercase tracking-[0.2em] text-[#a8221d]">
                {i + 1} · {s.when}
              </p>
              <ul className="mt-5 space-y-6">
                {s.items.map((item) => (
                  <li key={item.text}>
                    <p className="font-body text-[17px] leading-[1.5] text-[#1a1a1a]">{item.text}</p>
                    <p className="mt-1.5 font-hand text-[23px] leading-[1.25] text-[#a8221d]">
                      “{item.quote}”
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <FadeIn>
          <p className="mt-12 rounded-2xl bg-[#1a1a1a] px-7 py-6 sm:px-9 font-serif font-bold text-[22px] sm:text-[26px] leading-[1.35] text-white max-w-[900px]">
            This course is for the moment you recognise this pattern, so you
            can <span className="italic text-[#ff8a80]">stop it early.</span>
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
