import type { Metadata } from "next";
import {
  AdminFaqSection,
  BoardroomImageSection,
  CoordinationSection,
  DiscretionVerificationSection,
  DistinctDutiesSection,
  DocumentReviewImageSection,
  FamilyAdministrationHeroSection,
  RecordsContinuitySection,
  ReportingOversightSection,
  SpecialistRemitSection,
} from "@/components/family-administration";

export const metadata: Metadata = {
  title: "Family Administration & Reporting | McLeod Family Office",
  description:
    "Institutional stewardship requires reliable coordination between responsibilities, records, advisers and the information used for decisions. McLeod Family Office supports that coordination within defined mandates.",
};

export default function FamilyAdministrationPage() {
  return (
    <>
      <FamilyAdministrationHeroSection />
      <div className="mx-auto w-full max-w-[1280px] px-6 py-24 lg:px-0">
        <CoordinationSection />

        <div className="pt-16">
          <DocumentReviewImageSection />
        </div>

        <div className="pt-[37px]">
          <RecordsContinuitySection />
        </div>

        <div className="pt-24">
          <ReportingOversightSection />
        </div>

        <div className="pt-16">
          <BoardroomImageSection />
        </div>

        <div className="pt-20">
          <DistinctDutiesSection />
        </div>

        <div className="pt-24">
          <SpecialistRemitSection />
        </div>

        <div className="pt-24">
          <DiscretionVerificationSection />
        </div>

        <div className="pt-24">
          <AdminFaqSection />
        </div>
      </div>
    </>
  );
}
