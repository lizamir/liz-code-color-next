/* CurvedInput geometry adapted from React Bits, Copyright (c) 2026 David Haz. License: /licenses/react-bits.txt. */

const DEG = 180 / Math.PI;
const round2 = (n: number) => Math.round(n * 100) / 100;

type Geometry = {
  straight: boolean;
  R?: number;
  dir?: number;
  point: (u: number, v: number) => [number, number];
  angleAt: (u: number) => number;
};

function buildGeometry(width: number, bend: number, thickness: number, pad: number): Geometry {
  const W = width;
  const T = thickness;
  const s = Math.max(-W * 0.35, Math.min(bend, W * 0.35));
  const a = Math.abs(s);
  const dir = s >= 0 ? 1 : -1;

  if (a < 0.75) {
    const midY = pad + T / 2;
    return { straight: true, point: (u, v) => [u, midY + v], angleAt: () => 0 };
  }

  const R = (W * W * 0.25 + a * a) / (2 * a);
  const cx = W / 2;
  const apexY = pad + T / 2 + (dir > 0 ? 0 : a);
  const cy = apexY + dir * R;
  const phi = Math.asin(Math.min(1, W / (2 * R)));

  return {
    straight: false,
    R,
    dir,
    point: (u, v) => {
      const th = ((u - cx) / cx) * phi;
      const rho = R - dir * v;
      return [cx + rho * Math.sin(th), cy - dir * rho * Math.cos(th)];
    },
    angleAt: (u) => dir * ((u - cx) / cx) * phi * DEG,
  };
}

const fmt = (g: Geometry, u: number, v: number) => {
  const [x, y] = g.point(u, v);
  return `${round2(x)} ${round2(y)}`;
};

// Segment along a constant-v edge, as a circular arc (or a line when flat)
const edgeSeg = (g: Geometry, uTo: number, v: number, ltr: boolean) => {
  if (g.straight) return `L ${fmt(g, uTo, v)}`;
  const rho = round2(g.R! - g.dir! * v);
  const sweep = ltr === g.dir! > 0 ? 1 : 0;
  return `A ${rho} ${rho} 0 0 ${sweep} ${fmt(g, uTo, v)}`;
};

// A rectangle bent along the arc: circular top/bottom edges, radial end caps
// and quadratic rounded corners.
const bentRectPath = (g: Geometry, u0: number, u1: number, vTop: number, vBot: number, radius: number) => {
  const rc = Math.max(0, Math.min(radius, (vBot - vTop) / 2, (u1 - u0) / 2));
  return [
    `M ${fmt(g, u0 + rc, vTop)}`,
    edgeSeg(g, u1 - rc, vTop, true),
    `Q ${fmt(g, u1, vTop)} ${fmt(g, u1, vTop + rc)}`,
    `L ${fmt(g, u1, vBot - rc)}`,
    `Q ${fmt(g, u1, vBot)} ${fmt(g, u1 - rc, vBot)}`,
    edgeSeg(g, u0 + rc, vBot, false),
    `Q ${fmt(g, u0, vBot)} ${fmt(g, u0, vBot - rc)}`,
    `L ${fmt(g, u0, vTop + rc)}`,
    `Q ${fmt(g, u0, vTop)} ${fmt(g, u0 + rc, vTop)}`,
    "Z",
  ].join(" ");
};

const bentLinePath = (g: Geometry, u0: number, u1: number, v: number) =>
  `M ${fmt(g, u0, v)} ${edgeSeg(g, u1, v, true)}`;

const GEOMETRY = buildGeometry(480, 26, 68, 10);
const SURFACE = bentRectPath(GEOMETRY, 0, 480, -34, 34, 32);
const TEXT_ARC = bentLinePath(GEOMETRY, 0, 480, 7);

/** A pill-shaped link bent along an arc, with its label following the curve. */
export default function CurvedWhatsApp({ href, label }: { href: string; label: string }) {
  const arcId = "whatsapp-arc";
  return (
    <a
      className="curved-whatsapp reveal curve-ready"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label.replace(/\s*↗$/, "")}
    >
      <svg viewBox="-10 -10 500 150" aria-hidden="true">
        <path className="curved-surface" d={SURFACE} />
        <path id={arcId} d={TEXT_ARC} fill="none" />
        <text textAnchor="middle" direction="rtl" fontSize="22" fontWeight="700">
          <textPath href={`#${arcId}`} startOffset="50%">
            {label}
          </textPath>
        </text>
      </svg>
    </a>
  );
}
