"use client";

import { useSyncExternalStore } from "react";

/** The visitor's color theme ("Code & Color": the whole site re-colors). Saved in localStorage and
 *  mirrored to <html data-theme>. The first paint is handled by the inline boot script in layout.tsx. */
export type ThemeId = "violet" | "pink" | "teal" | "sun";

export const THEMES: { id: ThemeId; label: string; swatch: string; wave: [number[], number[], number[]] }[] = [
  { id: "violet", label: "סגול", swatch: "#803dff", wave: [[0.19, 0.02, 0.62], [1, 0.04, 0.55], [0.08, 0.97, 0.9]] },
  { id: "pink", label: "ורוד", swatch: "#ff398f", wave: [[0.42, 0.02, 0.3], [1, 0.22, 0.45], [1, 0.78, 0.25]] },
  { id: "teal", label: "טורקיז", swatch: "#00d1b8", wave: [[0.0, 0.12, 0.34], [0.0, 0.82, 0.72], [0.75, 1, 0.33]] },
  { id: "sun", label: "שמש", swatch: "#ff7a2f", wave: [[0.32, 0.04, 0.24], [1, 0.45, 0.15], [1, 0.85, 0.3]] },
];

const KEY = "liz-theme";
const listeners = new Set<() => void>();
let current: ThemeId | null = null;

function read(): ThemeId {
  if (current) return current;
  let saved: string | null = null;
  try {
    saved = localStorage.getItem(KEY);
  } catch {
    // Blocked storage: default.
  }
  current = THEMES.some((t) => t.id === saved) ? (saved as ThemeId) : "violet";
  return current;
}

export function setTheme(id: ThemeId) {
  current = id;
  document.documentElement.dataset.theme = id;
  try {
    localStorage.setItem(KEY, id);
  } catch {
    // Still applies for this visit.
  }
  listeners.forEach((l) => l());
}

const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => listeners.delete(l);
};

export function useTheme(): ThemeId {
  return useSyncExternalStore(subscribe, read, () => "violet");
}
