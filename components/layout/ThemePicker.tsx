"use client";

import { setMode, useMode } from "@/lib/stores/theme";

/** Day / night switch. A round icon button in the header, a labeled row when `inline`. */
export default function ThemePicker({ inline = false }: { inline?: boolean }) {
  const mode = useMode();
  const night = mode === "night";
  const toggle = () => setMode(night ? "day" : "night");

  const icon = (
    <svg className="mode-ic" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
      {night ? (
        <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" fill="currentColor" />
      ) : (
        <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4.2" fill="var(--idea)" />
          <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
        </g>
      )}
    </svg>
  );

  if (inline) {
    return (
      <button type="button" className="mode-inline" aria-pressed={night} onClick={toggle}>
        <span className="hand">{night ? "מצב לילה" : "מצב יום"}</span>
        <span className="mode-pill" aria-hidden="true">
          {icon}
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      className="theme-btn"
      aria-pressed={night}
      aria-label="מצב לילה"
      title={night ? "מעבר למצב יום" : "מעבר למצב לילה"}
      onClick={toggle}
    >
      {icon}
    </button>
  );
}
