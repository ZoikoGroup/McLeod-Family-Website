import { SectionShell } from "@/components/legal-accessibility-statement/shared";

export function RetentionDeletionSection() {
  return (
    <SectionShell
      id="retention-deletion"
      title="06. Retention & Deletion"
      intro={
        <>
          <p>
            Personal information is retained only for as long as necessary to fulfill the specific
            purpose for which it was collected, subject to documented legal obligations, dispute
            resolution requirements or active legal holds.
          </p>
          <p className="pt-5">
            Routine deletion follows our approved records register. Where a deletion request is
            submitted, we review applicable legal-hold exceptions before confirming disposition.
          </p>
        </>
      }
    />
  );
}
