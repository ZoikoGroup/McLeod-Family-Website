import type { Metadata } from "next";
import {
  McleodHeroSection,
  EnterpriseSection,
  CapitalSection,
  ContinuitySection,
} from "@/components/mcleod-family-office";

export const metadata: Metadata = {
  title: "McLeod Family Office | Stewardship",
  description:
    "A private family office stewarding capital and legacy across generations.",
};

export default function McLeodFamilyOfficePage() {
  return (
    <>
      <McleodHeroSection />
      <EnterpriseSection />
      <CapitalSection />
      <ContinuitySection />
    </>
  );
}
