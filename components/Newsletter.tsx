import FadeIn from "./FadeIn";
import BeehiivForm from "./BeehiivForm";

export default function Newsletter() {
  return (
    <section id="newsletter" className="py-28 bg-white border-t-2 border-[#1a1a1a]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[#d4302a]">
              Newsletter
            </span>
            <span className="w-10 h-px bg-[#e0ddd5]" />
          </div>
          <h2 className="font-serif font-black text-[#1a1a1a] text-[clamp(42px,6vw,82px)] tracking-[-0.025em] leading-none mb-8 max-w-[960px]">
            The Invisible Rules,{" "}
            <span className="italic text-[#d4302a]">in your inbox</span>.
          </h2>
          <p className="font-body text-[21px] leading-[1.65] text-[#3a3a3a] max-w-[740px] mb-12">
            Occasional letters on visibility, communication, and belonging at
            work — the things nobody puts in the onboarding deck. No spam,
            unsubscribe anytime.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="max-w-[540px]">
            <BeehiivForm />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
