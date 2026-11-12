import type { Metadata } from "next";
import {
  DistinctResponsibilitiesSection,
  GovernanceDirectAnswersSection,
  GovernancePrinciplesListSection,
  GovernanceVerifySection,
  OurGovernancePrinciplesHeroSection,
  PrincipleToPracticeSection,
} from "@/components/our-governance-principles";

export const metadata: Metadata = {
  title: "Our Governance Principles | McLeod Family Office",
  description:
    "McLeod Family Office approaches governance through defined mandates, purpose-appropriate responsibilities, independent judgment and continuity.",
};

export default function OurGovernancePrinciplesPage() {
  return (
    <>
      {/* Hide the default generic footer CTA on this page without modifying Footer.tsx */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            main:has(#our-governance-principles-hero) + section {
              display: none !important;
            }
          `,
        }}
      />
      <OurGovernancePrinciplesHeroSection />
      <div className="mx-auto w-full max-w-[1280px] px-6 pt-24 pb-48 lg:px-12">
        <GovernancePrinciplesListSection />
        <DistinctResponsibilitiesSection />
        <PrincipleToPracticeSection />
        <GovernanceDirectAnswersSection />
      </div>
      <GovernanceVerifySection />
    </>
  );
}
