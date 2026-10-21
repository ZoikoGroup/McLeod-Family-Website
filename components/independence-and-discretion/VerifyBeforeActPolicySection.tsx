import Link from "next/link";

export function VerifyBeforeActPolicySection() {
  return (
    <section
      id="verify-before-you-act"
      aria-labelledby="verify-policy-heading"
      className="w-full rounded-[2px] bg-te-papa-green p-8 md:p-12 text-spring-wood"
    >
      <h2
        id="verify-policy-heading"
        className="font-serif text-[28px] leading-[33px] text-spring-wood sm:text-[32px] sm:leading-[37px]"
      >
        Verify Before You Act
      </h2>
      <p className="max-w-[822px] pt-4 text-base leading-[27px] text-spring-wood/90 sm:text-[17px]">
        New or changed bank details and payment instructions require independent confirmation through a<br className="hidden sm:inline" /> contact route obtained separately from the message.
      </p>
      <p className="max-w-[822px] pt-6 pb-8 text-sm leading-6 text-spring-wood/80 sm:text-[15px]">
        Email authentication (SPF/DKIM/DMARC) indicates server configuration, not transaction authorization. Never<br className="hidden sm:inline" /> provide passwords, MFA codes, or sensitive identity materials in response to unexpected communications.
      </p>
      <div>
        <Link
          href="/verification"
          className="inline-flex min-h-[48px] items-center justify-center rounded-[2px] border border-twine bg-twine px-6 py-3 text-sm font-medium leading-[22px] tracking-[0.7px] text-white transition-colors hover:bg-[#b38f4c]"
        >
          Open Verification Centre →
        </Link>
      </div>
    </section>
  );
}
