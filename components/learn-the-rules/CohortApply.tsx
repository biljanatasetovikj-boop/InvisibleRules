"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import FadeIn from "../FadeIn";
import { CAL_LINK } from "@/lib/cohort-data";

export default function CohortApply() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#d4302a" } },
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  return (
    <section id="apply" className="py-28 border-t-2 border-[#1a1a1a]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[#d4302a]">
              08 — How you join
            </span>
            <span className="w-10 h-px bg-[#e0ddd5]" />
          </div>
          <h2 className="font-serif font-black text-[#1a1a1a] text-[clamp(38px,5.5vw,72px)] tracking-[-0.025em] leading-none mb-6 max-w-[900px]">
            There is no form.
            <br />
            We <span className="text-[#d4302a] italic">talk</span> first.
          </h2>
          <p className="font-body text-[21px] leading-[1.65] text-[#3a3a3a] max-w-[740px] mb-4">
            Book a short conversation. Tell me what has been happening. I will
            tell you honestly whether this is the right thing for you — and if
            it is not, I will say what would be.
          </p>
          <p className="font-serif italic text-[#d4302a] text-[22px] mb-14">
            Applications close 9 October. Eight seats.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="min-h-[620px]">
            <Cal
              calLink={CAL_LINK}
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{ layout: "month_view" }}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
