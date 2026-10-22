import Image from "next/image";

export function InstitutionalOfficeInteriorImage() {
  return (
    <div
      aria-hidden="true"
      className="relative w-full overflow-hidden rounded-[2px] h-[360px] sm:h-[480px] lg:h-[607px]"
    >
      <Image
        src="/images/capital-and-investments/institutional-office-interior.png"
        alt="Institutional Office Interior"
        fill
        sizes="(max-width: 1280px) 100vw, 1280px"
        className="object-cover object-center"
      />
    </div>
  );
}
