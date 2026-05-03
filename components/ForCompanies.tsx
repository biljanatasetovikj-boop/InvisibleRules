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
            For companies.
            <br />
            <span className="text-white/50 italic">
              If cultural friction is part of what you&apos;re seeing.
            </span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-6 text-xl text-white/70 leading-relaxed mb-10 max-w-2xl">
            <p>
              Some of this work happens with companies, not individuals. If
              you&apos;re seeing international hires stall, leave, or quietly
              disengage, and you suspect cultural friction is part of it,
              get in touch. We&apos;ll figure out whether there&apos;s
              something useful I can do.
            </p>
          </div>
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
