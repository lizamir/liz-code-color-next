// rays around the bulb: [x1, y1, x2, y2], drawn outward from the glass
const RAYS = [
  [50, 2, 50, -12],
  [24, 10, 15, -1],
  [76, 10, 85, -1],
  [8, 30, -6, 24],
  [92, 30, 106, 24],
  [6, 54, -8, 58],
  [94, 54, 108, 58],
];

/** The hand-drawn lightbulb. Its flicker and rays are animated in the CSS. */
export default function Bulb() {
  return (
    <svg className="iw-bulb" viewBox="-12 -16 124 150" aria-hidden="true" focusable="false">
      <circle className="iw-glow" cx="50" cy="44" r="46" />
      <g className="iw-rays">
        {RAYS.map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} style={{ ["--r" as string]: i }} />
        ))}
      </g>
      <path
        className="iw-glass"
        d="M50 8C27 8 12 25 12 46c0 14 7 22 15 30 5 5 8 10 8 16h30c0-6 3-11 8-16 8-8 15-16 15-30 0-21-15-38-38-38Z"
      />
      <path className="iw-shine" d="M27 40c1-9 6-16 14-19" />
      <path className="iw-filament" d="M42 92V72c0-9 3-13 8-6 5-7 8-3 8 6v20" />
      <g className="iw-base">
        <rect x="33" y="92" width="34" height="10" rx="4" />
        <rect x="35" y="102" width="30" height="10" rx="4" />
        <path d="M42 112h16l-3 7h-10Z" />
      </g>
    </svg>
  );
}
