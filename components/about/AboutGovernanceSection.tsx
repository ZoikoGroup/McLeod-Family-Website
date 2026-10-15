import { Sorts_Mill_Goudy } from "next/font/google";

const goudyItalic = Sorts_Mill_Goudy({ subsets: ["latin"], weight: "400", style: "italic" });

const rows = [
  {
    layer: "Family governance",
    role: "Sets family purpose, reserved matters and the ultimate direction of stewardship.",
    roleBr: [],
    statement: "Authority originates with the family and is delegated deliberately.",
    h: "lg:h-[108px]",
  },
  {
    layer: "Family Office",
    role: "Coordinates strategy, capital, governance, risk, reporting and continuity within its mandate.",
    statement: "The Office operates under defined mandates and controls.",
    h: "lg:h-[107.5px]",
  },
  {
    layer: "Purpose-specific vehicles",
    role: "Hold or conduct distinct activities under their own legal and fiduciary requirements.",
    statement: "Separate vehicles are used for separate purposes.",
    h: "lg:h-[107.5px]",
  },
  {
    layer: "Operating businesses",
    role: "Execute commercial strategy through their boards and executive teams.",
    statement: "The Family Office is not the day-to-day management layer of operating companies.",
    h: "lg:h-[107.5px]",
  },
  {
    layer: "External advisers",
    role: "Provide specialist expertise, independent judgement or regulated services.",
    statement: "External expertise is used where appropriate; accountability is not outsourced.",
    h: "lg:h-[107px]",
  },
];

const pillars = [
  {
    title: "Long horizon",
    body: "Capital decisions are evaluated across cycles and generations rather than against short reporting periods.",
  },
  {
    title: "Resilience",
    body: "Liquidity, concentration, leverage, counterparty exposure and downside scenarios are considered alongside expected opportunity.",
  },
  {
    title: "Selective concentration",
    body: "Concentration may be appropriate where the family has deep knowledge, control or a durable advantage; concentration is governed, not accidental.",
  },
  {
    title: "Diversification of risk",
    body: "Risks are considered across asset, geography, currency, counterparty and operating exposures rather than through labels alone.",
  },
  {
    title: "Independent expertise",
    body: "External investment, tax, legal, banking, insurance and specialist advice is used when independence, regulation or domain expertise requires it.",
  },
  {
    title: "Measurement & review",
    body: "Material exposures, performance, costs and policy compliance are reviewed through defined reporting and governance cycles.",
  },
];

const h2 = "font-serif text-[36px] leading-[44px] lg:text-[48px] lg:leading-[48px] text-[#1b2b23]";
const sub = "pt-4 lg:pt-6 font-serif text-[20px] leading-[28px] lg:text-[24px] lg:leading-[32px] text-[rgba(26,26,26,0.8)]";

export function AboutGovernanceSection() {
  return (
    <section id="governance" className="bg-[#f4f1eb] py-16 lg:py-[128px]">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <div>
          <h2 className={h2}>Governance</h2>
          <p className={`${sub} lg:h-[56px]`}>
            Clear mandates. Defined authority. Separate accountability.
          </p>
          <p className="pt-8 lg:pt-12 font-serif text-[16px] leading-[26px] lg:text-[18px] lg:leading-[28px] text-[rgba(26,26,26,0.7)] lg:w-[760px]">
            McLeod Family Office is the coordinating institutional layer across the
            family’s long-term interests. Family governance, Office governance,
            legal-entity governance and operating-company governance should remain
            distinct, with defined communication and escalation between them.
          </p>

          <div className="pt-10 lg:pt-16">
            <table className="block w-full font-serif lg:table lg:table-fixed lg:min-w-[800px]">
              <colgroup className="hidden lg:table-column-group">
                <col style={{ width: "308px" }} />
                <col style={{ width: "410.664px" }} />
                <col />
              </colgroup>
              <thead className="sr-only lg:not-sr-only lg:table-header-group">
                <tr className="lg:table-row">
                  <th scope="col" className="h-[53px] border-b-2 border-[#1b2b23] py-4 pl-px pr-6 text-left align-middle text-[14px] font-normal uppercase leading-[20px] tracking-[1.4px] text-[#1b2b23]">Layer</th>
                  <th scope="col" className="h-[53px] border-b-2 border-[#1b2b23] py-4 pl-px pr-6 text-left align-middle text-[14px] font-normal uppercase leading-[20px] tracking-[1.4px] text-[#1b2b23]">Role</th>
                  <th scope="col" className="h-[53px] border-b-2 border-[#1b2b23] px-px py-4 text-left align-middle text-[14px] font-normal uppercase leading-[20px] tracking-[1.4px] text-[#1b2b23]">Public Statement</th>
                </tr>
              </thead>
              <tbody className="block lg:table-row-group">
                {rows.map((r, i) => {
                  const bt = i === 0 ? "" : "lg:border-t lg:border-[#e5e7eb]";
                  return (
                    <tr
                      key={r.layer}
                      className={`block border-t border-[#e5e7eb] py-5 first:border-t-0 lg:table-row lg:border-t-0 lg:py-0 ${r.h}`}
                    >
                      <th
                        scope="row"
                        className={`block text-left text-[20px] font-normal leading-[28px] text-[#1a1a1a] lg:table-cell lg:whitespace-nowrap lg:py-6 lg:pl-px lg:pr-6 lg:align-middle ${bt}`}
                      >
                        {r.layer}
                      </th>
                      <td className={`block pt-2 text-[16px] leading-[26px] text-[rgba(26,26,26,0.8)] lg:table-cell lg:py-6 lg:pl-px lg:pr-6 lg:pt-6 lg:align-middle lg:text-[18px] lg:leading-[29.25px] ${bt}`}>
                        {r.role}
                      </td>
                      <td className={`block pt-2 text-[16px] italic ${goudyItalic.className} leading-[26px] text-[rgba(26,26,26,0.8)] lg:table-cell lg:pl-px lg:pr-0 lg:py-6 lg:align-middle lg:text-[18px] lg:leading-[29.25px] ${bt}`}>
                        {r.statement}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="pt-16 lg:pt-[128px]">
          <h2 className={h2}>Capital, risk &amp; resilience</h2>
          <p className={`${sub} lg:h-[56px]`}>
            Patient capital. Deliberate risk. Preserved optionality.
          </p>
          <div className="pt-10 lg:pt-16">
            <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[166px_166px] lg:gap-12">
              {pillars.map((p) => (
                <li key={p.title}>
                  <h3 className="border-b border-[rgba(27,43,35,0.15)] pb-2 font-serif text-[20px] font-normal leading-[28px] text-[#1b2b23]">
                    {p.title}
                  </h3>
                  <p className="pt-3 font-serif text-[16px] leading-[26px] text-[rgba(26,26,26,0.7)] lg:text-[18px] lg:leading-[29.25px]">
                    {p.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
