import { SectionIntro } from "./SectionIntro";

export function TransitionContinuitySection() {
  return (
    <section
      id="transition-continuity"
      aria-labelledby="transition-continuity-heading"
      className="w-full"
    >
      <SectionIntro
        id="transition-continuity-heading"
        title="Discretion Should Endure Through Transitions"
        text={
          <>
            Maintaining material mandates and record continuity across multi-generational<br className="hidden sm:inline" /> leadership shifts.
          </>
        }
      />

      <div className="mt-8 border border-swirl bg-[#faf8f5] p-8 md:p-9">
        <p className="max-w-[844px] text-[15px] leading-6 text-[#5a5752]">
          Continuity depends on structured institutional arrangements so that legitimate responsibilities continue when<br className="hidden sm:inline" /> circumstances change. Sensitive records remain subject to authorized access, supporting accountable stewardship<br className="hidden sm:inline" /> without general publication.
        </p>
      </div>
    </section>
  );
}
