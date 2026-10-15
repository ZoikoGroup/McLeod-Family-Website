import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The home page lives in app/home but is served at "/" as well.
  async rewrites() {
    return [{ source: "/", destination: "/home" }];
  },
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
};

export default nextConfig;
