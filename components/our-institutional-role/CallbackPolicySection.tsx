import Link from "next/link";

export function CallbackPolicySection() {
  return (
    <section
      id="callback-policy"
      aria-labelledby="callback-policy-heading"
      className="w-full rounded-[2px] bg-te-papa-green p-8 md:p-12 text-spring-wood"
    >
      <h2
        id="callback-policy-heading"
        className="font-serif text-[28px] leading-[33px] text-spring-wood sm:text-[32px] sm:leading-[37px]"
      >
        Verifiable Engagement &amp; Callback Policy
      </h2>
      <p className="max-w-[822px] pt-4 text-base leading-[27px] text-spring-wood/90 sm:text-[17px]">
        Never act on new or changed bank details or payment instructions solely because they arrive via<br className="hidden sm:inline" /> email or electronic document.
      </p>
      <p className="max-w-[822px] pt-6 pb-8 text-sm leading-6 text-spring-wood/80 sm:text-[15px]">
        Important instructions require independent callback verification using an official contact route sourced separately<br className="hidden sm:inline" /> from the message. Email authentication (SPF/DKIM/DMARC) indicates sender configuration, not transaction<br className="hidden sm:inline" /> authorization.
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
