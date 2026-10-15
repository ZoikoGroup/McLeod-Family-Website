import Image from "next/image";
import Link from "next/link";

type Entry = {
  id: string;
  term: React.ReactNode;
  mobileValue: string;
  desktopValue: React.ReactNode;
  desktopWidth: string;
  valueClass?: string;
};

const entries: Entry[] = [
  {
    id: "registered-name",
    term: (
      <>
        Registered <br className="hidden lg:block" />
        name
      </>
    ),
    mobileValue: "[LEGAL NAME]",
    desktopValue: (
      <>
        McLeod Family
        <br />
        Office Limited
      </>
    ),
    desktopWidth: "lg:w-[161.92px]",
  },
  {
    id: "jurisdiction",
    term: "Jurisdiction",
    mobileValue: "[JURISDICTION]",
    desktopValue: (
      <>
        Scotland, United
        <br />
        Kingdom
      </>
    ),
    desktopWidth: "lg:w-[161.94px]",
  },
  {
    id: "registry-number",
    term: (
      <>
        Registry <br className="hidden lg:block" />
        number
      </>
    ),
    mobileValue: "[NUMBER]",
    desktopValue: "SC648217",
    desktopWidth: "lg:w-[161.92px]",
  },
  {
    id: "registered-office",
    term: (
      <>
        Registered <br className="hidden lg:block" />
        office
      </>
    ),
    mobileValue: "[PUBLIC REGISTERED OFFICE]",
    desktopValue: (
      <>
        27 Melville
        <br />
        Street, Edinburgh
        <br />
        EH3 7JF
      </>
    ),
    desktopWidth: "lg:w-[161.94px]",
  },
  {
    id: "canonical-domain",
    term: (
      <>
        Canonical <br className="hidden lg:block" />
        domain
      </>
    ),
    mobileValue: "[CANONICAL DOMAIN]",
    desktopValue: "mcleodfamilyoffice.co.uk",
    desktopWidth: "lg:w-[185px]",
    valueClass: "lg:text-[13px]",
  },
];

export function EntityOfRecordSection() {
  return (
    <section
      id="entity-of-record"
      aria-labelledby="entity-of-record-heading"
      className="relative mx-[24px] -mt-[41px] flex flex-col gap-[28px] border border-t-[3px] border-[#c6a15b] bg-spring-wood px-[24px] py-[28px] lg:mt-[28px] lg:w-full lg:mx-auto lg:max-w-[1184px] lg:flex-row lg:items-center lg:justify-start lg:overflow-x-auto xl:justify-center xl:overflow-visible lg:gap-0 lg:border-t lg:border-pavlova lg:bg-ivory lg:p-0"
    >
      <div className="flex flex-col gap-[15.65px] lg:w-[219.36px] xl:shrink-0 lg:shrink lg:gap-0 lg:px-[22px] lg:py-[26px]">
        <h2
          id="entity-of-record-heading"
          className="h-[28px] whitespace-nowrap font-serif text-[21px] font-normal leading-[27.3px] text-dune lg:h-auto lg:text-[26px] lg:leading-[31.2px]"
        >
          Entity of record
        </h2>
        <p className="whitespace-nowrap pr-[5.11px] text-[14px] leading-[21px] text-[#6b675f] lg:hidden">
          These details match the public corporate
          <br />
          register.{" "}
          <Link href="/verification" className="text-kumera underline">
            Check them on [PUBLIC REGISTER]
          </Link>
        </p>
      </div>

      <dl className="flex w-full flex-col gap-[20px] lg:contents">
        {entries.map((e) => (
          <div
            key={e.id}
            className={`h-[107.78px] border-b border-swirl lg:flex lg:h-auto xl:shrink-0 lg:shrink lg:flex-col lg:gap-[8px] lg:border-b-0 lg:border-l lg:border-sisal lg:px-[22px] lg:py-[26px] ${e.desktopWidth}`}
          >
            <dt className="-mt-px pb-[0.59px] text-[12px] font-semibold uppercase leading-[15.6px] tracking-[1.44px] text-kumera lg:mt-0 lg:whitespace-normal lg:pb-0 lg:text-[10px] lg:leading-[13px] lg:tracking-[1.6px]">
              {e.term}
            </dt>
            <dd
              className={`mt-[10px] whitespace-nowrap text-[16px] font-medium leading-[23.2px] text-dune lg:mt-0 lg:text-[14px] lg:font-normal lg:leading-[21px] ${e.valueClass ?? ""}`}
            >
              <span className="lg:hidden">{e.mobileValue}</span>
              <span className="hidden lg:inline">{e.desktopValue}</span>
            </dd>
            <dd className="mt-[10px] lg:hidden">
              <button
                type="button"
                aria-label={`Copy ${e.mobileValue}`}
                className="flex min-h-[32px] items-center gap-[8px] py-[8.2px] text-[13px] leading-[15.6px] text-kumera"
              >
                <Image
                  src="/images/home/entity-icon-copy.svg"
                  alt=""
                  width={14}
                  height={14}
                  aria-hidden="true"
                />
                Copy
              </button>
            </dd>
          </div>
        ))}
      </dl>

      <div className="hidden whitespace-nowrap border-l border-sisal pb-[26.19px] pl-[22px] pr-[22px] pt-[27px] text-[13px] text-kumera lg:flex lg:w-[153px] xl:shrink-0 lg:shrink lg:flex-col lg:gap-[1.19px]">
        <Link href="/verification" className="flex flex-col gap-[1.19px] leading-[18.2px]">
          <span className="underline decoration-from-font [text-underline-position:from-font]">
            View on
          </span>
          <span>
            <span className="underline decoration-from-font [text-underline-position:from-font]">
              Public Register{" "}
            </span>
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
