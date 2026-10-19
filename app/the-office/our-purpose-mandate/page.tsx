import type { Metadata } from "next";
import {
  ConvertingResponsibilitySection,
  InstitutionalPerimeterSection,
  PurposeContactSection,
  PurposeFaqSection,
  PurposeHeroSection,
  PurposeInPracticeSection,
  SeparateResponsibilitiesSection,
  StewardResponsibilitiesSection,
} from "@/components/our-purpose-mandate";

export const metadata: Metadata = {
  title: "McLeod Family Office - Our Purpose & Mandate",
};

export default function PurposeAndMandatePage() {
  return (
    <>
      <PurposeHeroSection />
      <ConvertingResponsibilitySection />
      <StewardResponsibilitiesSection />
      <InstitutionalPerimeterSection />
      <PurposeInPracticeSection />
      <SeparateResponsibilitiesSection />
      <PurposeFaqSection />
      <PurposeContactSection />
    </>
  );
}
