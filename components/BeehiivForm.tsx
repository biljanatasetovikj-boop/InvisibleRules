"use client";

import { useEffect, useRef } from "react";

const FORM_ID = "a2e90b77-09bb-4d43-b0f1-48dc150ded69";

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

  return <div ref={ref} />;
}
