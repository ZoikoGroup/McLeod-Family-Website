import Image from "next/image";
import Link from "next/link";

type Responsibility = {
  number: string;
  title: string;
  /** Description lines exactly as broken in the desktop design. */
  desktopLines: string[];
  /** Description lines exactly as broken in the mobile design (only the open card shows one). */
  mobileLines?: string[];
  mobileLabel: string;
  mobileHeight: string;
  chips?: string[];
  ariaLabel: string;
  image: string;
  imageClass: string;
  textured: boolean;
};

const responsibilities: Responsibility[] = [
  {
    number: "01",
    title: "Enterprise",
    desktopLines: [
      "Ownership positions in operating",
      "businesses are overseen through stated",
      "ownership principles, board discipline and a",
      "defined reporting cycle.",
    ],
    mobileLines: [
      "Ownership positions in operating",
      "businesses are overseen through",
      "stated ownership principles, board",
      "discipline and a defined reporting",
      "cycle.",
    ],
    mobileLabel: "Ownership discipline",
    mobileHeight: "h-[440px]",
    chips: [
      "Stated ownership principles",
      "Board discipline",
      "Defined reporting cycle",
    ],
    ariaLabel: "Show how enterprise is held",
    image: "/images/home/stewardship-enterprise.webp",
    imageClass: "absolute inset-0 size-full object-cover",
    textured: false,
  },
  {
    number: "02",
    title: "Capital",
    desktopLines: [
      "Allocation, liquidity and risk are set to a",
      "long-horizon framework, with concentration",
      "and drawdown governed deliberately rather",
      "than opportunistically.",
    ],
    mobileLabel: "Capital policy",
    mobileHeight: "h-[300px]",
    ariaLabel: "Show how capital is held",
    image: "/images/home/stewardship-capital.webp",
    imageClass: "absolute inset-0 size-full object-cover",
    textured: true,
  },
  {
    number: "03",
    title: "Continuity",
    desktopLines: [
      "Succession, decision rights and the transfer",
      "of responsibility are settled in advance and",
      "reviewed on a defined schedule, not at the",
      "point of need.",
    ],
    mobileLabel: "Succession and decision rights",
    mobileHeight: "h-[300px]",
    ariaLabel: "Show how continuity is held",
    image: "/images/home/stewardship-continuity.webp",
    imageClass:
      "absolute left-0 top-[-106.15%] h-[258.64%] w-full max-w-none",
    textured: true,
  },
];

function Lines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((line, i) => (
        <span key={line}>
          {line}
          {i < lines.length - 1 ? <br /> : null}
        </span>
      ))}
    </>
  );
}

export function StewardshipSection() {
  return (
    <section
      id="stewardship"
      aria-labelledby="stewardship-heading"
      className="mt-[144px] flex w-full flex-col items-start bg-timber-green py-[128px] lg:mt-[28px] lg:px-[64px] lg:pb-[80px] lg:pt-[116px]"
    >
      <div className="flex w-full max-w-[1280px] flex-col items-start gap-[64px] px-[24px] lg:mx-auto lg:max-w-[1312px] lg:gap-[40px] lg:px-[64px]">
        {/* Header */}
        <div className="flex w-full flex-col items-start lg:flex-row lg:items-end lg:gap-[213.88px]">
          <div className="flex w-full flex-col items-start gap-[19.085px] lg:min-w-px lg:flex-1 lg:gap-[17.015px]">
            <p className="w-full pb-[0.59px] text-[12px] font-semibold uppercase leading-[15.6px] tracking-[1.44px] text-twine lg:pb-0 lg:h-[15px] lg:text-[11px] lg:leading-[14.3px] lg:tracking-[1.76px]">
              Stewardship
            </p>
            <h2
              id="stewardship-heading"
              className="w-full font-serif text-[34px] font-normal leading-[38px] tracking-[-0.34px] text-spring-wood lg:text-[42px] lg:leading-[47px] lg:tracking-normal"
            >
              Three
              <br className="lg:hidden" />
              <span className="hidden lg:inline"> </span>
              responsibilities,
              <br />
              held separately.
            </h2>
          </div>
          <div className="w-full max-w-[470.01px] text-[16px] leading-[25.6px] text-foggy-gray lg:h-[52.19px] lg:w-[394.13px] lg:max-w-[394.13px] lg:shrink-0 lg:text-[14px] lg:leading-[23.1px] lg:text-spring-wood">
            <p className="whitespace-nowrap lg:relative lg:top-[-0.55px]">
              <span className="lg:hidden">
                Each responsibility has its own principles,
                <br />
                controls and review cycle. Select one to read
                <br />
                how it is held.
              </span>
              <span className="hidden lg:inline">
                Each responsibility has its own principles, controls and
                <br />
                review cycle. Select one to read how it is held.
              </span>
            </p>
          </div>
        </div>

        {/* Mobile: stacked cards */}
        <ul className="flex w-full flex-col gap-[12px] lg:hidden">
          {responsibilities.map((item) => (
            <li key={item.number}>
              <Link
                href="/stewardship/our-stewardship-philosophy"
                aria-label={item.ariaLabel}
                className={`relative block w-[342px] max-w-full overflow-clip rounded-[2px] bg-timber-green ${item.mobileHeight}`}
              >
                <div className="absolute left-[28px] right-[28px] top-[28px] flex items-center justify-between gap-[8px]">
                  <span className="font-serif text-[22px] text-twine">
                    {item.number}
                  </span>
                  <span className="text-[12px] uppercase tracking-[1.44px] text-spring-wood">
                    {item.mobileLabel}
                  </span>
                </div>
                <div
                  className={`absolute inset-x-0 flex flex-col items-start gap-[14px] border-t border-twine/45 bg-timber-green/[0.86] p-[32px] ${
                    item.chips ? "bottom-[-1.06px]" : "bottom-[-0.61px]"
                  }`}
                >
                  <h3 className="w-full font-serif text-[34px] font-normal leading-[37.4px] text-spring-wood">
                    {item.title}
                  </h3>
                  {item.mobileLines ? (
                    <p className="w-full max-w-[430.84px] text-[16px] leading-[25.6px] text-spring-wood">
                      <Lines lines={item.mobileLines} />
                    </p>
                  ) : null}
                  {item.chips ? (
                    <ul className="flex w-full flex-col items-start justify-center gap-[6.6px] pt-[3px]">
                      {item.chips.map((chip) => (
                        <li
                          key={chip}
                          className="flex h-[35px] flex-col items-start rounded-[2px] border border-twine/55 px-[12px]"
                        >
                          <span className="flex items-start rounded-[2px] border border-twine/55 px-[12px] py-[7.5px] text-[13px] leading-[15.6px] whitespace-nowrap text-spring-wood">
                            {chip}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop: three cards */}
        <ul className="hidden w-full items-start justify-center gap-[20px] lg:flex">
          {responsibilities.map((item) => (
            <li
              key={item.number}
              className="relative isolate flex min-w-px flex-1 flex-col items-start border border-twine/45 bg-celtic"
            >
              <article className="flex w-full flex-col">
                <div className="relative z-[2] flex h-[220px] w-full flex-col items-start justify-center overflow-clip">
                  <div aria-hidden className="pointer-events-none absolute inset-0 bg-[#142a22]">
                    <Image
                      src={item.image}
                      alt=""
                      width={800}
                      height={item.title === "Enterprise" ? 422 : 1200}
                      sizes="(min-width: 1440px) 381px, 30vw"
                      className={item.imageClass}
                    />
                  </div>
                  <p className="absolute left-0 top-0 bg-timber-green px-[16px] py-[10px] text-[14px] text-spring-wood">
                    {item.number}
                  </p>
                </div>
                <div className="relative z-[1] flex w-full items-end gap-[20px] px-[24px] pb-[26px] pt-[24px]">
                  <div className="flex min-w-px flex-1 flex-col items-start gap-[10.695px]">
                    <h3 className="w-full font-serif text-[30px] font-normal leading-[33px] text-spring-wood">
                      {item.title}
                    </h3>
                    <p className="h-[84px] w-full text-[13px] leading-[20.8px] text-spring-wood">
                      <Lines lines={item.desktopLines} />
                    </p>
                  </div>
                  <Link
                    href="/stewardship/our-stewardship-philosophy"
                    aria-label={item.ariaLabel}
                    className="flex size-[44px] shrink-0 items-center justify-center rounded-[22px] border border-twine"
                  >
                    <Image
                      src="/images/home/stewardship-arrow.svg"
                      alt=""
                      width={18}
                      height={18}
                      className="size-[18px]"
                    />
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
