import { SectionShell } from "@/components/legal-accessibility-statement/shared";
import { PreferencesPanel } from "./PreferencesPanel";

export function ManagePreferencesSection() {
  return (
    <SectionShell
      id="manage-preferences"
      title="Manage your preferences"
      divider={false}
      intro={
        <p>
          Categories below reflect only verified technologies governed by our Cookie Notice and
          Privacy Notice. Optional categories remain off by default where consent is required and
          activate only after you confirm and save your selection.
        </p>
      }
    >
      <PreferencesPanel />
    </SectionShell>
  );
}
