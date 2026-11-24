import { SectionShell } from "@/components/legal-accessibility-statement/shared";

const columns = ["Purpose", "Information used", "Basis & governance", "Retention reference"];

const rows = [
  {
    purpose: "Respond to institutional enquiries",
    info: "Name, organization, work email, enquiry category and message",
    basis: "Legitimate institutional correspondence and pre-contractual context where applicable",
    retention: "Per approved enquiry records schedule",
  },
  {
    purpose: "Operate & secure the website",
    info: "Essential security logs, request metadata and strictly necessary storage",
    basis: "Security necessity and reliable service operation",
    retention: "Per security log retention policy",
  },
  {
    purpose: "Honor privacy rights",
    info: "Request type, minimal contact detail and scoped verification record",
    basis: "Applicable legal obligation and accountability recordkeeping",
    retention: "Per rights-audit retention schedule",
  },
  {
    purpose: "Prevent fraud & misuse",
    info: "Security logs and verified incident reports (where operational)",
    basis: "Proportionate fraud prevention and institutional protection",
    retention: "Per incident and legal-hold policy",
  },
];

const cell = "px-5 py-6 align-top font-serif text-base leading-[25px] text-dune/90";

export function InformationUseSection() {
  return (
    <SectionShell
      id="information-use"
      title="04. How & Why Personal Information Is Used"
      intro={
        <p>
          Every processing activity is tied to a specific institutional purpose, reviewed legal basis
          where applicable, and governed retention schedule.
        </p>
      }
    >
      <div className="mt-9 max-w-[1000px] overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <caption className="sr-only">Purposes for processing personal information</caption>
          <thead className="bg-sisal/30">
            <tr className="border-y border-swirl">
              {columns.map((col) => (
                <th
                  key={col}
                  scope="col"
                  className="px-5 py-4 align-top font-serif text-base leading-6 font-normal tracking-wide text-te-papa-green uppercase"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.purpose} className="border-b border-swirl">
                <th scope="row" className={`${cell} w-[180px] font-normal`}>
                  {row.purpose}
                </th>
                <td className={`${cell} w-[290px]`}>{row.info}</td>
                <td className={cell}>{row.basis}</td>
                <td className={`${cell} w-[180px]`}>{row.retention}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionShell>
  );
}
