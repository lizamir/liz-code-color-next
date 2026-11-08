import { SITE, type NavItem } from "@/content";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { cn } from "@/lib/ui/cn";

const link =
  "mobile:rounded-[999px] mobile:px-[15px] mobile:py-[13px] mobile:[font:700_0.95rem/1_var(--font-display)] mobile:whitespace-nowrap mobile:text-white mobile:active:bg-[rgba(255,255,255,0.12)]";

const BIZ: NavItem[] = [
  { href: "#work", label: "עבודות" },
  { href: "#services", label: "שירותים" },
  { href: "#faq", label: "שאלות" },
];

/** Phones only: a floating pill at thumb height with the main sections and a WhatsApp button. */
export default function BottomNav({ items = BIZ }: { items?: NavItem[] }) {
  return (
    <nav
      className="hidden mobile:fixed mobile:bottom-[calc(12px_+_env(safe-area-inset-bottom,0px))] mobile:left-1/2 mobile:z-180 mobile:flex mobile:[translate:-50%_0] mobile:items-center mobile:gap-[2px] mobile:rounded-[999px] mobile:border mobile:border-[rgba(255,255,255,0.12)] mobile:bg-[rgba(36,22,29,0.94)] mobile:p-[6px] mobile:shadow-[0_18px_40px_-16px_rgba(0,0,0,0.6)]"
      aria-label="ניווט מהיר"
    >
      {items.map((n) => (
        <a key={n.href} href={n.href} className={link}>
          {n.label}
        </a>
      ))}
      <a
        className={cn(
          link,
          "mobile:ms-1 mobile:grid mobile:h-[46px] mobile:w-[46px] mobile:place-items-center mobile:bg-[#0e7a3f] mobile:p-0",
        )}
        href={SITE.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="וואטסאפ"
      >
        <WhatsAppIcon size={20} />
      </a>
    </nav>
  );
}
