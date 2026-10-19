"use client";

import { useEffect, useRef, useState } from "react";
import { WHATSAPP_URL } from "@/lib/links";

const NAV = [
  { href: "#work", label: "עבודות" },
  { href: "#services", label: "שירותים" },
  { href: "#automation", label: "AI ואוטומציות" },
  { href: "#about", label: "קצת עליי" },
  { href: "#contact", label: "בואו נדבר" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="topbar">
      <a className="brand" href="#top" aria-label="Liz Code and Color — דף הבית">
        <span>LIZ</span>
        <i></i>CODE&amp;COLOR
      </a>
      <button
        ref={toggleRef}
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="main-nav"
        onClick={() => setOpen((o) => !o)}
      >
        תפריט +
      </button>
      <nav id="main-nav" aria-label="ניווט ראשי" className={open ? "is-open" : undefined}>
        {NAV.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="pill small nav-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
        יש לכם רעיון?
      </a>
    </header>
  );
}
