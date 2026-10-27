import Image from "next/image";
import Link from "next/link";
import React from "react";

export function PurposeBeforeDelegationSection() {
  const principles = [
    {
      title: "Purpose",
      lines: [
        "Long-term stewardship is framed around",
        "durable responsibility and continuity, not",
        "visibility or periodic market cycles.",
      ],
    },
    {
      title: "Direction",
      lines: [
        "The family establishes its ultimate",
        "stewardship direction; implementation is",
        "assigned to appropriate accountable",
        "structures.",
      ],
    },
    {
      title: "Legitimate mandate",
      lines: [
        "Specific decision and execution powers",
        "must be determined by relevant",
        "documents, law and verified authorization.",
      ],
    },
    {
      title: "Public boundary",
      lines: [
        "Do not identify members, relatives, family",
        "councils, relatives’ interests, personal",
        "priorities or private family protocols.",
      ],
    },
  ];

  return (
    <section aria-labelledby="purpose-before-delegation-title" className="w-full">
      {/* Heading 2 */}
      <h2
        id="purpose-before-delegation-title"
        className="font-serif text-[32px] leading-[36px] sm:text-[40px] sm:leading-[44px] text-[#23463A]"
      >
        Purpose and direction come before delegation.
      </h2>

      {/* Quote Callout: exactly 2 lines */}
      <div className="mt-6 border-l-2 border-[#D3A75A] pl-6 max-w-[960px]">
        <p className="font-serif italic text-[18px] leading-[26px] sm:text-[20px] sm:leading-[29px] text-[#23463A]">
          <span className="block whitespace-normal lg:whitespace-nowrap">
            Family governance sets family purpose, reserved matters and the ultimate direction of stewardship.
          </span>
          <span className="block whitespace-normal lg:whitespace-nowrap">
            Authority originates with the family and is delegated deliberately.
          </span>
        </p>
      </div>

      {/* Paragraph: exactly 3 lines */}
      <div className="mt-8 font-serif text-[16px] leading-[25px] sm:text-[17px] sm:leading-[26.35px] text-[#34322E] max-w-[850px]">
        <p className="block whitespace-normal lg:whitespace-nowrap">
          The Family Office operates as a coordinating institutional layer under the scope of its mandate. A family-level
        </p>
        <p className="block whitespace-normal lg:whitespace-nowrap">
          objective does not, by itself, confer authority over a separate legal entity or the management of an operating
        </p>
        <p className="block whitespace-normal lg:whitespace-nowrap">
          company.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {principles.map((principle) => (
          <div
            key={principle.title}
            className="w-full max-w-[360px] border-t border-[#D6D1C6] pt-6 flex flex-col"
          >
            <h3 className="font-serif text-[18px] leading-[22.5px] text-[#23463A]">
              {principle.title}
            </h3>
            <div className="pt-3 pb-6 font-serif text-[17px] leading-[26.35px] text-[#34322E]">
              {principle.lines.map((line, lIdx) => (
                <span key={lIdx} className="block whitespace-normal lg:whitespace-nowrap">
                  {line}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Text Link */}
      <div className="pt-6">
        <Link
          href="/the-office/institutional-role"
          className="inline-block font-serif text-[17px] leading-[26.34px] text-[#23463A] border-b border-transparent hover:border-[#23463A] transition-colors"
        >
          Understand the Office’s Institutional Role →
        </Link>
      </div>

      {/* Deliberation and Authority Image */}
      <div className="mt-10 overflow-hidden rounded-[2px]">
        <Image
          src="/images/family-governance/governance-deliberation-authority.png"
          alt="Governance Deliberation and Authority"
          width={1184}
          height={534}
          className="w-full h-auto object-cover rounded-[2px]"
        />
      </div>
    </section>
  );
}
