import Link from "next/link";
import { bodyText, SectionShell } from "@/components/legal-accessibility-statement/shared";
import { Callout, inlineLink } from "./shared";

export function ScopeOperatorSection() {
  return (
    <SectionShell id="scope-operator" title="01. Scope & Website Operator" divider={false}>
      <blockquote className="mt-6 max-w-[800px] border-l-2 border-twine pl-6">
        <p className="font-serif text-xl leading-[29px] text-te-papa-green italic">
          These terms govern access to the official public website of McLeod Family Office and do
          not replace separate private agreements.
        </p>
      </blockquote>
      <p className={`max-w-[800px] pt-8 ${bodyText}`}>
        This website is an informational institutional surface for McLeod Family Office. Separate
        legal entities, operating businesses and specific mandates retain their own governing terms
        and contracting responsibilities.
      </p>
      <Callout>
        Entity distinction: Operating headquarters locations displayed in the global footer
        represent geographic presence only. Authoritative legal-entity particulars and
        registered-office disclosures are governed separately in our{" "}
        <Link href="/legal" className={inlineLink}>
          Legal Notices
        </Link>
        .
      </Callout>
    </SectionShell>
  );
}
