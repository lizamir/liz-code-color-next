export type Cleanup = () => void;

/** True when decorative motion should stay still (OS setting or the accessibility menu). */
export const motionIsOff = () =>
  matchMedia("(prefers-reduced-motion: reduce)").matches ||
  document.documentElement.classList.contains("a11y-nomotion");

/** Keeps a value between two limits. */
export const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));

/** Runs every cleanup of a list of per-element listeners. */
export const runAll =
  (list: Cleanup[]): Cleanup =>
  () =>
    list.forEach((c) => c());
