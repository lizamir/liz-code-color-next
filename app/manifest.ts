import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Liz Code & Color",
    short_name: "Liz C&C",
    description: "ליז חאג׳ג׳: מפתחת Full‑Stack, AI ואוטומציות",
    start_url: "/",
    display: "standalone",
    lang: "he",
    dir: "rtl",
    background_color: "#f4f1ea",
    theme_color: "#160d34",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
