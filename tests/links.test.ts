import { describe, expect, it } from "vitest";
import { SITE } from "@/content";
import { mailLink, whatsappLink } from "@/lib/links";

describe("links", () => {
  it("opens WhatsApp with the message written", () => {
    expect(whatsappLink("שלום עולם")).toBe(`${SITE.whatsapp}?text=${encodeURIComponent("שלום עולם")}`);
  });

  it("opens mail with subject and body written", () => {
    const link = mailLink("נושא", "תוכן");
    expect(link.startsWith(`mailto:${SITE.email}?`)).toBe(true);
    expect(link).toContain(`subject=${encodeURIComponent("נושא")}`);
    expect(link).toContain(`body=${encodeURIComponent("תוכן")}`);
  });
});
