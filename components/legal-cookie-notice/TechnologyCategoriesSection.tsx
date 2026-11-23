import { ColumnList, SectionShell, type Column } from "@/components/legal-accessibility-statement/shared";

const categories: Column[] = [
  {
    title: "Strictly necessary",
    text: "Essential for core page delivery, transport security, load balancing and remembering your privacy preference state. These cannot be turned off through optional settings.",
  },
  {
    title: "Optional measurement",
    text: "Privacy-minimized aggregate reliability and page-use statistics, only where enabled and approved. Remains inactive until you grant permission where consent is required.",
  },
  {
    title: "Optional functional features",
    text: "Supports nonessential interface conveniences or verified third-party embeds, only where deployed. Refusing this category keeps optional embeds inactive.",
  },
];

export function TechnologyCategoriesSection() {
  return (
    <SectionShell
      id="technology-categories"
      title="Categories of technologies"
      intro={
        <p>
          Where a technology is active on this site, it is classified by its specific functional
          purpose rather than bundled under vague labels.
        </p>
      }
    >
      <ColumnList items={categories} />
    </SectionShell>
  );
}
