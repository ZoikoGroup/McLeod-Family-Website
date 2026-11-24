import type { Metadata } from "next";
import { SectionFigure } from "@/components/legal-accessibility-statement";
import {
  CookiesSecuritySection,
  InformationCollectedSection,
  InformationUseSection,
  PrivacyHeroSection,
  PrivacyRightsSection,
  RecipientsSharingSection,
  ResponsibleOrganizationSection,
  RetentionDeletionSection,
  SummaryScopeSection,
} from "@/components/legal-privacy-notice";

export const metadata: Metadata = {
  title: "Privacy Notice | McLeod Family Office",
  description:
    "How McLeod Family Office handles personal information collected through its public website and institutional enquiry pathways, and the privacy rights available to you.",
};

export default function PrivacyNoticePage() {
  return (
    <>
      <PrivacyHeroSection />
      <div className="mx-auto w-full max-w-[1280px] px-6 pt-20 pb-40 lg:px-12">
        <SummaryScopeSection />
        <div className="space-y-24 pt-24">
          <ResponsibleOrganizationSection />
          <InformationCollectedSection />
        </div>
        <SectionFigure
          src="/images/legal-privacy-notice/team-meeting-presentation.webp"
          alt="A team gathered around a conference table with laptops during a presentation"
          width={1184}
          height={592}
        />
        <div className="space-y-24">
          <InformationUseSection />
          <RecipientsSharingSection />
          <RetentionDeletionSection />
        </div>
        <SectionFigure
          src="/images/legal-privacy-notice/counterparty-handshake.webp"
          alt="Two people shaking hands"
          width={1184}
          height={563}
        />
        <div className="space-y-24">
          <PrivacyRightsSection />
          <CookiesSecuritySection />
        </div>
      </div>
    </>
  );
}
