"use client";

import { useEffect, useRef } from "react";

const FORM_ID = "01cb4f85-7cce-4050-909e-b049fabaadb9";

export default function BeehiivForm() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container || container.querySelector("script")) return;
    const script = document.createElement("script");
    script.src = "https://subscribe-forms.beehiiv.com/v3/loader.js";
    script.async = true;
    script.setAttribute("data-beehiiv-form", FORM_ID);
    container.appendChild(script);
  }, []);

  return (
    <div
      ref={ref}
      className="w-full [&_*]:!max-w-full [&_iframe]:!w-full [&_form]:!flex [&_form]:!w-full [&_form]:!flex-col [&_form]:!gap-3 [&_input]:!box-border [&_input]:!w-full [&_input]:!min-h-[54px] [&_input]:!text-[16px] [&_button]:!w-full [&_button]:!min-h-[54px]"
    />
  );
}
