import type { MetadataRoute } from "next";

export const dynamic = "force-static";

/** App name and colors, for adding the site to a home screen. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Liz Code & Color",
    short_name: "Liz C&C",
    description: "ליז חג׳ג׳: מפתחת Full‑Stack, AI ואוטומציות",
    start_url: "/",
    display: "standalone",
    lang: "he",
    dir: "rtl",
    background_color: "#fbf7f5",
    theme_color: "#2c1520",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
