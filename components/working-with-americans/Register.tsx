"use client";

import { useId } from "react";
import FadeIn from "../FadeIn";
import { WWA } from "@/lib/working-with-americans";
import { Container, SectionHead, btnPrimary } from "./ui";
import { Waves } from "./Backgrounds";
import {
  ConsentBox,
  Honeypot,
  SendError,
  TextField,
  firstNameOf,
  formCard,
  useRegistrationForm,
} from "./forms";

const priceText = `€${WWA.course.price} (founding price)`;

function confirmationEmail(name: string) {
  return [
    `Hi ${firstNameOf(name)},`,
    "",
    `Thank you for registering for ${WWA.course.title}. We start on ${WWA.course.startText}.`,
    "",
    `Your price: ${priceText}`,
    "",
    "I'll write to you personally within 2 working days, with the payment details and everything else you need to know before we start.",
    "",
    `If you have a question before then, write to me at ${WWA.contactEmail}.`,
    "",
    "Warmly,",
    "Biljana",
    "Invisible Rules",
    WWA.siteUrl.replace("https://", ""),
  ].join("\n");
}

function CourseForm() {
  const id = useId();
  const { status, errors, onSubmit, onInput, doneRef } = useRegistrationForm(
    (data) => {
      const name = String(data.get("name")).trim();
      return {
        "Registration type": `Course: ${WWA.course.title} (starts ${WWA.course.startText})`,
        "Price shown at registration": priceText,
        "First name": name,
        email: String(data.get("email")).trim(),
        "Agreed to emails": "Yes",
        "Agreed to course terms": "Yes",
        _subject: `Course registration (€${WWA.course.price}): ${name}`,
        _autoresponse: confirmationEmail(name),
        _honey: String(data.get("_honey") ?? ""),
      };
    }
  );

  if (status === "done") {
    return (
      <div ref={doneRef} tabIndex={-1} role="status" className={formCard}>
        <p className="font-editor font-medium text-[44px] leading-none text-wip-red">
          Thank you!
        </p>
        <p className="mt-5 font-editor text-[20px] leading-[1.5] text-wip-ink">
          I&apos;ll write to you personally within 2 working days, with the
          payment details and everything else you need to know.
        </p>
        <p className="mt-3 font-editor italic text-[22px] text-wip-blue">– Biljana</p>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      onInput={onInput}
      className={`${formCard} space-y-5`}
      aria-label="Register for the course"
      suppressHydrationWarning
    >
      <Honeypot />
      <TextField id={`${id}-name`} name="name" label="First name" required autoComplete="given-name" error={errors.name} />
      <TextField id={`${id}-email`} name="email" type="email" label="Email" required autoComplete="email" error={errors.email} />
      <ConsentBox
        id={`${id}-consent`}
        name="consent"
        label="I agree to receive emails from Biljana about the course."
        error={errors.consent}
      />
      <ConsentBox
        id={`${id}-terms`}
        name="terms"
        label={
          <>
            I have read and agree to the{" "}
            <a
              href="/working-with-americans/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-wip-red decoration-2 underline-offset-4 hover:text-wip-red"
            >
              course terms
            </a>
            .
          </>
        }
        error={errors.terms}
      />
      {status === "error" && <SendError />}
      <button type="submit" disabled={status === "sending"} className={`${btnPrimary} w-full sm:w-auto`}>
        {status === "sending" ? "Sending…" : "Register for the course"}
      </button>
    </form>
  );
}

export default function Register() {
  return (
    <section id="register" className="relative py-20 lg:pt-28 lg:pb-52">
      <Waves id="wwa-w1" className="absolute hidden lg:block left-[3%] bottom-8 w-[200px]" />
      <Container className="relative">
        <SectionHead no="06" label={`Register · ${WWA.course.datesText}`} />
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-start">
          <FadeIn>
            <span className="inline-block -rotate-2 bg-wip-red px-4 py-1.5 font-ui text-[14px] font-bold uppercase tracking-[0.12em] text-white">
              Founding price
            </span>
            <p className="mt-5 font-editor font-medium text-wip-ink text-[104px] sm:text-[132px] leading-none tracking-[-0.04em]">
              €{WWA.course.price}
            </p>
            <p className="mt-4 font-editor text-[21px] leading-[1.5] text-wip-ink max-w-[460px]">
              This is the founding price for this first group. In the spring,
              the course will cost{" "}
              <span className="whitespace-nowrap">€{WWA.course.springPrice}.</span>
            </p>
            <p className="mt-2 font-editor text-[19px] leading-[1.5] text-wip-ink/80">
              Small group, up to 15 people.
            </p>
            <p className="mt-6 font-editor italic text-[18px] leading-[1.55] text-wip-ink/80 max-w-[440px]">
              If the price is a stretch right now,{" "}
              <a
                href={`mailto:${WWA.contactEmail}?subject=Course%20price`}
                className="inline-block py-2.5 -my-2.5 text-wip-ink underline decoration-wip-red decoration-2 underline-offset-4 hover:text-wip-red"
              >
                write to me
              </a>
              . I have a few places at a lower price.
            </p>
          </FadeIn>
          <div id="course-form" className="scroll-mt-6">
            <CourseForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
