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
  // Both render as several short paragraphs, the way Biljana writes. Keep the
  // breaks: the rhythm is the voice.
  opening: string[];
  reframe: string[];
  move: string;
  line: string;
}

export const archetypeResults: Record<ArchetypeCode, ArchetypeResult> = {
  HBV: {
    code: "HBV",
    name: "The Doubter",
    opening: [
      "You have something useful and you keep it inside.",
      "In a meeting you wait for the right moment, and the moment passes. In an email you write it, read it again, and delete the last line. You see a small thing that would make the weekly report easier to read, and you decide someone more senior has surely noticed already. Two months later a colleague says it out loud and people thank them.",
      "You did not lack the idea. You had it first. You were waiting until it felt big enough to be worth their time.",
    ],
    reframe: [
      "You did not become like this at work. You learned it earlier, in a place where you speak when you are certain, or when you are invited. An unfinished thought is not offered. That is respect, not fear.",
      "Your Western colleague does not do this. Not because they are braver or more capable. In their rooms people think out loud, and half an idea is treated as a normal contribution. They absorbed that. Nobody had to teach them.",
      "So your care is read here as having nothing to say. And it costs you. Projects you would have been good at. Credit that goes to whoever said it first. The slow feeling that you are only a listener in this company. If nobody told you the rule was different here, you start to think the problem is you.",
      "It is not.",
    ],
    move:
      "This week, take one thing that feels too small to mention. Send it to one person in two sentences. Not in a meeting. Not polished. Just sent. You are not testing whether the idea is good. You are testing what happens when you offer something unfinished. Almost always nothing happens, and that is the information you need.",
    line: "It does not have to be brilliant. It only has to be useful.",
  },
  DEC: {
    code: "DEC",
    name: "The Decoder",
    opening: [
      "You understand the words. You are still translating something else.",
      "A meeting ends faster than it should and you replay it that evening. A message says “interesting” and you know it is not a compliment. Someone is asked, someone else is told, and you notice the difference. You read tone in emails and silences on calls.",
      "You can feel there is another layer under the work. You cannot yet name it.",
    ],
    reframe: [
      "You are not imagining it and you are not too sensitive. You are moving between two sets of rules. The ones you grew up with, which felt like common sense. And the ones this company runs on, which nobody wrote down, because to them they are common sense too.",
      "You see them because they are not yours. That is a real skill, and very few people in the room have it.",
      "It also costs you. You are doing two jobs. The work, and the reading of the room where the work happens. The second job appears nowhere. It leaves you one step behind people who simply act, and some of your energy goes on finding danger in things that hold none.",
      "Your reading is not the problem. The silence around the rules is.",
    ],
    move:
      "Start writing them down. One short list. On the left, the sentence or the moment. On the right, what it turned out to mean. “Let us take this offline” meant this is not for this audience. “Be more strategic” meant show the thinking, not the task list. Once a rule has words you decode it once instead of every time, and you can ask a colleague you trust whether you read it correctly.",
    line: "You are sensing a code no one taught you to read.",
  },
  IEX: {
    code: "IEX",
    name: "The Uncounted",
    opening: [
      "You do the work and the work does not appear anywhere.",
      "You fix the thing before it breaks. You keep the relationship with the difficult client. You do the careful version nobody asked for. Then the summary goes around and your part is not in it. You do not write the update. You do not put your name on the result. You solve the problem so quietly that nobody knows there was one.",
      "You were recruited for this ability. You know you are good at it. So you do more of it, and you wait.",
    ],
    reframe: [
      "Where many of us learned to work, speaking about your own work is not modesty. It is what a person does when they are unsure. Good work is supposed to be noticed by someone above you.",
      "In most Western companies nobody is doing that noticing. Here work is counted in what gets said and written. Saying it is not boasting to them. It is information.",
      "The cost is that you stay invisible to the exact people who decide projects, promotions and salaries. Working harder makes it worse, because more uncounted work is still uncounted. If nobody told you that the counting works differently here, you start to think you are simply not good enough yet.",
      "You are.",
    ],
    move:
      "After your next piece of work, send two sentences to one person who matters. What it was. What changed because of it. No adjectives, no selling. If it still feels like boasting, write it as a report and not as a claim. You are not asking anyone to admire you. You are giving them something they cannot see from where they sit.",
    line:
      "Good work is not enough. It has to be counted in the language they count in.",
  },
  OVP: {
    code: "OVP",
    name: "The Rehearser",
    opening: [
      "You prepare much more than the work needs.",
      "A fifteen minute call gets an hour of notes. A short email is rewritten five times. You rehearse the questions you might be asked, then the answers, then the answers to the answers. You do it before the informal things too. A coffee. A quick introduction. A call with someone friendly.",
      "The preparation is not really about the work. It is about one picture you keep away from yourself. Being asked something in front of people, and having nothing.",
    ],
    reframe: [
      "There is a weight here that your colleagues do not carry. When they do not know something, it is a gap. When you do not know something, it feels like evidence about people like you. So not knowing has to be prevented, never shown.",
      "In this environment asking early and showing unfinished work is normal. It is how people are expected to work. Your preparation is protecting you from a danger that is much smaller here than it was where you learned it.",
      "And it never ends. Every hour of preparing proves to you that the exposure would have been unbearable, so next time the fear asks for more hours. It takes your evenings, your weekends, and in the end your energy for the work itself.",
      "You cannot prepare your way out of a fear of not knowing.",
    ],
    move:
      "Choose one small, safe moment this week and answer honestly. I do not know. Let me find out. Then notice what it costs, which is almost always nothing. Authority here does not come from having every answer. It comes from being the person who is trusted to find them.",
    line:
      "Your authority is not in having every answer. It is in being trusted to find them.",
  },
  HSW: {
    code: "HSW",
    // The quotation marks are part of the name: they carry the irony. Without
    // them it reads as praise.
    name: "The “Professional”",
    opening: [
      "You send a smaller version of yourself to work.",
      "The opinion gets softer. The humour stays at home. The way you would really explain this, to someone you trust, in your own language, becomes something short and correct and flat. It is in your writing first. Then in the camera you leave off, the small talk you avoid, the story you do not tell.",
      "You are not lying to anyone. You are simply not there.",
    ],
    reframe: [
      "This started as good judgement. Early on you understood that the whole of you would not be read well here. Maybe you tried once and it did not go well. So you offered the part that felt safe, and it worked well enough to keep doing.",
      "Now you are doing two things at the same time. The work, and the holding of a second self, all day.",
      "It makes you tired in a way that rest does not fix. The recognition you do get feels strange, because it is aimed at someone who is not quite you. And people cannot trust a person they cannot see, so the part you removed in order to be accepted is the part that would have made you known.",
      "The flatness was not protecting you. It was erasing you.",
    ],
    move:
      "Let one real thing through. Once. Somewhere small. Your actual opinion in a message. A joke that is genuinely yours. The sentence you would say if these were your own people. Then watch what it costs. It is nearly always less than you expect, and very often it is the moment someone starts speaking to you like a person and not a role.",
    line:
      "The part you hide to seem professional is often the part that makes you matter.",
  },
};

// Identical on all five results.
export const OUTRO_LINE =
  "These patterns are fluid and most people are a blend of two or three, and they shift by room and season. For more on the Invisible Rules at work, including upcoming free webinars and the cohort, visit Learn the Rules.";

export const SITE_URL = "https://theinvisiblerules.com";

// Where the result screen's button sends people. Points at the homepage until
// the "Learn the Rules" section exists; once it does, append its anchor here
// (e.g. `${SITE_URL}/#learn-the-rules`) and nothing else needs changing.
export const LEARN_MORE_URL = SITE_URL;

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
