import type { Metadata } from "next";
import {
  AnalysisReportingImageSection,
  BoardDisciplineSection,
  BoardroomGovernanceImageSection,
  ClearReportingSection,
  ContinuingResponsibilitySection,
  EnterpriseInterestsSection,
  InstitutionalClaritySection,
  OwnershipPrinciplesSection,
  SeparateResponsibilitiesSection,
  StrategicFaqSection,
  StrategicOversightSection,
  StrategicOwnershipHeroSection,
} from "@/components/strategic-ownership";

export const metadata: Metadata = {
  title: "Strategic Ownership & Enterprise Interests | McLeod Family Office",
  description:
    "The Office supports the long-term stewardship of family enterprise interests through ownership principles, board discipline, strategic oversight and clear reporting within defined mandates.",
};

export default function StrategicOwnershipPage() {
  return (
    <>
      <StrategicOwnershipHeroSection />
      <div className="mx-auto w-full max-w-[1280px] px-6 pt-24 pb-48 lg:px-12">
        <EnterpriseInterestsSection />
        <BoardroomGovernanceImageSection />
        <OwnershipPrinciplesSection />
        <BoardDisciplineSection />
        <StrategicOversightSection />
        <AnalysisReportingImageSection />
        <ClearReportingSection />
        <SeparateResponsibilitiesSection />
        <ContinuingResponsibilitySection />
        <InstitutionalClaritySection />
        <StrategicFaqSection />
      </div>
    </>
  );
}
