import { SectionIntro } from "./SectionIntro";

export function OversightVsManagementSection() {
  return (
    <section
      id="oversight-vs-management"
      aria-labelledby="oversight-vs-management-heading"
      className="w-full"
    >
      <SectionIntro
        id="oversight-vs-management-heading"
        title="Ownership Oversight is Not Operating Management"
        text="A clear distinction between shareholder stewardship and executive leadership."
      />

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Card 1: The Office Coordinates (Dark Green) */}
        <div className="border border-te-papa-green bg-te-papa-green p-9">
          <h3 className="font-serif text-[21.6px] leading-[25px] text-spring-wood">
            The Office Coordinates
          </h3>
          <p className="pt-4 text-[15px] leading-6 text-spring-wood/90">
            Multi-generational strategy, board-level ownership principles,<br className="hidden sm:inline" /> consolidated reporting, reserved matter escalations, and long-term<br className="hidden sm:inline" /> liquidity requirements across enterprise holdings.
          </p>
        </div>

        {/* Card 2: Operating Companies Manage (Light Beige) */}
        <div className="border border-swirl bg-[#faf8f5] p-9">
          <h3 className="font-serif text-[21.6px] leading-[25px] text-dune">
            Operating Companies Manage
          </h3>
          <p className="pt-4 text-[15px] leading-6 text-[#5a5752]">
            Day-to-day executive strategy, commercial execution, staff<br className="hidden sm:inline" /> management, customer relationships, operational budgets, and<br className="hidden sm:inline" /> entity-specific legal compliance.
          </p>
        </div>
      </div>
    </section>
  );
}
