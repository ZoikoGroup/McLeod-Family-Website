import type { Metadata } from "next";
import {
  DefinedResponsibilitiesSection,
  GuidingPrinciplesSection,
  MissionSection,
  PrinciplesToPracticeSection,
  VisionSection,
  VmvFaqSection,
  VmvHeroSection,
} from "@/components/vision-mission-values";

export const metadata: Metadata = {
  title: "McLeod Family Office - Vision, Mission & Values",
};

export default function VisionMissionValuesPage() {
  return (
    <>
      <VmvHeroSection />
      <VisionSection />
      <MissionSection />
      <GuidingPrinciplesSection />
      <PrinciplesToPracticeSection />
      <DefinedResponsibilitiesSection />
      <VmvFaqSection />
    </>
  );
}
