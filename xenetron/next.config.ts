import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove swcMinify option as it's not recognized in Next.js 15
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;