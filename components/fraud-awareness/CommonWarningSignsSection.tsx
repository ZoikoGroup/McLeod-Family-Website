interface WarningSignItem {
  title: string;
  description: string;
  saferAction: string;
}

const WARNING_SIGNS: WarningSignItem[] = [
  {
    title: "Unexpected urgency or secrecy",
    description:
      "A message pushes immediate action, silence or skipped checks.",
    saferAction:
      "Pause and confirm directly through your established independent route.",
  },
  {
    title: "Changed bank or beneficiary details",
    description:
      "New account number, payment destination or remittance instructions.",
    saferAction:
      "Do not pay or update records; perform independently sourced callback and internal approvals.",
  },
  {
    title: "Lookalike website or domain",
    description:
      "Slightly altered spelling, unusual subdomain or a link supplied by the sender.",
    saferAction:
      "Navigate independently to the approved first-party Verification Centre; do not guess domains.",
  },
  {
    title: "Unexpected password or MFA-code request",
    description:
      "Request for a password, one-time code, recovery code or authentication secret.",
    saferAction:
      "Never send secrets in a reply, form or initial contact; use your own trusted support process.",
  },
  {
    title: "Document or identity request",
    description:
      "Demand for passport scans, invoices, contracts or sensitive attachments through unfamiliar channels.",
    saferAction:
      "Verify who is requesting and establish a suitably approved secure exchange first.",
  },
  {
    title: "Supposed leader/adviser or family contact",
    description:
      "Name, role title, photograph, letterhead or signature is used as an authority shortcut.",
    saferAction:
      "Validate role and specific authority independently; do not use the message's own callback details.",
  },
  {
    title: "Reply-to address differs",
    description:
      "Visible sender label looks right but reply is routed elsewhere.",
    saferAction:
      "Do not treat either address as authorisation; cross-check via independent official channels.",
  },
  {
    title: "Familiar thread contains a change",
    description:
      "Long-running conversation suddenly requests a new process or beneficiary.",
    saferAction:
      "Treat the change as new and high risk; verify it independently.",
  },
  {
    title: "Social or messaging impersonation",
    description:
      "Profile or direct message claims to represent McLeod or an adviser.",
    saferAction:
      "Do not use a social profile to confirm confidential instructions or payment authority.",
  },
  {
    title: "Unexpected attachment or shared file",
    description:
      "Unknown document portal, file-sharing link or unexpected attachment.",
    saferAction:
      "Do not open or upload sensitive content; follow the organisation's security escalation.",
  },
  {
    title: "Approval bypass request",
    description:
      "An instruction asks staff to circumvent dual approval or governance controls.",
    saferAction:
      "Refuse shortcuts; return to normal documented approval and escalation procedures.",
  },
  {
    title: 'False "verification completed" badge',
    description:
      "Screenshots or badges claim a transfer, domain or person was verified.",
    saferAction:
      "Ignore unverified badges; independently confirm identity AND specific authority.",
  },
];

export default function CommonWarningSignsSection() {
  return (
    <section
      id="common-warning-signs"
      aria-label="Common warning signs and safer actions"
      className="w-full bg-[#f4f1ea] px-6 py-16 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Top Divider */}
        <div className="border-t border-[#e5e0d5] pt-12">
          {/* Heading */}
          <h2 className="font-serif text-[32px] leading-[38px] sm:text-[40px] sm:leading-[46px] text-[#23463a] mb-12">
            Common warning signs and safer actions.
          </h2>

          {/* Rows List */}
          <div className="divide-y divide-[#e5e0d5] border-b border-[#e5e0d5]">
            {WARNING_SIGNS.map((item) => (
              <div
                key={item.title}
                className="grid grid-cols-1 gap-3 py-6 md:grid-cols-12 md:gap-8"
              >
                {/* Left Column: Warning Sign Title */}
                <div className="md:col-span-4 lg:col-span-4">
                  <h3 className="font-serif text-[18px] leading-[25px] text-[#23463a]">
                    {item.title}
                  </h3>
                </div>

                {/* Right Column: Description & Safer Action */}
                <div className="md:col-span-8 lg:col-span-8">
                  <p className="font-serif text-[15px] leading-[23px] text-[#34322e]/90">
                    {item.description}
                  </p>
                  <p className="font-serif text-[15px] leading-[23px] text-[#34322e]/90 mt-1">
                    <span className="text-[#23463a]">Safer action:</span>{" "}
                    {item.saferAction}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
