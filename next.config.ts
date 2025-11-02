import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // <-- This is key for static export
  images: {
    unoptimized: true, // Needed for static build if using next/image
  },
};

export default nextConfig;
