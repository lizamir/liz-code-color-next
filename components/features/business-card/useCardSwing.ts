import { useEffect, useRef } from "react";

export type SwingState = { a: number; w: number; drag: boolean; raf: number; last: number; moved: number };

/** The card's pendulum: a small spring simulation that rotates the `rig` element. Returns the ref, the state and a way to restart it. */
export function useCardSwing(motionOff: boolean) {
  const rig = useRef<HTMLDivElement>(null);
  const sim = useRef<SwingState>({ a: 13, w: 0, drag: false, raf: 0, last: 0, moved: 0 });
  const kickRef = useRef<() => void>(() => {});

  useEffect(() => {
    const el = rig.current;
    if (!el) return;
    const s = sim.current;
    if (motionOff) {
      el.style.transform = "none";
      return;
    }
    const step = (t: number) => {
      const dt = Math.min(0.032, (t - s.last) / 1000 || 0.016);
      s.last = t;
      if (!s.drag) {
        s.w += (-22 * s.a - 1.05 * s.w) * dt;
        s.a += s.w * dt;
      }
      el.style.transform = `rotate(${s.a.toFixed(3)}deg)`;
      if (!s.drag && Math.abs(s.a) < 0.03 && Math.abs(s.w) < 0.03) {
        s.a = 0;
        el.style.transform = "rotate(0deg)";
        s.raf = 0;
        return;
      }
      s.raf = requestAnimationFrame(step);
    };
    kickRef.current = () => {
      if (!s.raf) {
        s.last = performance.now();
        s.raf = requestAnimationFrame(step);
      }
    };
    kickRef.current();
    return () => cancelAnimationFrame(s.raf);
  }, [motionOff]);

  return { rig, sim, kick: () => kickRef.current() };
}
