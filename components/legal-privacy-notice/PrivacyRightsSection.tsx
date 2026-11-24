import {
  bodyText,
  ColumnList,
  SectionShell,
  type Column,
} from "@/components/legal-accessibility-statement/shared";

const rights: Column[] = [
  {
    title: "Access & correction",
    text: "Request confirmation of personal information held about you or ask to correct inaccurate details, where applicable.",
  },
  {
    title: "Deletion & restriction",
    text: "Request erasure, restriction or objection to specific processing, subject to lawful retention exceptions.",
  },
  {
    title: "Withdraw consent & complaints",
    text: "Withdraw consent where optional processing relies on consent, and raise concerns through our privacy channel or an applicable supervisory authority.",
  },
];

const steps = [
  {
    title: "Submit a minimal request",
    text: "Use our official contact route and describe the information or right concerned. Do not attach passport scans, government IDs or banking documents in your initial message.",
  },
  {
    title: "Proportionate verification",
    text: "If identity verification is necessary to protect personal data from unauthorized disclosure, our privacy team will arrange a separate, secure verification step.",
  },
  {
    title: "Review & response",
    text: "Requests are triaged by an authorized owner and answered through a secure channel in accordance with applicable legal timelines.",
  },
];

export function PrivacyRightsSection() {
  return (
    <SectionShell
      id="privacy-rights"
      title="07. Privacy Rights & Request Process"
      intro={
        <p>
          Depending on your jurisdiction and applicable law, you may have rights regarding personal
          information held about you. Rights are evaluated and fulfilled through a controlled,
          proportionate review process.
        </p>
      }
    >
      <ColumnList items={rights} />
      <ol aria-label="How to make a privacy request" className="max-w-[900px] pt-10">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="grid grid-cols-[48px_minmax(0,1fr)] border-b border-swirl py-6 sm:grid-cols-[72px_minmax(0,1fr)]"
          >
            <span aria-hidden="true" className="pt-1 font-serif text-xl leading-7 text-twine">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-serif text-xl leading-7 text-te-papa-green">{step.title}</h3>
              <p className={`pt-2 ${bodyText}`}>{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
