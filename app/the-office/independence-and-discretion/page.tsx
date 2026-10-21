import type { Metadata } from "next";
import {
  IndependenceHeroSection,
  DefinedMandateSection,
  IndependentJudgmentSection,
  SeparatePurposesSection,
  ProportionateDisclosureSection,
  PublicVsPrivateTableSection,
  VerifiedRelationshipSection,
  VerifyBeforeActPolicySection,
  TransitionContinuitySection,
  IndependenceQuestionsSection,
  ClearContactCtaSection,
} from "@/components/independence-and-discretion";

export const metadata: Metadata = {
  title: "Independence & Discretion | McLeod Family Office",
  description:
    "Our commitment to independence, confidentiality, and a long-term horizon across multi-generational stewardship.",
};

export default function IndependenceAndDiscretionPage() {
  return (
    <>
      {/* Hero Section */}
      <IndependenceHeroSection />

      {/* Main Content Sections */}
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-24 px-6 py-20">
        {/* Section 1: Independence Begins with a Defined Mandate */}
        <DefinedMandateSection />

        {/* Section 2: Independent Judgment Does Not Mean Working Alone */}
        <IndependentJudgmentSection />

        {/* Section 3: Separate Purposes. Clear Responsibilities. */}
        <SeparatePurposesSection />

        {/* Section 4: Discretion is Practiced Through Proportionate Disclosure */}
        <ProportionateDisclosureSection />

        {/* Section 5: What Belongs in Public View—And What Does Not */}
        <PublicVsPrivateTableSection />

        {/* Section 6: A Verified Relationship Begins Through an Official Channel */}
        <VerifiedRelationshipSection />

        {/* Section 7: Verify Before You Act */}
        <VerifyBeforeActPolicySection />

        {/* Section 8: Discretion Should Endure Through Transitions */}
        <TransitionContinuitySection />

        {/* Section 9: Institutional Questions */}
        <IndependenceQuestionsSection />

        {/* Section 10: Clear Contact. Independent Verification. */}
        <ClearContactCtaSection />
      </div>
    </>
  );
}
