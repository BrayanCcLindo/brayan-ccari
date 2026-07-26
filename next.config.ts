import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
