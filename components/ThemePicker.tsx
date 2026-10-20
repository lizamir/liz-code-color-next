"use client";

import { useEffect, useRef, useState } from "react";
import { setTheme, THEMES, useTheme } from "@/lib/theme";

/** "Code & Color" in one click: the whole site re-colors. Popover on desktop, always open when `inline`. */
export default function ThemePicker({ inline = false }: { inline?: boolean }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => !root.current?.contains(e.target as Node) && setOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const swatches = (
    <div className="swatches" role="radiogroup" aria-label="ערכת צבעים לאתר">
      {THEMES.map((t) => (
        <button
          key={t.id}
          type="button"
          role="radio"
          aria-checked={theme === t.id}
          aria-label={t.label}
          title={t.label}
          className="swatch"
          style={{ ["--sw" as string]: t.swatch }}
          onClick={() => setTheme(t.id)}
        />
      ))}
    </div>
  );

  if (inline) {
    return (
      <div className="theme-inline">
        <span className="hand">בחרו צבע לאתר</span>
        {swatches}
      </div>
    );
  }

  return (
    <div className="theme-picker" ref={root}>
      <button type="button" className="theme-btn" aria-expanded={open} aria-haspopup="true" aria-label="החלפת צבע האתר" onClick={() => setOpen((o) => !o)}>
        <span className="theme-dot" aria-hidden="true" />
      </button>
      {open && (
        <div className="theme-pop">
          <p className="hand">האתר שלי, בצבע שלכם</p>
          {swatches}
        </div>
      )}
    </div>
  );
}
