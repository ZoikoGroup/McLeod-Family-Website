import type { Metadata } from "next";
import {
  AuthenticationNotAuthorizationSection,
  CannotReconcileChangeSection,
  ChangesNeedCheckingSection,
  FourStepProtocolSection,
  IndependentContactRouteSection,
  PauseBeforeActingSection,
  PaymentInstructionsHeroSection,
  PaymentSecurityFaqSection,
  PaymentSecurityVerifySection,
  ProtectSensitiveInformationSection,
  ProtocolAnalysisImageSection,
} from "@/components/payment-instructions-security";

export const metadata: Metadata = {
  title: "Payment & Instructions Security | McLeod Family Office",
  description:
    "Guidance on verifying payment instructions, avoiding fraudulent redirection and independently checking sensitive financial communications.",
};

export default function PaymentInstructionsSecurityPage() {
  return (
    <>
      {/* Hide the default generic footer CTA on this page without modifying Footer.tsx */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            main:has(#payment-instructions-security-hero) + section {
              display: none !important;
            }
          `,
        }}
      />
      <PaymentInstructionsHeroSection />
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-[48px] pt-4 pb-48">
        <PauseBeforeActingSection />
        <div className="pt-12">
          <FourStepProtocolSection />
          <ProtocolAnalysisImageSection />
          <ChangesNeedCheckingSection />
          <IndependentContactRouteSection />
          <AuthenticationNotAuthorizationSection />
          <CannotReconcileChangeSection />
          <ProtectSensitiveInformationSection />
          <PaymentSecurityFaqSection />
        </div>
      </div>
      <PaymentSecurityVerifySection />
    </>
  );
}
