import Image from "next/image";
import Link from "next/link";

const principles = [
  {
    roman: "i",
    number: "01",
    mobile: <>The Office serves one family.</>,
    desktop: (
      <>
        The Office serves
        <br />
        one family.
      </>
    ),
  },
  {
    roman: "ii",
    number: "02",
    mobile: (
      <>
        It does not solicit or accept third-party
        <br />
        capital, or manage external client
        <br />
        assets.
      </>
    ),
    desktop: (
      <>
        It does not solicit
        <br />
        or accept third-
        <br />
        party capital or
        <br />
        manage external
        <br />
        client assets.
      </>
    ),
  },
  {
    roman: "iii",
    number: "03",
    mobile: (
      <>
        It does not offer investment products
        <br />
        to the public.
      </>
    ),
    desktop: (
      <>
        It does not offer
        <br />
        investment
        <br />
        products to the
        <br />
        public.
      </>
    ),
  },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#1a332a] lg:h-[640px]"
    >
      {/* Mobile background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.42] mix-blend-luminosity lg:hidden"
      >
        <Image
          src="/images/home/hero-arch-mobile.webp"
          alt=""
          width={1832}
          height={1290}
          priority
          sizes="(min-width: 1024px) 0px, 1832px"
          className="absolute left-[-184.94%] top-0 h-full w-[469.87%] max-w-none"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[rgba(26,51,42,0.35)] lg:hidden"
      />

      {/* Desktop background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block"
      >
        <Image
          src="/images/home/hero-lake-desktop.webp"
          alt=""
          width={2200}
          height={1238}
          priority
          sizes="(min-width: 1024px) 104vw, 0px"
          className="absolute left-[-2.06%] top-[-27.93%] h-[131.56%] w-[103.91%] max-w-none"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden lg:block"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(20,42,34,0.86) 0%, rgba(20,42,34,0.62) 42%, rgba(20,42,34,0.25) 70%, rgba(20,42,34,0.35) 100%), linear-gradient(0deg, rgba(20,42,34,0.55) 0%, rgba(20,42,34,0) 45%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col px-6 pb-[137.8px] pt-[152px] lg:block lg:h-full lg:max-w-[1248px] lg:px-8 lg:pb-0 lg:pt-0">
        <div className="lg:absolute lg:left-[31.5px] lg:top-[90px] lg:w-[668px] lg:max-w-full">
          <div className="h-px w-[120px] bg-twine lg:w-[64px]" />

          <p className="mt-10 hidden text-[11px] font-semibold uppercase leading-[14.3px] tracking-[1.76px] text-twine lg:mt-[10px] lg:block lg:pt-[6px]">
            McLeod Family Office
          </p>

          <h1 className="flow-root mt-10 max-w-[349.14px] whitespace-nowrap font-serif text-[44px] font-normal not-italic leading-[48.4px] tracking-[-0.66px] text-spring-wood lg:mt-[10.7px] lg:max-w-none lg:text-[64px] lg:leading-[70.84px] lg:tracking-[-0.64px] lg:max-xl:whitespace-normal">
            <span className="-mt-[2.06px] mb-[2.78px] block lg:-mt-[2.14px] lg:mb-[14.58px]">
              A private family <br className="lg:hidden" />
              office <br className="max-xl:hidden" />
              stewarding <br className="lg:hidden" />
              capital and <br className="max-xl:hidden" />
              legacy <br className="lg:hidden" />
              across generations.
            </span>
          </h1>

          <p className="mt-[47.28px] max-w-[374.55px] whitespace-nowrap text-[18px] leading-[27.9px] text-spring-wood lg:mt-0 lg:max-w-[478.59px] lg:text-[17px] lg:leading-[27.2px] lg:max-xl:whitespace-normal xl:max-w-none">
            One family. One coordinating institution. <br className="lg:hidden" />
            McLeod Family <br className="max-xl:hidden" />
            Office provides a long-
            <br className="lg:hidden" />
            term institutional layer for the <br className="lg:hidden" />
            <br className="max-xl:hidden" />
            stewardship of enterprise interests, <br className="lg:hidden" />
            capital, governance and <br className="max-xl:hidden" />
            continuity.
          </p>

          <div className="mt-9 flex flex-col items-start gap-3 lg:mt-[28.2px] lg:flex-row lg:flex-wrap lg:gap-[14px]">
            <Link
              href="/contact"
              className="flex h-[52px] min-h-[52px] items-center justify-center whitespace-nowrap rounded-[2px] border border-twine bg-twine px-7 pb-[16.5px] pt-[15.5px] text-[15px] font-medium leading-[18px] text-timber-green lg:h-auto lg:min-h-[48px] lg:gap-[10px] lg:self-stretch lg:rounded-none lg:px-[26px] lg:pb-[14.61px] lg:pt-[14.09px] lg:text-[14px] lg:leading-[16.8px]"
            >
              Contact the Office
              <span aria-hidden="true" className="hidden lg:inline">
                →
              </span>
            </Link>
            <Link
              href="/verification"
              className="flex h-[52px] min-h-[52px] items-center justify-center whitespace-nowrap rounded-[2px] border border-[rgba(244,241,234,0.55)] px-7 pb-[16.5px] pt-[15.5px] text-[15px] font-medium leading-[18px] text-spring-wood lg:h-auto lg:min-h-[48px] lg:self-stretch lg:rounded-none lg:border-[rgba(244,241,234,0.85)] lg:px-[26px] lg:pb-[14.91px] lg:pt-[14.09px] lg:text-[14px] lg:leading-[16.8px]"
            >
              Verify a Communication
            </Link>
          </div>
        </div>

        <ul
          aria-label="Principles of the Office"
          className="mt-[112px] border-t border-[rgba(198,161,91,0.35)] lg:absolute lg:right-[32px] lg:top-[409px] lg:mt-0 lg:grid lg:h-[177.5px] lg:w-[476.67px] lg:max-w-full lg:grid-cols-3 lg:items-start lg:gap-x-[31px] lg:border-l lg:border-t-0 lg:border-[rgba(244,241,234,0.45)] lg:pl-8 lg:pt-2"
        >
          {principles.map((item) => (
            <li
              key={item.number}
              className="flex items-start gap-4 border-t border-[rgba(198,161,91,0.35)] py-7 pr-8 first:border-t-0 lg:block lg:border-t-0 lg:py-0 lg:pr-0"
            >
              <div className="font-serif text-[28px] leading-[28px] text-twine lg:mb-[15px] lg:w-full lg:border-b lg:border-twine lg:pb-3 lg:font-sans lg:text-[20px] lg:leading-normal">
                <span className="lg:hidden">{item.roman}</span>
                <span className="hidden lg:inline">{item.number}</span>
              </div>
              <p className="whitespace-nowrap text-[15px] leading-[23.25px] text-spring-wood lg:leading-[22.5px]">
                <span className="lg:hidden">{item.mobile}</span>
                <span className="hidden lg:inline">{item.desktop}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
