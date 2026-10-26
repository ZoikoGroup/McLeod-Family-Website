import Image from "next/image";

export function VerifyInstructionSection() {
  return (
    <section aria-label="Verify the Instruction" className="pt-24">
      <div className="border-t border-[#d6d1c6] pt-6">
        {/* Heading 2 */}
        <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[44px] text-[#23463a]">
          Verify the instruction, not merely the sender.
        </h2>

        {/* Paragraph */}
        <div className="pt-6">
          <p className="font-serif text-[17px] leading-[26.35px] text-[#34322e] max-w-[880px]">
            A message may appear authentic without being an authorized instruction. Official-domain guidance and email
            <br className="hidden lg:inline" />{" "}
            authentication are useful signals; they are not substitutes for confirming the person, purpose and authority
            <br className="hidden lg:inline" />{" "}
            relevant to a requested action.
          </p>
        </div>

        {/* Standing Safety Statement Callout */}
        <div className="mt-8 p-6 max-w-[800px] bg-[#d6d1c6]/30 border-l-2 border-[#23463a]">
          <p className="font-serif text-[17px] leading-[26.35px] text-[#34322e]">
            Standing safety statement: Do not act on new or changed payment instructions, bank details or requests for
            confidential information solely because they arrived by email, message or document. Independently verify the
            instruction through an official contact route obtained separately from the communication.
          </p>
        </div>

        {/* Separate Entity Authority Row */}
        <div className="mt-8 border-b border-[#d6d1c6] pb-6 grid grid-cols-1 md:grid-cols-[323px_1fr] gap-4 md:gap-8 max-w-[1000px]">
          <h3 className="font-serif text-[22px] leading-[27.5px] text-[#23463a]">
            Separate entity authority
          </h3>
          <p className="font-serif text-[17px] leading-[26.35px] text-[#34322e]">
            The Family Office is a coordinating institution. Each purpose-specific legal entity and operating business retains
            responsibilities under its own governing arrangements. Website copy alone cannot establish signing authority or a mandate.
          </p>
        </div>

        {/* Image: Governance and Responsibility */}
        <div className="mt-12 w-full overflow-hidden rounded-[2px]">
          <Image
            src="/images/confidentiality-integrity/governance-and-responsibility.png"
            alt="Governance and Responsibility"
            width={1184}
            height={553}
            sizes="(max-width: 1280px) 100vw, 1184px"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
