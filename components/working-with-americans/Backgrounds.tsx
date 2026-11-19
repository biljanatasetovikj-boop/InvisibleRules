// Decorative patches for the course page, drawn after three of Biljana's
// background designs: the waves, the scalloped rosettes and the warped
// checkerboard. They sit in empty corners beside the text, never behind it.
// Everything here is aria-hidden and ignores the pointer.

const BLUE = "#363B8F";
const RED = "#E20A39";
const PAPER = "#FFF7F4";
const INK = "#000000";

type Pt = [number, number];
const f = (n: number) => n.toFixed(1);
const poly = (pts: Pt[]) => "M" + pts.map(([x, y]) => `${f(x)} ${f(y)}`).join("L") + "Z";

// ---------- waves ----------
function wavePath(w: number, y0: number, thick: number, amp: number, wl: number, phase: number) {
  const top: Pt[] = [];
  const bot: Pt[] = [];
  for (let x = -wl; x <= w + wl; x += 5) {
    const y = y0 + amp * Math.sin((2 * Math.PI * x) / wl + phase);
    top.push([x, y]);
    bot.push([x, y + thick]);
  }
  return poly([...top, ...bot.reverse()]);
}

const BANDS: [string, number][] = [
  [BLUE, 1],
  [RED, 0.62],
  [BLUE, 1],
  [BLUE, 1],
  [RED, 0.62],
  [BLUE, 1],
  [BLUE, 1],
];

function waveBands(w: number, h: number, band: number, gap: number, amp: number, wl: number) {
  const out = [];
  let y = -amp;
  let i = 0;
  while (y < h + amp) {
    const [colour, k] = BANDS[i % BANDS.length];
    const t = band * k;
    out.push(
      <path
        key={i}
        d={wavePath(w, y, t, amp, wl, 0.6)}
        fill={colour}
        stroke={INK}
        strokeWidth={2.5}
        strokeLinejoin="round"
      />
    );
    y += t + gap;
    i += 1;
  }
  return out;
}

// ---------- warped checkerboard ----------
function checkerPaths(w: number, h: number, cell: number, bend: number) {
  const warp = ([x, y]: Pt): Pt => [
    x + bend * Math.sin(y / (cell * 1.2) + 0.9) + bend * 0.55 * Math.sin(x / (cell * 1.6)),
    y + bend * Math.sin(x / (cell * 1.3) + 0.2) + bend * 0.55 * Math.sin(y / (cell * 1.5)),
  ];
  const cols = Math.ceil(w / cell) + 2;
  const rows = Math.ceil(h / cell) + 2;
  let blue = "";
  let red = "";
  for (let i = -1; i < cols; i++) {
    for (let j = -1; j < rows; j++) {
      const hash = (((i * 73856093) ^ (j * 19349663)) >>> 0) % 5;
      const even = (i + j) % 2 === 0;
      if (!even && hash !== 0) continue;
      const x0 = i * cell;
      const y0 = j * cell;
      const pts: Pt[] = [];
      const s = cell / 4;
      for (let k = 0; k <= 4; k++) pts.push([x0 + k * s, y0]);
      for (let k = 1; k <= 4; k++) pts.push([x0 + cell, y0 + k * s]);
      for (let k = 3; k >= 0; k--) pts.push([x0 + k * s, y0 + cell]);
      for (let k = 3; k >= 1; k--) pts.push([x0, y0 + k * s]);
      const d = poly(pts.map(warp));
      if (even) blue += d;
      else red += d;
    }
  }
  return { blue, red };
}

// ---------- rosettes ----------
type Rosette = { cx: number; cy: number; r: number; a: string; b: string; c: string };

function scallop(cx: number, cy: number, r: number, n = 14, amp = 0.09) {
  const pts: Pt[] = [];
  for (let k = 0; k < 360; k++) {
    const t = (k * Math.PI) / 180;
    const rr = r * (1 + amp * Math.abs(Math.cos((n * t) / 2)));
    pts.push([cx + rr * Math.cos(t), cy + rr * Math.sin(t)]);
  }
  return poly(pts);
}

function RosetteShape({ cx, cy, r, a, b, c }: Rosette) {
  const d = scallop(cx, cy, r);
  return (
    <g>
      <path d={d} transform="translate(5 5)" fill={INK} />
      <path d={d} fill={a} stroke={INK} strokeWidth={2.5} strokeLinejoin="round" />
      <circle cx={cx} cy={cy} r={r * 0.62} fill={b} stroke={INK} strokeWidth={2.5} />
      <circle
        cx={cx}
        cy={cy}
        r={r * 0.8}
        fill="none"
        stroke={c}
        strokeWidth={3.2}
        strokeDasharray="0.1 7"
        strokeLinecap="round"
      />
    </g>
  );
}

const CLUSTER: Rosette[] = [
  { cx: 70, cy: 82, r: 62, a: RED, b: BLUE, c: PAPER },
  { cx: 180, cy: 56, r: 48, a: BLUE, b: RED, c: PAPER },
  { cx: 290, cy: 114, r: 70, a: PAPER, b: BLUE, c: BLUE },
  { cx: 398, cy: 62, r: 50, a: RED, b: PAPER, c: PAPER },
  { cx: 162, cy: 176, r: 58, a: PAPER, b: RED, c: RED },
  { cx: 384, cy: 184, r: 44, a: BLUE, b: PAPER, c: PAPER },
];

// ---------- patches (large screens) ----------

// A rounded panel of waves with a black shadow, like the cards on the page.
export function Waves({
  id,
  w = 280,
  h = 190,
  className = "",
}: {
  id: string;
  w?: number;
  h?: number;
  className?: string;
}) {
  return (
    <svg viewBox={`0 0 ${w + 10} ${h + 10}`} aria-hidden="true" focusable="false" className={`pointer-events-none ${className}`}>
      <defs>
        <clipPath id={id}>
          <rect width={w} height={h} rx={36} />
        </clipPath>
      </defs>
      <rect x={8} y={8} width={w} height={h} rx={36} fill={INK} />
      <rect width={w} height={h} rx={36} fill={PAPER} />
      <g clipPath={`url(#${id})`}>{waveBands(w, h, 50, 26, 13, 150)}</g>
      <rect width={w} height={h} rx={36} fill="none" stroke={INK} strokeWidth={3} />
    </svg>
  );
}

// A round disc of warped checks.
export function Checker({
  id,
  size = 220,
  className = "",
}: {
  id: string;
  size?: number;
  className?: string;
}) {
  const { blue, red } = checkerPaths(size, size, size / 7.5, size / 20);
  const r = size / 2;
  return (
    <svg viewBox={`0 0 ${size + 10} ${size + 10}`} aria-hidden="true" focusable="false" className={`pointer-events-none ${className}`}>
      <defs>
        <clipPath id={id}>
          <circle cx={r} cy={r} r={r} />
        </clipPath>
      </defs>
      <circle cx={r + 8} cy={r + 8} r={r} fill={INK} />
      <circle cx={r} cy={r} r={r} fill={PAPER} />
      <g clipPath={`url(#${id})`}>
        <path d={blue} fill={BLUE} />
        <path d={red} fill={RED} />
      </g>
      <circle cx={r} cy={r} r={r} fill="none" stroke={INK} strokeWidth={3} />
    </svg>
  );
}

// A loose cluster of scalloped rosettes.
export function Rosettes({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 460 252" aria-hidden="true" focusable="false" className={`pointer-events-none ${className}`}>
      {CLUSTER.map((r, i) => (
        <RosetteShape key={i} {...r} />
      ))}
    </svg>
  );
}

// ---------- strips (phones and tablets) ----------

// A thin full-width band of one pattern, in place of the corner patches.
export function Strip({
  kind,
  id,
  className = "",
}: {
  kind: "waves" | "checker" | "rosettes";
  id: string;
  className?: string;
}) {
  const w = 800;
  const h = 64;
  const { blue, red } = checkerPaths(w, h, 32, 8);
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
      className={`pointer-events-none block w-full h-12 ${className}`}
    >
      <defs>
        <clipPath id={id}>
          <rect width={w} height={h} />
        </clipPath>
      </defs>
      <rect width={w} height={h} fill={PAPER} />
      <g clipPath={`url(#${id})`}>
        {kind === "waves" && waveBands(w, h, 34, 14, 8, 110)}
        {kind === "checker" && (
          <>
            <path d={blue} fill={BLUE} />
            <path d={red} fill={RED} />
          </>
        )}
        {kind === "rosettes" &&
          [0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <RosetteShape
              key={i}
              cx={40 + i * 100}
              cy={50}
              r={38}
              a={[RED, PAPER, BLUE][i % 3]}
              b={[BLUE, RED, PAPER][i % 3]}
              c={[PAPER, RED, PAPER][i % 3]}
            />
          ))}
      </g>
      <path d={`M0 1.5H${w}M0 ${h - 1.5}H${w}`} stroke={INK} strokeWidth={3} />
    </svg>
  );
}
