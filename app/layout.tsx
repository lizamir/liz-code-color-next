import type { Metadata, Viewport } from "next";
import { Assistant, Gveret_Levin, Rubik } from "next/font/google";
import "./styles/index.css";
import { SITE } from "@/content";
import { BOOT, JSON_LD } from "@/lib/siteHead";
import AccessibilityToolbar from "@/components/layout/AccessibilityToolbar";
import SmoothScroll from "@/components/motion/SmoothScroll";
import Cursor from "@/components/motion/Cursor";

// Rubik carries the brand (headlines, labels), Assistant is the reading face, Gveret Levin is the
// handwritten margin note. next/font self-hosts them, so there is no render-blocking Google CSS.
const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "700", "800", "900"],
  display: "swap",
});
const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["hebrew", "latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});
const hand = Gveret_Levin({ variable: "--font-hand", subsets: ["hebrew", "latin"], weight: "400", display: "swap" });

const TITLE = "Liz Code & Color | אתרים, דפי נחיתה ואוטומציות לעסקים";
const DESCRIPTION =
  "ליז חג׳ג׳ בונה אתרים ודפי נחיתה שנראים כמו העסק שלכם, ומחברת אותם לוואטסאפ, ליומן ולעוזר דיגיטלי שעונה ללקוחות. ליווי אישי, מובייל ונגישות מההתחלה.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: TITLE, template: "%s | Liz Code & Color" },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  authors: [{ name: SITE.person, url: SITE.url }],
  keywords: [
    "בניית אתרים לעסקים",
    "דף נחיתה",
    "אתר תדמית",
    "אוטומציות לעסקים",
    "בוט וואטסאפ",
    "קביעת תורים",
    "מפתחת Full Stack",
  ],
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: SITE.url,
    siteName: SITE.name,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og-card.png",
        width: 1200,
        height: 630,
        alt: "כרטיס הביקור של ליז חג׳ג׳: מפתחת Full-Stack, יישום AI ואוטומציות",
      },
    ],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/og-card.png"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf7f5" },
    { media: "(prefers-color-scheme: dark)", color: "#2c1520" },
  ],
};

/** The page shell of every route: fonts, boot script, skip link and the site-wide tools. */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${rubik.variable} ${assistant.variable} ${hand.variable}`}
      suppressHydrationWarning
    >
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
