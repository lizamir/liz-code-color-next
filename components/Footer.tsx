import Link from "next/link";
import { NAV, SITE } from "@/lib/content";

export default function Footer({ home = true }: { home?: boolean }) {
  const href = (h: string) => (home ? h : `/${h}`);
  return (
    <footer className="footer">
      <div className="container footer-in">
        <span>© {new Date().getFullYear()} Liz Code &amp; Color · ירושלים</span>
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
            <li>
              <a href={SITE.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
