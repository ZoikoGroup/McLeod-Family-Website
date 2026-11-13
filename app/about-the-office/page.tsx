import type { Metadata } from "next";
import {
  AboutTheOfficeHeroSection,
  MandateSection,
  EntityOfRecordSection,
} from "@/components/about-the-office";

export const metadata: Metadata = {
  title: "About the Office | McLeod Family Office",
  description:
    "A private family office stewarding capital and legacy across generations.",
};

export default function AboutTheOfficePage() {
  return (
    <>
      <AboutTheOfficeHeroSection />
      <MandateSection />
      <EntityOfRecordSection />
    </>
  );
}
