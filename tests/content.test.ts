import { describe, expect, it } from "vitest";
import { MARQUEE, NAV, PROJECTS, SERVICES, SITE } from "@/content";

// Rules the site's copy has to keep. These are product decisions, so a failure here means the text needs a second look.
describe("content rules", () => {
  it("gives every project a unique address", () => {
    const slugs = PROJECTS.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("keeps technology names out of the business site's copy", () => {
    const text = JSON.stringify([NAV, MARQUEE, SERVICES]);
    for (const word of ["React", "Next.js", "Supabase", "TypeScript", "Workato", "MuleSoft"]) {
      expect(text).not.toContain(word);
    }
  });

  it("does not name a city in public", () => {
    expect(JSON.stringify(SITE)).not.toContain("ירושלים");
  });
});
