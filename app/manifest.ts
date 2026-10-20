import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Liz Code & Color",
    short_name: "Liz C&C",
    description: "ליז חג׳ג׳: מפתחת Full‑Stack, AI ואוטומציות",
    start_url: "/",
    display: "standalone",
    lang: "he",
    dir: "rtl",
    background_color: "#faf9fc",
    theme_color: "#251c3a",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
