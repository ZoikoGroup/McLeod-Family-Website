import Image from "next/image";

export function InstitutionalFrameworksImageSection() {
  return (
    <div
      aria-label="Institutional Frameworks Overview"
      className="relative w-full overflow-hidden rounded-[2px] aspect-[1184/424] min-h-[220px] sm:min-h-[300px] lg:min-h-[424px] mt-16 sm:mt-24"
    >
      <Image
        src="/images/treasury-and-liquidity/institutional-frameworks.png"
        alt="Institutional Frameworks - Treasury and Liquidity"
        fill
        sizes="(max-width: 1280px) 100vw, 1184px"
        className="object-cover object-center"
      />
    </div>
  );
}
