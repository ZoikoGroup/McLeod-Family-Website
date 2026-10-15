export type NavMenuItem = {
  label: string;
  /** Description lines, one per rendered line (Figma line breaks). */
  description: string[];
  icon: string;
  /** No href = shown as unavailable (dashed icon, muted text, no arrow). */
  href?: string;
};

export type NavLink = {
  label: string;
  href: string;
  menu?: { title: string; items: NavMenuItem[] };
};

export const navLinks: NavLink[] = [
  {
    label: "About",
    href: "/about",
    menu: {
      title: "Family Office",
      items: [
        {
          label: "About the Office",
          description: ["Purpose, role and public perimeter"],
          icon: "/images/nav-about-office.svg",
          href: "/about",
        },
        {
          label: "Entity of Record",
          description: ["Legal identity and public registry", "particulars"],
          icon: "/images/nav-about-entity.svg",
          href: "/about/entity-of-record",
        },
        {
          label: "Purpose & Perimeter",
          description: ["What the Office is — and is not"],
          icon: "/images/nav-about-perimeter.svg",
          href: "/about/purpose-and-perimeter",
        },
      ],
    },
  },
  {
    label: "Stewardship",
    href: "/stewardship",
    menu: {
      title: "Stewardship",
      items: [
        {
          label: "Enterprise",
          description: ["Long-term ownership and oversight"],
          icon: "/images/nav-stewardship-enterprise.svg",
          href: "/stewardship/enterprise",
        },
        {
          label: "Capital",
          description: ["Allocation, liquidity and risk", "discipline"],
          icon: "/images/nav-stewardship-capital.svg",
          href: "/stewardship/capital",
        },
        {
          label: "Continuity",
          description: ["Succession and transfer of", "responsibility"],
          icon: "/images/nav-stewardship-continuity.svg",
          href: "/stewardship/continuity",
        },
      ],
    },
  },
  {
    label: "Governance",
    href: "/governance",
    menu: {
      title: "Governance",
      items: [
        {
          label: "Governance Principles",
          description: ["The Office’s public operating", "principles"],
          icon: "/images/nav-governance-principles.svg",
          href: "/governance",
        },
        {
          label: "Decision Rights & Controls",
          description: ["How authority is defined and", "recorded"],
          icon: "/images/nav-governance-decision-rights.svg",
          href: "/governance/decision-rights",
        },
        {
          label: "Confidentiality & Security",
          description: ["Controlled disclosure and secure", "engagement"],
          icon: "/images/nav-governance-confidentiality.svg",
          href: "/governance/confidentiality",
        },
      ],
    },
  },
  {
    label: "Verification",
    href: "/verification",
    menu: {
      title: "Verification",
      items: [
        {
          label: "Verification Centre",
          description: ["Confirm official McLeod digital properties"],
          icon: "/images/nav-verification-centre.svg",
          href: "/verification",
        },
        {
          label: "Correspondence Domains",
          description: ["Official sending domains and authentication", "guidance"],
          icon: "/images/nav-verification-correspondence.svg",
          href: "/verification/official-domains",
        },
        {
          label: "Payment & Bank Detail Protocol",
          description: ["Independent verification of new or changed", "instructions"],
          icon: "/images/nav-verification-payment.svg",
          href: "/verification/payment-protocol",
        },
        {
          label: "Report Suspicious Communication",
          description: ["Available only when the monitored route is live"],
          icon: "/images/nav-verification-report.svg",
        },
      ],
    },
  },
];

export const contactLink = { label: "Contact the Office", href: "/contact" };

export const footerCtas = [
  {
    eyebrow: "Institutional enquiries",
    label: "Contact the Office",
    href: "/contact",
    icon: "/images/mail.svg",
  },
  {
    eyebrow: "Official verification",
    label: "Verify before you act",
    href: "/verification",
    icon: "/images/shield-check.svg",
  },
];

export const footerColumns = [
  {
    title: "Office",
    links: [
      { label: "About the Office", href: "/about" },
      { label: "Mandate", href: "/about/mandate" },
      { label: "Entity of Record", href: "/about/entity-of-record" },
    ],
  },
  {
    title: "Stewardship",
    links: [
      { label: "Enterprise", href: "/stewardship/enterprise" },
      { label: "Capital", href: "/stewardship/capital" },
      { label: "Continuity", href: "/stewardship/continuity" },
    ],
  },
  {
    title: "Governance",
    links: [
      { label: "Governance principles", href: "/governance" },
      { label: "Decision rights", href: "/governance/decision-rights" },
      { label: "Confidentiality", href: "/governance/confidentiality" },
    ],
  },
  {
    title: "Verification",
    links: [
      { label: "Verification Centre", href: "/verification" },
      { label: "Official domains", href: "/verification/official-domains" },
      { label: "Security guidance", href: "/verification/security-guidance" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Accessibility", href: "/accessibility" },
      { label: "Security", href: "/security" },
      { label: "Privacy notice", href: "/privacy" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Legal notices", href: "/legal" },
      { label: "Terms of use", href: "/terms" },
    ],
  },
];

export const footerOffices = [
  { title: ["Headquarters"], lines: ["Sacramento", "California", "United States"] },
  {
    title: ["European", "Headquarters"],
    lines: ["167–169 Great", "Portland Street", "5th Floor", "London W1W 5PF", "United Kingdom"],
  },
];

export const socialLinks = [
  { label: "McLeod Family Office on Facebook", href: "#", text: "f" },
  { label: "McLeod Family Office on Instagram", href: "#", icon: "/images/instagram.svg" },
  { label: "McLeod Family Office on YouTube", href: "#", icon: "/images/youtube.svg" },
  { label: "McLeod Family Office on LinkedIn", href: "#", text: "in" },
  { label: "McLeod Family Office on X (Twitter)", href: "#", text: "X" },
];

export const legalLinks = [
  { label: "Privacy notice", href: "/privacy" },
  { label: "Security", href: "/security" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Terms of use", href: "/terms" },
];

export const topBarLinks = [
  { label: "Verified communications", href: "/verification" },
  { label: "Security", href: "/security" },
  { label: "Contact", href: "/contact" },
];

export const officialRoutes = [
  { label: "Verification", href: "/verification" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy notice", href: "/privacy" },
  { label: "Security", href: "/security" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Terms of use", href: "/terms" },
];
