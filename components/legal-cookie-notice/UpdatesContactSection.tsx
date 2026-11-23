import Link from "next/link";
import { DefinitionRow, SectionShell } from "@/components/legal-accessibility-statement/shared";

const link = "text-te-papa-green underline-offset-4 hover:text-kumera hover:underline";

export function UpdatesContactSection() {
  return (
    <SectionShell
      id="updates-contact"
      title="Updates, Privacy Notice and official contact"
      intro={
        <p>
          We update this Cookie Notice whenever our reviewed technology inventory, providers or
          applicable legal requirements change. Material updates are released atomically alongside
          our preference configuration.
        </p>
      }
    >
      <dl className="max-w-[1000px] [&>div:first-child]:pt-6">
        <DefinitionRow term="Privacy Notice">
          For full details on how McLeod Family Office processes personal data, applicable legal
          bases, retention and your rights, read our{" "}
          <Link href="/privacy" className={link}>
            Privacy Notice
          </Link>
          .
        </DefinitionRow>
        <DefinitionRow term="Official verification">
          Cookie and privacy notices do not authenticate messages or authorize financial
          instructions. Always use the{" "}
          <Link href="/verification" className={link}>
            Verification Centre
          </Link>{" "}
          for sensitive communications.
        </DefinitionRow>
        <DefinitionRow term="Questions about this notice">
          For legitimate institutional privacy enquiries, use{" "}
          <Link href="/contact" className={link}>
            Contact the Office
          </Link>
          . Do not send confidential financial, identity or security records in an initial enquiry.
        </DefinitionRow>
      </dl>
    </SectionShell>
  );
}
