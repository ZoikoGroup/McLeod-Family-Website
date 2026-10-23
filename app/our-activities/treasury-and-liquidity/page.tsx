import type { Metadata } from "next";
import {
  CounterpartyRiskSection,
  DefinedAuthoritySection,
  ExpertiseJudgmentSection,
  InstitutionalFrameworksImageSection,
  InstitutionalResilienceImageSection,
  LiquidityContextSection,
  LongTermResponsibilitySection,
  ObligationsContingencySection,
  PublicDisclosureBoundarySection,
  TreasuryFaqSection,
  TreasuryLiquidityHeroSection,
  TrustedNextActionsSection,
} from "@/components/treasury-and-liquidity";

export const metadata: Metadata = {
  title: "Treasury & Liquidity | McLeod Family Office",
  description:
    "Liquidity is one consideration in the long-term stewardship of family capital. McLeod Family Office approaches capital responsibilities through defined mandates, deliberate attention to obligations and resilience, and clear separation of decision-making authority.",
};

export default function TreasuryAndLiquidityPage() {
  return (
    <>
      <TreasuryLiquidityHeroSection />
      <div className="mx-auto w-full max-w-[1280px] px-6 pt-24 pb-[95px] lg:px-12">
        <LiquidityContextSection />
        <InstitutionalResilienceImageSection />
        <LongTermResponsibilitySection />
        <ObligationsContingencySection />
        <CounterpartyRiskSection />
        <InstitutionalFrameworksImageSection />
        <DefinedAuthoritySection />
        <ExpertiseJudgmentSection />
        <PublicDisclosureBoundarySection />
        <TreasuryFaqSection />
      </div>
      <TrustedNextActionsSection />
    </>
  );
}
