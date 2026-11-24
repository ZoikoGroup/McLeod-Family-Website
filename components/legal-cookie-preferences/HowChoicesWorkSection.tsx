import { bodyText, SectionShell } from "@/components/legal-accessibility-statement/shared";

const principles = [
  {
    title: "Equal choice parity",
    text: "Refusing optional technologies is as direct and accessible as accepting them, with no prechecked positive toggles or coercive prompts.",
  },
  {
    title: "Authoritative persistence",
    text: "Draft changes do not activate optional scripts. Confirmation appears only after your choice has been reliably stored.",
  },
  {
    title: "Withdrawal & cleanup limits",
    text: "Withdrawing a previously granted choice stops future optional loading and removes locally accessible identifiers where technically possible. It does not retroactively erase previously transmitted data.",
  },
  {
    title: "Fail-closed resilience",
    text: "If preference controls are temporarily unavailable or browser storage is blocked, optional technologies remain disabled where consent is required.",
  },
];

export function HowChoicesWorkSection() {
  return (
    <SectionShell id="how-choices-work" title="How your choices work">
      <blockquote className="mt-6 max-w-[800px] border-l-2 border-twine pl-6">
        <p className="font-serif text-xl leading-[29px] text-te-papa-green italic">
          One trustworthy control. Verified technologies only. Real, reversible choice when
          applicable.
        </p>
      </blockquote>
      <p className={`max-w-[800px] pt-8 ${bodyText}`}>
        Consent controls are engineered to enforce your selection before optional scripts load,
        rather than acting as a cosmetic banner.
      </p>
      <ol className="max-w-[900px] pt-6">
        {principles.map((item, i) => (
          <li
            key={item.title}
            className="grid grid-cols-[48px_minmax(0,1fr)] border-b border-swirl py-6 sm:grid-cols-[72px_minmax(0,1fr)]"
          >
            <span aria-hidden="true" className="pt-1 font-serif text-xl leading-7 text-twine">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-serif text-xl leading-7 text-te-papa-green">{item.title}</h3>
              <p className={`pt-2 ${bodyText}`}>{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
