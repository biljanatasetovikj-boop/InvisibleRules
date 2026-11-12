"use client";

import { useId } from "react";
import FadeIn from "../FadeIn";
import { WWA } from "@/lib/working-with-americans";
import { Container, PageTop, Sticker, btnPrimary } from "./ui";
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
        _subject: `Course registration (€${WWA.course.price}): ${name}`,
        _autoresponse: confirmationEmail(name),
        _honey: String(data.get("_honey") ?? ""),
      };
    }
  );

  if (status === "done") {
    return (
      <div ref={doneRef} tabIndex={-1} role="status" className={formCard}>
        <p className="font-serif font-black text-[40px] leading-none text-[#a8221d]">
          Thank you!
        </p>
        <p className="mt-5 font-body text-[18px] leading-[1.6] text-[#1a1a1a]">
          I&apos;ll write to you personally within 2 working days, with the
          payment details and everything else you need to know.
        </p>
        <p className="mt-3 font-hand text-[26px] text-[#a8221d]">– Biljana</p>
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
      {status === "error" && <SendError />}
      <button type="submit" disabled={status === "sending"} className={`${btnPrimary} w-full sm:w-auto`}>
        {status === "sending" ? "Sending…" : "Register for the course"}
      </button>
    </form>
  );
}

export default function Register() {
  return (
    <section id="register" className="py-20 lg:py-28 border-t-2 border-[#1a1a1a]">
      <Container>
        <FadeIn>
          <PageTop label={`Register · ${WWA.course.datesText}`} right="06 / 08" />
        </FadeIn>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <Sticker>founding price</Sticker>
            <p className="mt-4 font-serif font-black text-[#1a1a1a] text-[96px] sm:text-[120px] leading-none tracking-[-0.03em]">
              €{WWA.course.price}
            </p>
            <p className="mt-3 font-body text-[19px] leading-[1.5] text-[#1a1a1a] max-w-[460px]">
              This is the founding price for this first group. In the spring,
              the course will cost{" "}
              <span className="whitespace-nowrap">€{WWA.course.springPrice}.</span>
            </p>
            <p className="mt-2 font-body text-[17px] leading-[1.5] text-[#3a3a3a]">
              Small group, up to 15 people.
            </p>
            <p className="mt-5 font-body italic text-[16px] leading-[1.55] text-[#3a3a3a] max-w-[420px]">
              If the price is a stretch right now,{" "}
              <a
                href={`mailto:${WWA.contactEmail}?subject=Course%20price`}
                className="underline decoration-[#d4302a] decoration-1 underline-offset-4 hover:text-[#a8221d]"
              >
                write to me
              </a>
              . I have a few places at a lower price.
            </p>
          </div>
          <div id="course-form" className="scroll-mt-6">
            <CourseForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
