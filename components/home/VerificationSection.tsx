import Image from "next/image";
import Link from "next/link";

type LinesProps = {
  mobile: string[];
  desktop: string[];
};

/** Renders text with the exact line breaks of the mobile and desktop Figma frames. */
function Lines({ mobile, desktop }: LinesProps) {
  const join = (lines: string[]) =>
    lines.map((line, i) => (
      <span key={i}>
        {line}
        {i < lines.length - 1 ? <br /> : null}
      </span>
    ));
  return (
    <>
      <span className="whitespace-nowrap lg:hidden">{join(mobile)}</span>
      <span className="hidden whitespace-nowrap lg:inline">{join(desktop)}</span>
    </>
  );
}

const receivedOptions = [
  "New or changed payment details",
  "An email",
  "A website or link",
  "A request for passwords or codes",
  "A request for identity documents",
];

const rules: {
  title: string;
  mobile: string[];
  desktop: string[];
}[] = [
  {
    title: "Canonical domain",
    mobile: [
      "The official website is [CANONICAL",
      "DOMAIN]. Similar-looking domains, added",
      "words, hyphens or alternative extensions are",
      "unverified until independently confirmed.",
    ],
    desktop: [
      "The official website is [CANONICAL DOMAIN].",
      "Similar-looking domains, added words, hyphens",
      "or alternative extensions are unverified until",
      "independently confirmed.",
    ],
  },
  {
    title: "Correspondence domains",
    mobile: [
      "The Office corresponds only from its",
      "approved sending domains: [APPROVED",
      "SENDING DOMAINS].",
    ],
    desktop: [
      "The Office corresponds only from its approved",
      "sending domains: [APPROVED SENDING",
      "DOMAINS].",
    ],
  },
  {
    title: "Email authentication",
    mobile: [
      "Official sending domains enforce SPF, DKIM",
      "and DMARC. A failed check is a warning; a",
      "passed check does not by itself authorize a",
      "transaction.",
    ],
    desktop: [
      "Official sending domains enforce SPF, DKIM",
      "and DMARC. A failed check is a warning; a",
      "passed check does not by itself authorize a",
      "transaction.",
    ],
  },
  {
    title: "Payment and bank instructions",
    mobile: [
      "Do not act on new or changed payment",
      "instructions or bank details received solely",
      "by email, message or document.",
    ],
    desktop: [
      "Do not act on new or changed payment",
      "instructions or bank details received solely by",
      "email, message or document.",
    ],
  },
  {
    title: "Credentials and identity",
    mobile: [
      "The Office will never ask for passwords, MFA",
      "codes or recovery codes. Send identity",
      "documents only after independent",
      "verification, over a secure channel.",
    ],
    desktop: [
      "The Office will never ask for passwords, MFA",
      "codes or recovery codes. Send identity",
      "documents only after independent verification,",
      "over a secure channel.",
    ],
  },
  {
    title: "Callback protocol",
    mobile: [
      "Use a telephone number from the canonical",
      "website or public register — never a number",
      "supplied inside the message being verified.",
    ],
    desktop: [
      "Use a telephone number from the canonical",
      "website or public register — never a number",
      "supplied inside the message being verified.",
    ],
  },
];

export function VerificationSection() {
  return (
    <section
      id="verification"
      aria-labelledby="verification-heading"
      className="mt-[144px] flex w-full flex-col items-start bg-[#1a332a] py-[128px] lg:mt-[83px] lg:px-[80px]"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start gap-8 px-6 lg:px-16">
        {/* Chooser + high-risk card */}
        <div className="flex w-full flex-col pb-8 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-6 lg:pb-16">
          <div className="flex w-full max-w-[342px] flex-col items-start gap-[19px] pb-[0.9px] lg:col-span-5 lg:w-full lg:max-w-[466px] lg:pb-[25.86px]">
            <p className="w-full pb-[0.59px] text-[12px] font-semibold uppercase leading-[15.6px] tracking-[1.44px] text-[#c6a15b]">
              Official verification
            </p>
            <h2
              id="verification-heading"
              className="w-full font-serif text-[34px] font-normal leading-[38px] tracking-[-0.34px] text-[#f4f1ea] lg:pb-[0.8px] lg:text-[48px] lg:leading-[52.8px] lg:tracking-[-0.48px]"
            >
              Verify before you act.
            </h2>
            <p className="w-full pt-[12.3px] font-sans text-[18px] leading-[27.9px] text-[#f4f1ea] lg:w-[465px] lg:max-w-[465px] lg:pt-[13px] lg:text-[20px] lg:leading-[31px]">
              <Lines
                mobile={[
                  "Confirm that a communication is",
                  "genuinely from McLeod Family Office",
                  "before acting on a sensitive instruction",
                  "or disclosing confidential information.",
                ]}
                desktop={[
                  "Confirm that a communication is genuinely from",
                  "McLeod Family Office before acting on a sensitive",
                  "instruction or disclosing confidential information.",
                ]}
              />
            </p>
            <fieldset className="flex w-full min-w-0 flex-col items-start gap-4 border-0 p-0 pt-[29px]">
              <legend className="float-left w-full whitespace-nowrap p-0 font-sans text-[15px] leading-[19.5px] text-[#c9c2b2]">
                What have you received?
              </legend>
              <div className="clear-both flex w-full flex-wrap gap-2">
                {receivedOptions.map((label, i) => (
                  <label key={label} className="relative block cursor-pointer">
                    <input
                      type="radio"
                      name="verification-received"
                      value={label}
                      defaultChecked={i === 0}
                      className="peer sr-only"
                    />
                    <span className="flex min-h-[44px] items-center whitespace-nowrap rounded-[2px] border border-[rgba(244,241,234,0.4)] px-[18px] py-[10.75px] font-sans text-[15px] leading-[19.5px] text-[#f4f1ea] transition-colors hover:border-[#c6a15b] peer-checked:border-[#c6a15b] peer-checked:bg-[#c6a15b] peer-checked:text-[#1a332a] peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#c6a15b]">
                      {label}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          <div className="flex w-full flex-col items-start pt-12 lg:col-span-6 lg:col-start-7 lg:pt-0">
            <div className="flex w-full flex-col items-start gap-8">
              <article className="flex w-full flex-col items-start gap-[15px] rounded-[2px] border-t-[3px] border-solid border-[#6e2230] bg-[#f4f1ea] px-6 pb-7 pt-[27px] lg:px-11 lg:pb-[44px] lg:pt-[43px]">
                <p className="w-full pb-[0.59px] text-[12px] font-semibold uppercase leading-[15.6px] tracking-[1.44px] text-[#6e2230]">
                  High-risk instruction
                </p>
                <h3 className="w-full pt-[1px] font-serif text-[30px] font-normal leading-[36px] text-[#34322e]">
                  <span className="lg:hidden">
                    Payment and bank
                    <br />
                    instructions
                  </span>
                  <span className="hidden whitespace-nowrap lg:inline">
                    Payment and bank instructions
                  </span>
                </h3>
                <p className="w-full max-w-[528.76px] font-sans text-[16px] leading-[26.4px] text-[#34322e] pb-[1.4px] lg:pb-[17.4px]">
                  <Lines
                    mobile={[
                      "Do not act on new or changed payment",
                      "instructions or bank details received",
                      "solely by email, message or document.",
                    ]}
                    desktop={[
                      "Do not act on new or changed payment instructions or bank",
                      "details received solely by email, message or document.",
                    ]}
                  />
                </p>
                <div className="flex w-full flex-col items-start gap-[10px] border-t border-solid border-[#d6d1c6] pt-[40.1px] lg:pt-[23px]">
                  <p className="w-full pb-[0.59px] text-[12px] font-semibold uppercase leading-[15.6px] tracking-[1.44px] text-[#7f6127]">
                    What to do
                  </p>
                  <p className="w-full max-w-[536.54px] font-sans text-[16px] font-medium leading-[25.6px] text-[#34322e]">
                    <Lines
                      mobile={[
                        "Independently verify the instruction by",
                        "calling the Office on [CALLBACK",
                        "NUMBER], as published on",
                        "[CANONICAL DOMAIN] or the public",
                        "register.",
                      ]}
                      desktop={[
                        "Independently verify the instruction by calling the Office on",
                        "[CALLBACK NUMBER], as published on [CANONICAL DOMAIN]",
                        "or the public register.",
                      ]}
                    />
                  </p>
                </div>
              </article>
              <div className="flex w-full flex-wrap items-center gap-y-4">
                <Link
                  href="/verification"
                  className="flex min-h-[52px] items-center justify-center whitespace-nowrap rounded-[2px] border border-solid border-[#c6a15b] bg-[#c6a15b] px-7 py-[16px] text-center font-sans text-[15px] font-medium leading-[18px] text-[#1a332a]"
                >
                  Open the Verification Centre
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Photo */}
        <figure className="relative m-0 h-[260px] w-full overflow-hidden bg-[#1a332a] lg:h-[360px]">
          <div className="absolute inset-0 overflow-hidden opacity-75">
            <Image
              src="/images/home/verification-entrance-hall.webp"
              alt=""
              width={1600}
              height={900}
              sizes="(min-width: 1024px) 1152px, 462px"
              className="pointer-events-none absolute left-[-17.58%] top-0 h-full w-[135.15%] max-w-none lg:left-0 lg:top-[-40%] lg:h-[180%] lg:w-full"
            />
            <div className="pointer-events-none absolute left-0 top-[-295.75px] hidden h-[768px] w-full max-w-[1152px] lg:block">
              <Image
                src="/images/home/verification-team-desk.webp"
                alt="Colleagues gathered around a desk reviewing a screen together"
                fill
                sizes="1152px"
                className="object-cover"
              />
            </div>
          </div>
        </figure>

        {/* Standing rules */}
        <h3 className="w-full pt-8 font-serif text-[32px] font-normal leading-[38.4px] text-[#f4f1ea]">
          <span className="lg:hidden">
            Standing verification
            <br />
            rules
          </span>
          <span className="hidden lg:inline">Standing verification rules</span>
        </h3>
        <ul className="m-0 grid w-full list-none grid-cols-1 gap-y-10 p-0 lg:auto-rows-[169px] lg:grid-cols-3 lg:gap-x-8">
          {rules.map((rule) => (
            <li
              key={rule.title}
              className="flex flex-col items-start gap-3 self-start border-t border-solid border-[rgba(198,161,91,0.35)] pr-7 pt-7"
            >
              <h4 className="w-full font-serif text-[22px] font-normal leading-[normal] text-[#c6a15b]">
                {rule.title}
              </h4>
              <p className="w-full font-sans text-[15px] leading-[24px] text-[#f4f1ea]">
                <Lines mobile={rule.mobile} desktop={rule.desktop} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
