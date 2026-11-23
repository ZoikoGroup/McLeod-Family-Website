import { SectionShell } from "@/components/legal-accessibility-statement/shared";

export function DisclaimersSection() {
  return (
    <SectionShell
      id="disclaimers"
      title="07. Disclaimers & Limitations"
      intro={
        <p>
          While McLeod Family Office aims to keep public institutional information accurate and
          available, website access may be interrupted for maintenance, security or operational
          reasons. Operative warranty, liability and governing-law qualifications apply strictly as
          approved by legal counsel and subject to non-waivable statutory rights.
        </p>
      }
    />
  );
}
