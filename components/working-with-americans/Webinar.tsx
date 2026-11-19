"use client";

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
import { Container, SectionHead, btnPrimary, h2Cls, leadCls } from "./ui";
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
        <p className="font-editor font-medium text-[44px] leading-none text-wip-red">
          You&apos;re in!
        </p>
        <p className="mt-5 font-editor text-[20px] leading-[1.5] text-wip-ink">
          {s
            ? `See you on ${s.dayText} at ${WWA.webinar.timeText}. I'll email you the webinar link, and a reminder before the day.`
            : "I'll email you the webinar link and a reminder before the day. See you there."}
        </p>
        <p className="mt-3 font-editor italic text-[22px] text-wip-blue">– Biljana</p>
        {s && (
          <a
            href={webinarCalendarUrl(s)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center min-h-[44px] font-ui text-[16px] font-semibold text-wip-ink underline decoration-wip-red decoration-2 underline-offset-[6px] hover:text-wip-red"
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


// A small second option at the very end, for people not ready to register.
export default function Webinar() {
  const now = useNow();
  // Before the browser knows the time, show every date; finished ones drop
  // out straight after. Once all have passed, the section disappears.
  const sessions = now === null ? WWA.webinar.sessions : upcomingSessions(now);
  if (sessions.length === 0) return null;

  return (
    <section id="webinar" className="relative py-20 lg:py-28">
      <Container className="relative">
        <SectionHead no="08" label={`Free webinar · ${WWA.webinar.timeText} · Online`} />
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-16 items-start">
          <FadeIn>
            <h2 className={h2Cls}>
              Not sure if this is{" "}
              <span className="italic text-wip-red">for you?</span>
            </h2>
            <p className={`mt-6 max-w-[560px] ${leadCls}`}>
              Join one of the free webinars first. In one hour, I&apos;ll show
              you the unwritten rules of working with Americans. Every date
              starts at {WWA.webinar.timeTextLong}. Can&apos;t join live?
              Register anyway and I&apos;ll send you the recording.
            </p>
          </FadeIn>
          <div id="webinar-form" className="scroll-mt-6">
            <WebinarForm sessions={sessions} />
          </div>
        </div>
      </Container>
    </section>
  );
}
