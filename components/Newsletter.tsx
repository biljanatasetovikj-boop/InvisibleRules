import FadeIn from "./FadeIn";
import BeehiivForm from "./BeehiivForm";

export default function Newsletter() {
  return (
    <section id="newsletter" className="bg-[#1a1a1a] py-24 lg:py-28">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="max-w-[720px] mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-10 h-px bg-[#4a4a4a]" />
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[#d4302a]">
                Newsletter
              </span>
              <span className="w-10 h-px bg-[#4a4a4a]" />
            </div>
            <h2 className="font-serif font-black text-[#fafaf7] text-[clamp(34px,5vw,58px)] tracking-[-0.025em] leading-[1.05] mb-9">
              Field notes,{" "}
              <span className="italic text-[#d4302a]">in your inbox</span>.
            </h2>
            <div className="bg-[#fafaf7] p-5 sm:p-8 lg:p-10 text-left">
              <BeehiivForm />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
