import Link from "next/link";
import { Fragment } from "react";
import { DefinitionRow, SectionShell } from "@/components/legal-accessibility-statement/shared";
import { inlineLink } from "./shared";

const related = [
  { label: "Legal Notices", href: "/legal" },
  { label: "Privacy Notice", href: "/privacy" },
  { label: "Cookie Notice", href: "/legal/cookie-notice" },
  { label: "Accessibility Statement", href: "/legal/accessibility-statement" },
];

export function ChangesNoticesSection() {
  return (
    <SectionShell
      id="changes-notices"
      title="08. Changes, Versioning & Related Notices"
      intro={
        <p>
          These Website Terms may be updated through our governed legal-review and publication
          process. Effective dates and revision records are published only upon signed legal
          approval.
        </p>
      }
    >
      <dl className="max-w-[1000px] [&>div:first-child]:pt-6">
        <DefinitionRow term="Related legal disclosures">
          <span className="flex flex-wrap items-center gap-x-2.5">
            {related.map((item, i) => (
              <Fragment key={item.href}>
                {i > 0 && <span aria-hidden="true">·</span>}
                <Link href={item.href} className={inlineLink}>
                  {item.label}
                </Link>
              </Fragment>
            ))}
          </span>
        </DefinitionRow>
        <DefinitionRow term="Official contact">
          For legitimate institutional enquiries regarding these terms, use{" "}
          <Link href="/contact" className={inlineLink}>
            Contact the Office
          </Link>
          .
        </DefinitionRow>
      </dl>
    </SectionShell>
  );
}
