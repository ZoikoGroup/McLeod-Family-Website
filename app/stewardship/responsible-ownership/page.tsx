import type { Metadata } from "next";
import {
  DefineAuthoritySection,
  DownsideRiskSection,
  FutureStewardshipSection,
  OversightManagementSection,
  OwnershipFaqSection,
  OwnershipResponsibilitySection,
  PublicExplanationSection,
  ReportingBoundarySection,
  ResponsibleOwnershipHeroSection,
  ResponsibleOwnershipVerifySection,
} from "@/components/responsible-ownership";

export const metadata: Metadata = {
  title: "Responsible Ownership | McLeod Family Office",
  description:
    "Responsible ownership calls for durable judgment about enterprise interests, governance and the responsibilities that follow from capital and control. McLeod Family Office coordinates owner-level stewardship within defined mandates.",
};

export default function ResponsibleOwnershipPage() {
  return (
    <>
      {/* Hide the default generic footer CTA on this page without modifying Footer.tsx */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            main:has(#responsible-ownership-hero) + section {
              display: none !important;
            }
          `,
        }}
      />
      <ResponsibleOwnershipHeroSection />
      <div className="mx-auto w-full max-w-[1280px] px-6 pt-24 pb-48 lg:px-12">
        <OwnershipResponsibilitySection />
        <DefineAuthoritySection />
        <OversightManagementSection />
        <ReportingBoundarySection />
        <DownsideRiskSection />
        <FutureStewardshipSection />
        <PublicExplanationSection />
        <OwnershipFaqSection />
      </div>
      <ResponsibleOwnershipVerifySection />
    </>
  );
}
