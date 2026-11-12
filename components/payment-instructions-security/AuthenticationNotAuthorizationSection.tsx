export function AuthenticationNotAuthorizationSection() {
  return (
    <section aria-label="Authentication is not authorization" className="pt-24">
      <div className="border-t border-[#D6D1C6] pt-6">
        <h2 className="font-serif text-[32px] leading-[36px] sm:text-[40px] sm:leading-[44px] text-[#23463A]">
          Authentication is not authorization
        </h2>
        <p className="pt-6 font-serif text-[16px] leading-[25px] sm:text-[17px] sm:leading-[26.35px] text-[#34322E] max-w-[800px]">
          Website-domain listings and email authentication can help assess origin. They cannot independently confirm who is authorized to direct a transaction.
        </p>

        <div className="pt-12">
          <div className="grid grid-cols-1 md:grid-cols-[322.66px_1fr] lg:grid-cols-[322.66px_645.34px] gap-2 md:gap-8 border-b border-[#D6D1C6] pb-6">
            <h3 className="font-serif text-[20px] sm:text-[22px] leading-[27.5px] text-[#23463A] max-w-[323px]">
              Sender shows SPF/DKIM/DMARC pass
            </h3>
            <p className="font-serif text-[16px] leading-[25px] sm:text-[17px] sm:leading-[26.35px] text-[#34322E] max-w-[646px]">
              Authentication may describe message delivery/provenance; it does not authorize the specific request.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

