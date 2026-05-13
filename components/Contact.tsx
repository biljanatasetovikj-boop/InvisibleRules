import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="lets-talk" className="bg-white py-[130px] text-center">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[#d4302a]">
              04 — Start here
            </span>
            <span className="w-10 h-px bg-[#e0ddd5]" />
          </div>
          <h2 className="font-serif font-black text-[#1a1a1a] text-[clamp(42px,6vw,82px)] tracking-[-0.025em] leading-none mb-7">
            Let&apos;s <span className="text-[#d4302a] italic">talk</span>.
          </h2>
          <p className="font-body text-[21px] leading-[1.65] text-[#3a3a3a] max-w-[740px] mx-auto mb-13">
            A 30-minute discovery call. No pitch, no commitment. We see if there&apos;s a fit — and
            you leave with at least one rule you didn&apos;t have before.
          </p>
          <div className="flex justify-center gap-3.5 flex-wrap">
            <a
              href="mailto:biljanatasetovikj@gmail.com?subject=Discovery%20call%20%E2%80%94%20Invisible%20Rules"
              className="inline-block bg-[#1a1a1a] text-white px-9 py-4 font-sans text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-[#d4302a] transition-colors"
            >
              Book a discovery call
            </a>
            <a
              href="https://invisiblerules.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent text-[#1a1a1a] border-2 border-[#1a1a1a] px-9 py-4 font-sans text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-[#1a1a1a] hover:text-white transition-colors"
            >
              From People Like You
            </a>
          </div>
          <p className="mt-7 font-body italic text-[15px] text-[#707070]">
            Or find me on{" "}
            <a
              href="https://www.linkedin.com/in/biljana-kuzmanovska-tasetovikj/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a1a1a] hover:text-[#d4302a] transition-colors underline underline-offset-4 decoration-[#e0ddd5]"
            >
              LinkedIn ↗
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
