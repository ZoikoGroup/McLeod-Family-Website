import {
  RealAssetsAndPrivateHoldingsHeroSection,
  WhatTheLabelMeansSection,
  SeparateResponsibilitiesSection,
  RiskAndDisclosureSection,
  RealAssetsInstitutionalQuestionsSection,
} from "@/components/real-assets";

export default function RealAssetsPage() {
  return (
    <main>
      <RealAssetsAndPrivateHoldingsHeroSection />
      <WhatTheLabelMeansSection />
      <SeparateResponsibilitiesSection />
      <RiskAndDisclosureSection />
      <RealAssetsInstitutionalQuestionsSection />
    </main>
  );
}
