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

// ---------- Waving flag ----------
export function Flag({ className = "" }: { className?: string }) {
  const wave = (y: number) => `M30 ${y} C70 ${y - 14} 110 ${y + 14} 150 ${y} S230 ${y - 14} 270 ${y}`;
  return (
    <svg viewBox="0 0 290 240" aria-hidden="true" className={className}>
      <path d="M26 20V236" {...line} strokeWidth={2.4} />
      <circle cx="26" cy="15" r="5" {...line} />
      {[30, 52, 74, 96, 118, 140, 162].map((y, i) => (
        <path key={y} d={wave(y)} {...line} opacity={i % 2 ? 0.45 : 1} />
      ))}
      <path d="M270 30V162" {...line} />
      {/* canton with stars */}
      <path d="M30 30 C55 21 80 26 110 34 V100 C80 92 55 87 30 96Z" {...line} fill="var(--color-wip-paper)" />
      {[0, 1, 2, 3].flatMap((r) =>
        [0, 1, 2, 3].map((c) => {
          const x = 40 + c * 19 + (r % 2) * 8;
          const y = 42 + r * 14 + c * 1.5;
          return <path key={`${r}-${c}`} d={`M${x - 3} ${y}h6M${x} ${y - 3}v6`} {...line} />;
        })
      )}
    </svg>
  );
}

// ---------- Statue of Liberty ----------
export function Liberty({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 440" aria-hidden="true" className={className}>
      {/* torch */}
      <path d="M60 52c-8-10-4-24 6-32 0 10 10 12 8 24-1 6-6 9-14 8z" {...line} />
      <path d="M56 54h22l-4 12H60z" {...line} />
      <path d="M66 66l6 10" {...line} />
      {/* raised arm */}
      <path d="M70 76L84 160M80 74l14 82" {...line} />
      {/* head and crown */}
      <circle cx="104" cy="150" r="15" {...line} />
      <path d="M90 140c8-6 20-6 28 0" {...line} />
      {[[-34, -8], [-24, -22], [-10, -30], [6, -32], [22, -26], [34, -12], [40, 2]].map(([dx, dy], i) => (
        <path key={i} d={`M${104 + dx * 0.4} ${142 + dy * 0.2}L${104 + dx} ${142 + dy}`} {...line} />
      ))}
      {/* robe */}
      <path d="M88 168c-10 30-18 80-22 130-2 26 0 40 0 40h74s4-20 0-46c-4-44-12-92-20-124" {...line} />
      <path d="M96 180c-4 40-10 90-12 150M108 182c0 44 2 96 6 150M122 196c4 40 10 84 10 130" {...line} opacity=".55" />
      <path d="M86 200c18 10 34 10 50 0" {...line} />
      {/* tablet */}
      <path d="M126 190l26 6-6 40-26-6z" {...line} />
      <path d="M130 204l16 4M128 214l16 4" {...line} opacity=".6" />
      {/* pedestal */}
      <path d="M56 338h88l10 18H46z" {...line} />
      <path d="M52 356h96v84H52z" {...line} />
      <path d="M64 370h72v40H64z" {...line} opacity=".7" />
      {[74, 92, 110, 128].map((x) => (
        <path key={x} d={`M${x} 378v24`} {...line} opacity=".55" />
      ))}
    </svg>
  );
}

// ---------- Golden Gate Bridge ----------
export function GoldenGate({ className = "" }: { className?: string }) {
  // Main cable between the towers: x = 170 + 260t, y = 25 + 470t(1 - t).
  const hangers = Array.from({ length: 17 }, (_, i) => {
    const t = (i + 1) / 18;
    return { x: 170 + 260 * t, y: 25 + 470 * t * (1 - t) };
  }).filter((h) => h.y < 148);
  return (
    <svg viewBox="0 0 600 240" aria-hidden="true" className={className}>
      <path d="M0 122 Q100 112 170 25 Q300 260 430 25 Q500 112 600 122" {...line} />
      {hangers.map((h) => (
        <path key={h.x} d={`M${h.x} ${h.y}V150`} {...line} opacity=".6" />
      ))}
      {[20, 50, 80, 110, 140].map((x) => (
        <path key={x} d={`M${x} ${122 - (x / 170) * 40}V150`} {...line} opacity=".6" />
      ))}
      {[460, 490, 520, 550, 580].map((x) => (
        <path key={x} d={`M${x} ${25 + ((x - 430) / 170) * 97}V150`} {...line} opacity=".6" />
      ))}
      {[170, 430].map((x) => (
        <g key={x}>
          <path d={`M${x - 10} 20V214M${x + 10} 20V214`} {...line} strokeWidth={2.2} />
          {[30, 62, 94, 126].map((y) => (
            <path key={y} d={`M${x - 10} ${y}h20`} {...line} />
          ))}
        </g>
      ))}
      <path d="M0 150H600M0 158H600" {...line} />
      {[0, 1, 2].map((r) => (
        <path
          key={r}
          d={`M${r * 30} ${196 + r * 12} q15 -6 30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0`}
          {...line}
          opacity={0.5 - r * 0.12}
        />
      ))}
    </svg>
  );
}

// ---------- Liberty Bell ----------
export function LibertyBell({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 200" aria-hidden="true" className={className}>
      <path d="M20 22h140v14H20z" {...line} />
      <path d="M78 36v10h24V36" {...line} />
      <path d="M58 60c4-10 16-14 32-14s28 4 32 14c6 18 6 50 14 76 4 12 12 18 16 22H28c4-4 12-10 16-22 8-26 8-58 14-76z" {...line} />
      <path d="M26 158c20 8 108 8 128 0M34 168c20 6 92 6 112 0" {...line} />
      <path d="M50 92c26 6 54 6 80 0M48 104c28 6 56 6 84 0" {...line} opacity=".55" />
      <path d="M92 108l-6 14 8 8-6 12 4 10" {...line} strokeWidth={2.2} />
      <circle cx="90" cy="178" r="8" {...line} />
      <path d="M90 170v-10" {...line} />
    </svg>
  );
}
