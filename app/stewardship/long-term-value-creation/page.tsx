import type { Metadata } from "next";
import {
  CapitalDisciplineSection,
  DiscloseMandateSection,
  HorizonMeasuredSection,
  InstitutionalQuestionsSection,
  NextHandoverSection,
  ResponsibleOwnershipSection,
  RightResponsibilitiesSection,
  ValueCreationHeroSection,
  ValueCreationVerifySection,
} from "@/components/long-term-value-creation";

export const metadata: Metadata = {
  title: "Long-Term Value Creation | McLeod Family Office",
  description:
    "For McLeod Family Office, a long-term perspective joins enterprise stewardship, disciplined use of family capital, clear decision authority and prepared continuity across cycles and generations.",
};

export default function LongTermValueCreationPage() {
  return (
    <>
      {/* Hide the default generic footer CTA on this page without modifying Footer.tsx */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            main:has(#long-term-value-creation-hero) + section {
              display: none !important;
            }
          `,
        }}
      />
      <ValueCreationHeroSection />
      <div className="mx-auto w-full max-w-[1280px] px-6 pt-24 pb-48 lg:px-12">
        <HorizonMeasuredSection />
        <ResponsibleOwnershipSection />
        <CapitalDisciplineSection />
        <NextHandoverSection />
        <RightResponsibilitiesSection />
        <DiscloseMandateSection />
        <InstitutionalQuestionsSection />
      </div>
      <ValueCreationVerifySection />
    </>
  );
}
