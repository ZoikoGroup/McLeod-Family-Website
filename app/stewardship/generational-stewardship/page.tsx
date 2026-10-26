import type { Metadata } from "next";
import {
  ContinuityBuiltSection,
  ContinuityDisciplinesSection,
  ContinuityEvolveSection,
  DifferentResponsibilitiesSection,
  GenerationalFaqSection,
  GenerationalStewardshipHeroSection,
  GenerationalStewardshipVerifySection,
  PublicExplanationSection,
  ReadinessExperienceSection,
  RecordResponsibilitySection,
  SuccessionDisciplineSection,
  UnexpectedChangeSection,
} from "@/components/generational-stewardship";

export const metadata: Metadata = {
  title: "Generational Stewardship | McLeod Family Office",
  description:
    "At McLeod Family Office, generational stewardship means treating continuity as a present responsibility. It brings together thoughtful succession, preparation of future stewards, institutional memory, planned authority and periodic review.",
};

export default function GenerationalStewardshipPage() {
  return (
    <>
      {/* Hide the default generic footer CTA on this page without modifying Footer.tsx */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            main:has(#generational-stewardship-hero) + section {
              display: none !important;
            }
          `,
        }}
      />
      <GenerationalStewardshipHeroSection />
      <div className="mx-auto w-full max-w-[1280px] px-6 pt-24 pb-48 lg:px-12">
        <ContinuityBuiltSection />
        <ContinuityDisciplinesSection />
        <SuccessionDisciplineSection />
        <ReadinessExperienceSection />
        <RecordResponsibilitySection />
        <UnexpectedChangeSection />
        <ContinuityEvolveSection />
        <DifferentResponsibilitiesSection />
        <PublicExplanationSection />
        <GenerationalFaqSection />
      </div>
      <GenerationalStewardshipVerifySection />
    </>
  );
}
