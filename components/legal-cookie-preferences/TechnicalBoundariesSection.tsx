import { DefinitionRow, SectionShell } from "@/components/legal-accessibility-statement/shared";

const boundaries = [
  {
    term: "Policy versioning",
    text: "If a materially new optional purpose is introduced in the future, prior permissions are not silently extended—you will be asked to review the new choice.",
  },
  {
    term: "Browser privacy signals",
    text: "Support for signals such as Global Privacy Control (GPC) is applied only where technically supported and legally applicable, without overclaiming universal behavior.",
  },
  {
    term: "No JavaScript / blocked storage",
    text: "Core institutional notices, verification guidance and legal pages remain server-rendered and readable even when JavaScript or browser storage is disabled.",
  },
  {
    term: "No tracking of preference choices",
    text: "We do not attach advertising pixels, cross-site identifiers or behavioral profiling to your privacy preference interactions.",
  },
];

export function TechnicalBoundariesSection() {
  return (
    <SectionShell id="technical-boundaries" title="Browser signals & technical boundaries">
      <dl className="max-w-[1000px] [&>div:first-child]:pt-6">
        {boundaries.map((item) => (
          <DefinitionRow key={item.term} term={item.term}>
            {item.text}
          </DefinitionRow>
        ))}
      </dl>
    </SectionShell>
  );
}
