import Image from "next/image";

// open = default state (first item only; Figma clips the rest, here nothing is clipped or scrolled)
const META: { open: boolean }[] = [
  { open: true },
  { open: false },
  { open: false },
  { open: false },
  { open: false },
  { open: false },
  { open: false },
  { open: false },
  { open: false },
  { open: false },
  { open: false },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is McLeod Family Office?",
    a: "McLeod Family Office is the private institutional office of the McLeod family, established to coordinate long-term stewardship of capital, enterprise interests, governance and continuity.",
  },
  {
    q: "Is McLeod a single-family or multi-family office?",
    a: "It is a private single-family office. It serves the McLeod family and purpose-specific family entities; it does not serve external families or clients.",
  },
  {
    q: "Does McLeod Family Office manage money for the public?",
    a: "No. It does not solicit or accept third-party investment capital, manage external client assets or offer investment products to the public.",
  },
  {
    q: "Is McLeod Family Office an investment adviser?",
    a: "The public institution is not presented as an investment-advisory business. Any regulated activity, if ever undertaken, must occur only through an appropriately authorized entity and should be described separately.",
  },
  {
    q: "What does the Office do?",
    a: "It coordinates enterprise stewardship, family capital, governance, continuity, risk, reporting and material family-office administration within defined mandates.",
  },
  {
    q: "Does the Family Office run the family’s operating companies?",
    a: "No. Operating businesses are governed and managed through their own boards and executives. The Office may exercise ownership oversight or coordinate reserved matters, but it is not the day-to-day management layer.",
  },
  {
    q: "How does the Office make decisions?",
    a: "Through documented mandates, delegated authorities, reserved matters, reporting and escalation. Different activities are separated according to purpose and legal responsibility.",
  },
  {
    q: "How does McLeod approach investment and capital allocation?",
    a: "With a long-term, risk-aware approach that considers resilience, liquidity, concentration, diversification, cost and governance. Detailed allocation and performance information remains private.",
  },
  {
    q: "How does the Office use outside advisers?",
    a: "Specialists are engaged where expertise, independence, regulation, jurisdictional capability or scale adds value. The Office retains oversight and accountability for its mandates.",
  },
  {
    q: "Why is so little information about holdings or family wealth published?",
    a: "Privacy is an operating requirement. Public disclosure is limited to information needed for identity, trust, verification and legitimate engagement; confidential financial and family information remains private.",
  },
  {
    q: "How can I verify a communication?",
    a: "Use the Verification Centre to confirm official domains and contact channels. Sensitive or changed payment details should always be independently verified using a contact route obtained separately from the message.",
  },
];

export function AboutFaqSection() {
  return (
    <section id="faq" className="bg-[#f4f1eb] py-16 lg:min-h-[1288px] lg:py-32">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[368px_minmax(0,1fr)] lg:gap-16">
          <div>
            <div className="pb-6 lg:pb-0">
              <h2 className="font-serif text-[30px] leading-[36px] text-[#1b2b23] lg:text-[36px] lg:leading-[40px]">
                Common questions
              </h2>
              <p className="mt-6 font-serif text-[18px] leading-[28px] text-[rgba(26,26,26,0.7)] lg:w-[368px] lg:text-[20px]">
                Direct answers to the questions serious counterparties ask.
              </p>
            </div>
            <div className="hidden w-full lg:block lg:pb-12">
              <div className="relative h-[475px] w-full overflow-hidden opacity-80">
                <Image
                  src="/images/about/faq-office-detail.webp"
                  alt=""
                  width={800}
                  height={534}
                  sizes="712px"
                  className="pointer-events-none absolute left-[-71.74%] top-[0.15%] h-full w-[193.37%] max-w-none"
                />
              </div>
            </div>
          </div>
          <div className="border-y border-[rgba(27,43,35,0.15)]">
            {FAQS.map((item, i) => (
              <details
                key={item.q}
                open={META[i].open}
                className={`group py-6 ${i > 0 ? "border-t border-[#e5e7eb]" : ""}`}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between [&::-webkit-details-marker]:hidden">
                  <h3 className="font-serif text-[20px] font-normal leading-[32px] text-[#1a1a1a] lg:text-[24px]">
                    {item.q}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="flex h-[36px] w-[32px] shrink-0 items-start pl-4 font-serif text-[30px] leading-[36px] text-[rgba(27,43,35,0.4)] transition-transform group-open:rotate-45 lg:group-open:rotate-0"
                  >
                    +
                  </span>
                </summary>
                <p className="pt-4 pb-6 pr-0 font-serif text-[16px] leading-[28px] text-[rgba(26,26,26,0.7)] lg:pr-12 lg:text-[18px]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
