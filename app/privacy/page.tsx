import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RemovalForm from "@/components/RemovalForm";

export const metadata: Metadata = {
  title: "Privacy Policy — Invisible Rules",
  description: "How Invisible Rules collects and uses information.",
};

const sections = [
  {
    title: "Contact form (“Let’s talk”)",
    body: "When you send a message through the contact form on the home page, your name, email address and message are sent directly from your browser to biljanatasetovikj@gmail.com, using a third-party service called formsubmit.co. This is used only to read and reply to your message.",
  },
  {
    title: "Newsletter sign-up",
    body: "The newsletter form is provided directly by Beehiiv, the platform the newsletter runs on. The email address you enter is submitted straight to Beehiiv’s own servers and is handled under Beehiiv’s own privacy policy — it does not pass through Invisible Rules’ own systems or inbox.",
  },
  {
    title: "The Diagnostic (/quiz)",
    body: "After you complete the quiz, your first name, last name, email address and your result (a score, a “band,” and your top three friction areas) are sent to biljanatasetovikj@gmail.com, using formsubmit.co. Your answers to each individual question are used in your browser to calculate this result and are not included in what is sent.",
  },
  {
    title: "Your Archetype (/archetype-quiz)",
    body: "After you complete this quiz, your first name, last name, email address, your archetype result, your scores on each dimension, and your answer to every individual question are sent to a private Google Sheet, using a Google Apps Script link. This is a different destination from the forms above: it does not go to Biljana’s email inbox directly, though she can view the responses in that spreadsheet.",
  },
  {
    title: "Free guide and waitlist forms",
    body: "The form for Asking Your Manager: A Short Guide, the Decoder waitlist and the Spring cohort waitlist each collect your first name and email address (the guide form also records whether you ticked “Also send me the newsletter”). This information is sent to biljanatasetovikj@gmail.com, using formsubmit.co.",
  },
  {
    title: "Booking a call (/learn-the-rules)",
    body: "The scheduling calendar used to book a call is provided directly by Cal.com. When you book a time, your name, email address and chosen time are handled by Cal.com under its own privacy policy and are not separately stored by Invisible Rules.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="py-28 border-t-2 border-[#1a1a1a]">
          <div className="max-w-[820px] mx-auto px-6 lg:px-12">
            <div className="mb-10 font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-[#707070]">
              Last updated 11 October 2026
            </div>
            <h1 className="font-serif font-black text-[#1a1a1a] text-[clamp(38px,6vw,64px)] tracking-[-0.025em] leading-none mb-10">
              Privacy policy.
            </h1>
            <p className="font-body text-[17px] text-[#3a3a3a] leading-[1.7] mb-14">
              This page explains what information Invisible Rules collects,
              through which forms and tools, and where it goes. It is
              written in plain language and describes only what this site
              actually does. Invisible Rules is run by one person, Biljana
              Kuzmanovska Tasetovikj, based in Ohrid, North Macedonia.
            </p>

            <div className="space-y-14">
              {sections.map((s) => (
                <div key={s.title} className="border-t border-[#e0ddd5] pt-8">
                  <h2 className="font-serif font-bold text-[#1a1a1a] text-[24px] leading-[1.2] mb-4">
                    {s.title}
                  </h2>
                  <p className="font-body text-[16px] text-[#3a3a3a] leading-[1.7]">
                    {s.body}
                  </p>
                </div>
              ))}

              <div className="border-t border-[#e0ddd5] pt-8">
                <h2 className="font-serif font-bold text-[#1a1a1a] text-[24px] leading-[1.2] mb-4">
                  Cookies and analytics
                </h2>
                <p className="font-body text-[16px] text-[#3a3a3a] leading-[1.7]">
                  This site does not run any analytics or tracking tool.
                  There is no Google Analytics, no Vercel Analytics, and no
                  advertising pixel anywhere in the code, and no cookies are
                  set for tracking or advertising. The site is hosted by
                  Vercel, which keeps standard technical records of requests
                  to the server, including IP addresses, for security and to
                  keep the site running. The newsletter form and the
                  scheduling calendar are loaded from Beehiiv and Cal.com,
                  and those companies may set their own cookies when you use
                  them.
                </p>
              </div>

              <div className="border-t border-[#e0ddd5] pt-8">
                <h2 className="font-serif font-bold text-[#1a1a1a] text-[24px] leading-[1.2] mb-4">
                  How long this is kept
                </h2>
                <p className="font-body text-[16px] text-[#3a3a3a] leading-[1.7] mb-4">
                  The law does not set fixed periods. It requires that
                  information is not kept for longer than it is needed. These
                  are the periods used here:
                </p>
                <ul className="font-body text-[16px] text-[#3a3a3a] leading-[1.7] space-y-3 list-none">
                  <li>
                    <strong className="font-bold text-[#1a1a1a]">
                      Messages sent through the contact form:
                    </strong>{" "}
                    kept for up to two years after our last contact, so that
                    a conversation can be picked up again where it stopped.
                  </li>
                  <li>
                    <strong className="font-bold text-[#1a1a1a]">
                      Waitlist and guide sign-ups:
                    </strong>{" "}
                    kept until the thing you signed up for has opened and you
                    have had the chance to join it, or until you ask to be
                    removed, whichever comes first.
                  </li>
                  <li>
                    <strong className="font-bold text-[#1a1a1a]">
                      Quiz responses:
                    </strong>{" "}
                    kept for up to two years, so that patterns across answers
                    can be understood and the quizzes improved.
                  </li>
                  <li>
                    <strong className="font-bold text-[#1a1a1a]">
                      Newsletter subscription:
                    </strong>{" "}
                    kept by Beehiiv for as long as you stay subscribed. When
                    you unsubscribe, you are removed from the list.
                  </li>
                </ul>
              </div>

              <div className="border-t border-[#e0ddd5] pt-8">
                <h2 className="font-serif font-bold text-[#1a1a1a] text-[24px] leading-[1.2] mb-4">
                  Your rights
                </h2>
                <p className="font-body text-[16px] text-[#3a3a3a] leading-[1.7] mb-4">
                  Invisible Rules is based in North Macedonia, where the Law
                  on Personal Data Protection applies. That law gives you the
                  same rights as the European Union&apos;s GDPR, which also
                  applies to visitors in the EU. You have the right to ask
                  what information is held about you, to have it corrected,
                  to have it deleted, to object to how it is used, and to
                  receive a copy of it.
                </p>
                <p className="font-body text-[16px] text-[#3a3a3a] leading-[1.7] mb-4">
                  The newsletter is only ever sent to people who asked for
                  it. The newsletter checkbox on the guide form is unticked
                  by default, and you can unsubscribe from any letter using
                  the link at the bottom of it.
                </p>
                <p className="font-body text-[16px] text-[#3a3a3a] leading-[1.7]">
                  The quickest way to be removed is the form further down
                  this page. For anything else, write to
                  biljanatasetovikj@gmail.com and say what you would like
                  done. You do not need to give a reason. If you are not
                  satisfied with the answer, you can complain to the Agency
                  for Personal Data Protection of the Republic of North
                  Macedonia.
                </p>
              </div>

              <div
                id="remove-me"
                className="border-t border-[#e0ddd5] pt-8 scroll-mt-8"
              >
                <h2 className="font-serif font-bold text-[#1a1a1a] text-[24px] leading-[1.2] mb-4">
                  Remove me from your lists
                </h2>
                <p className="font-body text-[16px] text-[#3a3a3a] leading-[1.7] mb-6">
                  Put your email address below and everything held about you
                  will be deleted. You do not need to give a reason, and
                  nothing will be sent to you to confirm it first. If you are
                  subscribed to the newsletter, you can also use the
                  unsubscribe link at the bottom of any letter, which removes
                  you immediately.
                </p>
                <RemovalForm />
              </div>

              <div className="border-t border-[#e0ddd5] pt-8">
                <h2 className="font-serif font-bold text-[#1a1a1a] text-[24px] leading-[1.2] mb-4">
                  Contact
                </h2>
                <p className="font-body text-[16px] text-[#3a3a3a] leading-[1.7]">
                  Questions about this policy or your information can be
                  sent to{" "}
                  <a
                    href="mailto:biljanatasetovikj@gmail.com"
                    className="underline decoration-[#e0ddd5] decoration-1 underline-offset-4 hover:decoration-[#d4302a] text-[#1a1a1a] transition-colors"
                  >
                    biljanatasetovikj@gmail.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
