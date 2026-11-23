import { bodyText, ColumnList, SectionShell, type Column } from "./shared";

const scope: Column[] = [
  {
    title: "Core site templates",
    text: "Global header, navigation, editorial pages, footer disclosures and official verification guidance.",
  },
  {
    title: "Essential user tasks",
    text: "Reading public disclosures, verifying official communications and initiating legitimate institutional contact.",
  },
  {
    title: "Third-party boundaries",
    text: "Where external services or linked portals are referenced, their independent accessibility boundaries are disclosed separately.",
  },
];

export function CommitmentScopeSection() {
  return (
    <SectionShell id="commitment-scope" title="Our commitment and scope" divider={false}>
      <blockquote className="mt-6 max-w-[800px] border-l-2 border-twine pl-6">
        <p className="font-serif text-xl leading-[29px] text-te-papa-green italic">
          We aim to make information and essential website functions usable for people with a wide
          range of accessibility needs.
        </p>
      </blockquote>
      <p className={`max-w-[800px] pt-8 ${bodyText}`}>
        This Accessibility Statement applies to the public informational website of McLeod Family
        Office, including its navigation, verification guidance, legal notices and institutional
        contact routes. It is maintained as a visible HTML page so that no document download is
        required to read essential accessibility information.
      </p>
      <ColumnList items={scope} />
    </SectionShell>
  );
}
