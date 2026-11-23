import Link from "next/link";
import { Fragment } from "react";
import { DefinitionRow, SectionShell } from "./shared";

const routes = [
  { label: "Contact the Office", href: "/contact" },
  { label: "Open the Verification Centre", href: "/verification" },
  { label: "Privacy Notice", href: "/privacy" },
];

export function StatementUpdatesSection() {
  return (
    <SectionShell
      id="statement-updates"
      title="Statement updates and boundaries"
      intro={
        <p>
          This Accessibility Statement is a user-assistance and institutional trust disclosure. It is
          not legal advice, a third-party certification or a guarantee that every external link or
          future page is free of barriers.
        </p>
      }
    >
      <dl className="max-w-[1000px] [&>div:first-child]:pt-6">
        <DefinitionRow term="Last reviewed">
          Published and updated only upon signed Accessibility and Product review.
        </DefinitionRow>
        <DefinitionRow term="Related official routes">
          <span className="flex flex-wrap items-center gap-x-2.5">
            {routes.map((route, i) => (
              <Fragment key={route.href}>
                {i > 0 && <span aria-hidden="true">·</span>}
                <Link
                  href={route.href}
                  className="text-te-papa-green underline-offset-4 transition-colors hover:text-kumera hover:underline"
                >
                  {route.label}
                </Link>
              </Fragment>
            ))}
          </span>
        </DefinitionRow>
      </dl>
    </SectionShell>
  );
}
