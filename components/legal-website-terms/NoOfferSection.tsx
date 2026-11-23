import { DefinitionRow, SectionShell } from "@/components/legal-accessibility-statement/shared";

const boundaries = [
  {
    term: "Single-family office perimeter",
    text: "McLeod Family Office serves one family. It does not solicit or accept third-party investment capital, manage external client assets or offer investment products to the public.",
  },
  {
    term: "No professional advice",
    text: "Public website content is for general institutional orientation only and is not legal, tax, financial, investment or accounting advice.",
  },
  {
    term: "No contractual relationship",
    text: "Accessing this website or submitting an initial enquiry does not create a client, advisory, fiduciary or contractual relationship.",
  },
];

export function NoOfferSection() {
  return (
    <SectionShell id="no-offer" title="05. No Offer, No Advice, No Engagement">
      <dl className="max-w-[1000px] [&>div:first-child]:pt-6">
        {boundaries.map((item) => (
          <DefinitionRow key={item.term} term={item.term}>
            {item.text}
          </DefinitionRow>
        ))}
      </dl>
    </SectionShell>
  );
}
