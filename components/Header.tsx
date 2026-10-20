"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NAV, SITE } from "@/lib/content";

/** `home`: anchors scroll the page. Otherwise (case study pages) they go back to the home page sections. */
export default function Header({ home = true }: { home?: boolean }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const burger = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const href = (h: string) => (home ? h : `/${h}`);

  useEffect(() => {
    if (!home) return;
    const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    NAV.forEach((n) => {
      const el = document.getElementById(n.href.slice(1));
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [home]);

  useEffect(() => {
    if (!open) return;
    document.documentElement.style.overflow = "hidden";
    menu.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        burger.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Liz Code and Color, לדף הבית">
          LIZ <i>CODE</i> &amp; <i>COLOR</i>
        </Link>
        <nav className="nav-desktop" aria-label="ניווט ראשי">
          {NAV.map((n) => (
            <a key={n.href} href={href(n.href)} aria-current={home && active === n.href.slice(1) ? "true" : undefined}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="btn btn-primary btn-sm" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            בואו נדבר
          </a>
        </div>
        <button ref={burger} type="button" className="burger" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "סגירת התפריט" : "פתיחת התפריט"} onClick={() => setOpen((o) => !o)}>
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      {open && (
        <div id="mobile-menu" ref={menu} className="mobile-menu">
          <nav aria-label="ניווט מובייל">
            <ol>
              {NAV.map((n, i) => (
                <li key={n.href}>
                  <a href={href(n.href)} onClick={() => setOpen(false)}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {n.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="mobile-menu-cta">
            <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              בואו נדבר בוואטסאפ
            </a>
            <Link className="btn btn-ghost" href="/resume/">
              קורות חיים
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
