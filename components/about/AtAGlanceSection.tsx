const facts: { term: string; desc: string; lg: string }[] = [
  { term: "Type", desc: "Private single-family office", lg: "" },
  {
    term: "Serves",
    desc: "The McLeod family and purpose-specific entities established for family purposes",
    lg: "",
  },
  { term: "External clients", desc: "None", lg: "" },
  { term: "Third-party capital", desc: "Not solicited or accepted", lg: "" },
  { term: "Public investment products", desc: "None", lg: "" },
  {
    term: "Primary mandate",
    desc: "Capital and legacy stewardship; enterprise oversight; governance; continuity",
    lg: "",
  },
];

const rowCls =
  "border-t border-[rgba(27,43,35,0.15)] pt-4";
const termCls =
  "font-serif text-[12px] leading-[16px] tracking-[1.2px] uppercase text-[rgba(27,43,35,0.6)]";

export function AtAGlanceSection() {
  return (
    <section
      id="at-a-glance"
      className="border-b border-[rgba(27,43,35,0.15)] bg-[#f4f1eb] py-16 lg:py-[96px]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <div className="flex flex-col gap-8 lg:grid lg:h-[468px] lg:grid-cols-[repeat(10,minmax(0,1fr))] lg:gap-12">
          <div className="lg:col-span-3">
            <h2 className="font-serif text-[26px] leading-[36px] text-[#1b2b23] lg:text-[30px]">
              At a glance
            </h2>
            <p className="pt-4 font-serif lg:h-[46px] text-[18px] leading-[29.25px] text-[rgba(26,26,26,0.6)]">
              Institutional perimeter and facts.
            </p>
          </div>
          <dl className="grid grid-cols-1 gap-8 lg:col-span-7 lg:h-[468px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:grid-rows-[93px_65px_93px_121px] lg:gap-x-12 lg:gap-y-8">
            {facts.map((f) => (
              <div key={f.term} className={rowCls}>
                <dt className={termCls}>{f.term}</dt>
                <dd className="pt-1 font-serif text-[20px] leading-[28px] text-[#1a1a1a]">
                  {f.desc}
                </dd>
              </div>
            ))}
            <div className={`${rowCls} lg:col-span-2`}>
              <dt className={termCls}>Headquarters &amp; Presence</dt>
              <dd className="flex flex-col gap-6 pt-2 lg:flex-row lg:gap-8">
                <div className="lg:min-w-0 lg:flex-[271.344_1_0%]">
                  <p className="pb-1 font-serif text-[14px] leading-[20px] text-[rgba(27,43,35,0.5)]">
                    HQ
                  </p>
                  <p className="font-serif text-[20px] leading-[28px] text-[#1a1a1a]">
                    {"\u00a0"}Sacramento, California,{" "}
                    <br className="hidden lg:block" />
                    United States
                  </p>
                </div>
                <div className="lg:min-w-0 lg:flex-[544.656_1_0%]">
                  <p className="pb-1 font-serif text-[14px] leading-[20px] text-[rgba(27,43,35,0.5)]">
                    European HQ
                  </p>
                  <p className="font-serif text-[20px] leading-[28px] text-[#1a1a1a]">
                    {"\u00a0"}167–169 Great Portland Street, 5th Floor, London W1W 5PF,{" "}
                    <br className="hidden lg:block" />
                    United Kingdom
                  </p>
                </div>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
