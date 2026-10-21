import { SectionIntro } from "./SectionIntro";

export function SpecialistExpertiseSection() {
  return (
    <section
      id="specialist-expertise"
      aria-labelledby="specialist-expertise-heading"
      className="w-full"
    >
      <SectionIntro
        id="specialist-expertise-heading"
        title="Specialist Expertise without Outsourced Accountability"
        text={
          <>
            How the Office collaborates with external legal, banking, tax, and<br className="hidden sm:inline" /> technical advisers.
          </>
        }
      />

      <div className="mt-8 border border-swirl bg-[#faf8f5] p-8 md:p-9">
        <p className="max-w-[844px] text-base leading-[26px] text-dune">
          The Office engages specialist advisers where domain expertise, independence, or regulatory capacity<br className="hidden sm:inline" /> strengthens execution.
        </p>
        <p className="max-w-[844px] pt-4 text-[15px] leading-6 text-[#5a5752]">
          Engagements remain subject to defined mandates. Using external advisers does not substitute for the Office&apos;s<br className="hidden sm:inline" /> oversight responsibility or transfer ultimate accountability away from the appropriate governing body.
        </p>
      </div>
    </section>
  );
}
