import Image from "next/image";

export function DocumentReviewImageSection() {
  return (
    <div
      aria-hidden="true"
      className="relative w-full overflow-hidden rounded-[2px] h-[360px] sm:h-[520px] lg:h-[733px]"
    >
      <Image
        src="/images/family-administration/professional-document-review.png"
        alt="Professional Document Review"
        fill
        sizes="(max-width: 1280px) 100vw, 1280px"
        className="object-cover object-center"
      />
    </div>
  );
}
