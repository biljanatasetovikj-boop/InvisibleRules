import type { Metadata } from "next";
import { Instrument_Sans, Newsreader } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Container } from "@/components/working-with-americans/ui";
import { WWA } from "@/lib/working-with-americans";

const editor = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});
const ui = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Course terms | Invisible Rules",
  description: "Terms for registering for Your First Years Working with Americans.",
  alternates: { canonical: "/working-with-americans/terms" },
};

const c = WWA.course;

const sections: { title: string; body: React.ReactNode[] }[] = [
  {
    title: "The course",
    body: [
      `Your First Years Working with Americans is a 4-week online course, ${c.datesText}, run by Biljana Tasetovikj (Invisible Rules). It is a small group of up to 15 people.`,
      "Each week has an email and video on Monday, a live one-hour session on Thursday, open hours on Friday, and a small daily task. The live sessions are held online.",
    ],
  },
  {
    title: "Registering and paying",
    body: [
      `The founding price is €${c.price}. When you register, you are asking for a place. Your place is confirmed when I write to you with the payment details and you have paid.`,
      "I reply personally within 2 working days. If the group is full, I will tell you, and you can join the next one.",
    ],
  },
  {
    title: "Refunds",
    body: [
      "You can cancel and get a full refund until the end of Sunday 6 December 2026, which is the end of week 1. Write to me at the email below.",
      "After that, I can't give refunds.",
      "If I cancel the course, you get a full refund.",
    ],
  },
  {
    title: "If I move a session",
    body: [
      "If I need to move a live session, I will offer you a new time and tell you as early as I can. I don't offer refunds for a session that has been rescheduled.",
    ],
  },
  {
    title: "If you miss a session",
    body: [
      "Life happens. If you can't join a live session, you still keep the emails, videos and tasks for that week. I can't repeat a live session for one person.",
    ],
  },
  {
    title: "What the course is and isn't",
    body: [
      "The course is about communication and workplace habits in American work culture. It is education and practice, not legal, HR or career advice, and I can't promise a particular result, such as a job, a raise or a promotion.",
    ],
  },
  {
    title: "Privacy and the group",
    body: [
      "What people share in the live sessions stays in the group. Please don't record sessions or share what others say.",
      "I use your name and email only to run the course and to write to you about it. More in the privacy policy.",
    ],
  },
  {
    title: "Materials",
    body: [
      "The emails, videos and templates are for your own use. Please don't share or resell them.",
    ],
  },
  {
    title: "Questions",
    body: [`Write to me at ${WWA.contactEmail}.`],
  },
];

export default function TermsPage() {
  return (
    <div className={`${editor.variable} ${ui.variable} wip bg-wip-paper text-wip-ink min-h-screen`}>
      <Nav />
      <main className="py-16 sm:py-24">
        <Container>
          <div className="max-w-[720px]">
            <a
              href="/working-with-americans#register"
              className="font-ui text-[15px] font-semibold text-wip-blue underline underline-offset-4 inline-flex items-center min-h-[44px]"
            >
              ← Back to the course
            </a>
            <h1 className="mt-6 font-editor font-medium text-[clamp(40px,7vw,64px)] leading-[1] tracking-[-0.03em]">
              Course terms
            </h1>
            <p className="mt-4 font-ui text-[14px] text-wip-ink/70">
              Your First Years Working with Americans. Last updated 25 November 2026.
            </p>
            {sections.map((s) => (
              <section key={s.title} className="mt-10">
                <h2 className="font-editor font-medium text-[28px] leading-tight">{s.title}</h2>
                {s.body.map((p, i) => (
                  <p key={i} className="mt-3 font-editor text-[19px] leading-[1.6] text-wip-ink/85">
                    {p}
                  </p>
                ))}
              </section>
            ))}
            <p className="mt-10 font-editor text-[19px] text-wip-ink/85">
              <a href="/privacy" className="underline decoration-wip-red decoration-2 underline-offset-4">
                Privacy policy
              </a>
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
