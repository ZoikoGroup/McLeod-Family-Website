import Image from "next/image";

export function DocumentReviewImageSection() {
  return (
    <div
      aria-label="Professional Document Review"
      className="relative w-full overflow-hidden rounded-[2px] aspect-[1184/595] min-h-[260px] sm:min-h-[380px] lg:min-h-[595px] mt-16 sm:mt-24"
    >
      <Image
        src="/images/trust-estate-tax-coordination/professional-document-review.png"
        alt="Professional Document Review"
        fill
        sizes="(max-width: 1280px) 100vw, 1184px"
        className="object-cover object-center"
      />
    </div>
  );
}
