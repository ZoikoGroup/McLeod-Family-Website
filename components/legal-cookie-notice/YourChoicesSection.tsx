import Link from "next/link";
import type { ReactNode } from "react";
import { bodyText, SectionShell } from "@/components/legal-accessibility-statement/shared";

const link = "text-te-papa-green underline-offset-4 hover:text-kumera hover:underline";

const steps: { title: string; text: ReactNode }[] = [
  {
    title: "Manage via Cookie Preferences",
    text: (
      <>
        Select{" "}
        <Link href="/legal/cookie-preferences" className={link}>
          Cookie Preferences
        </Link>{" "}
        in the footer on any page to review your current settings, change optional categories or
        withdraw previously granted consent.
      </>
    ),
  },
  {
    title: "Effect of withdrawal",
    text: "Withdrawing a preference stops future optional loading covered by your updated choice and removes locally accessible optional items where technically possible. It does not retroactively erase data already processed before withdrawal.",
  },
  {
    title: "Browser & device settings",
    text: "You can also block or delete cookies through your browser settings. Note that blocking strictly necessary cookies may affect core site functionality, and browser deletion is separate from updating preference records.",
  },
];

export function YourChoicesSection() {
  return (
    <SectionShell
      id="your-choices"
      title="Your choices, withdrawal and browser controls"
      intro={
        <p>
          Where optional technologies are active and require a choice, you can accept, refuse or
          customize categories with equal ease.
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
