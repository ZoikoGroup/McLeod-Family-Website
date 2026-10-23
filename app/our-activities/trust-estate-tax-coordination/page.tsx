import type { Metadata } from "next";
import {
  ContinuityPlanningSection,
  CoordinationPrincipleSection,
  CoordinationResponsibilitySection,
  DefinedAuthoritySection,
  DiscretionResponsibilitySection,
  DocumentReviewImageSection,
  SeparateAccountabilitySection,
  TaxConsiderationsSection,
  TrustEstateFaqSection,
  TrustEstateTaxHeroSection,
} from "@/components/trust-estate-tax-coordination";

export const metadata: Metadata = {
  title: "Trust, Estate & Tax Coordination | McLeod Family Office",
  description:
    "Long-term stewardship calls for clear authority across legal arrangements, continuity planning and tax considerations. McLeod Family Office coordinates responsibilities within defined mandates, while the relevant legal entities, fiduciaries and qualified specialists retain their own duties.",
};

export default function TrustEstateTaxCoordinationPage() {
  return (
    <>
      <TrustEstateTaxHeroSection />
      <div className="mx-auto w-full max-w-[1280px] px-6 pt-24 pb-48 lg:px-12">
        <CoordinationResponsibilitySection />
        <DefinedAuthoritySection />
        <ContinuityPlanningSection />
        <TaxConsiderationsSection />
        <DocumentReviewImageSection />
        <SeparateAccountabilitySection />
        <CoordinationPrincipleSection />
        <DiscretionResponsibilitySection />
        <TrustEstateFaqSection />
      </div>
    </>
  );
}
