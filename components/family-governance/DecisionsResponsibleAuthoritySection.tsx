import Image from "next/image";
import React from "react";

export function DecisionsResponsibleAuthoritySection() {
  const items = [
    {
      title: "Scope",
      content: (
        <>
          <span className="block">
            A decision belongs within an appropriate mandate. <span className="italic">(Not public: Actual reserved decision</span>
          </span>
          <span className="block italic">
            inventory or exception log.)
          </span>
        </>
      ),
    },
    {
      title: "Escalation",
      content: (
        <>
          <span className="block">
            Out-of-scope questions must reach an appropriate authorized role. <span className="italic">(Not public: Private</span>
          </span>
          <span className="block italic">
            escalation tree, persons, emails and availability.)
          </span>
        </>
      ),
    },
    {
      title: "Approval",
      content: (
        <>
          <span className="block">
            Higher-level approval may be needed depending on applicable documents. <span className="italic">(Not public:</span>
          </span>
          <span className="block italic">
            Thresholds, voting quorums, meeting minutes, signatory powers.)
          </span>
        </>
      ),
    },
    {
      title: "Entity separation",
      content: (
        <>
          <span className="block">
            Entity documents and applicable law govern entity obligations. <span className="italic">(Not public: Beneficial</span>
          </span>
          <span className="block italic">
            ownership charts and private holding structures.)
          </span>
        </>
      ),
    },
    {
      title: "Verification",
      content: (
        <>
          <span className="block">
            Counterparties should verify authority using independently established channels. <span className="italic">(Not</span>
          </span>
          <span className="block italic">
            public: Public search or &ldquo;verify a signer&rdquo; service that the Office has not approved.)
          </span>
        </>
      ),
    },
  ];

  return (
    <section aria-labelledby="decisions-responsible-authority-title" className="w-full border-t border-[#D6D1C6] pt-24">
      {/* Heading 2 */}
      <h2
        id="decisions-responsible-authority-title"
        className="font-serif text-[32px] leading-[36px] sm:text-[40px] sm:leading-[44px] text-[#23463A]"
      >
        Decisions remain with the responsible authority.
      </h2>

      {/* Paragraph: exactly 3 lines matching Figma */}
      <div className="pt-6 font-serif text-[16px] leading-[25px] sm:text-[17px] sm:leading-[26.35px] text-[#34322E] max-w-[800px]">
        <p className="block">
          Certain matters may require approval by the family or another appropriate governing body. The boundary is
        </p>
        <p className="block">
          established through applicable mandates and governing documents, not through a public website label.
        </p>
        <p className="block">
          Visitors should not interpret this page as a listing or confirmation of any actual reserved matter.
        </p>
      </div>

      {/* 5 Rows: each exactly 2 lines matching Figma */}
      <div className="pt-12 flex flex-col gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="grid grid-cols-1 md:grid-cols-[322.66px_645.34px] gap-4 md:gap-8 border-b border-[#D6D1C6] pb-6"
          >
            <h3 className="font-serif text-[20px] leading-[25px] sm:text-[22px] sm:leading-[27.5px] text-[#23463A]">
              {item.title}
            </h3>
            <div className="font-serif text-[16px] leading-[25px] sm:text-[17px] sm:leading-[26.35px] text-[#34322E] max-w-[646px]">
              {item.content}
            </div>
          </div>
        ))}
      </div>

      {/* Process and Mandate Framework Image */}
      <div className="mt-10 overflow-hidden rounded-[2px]">
        <Image
          src="/images/family-governance/process-mandate-framework.png"
          alt="Process and Mandate Framework"
          width={1184}
          height={647}
          className="w-full h-auto object-cover rounded-[2px]"
        />
      </div>
    </section>
  );
}
