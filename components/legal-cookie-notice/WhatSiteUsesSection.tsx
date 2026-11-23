import { bodyText, SectionShell } from "@/components/legal-accessibility-statement/shared";

export function WhatSiteUsesSection() {
  return (
    <SectionShell id="what-site-uses" title="What this site uses" divider={false}>
      <blockquote className="mt-6 max-w-[800px] border-l-2 border-twine pl-6">
        <p className="font-serif text-xl leading-[29px] text-te-papa-green italic">
          We publish only verified storage and access technologies, derived directly from our
          reviewed site inventory.
        </p>
      </blockquote>
      <p className={`max-w-[800px] pt-8 ${bodyText}`}>
        Cookies, local storage, session storage and similar technologies store or access small
        pieces of information on your device when you visit a website. We distinguish strictly
        necessary technologies—required to deliver the site securely—from any optional categories
        that require your choice.
      </p>
      <div className="mt-7 max-w-[800px] border-l-2 border-te-papa-green bg-sisal/30 px-6 py-7">
        <p className={bodyText}>
          Current disclosure principle: No undeclared third-party advertising networks, cross-site
          retargeting pixels or unreviewed tracking scripts are permitted on this website. Every
          active technology listed below maps directly to our governed release inventory.
        </p>
      </div>
    </SectionShell>
  );
}
