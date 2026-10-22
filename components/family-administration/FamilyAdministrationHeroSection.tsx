import Image from "next/image";
import Link from "next/link";

export function FamilyAdministrationHeroSection() {
  return (
    <section
      id="family-administration-hero"
      aria-label="Family Administration and Reporting Hero"
      className="relative w-full overflow-hidden bg-[#23463A] min-h-[778px] flex items-center lg:items-start"
    >
      {/* Background Image */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/images/family-administration/family-administration-hero.png"
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
        <p className="pb-4 font-serif text-[13px] leading-[18.85px] tracking-[0.05em] uppercase text-[#D3A75A]">
          Family Administration &amp; Reporting
        </p>

        <h1 className="pb-6 font-serif text-[40px] leading-[44px] sm:text-[56px] sm:leading-[58.8px] text-[#F4F1EA] max-w-[864px]">
          Family Administration &amp; Reporting
        </h1>

        <p className="pb-6 font-serif text-[20px] leading-[29px] text-[#F4F1EA] max-w-[800px]">
          Institutional stewardship requires reliable coordination between responsibilities, records, advisers and the information used for decisions. McLeod Family Office supports that coordination within defined mandates, while each relevant entity and specialist retains the responsibilities assigned to it.
        </p>

        <p className="pb-6 font-serif text-[17px] leading-[26.35px] text-[#F4F1EA] max-w-[800px]">
          The Office’s public role is to help maintain clarity and continuity across material administrative obligations—not to disclose private family affairs or offer administrative services to outside clients. The information below describes an institutional approach rather than a list of operational systems or service commitments.
        </p>

        <div className="py-4 max-w-[800px]">
          <div className="border-l-2 border-[#D3A75A] pl-4">
            <p className="font-serif text-[17px] leading-[26.35px] text-[#F4F1EA]/90">
              McLeod Family Office is a private single-family office. It does not solicit third-party investment capital, manage assets for external clients or offer investment products to the public.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-8">
          <Link
            href="/contact"
            className="inline-flex min-h-[48px] items-center justify-center border border-[#D3A75A] bg-[#D3A75A] px-6 py-3 font-serif text-[17px] leading-[26.35px] text-[#34322E] transition-opacity hover:opacity-90"
          >
            Contact the Office
          </Link>
          <Link
            href="/verification"
            className="inline-flex min-h-[48px] items-center justify-center border border-[#F4F1EA] bg-transparent px-6 py-3 font-serif text-[17px] leading-[26.35px] text-[#F4F1EA] transition-colors hover:bg-white/10"
          >
            Verify a Communication
          </Link>
        </div>
      </div>
    </section>
  );
}
