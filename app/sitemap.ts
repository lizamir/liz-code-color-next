import type { MetadataRoute } from "next";
import { PROJECTS, SITE } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE.url}/`, lastModified: now, priority: 1 },
    ...PROJECTS.map((p) => ({ url: `${SITE.url}/work/${p.slug}/`, lastModified: now, priority: 0.8 })),
    { url: `${SITE.url}/cv/`, lastModified: now, priority: 0.6 },
    { url: `${SITE.url}/demos/ganli/`, lastModified: now, priority: 0.7 },
    { url: `${SITE.url}/accessibility/`, lastModified: now, priority: 0.2 },
  ];
}
