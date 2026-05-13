import FadeIn from "./FadeIn";

export default function PullQuote() {
  return (
    <section className="bg-[#1a1a1a] text-white py-[140px] text-center">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex items-center justify-center gap-4 mb-11">
            <span className="w-8 h-px bg-[#d4302a]" />
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[#d4302a]">
              A client, paraphrased
            </span>
            <span className="w-8 h-px bg-[#d4302a]" />
          </div>
          <blockquote className="font-serif italic font-bold text-[clamp(34px,5vw,64px)] leading-[1.1] tracking-[-0.02em] max-w-[1060px] mx-auto mb-9 text-white">
            I didn&apos;t need to work <span className="text-[#d4302a]">harder</span>.
            <br />
            I needed someone to tell me
            <br />
            the <span className="text-[#d4302a]">rules</span>.
          </blockquote>
          <div className="font-body italic text-[17px] text-[#a8a8a8]">
            — after our first session
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
