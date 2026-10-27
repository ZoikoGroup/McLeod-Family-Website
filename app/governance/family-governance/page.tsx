import type { Metadata } from "next";
import {
  FamilyGovernanceHeroSection,
  PurposeBeforeDelegationSection,
  DecisionsResponsibleAuthoritySection,
  DirectionToMandateSection,
  DifferentResponsibilitiesSection,
  WebsiteNotProofOfAuthoritySection,
  FamilyGovernanceDirectAnswersSection,
  FamilyGovernanceVerifySection,
} from "@/components/family-governance";

export const metadata: Metadata = {
  title: "Family Governance | McLeod Family Office",
  description:
    "Within McLeod Family Office’s institutional model, family governance provides the long-term purpose and direction of stewardship.",
};

export default function FamilyGovernancePage() {
  return (
    <>
      {/* Hide the default generic footer CTA on this page without modifying Footer.tsx */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            main:has(#family-governance-hero) + section {
              display: none !important;
            }
          `,
        }}
      />
      <FamilyGovernanceHeroSection />
      <div className="mx-auto w-full max-w-[1280px] px-6 py-24 lg:px-12 flex flex-col">
        <PurposeBeforeDelegationSection />
        <DecisionsResponsibleAuthoritySection />
        <DirectionToMandateSection />
        <DifferentResponsibilitiesSection />
        <WebsiteNotProofOfAuthoritySection />
        <FamilyGovernanceDirectAnswersSection />
      </div>
      <FamilyGovernanceVerifySection />
    </>
  );
}
