import type { Metadata } from "next";
import {
  CapitalPreservationFaqSection,
  CapitalPreservationHeroSection,
  CapitalPreservationVerifySection,
  DefinedAuthoritySection,
  DownsideResilienceSection,
  EnduringChoicesSection,
  PreservationDisciplineSection,
  PublicPrivateDetailSection,
} from "@/components/capital-preservation";

export const metadata: Metadata = {
  title: "Capital Preservation | McLeod Family Office",
  description:
    "McLeod Family Office considers capital preservation within a long-horizon framework of liquidity, concentration, risk, resilience and governance. Preservation is a stewardship objective that informs decisions.",
};

export default function CapitalPreservationPage() {
  return (
    <>
      {/* Hide the default generic footer CTA on this page without modifying Footer.tsx */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            main:has(#capital-preservation-hero) + section {
              display: none !important;
            }
          `,
        }}
      />
      <CapitalPreservationHeroSection />
      <div className="mx-auto w-full max-w-[1280px] px-6 pt-24 pb-48 lg:px-12">
        <PreservationDisciplineSection />
        <DownsideResilienceSection />
        <DefinedAuthoritySection />
        <EnduringChoicesSection />
        <PublicPrivateDetailSection />
        <CapitalPreservationFaqSection />
      </div>
      <CapitalPreservationVerifySection />
    </>
  );
}
