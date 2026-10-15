import Image from "next/image";
import Link from "next/link";

const routes = [
  {
    icon: "/images/home/principle-verify-domain.svg",
    title: ["Canonical", "domain"],
    note: ["mcleodfamily", "office.co.uk"],
    className: "w-[112.3px]",
  },
  {
    icon: "/images/home/principle-verify-correspondence.svg",
    title: ["Correspondence", "domains"],
    note: ["Published", "in Verification", "Centre"],
    className: "w-[112.31px] border-l border-spring-wood/25",
  },
  {
    icon: "/images/home/principle-verify-callback.svg",
    title: ["Independent", "callback", "protocol"],
    note: ["For material", "changes"],
    className: "w-[114.2px] border-l border-spring-wood/25",
  },
  {
    icon: "/images/home/principle-verify-registry.svg",
    title: ["Public", "registry", "reference"],
    note: ["View on", "Companies", "House"],
    className: "w-[114.2px] border-l border-spring-wood/25",
  },
];

const principles = [
  {
    title: ["Clarity of authority"],
    body: ["Decision rights sit with", "named roles and are", "recorded, not assumed."],
    className: "pr-[24px] pt-[4px]",
  },
  {
    title: ["Separation of", "purpose"],
    body: ["Distinct activities are", "held in structures", "appropriate to their", "purpose."],
    className: "border-l border-sisal px-[24px] pt-[3.445px]",
  },
  {
    title: ["Long-horizon", "discipline"],
    body: ["Decisions are tested", "against multi-", "generational", "objectives before", "cyclical ones."],
    className: "border-l border-sisal px-[24px] pt-[3.445px]",
  },
  {
    title: ["Confidentiality &", "security"],
    body: [
      "Information is",
      "disclosed on a",
      "controlled basis, to",
      "identified",
      "counterparties,",
      "through established",
      "channels.",
    ],
    className: "border-l border-sisal px-[24px] pt-[3.445px]",
  },
];

function Lines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((line, i) => (
        <span key={line}>
          {i > 0 && <br />}
          {line}
        </span>
      ))}
    </>
  );
}

export function GuidingPrincipleSection() {
  return (
    <section id="principle" aria-label="Guiding principle" className="mt-0 lg:mt-[28px]">
      {/* Mobile band */}
      <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-timber-green lg:hidden">
        <Image
          src="/images/home/principle-background.webp"
          alt=""
          fill
          sizes="390px"
          className="object-cover opacity-55 mix-blend-luminosity"
        />
        <div className="relative flex min-w-[390px] max-w-[1280px] flex-col items-center gap-[31.075px] px-[24px]">
          <Image
            src="/images/home/principle-logo-mark.webp"
            alt=""
            width={64}
            height={64}
            className="size-[64px]"
          />
          <div className="flex w-full max-w-[522.14px] flex-col items-center pb-[0.805px]">
            <p className="whitespace-nowrap text-center font-serif text-[56px] italic leading-[62.72px] text-spring-wood">
              Preserve
              <br />
              control. Protect
              <br />
              capital. Build
              <br />
              permanence.
            </p>
          </div>
        </div>
      </div>

      {/* Desktop: governance statement */}
      <div className="hidden bg-spring-wood lg:block">
        <div className="mx-auto grid min-h-[340px] w-full max-w-[1312px] grid-cols-[minmax(0,4fr)_minmax(0,8fr)] px-[64px] py-[36px]">
          <div className="flex h-[267.86px] flex-col items-start gap-[17.99px] self-start border-r border-pavlova pr-[48px]">
            <p className="w-full text-[11px] font-semibold uppercase leading-[14.3px] tracking-[1.76px] text-kumera">
              Governance
            </p>
            <p className="w-full font-serif text-[42px] leading-[48.3px] text-dune">
              Preserve control.
              <br />
              Protect capital.
              <br />
              Build permanence.
            </p>
          </div>
          <div className="flex flex-col items-start gap-[32px] pl-[48px]">
            <h2 className="w-full font-serif text-[25px] font-normal leading-[32.5px] text-dune">
              Clear mandates. Defined authority. Disciplined stewardship.
            </h2>
            <ul className="flex w-full items-start justify-center">
              {principles.map((p) => (
                <li
                  key={p.title.join(" ")}
                  className={`flex min-w-px flex-[1_0_0] flex-col items-start gap-[10.8px] text-dune ${p.className}`}
                >
                  <h3 className="w-full text-[14px] font-semibold leading-[18.9px]">
                    <Lines lines={p.title} />
                  </h3>
                  <p className="w-full text-[13px] leading-[20.8px]">
                    <Lines lines={p.body} />
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Desktop: verification routes strip */}
      <div className="mt-[28px] hidden min-h-[244px] bg-timber-green px-[128px] py-[44px] lg:block">
        <div className="mx-auto flex w-full max-w-[1184px] items-center justify-center">
          <div className="flex w-[369.77px] shrink-0 flex-col items-start gap-[12.99px] border-r border-spring-wood/35 pr-[40px]">
            <p className="w-full text-[11px] font-semibold uppercase leading-[14.3px] tracking-[1.76px] text-twine">
              Official verification
            </p>
            <h2 className="w-full font-serif text-[36px] font-normal leading-[41.4px] text-spring-wood">
              Verify before you act.
            </h2>
          </div>
          <ul className="flex w-[507px] shrink-0 items-start gap-[18px]">
            {routes.map((r) => (
              <li
                key={r.icon}
                className={`flex shrink-0 flex-col items-start px-[22px] py-[6px] ${r.className}`}
              >
                <Image src={r.icon} alt="" width={26} height={26} className="size-[26px]" />
                <p className="mt-[7.27px] whitespace-nowrap text-[13px] leading-[17.55px] text-spring-wood">
                  <Lines lines={r.title} />
                </p>
                <p className="mt-[8.72px] whitespace-nowrap text-[12px] leading-[16.2px] text-foggy-gray">
                  <Lines lines={r.note} />
                </p>
              </li>
            ))}
          </ul>
          <div className="flex w-[285.02px] min-w-[250px] shrink-0 flex-col items-start gap-[15px]">
            <Link
              href="/verification"
              className="flex min-h-[48px] w-full items-center justify-center gap-[10px] border border-twine bg-twine px-[26px] py-[14px] text-[14px] font-medium leading-[16.8px] text-timber-green"
            >
              <span className="whitespace-nowrap">Open the Verification Centre</span>
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/verification#report"
              className="flex min-h-[48px] w-full items-center justify-center border border-twine px-[26px] py-[14px] text-center text-[14px] font-medium leading-[16.8px] text-spring-wood"
            >
              <span className="whitespace-nowrap">Report a suspicious communication</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
