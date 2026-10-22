import Link from "next/link";

export function ReportingOversightSection() {
  return (
    <section
      id="reporting-supports-oversight"
      aria-label="Reporting supports responsible oversight"
      className="w-full border-t border-[#D6D1C6] pt-12"
    >
      <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-[#23463A]">
        Reporting supports responsible oversight.
      </h2>

      <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#34322E] max-w-[890px]">
        The Office’s broader stewardship mandate recognizes reporting as part of accountable governance. Relevant
        <br className="hidden lg:inline" /> information can support review and escalation by the roles responsible for a matter. The frequency, content
        <br className="hidden lg:inline" /> and authority for internal reports depend on the specific entity and mandate and are not published on this
        <br className="hidden lg:inline" /> website.
      </p>

      <div className="pt-6">
        <Link
          href="/governance"
          className="inline-flex items-center font-serif text-[17px] leading-[26.35px] text-[#23463A] transition-opacity hover:opacity-80"
        >
          Explore Governance Principles &rarr;
        </Link>
      </div>
    </section>
  );
}
