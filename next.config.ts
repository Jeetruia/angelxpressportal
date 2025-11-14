import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },

  // ❌ REMOVE static-export-only options
  // trailingSlash: true,
  // basePath: basePath,
  // assetPrefix: basePath,

  // ✔ Vercel-friendly defaults
  reactStrictMode: true,
};

export default nextConfig;
