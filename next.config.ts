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
      { source: "/responsible-ownership", destination: "/stewardship/responsible-ownership" },
      { source: "/long-term-value-creation", destination: "/stewardship/long-term-value-creation" },
      { source: "/generational-stewardship", destination: "/stewardship/generational-stewardship" },
      { source: "/capital-preservation", destination: "/stewardship/capital-preservation" },
      { source: "/governance", destination: "/governance/our-governance-principles" },
      { source: "/our-governance-principles", destination: "/governance/our-governance-principles" },
      { source: "/confidentiality-integrity", destination: "/governance/confidentiality-and-integrity" },
      { source: "/confidentiality-and-integrity", destination: "/governance/confidentiality-and-integrity" },
      { source: "/governance/confidentiality-integrity", destination: "/governance/confidentiality-and-integrity" },
      { source: "/institutional-oversight", destination: "/governance/institutional-oversight" },
      { source: "/succession-and-continuity", destination: "/governance/succession-and-continuity" },
      { source: "/succession-continuity", destination: "/governance/succession-and-continuity" },
      { source: "/family-governance", destination: "/governance/family-governance" },
      { source: "/payment-instructions-security", destination: "/verification/payment-instructions-security" },
      { source: "/payment-security", destination: "/verification/payment-instructions-security" },
      { source: "/verification/payment-security", destination: "/verification/payment-instructions-security" },
      { source: "/verification/payment-and-instructions-security", destination: "/verification/payment-instructions-security" },
      { source: "/fraud-awareness", destination: "/verification/fraud-impersonation-awareness" },
      { source: "/fraud-impersonation-awareness", destination: "/verification/fraud-impersonation-awareness" },
      { source: "/verification/fraud-awareness", destination: "/verification/fraud-impersonation-awareness" },
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
