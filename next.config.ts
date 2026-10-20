import type { NextConfig } from "next";

// The site is exported as plain static files (npm run build -> out/), so it can be hosted
// anywhere (GitHub Pages, Vercel, any static host). The Ganli demo lives in public/demos/ganli
// (built from ../ganli with `npm run build:portfolio`) and is served as folders with an index.html.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
