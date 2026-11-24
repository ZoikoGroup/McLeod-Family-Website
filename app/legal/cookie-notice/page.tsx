import type { Metadata } from "next";
import { SectionFigure } from "@/components/legal-accessibility-statement";
import {
  CookieNoticeHeroSection,
  TechnologyCategoriesSection,
  TechnologyInventorySection,
  UpdatesContactSection,
  WhatSiteUsesSection,
  YourChoicesSection,
} from "@/components/legal-cookie-notice";

export const metadata: Metadata = {
  title: "Cookie Notice | McLeod Family Office",
  description:
    "The cookies and similar technologies used on the McLeod Family Office public website, the purposes they serve, and the controls available to you.",
};

export default function CookieNoticePage() {
  return (
    <>
      <CookieNoticeHeroSection />
      <div className="mx-auto w-full max-w-[1280px] px-6 pt-20 pb-40 lg:px-12">
        <WhatSiteUsesSection />
        <div className="pt-24">
          <TechnologyCategoriesSection />
        </div>
        <SectionFigure
          src="/images/legal-cookie-notice/technology-inventory-laptop.webp"
          alt="Colleagues sharing a laptop, pointing at an on-screen dashboard together"
          width={1184}
          height={657}
        />
        <TechnologyInventorySection />
        <div className="pt-24">
          <YourChoicesSection />
        </div>
        <SectionFigure
          src="/images/legal-cookie-notice/browser-settings-tablet.webp"
          alt="A hand tapping settings on a tablet screen"
          width={1184}
          height={605}
        />
        <UpdatesContactSection />
      </div>
    </>
  );
}
