import FadeIn from "./FadeIn";

export default function ForCompanies() {
  return (
    <section
      id="for-companies"
      className="bg-[#1B3557] text-white py-24 lg:py-32 px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-xs uppercase tracking-widest text-[#C4923A] font-medium mb-5">
            For Global Organizations
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
            Your international team is underperforming.
            <br />
            <span className="text-white/50 italic">
              The reason probably isn&apos;t what you think.
            </span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-2xl">
            Depending on your situation, we might work together through a
            focused workshop, an ongoing training program for your international
            team members, or a combination. This is early-stage, high-touch work
            — I take on a small number of company clients at a time.
          </p>
          <a
            href="#lets-talk"
            className="inline-flex items-center gap-2 border border-white/30 text-white text-base font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
          >
            → Let&apos;s Talk about your team
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
