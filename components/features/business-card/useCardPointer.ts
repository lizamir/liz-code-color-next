import type { RefObject } from "react";
import type { SwingState } from "./useCardSwing";

type Args = {
  rig: RefObject<HTMLDivElement | null>;
  card: RefObject<HTMLDivElement | null>;
  sim: RefObject<SwingState>;
  kick: () => void;
  motionOff: boolean;
  onTap: () => void;
};

/** Pointer handlers of the card: tilt toward the pointer, drag to swing, and a tap (no movement) flips it. */
export function useCardPointer({ rig, card, sim, kick, motionOff, onTap }: Args) {
  const onDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest("a,button")) return;
    const s = sim.current;
    s.drag = true;
    s.moved = 0;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    kick();
  };
  const onMove = (e: React.PointerEvent) => {
    const s = sim.current;
    const r = card.current?.getBoundingClientRect();
    if (r && !motionOff && e.pointerType === "mouse") {
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.current!.style.setProperty("--tx", `${(-y * 10).toFixed(2)}deg`);
      card.current!.style.setProperty("--ty", `${(x * 12).toFixed(2)}deg`);
      card.current!.style.setProperty("--gx", `${((x + 0.5) * 100).toFixed(1)}%`);
      card.current!.style.setProperty("--gy", `${((y + 0.5) * 100).toFixed(1)}%`);
    }
    if (!s.drag || !rig.current) return;
    const pr = rig.current.getBoundingClientRect();
    const px = pr.left + pr.width / 2; // pivot: top centre of the rig (cord end)
    const py = pr.top;
    const ang = (Math.atan2(e.clientX - px, Math.max(40, e.clientY - py)) * 180) / Math.PI;
    const next = Math.max(-38, Math.min(38, -ang));
    s.w = (next - s.a) * 40;
    s.a = next;
    s.moved += Math.abs(e.movementX) + Math.abs(e.movementY);
  };
  const onUp = () => {
    const s = sim.current;
    s.drag = false;
    kick();
    if (s.moved < 6) onTap();
  };
  const onLeave = () => {
    const c = card.current;
    if (!c) return;
    c.style.setProperty("--tx", "0deg");
    c.style.setProperty("--ty", "0deg");
  };

  return {
    onPointerDown: onDown,
    onPointerMove: onMove,
    onPointerUp: onUp,
    onPointerCancel: onUp,
    onPointerLeave: onLeave,
  };
}
