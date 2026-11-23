import { bodyText, SectionShell } from "@/components/legal-accessibility-statement/shared";

const prohibited = [
  {
    title: "Impersonation & spoofing",
    text: "Falsely representing affiliation, signing authority, official domain ownership or authorization on behalf of McLeod Family Office.",
  },
  {
    title: "Security interference",
    text: "Attempting to impair site availability, bypass technical controls, probe restricted infrastructure or introduce malicious code.",
  },
  {
    title: "Unauthorized data submission",
    text: "Do not submit passwords, authentication codes, confidential family records, identity documents or banking details through public website forms.",
  },
];

export function ProhibitedMisuseSection() {
  return (
    <SectionShell
      id="prohibited-misuse"
      title="03. Prohibited Misuse & Security"
      intro={
        <p>
          To protect visitors, counterparties and institutional integrity, misuse of this website or
          its brand identity is not permitted.
        </p>
      }
    >
      <ol className="max-w-[900px] pt-6">
        {prohibited.map((item, i) => (
          <li
            key={item.title}
            className="grid grid-cols-[48px_minmax(0,1fr)] border-b border-swirl py-6 sm:grid-cols-[72px_minmax(0,1fr)]"
          >
            <span aria-hidden="true" className="pt-1 font-serif text-xl leading-7 text-twine">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-serif text-xl leading-7 text-te-papa-green">{item.title}</h3>
              <p className={`pt-2 ${bodyText}`}>{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
