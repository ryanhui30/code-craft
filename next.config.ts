import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['@clerk/nextjs'], // Add this line
};

export default nextConfig;
