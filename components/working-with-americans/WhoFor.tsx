import FadeIn from "../FadeIn";
import { Container, PageTop } from "./ui";

const audience = [
  {
    who: "A professional",
    text: "you work remotely with American teams or managers, or you own a company that works with Americans.",
    style: "bg-white text-[#1a1a1a] -rotate-1",
  },
  {
    who: "A freelancer",
    text: "you work for American clients on your own.",
    style: "bg-[#d4302a] text-white rotate-1",
  },
  {
    who: "A student",
    text: "you are a Work and Travel student preparing for, or already doing, a job in the U.S., or a graduate student in an online programme at an American university.",
    style: "bg-[#1a1a1a] text-white -rotate-[0.5deg]",
  },
];

export default function WhoFor() {
  return (
    <section className="py-20 lg:py-28 border-t-2 border-[#1a1a1a]">
      <Container>
        <FadeIn>
          <PageTop label="Is this course for you?" right="02 / 08" />
          <h2 className="font-serif font-black text-[#1a1a1a] text-[clamp(32px,4.6vw,54px)] leading-[1.05] tracking-[-0.02em] max-w-[860px]">
            For people who work with Americans but were never taught the{" "}
            <span className="italic text-[#a8221d]">rules:</span>
          </h2>
          <p className="mt-10 font-hand text-[26px] text-[#a8221d]">
            this might be you ↓
          </p>
          <ul className="mt-4 grid md:grid-cols-3 gap-4 sm:gap-5 max-w-[1000px]">
            {audience.map((a) => (
              <li
                key={a.who}
                className={`rounded-2xl border-2 border-[#1a1a1a] px-5 py-4 ${a.style}`}
              >
                <span className="block font-sans text-[16px] font-bold leading-[1.35]">
                  {a.who}:
                </span>
                <span className="mt-1 block font-body text-[16px] leading-[1.5]">
                  {a.text}
                </span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </section>
  );
}
