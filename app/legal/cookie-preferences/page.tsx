import type { Metadata } from "next";
import { SectionFigure } from "@/components/legal-accessibility-statement";
import {
  CookieFaqSection,
  CookieHeroSection,
  HowChoicesWorkSection,
  ManagePreferencesSection,
  RelatedNoticesSection,
  TechnicalBoundariesSection,
} from "@/components/legal-cookie-preferences";

export const metadata: Metadata = {
  title: "Cookie Preferences | McLeod Family Office",
  description:
    "Review and manage your choices for optional cookies and similar technologies on the McLeod Family Office website. Refusing optional technologies never blocks access to public information.",
};

export default function CookiePreferencesPage() {
  return (
    <>
      <CookieHeroSection />
      <div className="mx-auto w-full max-w-[1280px] px-6 pt-20 pb-40 lg:px-12">
        <ManagePreferencesSection />
        <SectionFigure
          src="/images/legal-cookie-preferences/privacy-preferences-review.webp"
          alt="A professional reviewing printed privacy documents at a desk"
          width={1184}
          height={712}
        />
        <HowChoicesWorkSection />
        <div className="pt-24">
          <RelatedNoticesSection />
        </div>
        <SectionFigure
          src="/images/legal-cookie-preferences/privacy-governance-oversight.webp"
          alt="Two colleagues reviewing records together in an archive room lined with binders"
          width={1184}
          height={610}
        />
        <TechnicalBoundariesSection />
        <div className="pt-24">
          <CookieFaqSection />
        </div>
      </div>
    </>
  );
}
