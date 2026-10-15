import {
  AboutSection,
  ContactSection,
  CounterpartiesSection,
  EntityOfRecordSection,
  FaqSection,
  GovernanceSection,
  GuidingPrincipleSection,
  HeroSection,
  StewardshipSection,
  VerificationSection,
} from "@/components/home";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EntityOfRecordSection />
      <AboutSection />
      <StewardshipSection />
      <GuidingPrincipleSection />
      <GovernanceSection />
      <CounterpartiesSection />
      <VerificationSection />
      <ContactSection />
      <FaqSection />
    </>
  );
}
