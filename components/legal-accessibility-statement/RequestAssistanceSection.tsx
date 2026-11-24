import { bodyText, SectionShell } from "./shared";

const steps = [
  {
    title: "Identify the affected page or task",
    text: "Share the page name or web address and a brief description of what was difficult to use.",
  },
  {
    title: "Tell us your preferred format or reply channel",
    text: "Let us know the accessible format you need and the minimum contact detail required for a reply.",
  },
  {
    title: "Protect your privacy",
    text: "Do not include disability diagnoses, medical histories, passwords, one-time codes, identity documents or financial records in your message.",
  },
];

export function RequestAssistanceSection() {
  return (
    <SectionShell
      id="request-assistance"
      title="Request assistance or report a barrier"
      intro={
        <p>
          If something on this website is difficult to use, or if you need public information in an
          alternative accessible format, please tell us which page or task was affected and how we
          can help.
        </p>
      }
    >
      <ol className="max-w-[900px] pt-6">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="grid grid-cols-[48px_minmax(0,1fr)] border-b border-swirl py-6 sm:grid-cols-[72px_minmax(0,1fr)]"
          >
            <span aria-hidden="true" className="pt-1 font-serif text-xl leading-7 text-twine">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-serif text-xl leading-7 text-te-papa-green">{step.title}</h3>
              <p className={`pt-2 ${bodyText}`}>{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
