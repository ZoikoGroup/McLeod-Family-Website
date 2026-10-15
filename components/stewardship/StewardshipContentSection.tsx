import Link from "next/link";

type Item = { title: string; body: string; h?: string };

const enterpriseItems: Item[] = [
  {
    title: "Ownership discipline",
    h: "lg:h-[88px]",
    body: "Where the family has an ownership interest, oversight is exercised through defined mandates and appropriate decision rights—not through an assumed universal management role.",
  },
  {
    title: "Governance and reporting",
    h: "lg:h-[59px]",
    body: "Board-level information, material decisions and reporting arrangements are coordinated under the responsibilities of the relevant entity and its governing bodies.",
  },
  {
    title: "Long-horizon orientation",
    h: "lg:h-[59px]",
    body: "Enterprise interests are evaluated through the lens of continuity, operational resilience and long-term stewardship rather than short-term display.",
  },
];

const capitalItems: Item[] = [
  {
    title: "Long horizon",
    h: "lg:h-[59px]",
    body: "Capital decisions are evaluated across cycles and generations, rather than against short reporting periods.",
  },
  {
    title: "Liquidity and resilience",
    h: "lg:h-[59px]",
    body: "Liquidity, concentration, leverage, counterparty exposure and downside scenarios are considered alongside expected opportunities.",
  },
  {
    title: "Concentration discipline",
    h: "lg:h-[59px]",
    body: "Concentration may be appropriate where the family has knowledge, control or a durable advantage; it is a governed choice, not an accidental exposure.",
  },
  {
    title: "Independent expertise",
    h: "lg:h-[59px]",
    body: "External legal, tax, banking, insurance and specialist expertise is used when independent judgment or regulated knowledge is required.",
  },
  {
    title: "Review",
    h: "lg:h-[59px]",
    body: "Material exposures, costs and policy alignment are reviewed through defined reporting and governance cycles.",
  },
];

const continuityItems: Item[] = [
  {
    title: "Succession",
    h: "lg:h-[88px]",
    body: "Leadership and ownership transitions are planned early and reviewed periodically, with responsibilities assigned under appropriate governance.",
  },
  {
    title: "Preparation",
    h: "lg:h-[88px]",
    body: "Future stewards are prepared through education, exposure, responsibility and governance participation appropriate to readiness.",
  },
  {
    title: "Institutional memory",
    h: "lg:h-[88px]",
    body: "Material decisions, mandates, policies and records are documented so the continuity of institutional judgment is not dependent on one person.",
  },
  {
    title: "Emergency authority",
    h: "lg:h-[88px]",
    body: "Critical functions are supported by delegated authorities, escalation paths and continuity arrangements for unexpected disruption.",
  },
  {
    title: "Review cadence",
    h: "lg:h-[58.5px]",
    body: "Governance and succession arrangements are revisited as the family, enterprise and applicable jurisdictions evolve.",
  },
];

function Header({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <header>
      <p className="font-sans text-[14px] leading-[20px] tracking-[1.4px] uppercase text-[rgba(35,70,58,0.6)]">
        {eyebrow}
      </p>
      <h2 className="mt-4 w-full font-serif text-[32px] leading-[40px] text-te-papa-green lg:max-w-[811px] lg:text-[48px] lg:leading-[48px]">
        {title}
      </h2>
      <p className="mt-6 max-w-[760px] font-sans text-[18px] leading-[28px] text-[rgba(52,50,46,0.8)] lg:text-[20px]">
        {intro}
      </p>
    </header>
  );
}

function Items({
  items,
  columns = false,
}: {
  items: Item[];
  columns?: boolean;
}) {
  return (
    <div className="mt-12 max-w-[760px]">
      {items.map((it, i) => (
        <div
          key={it.title}
          className={`border-t border-swirl pt-6 ${i > 0 ? "mt-10" : ""} ${
            columns ? "lg:grid lg:grid-cols-12 lg:gap-4" : ""
          }`}
        >
          <h3
            className={`font-serif text-[20px] leading-[28px] text-te-papa-green ${
              columns ? "lg:col-span-4" : ""
            }`}
          >
            {it.title}
          </h3>
          <p
            className={`font-sans text-[18px] leading-[29.25px] text-[rgba(52,50,46,0.7)] ${it.h ?? ""} ${
              columns ? "mt-3 lg:col-span-8 lg:mt-0" : "mt-3"
            }`}
          >
            {it.body}
          </p>
        </div>
      ))}
    </div>
  );
}

export function StewardshipContentSection() {
  const links = [
    { href: "#enterprise", label: "Enterprise" },
    { href: "#capital", label: "Capital" },
    { href: "#continuity", label: "Continuity" },
  ];
  return (
    <section
      id="stewardship-content"
      className="w-full overflow-x-clip pt-12 pb-20 lg:h-[3645px] lg:pt-16 lg:pb-32"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-0">
          <aside className="lg:w-[283.98px] lg:shrink-0">
            <nav
              aria-label="On this page"
              className="lg:sticky lg:top-[100px]"
            >
              <p className="border-b border-swirl pb-4 font-sans text-[12px] leading-[16px] tracking-[1.2px] uppercase text-[rgba(35,70,58,0.5)]">
                On this page
              </p>
              <ul className="pt-6">
                {links.map((l, i) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className={`block pb-1 font-sans text-[14px] leading-[20px] tracking-[0.35px] text-[rgba(52,50,46,0.7)] hover:text-te-papa-green ${
                        i === 0 ? "pt-1" : "pt-5"
                      }`}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="w-full min-w-0 lg:ml-auto lg:max-w-[810.62px] lg:flex-1">
            <section id="enterprise" className="scroll-mt-24">
              <Header
                eyebrow="01 / Enterprise"
                title="Long-term ownership. Clear separation of responsibility."
                intro="The Office supports the long-term stewardship of family enterprise interests through ownership principles, board discipline, strategic oversight and clear reporting."
              />
              <div className="mt-12">
                <div className="border-l-4 border-te-papa-green bg-spring-wood px-6 py-4 shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
                  <p className="font-sans text-[18px] leading-[29.25px] lg:min-h-[30px] font-medium italic text-te-papa-green">
                    Operating businesses retain their own boards, executives and
                    day-to-day management.
                  </p>
                </div>
              </div>
              <Items items={enterpriseItems} />
              <div className="mt-12 max-w-[760px] border-t border-swirl pt-8">
                <Link
                  href="/governance"
                  className="block font-sans text-[18px] leading-[29.25px] lg:min-h-[30px] font-medium text-te-papa-green"
                >
                  Read about Governance →
                </Link>
              </div>
            </section>

            <section id="capital" className="scroll-mt-24 pt-20 lg:pt-32">
              <Header
                eyebrow="02 / Capital"
                title="Patient capital. Deliberate risk. Preserved optionality."
                intro="Family capital is considered on a long horizon, with deliberate attention to liquidity, concentration, resilience, risk and compounding across cycles. Detailed allocations and performance are private."
              />
              <Items items={capitalItems} />
              <div className="mt-12 max-w-[760px] border-y border-swirl bg-spring-wood py-8">
                <p className="font-sans text-[12px] leading-[16px] tracking-[1.2px] uppercase text-[rgba(35,70,58,0.6)]">
                  Private Mandate
                </p>
                <p className="mt-3 font-sans text-[16px] leading-[24px] font-medium text-[rgba(52,50,46,0.8)]">
                  No public investment products, no solicitation or acceptance of
                  third-party capital and no management of external client
                  assets.
                </p>
              </div>
            </section>

            <section id="continuity" className="scroll-mt-24 pt-20 lg:pt-32">
              <Header
                eyebrow="03 / Continuity"
                title="Prepare the transition before the transition arrives."
                intro="Succession, decision rights and the transfer of responsibility are established before the point of need and reviewed on a defined schedule."
              />
              <Items items={continuityItems} columns />
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
