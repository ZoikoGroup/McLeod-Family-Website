import Link from "next/link";
import { DefinitionRow, SectionShell } from "@/components/legal-accessibility-statement/shared";
import { inlineLink } from "@/components/legal-website-terms/shared";

export function CookiesSecuritySection() {
  return (
    <SectionShell id="cookies-security" title="08. Cookies, Security & Changes">
      <dl className="max-w-[1000px] [&>div:first-child]:pt-6">
        <DefinitionRow term="Cookies & similar technologies">
          For full details on device storage and available choices, read our{" "}
          <Link href="/legal/cookie-notice" className={inlineLink}>
            Cookie Notice
          </Link>{" "}
          or open{" "}
          <Link href="/legal/cookie-preferences" className={inlineLink}>
            Cookie Preferences
          </Link>{" "}
          where enabled.
        </DefinitionRow>
        <DefinitionRow term="Security & anti-fraud boundary">
          We apply technical and organizational safeguards appropriate to a private family office,
          though no internet transmission is guaranteed completely risk-free. Never act on changed
          bank details or sensitive requests from email alone—use the{" "}
          <Link href="/verification" className={inlineLink}>
            Verification Centre
          </Link>
          .
        </DefinitionRow>
        <DefinitionRow term="Children & public scope">
          This institutional website is not directed at children and does not knowingly collect
          personal information from minors.
        </DefinitionRow>
        <DefinitionRow term="Updates & related notices">
          Material changes are published with a verified revision record. See also{" "}
          <Link href="/legal" className={inlineLink}>
            Legal Notices
          </Link>
          ,{" "}
          <Link href="/legal/website-terms" className={inlineLink}>
            Website Terms
          </Link>{" "}
          and{" "}
          <Link href="/legal/accessibility-statement" className={inlineLink}>
            Accessibility Statement
          </Link>
          .
        </DefinitionRow>
      </dl>
    </SectionShell>
  );
}
