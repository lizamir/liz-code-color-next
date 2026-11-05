"use client";

import { useSyncExternalStore } from "react";

/** Day or night: the same brand palette in two lights. Saved in localStorage and mirrored to
 *  <html data-mode>. The first paint is handled by the inline boot script in layout.tsx. */
export type Mode = "day" | "night";

const KEY = "liz-mode";
const listeners = new Set<() => void>();
let current: Mode | null = null;

/** Reads the current mode from <html> once (the boot script already set it). */
function read(): Mode {
  if (current) return current;
  current = document.documentElement.dataset.mode === "night" ? "night" : "day";
  return current;
}

/** Switches day or night, applies it and saves it. */
export function setMode(mode: Mode) {
  current = mode;
  if (mode === "night") document.documentElement.dataset.mode = "night";
  else delete document.documentElement.dataset.mode;
  try {
    localStorage.setItem(KEY, mode);
  } catch {
    // Still applies for this visit.
  }
  listeners.forEach((l) => l());
}

/** Lets React components listen for changes. */
const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => listeners.delete(l);
};

/** The current mode, as a React hook. */
export function useMode(): Mode {
  return useSyncExternalStore(subscribe, read, () => "day");
}
