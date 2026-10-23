import type { Metadata } from "next";
import {
  AccountableOversightSection,
  DefinedPurposeSection,
  DiscretionVerificationSection,
  GovernanceOversightImageSection,
  OversightRolesSection,
  PhilanthropyFaqSection,
  PhilanthropyLegacyHeroSection,
  PreparedStewardshipSection,
} from "@/components/philanthropy-and-legacy";

export const metadata: Metadata = {
  title: "Philanthropy & Legacy | McLeod Family Office",
  description:
    "Long-term stewardship includes preparing people, institutions and responsibilities for the generations ahead. Where philanthropic activity is undertaken within an approved mandate, it is governed through purpose-appropriate structures and kept separate from commercial and investment interests.",
};

export default function PhilanthropyAndLegacyPage() {
  return (
    <>
      <PhilanthropyLegacyHeroSection />
      <div className="mx-auto w-full max-w-[1280px] px-6 pt-24 pb-48 lg:px-8 xl:px-12">
        <PreparedStewardshipSection />
        <DefinedPurposeSection />
        <AccountableOversightSection />
        <GovernanceOversightImageSection />
        <OversightRolesSection />
        <DiscretionVerificationSection />
        <PhilanthropyFaqSection />
      </div>
    </>
  );
}
