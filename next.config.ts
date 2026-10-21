import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The home page lives in app/home but is served at "/" as well.
  async rewrites() {
    return [{ source: "/", destination: "/home" }];
  },
  async redirects() {
    return [
      {
        source: "/our-institutional-role",
        destination: "/the-office/institutional-role",
        permanent: false,
      },
      {
        source: "/independence-and-discretion",
        destination: "/the-office/independence-and-discretion",
        permanent: false,
      },
    ];
  },
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
};

export default nextConfig;
