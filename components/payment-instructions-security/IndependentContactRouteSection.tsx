export function IndependentContactRouteSection() {
  return (
    <section aria-label="Choose an independent contact route" className="pt-24">
      <div className="border-t border-[#D6D1C6] pt-6">
        <h2 className="font-serif text-[32px] leading-[36px] sm:text-[40px] sm:leading-[44px] text-[#23463A]">
          Choose an independent contact route
        </h2>
        <p className="pt-6 font-serif text-[16px] leading-[25px] sm:text-[17px] sm:leading-[26.35px] text-[#34322E] max-w-[800px]">
          Locate a trusted channel from a source you obtained separately, such as an established contact record or the official Verification Centre. Do not use the number or link contained in the instruction being assessed.
        </p>

        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px]">
          <div className="border-t border-[#D6D1C6] pt-6">
            <h3 className="font-serif text-[18px] leading-[22.5px] text-[#23463A]">
              Contact number unavailable
            </h3>
            <p className="pt-3 pb-6 font-serif text-[16px] leading-[25px] sm:text-[17px] sm:leading-[26.35px] text-[#34322E] max-w-[484px]">
              Keep instruction on hold; do not guess a number; use an already verified relationship or authoritative independent record.
            </p>
          </div>

          <div className="border-t border-[#D6D1C6] pt-6">
            <h3 className="font-serif text-[18px] leading-[22.5px] text-[#23463A]">
              Sensitive document requested
            </h3>
            <p className="pt-3 pb-6 font-serif text-[16px] leading-[25px] sm:text-[17px] sm:leading-[26.35px] text-[#34322E] max-w-[484px]">
              Do not upload/pass sensitive records on public site; establish an agreed secure route after independent verification.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

