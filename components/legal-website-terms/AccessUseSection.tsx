import { ColumnList, SectionShell, type Column } from "@/components/legal-accessibility-statement/shared";

const permitted: Column[] = [
  {
    title: "Informational browsing",
    text: "Ordinary reading, printing and noncommercial reference of published institutional pages.",
  },
  {
    title: "Independent verification",
    text: "Using the Verification Centre to check official domains and communication protocols.",
  },
  {
    title: "Legitimate enquiries",
    text: "Initiating non-sensitive institutional correspondence through the official Contact route.",
  },
];

export function AccessUseSection() {
  return (
    <SectionShell
      id="access-use"
      title="02. Access & Permitted Use"
      intro={
        <p>
          Visitors may access and read public institutional pages for legitimate reference,
          counterparty verification and lawful correspondence with the Office.
        </p>
      }
    >
      <ColumnList items={permitted} />
    </SectionShell>
  );
}
