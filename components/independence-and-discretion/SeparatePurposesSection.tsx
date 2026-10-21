import { SectionIntro } from "./SectionIntro";

export function SeparatePurposesSection() {
  return (
    <section id="separate-purposes" aria-labelledby="separate-purposes-heading" className="w-full">
      <SectionIntro
        id="separate-purposes-heading"
        title="Separate Purposes. Clear Responsibilities."
        text={
          <>
            Family governance, office coordination, legal entities, and operating businesses<br className="hidden sm:inline" /> maintain distinct roles.
          </>
        }
      />

      <div className="mt-8 border border-swirl bg-[#faf8f5] p-8 md:p-9">
        <p className="max-w-[844px] text-[15px] leading-6 text-[#5a5752]">
          The Office supports communication and coordination among governance layers where its mandate applies, without<br className="hidden sm:inline" /> collapsing their legal responsibilities into a single public description. A public website makes that boundary<br className="hidden sm:inline" /> understandable without publishing private ownership structures or confidential internal records.
        </p>
      </div>
    </section>
  );
}
