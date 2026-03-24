import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Only export as static HTML when we explicitly ask for it (for Hostinger)
  ...(process.env.BUILD_TARGET === 'static' ? { output: 'export' } : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
