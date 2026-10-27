import type { Metadata } from "next";
import {
  InstitutionalOversightHeroSection,
  MandateOversightSection,
  FiveInstitutionalLayersSection,
  OversightLifecycleSection,
  ReportingAccountabilitySection,
  IndependentJudgmentSection,
  EscalateAuthorityBannerSection,
  ContinuityAccountabilitySection,
  InstitutionalQuestionsSection,
  ConfirmOfficialChannelsSection,
  InstitutionalOversightVerifySection,
} from "@/components/institutional-oversight";

export const metadata: Metadata = {
  title: "Institutional Oversight | McLeod Family Office",
  description:
    "Principled oversight of strategy, risk, investments and operating activities across the family office and affiliated entities.",
};

export default function InstitutionalOversightPage() {
  return (
    <>
      {/* Hide the default generic footer CTA on this page without modifying Footer.tsx */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            main:has(#institutional-oversight-hero) + section {
              display: none !important;
            }
          `,
        }}
      />
      <InstitutionalOversightHeroSection />
      <div className="mx-auto w-full max-w-[1280px] px-6 py-20 lg:px-8 flex flex-col gap-24">
        <MandateOversightSection />
        <FiveInstitutionalLayersSection />
        <OversightLifecycleSection />
        <ReportingAccountabilitySection />
        <IndependentJudgmentSection />
        <EscalateAuthorityBannerSection />
        <ContinuityAccountabilitySection />
        <InstitutionalQuestionsSection />
        <ConfirmOfficialChannelsSection />
      </div>
      <InstitutionalOversightVerifySection />
    </>
  );
}
