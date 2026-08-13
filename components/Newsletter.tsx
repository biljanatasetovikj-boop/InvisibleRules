import FadeIn from "./FadeIn";
import BeehiivForm from "./BeehiivForm";

export default function Newsletter() {
  return (
    <section id="newsletter" className="bg-[#1a1a1a] py-24 lg:py-28">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_400px] gap-12 md:gap-16 md:items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[#d4302a]">
                  Newsletter
                </span>
                <span className="w-10 h-px bg-[#4a4a4a]" />
              </div>
              <h2 className="font-serif font-black text-[#fafaf7] text-[clamp(34px,4.8vw,62px)] tracking-[-0.025em] leading-[1.02] max-w-[620px]">
                Field notes on{" "}
                <span className="italic text-[#d4302a]">
                  working across cultures
                </span>
                .
              </h2>
            </div>

            <div className="bg-[#fafaf7] p-8 lg:p-9">
              <BeehiivForm />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
