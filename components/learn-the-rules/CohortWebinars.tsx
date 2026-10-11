import FadeIn from "../FadeIn";

export default function CohortWebinars() {
  return (
    <section id="free-sessions" className="py-28 border-t-2 border-[#1a1a1a]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-sans text-[12px] font-bold uppercase tracking-[0.28em] text-[#d4302a]">
              06 / Come and see first
            </span>
            <span className="w-10 h-px bg-[#e0ddd5]" />
          </div>
          <h2 className="font-serif font-black text-[#1a1a1a] text-[clamp(38px,5.5vw,72px)] tracking-[-0.025em] leading-none mb-6 max-w-[900px]">
            Free <span className="text-[#d4302a] italic">sessions</span>.
          </h2>
          <p className="font-body text-[21px] leading-[1.65] text-[#3a3a3a] max-w-[740px] mb-10">
            I run free sessions from time to time. One hour each, and you do
            not have to be thinking about joining anything to come to one.
            They stand on their own, and you will leave with at least one
            rule you did not have before.
          </p>
          <a
            href="https://www.linkedin.com/in/biljana-kuzmanovska-tasetovikj/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1a1a1a] text-white px-9 py-4 font-sans text-[13px] font-bold uppercase tracking-[0.18em] hover:bg-[#d4302a] transition-colors"
          >
            See the next one on LinkedIn →
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
