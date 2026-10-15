import Image from "next/image";
import Link from "next/link";

const items = [
  {
    title: "Succession",
    body: "Leadership and ownership transitions are planned early and reviewed periodically.",
  },
  {
    title: "Next-generation preparation",
    body: "Future stewards are prepared through education, exposure, responsibility and governance participation appropriate to readiness.",
  },
  {
    title: "Institutional memory",
    body: "Material decisions, mandates, policies and records are documented so continuity does not depend on one person.",
  },
  {
    title: "Emergency authority",
    body: "Critical functions have delegated authorities, escalation paths and continuity arrangements for unexpected absence or disruption.",
  },
  {
    title: "Review cadence",
    body: "Governance and succession arrangements are living systems and are revisited as family, enterprise and jurisdictions evolve.",
  },
];

export function ContinuityPrivacySection() {
  return (
    <section id="continuity" className="bg-[#1a332a] py-16 font-serif lg:py-[128px]">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <div className="grid grid-cols-1 gap-12 lg:min-h-[744.5px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-x-[80px]">
          <div className="flex flex-col items-start">
            <h2 className="text-[28px] leading-[36px] text-[#b89c63] lg:text-[36px] lg:leading-[40px]">
              Continuity &amp; Next Generation
            </h2>
            <p className="pt-6 text-[20px] leading-[28px] text-[rgba(244,241,235,0.9)] lg:text-[24px] lg:leading-[32px]">
              Prepare the transition before the transition arrives.
            </p>
            <ul className="w-full pt-8 lg:pt-12">
              {items.map((it, i) => (
                <li
                  key={it.title}
                  className={`border-l-2 border-[rgba(184,156,99,0.3)] pl-6 ${i > 0 ? "mt-8" : ""}`}
                >
                  <h3 className="text-[20px] leading-[28px] text-[#b89c63]">{it.title}</h3>
                  <p className="pt-2 text-[18px] leading-[29.25px] text-[rgba(244,241,235,0.7)] lg:max-w-[550px]">
                    {it.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between bg-[#f4f1eb] p-6 lg:p-[48px]">
            <div className="w-full">
              <h2 className="text-[26px] leading-[36px] text-[#1b2b23] lg:text-[30px]">
                Presence &amp; Privacy
              </h2>
              <p className="pt-8 text-[18px] leading-[29.25px] text-[rgba(26,26,26,0.8)] lg:max-w-[480px]">
                McLeod Family Office operates from the United States and the United Kingdom, with its
                headquarters in Sacramento, California and its European headquarters in London.
              </p>
              <div className="flex flex-col py-12 lg:h-[288px] lg:max-w-[480px]">
                <div>
                  <h3 className="text-[12px] uppercase leading-[16px] tracking-[1.2px] text-[rgba(27,43,35,0.6)]">
                    Headquarters
                  </h3>
                  <p className="pt-2 text-[20px] leading-[28px] text-[#1a1a1a]">
                    Sacramento, California
                    <br />
                    United States
                  </p>
                </div>
                <div className="pt-8">
                  <h3 className="text-[12px] uppercase leading-[16px] tracking-[1.2px] text-[rgba(27,43,35,0.6)]">
                    European Headquarters
                  </h3>
                  <p className="pt-2 text-[20px] leading-[28px] text-[#1a1a1a]">
                    167–169 Great Portland Street, 5th Floor
                    <br />
                    London W1W 5PF, United Kingdom
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-[rgba(27,43,35,0.2)] pt-8 lg:mt-0">
              <h3 className="flex items-center gap-2 text-[20px] leading-[28px] text-[#1b2b23]">
                <Image src="/images/about/continuity-icon-shield.svg" alt="" width={20} height={20} />
                Privacy &amp; Verification
              </h3>
              <p className="pb-6 pt-3 text-[16px] leading-[24px] text-[rgba(26,26,26,0.7)] lg:max-w-[480px]">
                Confidentiality is an operating requirement. Sensitive information is disclosed only to
                identified counterparties through established channels, and important instructions are
                independently verified.
              </p>
              <Link
                href="/verification"
                className="block h-[29.25px] text-[18px] leading-[29.25px] text-[#1b2b23]"
              >
                Open the Verification Centre →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
