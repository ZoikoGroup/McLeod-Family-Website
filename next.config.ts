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
      { source: "/activities/philanthropy-and-legacy", destination: "/our-activities/philanthropy-and-legacy" },
      { source: "/philanthropy-and-legacy", destination: "/our-activities/philanthropy-and-legacy" },
      { source: "/activities/strategic-ownership", destination: "/our-activities/strategic-ownership" },
      { source: "/strategic-ownership", destination: "/our-activities/strategic-ownership" },
      { source: "/activities/treasury-and-liquidity", destination: "/our-activities/treasury-and-liquidity" },
      { source: "/treasury-and-liquidity", destination: "/our-activities/treasury-and-liquidity" },
      { source: "/activities/trust-estate-tax-coordination", destination: "/our-activities/trust-estate-tax-coordination" },
      { source: "/trust-estate-tax-coordination", destination: "/our-activities/trust-estate-tax-coordination" },
      { source: "/activities/trust-estate-and-tax", destination: "/our-activities/trust-estate-tax-coordination" },
      { source: "/trust-estate-and-tax", destination: "/our-activities/trust-estate-tax-coordination" },
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
