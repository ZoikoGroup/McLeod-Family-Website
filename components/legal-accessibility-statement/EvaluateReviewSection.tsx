import { ColumnList, SectionShell, type Column } from "./shared";

const practices: Column[] = [
  {
    title: "Evaluation methods",
    text: "Combined automated checks and manual testing across keyboard-only navigation, screen readers, 200% text resize and 400% browser zoom.",
  },
  {
    title: "Re-evaluation triggers",
    text: "Major template updates, new interactive controls, newly published public documents or high-impact user-reported barriers.",
  },
  {
    title: "Statement governance",
    text: "Review dates, conformance status and known limitations are updated only from verified internal evaluation records.",
  },
];

export function EvaluateReviewSection() {
  return (
    <SectionShell
      id="evaluate-review"
      title="How we evaluate, improve and review"
      intro={
        <p>
          Accessibility is maintained through ongoing design, engineering and manual quality checks
          rather than a one-time automated scan.
        </p>
      }
    >
      <ColumnList items={practices} />
    </SectionShell>
  );
}
