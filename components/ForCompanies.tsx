import FadeIn from "./FadeIn";

const approach = [
  {
    title: "Diagnose, then train",
    body: "I start by understanding where the friction actually sits through an intercultural competence assessment, then design training around what the results show.",
  },
  {
    title: "High-touch and selective",
    body: "I take on 1–2 company clients at a time, so you get hands-on collaboration and face time — virtually and in person — rather than a recycled playbook.",
  },
  {
    title: "Grounded in real experience",
    body: "I bring 18 years in international organizations and cross-cultural programming, plus firsthand experience of navigating an institution’s hidden curriculum myself. Company-facing training is a newer chapter, and I’d rather be honest about that than oversell. What I offer is close attention and work built around your specific realities.",
  },
];

export default function ForCompanies() {
  return (
    <section
      id="for-companies"
      className="py-28 bg-[#fafaf7] border-t-2 border-[#1a1a1a]"
    >
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[#d4302a]">
              For companies
            </span>
            <span className="w-10 h-px bg-[#e0ddd5]" />
          </div>
          <h2 className="font-serif font-black text-[#1a1a1a] text-[clamp(42px,6vw,82px)] tracking-[-0.025em] leading-none mb-8 max-w-[960px]">
            For companies.
            <br />
            <span className="italic text-[#d4302a]">
              If cultural friction is part of what you&apos;re seeing.
            </span>
          </h2>
          <p className="font-body text-[21px] leading-[1.65] text-[#3a3a3a] max-w-[740px]">
            Some of this work happens with companies, in teams with people from
            different countries. Here&apos;s what&apos;s often at stake when the
            unwritten rules go unaddressed:
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="font-body text-[19px] leading-[1.7] text-[#3a3a3a] max-w-[740px] mt-8 border-l-4 border-[#d4302a] pl-8">
            Capable international hires stay in survival mode. They perform
            technically, but hold back the ideas, questions, and visibility that
            get people promoted. They quietly disengage, stall, or leave, and it
            reads as &ldquo;poor fit&rdquo; when it&apos;s really unnamed
            cultural friction. The cost lands twice: on the person navigating
            rules no one explained, and on the team that loses them.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h3 className="font-serif font-black text-[#1a1a1a] text-[clamp(28px,3.5vw,40px)] tracking-[-0.02em] leading-none mt-20 mb-12">
            How I work with companies.
          </h3>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {approach.map((item, i) => (
            <FadeIn key={item.title} delay={0.2 + i * 0.1}>
              <div className="border-t border-[#1a1a1a] pt-6">
                <h4 className="font-serif font-bold text-[#1a1a1a] text-[22px] leading-[1.2] tracking-[-0.01em] mb-4">
                  {item.title}
                </h4>
                <p className="font-body text-[16px] text-[#3a3a3a] leading-[1.65]">
                  {item.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <h3 className="font-serif font-black text-[#1a1a1a] text-[clamp(28px,3.5vw,40px)] tracking-[-0.02em] leading-none mt-20 mb-8">
            Get started.
          </h3>
          <p className="font-body text-[19px] leading-[1.7] text-[#3a3a3a] max-w-[740px] mb-12">
            Reach out or schedule a free consultation and we&apos;ll talk
            through where things stand. If it&apos;s a good fit, I&apos;ll share
            how I could best support your team.
          </p>
          <a
            href="#lets-talk"
            className="inline-block bg-[#1a1a1a] text-white px-9 py-4 font-sans text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-[#d4302a] transition-colors"
          >
            Schedule a free consultation
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
