import Link from "next/link";
import { ChevronDownIcon } from "./icons";

const FAQS: { q: string; a: React.ReactNode }[] = [
  {
    q: "Why does McLeod Family Office exist?",
    a: "To convert long-term family responsibility into disciplined institutional action. The Office coordinates the stewardship of the family’s enterprise interests, capital, governance, and continuity so that these responsibilities are carried consistently across generations.",
  },
  {
    q: "Whom does the Office serve?",
    a: "One family only. The Office serves the McLeod family and purpose-specific family entities. It does not serve external families, clients, or the public.",
  },
  {
    q: "What does the Office’s mandate cover?",
    a: "Six public responsibilities: enterprise ownership oversight, long-horizon capital stewardship, governance and decision rights, generational continuity, risk and resilience, and administration and coordination across entities and advisers.",
  },
  {
    q: "Does the Office offer investment products or manage external assets?",
    a: "No. The Office does not solicit or accept third-party investment capital, manage wealth or assets for external clients, or offer investment products or advisory services to the public.",
  },
  {
    q: "Does the Office operate family businesses day-to-day?",
    a: "No. Operating businesses are governed and managed through their own boards and executives. The Office may exercise ownership oversight or coordinate reserved matters, but it is not the day-to-day management layer.",
  },
  {
    q: "Does the mandate mean every family entity has the same legal role?",
    a: "No. Separate vehicles are used for separate purposes. Each legal entity and operating company retains its own role, governance, and legal obligations; the Office coordinates within its defined mandate.",
  },
  {
    q: "How can a counterparty verify communications or contact the Office?",
    a: (
      <>
        Use the{" "}
        <Link href="/verification" className="text-te-papa-green underline">
          Verification Centre
        </Link>{" "}
        to confirm official domains and channels, and the{" "}
        <Link href="/contact" className="text-te-papa-green underline">
          official contact route
        </Link>{" "}
        for institutional enquiries. Sensitive or changed payment details should always be
        independently verified using a contact route obtained separately from the message.
      </>
    ),
  },
];

export function PurposeFaqSection() {
  return (
    <section id="faq" className="mx-auto w-full max-w-[1280px] px-6 pt-20 lg:px-8 lg:pt-28">
      <div className="border-t border-swirl pt-20 lg:pt-24">
        <div className="max-w-[768px]">
          <h2 className="font-serif text-[30px] leading-9 text-dune lg:text-4xl lg:leading-10">
            Common Questions &amp; Direct Answers
          </h2>
          <p className="pt-4 text-sm leading-6 text-[#57534e] lg:text-base">
            Direct institutional answers regarding our public purpose, non-solicitation status, and
            working boundaries.
          </p>
        </div>

        <div className="flex max-w-[896px] flex-col gap-4 pt-10">
          {FAQS.map((item) => (
            <details
              key={item.q}
              className="group rounded-lg border border-swirl bg-sisal/40 open:bg-spring-wood"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 [&::-webkit-details-marker]:hidden">
                <h3 className="font-serif text-lg leading-7 text-dune lg:text-xl">{item.q}</h3>
                <ChevronDownIcon className="size-3.5 shrink-0 text-twine transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-5 pb-5 text-sm leading-6 text-[#57534e]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
