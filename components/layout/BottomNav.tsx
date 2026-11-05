import { SITE, type NavItem } from "@/content";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const BIZ: NavItem[] = [
  { href: "#work", label: "עבודות" },
  { href: "#services", label: "שירותים" },
  { href: "#faq", label: "שאלות" },
];

/** Phones only: a floating pill at thumb height with the main sections and a WhatsApp button. */
export default function BottomNav({ items = BIZ }: { items?: NavItem[] }) {
  return (
    <nav className="bottom-nav" aria-label="ניווט מהיר">
      {items.map((n) => (
        <a key={n.href} href={n.href}>
          {n.label}
        </a>
      ))}
      <a className="bn-wa" href={SITE.whatsapp} target="_blank" rel="noreferrer" aria-label="וואטסאפ">
        <WhatsAppIcon size={20} />
      </a>
    </nav>
  );
}
