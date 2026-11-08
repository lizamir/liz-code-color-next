"use client";

import { cn } from "@/lib/ui/cn";
import Link from "next/link";
import { useRef, useState } from "react";
import { NAV, SITE, type NavItem } from "@/content";
import Logo, { brandLink } from "@/components/layout/Logo";
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

// The floating pill bar. Phones drop the live blur; it opens up into the dark phone menu.
const bar =
  "pointer-events-auto mx-auto flex w-[min(1320px,100%_-_40px)] items-center justify-between gap-[18px] rounded-[999px] border [padding:10px_12px_10px_24px] [transition:background_0.4s,box-shadow_0.4s] tablet:[padding:8px_10px_8px_20px]";
const barClosed =
  "border-line bg-[rgba(255,255,255,0.88)] text-ink shadow-[0_14px_40px_-24px_rgba(16,16,16,0.6)] [backdrop-filter:blur(16px)_saturate(1.3)] night:bg-[rgba(24,13,18,0.88)] mobile:[backdrop-filter:none]";
const barOpen = "border-transparent bg-transparent text-white [box-shadow:none] [backdrop-filter:none]";
const navLink =
  "relative z-1 rounded-[999px] py-2.5 [font:700_0.98rem/1_var(--font-display)] [transition:background_0.2s,color_0.2s]";
const burgerLine = "block h-[2.5px] w-[22px] rounded-[2px] [transition:transform_0.35s_var(--ease-out),opacity_0.2s]";

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
    <header
      className={cn(
        "pointer-events-none fixed [inset:14px_0_auto] z-200 [transition:transform_0.5s_var(--ease-out)]",
        hidden && !open && "[transform:translateY(-140%)]",
      )}
    >
      <div className={cn(bar, open ? barOpen : barClosed)}>
        <Link className={brandLink} href="/" aria-label="Liz Code and Color, לדף הבית">
          <Logo />
        </Link>
        <nav className="nav-desktop relative flex gap-[2px] tablet:hidden" aria-label="ניווט ראשי">
          {nav.map((n) => (
            <a
              key={n.href}
              href={href(n.href)}
              className={cn(navLink, "px-4")}
              aria-current={home && active === n.href.slice(1) ? "true" : undefined}
            >
              {n.label}
            </a>
          ))}
          <Link
            className={cn(
              navLink,
              "ms-2 rounded-none border-s-[1.5px] border-s-line ps-[18px] pe-4 text-muted hover:text-accent-ink",
            )}
            href={other.href}
          >
            {other.label}
          </Link>
        </nav>
        <div className="flex items-center gap-2.5 tablet:hidden">
          <ThemePicker />
          <a className="btn btn-wa btn-sm" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            <WhatsAppIcon size={18} /> דברו איתי בוואטסאפ
          </a>
        </div>
        <button
          ref={burger}
          type="button"
          className="burger hidden h-12 w-12 place-content-center gap-[5px] rounded-[50%] bg-ink p-0 [border:0] tablet:grid"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "סגירת התפריט" : "פתיחת התפריט"}
          onClick={() => setOpen((o) => !o)}
        >
          <span
            aria-hidden="true"
            className={cn(
              burgerLine,
              open ? "[transform:translateY(7.5px)_rotate(45deg)] bg-ink" : "bg-white night:bg-on-ink",
            )}
          />
          <span aria-hidden="true" className={cn(burgerLine, open ? "bg-ink opacity-0" : "bg-white night:bg-on-ink")} />
          <span
            aria-hidden="true"
            className={cn(
              burgerLine,
              open ? "[transform:translateY(-7.5px)_rotate(-45deg)] bg-ink" : "bg-white night:bg-on-ink",
            )}
          />
        </button>
      </div>

      <MobileMenu open={open} menuRef={menu} nav={nav} other={other} href={href} onNav={onNav} />
    </header>
  );
}
