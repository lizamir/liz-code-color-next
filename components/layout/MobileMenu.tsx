import Link from "next/link";
import type { RefObject } from "react";
import { SITE, type NavItem } from "@/content";
import ThemePicker from "@/components/layout/ThemePicker";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { cn } from "@/lib/ui/cn";

// The menu opens as a circle growing from the burger; the links rise in one after another.
const panel =
  "pointer-events-auto fixed inset-0 z-[-1] flex flex-col justify-between overflow-y-auto bg-deep [padding:120px_28px_30px] text-white";
const panelClosed =
  "invisible [clip-path:circle(0_at_calc(100%_-_48px)_44px)] [transition:clip-path_0.7s_var(--ease-out),visibility_0s_0.7s]";
const panelOpen =
  "visible [clip-path:circle(150vmax_at_calc(100%_-_48px)_44px)] [transition:clip-path_0.8s_var(--ease-out),visibility_0s]";
const itemClosed = "opacity-0 [transform:translateY(24px)] [transition:opacity_0.5s,transform_0.6s_var(--ease-out)]";
// The delay sits inside the shorthand: a separate transition-delay utility would be reset by it.
const itemOpen =
  "opacity-100 [transform:none] [transition:opacity_0.5s_calc(var(--i)*70ms+250ms),transform_0.6s_var(--ease-out)_calc(var(--i)*70ms+250ms)]";

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
    <div
      id="mobile-menu"
      ref={menuRef}
      className={cn(panel, open ? panelOpen : panelClosed)}
      inert={!open}
      aria-hidden={!open}
    >
      <nav aria-label="ניווט מובייל">
        <ol className="grid list-none p-0">
          {nav.map((n, i) => (
            <li key={n.href} style={{ ["--i" as string]: i }} className={open ? itemOpen : itemClosed}>
              <a
                href={href(n.href)}
                onClick={(e) => onNav(e, n.href)}
                className="flex items-baseline gap-4 border-b border-b-[rgba(255,255,255,0.14)] py-3 tracking-[-0.045em] [font:900_clamp(2.2rem,10vw,3.4rem)/1_var(--font-display)]"
              >
                <span className="text-[0.9rem] tracking-[0.1em] text-accent-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {n.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <div className="mt-7 grid gap-3">
        <ThemePicker inline />
        <a className="btn btn-wa" href={SITE.whatsapp} target="_blank" rel="noreferrer">
          <WhatsAppIcon /> בואו נדבר בוואטסאפ
        </a>
        <Link className="btn btn-ghost text-white" href={other.href}>
          {other.label}
        </Link>
      </div>
    </div>
  );
}
