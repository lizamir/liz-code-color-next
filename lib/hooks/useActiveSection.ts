import { useEffect, useState } from "react";
import type { NavItem } from "@/content";

/** The id of the menu section now in the middle of the screen. Only watches when `enabled`. */
export function useActiveSection(nav: NavItem[], enabled: boolean): string {
  const [active, setActive] = useState("");
  useEffect(() => {
    if (!enabled) return;
    const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    nav.forEach((n) => {
      const el = document.getElementById(n.href.slice(1));
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [enabled, nav]);
  return active;
}
