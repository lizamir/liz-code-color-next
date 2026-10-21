"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionOff } from "@/lib/a11y";

const LINES = ["פנייה חדשה נכנסה ✓", "נשלחה הודעה בוואטסאפ", "נקבעה פגישה ביומן", "תזכורת יצאה ללקוח", "הסיכום השבועי מוכן"];

/**
 * An original robot drawn in SVG and lit like a 3D object (gradients, rim light, soft shadow).
 * It floats, blinks, looks toward the pointer, waves when you hover it, and reports what an automation just did.
 * Decorative: the same facts are written in the section as text.
 */
export default function Robot() {
  const ref = useRef<HTMLDivElement>(null);
  const motionOff = useMotionOff();
  const [line, setLine] = useState(0);

  useEffect(() => {
    if (motionOff) return;
    const t = setInterval(() => setLine((l) => (l + 1) % LINES.length), 2600);
    return () => clearInterval(t);
  }, [motionOff]);

  useEffect(() => {
    const el = ref.current;
    if (!el || motionOff || !matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let raf = 0;
    const move = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const x = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / (innerWidth / 2)));
        const y = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height * 0.3)) / (innerHeight / 2)));
        el.style.setProperty("--lx", x.toFixed(3));
        el.style.setProperty("--ly", y.toFixed(3));
      });
    };
    addEventListener("pointermove", move, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("pointermove", move);
    };
  }, [motionOff]);

  return (
    <div className="robot" ref={ref} aria-hidden="true">
      <p className="robot-say" key={line}>
        {LINES[line]}
      </p>
      <svg className="robot-svg" viewBox="0 0 260 340">
        <defs>
          <radialGradient id="rb-shell" cx="38%" cy="30%" r="75%">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="0.55" stopColor="var(--robot-1)" />
            <stop offset="1" stopColor="var(--robot-2)" />
          </radialGradient>
          <radialGradient id="rb-body" cx="40%" cy="25%" r="80%">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="0.6" stopColor="var(--robot-1)" />
            <stop offset="1" stopColor="var(--robot-2)" />
          </radialGradient>
          <linearGradient id="rb-visor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2b2340" />
            <stop offset="1" stopColor="#0f0b1a" />
          </linearGradient>
          <radialGradient id="rb-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="var(--robot-eye)" stopOpacity="0.9" />
            <stop offset="1" stopColor="var(--robot-eye)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse className="robot-shadow" cx="130" cy="326" rx="62" ry="9" />
        <g className="robot-float">
          {/* arms */}
          <g className="robot-arm robot-arm-l">
            <rect x="34" y="176" width="30" height="78" rx="15" fill="url(#rb-body)" />
            <circle cx="49" cy="258" r="15" fill="url(#rb-shell)" />
          </g>
          <g className="robot-arm robot-arm-r">
            <rect x="196" y="176" width="30" height="78" rx="15" fill="url(#rb-body)" />
            <circle cx="211" cy="258" r="15" fill="url(#rb-shell)" />
          </g>
          {/* body */}
          <rect x="66" y="164" width="128" height="126" rx="52" fill="url(#rb-body)" />
          <rect x="66" y="164" width="128" height="126" rx="52" fill="none" stroke="#fff" strokeOpacity="0.6" strokeWidth="2" />
          <g className="robot-core">
            <circle cx="130" cy="226" r="22" fill="url(#rb-visor)" />
            <path d="M130 211c1.6 7.6 7.4 13.4 15 15-7.6 1.6-13.4 7.4-15 15-1.6-7.6-7.4-13.4-15-15 7.6-1.6 13.4-7.4 15-15z" fill="var(--robot-eye)" />
          </g>
          {/* neck */}
          <rect x="114" y="148" width="32" height="22" rx="10" fill="var(--robot-2)" />
          {/* head */}
          <g className="robot-head">
            <line x1="130" y1="36" x2="130" y2="14" stroke="var(--robot-2)" strokeWidth="5" strokeLinecap="round" />
            <circle className="robot-antenna" cx="130" cy="12" r="8" fill="var(--robot-eye)" />
            <rect x="46" y="34" width="168" height="124" rx="58" fill="url(#rb-shell)" />
            <rect x="46" y="34" width="168" height="124" rx="58" fill="none" stroke="#fff" strokeOpacity="0.7" strokeWidth="2" />
            <ellipse cx="44" cy="96" rx="10" ry="22" fill="var(--robot-2)" />
            <ellipse cx="216" cy="96" rx="10" ry="22" fill="var(--robot-2)" />
            <rect x="66" y="58" width="128" height="78" rx="38" fill="url(#rb-visor)" />
            <ellipse cx="104" cy="70" rx="30" ry="7" fill="#fff" opacity="0.12" />
            <g className="robot-eyes">
              <ellipse cx="108" cy="96" rx="16" ry="16" fill="url(#rb-glow)" />
              <ellipse cx="152" cy="96" rx="16" ry="16" fill="url(#rb-glow)" />
              <g className="robot-blink">
                <path d="M98 100 q10 -14 20 0" fill="none" stroke="var(--robot-eye)" strokeWidth="6" strokeLinecap="round" />
                <path d="M142 100 q10 -14 20 0" fill="none" stroke="var(--robot-eye)" strokeWidth="6" strokeLinecap="round" />
              </g>
              <path d="M122 116 q8 7 16 0" fill="none" stroke="var(--robot-eye)" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
