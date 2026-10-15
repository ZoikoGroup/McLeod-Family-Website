import type { Metadata } from "next";
import {
  InstitutionalDisciplineSection,
  StewardshipContactSection,
  StewardshipContentSection,
  StewardshipHeroSection,
} from "@/components/stewardship";

export const metadata: Metadata = {
  title: "McLeod Family Office - Stewardship",
};

export default function StewardshipPage() {
  return (
    <>
      <StewardshipHeroSection />
      <StewardshipContentSection />
      <InstitutionalDisciplineSection />
      <StewardshipContactSection />
    </>
  );
}
