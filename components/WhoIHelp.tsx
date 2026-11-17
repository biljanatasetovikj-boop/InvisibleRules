import FadeIn from "./FadeIn";

const cards = [
  <>
    Your work is strong, but it does not bring you the{" "}
    <em className="italic font-black text-[#d4302a]">
      visibility and recognition
    </em>{" "}
    it deserves.
  </>,
  <>
    You have never lived or studied in the West, but your company and colleagues are Western.
  </>,
  <>
    No one ever taught you this was a skill. You assumed that good work would be noticed.
  </>,
];

export default function WhoIHelp() {
  return (
    <section
      id="who-i-help"
      className="py-20 md:py-28 bg-[#fafaf7] border-t-2 border-[#1a1a1a]"
    >
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <h2 className="font-serif font-black text-[#1a1a1a] text-[clamp(32px,4.4vw,56px)] tracking-[-0.02em] leading-[1.05] mb-12">
            This is for you if:
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 border-[3px] border-[#1a1a1a] divide-y-[3px] md:divide-y-0 md:divide-x-[3px] divide-[#fafaf7]">
          {cards.map((card, i) => (
            <FadeIn key={i} delay={i * 0.08} className="h-full">
              <div className="bg-[#1a1a1a] h-full px-7 py-10 md:px-9 md:py-14 lg:px-10 lg:py-16">
                <p className="font-serif font-bold text-white text-[clamp(25px,2.6vw,34px)] leading-[1.22] tracking-[-0.015em]">
                  {card}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
