import Image from "next/image";
import Link from "next/link";

export function PhilanthropyLegacyHeroSection() {
  return (
    <section
      id="philanthropy-legacy-hero"
      aria-label="Philanthropy & Legacy Hero"
      className="relative w-full overflow-hidden bg-[#23463A] min-h-[780px] flex items-center lg:items-start"
    >
      {/* Background Image */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/images/philanthropy-and-legacy/philanthropy-legacy-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Linear Gradient Overlay: 90deg, #23463a@95% to #23463a@70% */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(35, 70, 58, 0.95) 0%, rgba(35, 70, 58, 0.7) 100%)",
        }}
      />

      {/* Content Container */}
      <div className="relative mx-auto w-full max-w-[1280px] px-6 pt-24 pb-20 lg:pt-[106px] lg:pb-[107px]">
        {/* Eyebrow */}
        <p className="font-serif text-[13px] leading-[18.85px] tracking-[0.05em] uppercase text-[#D3A75A]">
          Philanthropy & Legacy
        </p>

        {/* Heading 1 */}
        <h1 className="pt-4 font-serif text-[40px] leading-[44px] sm:text-[56px] sm:leading-[58.8px] text-[#F4F1EA]">
          Philanthropy & Legacy
        </h1>

        {/* Subtitle Paragraph */}
        <p className="pt-6 font-serif text-[20px] leading-[29px] text-[#F4F1EA] max-w-[800px]">
          Long-term stewardship includes preparing people, institutions and responsibilities for the
          <br className="hidden md:inline" />{" "}
          generations ahead. Where philanthropic activity is undertaken within an approved mandate,
          <br className="hidden md:inline" />{" "}
          it is governed through purpose-appropriate structures and kept separate from the family’s
          <br className="hidden md:inline" />{" "}
          commercial and investment interests.
        </p>

        {/* Body Paragraph */}
        <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#F4F1EA] max-w-[800px]">
          McLeod Family Office coordinates responsibilities within defined mandates. A purpose-specific philanthropic
          <br className="hidden md:inline" />{" "}
          entity or program, where actually established, must retain its own legal identity, decision authority and
          <br className="hidden md:inline" />{" "}
          compliance obligations. This website does not solicit public donations.
        </p>

        {/* Callout Box with left border */}
        <div className="pt-4">
          <div className="border-l border-[#D3A75A] pl-4 max-w-[800px]">
            <p className="font-serif text-[17px] leading-[26.35px] text-[#F4F1EA] max-w-[782px]">
              McLeod Family Office is a private single-family office. It does not solicit third-party investment capital,
              <br className="hidden md:inline" />{" "}
              manage assets for external clients or offer investment products to the public. It does not solicit public
              <br className="hidden md:inline" />{" "}
              donations through this website.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-8">
          <Link
            href="/verification"
            className="inline-flex min-h-[53px] items-center justify-center border border-[#D3A75A] bg-[#D3A75A] px-6 py-3 font-serif text-[17px] leading-[26.35px] text-[#34322E] transition-opacity hover:opacity-90"
          >
            Open the Verification Centre
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-[53px] items-center justify-center border border-[#F4F1EA] bg-transparent px-6 py-3 font-serif text-[17px] leading-[26.35px] text-[#F4F1EA] transition-colors hover:bg-white/10"
          >
            Contact the Office
          </Link>
        </div>
      </div>
    </section>
  );
}
