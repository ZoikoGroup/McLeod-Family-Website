import type { Metadata } from "next";
import {
  CapitalFaqSection,
  CapitalInvestmentsHeroSection,
  CapitalPrinciplesGlanceSection,
  CapitalVerifySection,
  DiversificationRiskSection,
  IndependentExpertiseSection,
  InstitutionalOfficeInteriorImage,
  LongHorizonSection,
  MeasurementReviewSection,
  ResilienceDownsideSection,
  SelectiveConcentrationSection,
} from "@/components/capital-and-investments";

export const metadata: Metadata = {
  title: "Capital & Investments | McLeod Family Office",
  description:
    "McLeod Family Office coordinates the stewardship of family capital within defined mandates. Long-horizon approach considering governance, liquidity, concentration, resilience, risk and responsible review.",
};

export default function CapitalAndInvestmentsPage() {
  return (
    <>
      <CapitalInvestmentsHeroSection />
      <div className="mx-auto w-full max-w-[1280px] px-6 py-20 lg:px-0">
        <CapitalPrinciplesGlanceSection />
        <div className="pt-16 lg:pt-20">
          <InstitutionalOfficeInteriorImage />
        </div>
        <LongHorizonSection />
        <ResilienceDownsideSection />
        <SelectiveConcentrationSection />
        <DiversificationRiskSection />
        <IndependentExpertiseSection />
        <MeasurementReviewSection />
        <CapitalFaqSection />
      </div>
      <CapitalVerifySection />
    </>
  );
}
