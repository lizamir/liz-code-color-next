import Link from "next/link";
import { NAV, SITE, type NavItem } from "@/content";
import ThemePicker from "@/components/layout/ThemePicker";
import Logo, { brandLink } from "@/components/layout/Logo";
import { cn } from "@/lib/ui/cn";

/** The footer: logo, links to both halves of the site, social links and the day/night switch. */
export default function Footer({
  home = true,
  nav = NAV,
  base = "/",
}: {
  home?: boolean;
  nav?: NavItem[];
  base?: string;
}) {
  const href = (h: string) => (home ? h : `${base}${h}`);
  return (
    <footer className="footer bg-ink pt-[70px] pb-10 text-[#efe4e8] mobile:pb-[110px] night:bg-[#0d0609] [&_a:not(.brand)]:font-bold [&_a:not(.brand):hover]:text-accent-light">
      <div className="container">
        <div className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-10 border-b border-b-[rgba(255,255,255,0.16)] pb-9 tablet:grid-cols-[1fr_1fr] mobile:grid-cols-[1fr] mobile:gap-6">
          <Link className={cn(brandLink, "text-white")} href="/" aria-label="Liz Code and Color, לדף הבית">
            <Logo onDark />
          </Link>
          <nav aria-label="קישורים בתחתית העמוד">
            <ul className="flex list-none flex-wrap gap-x-6 gap-y-2 p-0">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={href(n.href)}>{n.label}</a>
                </li>
              ))}
              <li>
                <Link href="/">לבעלי עסקים</Link>
              </li>
              <li>
                <Link href="/dev/">למגייסים ולצוותי פיתוח</Link>
              </li>
              <li>
                <Link href="/resume/">קורות חיים</Link>
              </li>
              <li>
                <Link href="/accessibility/">הצהרת נגישות</Link>
              </li>
            </ul>
          </nav>
          <div className="flex gap-[22px] tracking-[0.14em] [font:800_0.8rem_var(--font-display)] [&_a]:inline-flex [&_a]:min-h-[44px] [&_a]:items-center">
            <a href={SITE.github} target="_blank" rel="noreferrer">
              GITHUB
            </a>
            <a href={SITE.linkedin} target="_blank" rel="noreferrer">
              LINKEDIN
            </a>
            <a href={`mailto:${SITE.email}`}>EMAIL</a>
          </div>
          <ThemePicker inline className="p-0" />
        </div>
        <div className="flex flex-wrap justify-between gap-5 pt-[26px] text-[0.9rem] text-[#cdb8c1]">
          <span>© {new Date().getFullYear()} Liz Code &amp; Color · ISRAEL</span>
          <span>עוצב ונבנה על ידי ליז, בקוד.</span>
        </div>
      </div>
    </footer>
  );
}
