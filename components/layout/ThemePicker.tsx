"use client";

import { setMode, useMode } from "@/lib/stores/theme";
import { cn } from "@/lib/ui/cn";

/** Day / night switch. A round icon button in the header, a labeled row when `inline`. */
export default function ThemePicker({ inline = false, className }: { inline?: boolean; className?: string }) {
  const mode = useMode();
  const night = mode === "night";
  const toggle = () => setMode(night ? "day" : "night");

  const icon = (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
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
      <button
        type="button"
        className={cn(
          "flex w-full items-center justify-between gap-[14px] px-1 py-3 text-start text-inherit [background:none] [border:0]",
          className,
        )}
        aria-pressed={night}
        onClick={toggle}
      >
        <span className="hand text-[1.2rem]">{night ? "מצב לילה" : "מצב יום"}</span>
        <span className="grid h-11 w-11 place-items-center rounded-[50%] border-2 border-current" aria-hidden="true">
          {icon}
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      className={cn(
        "theme-btn grid h-[46px] w-[46px] place-items-center rounded-[50%] border-2 border-ink text-ink [background:transparent] [transition:transform_0.3s_var(--ease-spring)] hover:[transform:rotate(-12deg)_scale(1.06)]",
        className,
      )}
      aria-pressed={night}
      aria-label="מצב לילה"
      title={night ? "מעבר למצב יום" : "מעבר למצב לילה"}
      onClick={toggle}
    >
      {icon}
    </button>
  );
}
