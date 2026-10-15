import type { Metadata } from "next";
import {
  AboutFaqSection,
  AboutGovernanceSection,
  AboutHeroSection,
  AtAGlanceSection,
  ContinuityPrivacySection,
  HowWeOperateSection,
  PurposeVisionMissionSection,
  VerifyEnquiriesSection,
  WhatWeStewardSection,
} from "@/components/about";

export const metadata: Metadata = {
  title: "About McLeod Family Office | Stewardship & Governance",
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AtAGlanceSection />
      <PurposeVisionMissionSection />
      <WhatWeStewardSection />
      <HowWeOperateSection />
      <AboutGovernanceSection />
      <ContinuityPrivacySection />
      <AboutFaqSection />
      <VerifyEnquiriesSection />
    </>
  );
}
