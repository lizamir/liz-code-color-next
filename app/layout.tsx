import type { Metadata, Viewport } from "next";
import { Assistant, Gveret_Levin, Rubik } from "next/font/google";
import "./globals.css";
import "./site.css";
import { SITE } from "@/lib/content";
import AccessibilityToolbar from "@/components/AccessibilityToolbar";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";

// Rubik carries the brand (headlines, labels), Assistant is the reading face, Gveret Levin is the
// handwritten margin note. next/font self-hosts them, so there is no render-blocking Google CSS.
const rubik = Rubik({ variable: "--font-rubik", subsets: ["hebrew", "latin"], weight: ["400", "500", "700", "800", "900"], display: "swap" });
const assistant = Assistant({ variable: "--font-assistant", subsets: ["hebrew", "latin"], weight: ["400", "600", "700", "800"], display: "swap" });
const hand = Gveret_Levin({ variable: "--font-hand", subsets: ["hebrew", "latin"], weight: "400", display: "swap" });

const TITLE = "Liz Code & Color | ליז חג׳ג׳, מפתחת Full‑Stack, AI ואוטומציות";
const DESCRIPTION =
  "מפתחת Full‑Stack ומיישמת AI עם לב של מעצבת: אתרים, מערכות, סוכני AI ואוטומציות לעסקים ולצוותים. React, Next.js, Supabase, n8n. ירושלים.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: TITLE, template: "%s | Liz Code & Color" },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  authors: [{ name: SITE.person, url: SITE.url }],
  keywords: ["מפתחת Full Stack", "פיתוח אתרים", "React", "Next.js", "אוטומציות", "n8n", "סוכני AI", "ירושלים", "פרילנס"],
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: SITE.url,
    siteName: SITE.name,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Liz Code & Color: אני הופכת רעיונות לאתרים שאי אפשר לפספס" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/og.png"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9fc" },
    { media: "(prefers-color-scheme: dark)", color: "#251c3a" },
  ],
};

// Runs before first paint: marks JS as on (so reveal animations may start hidden) and restores the
// visitor's color theme and accessibility choices, so nothing flashes.
const BOOT = `(function(){var d=document.documentElement;try{d.classList.add('js');var t=localStorage.getItem('liz-theme');if(t)d.dataset.theme=t;var s=JSON.parse(localStorage.getItem('liz-a11y')||'{}');if(s.size)d.dataset.size=s.size;if(s.contrast)d.classList.add('a11y-contrast');if(s.motion)d.classList.add('a11y-nomotion');if(s.links)d.classList.add('a11y-links');if(s.spacing)d.classList.add('a11y-spacing')}catch(e){d.classList.add('js')}})();`;

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE.url}/#liz`,
      name: SITE.personEn,
      alternateName: SITE.person,
      jobTitle: "Full-Stack Developer, AI & Automation",
      url: SITE.url,
      email: `mailto:${SITE.email}`,
      telephone: `+972${SITE.phone.slice(1)}`,
      address: { "@type": "PostalAddress", addressLocality: "Jerusalem", addressCountry: "IL" },
      sameAs: [SITE.linkedin, SITE.github],
      knowsAbout: ["React", "Next.js", "TypeScript", "Supabase", "n8n", "AI agents", "Workato", "MuleSoft", "Web accessibility"],
      alumniOf: { "@type": "EducationalOrganization", name: "B.Sc. Electrical and Electronics Engineering" },
    },
    { "@type": "WebSite", "@id": `${SITE.url}/#site`, url: SITE.url, name: SITE.name, inLanguage: "he", publisher: { "@id": `${SITE.url}/#liz` } },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={`${rubik.variable} ${assistant.variable} ${hand.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: BOOT }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      </head>
      <body>
        <nav aria-label="דילוג לתוכן">
          <a className="skip-link" href="#main">
            דילוג לתוכן הראשי
          </a>
        </nav>
        <SmoothScroll />
        <Cursor />
        {children}
        <AccessibilityToolbar />
      </body>
    </html>
  );
}
