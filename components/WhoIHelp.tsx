import FadeIn from "./FadeIn";

export default function WhoIHelp() {
  return (
    <section
      id="who-i-help"
      className="py-28 bg-[#fafaf7] border-t-2 border-[#1a1a1a]"
    >
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <h2 className="font-serif italic text-[#d4302a] text-[clamp(30px,4vw,52px)] mb-14">
            This is for you if:
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          <FadeIn delay={0} className="h-full">
            <div className="bg-white border-t-8 border-[#d4302a] p-10 h-full">
              <p className="font-body text-[21px] leading-[1.55] text-[#1a1a1a]">
                Your work is strong, but it does not bring you the{" "}
                <em className="italic text-[#d4302a] font-bold">
                  visibility and recognition
                </em>{" "}
                it deserves.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.07} className="h-full">
            <div className="bg-white border-t-8 border-[#d4302a] p-10 h-full">
              <p className="font-body text-[21px] leading-[1.55] text-[#1a1a1a]">
                You have never{" "}
                <em className="italic text-[#d4302a] font-bold">
                  lived or studied in the West
                </em>
                , but your company and colleagues are Western.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.14} className="h-full">
            <div className="bg-white border-t-8 border-[#d4302a] p-10 h-full">
              <p className="font-body text-[21px] leading-[1.55] text-[#1a1a1a]">
                No one ever taught you this was a skill. You assumed that{" "}
                <em className="italic text-[#d4302a] font-bold">
                  good work would be noticed
                </em>
                .
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
