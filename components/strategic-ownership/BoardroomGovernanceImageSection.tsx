import Image from "next/image";

export function BoardroomGovernanceImageSection() {
  return (
    <div
      aria-hidden="true"
      className="relative w-full overflow-hidden rounded-[2px] h-[340px] sm:h-[480px] lg:h-[600px] mt-8 lg:mt-12"
    >
      <Image
        src="/images/strategic-ownership/corporate-boardroom-and-governance.png"
        alt="Corporate Boardroom and Governance"
        fill
        sizes="(max-width: 1280px) 100vw, 1184px"
        className="object-cover object-center"
      />
    </div>
  );
}
