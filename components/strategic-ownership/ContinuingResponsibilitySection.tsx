import Link from "next/link";

export function ContinuingResponsibilitySection() {
  return (
    <section
      id="continuing-responsibility"
      aria-label="Enterprise stewardship is a continuing responsibility"
      className="w-full pt-24 lg:pt-24"
    >
      <div className="border-t border-[#D6D1C6] pt-6">
        <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-[#23463A]">
          Enterprise stewardship is a continuing responsibility.
        </h2>

        <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#34322E] max-w-[1158px]">
          Long-horizon enterprise interests require attention to continuity of authority, institutional memory, risk and preparedness for transitions. Responsibilities should be reviewed with a perspective that reaches beyond a single management cycle, while remaining subject to the duties and decisions of the bodies responsible for each activity.
        </p>

        <div className="flex flex-wrap items-center gap-6 pt-6">
          <Link
            href="/governance"
            className="font-serif text-[17px] leading-[26.35px] text-[#23463A] transition-opacity hover:opacity-80"
          >
            Governance Principles →
          </Link>
          <Link
            href="/activities/capital-and-investments"
            className="font-serif text-[17px] leading-[26.35px] text-[#23463A] transition-opacity hover:opacity-80"
          >
            Stewardship Capital →
          </Link>
          <Link
            href="/stewardship/generational-stewardship"
            className="font-serif text-[17px] leading-[26.35px] text-[#23463A] transition-opacity hover:opacity-80"
          >
            Stewardship Continuity →
          </Link>
        </div>
      </div>
    </section>
  );
}
