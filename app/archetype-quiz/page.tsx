import type { Metadata } from "next";
import ArchetypeQuizContainer from "@/components/archetype-quiz/ArchetypeQuizContainer";

export const metadata: Metadata = {
  title: "Who are you at work when the culture isn't yours? — Invisible Rules",
  description:
    "The Held-Back Voice, the Decoder, the Invisible Expert, the Over-Preparer, the Half-Self at Work. Five patterns people build when the workplace was written for another culture. For professionals from non-Western backgrounds working in international organizations. Twenty questions, about five minutes.",
};

export default function ArchetypeQuizPage() {
  return <ArchetypeQuizContainer />;
}
