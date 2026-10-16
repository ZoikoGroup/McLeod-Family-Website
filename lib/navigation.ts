export type NavIcon =
  | "office"
  | "activities"
  | "stewardship"
  | "governance"
  | "verification"
  | "document"
  | "mail"
  | "pin";

export type NavMenuItem = { label: string; href: string };

export type NavLink = {
  label: string;
  href: string;
  menu?: { title: string; icon: NavIcon; items: NavMenuItem[] };
};

export const navLinks: NavLink[] = [
  {
    label: "The Office",
    href: "/about",
    menu: {
      title: "The Office",
      icon: "office",
      items: [
        { label: "About McLeod", href: "/about" },
        { label: "Our Purpose & Mandate", href: "/about/purpose-and-mandate" },
        { label: "Vision, Mission & Values", href: "/about/vision-mission-values" },
        { label: "Our Institutional Role", href: "/about/institutional-role" },
        { label: "Independence & Discretion", href: "/about/independence-and-discretion" },
      ],
    },
  },
  {
    label: "Our Activities",
    href: "/activities",
    menu: {
      title: "Our Activities",
      icon: "activities",
      items: [
        {
          label: "Strategic Ownership & Enterprise Interests",
          href: "/activities/strategic-ownership",
        },
        { label: "Capital & Investments", href: "/activities/capital-and-investments" },
        { label: "Treasury & Liquidity", href: "/activities/treasury-and-liquidity" },
        { label: "Real Assets & Private Holdings", href: "/activities/real-assets" },
        { label: "Trust, Estate & Tax Coordination", href: "/activities/trust-estate-and-tax" },
        {
          label: "Family Administration & Reporting",
          href: "/activities/family-administration",
        },
        { label: "Philanthropy & Legacy", href: "/activities/philanthropy-and-legacy" },
      ],
    },
  },
  {
    label: "Stewardship",
    href: "/stewardship",
    menu: {
      title: "Stewardship",
      icon: "stewardship",
      items: [
        { label: "Our Stewardship Philosophy", href: "/stewardship" },
        { label: "Long-Term Value Creation", href: "/stewardship/long-term-value-creation" },
        { label: "Capital Preservation", href: "/stewardship/capital-preservation" },
        { label: "Responsible Ownership", href: "/stewardship/responsible-ownership" },
        { label: "Generational Stewardship", href: "/stewardship/generational-stewardship" },
      ],
    },
  },
  {
    label: "Governance",
    href: "/governance",
    menu: {
      title: "Governance",
      icon: "governance",
      items: [
        { label: "Our Governance Principles", href: "/governance" },
        { label: "Family Governance", href: "/governance/family-governance" },
        { label: "Institutional Oversight", href: "/governance/institutional-oversight" },
        { label: "Succession & Continuity", href: "/governance/succession-and-continuity" },
        {
          label: "Confidentiality & Integrity",
          href: "/governance/confidentiality-and-integrity",
        },
      ],
    },
  },
  {
    label: "Verification",
    href: "/verification",
    menu: {
      title: "Verification",
      icon: "verification",
      items: [
        { label: "Verify a Communication", href: "/verification" },
        { label: "Official Domains & Channels", href: "/verification/official-domains" },
        { label: "Payment & Instruction Security", href: "/verification/payment-security" },
        { label: "Fraud & Impersonation Awareness", href: "/verification/fraud-awareness" },
        { label: "Report Suspicious Activity", href: "/verification/report" },
      ],
    },
  },
];

export const contactLink = { label: "Contact the Office", href: "/contact" };

export const topBarLinks = [
  { label: "Verified communications", href: "/verification" },
  { label: "Security", href: "/security" },
  { label: "Contact", href: "/contact" },
];

export type FooterGroup = { title: string; icon: NavIcon; items: NavMenuItem[] };

export const footerGroups: FooterGroup[] = [
  {
    title: "Resources",
    icon: "document",
    items: [
      { label: "Institutional Overview", href: "/about" },
      { label: "Stewardship Principles", href: "/stewardship" },
      { label: "Verification Guidance", href: "/verification" },
      { label: "Legal Notices", href: "/legal" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
  {
    title: "Contact",
    icon: "mail",
    items: [
      { label: "Contact the Office", href: "/contact" },
      { label: "Verify a Communication", href: "/verification" },
      { label: "Official Communication Channels", href: "/verification/official-domains" },
      { label: "Report Suspicious Activity", href: "/verification/report" },
    ],
  },
  {
    title: "Legal",
    icon: "document",
    items: [
      { label: "Legal Notices", href: "/legal" },
      { label: "Privacy Notice", href: "/privacy" },
      { label: "Website Terms", href: "/terms" },
      { label: "Cookie Notice", href: "/cookies" },
      { label: "Cookie Preferences", href: "/cookie-preferences" },
      { label: "Accessibility Statement", href: "/accessibility" },
    ],
  },
];

export const footerOffices = [
  { title: "Headquarters", lines: ["Sacramento, California", "United States"] },
  {
    title: "European Headquarters",
    lines: ["167–169 Great Portland Street 5th Floor", "London W1W 5PF United Kingdom"],
  },
];

export const socialLinks = [
  { label: "McLeod Family Office on LinkedIn", href: "#", icon: "linkedin" },
  { label: "McLeod Family Office on X", href: "#", icon: "x" },
] as const;

export const legalLinks = [
  { label: "Privacy Notice", href: "/privacy" },
  { label: "Website Terms", href: "/terms" },
  { label: "Cookie Preferences", href: "/cookie-preferences" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Legal Notices", href: "/legal" },
];
