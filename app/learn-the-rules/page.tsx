import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CohortHero from "@/components/learn-the-rules/CohortHero";
import CohortShape from "@/components/learn-the-rules/CohortShape";
import CohortWeeks from "@/components/learn-the-rules/CohortWeeks";
import CohortOutcomes from "@/components/learn-the-rules/CohortOutcomes";
import CohortFit from "@/components/learn-the-rules/CohortFit";
import CohortDetails from "@/components/learn-the-rules/CohortDetails";
import CohortWebinars from "@/components/learn-the-rules/CohortWebinars";
import CohortFaq from "@/components/learn-the-rules/CohortFaq";
import CohortApply from "@/components/learn-the-rules/CohortApply";

export const metadata: Metadata = {
  title: "Learn the Rules — The Invisible Rules Cohort, October 2026",
  description:
    "Five weeks, eight people. Name what working inside a system built for someone else is costing you, learn to tell a cultural rule from ordinary company dysfunction, and build one move you can actually run.",
};

export default function LearnTheRulesPage() {
  return (
    <>
      <Nav />
      <main>
        <CohortHero />
        <CohortShape />
        <CohortWeeks />
        <CohortOutcomes />
        <CohortFit />
        <CohortDetails />
        <CohortWebinars />
        <CohortFaq />
        <CohortApply />
      </main>
      <Footer />
    </>
  );
}
