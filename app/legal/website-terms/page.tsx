import type { Metadata } from "next";
import { SectionFigure } from "@/components/legal-accessibility-statement";
import {
  AccessUseSection,
  ChangesNoticesSection,
  ContentOwnershipSection,
  DisclaimersSection,
  ExternalLinksSection,
  NoOfferSection,
  ProhibitedMisuseSection,
  ScopeOperatorSection,
  WebsiteTermsHeroSection,
} from "@/components/legal-website-terms";

export const metadata: Metadata = {
  title: "Website Terms | McLeod Family Office",
  description:
    "The conditions of accessing and using the official McLeod Family Office public website, including permitted use, prohibited misuse and the limits of website content.",
};

export default function WebsiteTermsPage() {
  return (
    <>
      <WebsiteTermsHeroSection />
      <div className="mx-auto w-full max-w-[1280px] px-6 pt-20 pb-40 lg:px-12">
        <ScopeOperatorSection />
        <div className="space-y-24 pt-24">
          <AccessUseSection />
          <ProhibitedMisuseSection />
        </div>
        <SectionFigure
          src="/images/legal-website-terms/justice-scales-statue.webp"
          alt="A bronze statue of Lady Justice holding balanced scales"
          width={1184}
          height={608}
        />
        <div className="space-y-24">
          <ContentOwnershipSection />
          <NoOfferSection />
          <ExternalLinksSection />
        </div>
        <SectionFigure
          src="/images/legal-website-terms/identity-verification-review.webp"
          alt="A hand holding a magnifying glass over a profile icon beside verification checkmarks"
          width={1184}
          height={634}
        />
        <div className="space-y-24">
          <DisclaimersSection />
          <ChangesNoticesSection />
        </div>
      </div>
    </>
  );
}
