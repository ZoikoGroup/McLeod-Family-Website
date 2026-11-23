"use client";

import { useEffect, useState } from "react";

type OptionalKey = "measurement" | "functional";
type Choices = Record<OptionalKey, boolean>;

const STORAGE_KEY = "mcleod-cookie-preferences";
const DEFAULTS: Choices = { measurement: false, functional: false };

const optionalCategories: { key: OptionalKey; title: string; text: string }[] = [
  {
    key: "measurement",
    title: "Optional usage & measurement",
    text: "Privacy-minimized aggregate site reliability and page-use statistics, where enabled and approved. Refusing this category does not affect your ability to read or verify any content.",
  },
  {
    key: "functional",
    title: "Optional functional features",
    text: "Supports nonessential interface conveniences or verified third-party embeds, only where deployed. Refusing this category keeps optional embeds inactive.",
  },
];

const categoryTitle = "font-serif text-[22px] leading-8 text-te-papa-green";
const categoryText = "pt-1 font-serif text-base leading-[25px] text-dune/90";
const actionButton =
  "min-h-[50px] border px-6 py-2.5 font-serif text-lg leading-6 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-te-papa-green";

function readStored(): Choices | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<Choices>;
    return { measurement: parsed.measurement === true, functional: parsed.functional === true };
  } catch {
    return null;
  }
}

function ToggleGroup({
  label,
  on,
  onChange,
}: {
  label: string;
  on: boolean;
  onChange: (value: boolean) => void;
}) {
  const option = (active: boolean) =>
    `min-h-11 min-w-[60px] border px-3 font-serif text-base leading-6 transition-colors ${
      active
        ? "border-te-papa-green bg-te-papa-green text-white"
        : "border-swirl bg-white text-dune hover:border-te-papa-green"
    }`;

  return (
    <div role="group" aria-label={label} className="flex shrink-0 gap-2">
      <button type="button" aria-pressed={!on} onClick={() => onChange(false)} className={option(!on)}>
        Off
      </button>
      <button type="button" aria-pressed={on} onClick={() => onChange(true)} className={option(on)}>
        On
      </button>
    </div>
  );
}

export function PreferencesPanel() {
  const [choices, setChoices] = useState<Choices>(DEFAULTS);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const stored = readStored();
    if (stored) setChoices(stored);
  }, []);

  const save = (next: Choices, message: string) => {
    setChoices(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...next, savedAt: new Date().toISOString() }));
      setStatus(message);
    } catch {
      // Fail closed: optional technologies stay disabled if storage is blocked.
      setChoices(DEFAULTS);
      setStatus("Your browser blocked storage, so optional technologies remain off.");
    }
  };

  const update = (key: OptionalKey, value: boolean) => {
    setChoices((prev) => ({ ...prev, [key]: value }));
    setStatus("");
  };

  return (
    <div className="mt-8 bg-white px-5 py-8 sm:px-5 sm:py-9">
      <h3 className="font-serif text-2xl leading-8 text-te-papa-green">Active technology categories</h3>

      <ul className="max-w-[818px] pt-8">
        <li className="flex flex-col gap-4 border-b border-swirl pb-8 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
          <div className="max-w-[630px]">
            <h4 className={categoryTitle}>Strictly necessary</h4>
            <p className={categoryText}>
              Required for core site delivery, security integrity and remembering your privacy
              preference state. Because these technologies are essential to operate the requested
              service, they are not controlled by optional toggles.
            </p>
          </div>
          <span className="shrink-0 self-start border border-te-papa-green px-3 py-1.5 font-serif text-sm leading-5 tracking-wide text-te-papa-green uppercase">
            Required
          </span>
        </li>
        {optionalCategories.map((cat) => (
          <li
            key={cat.key}
            className="flex flex-col gap-4 border-b border-swirl py-6 sm:flex-row sm:items-start sm:justify-between sm:gap-10"
          >
            <div className="max-w-[630px]">
              <h4 className={categoryTitle}>{cat.title}</h4>
              <p className={categoryText}>{cat.text}</p>
            </div>
            <ToggleGroup
              label={cat.title}
              on={choices[cat.key]}
              onChange={(value) => update(cat.key, value)}
            />
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-4 pt-8">
        <button
          type="button"
          onClick={() => save(DEFAULTS, "Optional technologies rejected. Your choice has been saved.")}
          className={`${actionButton} border-dune bg-white text-dune hover:bg-dune/5`}
        >
          Reject optional
        </button>
        <button
          type="button"
          onClick={() => save(choices, "Your choices have been saved.")}
          className={`${actionButton} border-te-papa-green bg-te-papa-green text-white hover:bg-timber-green`}
        >
          Save my choices
        </button>
        <button
          type="button"
          onClick={() =>
            save({ measurement: true, functional: true }, "Optional technologies accepted. Your choice has been saved.")
          }
          className={`${actionButton} border-dune bg-white text-dune hover:bg-dune/5`}
        >
          Accept optional
        </button>
      </div>
      <p role="status" aria-live="polite" className="min-h-6 pt-4 font-serif text-base leading-6 text-te-papa-green">
        {status}
      </p>
    </div>
  );
}
