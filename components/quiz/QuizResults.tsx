"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import FadeIn from "../FadeIn";
import {
  dimensionResults,
  frictionKeys,
  frictionLevels,
  getBand,
} from "@/lib/quiz-data";

const CAL_LINK = "biljana-tasetovikj-wblqwh/30min";

interface DimensionScore {
  dimension: string;
  score: number;
}

interface QuizResultsProps {
  totalScore: number;
  dimensionScores: DimensionScore[];
  topThreeDimensions: string[];
  onRetake: () => void;
}

// How full the friction bar reads at each score. Score 0 still shows a small
// nub so the bar is never empty.
const FILL_PERCENT = [8, 38, 68, 100];

export default function QuizResults({
  totalScore,
  dimensionScores,
  topThreeDimensions,
  onRetake,
}: QuizResultsProps) {
  const band = getBand(totalScore);

  // Readable dimension names for the booking metadata, e.g. "Communicating, Leading".
  const topFrictions = topThreeDimensions
    .map((d) => dimensionResults[d]?.name ?? d)
    .join(", ");

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
    <section className="py-28">
      <div className="max-w-[760px] mx-auto px-6 lg:px-12">
        {/* Layer 1 — the overall picture */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-10">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[#d4302a]">
              01 — What this paints
            </span>
            <span className="w-10 h-px bg-[#e0ddd5]" />
          </div>
          <p className="font-serif italic text-[#1a1a1a] text-[clamp(24px,3vw,36px)] leading-[1.3]">
            {band.text}
          </p>
        </FadeIn>

        {/* Layer 2 — the friction map */}
        <FadeIn delay={0.1}>
          <div className="mt-20 border-t-2 border-[#1a1a1a] pt-12 space-y-9">
            {dimensionScores.map(({ dimension, score }) => {
              const result = dimensionResults[dimension];
              const key = frictionKeys[score];
              const color = `var(--quiz-friction-${key})`;
              return (
                <div key={dimension}>
                  <div className="flex items-baseline justify-between gap-4 mb-2.5">
                    <span className="font-serif font-bold text-[#1a1a1a] text-[19px]">
                      {result.name}
                    </span>
                    <span
                      className="font-sans text-[10px] font-bold uppercase tracking-[0.18em]"
                      style={{ color }}
                    >
                      {frictionLevels[score]}
                    </span>
                  </div>
                  <div className="h-px w-full bg-[#e0ddd5]">
                    <div
                      className="h-px"
                      style={{
                        width: `${FILL_PERCENT[score]}%`,
                        backgroundColor: color,
                      }}
                    />
                  </div>
                  <p className="font-body text-[15px] text-[#3a3a3a] leading-[1.55] mt-2.5">
                    {result.descriptions[score]}
                  </p>
                </div>
              );
            })}
          </div>
        </FadeIn>

        {/* Layer 3 — the invitation */}
        <FadeIn delay={0.1}>
          <div className="mt-24 border-t-2 border-[#1a1a1a] pt-12">
            <div className="flex items-center gap-3 mb-10">
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[#d4302a]">
                02 — Where to go from here
              </span>
              <span className="w-10 h-px bg-[#e0ddd5]" />
            </div>
            <p className="font-serif font-black text-[#1a1a1a] text-[clamp(30px,4vw,52px)] tracking-[-0.025em] leading-[1.05] mb-7">
              The diagnostic gives you a map.
              <br />
              The deeper work happens in{" "}
              <span className="text-[#d4302a] italic">conversation</span>.
            </p>
            <p className="font-body text-[18px] text-[#3a3a3a] leading-[1.7] max-w-[600px] mb-10">
              A 30-minute call. No pitch, no commitment. We look at your friction
              map together and you leave with at least one rule you didn&apos;t
              have before.
            </p>

            {/* Cal.com inline embed — booking happens without leaving the page.
                quiz_score and top_frictions ride along as hidden metadata. */}
            <div className="quiz-booking-wrap min-h-[620px]">
              <Cal
                calLink={CAL_LINK}
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={{
                  layout: "month_view",
                  // Prefill the hidden booking questions by their field name so
                  // the answers surface in the booking details, host email, and
                  // calendar invite. (metadata[...] only lands in the API, not
                  // in any of those — that's why it looked empty.)
                  quiz_score: totalScore.toString(),
                  top_frictions: topFrictions,
                }}
              />
            </div>

            <div className="mt-10">
              <button
                type="button"
                onClick={onRetake}
                className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[#1a1a1a] hover:text-[#d4302a] transition-colors cursor-pointer"
              >
                ↺ Retake the quiz
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
