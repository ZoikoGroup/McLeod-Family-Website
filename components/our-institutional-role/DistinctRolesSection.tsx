import { SectionIntro } from "./SectionIntro";

const LAYERS = [
  {
    layer: "LAYER 01",
    title: "Family Governance",
    heading: "Sets family purpose, reserved matters, and ultimate direction of stewardship.",
    body: "Authority originates with the family and is delegated deliberately under documented mandates.",
  },
  {
    layer: "LAYER 02",
    title: "Family Office",
    heading: "Coordinates strategy, capital, governance, risk, reporting, and continuity.",
    body: "Operates exclusively under defined mandates and controls; not a public financial provider.",
  },
  {
    layer: "LAYER 03",
    title: "Purpose-Specific Vehicles",
    heading: "Hold or conduct distinct activities under specific legal requirements.",
    body: "Separate vehicles are maintained for separate purposes to ensure fiduciary clarity.",
  },
  {
    layer: "LAYER 04",
    title: "Operating Businesses",
    heading: "Execute commercial strategy through their respective boards and executive teams.",
    body: "The Family Office is not the day-to-day executive management layer of operating companies.",
  },
  {
    layer: "LAYER 05",
    title: "External Advisers",
    heading: "Provide specialist expertise, independent judgment, or regulated services.",
    body: "External advice strengthens execution; ultimate accountability is not outsourced.",
  },
];

export function DistinctRolesSection() {
  return (
    <section id="distinct-roles" aria-labelledby="distinct-roles-heading" className="w-full">
      <SectionIntro
        id="distinct-roles-heading"
        title="Distinct Roles. Clear Accountability."
        text={
          <>
            Responsibilities are separated by purpose. The Office coordinates within its<br className="hidden sm:inline" /> mandate, while distinct decision rights sit with named bodies.
          </>
        }
      />

      <div className="flex flex-col gap-4 pt-8">
        {/* Layer 01 */}
        <div className="grid grid-cols-1 items-start gap-6 border border-swirl bg-[#faf8f5] px-8 py-7 md:grid-cols-[220px_1fr] md:gap-8">
          <div>
            <p className="font-serif text-xl leading-8 text-twine">LAYER 01</p>
            <h3 className="pt-1 text-lg font-semibold leading-[29px] text-dune">Family Governance</h3>
          </div>
          <div className="max-w-[608px]">
            <p className="text-[15px] font-medium leading-6 text-dune">
              Sets family purpose, reserved matters, and ultimate direction of stewardship.
            </p>
            <p className="pt-2 text-sm leading-[21px] text-[#5a5752]">
              Authority originates with the family and is delegated deliberately under documented<br className="hidden sm:inline" /> mandates.
            </p>
          </div>
        </div>

        {/* Layer 02 */}
        <div className="grid grid-cols-1 items-start gap-6 border border-swirl bg-[#faf8f5] px-8 py-7 md:grid-cols-[220px_1fr] md:gap-8">
          <div>
            <p className="font-serif text-xl leading-8 text-twine">LAYER 02</p>
            <h3 className="pt-1 text-lg font-semibold leading-[29px] text-dune">Family Office</h3>
          </div>
          <div className="max-w-[608px]">
            <p className="text-[15px] font-medium leading-6 text-dune">
              Coordinates strategy, capital, governance, risk, reporting, and continuity.
            </p>
            <p className="pt-2 text-sm leading-[21px] text-[#5a5752]">
              Operates exclusively under defined mandates and controls; not a public financial provider.
            </p>
          </div>
        </div>

        {/* Layer 03 */}
        <div className="grid grid-cols-1 items-start gap-6 border border-swirl bg-[#faf8f5] px-8 py-7 md:grid-cols-[220px_1fr] md:gap-8">
          <div>
            <p className="font-serif text-xl leading-8 text-twine">LAYER 03</p>
            <h3 className="pt-1 text-lg font-semibold leading-[29px] text-dune">
              Purpose-Specific<br className="hidden sm:inline" /> Vehicles
            </h3>
          </div>
          <div className="max-w-[608px]">
            <p className="text-[15px] font-medium leading-6 text-dune">
              Hold or conduct distinct activities under specific legal requirements.
            </p>
            <p className="pt-2 text-sm leading-[21px] text-[#5a5752]">
              Separate vehicles are maintained for separate purposes to ensure fiduciary clarity.
            </p>
          </div>
        </div>

        {/* Layer 04 */}
        <div className="grid grid-cols-1 items-start gap-6 border border-swirl bg-[#faf8f5] px-8 py-7 md:grid-cols-[220px_1fr] md:gap-8">
          <div>
            <p className="font-serif text-xl leading-8 text-twine">LAYER 04</p>
            <h3 className="pt-1 text-lg font-semibold leading-[29px] text-dune">Operating Businesses</h3>
          </div>
          <div className="max-w-[608px]">
            <p className="text-[15px] font-medium leading-6 text-dune">
              Execute commercial strategy through their respective boards and executive teams.
            </p>
            <p className="pt-2 text-sm leading-[21px] text-[#5a5752]">
              The Family Office is not the day-to-day executive management layer of operating<br className="hidden sm:inline" /> companies.
            </p>
          </div>
        </div>

        {/* Layer 05 */}
        <div className="grid grid-cols-1 items-start gap-6 border border-swirl bg-[#faf8f5] px-8 py-7 md:grid-cols-[220px_1fr] md:gap-8">
          <div>
            <p className="font-serif text-xl leading-8 text-twine">LAYER 05</p>
            <h3 className="pt-1 text-lg font-semibold leading-[29px] text-dune">External Advisers</h3>
          </div>
          <div className="max-w-[608px]">
            <p className="text-[15px] font-medium leading-6 text-dune">
              Provide specialist expertise, independent judgment, or regulated services.
            </p>
            <p className="pt-2 text-sm leading-[21px] text-[#5a5752]">
              External advice strengthens execution; ultimate accountability is not outsourced.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
