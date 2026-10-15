import Image from "next/image";

export function StewardshipHeroSection() {
  return (
    <section
      id="stewardship-hero"
      className="relative w-full overflow-hidden bg-te-papa-green py-20 lg:h-[793px] lg:py-0"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/images/stewardship/hero-stewardship-landscape.webp"
          alt=""
          width={2774}
          height={1504}
          priority
          sizes="100vw"
          className="absolute h-full w-full max-w-none object-cover lg:left-[-2.98%] lg:top-[-5.08%] lg:h-[116.08%] lg:w-[115.96%] lg:object-fill"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-[rgba(35,70,58,0.75)]" />

      <div className="relative w-full max-w-[1280px] px-6 mx-auto lg:mx-0 lg:ml-[max(0px,calc(50%-625px))] lg:pt-[120px]">
        <div className="w-full max-w-[768px]">
          <p className="font-sans text-xs leading-4 tracking-[0.96px] text-twine uppercase">
            Stewardship
          </p>
          <h1 className="pt-6 font-serif text-[40px] leading-[44px] text-spring-wood sm:text-[56px] sm:leading-[60px] lg:w-[768px] lg:text-[72px] lg:leading-[72px]">
            Stewardship at McLeod
            <br className="hidden lg:block" /> Family Office
          </h1>
          <p className="pt-6 font-serif text-2xl leading-8 whitespace-normal text-spring-wood lg:pt-8 lg:text-[30px] lg:leading-9 lg:whitespace-nowrap">
            Three responsibilities, held separately.
          </p>
          <p className="pt-6 font-sans text-lg font-light leading-7 text-[rgba(244,241,234,0.8)] lg:w-[672px] lg:text-xl">
            McLeod Family Office coordinates the long-term stewardship of the family’s enterprise
            interests, capital and continuity through disciplined oversight, defined authority and a
            multi-generational perspective.
          </p>
          <div className="mt-10 w-full max-w-[672px] border-l-2 border-[rgba(244,241,234,0.4)] py-2 pl-6">
            <p className="font-sans text-base font-medium leading-6 text-[rgba(244,241,234,0.7)] lg:w-[646px]">
              The Office serves one family. It does not solicit third-party capital, manage external
              client assets or offer investment products to the public.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
