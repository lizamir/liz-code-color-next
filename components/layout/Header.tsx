"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { NAV, SITE, type NavItem } from "@/content";
import Logo from "@/components/layout/Logo";
import MobileMenu from "@/components/layout/MobileMenu";
import ThemePicker from "@/components/layout/ThemePicker";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { useActiveSection } from "@/lib/hooks/useActiveSection";
import { useHideOnScroll } from "@/lib/hooks/useHideOnScroll";
import { useMenuLock } from "@/lib/hooks/useMenuLock";
import { scrollToHash } from "@/lib/scroll";

type Props = {
  /** true: anchors scroll this page. false (case study pages): they go back to `base`. */
  home?: boolean;
  nav?: NavItem[];
  base?: string;
  /** the quiet link to the other half of the site (business / recruiters) */
  other?: NavItem;
};

const TO_DEV: NavItem = { href: "/dev/", label: "למגייסים" };

/** The floating top bar: logo, menu, day/night switch, WhatsApp, and the burger on phones. */
export default function Header({ home = true, nav = NAV, base = "/", other = TO_DEV }: Props) {
  const [open, setOpen] = useState(false);
  const burger = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const hidden = useHideOnScroll();
  const active = useActiveSection(nav, home);
  useMenuLock(open, setOpen, menu, burger);
  const href = (h: string) => (home ? h : `${base}${h}`);

  // In the open phone menu, close first and only then scroll, so the page is unlocked.
  const onNav = (e: React.MouseEvent<HTMLAnchorElement>, h: string) => {
    if (!open || !home) return;
    e.preventDefault();
    setOpen(false);
    setTimeout(() => scrollToHash(h), 60);
  };

  return (
    <header className={`header${hidden && !open ? " is-hidden" : ""}${open ? " is-open" : ""}`}>
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Liz Code and Color, לדף הבית">
          <Logo />
        </Link>
        <nav className="nav-desktop" aria-label="ניווט ראשי">
          {nav.map((n) => (
            <a key={n.href} href={href(n.href)} aria-current={home && active === n.href.slice(1) ? "true" : undefined}>
              {n.label}
            </a>
          ))}
          <Link className="nav-other" href={other.href}>
            {other.label}
          </Link>
        </nav>
        <div className="header-actions">
          <ThemePicker />
          <a className="btn btn-wa btn-sm" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            <WhatsAppIcon size={18} /> דברו איתי בוואטסאפ
          </a>
        </div>
        <button ref={burger} type="button" className="burger" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "סגירת התפריט" : "פתיחת התפריט"} onClick={() => setOpen((o) => !o)}>
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <MobileMenu open={open} menuRef={menu} nav={nav} other={other} href={href} onNav={onNav} />
    </header>
  );
}
