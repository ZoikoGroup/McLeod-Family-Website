import { DefinitionRow, SectionShell } from "./shared";

const limitations = [
  {
    area: "Public documents & PDFs",
    impact: "Some archival or third-party reference documents may not be fully tagged for screen readers.",
    alternative:
      "Essential public notices are published directly in accessible HTML, or you may request an accessible format through our assistance route.",
  },
  {
    area: "Third-party interactive tools",
    impact:
      "Conditional third-party preference tools or external portals may vary in assistive-technology support.",
    alternative:
      "Reading this statement and accessing official verification guidance never requires accepting nonessential cookies or using third-party widgets.",
  },
  {
    area: "Contact form barriers",
    impact: "If an online contact control is difficult to operate with your assistive technology.",
    alternative:
      "Use our verified alternative institutional contact route without submitting confidential or medical details.",
  },
];

export function KnownLimitationsSection() {
  return (
    <SectionShell
      id="known-limitations"
      title="Known limitations and alternatives"
      intro={
        <p>
          Where an accessibility barrier is confirmed on a public page, document or interactive
          control, we describe the impact in plain language and provide a practical alternative so
          you can complete your task.
        </p>
      }
    >
      <dl className="max-w-[1000px] [&>div:first-child]:pt-6">
        {limitations.map((item) => (
          <DefinitionRow key={item.area} term={item.area}>
            <p>Impact: {item.impact}</p>
            <p>Alternative: {item.alternative}</p>
          </DefinitionRow>
        ))}
      </dl>
    </SectionShell>
  );
}
