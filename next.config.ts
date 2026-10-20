import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // The Ganli site is a static export copied into public/demos/ganli
  // (run `npm run build:portfolio` in ../ganli). Serve its index for the folder URL.
  async rewrites() {
    // Files (JS, CSS, RSC payloads) are served first; only folder URLs reach these.
    return [
      { source: "/demos/ganli", destination: "/demos/ganli/index.html" },
      { source: "/demos/ganli/:path*", destination: "/demos/ganli/:path*/index.html" },
    ];
  },
};

export default nextConfig;
