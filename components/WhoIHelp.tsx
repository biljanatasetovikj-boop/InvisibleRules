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
            Competent. Several years in.
            <br />
            <span className="italic text-[#1B3557]">
              Reading a room nobody briefed you on.
            </span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-6 text-lg text-[#6B6B6B] leading-relaxed max-w-3xl">
            <p>
              If you&apos;re working inside a global company, and the people
              calling the shots grew up in a different culture from yours
              (North America, the UK, the Nordics), and you sense there&apos;s
              a layer to how things work that nobody is naming, this work is
              for you.
            </p>
            <p>
              I work with people from the Global South, Eastern Europe, the
              Middle East, East and Southeast Asia. People several years in.
              Competent. Reading the room and finding it harder than it
              should be, especially in remote and hybrid setups, where the
              informal moments where you used to pick up the rules have
              mostly disappeared.
            </p>
            <p className="text-[#111111] font-medium text-xl">
              If you&apos;re in one of these systems and you keep wondering
              why visibility isn&apos;t building, why feedback contradicts
              itself, why the promotion went somewhere else, this is the work.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
