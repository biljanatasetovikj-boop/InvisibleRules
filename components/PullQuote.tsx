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
          <blockquote className="font-serif italic font-bold text-[clamp(22px,2.8vw,38px)] leading-[1.3] tracking-[-0.01em] max-w-[920px] mx-auto mb-9 text-white">
            I had the experience. I had the results. But I still started
            meetings by apologizing for how I spoke. What I lacked wasn&apos;t
            talent or ambition. It was{" "}
            <span className="text-[#d4302a]">cultural fluency</span>. Learning
            how to communicate and lead with confidence changed the way I saw
            myself and the way others responded to me.
          </blockquote>
          <div className="font-body italic text-[17px] text-[#a8a8a8]">
            — after working together
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
