import FadeIn from "./FadeIn";

const interviews = [
  {
    category: "Visibility",
    title: "What being seen at work actually means — and why you can’t do it alone.",
    excerpt:
      "Visibility isn’t only on you. It depends on how your silence gets read across cultures — and capable people can go unseen while being fully in the room.",
    meta: "Newsletter",
    href: "https://theinvisiblerules.beehiiv.com/p/what-being-seen-at-work-actually-means-and-why-you-can-t-do-it-alone",
  },
  {
    category: "Communication",
    title: "Ask the question. Don’t assume you already know.",
    excerpt:
      "So much friction in global teams comes from filling the gaps with assumptions. The quieter move — asking — is usually the stronger one.",
    meta: "LinkedIn post",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7491376330094338049/",
  },
  {
    category: "Belonging",
    title: "Invisible Rules: The First Story.",
    excerpt:
      "11 questions and 11 answers about working inside a world that wasn’t built for you.",
    meta: "Story",
    href: "https://invisiblerules.substack.com/p/invisible-rules-the-first-story",
  },
];

export default function Interviews() {
  return (
    <section
      id="interviews"
      className="py-28 border-t-2 border-[#1a1a1a]"
    >
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex items-center gap-3 mb-8">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[#d4302a]">
              From people like you
            </span>
            <span className="w-10 h-px bg-[#e0ddd5]" />
          </div>
          <h2 className="font-serif font-black text-[#1a1a1a] text-[clamp(42px,6vw,82px)] tracking-[-0.025em] leading-[1] mb-16 max-w-[1100px]">
            Interviews on career growth, visibility and the{" "}
            <span className="italic text-[#d4302a]">rules nobody named</span>.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {interviews.map((item, i) => (
            <FadeIn key={item.category} delay={i * 0.1}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <article className="border-t border-[#1a1a1a] pt-6">
                  <div className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-[#d4302a] mb-4">
                    — {item.category}
                  </div>
                  <h3 className="font-serif font-bold text-[#1a1a1a] text-[26px] leading-[1.15] tracking-[-0.01em] mb-4 transition-colors group-hover:text-[#d4302a]">
                    {item.title}
                  </h3>
                  <p className="font-body text-[16px] text-[#3a3a3a] leading-[1.6] mb-6">
                    {item.excerpt}
                  </p>
                  <p className="font-body italic text-[14px] text-[#707070]">
                    {item.meta}
                  </p>
                </article>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
