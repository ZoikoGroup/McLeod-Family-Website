import Image from "next/image";
import Link from "next/link";

export function AboutHeroSection() {
  return (
    <section
      id="about-hero"
      className="relative overflow-hidden bg-[#1b2b23] text-[#f4f1eb] lg:h-[791px]"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/images/about/abouthero-misty-mountains.webp"
          alt=""
          width={2400}
          height={1340}
          priority
          sizes="100vw"
          className="absolute left-0 top-0 h-full w-full max-w-none object-cover lg:top-[-0.79%] lg:h-[101.61%] lg:w-[113.03%] lg:object-fill"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b2b23] via-[rgba(27,43,35,0.9)] via-50% to-[rgba(27,43,35,0)]" />
      </div>
      <div className="relative mx-auto w-full max-w-[1280px] px-6 py-16 lg:ml-[95px] lg:w-[1280px] lg:py-0 lg:pt-[48px]">
        <div className="max-w-[896px]">
          <p className="font-serif text-[14px] uppercase leading-[20px] tracking-[1.4px] text-[#b89c63] lg:whitespace-nowrap">
            About McLeod Family Office
          </p>
          <h1 className="pt-6 font-serif text-[40px] font-normal leading-[44px] text-[#f4f1eb] sm:text-[52px] sm:leading-[56px] lg:w-[896px] lg:text-[72px] lg:leading-[72px]">
            A private family office
            <br className="hidden lg:block" /> stewarding capital and legacy
            <br className="hidden lg:block" /> across generations.
          </h1>
          <div className="pt-8">
            <div className="border-l-2 border-[#b89c63] pl-6 lg:w-[760px]">
              <p className="font-serif text-[20px] leading-[28px] text-[rgba(244,241,235,0.9)] lg:w-[734px] lg:text-[24px] lg:leading-[32px]">
                McLeod Family Office is the private institutional office of the McLeod family. It
                coordinates the long-term stewardship of the family’s enterprise interests, capital,
                governance and continuity across generations.
              </p>
              <p className="pt-6 font-serif text-[18px] leading-[26px] text-[rgba(244,241,235,0.7)] lg:w-[734px] lg:text-[20px] lg:leading-[28px]">
                The Office serves one family. It does not solicit or accept third-party investment
                capital, manage external client assets, or offer investment products or investment
                advisory services to the public.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-stretch gap-4 pt-10 sm:flex-row sm:items-start lg:h-[119px] lg:w-[896px] lg:pt-14">
            <Link
              href="/verification"
              className="flex items-center justify-center bg-[#b89c63] px-8 py-4 text-center font-sans text-[14px] font-medium leading-[16.8px] text-[#1a332a] lg:h-full lg:w-[198px]"
            >
              Verify McLeod
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center border border-[#d7d6ce] px-8 py-4 text-center font-sans text-[14px] font-medium leading-[16.8px] text-[#f4f1ea] lg:h-full"
            >
              Contact the Office
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
