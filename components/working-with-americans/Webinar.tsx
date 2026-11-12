"use client";

import Image from "next/image";
import { useId, useState } from "react";
import FadeIn from "../FadeIn";
import {
  WWA,
  sessionById,
  upcomingSessions,
  webinarCalendarUrl,
  type WebinarSession,
} from "@/lib/working-with-americans";
import { useNow } from "./useNow";
import { Container, PageTop, StepDot, btnPrimary } from "./ui";
import {
  ConsentBox,
  Honeypot,
  ROLE_OPTIONS,
  RadioGroup,
  SelectField,
  SendError,
  TextField,
  firstNameOf,
  formCard,
  useRegistrationForm,
} from "./forms";

const learn = [
  "Why polite habits from home can look like hesitation to Americans",
  "The three moments where the invisible rules matter most: asking, speaking up and showing your results",
  "How to write a short, direct request, and you’ll write one during the webinar",
];

function confirmationEmail(name: string, s: WebinarSession) {
  return [
    `Hi ${firstNameOf(name)},`,
    "",
    "You're in! I'm really glad you're coming.",
    "",
    WWA.webinar.title,
    `${s.dayText}, ${WWA.webinar.timeTextLong}`,
    `Online, on Google Meet: ${WWA.webinar.meetLink}`,
    "",
    `Add it to your calendar: ${webinarCalendarUrl(s)}`,
    "",
    `Keep this email so the link is easy to find on the day. I'll also send you a reminder before ${s.weekday}.`,
    "",
    "If you have a real situation with Americans on your mind, bring it with you. We'll use it when we write a short, direct message together.",
    "",
    "Can't make it live? That's fine. I'll send you the recording.",
    "",
    `After the session, I'll also send you my free zine: ${WWA.zine.title}`,
    "",
    `See you on ${s.weekday},`,
    "Biljana",
    "Invisible Rules",
    WWA.siteUrl.replace("https://", ""),
  ].join("\n");
}

function WebinarForm({ sessions }: { sessions: readonly WebinarSession[] }) {
  const id = useId();
  const [chosen, setChosen] = useState<WebinarSession | null>(null);
  const { status, errors, onSubmit, onInput, doneRef } = useRegistrationForm(
    (data) => {
      const name = String(data.get("name")).trim();
      const s = sessionById(String(data.get("date")))!;
      setChosen(s);
      return {
        "Registration type": `Webinar: ${WWA.webinar.title}`,
        Date: `${s.dayText}, ${WWA.webinar.timeText}`,
        "First name": name,
        email: String(data.get("email")).trim(),
        "Describes them best": String(data.get("role")),
        "Agreed to emails": "Yes",
        _subject: `Webinar registration (${s.shortText}): ${name}`,
        _autoresponse: confirmationEmail(name, s),
        _honey: String(data.get("_honey") ?? ""),
      };
    }
  );

  if (status === "done") {
    const s = chosen;
    return (
      <div ref={doneRef} tabIndex={-1} role="status" className={formCard}>
        <p className="font-serif font-black text-[40px] leading-none text-[#a8221d]">
          You&apos;re in!
        </p>
        <p className="mt-5 font-body text-[18px] leading-[1.6] text-[#1a1a1a]">
          {s
            ? `See you on ${s.dayText} at ${WWA.webinar.timeText}. I'll email you the webinar link, and a reminder before the day.`
            : "I'll email you the webinar link and a reminder before the day. See you there."}
        </p>
        <p className="mt-3 font-hand text-[26px] text-[#a8221d]">– Biljana</p>
        {s && (
          <a
            href={webinarCalendarUrl(s)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block py-2 font-sans text-[13px] font-bold uppercase tracking-[0.16em] text-[#1a1a1a] underline decoration-[#d4302a] decoration-2 underline-offset-[6px] hover:text-[#a8221d]"
          >
            Add it to my calendar ↗
          </a>
        )}
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      onInput={onInput}
      className={`${formCard} space-y-5`}
      aria-label="Register for a free webinar"
      suppressHydrationWarning
    >
      <Honeypot />
      <TextField id={`${id}-name`} name="name" label="First name" required autoComplete="given-name" error={errors.name} />
      <TextField id={`${id}-email`} name="email" type="email" label="Email" required autoComplete="email" error={errors.email} />
      <RadioGroup
        id={`${id}-date`}
        name="date"
        label={`Which date? (all at ${WWA.webinar.timeTextLong})`}
        options={sessions.map((s) => ({ value: s.id, label: s.dayText }))}
        error={errors.date}
      />
      <SelectField id={`${id}-role`} name="role" label="Which describes you best?" required options={ROLE_OPTIONS} error={errors.role} />
      <ConsentBox
        id={`${id}-consent`}
        name="consent"
        label="I agree to receive emails from Biljana about this webinar and the course."
        error={errors.consent}
      />
      {status === "error" && <SendError />}
      <button type="submit" disabled={status === "sending"} className={`${btnPrimary} w-full sm:w-auto`}>
        {status === "sending" ? "Saving…" : "Save my free spot"}
      </button>
    </form>
  );
}

export default function Webinar() {
  const now = useNow();
  // Before the browser knows the time, show every date; finished ones drop
  // out straight after.
  const sessions = now === null ? WWA.webinar.sessions : upcomingSessions(now);
  const over = sessions.length === 0;

  return (
    <section id="webinar" className="py-20 lg:py-28 border-t-2 border-[#1a1a1a]">
      <Container>
        <PageTop
          label={`Free webinar · ${WWA.webinar.timeText} · Online`}
          right="08 / 08"
        />
        <FadeIn>
          <h2 className="font-serif font-black text-[#1a1a1a] text-[clamp(36px,5.6vw,66px)] leading-[1.02] tracking-[-0.02em] max-w-[900px]">
            The unwritten rules of working with{" "}
            <span className="italic text-[#a8221d]">Americans.</span>
          </h2>
          <p className="mt-7 mb-14 font-body text-[19px] sm:text-[21px] leading-[1.6] text-[#3a3a3a] max-w-[680px]">
            In one hour, I&apos;ll show you the rules nobody says out loud, and
            you&apos;ll leave with one message you can send the next morning.
          </p>
        </FadeIn>
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-start">
          <FadeIn>
            <h3 className="font-serif font-black text-[#1a1a1a] text-[clamp(28px,3.6vw,40px)] leading-[1.05] tracking-[-0.015em]">
              What you&apos;ll learn in{" "}
              <span className="italic text-[#a8221d]">one hour.</span>
            </h3>
            <ol className="mt-10 space-y-7">
              {learn.map((item, i) => (
                <li key={item} className="flex items-start gap-5">
                  <StepDot n={i + 1} className="h-12 w-12 text-[24px]" />
                  <span className="pt-2 font-body text-[19px] leading-[1.55] text-[#1a1a1a]">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
            <div className="mt-10 rounded-2xl border-2 border-dashed border-[#1a1a1a] px-6 py-5">
              <p className="font-sans text-[12px] font-bold uppercase tracking-[0.2em] text-[#a8221d]">
                {WWA.webinar.timeTextLong} · Online · Free
              </p>
              {!over && (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {sessions.map((s) => (
                    <li
                      key={s.id}
                      className="rounded-full border-2 border-[#1a1a1a] bg-white px-3.5 py-1 font-body text-[15px] text-[#1a1a1a]"
                    >
                      {s.dayText}
                    </li>
                  ))}
                </ul>
              )}
              <p className="mt-3 font-body text-[16px] leading-[1.55] text-[#3a3a3a]">
                Same topic on every date, so pick the one that suits you.
                Can&apos;t join live? Register anyway and I&apos;ll send you the
                recording.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-5">
              <Image
                src="/working-with-americans/zine-cover.webp"
                alt="Cover of the zine: Learning a culture is like learning a language."
                width={800}
                height={1000}
                sizes="96px"
                className="w-24 h-auto shrink-0 -rotate-3 rounded-md border-2 border-[#1a1a1a] shadow-[4px_4px_0_#1a1a1a]"
              />
              <p className="font-hand text-[23px] leading-[1.25] text-[#a8221d]">
                After the session, you get my free zine: Learning a culture is
                like learning a language.
              </p>
            </div>
          </FadeIn>

          <div id="webinar-form" className="scroll-mt-6">
            {over ? (
              <div className="rounded-2xl bg-[#1a1a1a] p-7 sm:p-9 text-white">
                <p className="font-serif font-bold text-[28px] leading-[1.25]">
                  The webinars have finished.
                </p>
                <p className="mt-4 font-body text-[18px] leading-[1.6] text-white/85">
                  Want the recording? Write to me at{" "}
                  <a
                    href={`mailto:${WWA.contactEmail}?subject=Webinar%20recording`}
                    className="underline decoration-[#ff8a80] decoration-2 underline-offset-4 hover:text-[#ff8a80]"
                  >
                    {WWA.contactEmail}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <WebinarForm sessions={sessions} />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
