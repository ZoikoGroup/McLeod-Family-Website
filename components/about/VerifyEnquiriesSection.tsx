import Link from "next/link";

export function VerifyEnquiriesSection() {
  return (
    <section
      id="verify-enquiries"
      className="overflow-hidden border-t border-[rgba(244,241,235,0.1)] bg-[#1b2b23] font-serif"
    >
      <div className="grid grid-cols-1 lg:min-h-[491.25px] lg:grid-cols-2 min-[1440px]:grid-cols-[735px_1fr]!">
        <div className="flex flex-col items-start justify-center border-b border-[rgba(244,241,235,0.1)] px-6 py-16 min-[1440px]:w-[718px]! min-[1440px]:justify-self-end! lg:border-b-0 lg:border-r lg:p-12 min-[1440px]:p-24!">
          <h3 className="pb-6 text-[12px] uppercase leading-[16px] tracking-[1.2px] text-[#b89c63]">
            Verify Before You Act
          </h3>
          <p className="pb-10 text-[20px] leading-[32px] text-[rgba(244,241,235,0.9)] lg:w-full lg:max-w-[448px] lg:text-[24px] lg:leading-[39px]">
            Confirm official McLeod domains, correspondence channels and the
            independent callback protocol before acting on sensitive
            instructions.
          </p>
          <Link
            href="/verification"
            className="flex items-center justify-center bg-[#b89c63] px-8 py-4 text-center text-[18px] leading-[29.25px] text-[#1b2b23]"
          >
            Open the Verification Centre
          </Link>
        </div>
        <div className="flex flex-col items-start justify-center bg-[#16231d] px-6 py-16 lg:p-12 min-[1440px]:p-24!">
          <h3 className="pb-6 text-[12px] uppercase leading-[16px] tracking-[1.2px] text-[#b89c63]">
            Institutional Enquiries
          </h3>
          <p className="pb-10 text-[20px] leading-[32px] text-[rgba(244,241,235,0.9)] lg:w-full lg:max-w-[448px] lg:text-[24px] lg:leading-[39px]">
            For legal, banking, corporate, governance, professional or
            administrative matters, contact the Office through an official
            channel.
          </p>
          <Link
            href="/contact"
            className="flex items-center justify-center border border-[#b89c63] px-8 py-4 text-center text-[18px] leading-[29.25px] text-[#b89c63]"
          >
            Contact the Office
          </Link>
        </div>
      </div>
    </section>
  );
}
