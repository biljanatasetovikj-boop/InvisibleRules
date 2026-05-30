export interface QuizOption {
  text: string;
  score: number;
}

export interface QuizQuestionData {
  id: number;
  dimension: string;
  dimensionLabel: string;
  question: string;
  options: QuizOption[];
}

// Friction level by score (0–3). The label text carries the signal, so the
// results never rely on color alone.
export const frictionLevels = [
  "Navigating well",
  "Mild friction",
  "Notable friction",
  "Significant friction",
] as const;

// Maps a score (0–3) to one of the four scoped friction CSS variables.
export const frictionKeys = ["well", "mild", "notable", "high"] as const;

// The overall picture, by total score band.
export interface BandSummary {
  band: "navigating" | "managing" | "significant";
  max: number;
  text: string;
}

export const bandSummaries: BandSummary[] = [
  {
    band: "navigating",
    max: 9,
    text: "You're navigating most of these dynamics well. A few quiet frictions might still be worth a closer look.",
  },
  {
    band: "managing",
    max: 17,
    text: "You're managing — but there are specific dynamics where you're paying a quiet cost. Naming them is the first step.",
  },
  {
    band: "significant",
    max: 27,
    text: "The invisible rules are doing real work on you. Competence alone won't resolve this — and that's not your failure.",
  },
];

export function getBand(totalScore: number): BandSummary {
  return (
    bandSummaries.find((b) => totalScore <= b.max) ??
    bandSummaries[bandSummaries.length - 1]
  );
}

// One-line, plain-language description per dimension, indexed by score (0–3).
export interface DimensionResult {
  name: string;
  descriptions: [string, string, string, string];
}

export const dimensionResults: Record<string, DimensionResult> = {
  communicating: {
    name: "Communicating",
    descriptions: [
      "You speak directly when you need to.",
      "You sometimes soften before speaking.",
      "You hold back what you think in meetings.",
      "You stay quiet when it matters most.",
    ],
  },
  evaluating: {
    name: "Evaluating",
    descriptions: [
      "You read feedback at face value.",
      "You sometimes second-guess what was meant.",
      "You decode signals that may not be there.",
      "You spend significant energy translating feedback.",
    ],
  },
  leading: {
    name: "Leading",
    descriptions: [
      "You contribute without waiting for permission.",
      "You weigh whether it's your place to speak.",
      "You wait for an invitation that doesn't always come.",
      "You rarely contribute unless asked directly.",
    ],
  },
  deciding: {
    name: "Deciding",
    descriptions: [
      "You speak up when the process feels off.",
      "You notice when you've been excluded, quietly.",
      "You accept decisions even when you weren't included.",
      "You move on without naming what felt wrong.",
    ],
  },
  trusting: {
    name: "Trusting",
    descriptions: [
      "Your work builds your reputation.",
      "You sometimes wonder if you're being read right.",
      "You feel you need to know people personally first.",
      "You doubt whether your work is being seen as you intend.",
    ],
  },
  disagreeing: {
    name: "Disagreeing",
    descriptions: [
      "You name disagreement directly.",
      "You raise it carefully, when you can.",
      "You raise it privately, after the moment passes.",
      "You stay quiet when you know something's wrong.",
    ],
  },
  scheduling: {
    name: "Scheduling",
    descriptions: [
      "Structured environments fit you naturally.",
      "You've adapted to deadline-first culture.",
      "You feel the cost of not having space for nuance.",
      "The pace itself is part of the friction.",
    ],
  },
  visibility: {
    name: "Visibility",
    descriptions: [
      "You make your work visible deliberately.",
      "You mention what you've done when prompted.",
      "You wait to be noticed rather than initiating.",
      "Your work is largely invisible to people who shape your future.",
    ],
  },
  identity: {
    name: "Identity",
    descriptions: [
      "You show up as yourself.",
      "You adapt the surface, but the core is intact.",
      "You hold back parts of yourself most days.",
      "You leave significant parts of yourself outside the room.",
    ],
  },
};

export const questions: QuizQuestionData[] = [
  {
    id: 1,
    dimension: "communicating",
    dimensionLabel:
      "Communicating — how direct or indirect you are in conversation",
    question:
      "When you disagree with something said in a meeting, what do you typically do?",
    options: [
      { text: "I stay quiet and hope the issue gets addressed another way.", score: 3 },
      { text: "I signal my concern with careful phrasing, but don't say it directly.", score: 2 },
      { text: "I raise it in the meeting but soften it significantly first.", score: 1 },
      { text: "I say it clearly — disagreement is a normal part of the conversation.", score: 0 },
    ],
  },
  {
    id: 2,
    dimension: "evaluating",
    dimensionLabel: "Evaluating — how you give and receive feedback",
    question:
      "Your manager gives you feedback that feels vague or overly positive. How do you interpret it?",
    options: [
      { text: "I assume things are fine — if there were a real problem, they'd say so.", score: 1 },
      { text: "I'm not sure what to think. I replay the conversation trying to decode it.", score: 3 },
      { text: "I sense something might be off, but I don't feel I can ask directly.", score: 2 },
      { text: "I ask a clarifying question right away to understand exactly where I stand.", score: 0 },
    ],
  },
  {
    id: 3,
    dimension: "leading",
    dimensionLabel: "Leading — how you relate to authority and hierarchy",
    question:
      "You have a strong idea that could improve a project. Your manager hasn't asked for input yet. What do you do?",
    options: [
      { text: "I wait. It's not my place to offer unsolicited ideas.", score: 3 },
      { text: "I run it by a colleague first to test if it's appropriate to share.", score: 2 },
      { text: "I bring it up carefully, framing it as a question rather than a suggestion.", score: 1 },
      { text: "I share it directly — good ideas are always welcome.", score: 0 },
    ],
  },
  {
    id: 4,
    dimension: "deciding",
    dimensionLabel: "Deciding — how decisions get made around you",
    question:
      "A key decision gets made in a meeting before everyone has had a chance to weigh in. How do you react?",
    options: [
      { text: "I accept it. The decision has been made and I move on.", score: 3 },
      { text: "I feel unsatisfied but don't say anything — I don't want to slow things down.", score: 2 },
      { text: "I mention privately to a colleague that the process felt rushed.", score: 1 },
      { text: "I speak up in the moment or follow up with the decision-maker directly.", score: 0 },
    ],
  },
  {
    id: 5,
    dimension: "trusting",
    dimensionLabel:
      "Trusting — how you build credibility with people you don't know well",
    question:
      "You're working with colleagues you've never met in person. How comfortable are you building your professional reputation with them?",
    options: [
      { text: "Not very. I feel like I need to first build a real relationship before I'm trusted.", score: 3 },
      { text: "Somewhat — I deliver good work but worry it doesn't speak for itself in this culture.", score: 2 },
      { text: "Fairly comfortable, though I sometimes wonder if I'm being read the way I intend.", score: 1 },
      { text: "Comfortable — I let my work and professionalism create the relationship.", score: 0 },
    ],
  },
  {
    id: 6,
    dimension: "disagreeing",
    dimensionLabel: "Disagreeing — how you handle public disagreement",
    question:
      "A colleague in a meeting says something you believe is factually wrong. What do you do?",
    options: [
      { text: "I stay quiet. Correcting someone publicly feels disrespectful.", score: 3 },
      { text: "I send them a private message after the meeting.", score: 2 },
      { text: "I ask a question that hints at the issue without directly contradicting them.", score: 1 },
      { text: "I correct it in the moment — accuracy matters more than comfort.", score: 0 },
    ],
  },
  {
    id: 7,
    dimension: "scheduling",
    dimensionLabel: "Scheduling — how you relate to deadlines and structure",
    question:
      "Your team works in a highly structured, deadline-first culture. How does this feel for you?",
    options: [
      { text: "Stressful — I work better with more flexibility and relationship-first flow.", score: 3 },
      { text: "Manageable, but I sometimes feel there's no space for nuance or depth.", score: 2 },
      { text: "I've adapted, though it took effort and I occasionally miss things as a result.", score: 1 },
      { text: "Natural — I prefer structure and clear timelines.", score: 0 },
    ],
  },
  {
    id: 8,
    dimension: "visibility",
    dimensionLabel: "Visibility — how your work becomes known",
    question:
      "You did something significant at work — led a project, solved a hard problem. What do you do with that?",
    options: [
      { text: "Nothing. Good work should speak for itself.", score: 3 },
      { text: "I mention it if someone asks, but I'd never bring it up unprompted.", score: 2 },
      { text: "I share it when there's a natural opening, but I feel uncomfortable initiating it.", score: 1 },
      { text: "I find a way to make it visible — in a meeting, on Slack, with my manager.", score: 0 },
    ],
  },
  {
    id: 9,
    dimension: "identity",
    dimensionLabel: "Identity — how much of yourself you bring to work",
    question:
      "Thinking about how you show up at work — which feels most true?",
    options: [
      { text: "I've significantly changed how I speak, what I share, and how I present myself. It's exhausting.", score: 3 },
      { text: "I adjust quite a bit — I hold back parts of myself that I don't think would be understood.", score: 2 },
      { text: "I adapt some things, but I still feel recognizably like myself most of the time.", score: 1 },
      { text: "I show up as I am. I've found ways to be myself and still navigate effectively.", score: 0 },
    ],
  },
];
