import type { Metadata } from "next";
import {
  ChannelRequiresJudgmentSection,
  FraudAwarenessHeroSection,
  FraudAwarenessVerifySection,
  FraudComplianceImageSection,
  FraudDirectAnswersSection,
  PaymentChangesSequenceSection,
  ProtectInformationSection,
  SuspiciousRequestProtocolSection,
  WarningSignsSaferActionsSection,
} from "@/components/fraud-impersonation-awareness";

export const metadata: Metadata = {
  title: "Fraud & Impersonation Awareness | McLeod Family Office",
  description:
    "Learn how to recognize common impersonation tactics, verify unexpected communications, and protect yourself and your organization.",
};

export default function FraudAwarenessPage() {
  return (
    <>
      {/* Hide the default generic footer CTA on this page without modifying Footer.tsx */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            main:has(#fraud-awareness-hero) + section {
              display: none !important;
            }
          `,
        }}
      />
      <FraudAwarenessHeroSection />
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-[48px] pt-24 pb-48">
        <SuspiciousRequestProtocolSection />
        <WarningSignsSaferActionsSection />
        <ChannelRequiresJudgmentSection />
        <FraudComplianceImageSection />
        <PaymentChangesSequenceSection />
        <ProtectInformationSection />
        <FraudDirectAnswersSection />
      </div>
      <FraudAwarenessVerifySection />
    </>
  );
}

