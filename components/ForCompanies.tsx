import FadeIn from "./FadeIn";

export default function ForCompanies() {
  return (
    <section
      id="for-companies"
      className="py-28 bg-[#fafaf7] border-t-2 border-[#1a1a1a]"
    >
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <h2 className="font-serif font-black text-[#1a1a1a] text-[clamp(42px,6vw,82px)] tracking-[-0.025em] leading-none mb-8">
            For companies.
          </h2>
          <p className="font-body text-[21px] leading-[1.65] text-[#3a3a3a] max-w-[740px] mb-8">
            Some of this work happens with teams where people come from
            different countries. I take on one or two company clients at a
            time, and I start by finding where the friction actually sits.
          </p>
          <a
            href="/for-companies"
            className="group inline-flex items-center gap-2 font-sans text-[13px] font-bold uppercase tracking-[0.18em] text-[#1a1a1a] hover:text-[#d4302a] transition-colors"
          >
            How I work with companies
            <span className="text-[#d4302a] group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
