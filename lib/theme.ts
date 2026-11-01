"use client";

import { useSyncExternalStore } from "react";

/** Day or night: the same brand palette in two lights. Saved in localStorage and mirrored to
 *  <html data-mode>. The first paint is handled by the inline boot script in layout.tsx. */
export type Mode = "day" | "night";

const KEY = "liz-mode";
const listeners = new Set<() => void>();
let current: Mode | null = null;

function read(): Mode {
  if (current) return current;
  current = document.documentElement.dataset.mode === "night" ? "night" : "day";
  return current;
}

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

const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => listeners.delete(l);
};

export function useMode(): Mode {
  return useSyncExternalStore(subscribe, read, () => "day");
}
