import React from "react";

export function WebsiteNotProofOfAuthoritySection() {
  const cards = [
    {
      titleLine1: "A person claims to represent family",
      titleLine2: "governance",
      lines: [
        "Do not infer authority from family name,",
        "role or title; verify contracting party",
        <>through controlled channels. <span className="italic">(Forbidden:</span></>,
        <span key="c1-4" className="italic">Public family-member and signatory lookups.)</span>,
      ],
    },
    {
      titleLine1: "Purported resolution or mandate is",
      titleLine2: "forwarded",
      lines: [
        "Do not upload the instrument; contact",
        "known verified counterparty",
        <>independently. <span className="italic">(Forbidden: &ldquo;Verified family</span></>,
        <span key="c2-4" className="italic">resolution&rdquo; badge.)</span>,
      ],
    },
    {
      titleLine1: "Bank details change mid-conversation",
      titleLine2: null,
      lines: [
        "Stop and independently call back through",
        "contact sourced separately from message.",
        <span key="c3-3" className="italic">(Forbidden: Treat SPF/DKIM/DMARC as</span>,
        <span key="c3-4" className="italic">payment approval.)</span>,
      ],
    },
    {
      titleLine1: "Unknown reporting request",
      titleLine2: null,
      lines: [
        "Use approved Contact/Verification",
        "guidance; no direct submission of sensitive",
        <>files. <span className="italic">(Forbidden: Live suspicious-report link</span></>,
        <span key="c4-4" className="italic">absent operational owner/approval.)</span>,
      ],
    },
  ];

  return (
    <section aria-labelledby="website-not-proof-authority-title" className="w-full border-t border-[#D6D1C6] pt-24">
      {/* Heading 2 */}
      <h2
        id="website-not-proof-authority-title"
        className="font-serif text-[32px] leading-[36px] sm:text-[40px] sm:leading-[44px] text-[#23463A]"
      >
        A website explanation is not proof of authority.
      </h2>

      {/* Paragraph: exactly 3 lines matching Figma */}
      <div className="pt-6 font-serif text-[16px] leading-[25px] sm:text-[17px] sm:leading-[26.35px] text-[#34322E] max-w-[850px]">
        <p className="block">
          Before acting on a purported instruction or change to sensitive payment information, obtain the appropriate
        </p>
        <p className="block">
          authority and callback details from an independent official source. Authentication of an email domain, sender
        </p>
        <p className="block">
          name or document appearance is not conclusive proof that a transaction is authorized.
        </p>
      </div>

      {/* 4 Cards Grid: adjusted width so no unexpected wraps occur */}
      <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="w-full max-w-[360px] border-t border-[#D6D1C6] pt-6 flex flex-col"
          >
            <h3 className="font-serif text-[18px] leading-[22.5px] text-[#23463A]">
              <span className="block">{card.titleLine1}</span>
              {card.titleLine2 && <span className="block">{card.titleLine2}</span>}
            </h3>
            <div className="pt-3 pb-6 font-serif text-[16px] leading-[25px] sm:text-[17px] sm:leading-[26.35px] text-[#34322E]">
              {card.lines.map((line, lineIdx) => (
                <span key={lineIdx} className="block whitespace-normal lg:whitespace-nowrap">
                  {line}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
