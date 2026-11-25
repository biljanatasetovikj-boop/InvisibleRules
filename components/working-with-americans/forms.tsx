"use client";

import { useEffect, useRef, useState } from "react";
import { WWA, SHEET_WEBHOOK_URL } from "@/lib/working-with-americans";

// Shared plumbing for the three forms on /working-with-americans.
//
// Submissions go through formsubmit.co from the browser, the same as every
// other form on the site (routing through our own server gets blocked by
// formsubmit's datacenter-IP filter). The field must be called "email" for
// formsubmit to send the _autoresponse confirmation to the person.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;



type Status = "idle" | "sending" | "done" | "error";
export type Payload = Record<string, string>;

function validate(form: HTMLFormElement): Record<string, string> {
  const errors: Record<string, string> = {};
  const fields = Array.from(form.elements) as HTMLInputElement[];
  for (const el of fields) {
    if (!el.name || el.name === "_honey" || errors[el.name]) continue;
    const value = (el.value ?? "").trim();
    if (el.required) {
      if (el.type === "checkbox" && !el.checked) {
        errors[el.name] = "Please tick this box to continue.";
        continue;
      }
      if (el.type === "radio") {
        const picked = form.querySelector(`[name="${el.name}"]:checked`);
        if (!picked) errors[el.name] = "Please choose one.";
        continue;
      }
      if (el.type !== "checkbox" && !value) {
        errors[el.name] =
          el.tagName === "SELECT" ? "Please choose one." : "Please fill this in.";
        continue;
      }
    }
    if (el.type === "email" && value && !EMAIL_RE.test(value)) {
      errors[el.name] =
        "Please check your email address. It should look like name@example.com.";
    }
  }
  return errors;
}

export function useRegistrationForm(build: (data: FormData) => Payload) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const doneRef = useRef<HTMLDivElement>(null);

  // The form is replaced on success, so move focus to the confirmation or
  // keyboard and screen-reader users are left on nothing.
  useEffect(() => {
    if (status === "done") doneRef.current?.focus();
  }, [status]);

  async function onSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const found = validate(form);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    const data = new FormData(form);
    // A filled honeypot means a bot. Pretend it worked and send nothing.
    if (String(data.get("_honey") ?? "")) {
      setStatus("done");
      return;
    }

    setStatus("sending");
    const payload = build(data);
    // Two routes, so one blocked route never loses a registration. formsubmit
    // emails Biljana and sends the confirmation; the Google Sheet keeps a
    // record. Some networks block formsubmit.co, which is why the sheet is
    // there. It counts as sent if either route got through.
    const viaFormsubmit = fetch(`https://formsubmit.co/ajax/${WWA.contactEmail}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...payload, _template: "table", _captcha: "false" }),
    }).then(async (res) => {
      const json = await res.json().catch(() => null);
      if (!(res.ok && String(json?.success) !== "false")) throw new Error("formsubmit");
    });
    const { _subject, _autoresponse, _honey, email, ...details } = payload;
    void _autoresponse;
    void _honey;
    const viaSheet = fetch(SHEET_WEBHOOK_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        name: details["First name"] ?? "",
        email,
        result: [_subject, ...Object.entries(details).map(([k, v]) => `${k}: ${v}`)].join(" | "),
      }),
    }).then(() => undefined);
    const [a, b] = await Promise.allSettled([viaFormsubmit, viaSheet]);
    setStatus(a.status === "fulfilled" || b.status === "fulfilled" ? "done" : "error");
  }

  function onInput(e: React.FormEvent<HTMLFormElement>) {
    const name = (e.target as HTMLInputElement).name;
    if (name && errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  return { status, errors, onSubmit, onInput, doneRef };
}

export function firstNameOf(full: string) {
  return full.trim().split(/\s+/)[0] || "there";
}

// ---------- fields ----------

const labelCls =
  "block font-ui text-[15px] font-semibold text-wip-ink mb-2";
const inputCls =
  "w-full min-h-[52px] rounded-lg border-2 bg-white px-4 py-3 font-editor text-[18px] text-wip-ink transition-colors focus:border-wip-blue";

function borderFor(error?: string) {
  return error ? "border-wip-red" : "border-wip-ink";
}

function Optional() {
  return (
    <span className="ml-1.5 font-editor italic font-normal text-[14px] text-wip-ink/70">
      (optional)
    </span>
  );
}

function FieldError({ id, error }: { id: string; error?: string }) {
  if (!error) return null;
  return (
    <p id={id} className="mt-2 font-ui font-semibold text-[15px] text-wip-red">
      {error}
    </p>
  );
}

interface BaseProps {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  error?: string;
}

export function TextField({
  id,
  name,
  label,
  required,
  error,
  type = "text",
  autoComplete,
}: BaseProps & { type?: string; autoComplete?: string }) {
  return (
    <div>
      <label htmlFor={id} className={labelCls}>
        {label}
        {!required && <Optional />}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${inputCls} ${borderFor(error)}`}
        suppressHydrationWarning
      />
      <FieldError id={`${id}-error`} error={error} />
    </div>
  );
}

export function TextArea({ id, name, label, required, error }: BaseProps) {
  return (
    <div>
      <label htmlFor={id} className={labelCls}>
        {label}
        {!required && <Optional />}
      </label>
      <textarea
        id={id}
        name={name}
        required={required}
        rows={3}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${inputCls} ${borderFor(error)} resize-y`}
        suppressHydrationWarning
      />
      <FieldError id={`${id}-error`} error={error} />
    </div>
  );
}

// The same five groups as "Is this course for you?" in WhoFor.tsx.
export const ROLE_OPTIONS = [
  "A professional working with American colleagues, managers or clients",
  "A freelancer working with American clients",
  "An entrepreneur starting to work with U.S. partners and clients",
  "A Work & Travel student",
  "An online student or intern at a U.S. university or program",
  "Other",
];

// One choice from a short list, shown as big tappable rows.
export function RadioGroup({
  id,
  name,
  label,
  error,
  options,
}: BaseProps & { options: { value: string; label: string }[] }) {
  return (
    <fieldset aria-describedby={error ? `${id}-error` : undefined}>
      <legend className={labelCls}>{label}</legend>
      <div className="grid sm:grid-cols-2 gap-3">
        {options.map((o) => (
          <label
            key={o.value}
            className={`flex items-center gap-3 min-h-[52px] cursor-pointer rounded-lg border-2 bg-white px-4 py-3 font-editor text-[18px] text-wip-ink transition-colors has-[:checked]:border-wip-blue has-[:checked]:bg-wip-blue/10 has-[:checked]:font-semibold ${borderFor(error)}`}
          >
            <input
              type="radio"
              name={name}
              value={o.value}
              required
              className="h-5 w-5 shrink-0 cursor-pointer accent-wip-blue"
              suppressHydrationWarning
            />
            {o.label}
          </label>
        ))}
      </div>
      <FieldError id={`${id}-error`} error={error} />
    </fieldset>
  );
}

export function SelectField({
  id,
  name,
  label,
  required,
  error,
  options,
}: BaseProps & { options: string[] }) {
  return (
    <div>
      <label htmlFor={id} className={labelCls}>
        {label}
        {!required && <Optional />}
      </label>
      <div className="relative">
        <select
          id={id}
          name={name}
          required={required}
          defaultValue=""
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`${inputCls} ${borderFor(error)} appearance-none pr-11 cursor-pointer`}
          suppressHydrationWarning
        >
          <option value="" disabled>
            Choose one
          </option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <svg
          viewBox="0 0 16 16"
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-wip-ink"
        >
          <path d="M3 6l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
      <FieldError id={`${id}-error`} error={error} />
    </div>
  );
}

export function ConsentBox({
  id,
  name,
  label,
  error,
}: {
  id: string;
  name: string;
  label: React.ReactNode;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="flex items-start gap-3 min-h-[44px] py-1 cursor-pointer">
        <input
          id={id}
          name={name}
          type="checkbox"
          required
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-wip-blue"
          suppressHydrationWarning
        />
        <span className="font-editor text-[17px] leading-[1.5] text-wip-ink/85">
          {label}
        </span>
      </label>
      <FieldError id={`${id}-error`} error={error} />
    </div>
  );
}

// Hidden from people and screen readers; bots tend to fill every field.
export function Honeypot() {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
      <label>
        Leave this empty
        <input type="text" name="_honey" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}

export function SendError() {
  return (
    <p role="alert" className="border-l-4 border-wip-red bg-wip-red/5 px-4 py-3 font-editor text-[17px] text-wip-ink">
      Something went wrong. Please write to me at{" "}
      <a
        href={`mailto:${WWA.contactEmail}`}
        className="underline underline-offset-4 decoration-1"
      >
        {WWA.contactEmail}
      </a>
      .
    </p>
  );
}

export const formCard =
  "relative border-2 border-wip-ink bg-white p-6 sm:p-8 shadow-[8px_8px_0_var(--color-wip-blue)]";
