import FadeIn from "./FadeIn";
import BeehiivForm from "./BeehiivForm";

export default function Newsletter() {
  return (
    <section
      id="newsletter"
      className="py-16 bg-[#fafaf7] border-t-2 border-[#1a1a1a]"
    >
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-7 md:gap-14 md:items-center">
            <div>
              <div className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[#d4302a] mb-3">
                Newsletter
              </div>
              <p className="font-serif text-[#1a1a1a] text-[clamp(22px,2.4vw,30px)] leading-[1.25] tracking-[-0.01em] max-w-[560px]">
                Occasional letters on the unwritten rules of global work —
                <span className="italic text-[#d4302a]">
                  {" "}
                  visibility, communication, belonging
                </span>
                .
              </p>
            </div>
            <div className="w-full md:w-[380px]">
              <BeehiivForm />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
