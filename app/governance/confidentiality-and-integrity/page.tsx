import type { Metadata } from "next";
import {
  ConfidentialityDirectAnswersSection,
  ConfidentialityIntegrityHeroSection,
  ConfidentialityVerifySection,
  DiscloseWithPurposeSection,
  IntegrityResponsibilitySection,
  SevenSafeguardsSection,
  VerifyInstructionSection,
} from "@/components/confidentiality-integrity";

export const metadata: Metadata = {
  title: "Confidentiality & Integrity | McLeod Family Office",
  description:
    "Policies and practices to protect family privacy, safeguard sensitive information and maintain the highest ethical standards.",
};

export default function ConfidentialityAndIntegrityPage() {
  return (
    <>
      {/* Hide the default generic footer CTA on this page without modifying Footer.tsx */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            main:has(#confidentiality-integrity-hero) + section {
              display: none !important;
            }
          `,
        }}
      />
      <ConfidentialityIntegrityHeroSection />
      <div className="mx-auto w-full max-w-[1280px] px-6 pt-24 pb-48 lg:px-12">
        <DiscloseWithPurposeSection />
        <VerifyInstructionSection />
        <IntegrityResponsibilitySection />
        <SevenSafeguardsSection />
        <ConfidentialityDirectAnswersSection />
      </div>
      <ConfidentialityVerifySection />
    </>
  );
}
