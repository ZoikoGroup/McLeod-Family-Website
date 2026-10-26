import Image from "next/image";
import Link from "next/link";

export function ResponsibleOwnershipHeroSection() {
  return (
    <section
      id="responsible-ownership-hero"
      aria-label="Responsible Ownership Hero"
      className="relative w-full overflow-hidden bg-[#23463a] min-h-[794px] flex items-center lg:items-start"
    >
      {/* Background Image */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/images/responsible-ownership/hero-responsible-ownership.png"
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
          STEWARDSHIP / RESPONSIBLE OWNERSHIP
        </p>

        <h1 className="pt-4 font-serif text-[40px] leading-[44px] sm:text-[56px] sm:leading-[59px] text-[#f4f1ea]">
          Responsible Ownership
        </h1>

        <p className="pt-6 font-serif text-[20px] leading-[29px] text-[#f4f1ea] max-w-[800px] sm:whitespace-nowrap">
          Long-term responsibility. Clear lines of authority.
        </p>

        <p className="pt-6 font-serif text-[17px] leading-[26px] text-[#f4f1ea] max-w-[800px]">
          Responsible ownership calls for durable judgment about enterprise interests, governance and the
          <br className="hidden lg:inline" />{" "}
          responsibilities that follow from capital and control. McLeod Family Office coordinates owner-level
          <br className="hidden lg:inline" />{" "}
          stewardship within defined mandates, with attention to purpose, resilience, accountability and continuity.
        </p>

        <p className="pt-6 font-serif text-[17px] leading-[26px] text-[#f4f1ea] max-w-[800px]">
          Operating businesses remain governed and managed by their own boards and executives. The Office’s public
          <br className="hidden lg:inline" />{" "}
          description does not identify the legal owner of any particular business or authorize transactions on behalf of a
          <br className="hidden lg:inline" />{" "}
          separate entity.
        </p>

        <div className="mt-4 max-w-[800px] border-l-2 border-[#d3a75a] py-1 pl-4">
          <p className="font-serif text-[17px] leading-[26px] text-[#f4f1ea]">
            McLeod Family Office is a private single-family office. It does not solicit third-party investment capital,
            <br className="hidden lg:inline" />{" "}
            manage external client assets or offer public investment products through this website.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-8">
          <Link
            href="/stewardship/our-stewardship-philosophy"
            className="inline-flex min-h-[48px] items-center justify-center border border-[#d3a75a] bg-[#d3a75a] px-6 py-3 font-serif text-[17px] leading-[26px] text-[#34322e] transition-opacity hover:opacity-90"
          >
            Explore Enterprise Stewardship
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
