import Link from "next/link";
import type { RefObject } from "react";
import { SITE, type NavItem } from "@/content";
import ThemePicker from "@/components/layout/ThemePicker";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

type Props = {
  open: boolean;
  menuRef: RefObject<HTMLDivElement | null>;
  nav: NavItem[];
  other: NavItem;
  href: (h: string) => string;
  onNav: (e: React.MouseEvent<HTMLAnchorElement>, h: string) => void;
};

/** The full-screen menu on phones: the sections, the day/night switch and the main actions. */
export default function MobileMenu({ open, menuRef, nav, other, href, onNav }: Props) {
  return (
    <div id="mobile-menu" ref={menuRef} className="mobile-menu" inert={!open} aria-hidden={!open}>
      <nav aria-label="ניווט מובייל">
        <ol>
          {nav.map((n, i) => (
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
        <a className="btn btn-wa" href={SITE.whatsapp} target="_blank" rel="noreferrer">
          <WhatsAppIcon /> בואו נדבר בוואטסאפ
        </a>
        <Link className="btn btn-ghost" href={other.href}>
          {other.label}
        </Link>
      </div>
    </div>
  );
}
