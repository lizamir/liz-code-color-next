"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NAV, SITE } from "@/lib/content";
import ThemePicker from "./ThemePicker";

function goTo(hash: string) {
  const lenis = window.__lenis;
  if (lenis) {
    lenis.start();
    lenis.scrollTo(hash, { offset: -96 });
  } else {
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  }
}

/** `home`: anchors scroll the page. Otherwise (case study pages) they go back to the home page sections. */
export default function Header({ home = true }: { home?: boolean }) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("");
  const burger = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const href = (h: string) => (home ? h : `/${h}`);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > last && y > 260);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    window.__lenis?.stop();
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
      window.__lenis?.start();
    };
  }, [open]);

  const onNav = (e: React.MouseEvent<HTMLAnchorElement>, h: string) => {
    if (!open || !home) return;
    e.preventDefault();
    setOpen(false);
    setTimeout(() => goTo(h), 60);
  };

  return (
    <header className={`header${hidden && !open ? " is-hidden" : ""}${open ? " is-open" : ""}`}>
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Liz Code and Color, לדף הבית">
          <span>LIZ</span>
          <i />
          CODE&amp;COLOR
        </Link>
        <nav className="nav-desktop" aria-label="ניווט ראשי">
          {NAV.map((n) => (
            <a key={n.href} href={href(n.href)} aria-current={home && active === n.href.slice(1) ? "true" : undefined}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <ThemePicker />
          <a className="btn btn-lime btn-sm" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            יש לכם רעיון?
          </a>
        </div>
        <button ref={burger} type="button" className="burger" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "סגירת התפריט" : "פתיחת התפריט"} onClick={() => setOpen((o) => !o)}>
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <div id="mobile-menu" ref={menu} className="mobile-menu" inert={!open} aria-hidden={!open}>
        <nav aria-label="ניווט מובייל">
          <ol>
            {NAV.map((n, i) => (
              <li key={n.href} style={{ ["--i" as string]: i }}>
                <a href={href(n.href)} onClick={(e) => onNav(e, n.href)}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {n.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="mobile-menu-cta">
          <ThemePicker inline />
          <a className="btn btn-lime" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            בואו נדבר בוואטסאפ
          </a>
          <Link className="btn btn-ghost" href="/resume/">
            קורות חיים
          </Link>
        </div>
      </div>
    </header>
  );
}
