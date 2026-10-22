import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The home page lives in app/home but is served at "/" as well.
  async rewrites() {
    return [
      { source: "/", destination: "/home" },
      { source: "/activities/capital-and-investments", destination: "/our-activities/capital-and-investments" },
      { source: "/capital-and-investments", destination: "/our-activities/capital-and-investments" },
      { source: "/activities/family-administration", destination: "/our-activities/family-administration" },
      { source: "/activities/family-administration-reporting", destination: "/our-activities/family-administration" },
      { source: "/family-administration", destination: "/our-activities/family-administration" },
      { source: "/family-administration-reporting", destination: "/our-activities/family-administration" },
      { source: "/our-activities/family-administration-reporting", destination: "/our-activities/family-administration" },
    ];
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
