import { SectionShell } from "@/components/legal-accessibility-statement/shared";

const columns = ["Name & type", "Provider", "Category", "Purpose", "Duration"];

const rows = [
  {
    name: "Core session & security token",
    type: "HTTP Cookie",
    provider: "McLeod Family Office (First-party)",
    category: "Strictly necessary",
    purpose:
      "Maintains secure request integrity, routing stability and protection against cross-site request forgery.",
    duration: "Session",
  },
  {
    name: "Preference state record",
    type: "First-party storage",
    provider: "McLeod Family Office (First-party)",
    category: "Strictly necessary",
    purpose:
      "Remembers your saved cookie preference choices and policy version so your selection is respected on return visits.",
    duration: "Governed policy term",
  },
  {
    name: "Optional technologies",
    type: "Conditional",
    provider: "Verified provider only",
    category: "Optional (when active)",
    purpose:
      "Listed individually with exact provider, purpose and expiration only when deployed and approved under our technology register.",
    duration: "Per verified register",
  },
];

const cell = "px-5 py-6 align-top font-serif text-base leading-[25px] text-dune/90";

export function TechnologyInventorySection() {
  return (
    <SectionShell
      id="technology-inventory"
      title="Technology inventory"
      intro={
        <p>
          The table below outlines the governed fields maintained for each active storage or access
          technology. Exact runtime entries are populated solely from our signed production scan and
          privacy register.
        </p>
      }
    >
      <div className="mt-9 max-w-[1000px] overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-left">
          <caption className="sr-only">Storage and access technologies used on this website</caption>
          <thead className="bg-sisal/30">
            <tr className="border-y border-swirl">
              {columns.map((col) => (
                <th
                  key={col}
                  scope="col"
                  className="px-5 py-4 font-serif text-base leading-6 font-normal tracking-wide text-te-papa-green uppercase"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name} className="border-b border-swirl">
                <th scope="row" className={`${cell} w-[164px] font-normal`}>
                  {row.name}
                  <span className="block">{row.type}</span>
                </th>
                <td className={`${cell} w-[170px]`}>{row.provider}</td>
                <td className={`${cell} w-[150px]`}>{row.category}</td>
                <td className={cell}>{row.purpose}</td>
                <td className={`${cell} w-[128px]`}>{row.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionShell>
  );
}
