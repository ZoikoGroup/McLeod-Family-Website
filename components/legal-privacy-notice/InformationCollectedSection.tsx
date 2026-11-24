import { ColumnList, SectionShell, type Column } from "@/components/legal-accessibility-statement/shared";

const sources: Column[] = [
  {
    title: "Public enquiry identifiers",
    text: "Name, organization and work email address when you initiate a legitimate institutional enquiry.",
  },
  {
    title: "Enquiry & correspondence content",
    text: "Enquiry category, message text and follow-up correspondence records. No sensitive file uploads are requested at initial contact.",
  },
  {
    title: "Essential technical & security logs",
    text: "Network metadata, request integrity logs and error telemetry needed to protect site availability and prevent abuse.",
  },
];

export function InformationCollectedSection() {
  return (
    <SectionShell
      id="information-collected"
      title="03. Information We Collect & Sources"
      intro={
        <p>
          Personal information is collected only through verified touchpoints—either directly when
          you contact the Office or automatically where strictly necessary for technical security and
          site delivery.
        </p>
      }
    >
      <ColumnList items={sources} />
    </SectionShell>
  );
}
