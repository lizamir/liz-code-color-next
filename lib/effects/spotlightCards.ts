import { runAll, type Cleanup } from "./shared";

/** Service cards: a soft spotlight follows the pointer (position only; the look is in the CSS). */
export function spotlightCards(): Cleanup {
  const cleanups: Cleanup[] = [];
  document.querySelectorAll<HTMLElement>(".svc").forEach((c) => {
    const move = (e: PointerEvent) => {
      const r = c.getBoundingClientRect();
      c.style.setProperty("--sx", `${e.clientX - r.left}px`);
      c.style.setProperty("--sy", `${e.clientY - r.top}px`);
    };
    c.addEventListener("pointermove", move);
    cleanups.push(() => c.removeEventListener("pointermove", move));
  });
  return runAll(cleanups);
}
