export default function ContinuitySection() {
  return (
    <section
      id="continuity"
      aria-label="Continuity"
      className="w-full bg-[#F4F1EA] border-t border-[#DDD6C8]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 py-12 lg:px-12 lg:py-16 xl:px-16">
        {/* Section Heading */}
        <h2 className="mb-4 font-serif text-[34px] sm:text-[40px] lg:text-[44px] leading-[40px] sm:leading-[48px] text-[#1A332A]">
          Continuity
        </h2>

        {/* Subtitle with vertical gold accent bar */}
        <div className="mb-6 border-l-2 border-[#C6A15B] pl-3 py-0.5">
          <p className="font-serif italic text-[17px] sm:text-[19px] leading-[26px] text-[#34322E]">
            Succession and transfer of responsibility.
          </p>
        </div>

        {/* Description Paragraph */}
        <p className="mb-4 max-w-[920px] font-serif text-[15px] sm:text-[16.5px] leading-[26px] sm:leading-[28px] text-[#34322E]/90">
          Durability depends on prepared transition. Leadership succession, the transfer of
          responsibilities, and institutional memory are addressed before urgent transitions are
          required. The Office supports preparedness without publishing individual plans or private
          arrangements.
        </p>

        {/* Footnote / Disclaimer */}
        <p className="max-w-[920px] font-sans text-[13px] sm:text-[13.5px] leading-[22px] text-[#5A606A]">
          The public website does not disclose named heirs, family genealogies, personal ages or
          private succession plans.
        </p>
      </div>
    </section>
  );
}
