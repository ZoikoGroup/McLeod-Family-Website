const protectionItems = [
  {
    title: "Do not disclose secrets",
    description:
      "Do not share passwords, MFA codes, recovery codes, private access links or banking credentials through unsolicited communication or a public first-contact form.",
  },
  {
    title: "Separate first contact from secure exchange",
    description:
      "Contact the Office is suitable only for a non-sensitive initial enquiry. Sensitive documents require an appropriately established and independently verified exchange route.",
  },
  {
    title: "No uploads or message checker here",
    description:
      "This page does not take attachments, email headers, personal identity records, bank details or pasted correspondence.",
  },
  {
    title: "Security concern",
    description:
      "If a request appears malicious, use your organization’s established security/incident procedures; do not assume public Contact is staffed as emergency incident response.",
  },
];

export function ProtectInformationSection() {
  return (
    <section aria-label="Protect information" className="pt-24">
      <div className="border-t border-[#D6D1C6] pt-6">
        <h2 className="font-serif text-[32px] leading-[36px] sm:text-[40px] sm:leading-[44px] text-[#23463A]">
          Protect information
        </h2>

        <div className="pt-12 flex flex-col gap-6">
          {protectionItems.map((item) => (
            <div
              key={item.title}
              className="grid grid-cols-1 md:grid-cols-[322.66px_1fr] lg:grid-cols-[322.66px_645.34px] gap-2 md:gap-8 border-b border-[#D6D1C6] pb-6"
            >
              <h3 className="font-serif text-[20px] sm:text-[22px] leading-[27.5px] text-[#23463A]">
                {item.title}
              </h3>
              <p className="font-serif text-[16px] leading-[25px] sm:text-[17px] sm:leading-[26.35px] text-[#34322E] max-w-[646px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

