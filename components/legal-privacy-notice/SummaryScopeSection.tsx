import { bodyText, SectionShell } from "@/components/legal-accessibility-statement/shared";

export function SummaryScopeSection() {
  return (
    <SectionShell id="summary-scope" title="01. Summary & Scope" divider={false}>
      <blockquote className="mt-6 max-w-[800px] border-l-2 border-twine pl-6">
        <p className="font-serif text-xl leading-[29px] text-te-papa-green italic">
          We collect only the minimum personal information required to operate this website
          securely and respond to legitimate institutional enquiries.
        </p>
      </blockquote>
      <p className={`max-w-[800px] pt-8 ${bodyText}`}>
        This Privacy Notice applies to visitors browsing the official public website of McLeod
        Family Office and counterparties who initiate correspondence through our approved public
        contact channels. Separate private agreements, employment relationships and entity-specific
        arrangements are governed by their own privacy disclosures.
      </p>
    </SectionShell>
  );
}
