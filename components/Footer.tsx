import Link from "next/link";
import { NAV, SITE } from "@/lib/content";
import ThemePicker from "./ThemePicker";
import Logo from "./Logo";

export default function Footer({ home = true }: { home?: boolean }) {
  const href = (h: string) => (home ? h : `/${h}`);
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <Link className="brand" href="/" aria-label="Liz Code and Color, לדף הבית">
            <Logo onDark />
          </Link>
          <nav aria-label="קישורים בתחתית העמוד">
            <ul>
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={href(n.href)}>{n.label}</a>
                </li>
              ))}
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
          <span>© {new Date().getFullYear()} Liz Code &amp; Color · JERUSALEM · ISRAEL</span>
          <span>נבנה ב‑Next.js ו‑React. מיקרו‑אינטראקציות בהשראת React Bits.</span>
        </div>
      </div>
    </footer>
  );
}
