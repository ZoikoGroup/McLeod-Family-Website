import Image from "next/image";

interface QnAPoint {
  question: string;
  answer: string;
}

const FAMILIAR_CHANNEL_POINTS: QnAPoint[] = [
  {
    question:
      "Does a matching sender domain prove the sender can authorize payment?",
    answer:
      "No. A matching domain or SPF/DKIM/DMARC authentication is not transaction authorization; verify the specific change independently.",
  },
  {
    question:
      "Is a telephone number in the suspicious message an independent route?",
    answer:
      "No. Obtain the callback route separately from a trusted pre-existing record or current verified source.",
  },
  {
    question:
      "Can an adviser or person be verified from a public employee list?",
    answer:
      "Do not publish or rely on a public staff directory; verify role and authority through appropriate controlled channels.",
  },
];

export default function FamiliarChannelSection() {
  return (
    <section
      id="familiar-channel"
      aria-label="A familiar channel still requires judgment"
      className="w-full bg-[#f4f1ea] px-6 py-16 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Top Divider & Heading */}
        <div className="border-t border-[#e5e0d5] pt-12">
          <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[46px] text-[#23463a] mb-6">
            A familiar channel still requires judgment.
          </h2>

          {/* Intro Paragraph */}
          <div className="max-w-[900px] mb-12">
            <p className="font-serif text-[16px] leading-[25px] text-[#34322e]/90">
              An official-looking domain, authenticated email, recognizable
              voice, staff name or existing message thread can support checking,
              but none independently proves that a person has authority to
              request a payment, bank- detail change or confidential disclosure.
              Confirm both the channel and the specific instruction using a
              source obtained separately. For authoritative, current website and
              correspondence records, use the Verification Centre.
            </p>
          </div>

          {/* 3-Column Q&A Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12 mb-16 border-t border-[#e5e0d5] pt-8">
            {FAMILIAR_CHANNEL_POINTS.map((item, index) => (
              <div key={index} className="relative flex flex-col">
                <h3 className="font-serif text-[18px] leading-[24px] text-[#23463a] mb-3">
                  {item.question}
                </h3>
                <p className="font-serif text-[15px] leading-[23px] text-[#34322e]/80">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Feature Image Container */}
          <div className="relative w-full overflow-hidden rounded-[2px]">
            <div className="relative aspect-[24/9] w-full min-h-[400px] sm:min-h-[500px]">
              <Image
                src="/images/real/3.png"
                alt="Two people reviewing financial documents and notes together"
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
