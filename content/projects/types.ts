// The shape of a project and its categories.

export type Category = "web" | "ai" | "brand";

export type Project = {
  slug: string;
  mock: string; // base name of /public/mock/<mock>-d.webp and -m.webp (desktop and phone screenshots)
  no: string;
  title: string;
  kicker: string;
  summary: string; // one sentence for the card
  categories: Category[];
  year: string;
  role: string[];
  stack: string[];
  cover: string; // screenshot in /public/work
  coverAlt: string;
  tone: "violet" | "pink" | "lime" | "teal" | "sun";
  featured?: boolean;
  links: { href: string; label: string; external?: boolean }[];
  challenge: string;
  approach: string[];
  highlights: { title: string; text: string }[];
  gallery?: { src: string; alt: string; w: number; h: number }[];
  /** A recorded demo shown at the top of the project page instead of the device mockup. */
  demo?: { src: string; still: string; alt: string; w: number; h: number; href: string; caption: string };
  /** When set, the project opens the CV as a highlighted lead project. */
  cv?: { headline: string; bullets: string[] };
};
