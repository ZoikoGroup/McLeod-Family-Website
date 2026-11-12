const warningItems = [
  {
    title: "Unexpected urgency or secrecy",
    warning: "A message pushes immediate action, silence or skipped checks.",
    saferAction: "Pause and confirm directly through your established independent route.",
  },
  {
    title: "Changed bank or beneficiary details",
    warning: "New account number, payment destination or remittance instructions.",
    saferAction: "Do not pay or update records; perform independently sourced callback and internal approvals.",
  },
  {
    title: "Lookalike website or domain",
    warning: "Slightly altered spelling, unusual subdomain or a link supplied by the sender.",
    saferAction: "Navigate independently to the approved first-party Verification Centre; do not guess domains.",
  },
  {
    title: "Unexpected password or MFA-code request",
    warning: "Request for a password, one-time code, recovery code or authentication secret.",
    saferAction: "Never send secrets in reply, form or initial contact; use your own trusted support process.",
  },
  {
    title: "Document or identity request",
    warning: "Demand for passport scans, invoices, contracts or sensitive attachments through unfamiliar channels.",
    saferAction: "Verify who is requesting and establish a suitably approved secure exchange first.",
  },
  {
    title: "Supposed leader/adviser or family contact",
    warning: "Name, role title, photograph, letterhead or signature is used as an authority shortcut.",
    saferAction: "Validate role and specific authority independently; do not use the message’s own callback details.",
  },
  {
    title: "Reply-to address differs",
    warning: "Visible sender label looks right but reply is routed elsewhere.",
    saferAction: "Do not treat either address as authorization; cross-check via independent official channels.",
  },
  {
    title: "Familiar thread contains a change",
    warning: "Long-running conversation suddenly requests a new process or beneficiary.",
    saferAction: "Treat the change as new and high risk; verify it independently.",
  },
  {
    title: "Social or messaging impersonation",
    warning: "Profile or direct message claims to represent McLeod or an adviser.",
    saferAction: "Do not use a social profile to confirm confidential instructions or payment authority.",
  },
  {
    title: "Unexpected attachment or shared file",
    warning: "Unknown document portal, file-sharing link or unexpected attachment.",
    saferAction: "Do not open or upload sensitive content; follow the organization’s security escalation.",
  },
  {
    title: "Approval bypass request",
    warning: "An instruction asks staff to circumvent dual approval or governance controls.",
    saferAction: "Refuse shortcut; return to normal documented approval and escalation procedures.",
  },
  {
    title: "False “verification completed” badge",
    warning: "Screenshots or badges claim a transfer, domain or person was verified.",
    saferAction: "Ignore unverified badges; independently confirm identity AND specific authority.",
  },
];

export function WarningSignsSaferActionsSection() {
  return (
    <section aria-label="Common warning signs and safer actions" className="pt-24">
      <div className="border-t border-[#D6D1C6] pt-6">
        <h2 className="font-serif text-[32px] leading-[36px] sm:text-[40px] sm:leading-[44px] text-[#23463A]">
          Common warning signs and safer actions.
        </h2>
        <p className="pt-6 font-serif text-[16px] leading-[25px] sm:text-[17px] sm:leading-[26.35px] text-[#34322E] max-w-[800px]">
          Treat changes to account, beneficiary, routing, remittance or settlement instructions as sensitive—even if they appear in an established email thread or invoice.
        </p>

        <div className="pt-12 flex flex-col gap-6">
          {warningItems.map((item) => (
            <div
              key={item.title}
              className="grid grid-cols-1 md:grid-cols-[322.66px_1fr] lg:grid-cols-[322.66px_645.34px] gap-2 md:gap-8 border-b border-[#D6D1C6] pb-6"
            >
              <h3 className="font-serif text-[20px] sm:text-[22px] leading-[27.5px] text-[#23463A]">
                {item.title}
              </h3>
              <p className="font-serif text-[16px] leading-[25px] sm:text-[17px] sm:leading-[26.35px] text-[#34322E] max-w-[646px]">
                {item.warning}
                <br />
                <span className="text-[#34322E]">Safer Action: </span>
                {item.saferAction}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

