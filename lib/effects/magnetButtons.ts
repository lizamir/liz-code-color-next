import { motionIsOff, runAll, type Cleanup } from "./shared";

/** Primary buttons lean slightly toward the pointer. */
export function magnetButtons(): Cleanup {
  const cleanups: Cleanup[] = [];
  document.querySelectorAll<HTMLElement>(".hero .btn, .pw-actions .btn, .contact .btn").forEach((b) => {
    const move = (e: PointerEvent) => {
      if (motionIsOff()) return;
      const r = b.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
      const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
      b.style.transform = `translate(${(dx * 10).toFixed(1)}px, ${(dy * 8).toFixed(1)}px)`;
    };
    const leave = () => (b.style.transform = "");
    b.addEventListener("pointermove", move);
    b.addEventListener("pointerleave", leave);
    cleanups.push(() => {
      b.removeEventListener("pointermove", move);
      b.removeEventListener("pointerleave", leave);
    });
  });
  return runAll(cleanups);
}
