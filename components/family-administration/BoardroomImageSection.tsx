import Image from "next/image";

export function BoardroomImageSection() {
  return (
    <div
      aria-hidden="true"
      className="relative w-full overflow-hidden rounded-[2px] h-[360px] sm:h-[550px] lg:h-[790px]"
    >
      <Image
        src="/images/family-administration/corporate-boardroom.png"
        alt="Corporate Boardroom"
        fill
        sizes="(max-width: 1280px) 100vw, 1280px"
        className="object-cover object-center"
      />
    </div>
  );
}
