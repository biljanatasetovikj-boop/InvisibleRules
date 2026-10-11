import Image from "next/image";
import FadeIn from "./FadeIn";
import BeehiivForm from "./BeehiivForm";

export default function Newsletter() {
  return (
    <section id="newsletter" className="bg-[#1a1a1a] py-24 lg:py-28">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                <span className="w-10 h-px bg-[#4a4a4a]" />
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[#d4302a]">
                  Newsletter
                </span>
                <span className="w-10 h-px bg-[#4a4a4a]" />
              </div>
              <h2 className="font-serif font-black text-[#fafaf7] text-[clamp(34px,5vw,58px)] tracking-[-0.025em] leading-[1.05] mb-6">
                Field notes on{" "}
                <span className="italic text-[#d4302a]">
                  working across cultures
                </span>
                .
              </h2>
              <p className="font-body text-[17px] text-[#e8e5de] leading-[1.65] mb-3 max-w-[500px] mx-auto lg:mx-0">
                One rule nobody explains, every two weeks. A real moment
                from work, what was really going on, and what you can do
                next time.
              </p>
              <p className="font-body italic text-[15px] text-[#a8a8a8] mb-9 max-w-[500px] mx-auto lg:mx-0">
                New subscribers also get Asking Your Manager: A Short Guide,
                free.
              </p>
              <div className="bg-[#fafaf7] p-6 sm:p-8 max-w-[500px] mx-auto lg:mx-0">
                <BeehiivForm />
                <p className="font-body text-[13px] text-[#707070] mt-4 text-center">
                  By signing up you agree to the{" "}
                  <a
                    href="/privacy"
                    className="underline decoration-[#e0ddd5] decoration-1 underline-offset-4 hover:decoration-[#d4302a] transition-colors"
                  >
                    privacy policy
                  </a>
                  .
                </p>
              </div>
            </div>

            <Image
              src="/newsletter-preview.png"
              alt="A collage of landmarks and faces from around the world"
              width={1408}
              height={1117}
              className="w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 420px"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
