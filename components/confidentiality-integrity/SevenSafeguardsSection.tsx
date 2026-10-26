export function SevenSafeguardsSection() {
  const safeguards = [
    {
      number: "01",
      title: "Need-to-know disclosure",
      description:
        "Share information only for a legitimate purpose with an identified, appropriately authorized recipient.",
    },
    {
      number: "02",
      title: "Verified counterparties",
      description:
        "Confirm organization, individual and authority independently where sensitive action is requested.",
    },
    {
      number: "03",
      title: "Controlled exchange",
      description:
        "Do not submit banking/identity/nonpublic records in an initial open enquiry; establish approved method first.",
    },
    {
      number: "04",
      title: "Official channels",
      description:
        "Obtain official contact information from verified, separately accessed routes.",
    },
    {
      number: "05",
      title: "Authentication limits",
      description:
        "SPF, DKIM and DMARC can help assess sending-domain authentication; they do not authorize instructions.",
    },
    {
      number: "06",
      title: "Changed instructions",
      description:
        "Independently confirm new or changed bank/payment details using separately sourced official contact.",
    },
    {
      number: "07",
      title: "Suspicious messages",
      description:
        "Do not reply, share secrets or act solely on suspicious instructions; use approved guidance.",
    },
  ];

  return (
    <section aria-label="Seven Approved Safeguards" className="pt-24">
      <div className="border-t border-[#d6d1c6] pt-6">
        {/* Heading 2 */}
        <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[44px] text-[#23463a]">
          Seven Approved Safeguards
        </h2>

        {/* Subtitle */}
        <div className="pt-6">
          <p className="font-serif text-[17px] leading-[26.35px] text-[#34322e] max-w-[800px]">
            McLeod Family Office adheres to these safeguards for protected disclosure, verification, and engagement.
          </p>
        </div>

        {/* 7 Safeguards List */}
        <div className="pt-12 max-w-[900px] flex flex-col gap-8">
          {safeguards.map((item) => (
            <div
              key={item.number}
              className="flex items-start gap-8 border-b border-[#d6d1c6] pb-6"
            >
              <span className="font-serif text-[24px] leading-[30px] text-[#d3a75a] w-10 flex-shrink-0">
                {item.number}
              </span>
              <div className="flex-1">
                <h3 className="font-serif text-[20px] leading-[25px] text-[#23463a]">
                  {item.title}
                </h3>
                <p className="pt-2 font-serif text-[17px] leading-[26.35px] text-[#34322e] max-w-[800px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
