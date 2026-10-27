import type { Metadata } from "next";
import {
  SuccessionContinuityHeroSection,
  DefinedAuthorityDuringChangeSection,
  FiveContinuityDisciplinesSection,
  SeparateAuthorityCoordinatedStewardshipSection,
  DurableRecordSection,
  VerifyInstructionBannerSection,
  SuccessionQuestionsSection,
  ConfirmOfficialChannelsSection,
  SuccessionContinuityVerifySection,
} from "@/components/succession-and-continuity";

export const metadata: Metadata = {
  title: "Succession & Continuity | McLeod Family Office",
  description:
    "Planning and governance frameworks to ensure leadership transition, institutional continuity and enduring legacy.",
};

export default function SuccessionAndContinuityPage() {
  return (
    <>
      {/* Hide the default generic footer CTA on this page without modifying Footer.tsx */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            main:has(#succession-continuity-hero) + section {
              display: none !important;
            }
          `,
        }}
      />
      <SuccessionContinuityHeroSection />
      <div className="mx-auto w-full max-w-[1280px] px-6 py-20 lg:px-8 flex flex-col gap-24">
        <DefinedAuthorityDuringChangeSection />
        <FiveContinuityDisciplinesSection />
        <SeparateAuthorityCoordinatedStewardshipSection />
        <DurableRecordSection />
        <VerifyInstructionBannerSection />
        <SuccessionQuestionsSection />
        <ConfirmOfficialChannelsSection />
      </div>
      <SuccessionContinuityVerifySection />
    </>
  );
}
