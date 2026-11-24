import { DefinitionRow, SectionShell } from "@/components/legal-accessibility-statement/shared";

const recipients = [
  {
    term: "Hosting & IT security providers",
    text: "Infrastructure, transport security and technical maintenance providers operating under scoped processor terms.",
  },
  {
    term: "Professional advisers",
    text: "External legal, compliance or specialist advisers strictly where necessary for a specific institutional matter.",
  },
  {
    term: "Lawful authorities",
    text: "Public authorities or courts only when required by applicable law, valid legal process or to protect against fraud.",
  },
  {
    term: "International transfers",
    text: "Where personal information is accessed or transferred across borders, transfers are governed by verified safeguards applicable to the relevant jurisdictions.",
  },
];

export function RecipientsSharingSection() {
  return (
    <SectionShell
      id="recipients-sharing"
      title="05. Recipients, Sharing & International Handling"
      intro={
        <p>
          We do not sell personal information or share visitor details with third-party advertising
          networks. Information is shared only on a strict need-to-know basis with vetted service
          categories under appropriate contractual controls.
        </p>
      }
    >
      <dl className="max-w-[1000px] [&>div:first-child]:pt-6">
        {recipients.map((item) => (
          <DefinitionRow key={item.term} term={item.term}>
            {item.text}
          </DefinitionRow>
        ))}
      </dl>
    </SectionShell>
  );
}
