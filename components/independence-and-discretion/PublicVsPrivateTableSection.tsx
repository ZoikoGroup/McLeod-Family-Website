import { SectionIntro } from "./SectionIntro";

const TABLE_DATA = [
  {
    category: "Identity & Geography",
    publicWebsite: (
      <>
        Full brand name, locked descriptor,<br className="hidden sm:inline" /> approved office locations.
      </>
    ),
    restricted: (
      <>
        Private residences, personal family mobile<br className="hidden sm:inline" /> numbers, home addresses.
      </>
    ),
  },
  {
    category: "Mandate & Governance",
    publicWebsite: (
      <>
        Qualitative responsibility and<br className="hidden sm:inline" /> separation-of-purpose principles.
      </>
    ),
    restricted: (
      <>
        Internal approval matrices, committee<br className="hidden sm:inline" /> minutes, family rules.
      </>
    ),
  },
  {
    category: "Capital & Enterprise",
    publicWebsite: (
      <>
        Long-term decision philosophy and<br className="hidden sm:inline" /> non-solicitation perimeter.
      </>
    ),
    restricted: (
      <>
        AUM, net worth, holdings, cash positions,<br className="hidden sm:inline" /> valuation, performance.
      </>
    ),
  },
  {
    category: "Engagement",
    publicWebsite: (
      <>
        Official web route and Verification<br className="hidden sm:inline" /> Centre access instructions.
      </>
    ),
    restricted: (
      <>
        Public first-contact document uploads,<br className="hidden sm:inline" /> financial wire details.
      </>
    ),
  },
];

export function PublicVsPrivateTableSection() {
  return (
    <section id="public-vs-private" aria-labelledby="public-vs-private-heading" className="w-full">
      <SectionIntro
        id="public-vs-private-heading"
        title="What Belongs in Public View—And What Does Not"
        text={
          <>
            Clear parameters governing public website content versus private institutional<br className="hidden sm:inline" /> records.
          </>
        }
      />

      <div className="mt-8 overflow-x-auto border border-swirl bg-[#faf8f5]">
        <table className="w-full min-w-[700px] border-collapse text-left">
          <thead>
            <tr className="border-b border-swirl bg-[#34322e]/[0.03] font-sans text-xs font-bold uppercase tracking-[1.2px] text-dune">
              <th scope="col" className="w-[32%] border-r border-swirl px-6 py-5">
                Category
              </th>
              <th scope="col" className="w-[40%] border-r border-swirl px-6 py-5">
                Public Website
              </th>
              <th scope="col" className="w-[28%] px-6 py-5">
                Restricted / Non-Public
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-swirl font-sans text-[15px] leading-6">
            {TABLE_DATA.map((row) => (
              <tr key={row.category} className="transition-colors hover:bg-black/[0.02]">
                <td className="border-r border-swirl px-6 py-6 font-medium text-dune">
                  {row.category}
                </td>
                <td className="border-r border-swirl px-6 py-6 text-[#5a5752]">
                  {row.publicWebsite}
                </td>
                <td className="px-6 py-6 text-[#5a5752]">
                  {row.restricted}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
