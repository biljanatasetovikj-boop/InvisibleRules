import FadeIn from "./FadeIn";

const interviews = [
  {
    category: "Visibility",
    title: "On being read as “too quiet” — and what it costs over a career.",
    excerpt:
      "The performance review feedback you've been getting isn't about your work. It's about a code you weren't taught to speak.",
    meta: "7 min read · April",
  },
  {
    category: "Communication",
    title: "How disagreement actually works in global rooms.",
    excerpt:
      "The unspoken grammar of pushback — when, how, and to whom. The thing nobody puts in the onboarding deck.",
    meta: "5 min read · March",
  },
  {
    category: "Belonging",
    title: "Fluency, not assimilation: a small but important distinction.",
    excerpt:
      "You don't have to become someone else to be understood. There's another way — and it's been there all along.",
    meta: "6 min read · February",
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
              <article className="border-t border-[#1a1a1a] pt-6">
                <div className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-[#d4302a] mb-4">
                  — {item.category}
                </div>
                <h3 className="font-serif font-bold text-[#1a1a1a] text-[26px] leading-[1.15] tracking-[-0.01em] mb-4">
                  {item.title}
                </h3>
                <p className="font-body text-[16px] text-[#3a3a3a] leading-[1.6] mb-6">
                  {item.excerpt}
                </p>
                <p className="font-body italic text-[14px] text-[#707070]">
                  {item.meta}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
