"use client";

import { useEffect, useRef, useState } from "react";
import { WWA } from "@/lib/working-with-americans";

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
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${WWA.contactEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...build(data),
          _template: "table",
          _captcha: "false",
        }),
      });
      const json = await res.json().catch(() => null);
      if (res.ok && String(json?.success) !== "false") {
        setStatus("done");
        return;
      }
      setStatus("error");
    } catch {
      setStatus("error");
    }
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
  "block font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-[#1a1a1a] mb-2";
const inputCls =
  "w-full rounded-xl border-2 bg-white px-4 py-3 font-body text-[16px] text-[#1a1a1a] transition-colors focus:border-[#d4302a]";

function borderFor(error?: string) {
  return error ? "border-[#d4302a]" : "border-[#1a1a1a]";
}

function Optional() {
  return (
    <span className="ml-1.5 normal-case tracking-normal font-body italic font-normal text-[13px] text-[#5a5a5a]">
      (optional)
    </span>
  );
}

function FieldError({ id, error }: { id: string; error?: string }) {
  if (!error) return null;
  return (
    <p id={id} className="mt-2 font-body italic text-[14px] text-[#a8221d]">
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

export const ROLE_OPTIONS = [
  "Professional working with American teams or managers",
  "Company owner working with Americans",
  "Freelancer with American clients",
  "Work and Travel student",
  "Graduate student at an American university",
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
            className={`flex items-center gap-3 cursor-pointer rounded-xl border-2 bg-white px-4 py-3 font-body text-[16px] text-[#1a1a1a] transition-colors has-[:checked]:border-[#d4302a] has-[:checked]:bg-[#fdf1ef] ${borderFor(error)}`}
          >
            <input
              type="radio"
              name={name}
              value={o.value}
              required
              className="h-5 w-5 shrink-0 cursor-pointer accent-[#d4302a]"
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
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1a1a1a]"
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
  label: string;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="flex items-start gap-3 cursor-pointer">
        <input
          id={id}
          name={name}
          type="checkbox"
          required
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-[#d4302a]"
          suppressHydrationWarning
        />
        <span className="font-body text-[15px] leading-[1.5] text-[#3a3a3a]">
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
    <p role="alert" className="font-body italic text-[15px] text-[#a8221d]">
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
  "relative rounded-2xl border-2 border-[#1a1a1a] bg-white p-6 sm:p-8";
