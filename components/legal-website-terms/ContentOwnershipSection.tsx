import { SectionShell } from "@/components/legal-accessibility-statement/shared";

export function ContentOwnershipSection() {
  return (
    <SectionShell
      id="content-ownership"
      title="04. Ownership of Website Content & Marks"
      intro={
        <>
          <p>
            Published text, institutional branding, layout elements and marks displayed on this
            website are subject to applicable intellectual-property rights and third-party licensing
            terms where relevant.
          </p>
          <p className="pt-5">
            Viewing or printing public pages for legitimate reference does not grant a license to
            reproduce McLeod Family Office marks, imply endorsement or republish institutional
            materials for commercial solicitation.
          </p>
        </>
      }
    />
  );
}
