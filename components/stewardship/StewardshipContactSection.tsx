import Link from "next/link";

export function StewardshipContactSection() {
  return (
    <section
      id="stewardship-contact"
      className="border-t border-[rgba(244,241,234,0.2)] bg-te-papa-green"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 lg:min-h-[542px] lg:grid-cols-[minmax(0,735px)_minmax(0,705px)]">
        <div className="flex flex-col items-start justify-center border-b border-[rgba(244,241,234,0.2)] px-6 py-16 lg:border-b-0 lg:p-[96px]">
          <p className="pb-6 text-[12px] uppercase leading-[16px] tracking-[1.2px] text-[rgba(244,241,234,0.5)]">
            Official Channels
          </p>
          <h2 className="pb-6 font-serif text-[26px] leading-[34px] text-spring-wood lg:min-h-[60px] lg:text-[30px] lg:leading-[36px]">
            Verify the institution before acting.
          </h2>
          <p className="pb-10 text-[16px] leading-[26px] text-[rgba(244,241,234,0.8)] lg:w-full lg:max-w-[448px] lg:text-[18px] lg:leading-[29.25px]">
            Confirm official domains and correspondence guidance before acting
            on a sensitive instruction or disclosing confidential information.
          </p>
          <Link
            href="/verification"
            className="flex items-center justify-center bg-[#b89c63] px-8 py-4 text-center text-[16px] font-medium leading-[29.25px] text-te-papa-green lg:text-[18px]"
          >
            Open the Verification Centre →
          </Link>
        </div>
        <div className="flex flex-col items-start justify-center px-6 py-16 lg:border-l lg:border-[rgba(244,241,234,0.2)] lg:p-[96px]">
          <p className="pb-6 text-[12px] uppercase leading-[16px] tracking-[1.2px] text-[rgba(244,241,234,0.5)]">
            Institutional Enquiries
          </p>
          <h2 className="pb-6 font-serif text-[26px] leading-[34px] text-spring-wood lg:min-h-[60px] lg:text-[30px] lg:leading-[36px]">
            Contact the Office
          </h2>
          <p className="pb-10 text-[16px] leading-[26px] text-[rgba(244,241,234,0.8)] lg:w-full lg:max-w-[448px] lg:text-[18px] lg:leading-[29.25px]">
            For legal, banking, corporate, governance, professional or
            administrative enquiries, use the Office’s official contact route.
            Do not send sensitive material before a secure channel has been
            established.
          </p>
          <Link
            href="/contact"
            className="flex items-center justify-center border border-spring-wood px-8 py-4 text-center text-[16px] font-medium leading-[29.25px] text-spring-wood lg:text-[18px]"
          >
            Contact the Office →
          </Link>
        </div>
      </div>
    </section>
  );
}
