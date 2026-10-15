import Link from "next/link";

export function InstitutionalDisciplineSection() {
  return (
    <section
      id="institutional-discipline"
      className="border-t border-solid border-swirl bg-[linear-gradient(122.59deg,rgba(12,126,85,0.05)_12.453%,rgba(78,153,126,0.05)_66.806%)] py-16 lg:py-24"
    >
      <div className="mx-auto flex w-full max-w-[760px] flex-col items-center px-6 text-center">
        <p className="font-sans text-[14px] uppercase leading-5 tracking-[1.4px] text-[rgba(35,70,58,0.6)]">
          Institutional Discipline
        </p>
        <h2 className="pt-6 font-serif text-[28px] leading-[34px] text-te-papa-green lg:h-16 lg:text-[36px] lg:leading-10">
          Stewardship depends on defined authority.
        </h2>
        <p className="pt-8 font-sans text-[16px] leading-[26px] text-[rgba(52,50,46,0.8)] lg:text-[18px] lg:leading-[29.25px]">
          Enterprise, capital and continuity are related responsibilities, but they do not erase the boundaries between family decisions, the Family Office’s coordinating mandate, purpose-specific legal entities, and the boards and management of operating businesses. Material authority should be documented, delegated deliberately and exercised within the responsibilities of the relevant body or entity.
        </p>
        <p className="pb-10 pt-8 font-sans text-[16px] italic leading-6 text-[rgba(52,50,46,0.7)]">
          Separate vehicles are used for separate purposes. The Office coordinates stewardship within its mandate; legal and operational responsibilities remain with their appropriate entities and governing bodies.
        </p>
        <Link
          href="/governance"
          className="flex h-[55.25px] w-[261.26px] max-w-full items-center justify-center whitespace-nowrap border border-solid border-[#b89c63] font-sans text-[18px] leading-[29.25px] text-te-papa-green"
        >
          Explore Governance →
        </Link>
      </div>
    </section>
  );
}
