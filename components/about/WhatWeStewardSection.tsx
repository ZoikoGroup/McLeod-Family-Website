import Image from "next/image";

const items = [
  {
    n: "01",
    title: "Enterprise",
    body: "The Office supports the long-term stewardship of family enterprise interests through ownership principles, board discipline, strategic oversight and clear reporting. Operating companies retain their own boards, executives and day-to-day management.",
  },
  {
    n: "02",
    title: "Capital",
    body: "Family capital is considered on a long horizon, with deliberate attention to liquidity, concentration, resilience, risk and compounding across cycles. Detailed allocations and performance are private.",
  },
  {
    n: "03",
    title: "Governance",
    body: "Decision rights, reserved matters, delegations and controls are documented so that authority is explicit rather than assumed.",
  },
  {
    n: "04",
    title: "Continuity",
    body: "Succession, transfer of responsibility, institutional memory and next-generation preparation are addressed before transitions become urgent.",
  },
  {
    n: "05",
    title: "Risk & Resilience",
    body: "The Office coordinates financial, operational, legal, cyber, reputational and continuity risks through preventive controls, independent challenge and tested response arrangements.",
  },
  {
    n: "06",
    title: "Administration & Coordination",
    body: "The Office provides the institutional coordination needed across entities, advisers, reporting, records and material family-office obligations, while separating activities by purpose.",
  },
];

export function WhatWeStewardSection() {
  return (
    <section
      id="what-we-steward"
      className="bg-[#f4f1eb] py-16 lg:py-32"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <h2 className="font-serif text-[36px] leading-[40px] text-[#1b2b23] lg:text-[48px] lg:leading-[48px]">
          What we steward
        </h2>
        <p className="mt-4 max-w-[672px] font-serif text-[18px] leading-[28px] text-[rgba(26,26,26,0.7)] lg:mt-6 lg:text-[20px]">
          The public page should explain the Office through responsibilities, not
          through asset lists.
        </p>

        <ul className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 lg:mt-24 lg:grid-cols-3 lg:gap-y-16">
          {items.map((item) => (
            <li key={item.n} className="flex flex-col">
              <span className="pb-4 font-serif text-[36px] leading-[40px] text-[#b89c63]">
                {item.n}
              </span>
              <h3 className="mb-4 border-b border-[rgba(27,43,35,0.15)] pb-4 font-serif text-[24px] font-normal leading-[32px] text-[#1b2b23]">
                {item.title}
              </h3>
              <p className="font-serif text-[18px] leading-[29.25px] xl:w-[390px] text-[rgba(26,26,26,0.8)]">
                {item.body}
              </p>
            </li>
          ))}
        </ul>

        <div className="relative mt-12 h-[240px] overflow-hidden bg-[#1b2b23] lg:mt-24 lg:h-[384px]">
          <Image
            src="/images/about/steward-institutional-architecture.webp"
            alt=""
            fill
            sizes="(min-width: 1280px) 1232px, 100vw"
            className="object-cover opacity-80"
          />
        </div>
      </div>
    </section>
  );
}
