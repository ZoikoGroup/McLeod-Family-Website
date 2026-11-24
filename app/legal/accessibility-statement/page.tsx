import type { Metadata } from "next";
import {
  AccessibilityHeroSection,
  CommitmentScopeSection,
  EvaluateReviewSection,
  KnownLimitationsSection,
  RequestAssistanceSection,
  SectionFigure,
  StatementUpdatesSection,
  TargetStatusSection,
} from "@/components/legal-accessibility-statement";

export const metadata: Metadata = {
  title: "Accessibility Statement | McLeod Family Office",
  description:
    "How McLeod Family Office approaches accessibility on its public website, its WCAG 2.2 Level AA target, known limitations and how to request assistance or report a barrier.",
};

export default function AccessibilityStatementPage() {
  return (
    <>
      <AccessibilityHeroSection />
      <div className="mx-auto w-full max-w-[1280px] px-6 pt-20 pb-40 lg:px-12">
        <CommitmentScopeSection />
        <div className="pt-28">
          <TargetStatusSection />
        </div>
        <SectionFigure
          src="/images/legal-accessibility-statement/accessibility-evaluation-review.webp"
          alt="A team member arranging pinned interface wireframes connected by string on a planning wall"
          width={1184}
          height={790}
        />
        <KnownLimitationsSection />
        <div className="pt-24">
          <RequestAssistanceSection />
        </div>
        <SectionFigure
          src="/images/legal-accessibility-statement/institutional-support-assistance.webp"
          alt="Two colleagues reviewing documents in an orange folder together"
          width={1184}
          height={730}
        />
        <EvaluateReviewSection />
        <div className="pt-28">
          <StatementUpdatesSection />
        </div>
      </div>
    </>
  );
}
