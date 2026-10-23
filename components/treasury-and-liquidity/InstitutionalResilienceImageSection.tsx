import Image from "next/image";

export function InstitutionalResilienceImageSection() {
  return (
    <div
      aria-label="Institutional Resilience Overview"
      className="relative w-full overflow-hidden rounded-[2px] aspect-[1184/417] min-h-[220px] sm:min-h-[300px] lg:min-h-[417px] mt-16 sm:mt-24"
    >
      <Image
        src="/images/treasury-and-liquidity/institutional-resilience.png"
        alt="Institutional Resilience - Treasury and Liquidity"
        fill
        sizes="(max-width: 1280px) 100vw, 1184px"
        className="object-cover object-center"
      />
    </div>
  );
}
