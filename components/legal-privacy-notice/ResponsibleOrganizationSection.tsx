import { SectionShell } from "@/components/legal-accessibility-statement/shared";
import { Callout } from "@/components/legal-website-terms/shared";

export function ResponsibleOrganizationSection() {
  return (
    <SectionShell
      id="responsible-organization"
      title="02. Responsible Organization & Contact"
      intro={
        <p>
          McLeod Family Office is the public institutional name. The specific legal entity acting as
          data controller, its registered service address and monitored privacy contact channel are
          maintained through our governed corporate-secretarial records.
        </p>
      }
    >
      <Callout>
        Address distinction: Operating headquarters locations displayed in the global footer
        (Sacramento, California and London, United Kingdom) reflect geographic operating presence
        only. They are not automatically statutory registered offices or universal data-controller
        service addresses.
      </Callout>
    </SectionShell>
  );
}
