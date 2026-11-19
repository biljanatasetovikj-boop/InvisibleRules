import Image from "next/image";
import FadeIn from "../FadeIn";
import { WWA } from "@/lib/working-with-americans";
import { Container, FramedPhoto, SectionHead, linkCls } from "./ui";

const threads = [
  {
    title: "I build things that didn’t exist yet.",
    colour: "bg-wip-red",
    items: [
      "Opened the first regional TOEFL iBT testing centre in Bitola in 2010, and ran 100+ testing sessions there",
      "Started the first Competitive College Club in Macedonia, then took it to Skopje and Tetovo",
      "Founded my own English school, with 3 teachers and 150+ adult students",
      "Started a project that helped 700+ teachers use cloud tools in their classrooms, and later won the Europe-wide award for innovative virtual programming",
      "Led MOOCs and CV and interview workshops when almost nobody had heard of them, and no one thought they would need them 🙂",
    ],
  },
  {
    title: "I listen to people at the moment they decide to change.",
    colour: "bg-wip-blue",
    items: [
      "Advised 10,000+ students, parents and educators",
      "Did 600+ entrance interviews with adults starting new careers in project management, HR, data science and digital marketing",
      "Helped win $5M+ in scholarships for Macedonian students placed at Harvard, MIT and other top U.S. universities",
      "Became a certified GCDF career adviser, and changed the careers of two of my friends (who says you can’t be a career counsellor to people you know? 🙂)",
    ],
  },
  {
    title: "I bring two cultures into one room.",
    colour: "bg-wip-ink",
    items: [
      "Organised nearly 4,500 cultural community events between two cultures",
      "Ran 10 education fairs in Skopje, with a record 2,800 visitors in one year",
      "Brought 3,500+ students into regional spelling bees",
      "Trained new advisers across Europe, and presented at conferences from Washington to Madrid",
    ],
  },
];

const p = "font-editor text-[19px] sm:text-[20px] leading-[1.6] text-wip-ink/85";

export default function AboutShort() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <Container>
        <SectionHead no="07" label="About me" />
        <div className="grid lg:grid-cols-[300px_1fr] gap-12 lg:gap-16 items-start">
          <FramedPhoto block="bg-wip-red" className="mx-auto w-full max-w-[240px] lg:max-w-none rotate-1">
            <Image
              src="/biljana-new.png"
              alt="Portrait of Biljana"
              width={1254}
              height={1254}
              sizes="(min-width: 1024px) 300px, 240px"
              className="w-full h-auto"
            />
          </FramedPhoto>

          <div className="max-w-[720px] space-y-5">
            <h2 className="font-editor font-medium text-wip-ink text-[clamp(30px,3.6vw,42px)] leading-[1.15] tracking-[-0.015em]">
              I&apos;m Biljana,{" "}
              <span className="block mt-2 text-[clamp(22px,2.4vw,28px)] leading-[1.3]">
                Cross-cultural consultant &amp; mentor |{" "}
                <span className="whitespace-nowrap">
                  Founder, <span className="italic text-wip-red">Invisible Rules</span>
                </span>
              </span>
            </h2>
            <p className={`${p} pt-3`}>I’m 44, and I have never lived in the U.S.</p>
            <p className={p}>
              Still, for 18 years I worked for an American organisation from a
              small office in Macedonia.
            </p>
            <p className={p}>
              Languages were my thing. I studied English and French, then
              taught them. So I thought I was ready.
            </p>
            <p className={p}>
              I wasn’t. I lost a project because I wouldn’t show unfinished
              work. My manager wanted to see it at 60% so he could help me.
              Where I come from, you never show up unready.
            </p>
            <p className="py-4 font-editor italic font-medium text-[28px] sm:text-[34px] leading-[1.25] text-wip-red">
              I spoke the language, but I didn’t speak the culture yet.
            </p>
            <p className={p}>
              I learned it slowly, mostly through mistakes. Along the way I
              found out what I do best. It comes down to three threads.
            </p>
          </div>
        </div>

        <ol className="mt-16 grid lg:grid-cols-3 gap-6 lg:gap-8">
          {threads.map((t, i) => (
            <li key={t.title} className="flex flex-col border-2 border-wip-ink bg-white">
              <div className={`flex items-start gap-4 px-6 py-5 lg:min-h-[116px] text-white ${t.colour}`}>
                <span className="font-editor font-medium text-[44px] leading-none">{i + 1}</span>
                <p className="pt-1 font-editor font-medium text-[22px] leading-[1.25]">{t.title}</p>
              </div>
              <ul className="px-6 py-6 space-y-3.5">
                {t.items.map((item) => (
                  <li key={item} className="flex gap-2.5 font-editor text-[17px] leading-[1.5] text-wip-ink/85">
                    <span aria-hidden="true" className="text-wip-red">↳</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <FadeIn>
          <div className="mt-16 max-w-[760px] lg:ml-[364px] space-y-5">
            <p className={p}>
              All in, that’s 18 years of learning one culture from the outside
              and helping thousands of people step into it.
            </p>
            <p className={p}>
              The quiet girl who waited to be called on in elementary school
              became a top senior adviser in a global network of 400.
            </p>
            <p className={p}>
              In September I left that career to build Invisible Rules. So many
              talented people are still learning these rules alone, the way I
              did. I’d love to make that road a little lighter.
            </p>

            <div className="pt-6 flex flex-wrap items-center gap-x-6 gap-y-1 border-t-2 border-wip-ink font-editor text-[18px] text-wip-ink">
              <span className="font-ui text-[13px] font-semibold uppercase tracking-[0.14em] text-wip-blue">
                Contact
              </span>
              <a href={`mailto:${WWA.contactEmail}`} className={`${linkCls} break-all`}>
                {WWA.contactEmail}
              </a>
              <a href={WWA.linkedIn} target="_blank" rel="noopener noreferrer" className={linkCls}>
                LinkedIn ↗
              </a>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
