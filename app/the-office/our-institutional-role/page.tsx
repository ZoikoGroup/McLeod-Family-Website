import type { Metadata } from "next";
import { InstitutionalRoleHeroSection } from "@/components/our-institutional-role/InstitutionalRoleHeroSection";
import { DistinctRolesSection } from "@/components/our-institutional-role/DistinctRolesSection";
import { WhatWeCoordinateSection } from "@/components/our-institutional-role/WhatWeCoordinateSection";
import { OversightVsManagementSection } from "@/components/our-institutional-role/OversightVsManagementSection";
import { SeparateActivitiesSection } from "@/components/our-institutional-role/SeparateActivitiesSection";
import { SpecialistExpertiseSection } from "@/components/our-institutional-role/SpecialistExpertiseSection";
import { CallbackPolicySection } from "@/components/our-institutional-role/CallbackPolicySection";
import { InstitutionalQuestionsSection } from "@/components/our-institutional-role/InstitutionalQuestionsSection";
import { VerifyActionSection } from "@/components/our-institutional-role/VerifyActionSection";

export const metadata: Metadata = {
  title: "Our Institutional Role | McLeod Family Office",
  description:
    "How McLeod Family Office coordinates the stewardship of enterprise interests, capital, governance, risk, reporting, and continuity across generations.",
};

export default function InstitutionalRolePage() {
  return (
    <>
      {/* Hero Section */}
      <InstitutionalRoleHeroSection />

      {/* Main Content Sections */}
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-24 px-6 py-20">
        {/* Section 1: Distinct Roles. Clear Accountability. */}
        <DistinctRolesSection />

        {/* Section 2: What the Office Coordinates */}
        <WhatWeCoordinateSection />

        {/* Section 3: Ownership Oversight is Not Operating Management */}
        <OversightVsManagementSection />

        {/* Section 4: Separate Activities. Separate Responsibilities. */}
        <SeparateActivitiesSection />

        {/* Section 5: Specialist Expertise without Outsourced Accountability */}
        <SpecialistExpertiseSection />

        {/* Section 6: Verifiable Engagement & Callback Policy */}
        <CallbackPolicySection />

        {/* Section 7: Institutional Questions */}
        <InstitutionalQuestionsSection />

        {/* Section 8: Verify Before You Act */}
        <VerifyActionSection />
      </div>
    </>
  );
}
