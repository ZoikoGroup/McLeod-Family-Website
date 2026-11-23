import { SectionShell } from "@/components/legal-accessibility-statement/shared";
import { Callout } from "./shared";

export function ExternalLinksSection() {
  return (
    <SectionShell
      id="external-links"
      title="06. External Links, Availability & Verification"
      intro={
        <p>
          Where this website links to an external public register or independently operated
          third-party destination, that link is provided for reference only and does not imply
          control or endorsement.
        </p>
      }
    >
      <Callout>
        Anti-fraud boundary: New or changed bank details or payment instructions received by email,
        messaging or document must never be acted on solely through that channel. Independently
        verify through an official contact route obtained separately. Email authentication (SPF,
        DKIM, DMARC) is technical signal only, not transaction authority.
      </Callout>
    </SectionShell>
  );
}
