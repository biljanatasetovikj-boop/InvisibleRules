import FadeIn from "../FadeIn";
import { Container, Tape } from "./ui";

// "Does this sound familiar?", built from Biljana's poster: three stages,
// each moment shown as a scrap of real life (an inbox, a note to self, a
// forum post) with a real interview quote on it.
//
// Quotes are real lines from Biljana's interviews. Never add one that
// someone didn't say.

type Note = {
  heading: React.ReactNode;
  kind: "paper" | "lined" | "blue" | "sticky" | "black";
  left?: string;
  right?: string;
  quote: React.ReactNode;
  tilt: string;
  tape?: boolean;
  stamp?: string;
};

const rows: { n: number; label: string; stop?: boolean; dots?: boolean; notes: Note[] }[] = [
  {
    n: 1,
    label: "In the moment",
    stop: true,
    notes: [
      {
        heading: <><b>No words</b> for what’s happening.</>,
        kind: "paper",
        left: "✉ Inbox",
        right: "Re: Re:",
        quote: (
          <>
            “I felt so{" "}
            <span className="border-2 border-wip-red px-1">confused</span>{" "}
            by their email.”
          </>
        ),
        tilt: "rotate-1",
        tape: true,
      },
      {
        heading: <>You <b>blame yourself</b>, or them.</>,
        kind: "lined",
        left: "Note to self",
        right: "11:47 PM",
        quote: "“I might not be good at my job.”",
        tilt: "-rotate-2",
      },
    ],
  },
  {
    n: 2,
    label: "Weeks later",
    dots: true,
    notes: [
      {
        heading: <><b>No one</b> to talk it through with.</>,
        kind: "paper",
        left: "Forum",
        right: "Anonymous",
        quote: "“I used Reddit to find some answers.”",
        tilt: "-rotate-1",
        tape: true,
      },
      {
        heading: <>You <b>go silent.</b></>,
        kind: "blue",
        left: "Team sync",
        right: "Muted",
        quote: "“I decided not to bring that part of me to a meeting again.”",
        tilt: "rotate-1",
        tape: true,
      },
    ],
  },
  {
    n: 3,
    label: "Months later",
    dots: true,
    notes: [
      {
        heading: <>You <b>stop caring.</b></>,
        kind: "sticky",
        quote: "“I just do the work.”",
        tilt: "-rotate-2",
      },
      {
        heading: <>You <b>look elsewhere.</b></>,
        kind: "paper",
        left: "Applications",
        right: "4 sent",
        quote: "“I’m already applying for other jobs.”",
        tilt: "rotate-1",
        tape: true,
      },
      {
        heading: <>Your <b>career stalls.</b></>,
        kind: "black",
        left: "Role offer",
        right: "Internal",
        quote: "“They offered me a position that was obviously not meant for me.”",
        tilt: "-rotate-1",
        tape: true,
        stamp: "Not a fit",
      },
    ],
  },
];

const noteStyle: Record<Note["kind"], string> = {
  paper: "bg-white text-wip-ink border-2 border-wip-ink shadow-[0_10px_18px_rgba(0,0,0,0.12)]",
  lined:
    "text-wip-ink bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_31px,rgba(54,59,143,0.25)_31px,rgba(54,59,143,0.25)_32px)]",
  blue: "bg-wip-blue text-white shadow-[0_10px_18px_rgba(0,0,0,0.18)]",
  sticky: "bg-[#ffe66e] text-wip-ink shadow-[0_12px_20px_rgba(0,0,0,0.15)]",
  black: "bg-wip-ink text-white shadow-[0_10px_18px_rgba(0,0,0,0.2)]",
};

// Dotted grid, like the poster's halftone squares.
const dots = "bg-[radial-gradient(rgba(54,59,143,0.35)_1px,transparent_1.4px)] [background-size:10px_10px]";

function NoteCard({ note }: { note: Note }) {
  const dark = note.kind === "blue" || note.kind === "black";
  return (
    <div className={`relative px-5 sm:px-6 ${note.kind === "sticky" ? "py-8 sm:py-10" : "py-5"} ${noteStyle[note.kind]} ${note.tilt}`}>
      {note.tape && <Tape className="-top-3 left-1/2 -translate-x-1/2 -rotate-2 bg-[#f6e7c1]/90! border-transparent!" />}
      {note.left && (
        <div
          aria-hidden="true"
          className={`flex justify-between gap-4 pb-2 mb-3 border-b border-dashed font-mono text-[12px] uppercase tracking-[0.08em] ${
            dark ? "border-white/50 text-white/90" : "border-wip-ink/60 text-wip-ink/80"
          }`}
        >
          <span>{note.left}</span>
          <span>{note.right}</span>
        </div>
      )}
      <p
        className={
          note.kind === "sticky"
            ? "font-editor text-[28px] sm:text-[32px] leading-[1.2]"
            : "font-editor italic text-[19px] sm:text-[20px] leading-[1.45]"
        }
      >
        {note.quote}
      </p>
      {note.stamp && (
        <span
          aria-hidden="true"
          className="absolute -bottom-4 -right-3 rotate-[-12deg] border-2 border-wip-red bg-wip-paper px-2.5 py-0.5 font-mono text-[12px] font-bold uppercase tracking-[0.14em] text-wip-red"
        >
          {note.stamp}
        </span>
      )}
    </div>
  );
}

export default function Familiar() {
  return (
    <div className="relative mt-24 lg:mt-32 pt-16 sm:pt-20 overflow-hidden pb-4">
      {/* The poster's red circle and dotted square, top right. */}
      <div aria-hidden="true" className={`absolute top-10 right-24 h-56 w-72 hidden md:block ${dots}`} />
      <div aria-hidden="true" className="absolute -top-20 -right-16 h-32 w-32 sm:-top-16 sm:-right-24 sm:h-64 sm:w-64 lg:h-80 lg:w-80 rounded-full bg-wip-red" />

      <Container className="relative">
        <FadeIn>
          <p className="max-w-[640px] font-editor text-[26px] sm:text-[34px] leading-[1.3] text-wip-ink">
            Something at work you can’t read.{" "}
            <b className="font-semibold bg-[linear-gradient(transparent_62%,rgba(226,10,57,0.25)_62%)]">
              Then a pattern starts.
            </b>
          </p>
        </FadeIn>

        <ol className="mt-16">
          {rows.map((row) => (
            <li
              key={row.n}
              className="relative grid lg:grid-cols-[230px_1fr] gap-8 lg:gap-12 border-t-2 border-wip-ink py-10 lg:py-12"
            >
              {row.n === 3 && (
                <div aria-hidden="true" className="absolute -left-40 top-24 h-72 w-28 -rotate-[8deg] bg-wip-blue hidden xl:block" />
              )}
              <div className="relative flex lg:block items-end gap-5">
                <div className="relative inline-block">
                  {row.dots && <div aria-hidden="true" className={`absolute -inset-3 ${dots}`} />}
                  {row.n === 1 && (
                    <span aria-hidden="true" className="absolute -inset-x-3 -inset-y-2 rounded-full border-[3px] border-wip-red" />
                  )}
                  <span
                    aria-hidden="true"
                    className="relative block px-4 font-editor text-[96px] sm:text-[120px] leading-none text-transparent [-webkit-text-stroke:2px_var(--color-wip-ink)]"
                  >
                    {row.n}
                  </span>
                </div>
                <div className="lg:mt-4">
                  <p className="font-editor text-[24px] sm:text-[28px] leading-tight text-wip-ink">{row.label}</p>
                  {row.stop && (
                    <p className="mt-4 inline-block -rotate-2 bg-wip-red px-3 py-1.5 font-mono text-[13px] font-bold uppercase tracking-[0.14em] text-white">
                      ↖ Stop it here
                    </p>
                  )}
                </div>
              </div>

              <ul className={`grid gap-x-8 gap-y-12 ${row.notes.length === 3 ? "sm:grid-cols-2 xl:grid-cols-3" : "sm:grid-cols-2"}`}>
                {row.notes.map((note, i) => (
                  <li key={i}>
                    <p className="mb-6 font-editor text-[22px] sm:text-[25px] leading-[1.25] text-wip-ink [&_b]:font-semibold">
                      {note.heading}
                    </p>
                    <NoteCard note={note} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <FadeIn>
          <div className="relative mt-10 mr-4">
            <span aria-hidden="true" className="absolute -top-8 -right-6 h-20 w-20 rotate-45 bg-wip-red" />
            <p className="relative bg-wip-blue px-7 py-14 sm:px-14 sm:py-20 font-editor text-[38px] sm:text-[56px] lg:text-[64px] leading-[1.08] tracking-[-0.02em] text-white">
              Spot the pattern.{" "}
              <span className="underline decoration-wip-red decoration-[3px] underline-offset-[8px]">
                Stop it early.
              </span>
            </p>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}
