import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Set turbopack root to this client directory to avoid warnings
  turbopack: { root: "./" },
} as unknown as NextConfig;

export default nextConfig;
