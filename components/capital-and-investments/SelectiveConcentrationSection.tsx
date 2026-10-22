import Image from "next/image";

export function SelectiveConcentrationSection() {
  return (
    <div className="pt-24 w-full">
      <section
        id="selective-concentration"
        aria-label="Selective concentration"
        className="pt-12 border-t border-[#D6D1C6] w-full"
      >
        <h2 className="font-serif text-[32px] leading-9 sm:text-[40px] sm:leading-[44px] text-[#23463A]">
          Selective concentration
        </h2>
        <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#34322E]">
          Concentration may be appropriate where the family has deep knowledge, control or a durable advantage; concentration is governed, not accidental.
        </p>
        <p className="pt-6 font-serif text-[17px] leading-[26.35px] text-[#34322E]">
          The public distinction is between a deliberate risk judgment and an unintended exposure.
        </p>

        {/* Professional Review Image */}
        <div
          aria-hidden="true"
          className="relative w-full overflow-hidden rounded-[2px] mt-[50px] h-[320px] sm:h-[450px] lg:h-[555px]"
        >
          <Image
            src="/images/capital-and-investments/professional-review.png"
            alt="Professional Review"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center"
          />
        </div>
      </section>
    </div>
  );
}
