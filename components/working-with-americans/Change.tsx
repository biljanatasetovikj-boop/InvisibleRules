import FadeIn from "../FadeIn";
import { Container, PageTop, Sparkle } from "./ui";

const now = [
  "Watching opportunities go to colleagues who are more visible",
  "Rereading emails five times before you press send",
  "Replaying meetings in your head, unsure how you came across",
  "Taking feedback personally and carrying it for days",
  "Translating yourself all day and ending the day exhausted",
];

const after = [
  "Sending clear requests without the rereading loop",
  "Leaving meetings knowing you were heard",
  "Handling feedback calmly, without taking it personally",
  "Feeling like yourself at work, instead of translating all day",
  "Being seen for the work you actually do",
];

export default function Change() {
  return (
    <section className="py-20 lg:py-28 border-t-2 border-[#1a1a1a]">
      <Container>
        <FadeIn>
          <PageTop label="What changes" right="04 / 08" />
          <h2 className="font-serif font-black text-[#1a1a1a] text-[clamp(34px,5vw,58px)] leading-[1.02] tracking-[-0.02em]">
            What changes in <span className="italic text-[#a8221d]">4 weeks.</span>
          </h2>
        </FadeIn>

        <div className="mt-12 grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          <div className="rounded-2xl border-2 border-dashed border-[#1a1a1a] bg-[#f1efe8] p-6 sm:p-8">
            <h3 className="font-sans text-[12px] font-bold uppercase tracking-[0.2em] text-[#5a5a5a]">
              Where you are now
            </h3>
            <ul className="mt-5 space-y-4">
              {now.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-[11px] h-[2px] w-3 shrink-0 bg-[#8a8a8a]" />
                  <span className="font-body text-[17px] leading-[1.5] text-[#3a3a3a]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-2xl border-2 border-[#1a1a1a] bg-white p-6 sm:p-8 shadow-[6px_6px_0_#d4302a]">
            <h3 className="font-sans text-[12px] font-bold uppercase tracking-[0.2em] text-[#a8221d]">
              Where you’ll be
            </h3>
            <ul className="mt-5 space-y-4">
              {after.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Sparkle className="mt-1.5 w-4 h-4 shrink-0 text-[#d4302a]" />
                  <span className="font-body text-[17px] leading-[1.5] text-[#1a1a1a]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <FadeIn>
          <div className="mt-12 max-w-[820px]">
            <p className="font-hand text-[26px] text-[#a8221d]">what this opens for you ↓</p>
            <p className="mt-2 font-serif font-bold text-[24px] sm:text-[28px] leading-[1.3] text-[#1a1a1a]">
              More visibility and more trust at work open the door to more
              responsibility, new projects, referrals and connections.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
