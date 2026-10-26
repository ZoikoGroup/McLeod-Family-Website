import Image from "next/image";
import Link from "next/link";

export function GenerationalStewardshipHeroSection() {
  return (
    <section
      id="generational-stewardship-hero"
      aria-label="Generational Stewardship Hero"
      className="relative w-full overflow-hidden bg-[#23463a] min-h-[810px] flex items-center lg:items-start"
    >
      {/* Background Image */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/images/generational-stewardship/hero-generational-stewardship.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Linear Gradient Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(35, 70, 58, 0.95) 0%, rgba(35, 70, 58, 0.7) 100%)",
        }}
      />

      {/* Content Container */}
      <div className="relative mx-auto w-full max-w-[1280px] px-6 pt-24 pb-20 lg:pt-[120px] lg:pb-24">
        <p className="font-serif text-[13px] leading-[19px] tracking-[0.05em] uppercase text-[#d3a75a]">
          STEWARDSHIP / CONTINUITY
        </p>

        <h1 className="pt-4 font-serif text-[40px] leading-[44px] sm:text-[56px] sm:leading-[59px] text-[#f4f1ea]">
          Generational Stewardship
        </h1>

        <p className="pt-6 font-serif text-[20px] leading-[29px] text-[#f4f1ea] max-w-[800px] sm:whitespace-nowrap">
          Prepare responsibility before responsibility changes hands.
        </p>

        <p className="pt-6 font-serif text-[17px] leading-[26px] text-[#f4f1ea] max-w-[880px]">
          At McLeod Family Office, generational stewardship means treating continuity as a present responsibility. It
          <br className="hidden lg:inline" />{" "}
          brings together thoughtful succession, preparation of future stewards, institutional memory, planned authority
          <br className="hidden lg:inline" />{" "}
          and periodic review.
        </p>

        <p className="pt-6 font-serif text-[17px] leading-[26px] text-[#f4f1ea] max-w-[880px]">
          The Office coordinates these disciplines within defined mandates. Personal circumstances, family
          <br className="hidden lg:inline" />{" "}
          arrangements, legal instruments and the individuals involved remain private.
        </p>

        <div className="mt-6 max-w-[880px] border-l-2 border-[#d3a75a] py-1 pl-4">
          <p className="font-serif italic text-[18px] sm:text-[20px] leading-[29px] text-[#f4f1ea]">
            &ldquo;Succession, transfer of responsibility, institutional memory and next-generation preparation are
            <br className="hidden lg:inline" />{" "}
            addressed before transitions become urgent.&rdquo;
          </p>
        </div>

        <div className="mt-4 max-w-[880px] border-l-2 border-[#d3a75a] py-1 pl-4">
          <p className="font-serif text-[17px] leading-[26px] text-[#f4f1ea]">
            McLeod Family Office is a private single-family office. It does not solicit third-party investment capital, manage external
            <br className="hidden lg:inline" />{" "}
            client assets or offer public investment products through this website.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-8">
          <Link
            href="/stewardship/our-stewardship-philosophy"
            className="inline-flex min-h-[48px] items-center justify-center border border-[#d3a75a] bg-[#d3a75a] px-6 py-3 font-serif text-[17px] leading-[26px] text-[#34322e] transition-opacity hover:opacity-90"
          >
            Explore continuity in Stewardship
          </Link>
          <Link
            href="/verification"
            className="inline-flex min-h-[48px] items-center justify-center border border-[#f4f1ea] bg-transparent px-6 py-3 font-serif text-[17px] leading-[26px] text-[#f4f1ea] transition-colors hover:bg-white/10"
          >
            Open the Verification Centre
          </Link>
        </div>
      </div>
    </section>
  );
}
