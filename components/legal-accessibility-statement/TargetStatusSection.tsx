import { bodyText, DefinitionRow, SectionShell } from "./shared";

const principles = [
  {
    term: "Perceivable",
    text: "Logical content order, text contrast of at least 4.5:1 for normal text, and no essential meaning conveyed solely through color.",
  },
  {
    term: "Operable",
    text: "Keyboard-accessible navigation, visible focus indicators, skip-to-content links and support for reduced-motion preferences.",
  },
  {
    term: "Understandable",
    text: "Plain American English, predictable footer structure, descriptive link names and clear form validation guidance.",
  },
  {
    term: "Robust",
    text: "Semantic HTML landmarks, proper heading hierarchy and server-rendered core text that remains readable without JavaScript.",
  },
];

export function TargetStatusSection() {
  return (
    <SectionShell
      id="target-status"
      title="Accessibility target and current status"
      intro={
        <p>
          Our design and testing target is the Web Content Accessibility Guidelines (WCAG) 2.2 Level
          AA. Setting a target is a process commitment; actual conformance is established only
          through scoped evaluation of the live website.
        </p>
      }
    >
      <div className="mt-7 max-w-[800px] border-l-2 border-te-papa-green bg-sisal/30 px-6 py-5">
        <p className={bodyText}>
          Current evaluation status: Conformance status and scoped audit outcomes are published here
          only when supported by a completed, signed evaluation record. Automated scores alone are
          never presented as proof of full WCAG 2.2 Level AA conformance.
        </p>
      </div>
      <dl className="max-w-[1000px] [&>div:first-child]:pt-10">
        {principles.map((p) => (
          <DefinitionRow key={p.term} term={p.term}>
            {p.text}
          </DefinitionRow>
        ))}
      </dl>
    </SectionShell>
  );
}
