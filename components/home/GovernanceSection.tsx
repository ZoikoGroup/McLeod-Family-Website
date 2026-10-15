import Image from "next/image";

const principles = [
  {
    icon: "/images/home/governance-authority.svg",
    title: (
      <>
        Clarity of authority
      </>
    ),
    body: (
      <>
        Decision rights sit with
        <br className="hidden lg:block" />
        <span className="lg:hidden"> </span>
        named roles and are
        <br className="hidden lg:block" />
        <span className="lg:hidden"> </span>
        recorded, not assumed.
      </>
    ),
    fixedMobile: false,
    nudge: true,
  },
  {
    icon: "/images/home/governance-purpose.svg",
    title: (
      <>
        Separation of
        <br className="hidden lg:block" />
        <span className="lg:hidden"> </span>
        purpose
      </>
    ),
    body: (
      <>
        Distinct activities are held
        <br className="hidden lg:block" />
        <span className="lg:hidden"> </span>
        in structures appropriate to
        <br className="hidden lg:block" />
        <span className="lg:hidden"> </span>
        their purpose and are not
        <br className="hidden lg:block" />
        <span className="lg:hidden"> </span>
        commingled.
      </>
    ),
    fixedMobile: true,
    nudge: false,
  },
  {
    icon: "/images/home/governance-horizon.svg",
    title: (
      <>
        Long-horizon
        <br className="hidden lg:block" />
        <span className="lg:hidden"> </span>
        discipline
      </>
    ),
    body: (
      <>
        Decisions are tested
        <br className="hidden lg:block" />
        <span className="lg:hidden"> </span>
        against multi-generational
        <br className="hidden lg:block" />
        <span className="lg:hidden"> </span>
        objectives before cyclical
        <br className="hidden lg:block" />
        <span className="lg:hidden"> </span>
        ones.
      </>
    ),
    fixedMobile: true,
    nudge: false,
  },
  {
    icon: "/images/home/governance-confidentiality.svg",
    title: <>Confidentiality</>,
    body: (
      <>
        Information is disclosed on
        <br className="hidden lg:block" />
        <span className="lg:hidden"> </span>
        a controlled basis, to
        <br className="hidden lg:block" />
        <span className="lg:hidden"> </span>
        identified counterparties,
        <br className="hidden lg:block" />
        <span className="lg:hidden"> </span>
        through established
        <br className="hidden lg:block" />
        <span className="lg:hidden"> </span>
        channels.
      </>
    ),
    fixedMobile: false,
    nudge: true,
  },
];

export function GovernanceSection() {
  return (
    <section id="governance" className="mt-[144px] w-full bg-spring-wood lg:mt-[83px]">
      <div className="mx-auto grid w-full max-w-[1282px] grid-cols-1 px-6 lg:grid-cols-12 lg:gap-x-6 lg:px-16">
        <div className="flex w-full flex-col items-start gap-[19.1px] lg:col-span-5 lg:gap-[18.7px]">
          <div className="w-full pb-[0.99px]">
            <p className="text-[12px] font-semibold uppercase leading-[15.6px] tracking-[1.44px] text-kumera">
              Governance
            </p>
          </div>
          <h2 className="font-serif text-[34px] font-normal leading-[38px] tracking-[-0.34px] text-dune lg:text-[48px] lg:leading-[52.8px] lg:tracking-[-0.48px]">
            Clear
            <br />
            mandates.
            <br />
            Defined
            <br />
            authority.
          </h2>
          <div className="w-full pt-[12.275px] lg:pt-[13.3px]">
            <p className="text-[18px] leading-[29.7px] text-dune">
              <span className="lg:hidden">
                The Office is the coordinating
                <br />
                institutional layer across the family’s
                <br />
                long-term interests. Responsibilities are
                <br />
                separated by purpose, with decision
                <br />
                rights and controls established for each.
              </span>
              <span className="hidden lg:inline">
                The Office is the coordinating institutional layer across
                <br />
                the family’s long-term interests. Responsibilities are
                <br />
                separated by purpose, with decision rights and controls
                <br />
                established for each.
              </span>
            </p>
          </div>
          <figure className="relative flex h-[328.9px] w-full flex-col overflow-clip bg-timber-green pt-[28.9px] lg:h-[449.3px] lg:pt-[29.3px]">
            <div className="relative min-h-px w-full flex-1">
              <Image
                src="/images/home/governance-column-mobile.webp"
                alt="A stone column supporting two arches against open sky"
                fill
                sizes="342px"
                className="object-cover lg:hidden"
              />
              <Image
                src="/images/home/governance-boardroom-desktop.webp"
                alt="A colleague taking notes at a boardroom table"
                fill
                sizes="(min-width: 1024px) 466px, 0px"
                className="hidden object-cover lg:block"
              />
            </div>
          </figure>
        </div>

        <div className="mt-[0.28px] flex flex-col gap-5 pb-[1.16px] pt-12 lg:mt-0 lg:pb-0 lg:col-span-6 lg:col-start-7 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:pt-0">
          {principles.map((p) => (
            <article
              key={p.icon}
              className={`flex w-full flex-col items-start gap-[15px] border border-swirl bg-spring-wood p-8 lg:h-auto lg:gap-[15.1px] ${
                p.fixedMobile ? "h-[238.08px]" : ""
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.icon} alt="" width={36} height={36} className="size-[36px] shrink-0" />
              <h3 className="w-full font-serif text-[21px] font-normal leading-[28px] text-dune lg:text-[24px] lg:leading-[31.2px]">
                {p.title}
              </h3>
              <p
                className={`w-full text-[16px] leading-[25.6px] text-dune ${
                  p.nudge ? "lg:mt-[2px]" : ""
                }`}
              >
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
