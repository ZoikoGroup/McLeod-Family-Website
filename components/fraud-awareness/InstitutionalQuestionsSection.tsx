interface InstitutionalQuestion {
  question: string;
  answer: string;
}

const INSTITUTIONAL_QUESTIONS: InstitutionalQuestion[] = [
  {
    question: "How do I report a suspicious McLeod communication?",
    answer:
      "Use the official reporting form only if a monitored public reporting service is enabled; otherwise rely on the Verification Centre for independently sourced safety guidance.",
  },
  {
    question: "Is this page a message-authenticity checker?",
    answer:
      "No. Submitting a concern is not a determination that any email, website, caller or payment instruction is genuine.",
  },
  {
    question: "Should I forward the full message or screenshots?",
    answer:
      "No. This public form requests only a short, non-sensitive description and has no public attachment upload.",
  },
  {
    question: "What if a message gives me new bank details?",
    answer:
      "Pause. Independently obtain an official contact, confirm the specific change directly, then follow your own organization's approval controls.",
  },
  {
    question: "Can I report without giving an email address?",
    answer:
      "The proposed form makes a follow-up email optional where applicable privacy and operating policy allows. Without it, staff may not be able to contact you.",
  },
  {
    question: "Does a receipt mean McLeod verified the sender?",
    answer:
      "No. A receipt confirms durable intake acceptance only, not authorization, legitimacy, investigation or recovery.",
  },
  {
    question: "What if I have already paid?",
    answer:
      "Promptly contact your own bank or payment provider through a separately obtained official route. This is not a recovery or emergency service.",
  },
  {
    question: "What if the reporting form is unavailable?",
    answer:
      "Stop acting on suspicious instructions. Use the independent safety steps and Verification Centre; do not submit evidence through the general Contact the Office form.",
  },
];

export default function InstitutionalQuestionsSection() {
  return (
    <section
      id="institutional-questions"
      aria-label="Institutional questions"
      className="w-full bg-[#f4f1ea] px-6 py-16 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Top Border & Heading */}
        <div className="border-t border-[#e5e0d5] pt-12 mb-12">
          <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[46px] text-[#23463a]">
            Institutional questions
          </h2>
        </div>

        {/* Questions List */}
        <div className="max-w-[1040px] divide-y divide-[#e5e0d5] border-b border-[#e5e0d5]">
          {INSTITUTIONAL_QUESTIONS.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 gap-2 py-6 md:grid-cols-12 md:gap-8"
            >
              <div className="md:col-span-5">
                <h3 className="font-serif text-[18px] leading-[25px] text-[#23463a]">
                  {item.question}
                </h3>
              </div>
              <div className="md:col-span-7">
                <p className="font-serif text-[15px] leading-[23px] text-[#34322e]/85">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
