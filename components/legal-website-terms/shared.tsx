import type { ReactNode } from "react";
import { bodyText } from "@/components/legal-accessibility-statement/shared";

export const inlineLink = "text-te-papa-green underline-offset-4 hover:text-kumera hover:underline";

/** Shaded callout with a dark-green left rule. */
export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="mt-7 max-w-[800px] border-l-2 border-te-papa-green bg-sisal/30 px-6 py-7">
      <p className={bodyText}>{children}</p>
    </div>
  );
}
