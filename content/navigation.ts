// Menus of the two halves of the site.

export type NavItem = { href: string; label: string };

/** The business site (home page). */
export const NAV: NavItem[] = [
  { href: "#work", label: "עבודות" },
  { href: "#services", label: "שירותים" },
  { href: "#process", label: "תהליך" },
  { href: "#faq", label: "שאלות" },
  { href: "#contact", label: "בואו נדבר" },
];

/** The technical page for recruiters and dev teams (/dev/). */
export const DEV_NAV: NavItem[] = [
  { href: "#dev-projects", label: "פרויקטים" },
  { href: "#stack", label: "סטאק" },
  { href: "#dev-ai", label: "AI ואוטומציה" },
  { href: "#experience", label: "ניסיון" },
  { href: "#dev-contact", label: "קשר" },
];
