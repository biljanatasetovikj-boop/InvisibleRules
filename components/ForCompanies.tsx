import FadeIn from "./FadeIn";

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
          <p className="font-body text-[21px] leading-[1.65] text-[#3a3a3a] max-w-[740px] mb-12">
            Some of this work happens with companies, not individuals. If
            you&apos;re seeing international hires stall, leave, or quietly
            disengage, and you suspect cultural friction is part of it, get in
            touch. We&apos;ll figure out whether there&apos;s something useful
            I can do.
          </p>
          <a
            href="mailto:biljanatasetovikj@gmail.com?subject=Companies%20%E2%80%94%20Invisible%20Rules"
            className="inline-block bg-[#1a1a1a] text-white px-9 py-4 font-sans text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-[#d4302a] transition-colors"
          >
            Let&apos;s talk about your team
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
