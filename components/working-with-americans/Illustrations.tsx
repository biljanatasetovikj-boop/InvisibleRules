// Line drawings of American landmarks, in the page's blue, after the
// doodled illustrations on worksinprogress.co. Purely decorative: every one
// is aria-hidden and sits in empty space beside the text, never behind it.

const line = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  vectorEffect: "non-scaling-stroke" as const,
};

// ---------- New York skyline ----------
const buildings: [number, number, number][] = [
  // x, width, top
  [0, 46, 120], [50, 34, 92], [88, 58, 130], [150, 40, 70], [194, 64, 110],
  [262, 30, 84], [296, 70, 124], [370, 44, 96], [418, 80, 132], [610, 60, 104],
  [674, 38, 128], [820, 54, 112], [878, 40, 90], [922, 70, 128], [996, 36, 100],
  [1036, 60, 118], [1100, 44, 86], [1148, 52, 124],
];

export function Skyline({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 200" aria-hidden="true" className={className}>
      <defs>
        <pattern id="wwa-windows" width="10" height="13" patternUnits="userSpaceOnUse">
          <rect x="3" y="3" width="3.5" height="5" fill="currentColor" opacity=".55" />
        </pattern>
      </defs>
      {/* moon and a few stars */}
      <circle cx="1060" cy="38" r="20" {...line} />
      <path d="M1052 30 a14 14 0 0 0 14 20" {...line} opacity=".6" />
      {[[140, 30], [330, 22], [470, 46], [760, 18], [960, 40], [1180, 20]].map(([x, y]) => (
        <path key={`${x}`} d={`M${x - 4} ${y}h8M${x} ${y - 4}v8`} {...line} />
      ))}
      {buildings.map(([x, w, top]) => (
        <g key={x}>
          <rect x={x} y={top} width={w} height={200 - top} fill="url(#wwa-windows)" />
          <rect x={x} y={top} width={w} height={200 - top} {...line} />
        </g>
      ))}
      {/* Empire State Building */}
      <g>
        <rect x="508" y="78" width="84" height="122" fill="url(#wwa-windows)" />
        <path d="M508 200V78h84v122M520 78V58h60v20M532 58V40h36v18M541 40V28h18v12M550 28V4" {...line} />
      </g>
      {/* Chrysler Building */}
      <g>
        <rect x="726" y="76" width="56" height="124" fill="url(#wwa-windows)" />
        <path
          d="M726 200V76h56v124M730 76c0-14 10-22 24-26 14 4 24 12 24 26M736 62c0-10 8-16 18-19 10 3 18 9 18 19M742 50c0-8 6-12 12-14 6 2 12 6 12 14M754 36V8"
          {...line}
        />
        <path d="M740 76l6-12M768 76l-6-12M748 62l4-9M760 62l-4-9" {...line} opacity=".7" />
      </g>
      <path d="M0 199H1200" {...line} />
    </svg>
  );
}
