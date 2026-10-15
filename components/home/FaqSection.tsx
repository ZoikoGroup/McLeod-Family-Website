import Image from "next/image";
import type { ReactNode } from "react";

/*
 * Line-break tokens inside copy:
 *   {m} break on mobile only, {d} break on desktop only (xl and up), {b} break on both.
 * Put the space that separates words before the token.
 */
function Breaks({ text }: { text: string }) {
  const parts = text.split(/(\{[mdb]\})/);
  return (
    <>
      {parts.map((part, i) => {
        if (part === "{m}") return <br key={i} className="lg:hidden" />;
        if (part === "{d}") return <br key={i} className="hidden xl:block" />;
        if (part === "{b}") return <br key={i} />;
        return part;
      })}
    </>
  );
}

const faqs: { question: string; answer?: ReactNode; open?: boolean }[] = [
  {
    question: "Does McLeod Family {m}Office accept outside {b}capital?",
    answer: (
      <Breaks text="No. The Office serves one family. It {m}does not solicit or {d}accept third-{m}party capital, manage external {m}client assets {d}or offer investment {m}products to the public." />
    ),
    open: true,
  },
  { question: "Is it a multi-family {m}office or an advisory {m}firm?" },
  { question: "How do I confirm a {m}message is genuinely {d}from {m}the Office?" },
  { question: "I received new bank {m}details from the Office. {b}What should I do?" },
  { question: "Will the Office ask for {m}my password or a {b}verification code?" },
  { question: "Can I send documents {m}with my first enquiry?" },
  { question: "Where are the Office’s {m}legal details published?" },
];

export function FaqSection() {
  return (
    <section
      id="questions"
      aria-labelledby="questions-heading"
      className="flex w-full flex-col items-start bg-timber-green py-[128px] mt-[143px] lg:mt-[58px] lg:px-[80px]"
    >
      <div className="mx-auto grid h-[1431.42px] w-full max-w-[1280px] grid-cols-1 gap-x-[24px] gap-y-[48px] px-[24px] lg:h-[824.95px] lg:grid-cols-12 lg:px-[64px]">
        <div className="flex flex-col items-start gap-[19px] lg:col-span-5 lg:gap-[18.9px]">
          <Image
            src="/images/home/faq-monogram.webp"
            alt=""
            width={56}
            height={56}
            className="size-[56px]"
          />
          <div className="w-full pb-[0.59px] pt-[12px]">
            <p className="font-sans text-[12px] font-semibold uppercase leading-[15.6px] tracking-[1.44px] text-twine">
              Questions
            </p>
          </div>
          <h2
            id="questions-heading"            className="font-serif text-[34px] font-normal leading-[38px] tracking-[-0.34px] text-spring-wood lg:pb-[0.69px] lg:text-[48px] lg:leading-[52.8px] lg:tracking-[-0.48px]"
          >
            Common
            <br />
            questions.
          </h2>
          <div className="w-full pt-[8.29px] lg:pt-[8.4px]">
            <p className="font-sans text-[16px] font-normal leading-[25.6px] text-foggy-gray whitespace-nowrap lg:whitespace-normal xl:whitespace-nowrap">
              <Breaks text="Answers to the questions counterparties most {m}often {d}need settled before they act." />
            </p>
          </div>
        </div>

        <div className="self-start border-t-[3px] border-solid border-twine bg-spring-wood px-[40px] py-[16px] lg:col-span-6 lg:col-start-7">
          <ul className="flex w-full flex-col">
            {faqs.map((item) => (
              <li key={item.question} className="border-b border-solid border-swirl">
                <details className="group" open={item.open}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-[24px] py-[26px] [&::-webkit-details-marker]:hidden">
                    <h3 className="font-serif text-[21px] font-normal leading-[28.35px] text-dune whitespace-nowrap lg:whitespace-normal xl:whitespace-nowrap">
                      <Breaks text={item.question} />
                    </h3>
                    <span
                      aria-hidden="true"
                      className="relative size-[28px] shrink-0 rounded-[14px] border border-solid border-twine"
                    >
                      <span className="absolute left-[8px] right-[8px] top-[13px] h-px bg-kumera" />
                      <span className="absolute left-[12.5px] top-[8.5px] h-[10px] w-px bg-kumera group-open:hidden" />
                    </span>
                  </summary>
                  {item.answer ? (
                    <div className="pb-[28px] font-sans text-[16px] font-normal leading-[26.4px] text-dune lg:max-w-[420px] whitespace-nowrap lg:whitespace-normal xl:whitespace-nowrap">
                      <p>{item.answer}</p>
                    </div>
                  ) : null}
                </details>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
