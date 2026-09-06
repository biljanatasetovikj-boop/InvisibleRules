// Archetype quiz — 20 scenario questions sorting a person into one of five
// behavioural archetypes. Unlike the Culture Map quiz in `quiz-data.ts`, there
// is no severity scale here: every option is equally valid and simply adds one
// point to the archetype it belongs to.

export type ArchetypeCode = "HBV" | "DEC" | "IEX" | "OVP" | "HSW";

export interface ArchetypeOption {
  text: string;
  // Internal only — never rendered. Each option carries its own archetype so
  // the on-screen order can be scrambled without breaking the mapping.
  archetype: ArchetypeCode;
}

export interface ArchetypeQuestionData {
  id: number;
  question: string;
  // Always five options, one per archetype, in a fixed but scrambled order.
  options: ArchetypeOption[];
}

// Every archetype, in the order that breaks ties: if two or more share the top
// score, the one appearing first here wins.
export const ARCHETYPE_ORDER: ArchetypeCode[] = [
  "HBV",
  "DEC",
  "IEX",
  "OVP",
  "HSW",
];

// Each result runs in four beats, the way Biljana wrote them: the situation
// you recognize, the reframe that turns it, the single move, and one line that
// carries the whole thing.
export interface ArchetypeResult {
  code: ArchetypeCode;
  name: string;
  opening: string;
  reframe: string;
  move: string;
  line: string;
}

export const archetypeResults: Record<ArchetypeCode, ArchetypeResult> = {
  HBV: {
    code: "HBV",
    name: "The Held-Back Voice",
    opening:
      "You stay quiet in meetings where you have something worth saying. The thought is not missing. But the moment you might speak, a worry stops you: what if I have to say something, and it is not important enough?",
    reframe:
      "Here is what changes it. The weight is not the speaking. It is the belief that speaking means showing something big or clever. It does not. Most of what people say in a meeting is small and useful, not brilliant.",
    move:
      "Before you speak, read the meeting itself. What is it for? What are these people trying to reach? Then say only the one useful thing your part adds. Not the impressive thing. The needed thing. Take part, do not perform. The shaking voice becomes quiet when the task becomes that small.",
    line:
      "You do not need to be brilliant to speak. You only need to be useful.",
  },
  DEC: {
    code: "DEC",
    name: "The Decoder",
    opening:
      "Something happens at work and it feels like humiliation. Your first move is inward: maybe it is me. Maybe it is how I work. You replay it. You question yourself. You carry it with you.",
    reframe:
      "But often what felt like a personal attack was only a cultural habit. A way of speaking that has nothing to do with your worth. A person who is direct with you may simply be direct, because their whole environment is direct. This does not mean you excuse everything. It means there is a fork you need to see before you can choose your response.",
    move:
      "When something feels like humiliation, stop before you take it inside. Ask one question. Am I reading a personal judgment, or a cultural habit I do not share? Name which one it is. You can only respond well once you know which fork you are on. Most of the time, the answer is not about you at all.",
    line:
      "Before you take it as your fault, ask if it was ever about you.",
  },
  IEX: {
    code: "IEX",
    name: "The Invisible Expert",
    opening:
      "You do real, skilled work, and it is not seen. You watch your effort disappear into the background while smaller and louder things get noticed. So you work harder, hoping the amount will finally be counted. It will not.",
    reframe:
      "The problem is not the work. The problem is that your work is invisible in the unit your environment counts. Every workplace measures success in something. Numbers, size, finished projects, things with a name. If your work is not expressed in that unit, it does not register, no matter how good it is.",
    move:
      "Find out what your environment actually counts as success. Then make your existing work fit that unit. Not more work. The same work, said in their language. Ten separate visits become one named project with engagement numbers. The effort does not change. Only whether it can be seen.",
    line:
      "Good work is not enough. It has to be counted in the language they count in.",
  },
  OVP: {
    code: "OVP",
    name: "The Over-Preparer",
    opening:
      "You prepare too much. Not because the work needs it, but because of the feeling that comes when you imagine being asked something you cannot answer. The preparation is protection against that exposure. And the sign is physical. A sick feeling in your stomach before the room.",
    reframe:
      "Here is the trap. That feeling is not telling you that you are not ready. It is the same fear the preparation is trying to silence. This means more preparation can never end it, because it feeds the very thing it is running from. You cannot prepare your way out of a fear of not knowing.",
    move:
      "Stop trying to prepare the feeling away. It cannot be done. Instead, decide in advance that when you are asked something you cannot answer, you will say it simply. I do not know. Let me find out. Then see what it costs. It costs almost nothing. Authority never came from having every answer. It came from being trusted to find them. One clear “I do not know” that goes fine is worth more than a hundred hours of preparation, because it is the only thing that touches the real belief.",
    line:
      "Your authority is not in having every answer. It is in being trusted to find them.",
  },
  HSW: {
    code: "HSW",
    name: "The Half-Self at Work",
    opening:
      "You keep part of yourself out of your work. Your real opinion, your true personality, the way you actually think. You give the safe version instead. Dry, neutral, without passion. It feels safer to hand over clean and quiet answers than to show the person behind them.",
    reframe:
      "The cost is quiet but real. The distance between who you are and who you show at work is tiring. Over time it can turn into a flat, mechanical way of working, far from the work you once cared about.",
    move:
      "Take one part of yourself that you usually keep hidden, your real opinion or your honest read, and let it show once, in a moment that matters. Say what you actually think, with the conviction you normally filter out. Very often the part you hid, because you thought it made you less professional, is the exact part that makes people take you seriously. People move from being unknown in a company to being known by name for this reason. The flatness was not protecting you. It was erasing you.",
    line:
      "The part you hide to seem professional is often the part that makes you matter.",
  },
};

// Identical on all five results.
export const OUTRO_LINE =
  "These patterns are fluid — most people are a blend of two or three, and they shift by room and season. For more on the Invisible Rules at work, including upcoming free webinars and the cohort, visit theinvisiblerules.com.";

export const SITE_URL = "https://theinvisiblerules.com";

// The 20 questions. Option order on screen is scrambled per question — a fixed
// permutation baked in at authoring time rather than shuffled at runtime, so
// the order is identical on server and client and can never drift. Every
// question still offers each archetype exactly once.
export const questions: ArchetypeQuestionData[] = [
  {
    id: 1,
    question:
      "You are in a meeting. You have something useful to say. What actually happens?",
    options: [
      {
        archetype: "DEC",
        text: "I say it. But part of my head is busy checking how it will sound to them.",
      },
      {
        archetype: "HSW",
        text: "I say a softer version. Not the one I would say in my own language, with my own people.",
      },
      {
        archetype: "HBV",
        text: "I wait for the right moment. By the time it comes, the moment is gone.",
      },
      {
        archetype: "OVP",
        text: "I say nothing there. I send a long, careful message afterwards instead.",
      },
      {
        archetype: "IEX",
        text: "I stay quiet. My work already says it. I should not have to repeat it.",
      },
    ],
  },
  {
    id: 2,
    question:
      "Your manager tells you to “be more strategic.” What happens inside you first?",
    options: [
      {
        archetype: "IEX",
        text: "I am confused. My work is already strategic. They have not looked at it properly.",
      },
      {
        archetype: "HBV",
        text: "I say nothing, and hope my next piece of work looks strategic.",
      },
      {
        archetype: "OVP",
        text: "I decide to do much more on the next project, to prove it.",
      },
      {
        archetype: "HSW",
        text: "I nod like it is obvious. Inside I am not sure it was meant kindly.",
      },
      {
        archetype: "DEC",
        text: "I start translating. What does strategic mean here, in this company?",
      },
    ],
  },
  {
    id: 3,
    question:
      "A colleague says an idea you already had, but never said out loud. You feel:",
    options: [
      {
        archetype: "HSW",
        text: "A quiet distance. Like I am watching a game nobody taught me.",
      },
      {
        archetype: "OVP",
        text: "That I should have written a document first, so it would clearly be mine.",
      },
      {
        archetype: "DEC",
        text: "Curious about how they said it, so that people listened. I want to learn that.",
      },
      {
        archetype: "IEX",
        text: "Frustrated. Mine was more complete and nobody saw it.",
      },
      {
        archetype: "HBV",
        text: "Something familiar drops in my stomach. I had it first and I kept quiet.",
      },
    ],
  },
  {
    id: 4,
    question:
      "It is the evening before an internal call. Fifteen minutes, your own team. You:",
    options: [
      {
        archetype: "OVP",
        text: "Prepare much more than fifteen minutes could ever need.",
      },
      {
        archetype: "IEX",
        text: "Do almost nothing. The work is good. That is what matters.",
      },
      {
        archetype: "HSW",
        text: "Prepare the version of myself that fits the room, not only the content.",
      },
      {
        archetype: "HBV",
        text: "Go over the one thing I want to say. Then worry that I will not say it.",
      },
      {
        archetype: "DEC",
        text: "Think about who will be there, and what each of them listens for.",
      },
    ],
  },
  {
    id: 5,
    question: "You get feedback that feels unfair, or simply wrong. What do you do?",
    options: [
      {
        archetype: "HBV",
        text: "I take it and say nothing. Then I repeat it in my head for days.",
      },
      {
        archetype: "DEC",
        text: "I try to work out what is really being said under the words.",
      },
      {
        archetype: "HSW",
        text: "I agree in the room. My real reaction comes later, when I am alone.",
      },
      {
        archetype: "IEX",
        text: "I quietly decide they do not understand the work well enough.",
      },
      {
        archetype: "OVP",
        text: "I decide to leave no space for that feedback to happen again.",
      },
    ],
  },
  {
    id: 6,
    question:
      "In a meeting, someone asks the question you were still deciding whether to ask. You:",
    options: [
      {
        archetype: "DEC",
        text: "Notice how easily they asked it. I wonder what makes it easy for them.",
      },
      {
        archetype: "IEX",
        text: "Think my version would have been better, if I had spoken.",
      },
      {
        archetype: "HBV",
        text: "Feel annoyed with myself. I was one second away from asking it.",
      },
      {
        archetype: "HSW",
        text: "See that I have taught myself not to ask things like that here.",
      },
      {
        archetype: "OVP",
        text: "Wish I had written it down, so I could have asked first.",
      },
    ],
  },
  {
    id: 7,
    question: "What do you usually do when you do not know something at work?",
    options: [
      {
        archetype: "HSW",
        text: "I have learned to look like I know, whatever is true underneath.",
      },
      {
        archetype: "HBV",
        text: "I hide it and find out quietly, on my own.",
      },
      {
        archetype: "DEC",
        text: "I first check whether it is safe here to show that I do not know.",
      },
      {
        archetype: "OVP",
        text: "I prepare so much that it almost never happens.",
      },
      {
        archetype: "IEX",
        text: "It rarely happens. I usually do know. My problem is being seen.",
      },
    ],
  },
  {
    id: 8,
    question: "Think of your best work from the last months. Who knows about it?",
    options: [
      {
        archetype: "OVP",
        text: "Everyone who received it. It was very thorough.",
      },
      {
        archetype: "HSW",
        text: "Fewer people than should. Talking about myself feels false.",
      },
      {
        archetype: "IEX",
        text: "It should speak for itself. I should not have to sell it.",
      },
      {
        archetype: "DEC",
        text: "One or two people. I chose them carefully.",
      },
      {
        archetype: "HBV",
        text: "Mostly me. I did it well and I said nothing.",
      },
    ],
  },
  {
    id: 9,
    question: "When you disagree with someone senior, what do you usually do?",
    options: [
      {
        archetype: "IEX",
        text: "I give my reasons once, and leave it there.",
      },
      {
        archetype: "OVP",
        text: "I bring so much evidence that nobody can argue with it.",
      },
      {
        archetype: "HBV",
        text: "I go quiet and agree. Later I wish I had not.",
      },
      {
        archetype: "DEC",
        text: "I look at who is in the room and choose the words most likely to be heard.",
      },
      {
        archetype: "HSW",
        text: "I make myself softer, to keep the relationship easy.",
      },
    ],
  },
  {
    id: 10,
    question: "Which sentence fits your working life right now?",
    options: [
      { archetype: "HBV", text: "I have more to say than I let out." },
      {
        archetype: "HSW",
        text: "At work I am a slightly different person than anywhere else.",
      },
      { archetype: "OVP", text: "I work twice as hard to feel half as safe." },
      {
        archetype: "DEC",
        text: "I am always translating between how they work and how I work.",
      },
      {
        archetype: "IEX",
        text: "I do the work. The recognition does not come.",
      },
    ],
  },
  {
    id: 11,
    question:
      "A senior person you do not know joins your project. What is your first instinct?",
    options: [
      {
        archetype: "DEC",
        text: "Watch how they work, before I decide how to show up.",
      },
      {
        archetype: "OVP",
        text: "Prepare a lot, so I am never unprepared in front of them.",
      },
      {
        archetype: "HSW",
        text: "Work out which version of me this person needs.",
      },
      {
        archetype: "IEX",
        text: "Keep doing good work. That is how they will notice me.",
      },
      {
        archetype: "HBV",
        text: "Stay quiet until I understand how things work between them.",
      },
    ],
  },
  {
    id: 12,
    question:
      "You work in your second or third language. When you speak:",
    options: [
      {
        archetype: "HSW",
        text: "Part of me does not come through in this language.",
      },
      {
        archetype: "IEX",
        text: "I do not worry. The ideas travel, accent or not.",
      },
      {
        archetype: "HBV",
        text: "Sometimes I stay quiet, rather than say it imperfectly.",
      },
      {
        archetype: "DEC",
        text: "I keep checking how my words are being received.",
      },
      {
        archetype: "OVP",
        text: "I write out what I will say, so I do not lose the words.",
      },
    ],
  },
  {
    id: 13,
    question: "Friday evening. Where is your energy?",
    options: [
      { archetype: "OVP", text: "Worn out, from preparing everything far too much." },
      {
        archetype: "HBV",
        text: "Tired from the things I held in, instead of saying them.",
      },
      {
        archetype: "DEC",
        text: "Tired from translating all week, and from reading every room.",
      },
      { archetype: "HSW", text: "Empty, from playing a role all week." },
      {
        archetype: "IEX",
        text: "More frustrated than tired. Good work, and nobody saw it.",
      },
    ],
  },
  {
    id: 14,
    question: "A chance comes to present to a bigger audience. You:",
    options: [
      {
        archetype: "IEX",
        text: "Think my work so far already speaks for me.",
      },
      {
        archetype: "HSW",
        text: "Wonder how much of the real me I can bring there.",
      },
      {
        archetype: "DEC",
        text: "Think about who will be watching, and what they expect.",
      },
      {
        archetype: "HBV",
        text: "Hope someone else offers first, so I do not have to.",
      },
      {
        archetype: "OVP",
        text: "Say yes. Then prepare until it hurts.",
      },
    ],
  },
  {
    id: 15,
    question: "Someone finally says your name in public, for your work. You feel:",
    options: [
      { archetype: "HBV", text: "Relief. I wanted this and I never asked for it." },
      { archetype: "IEX", text: "Confirmed. It was always there to see." },
      {
        archetype: "OVP",
        text: "That all the extra hours nobody saw were worth it.",
      },
      {
        archetype: "HSW",
        text: "A strange distance. They praised a version of me, not me.",
      },
      {
        archetype: "DEC",
        text: "Glad. And I note what made this one land, when other work did not.",
      },
    ],
  },
  {
    id: 16,
    question:
      "The coffee, the weekend question, the small talk before a meeting. For you it is:",
    options: [
      { archetype: "DEC", text: "Information. I read it carefully." },
      { archetype: "HBV", text: "Something I stay at the edge of. Others lead it." },
      {
        archetype: "IEX",
        text: "Not the point. The work is what counts.",
      },
      {
        archetype: "OVP",
        text: "Something I prepare for too, strangely, so I am ready.",
      },
      {
        archetype: "HSW",
        text: "A performance. I do it, and afterwards I feel what it cost.",
      },
    ],
  },
  {
    id: 17,
    question: "You find out your team has understood you wrongly. What do you do?",
    options: [
      {
        archetype: "HSW",
        text: "I quietly change the self I show, so it does not happen again.",
      },
      {
        archetype: "DEC",
        text: "I work out which signal I sent that was read wrongly.",
      },
      {
        archetype: "OVP",
        text: "I decide to control every impression more carefully.",
      },
      {
        archetype: "HBV",
        text: "I keep it to myself, instead of correcting them.",
      },
      {
        archetype: "IEX",
        text: "I trust that the work will correct it, in time.",
      },
    ],
  },
  {
    id: 18,
    question: "What usually stops you from speaking?",
    options: [
      { archetype: "OVP", text: "I want to be fully prepared first." },
      {
        archetype: "DEC",
        text: "I am not sure yet that I have read the room correctly.",
      },
      { archetype: "HBV", text: "The right moment never quite arrives." },
      { archetype: "IEX", text: "I should not have to. The work should be enough." },
      {
        archetype: "HSW",
        text: "Speaking freely would show a self I keep away from work.",
      },
    ],
  },
  {
    id: 19,
    question:
      "Imagine work goes better for you. What does that look like?",
    options: [
      { archetype: "IEX", text: "Being seen for what I already do." },
      { archetype: "HBV", text: "Finally saying the things I hold back." },
      {
        archetype: "HSW",
        text: "Being the same person at work as everywhere else.",
      },
      {
        archetype: "OVP",
        text: "Not having to work so much to feel safe.",
      },
      {
        archetype: "DEC",
        text: "Knowing the system so well that it stops taking my energy.",
      },
    ],
  },
  {
    id: 20,
    question: "If you are honest, what does this cost you most?",
    options: [
      { archetype: "HBV", text: "The words that stayed inside." },
      { archetype: "OVP", text: "The tiredness from preparing too much." },
      { archetype: "HSW", text: "The self I put away every morning." },
      { archetype: "IEX", text: "The recognition that never came." },
      { archetype: "DEC", text: "The translating that never stops." },
    ],
  },
];

export type ArchetypeScores = Record<ArchetypeCode, number>;

export function emptyScores(): ArchetypeScores {
  return { HBV: 0, DEC: 0, IEX: 0, OVP: 0, HSW: 0 };
}

// Maps each answer (an option index, or null if unanswered) to the archetype
// that option belongs to. Unanswered questions map to null.
export function answerCodes(
  answers: (number | null)[]
): (ArchetypeCode | null)[] {
  return questions.map((q, i) => {
    const selected = answers[i];
    if (selected === null || selected === undefined) return null;
    return q.options[selected]?.archetype ?? null;
  });
}

export function tallyScores(answers: (number | null)[]): ArchetypeScores {
  const scores = emptyScores();
  for (const code of answerCodes(answers)) {
    if (code) scores[code] += 1;
  }
  return scores;
}

// Highest score wins. Ties break by ARCHETYPE_ORDER, so the outcome is always
// deterministic.
export function winningArchetype(scores: ArchetypeScores): ArchetypeCode {
  return ARCHETYPE_ORDER.reduce((best, code) =>
    scores[code] > scores[best] ? code : best
  );
}
