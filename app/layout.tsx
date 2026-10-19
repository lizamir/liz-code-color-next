import type { Metadata } from "next";
import "./styles/styles.css";
import "./styles/enhancements.css";
import "./styles/studio.css";
import "./styles/premium.css";
import "./styles/vivid.css";

export const metadata: Metadata = {
  title: "Liz Code & Color | עיצוב ופיתוח אתרים",
  description:
    "Liz Code & Color — עיצוב ופיתוח אתרים, יישום AI ואוטומציות לעסקים ולצוותים.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- the CSS references these families by name */}
        <link
          href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;500;600;700;800&family=Rubik:wght@500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
