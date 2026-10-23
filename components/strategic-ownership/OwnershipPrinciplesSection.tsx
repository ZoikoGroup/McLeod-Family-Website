interface PrincipleItem {
  title: string;
  description: string;
}

const principleItems: PrincipleItem[] = [
  {
    title: "Purpose before promotion",
    description:
      "Owner-level attention is directed to durable enterprise responsibility rather than public display. No publicity ranking or marketed holding.",
  },
  {
    title: "Defined authority",
    description:
      "Authority must originate from the applicable mandate, legal entity and governing body. No invented voting rights or beneficial ownership.",
  },
  {
    title: "Long-term judgment",
    description:
      "Consider enterprise durability, resilience, concentration and continuing obligations. No assertion of guaranteed value creation.",
  },
  {
    title: "Periodic review",
    description:
      "Material priorities and roles should be reassessed as family and enterprise conditions evolve.",
  },
];

export function OwnershipPrinciplesSection() {
  return (
    <section
      id="ownership-principles"
      aria-label="Ownership principles guide the long view"
      className="w-full pt-24 lg:pt-24"
    >
      <div className="border-t border-[#D6D1C6] pt-6">
        <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-[#23463A]">
          01. Ownership principles guide the long view.
        </h2>

        <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#34322E] max-w-[1204px]">
          Where the family has an enterprise interest, owner-level oversight should be considered through defined purposes, appropriate decision rights and longer-term priorities. Decisions affecting separate entities must respect the responsibilities of those entities and their governing bodies.
        </p>

        <div className="pt-8 max-w-[1000px] flex flex-col gap-6">
          {principleItems.map((item) => (
            <div
              key={item.title}
              className="border-b border-[#D6D1C6] pb-6 grid grid-cols-1 md:grid-cols-[323px_1fr] gap-2 md:gap-8 items-start"
            >
              <h3 className="font-serif text-[22px] leading-[27.5px] text-[#23463A]">
                {item.title}
              </h3>
              <p className="font-serif text-[17px] leading-[26.35px] text-[#34322E] max-w-[645px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
