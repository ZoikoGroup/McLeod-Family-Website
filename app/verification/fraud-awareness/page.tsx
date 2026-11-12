import {
  ReportSuspiciousActivityHeroSection,
  BeforeYouReportSection,
  CommonWarningSignsSection,
  FamiliarChannelSection,
  PaymentChangesAndProtectionSection,
  TellUsWhatConcernsYouSection,
  InstitutionalQuestionsSection,
} from "@/components/fraud-awareness";

export default function FraudAwarenessPage() {
  return (
    <main>
      <ReportSuspiciousActivityHeroSection />
      <BeforeYouReportSection />
      <CommonWarningSignsSection />
      <FamiliarChannelSection />
      <PaymentChangesAndProtectionSection />
      <TellUsWhatConcernsYouSection />
      <InstitutionalQuestionsSection />
    </main>
  );
}
