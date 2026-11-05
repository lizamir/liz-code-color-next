import Link from "next/link";
import { NAV, SITE, type NavItem } from "@/content";
import ThemePicker from "@/components/layout/ThemePicker";
import Logo from "@/components/layout/Logo";

/** The footer: logo, links to both halves of the site, social links and the day/night switch. */
export default function Footer({ home = true, nav = NAV, base = "/" }: { home?: boolean; nav?: NavItem[]; base?: string }) {
  const href = (h: string) => (home ? h : `${base}${h}`);
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <Link className="brand" href="/" aria-label="Liz Code and Color, לדף הבית">
            <Logo onDark />
          </Link>
          <nav aria-label="קישורים בתחתית העמוד">
            <ul>
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
          <div className="footer-social">
            <a href={SITE.github} target="_blank" rel="noreferrer">
              GITHUB
            </a>
            <a href={SITE.linkedin} target="_blank" rel="noreferrer">
              LINKEDIN
            </a>
            <a href={`mailto:${SITE.email}`}>EMAIL</a>
          </div>
          <ThemePicker inline />
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Liz Code &amp; Color · ISRAEL</span>
          <span>עוצב ונבנה על ידי ליז, בקוד.</span>
        </div>
      </div>
    </footer>
  );
}
