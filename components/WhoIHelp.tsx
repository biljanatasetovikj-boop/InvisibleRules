import FadeIn from "./FadeIn";

export default function WhoIHelp() {
  return (
    <section
      id="who-i-help"
      className="py-24 lg:py-32 px-6 lg:px-8 bg-[#FAFAF7]"
    >
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-xs uppercase tracking-widest text-[#C4923A] font-medium mb-5">
            Who This Is For
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-14 text-[#111111]">
            Multilingual, talented, ambitious.
            <br />
            <span className="italic text-[#1B3557]">
              A global generation, forming faster than the systems can adapt.
            </span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-6 text-lg text-[#6B6B6B] leading-relaxed max-w-3xl">
            <p>
              When I say non-Western talent, I mean people whose cultural
              background was shaped outside the Anglo-Saxon and Nordic
              frameworks most global organizations run on. Professionals from
              the Global South, Eastern Europe, the Middle East, East and
              Southeast Asia, and beyond. When I say global companies, I mean
              organizations that operate across borders but run on a single,
              dominant cultural logic. The gap between those two things is
              exactly where I work, especially with hybrid and remote
              professionals, where the informal channels for picking up
              cultural fluency have largely collapsed.
            </p>
            <p>
              About a third of full-time professionals globally are now fully
              remote. Another half are hybrid. Cultural intelligence has become
              one of the two skills, alongside AI fluency, that decide who
              advances. Workers with high cultural intelligence are twice as
              likely to be promoted. The middle is hollowing out fast.
            </p>
            <p className="text-[#111111] font-medium text-xl">
              If you&apos;re navigating one of these systems and you feel like
              you&apos;re missing the unwritten rules. How you get read in
              your organization. How influence builds. What makes a
              contribution land the way it should. This work was built for you.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
