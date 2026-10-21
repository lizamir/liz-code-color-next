"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionOff } from "@/lib/a11y";
import type { RobotHandle } from "./robot3d";

const LINES = ["פנייה חדשה נכנסה ✓", "נשלחה הודעה בוואטסאפ", "נקבעה פגישה ביומן", "תזכורת יצאה ללקוח", "הסיכום השבועי מוכן"];

/**
 * The 3D robot of the AI section (Three.js, loaded only when the section is close to the screen).
 * Decorative: the same facts are written in the section as text.
 */
export default function Robot() {
  const host = useRef<HTMLDivElement>(null);
  const handle = useRef<RobotHandle | null>(null);
  const motionOff = useMotionOff();
  const [line, setLine] = useState(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (motionOff) return;
    const t = setInterval(() => setLine((l) => (l + 1) % LINES.length), 2600);
    return () => clearInterval(t);
  }, [motionOff]);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    let cancelled = false;
    let mo: MutationObserver | null = null;
    const start = async () => {
      try {
        const { mountRobot } = await import("./robot3d");
        if (cancelled) return;
        handle.current = mountRobot(el, { still: motionOff });
        mo = new MutationObserver(() => handle.current?.recolor());
        mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme", "class"] });
      } catch {
        setFailed(true);
      }
    };
    const near = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        near.disconnect();
        start();
      },
      { rootMargin: "300px" }
    );
    near.observe(el);
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / (innerWidth / 2)));
      const y = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height * 0.35)) / (innerHeight / 2)));
      handle.current?.look(x, y);
    };
    if (!motionOff) addEventListener("pointermove", move, { passive: true });
    return () => {
      cancelled = true;
      near.disconnect();
      mo?.disconnect();
      removeEventListener("pointermove", move);
      handle.current?.dispose();
      handle.current = null;
    };
  }, [motionOff]);

  return (
    <div className="robot" aria-hidden="true" onPointerEnter={() => handle.current?.wave()}>
      <p className="robot-say" key={line}>
        {LINES[line]}
      </p>
      <div className="robot-stage" ref={host}>
        {failed && <span className="robot-fallback">🤖</span>}
      </div>
    </div>
  );
}
