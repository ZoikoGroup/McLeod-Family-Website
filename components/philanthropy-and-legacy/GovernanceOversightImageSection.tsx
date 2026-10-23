import Image from "next/image";

export function GovernanceOversightImageSection() {
  return (
    <div
      aria-hidden="true"
      className="relative w-full overflow-hidden rounded-[2px] h-[260px] sm:h-[340px] lg:h-[427px] mt-4 lg:mt-6"
    >
      <Image
        src="/images/philanthropy-and-legacy/governance-and-oversight.png"
        alt="Governance and Oversight"
        fill
        sizes="(max-width: 1280px) 100vw, 1184px"
        className="object-cover object-center"
      />
    </div>
  );
}
