import Image from "next/image";
import Link from "next/link";

export function CapitalInvestmentsHeroSection() {
  return (
    <section
      id="capital-investments-hero"
      aria-label="Capital and Investments Hero"
      className="relative w-full overflow-hidden bg-[#23463A] min-h-[780px] flex items-center lg:items-start"
    >
      {/* Background Image */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/images/capital-and-investments/capital-investments-hero.png"
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
            "linear-gradient(90deg, rgba(35, 70, 58, 0.9) 0%, rgba(35, 70, 58, 0.6) 100%)",
        }}
      />

      {/* Content Container */}
      <div className="relative mx-auto w-full max-w-[1280px] px-6 pt-24 pb-20 lg:pt-[197px] lg:pb-24">
        <p className="font-serif text-[13px] leading-[18.85px] tracking-[0.05em] uppercase text-[#F4F1EA]/80">
          Our Activities · Capital & Investments
        </p>

        <h1 className="pt-4 font-serif text-[40px] leading-[44px] sm:text-[56px] sm:leading-[58.8px] text-[#F4F1EA]">
          Capital & Investments
        </h1>

        <p className="pt-6 font-serif text-[20px] leading-[29px] text-[#F4F1EA]/90 max-w-[760px]">
          Patient capital. Deliberate risk. Preserved optionality.
        </p>

        <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#F4F1EA] max-w-[760px]">
          McLeod Family Office coordinates the stewardship of family capital within defined mandates. Its long-horizon approach considers governance, liquidity, concentration, resilience, risk and responsible review across cycles and generations.
        </p>

        <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#F4F1EA] max-w-[760px]">
          The Office serves one family. It does not solicit or accept third-party investment capital, manage assets for external clients or offer investment products to the public.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-8">
          <Link
            href="/verification"
            className="inline-flex min-h-[48px] items-center justify-center border border-[#D3A75A] bg-[#D3A75A] px-6 py-3 font-serif text-[17px] leading-[26.35px] text-[#34322E] transition-opacity hover:opacity-90"
          >
            Verify a Communication
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-[48px] items-center justify-center border border-[#F4F1EA] bg-transparent px-6 py-3 font-serif text-[17px] leading-[26.35px] text-[#F4F1EA] transition-colors hover:bg-white/10"
          >
            Contact the Office
          </Link>
        </div>
      </div>
    </section>
  );
}
