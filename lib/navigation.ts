export type NavIcon = "office" | "activities" | "stewardship" | "governance" | "verification";

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
