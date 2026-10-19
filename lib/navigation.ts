export type NavIcon =
  | "office"
  | "activities"
  | "stewardship"
  | "governance"
  | "verification"
  | "document"
  | "mail"
  | "pin"
  | "people"
  | "shield"
  | "chart"
  | "coin"
  | "building"
  | "pie"
  | "clock"
  | "database"
  | "globe"
  | "warning";

export type NavMenuItem = {
  label: string;
  href: string;
  /** Only shown in the wide (mega) menu. */
  description?: string;
  icon?: NavIcon;
};

type CtaLink = { label: string; href: string };

/** Extra content that turns a dropdown into a full-width panel. */
export type MegaMenu = {
  intro: { title: string; text: string; primary: CtaLink; secondary: CtaLink };
  aside: {
    eyebrow: string;
    /** One entry per rendered line. */
    title: string[];
    text: string;
    link: CtaLink;
    /** Show the mountain photo behind the navy panel. */
    image?: boolean;
  };
  /** Panel width in px (default 1380). */
  width?: number;
};

export type NavLink = {
  label: string;
  href: string;
  menu?: { title: string; icon: NavIcon; items: NavMenuItem[]; mega: MegaMenu };
};

export const navLinks: NavLink[] = [
  {
    label: "The Office",
    href: "/about",
    menu: {
      title: "The Office",
      icon: "office",
      items: [
        {
          label: "About McLeod",
          href: "/about",
          icon: "office",
          description:
            "Our history, structure, and the principles that guide our work across generations.",
        },
        {
          label: "Our Purpose & Mandate",
          href: "/about/purpose-and-mandate",
          icon: "document",
          description:
            "A long-term mandate to steward family enterprise interests, capital, and legacy.",
        },
        {
          label: "Vision, Mission & Values",
          href: "/about/vision-mission-values",
          icon: "stewardship",
          description:
            "Our enduring vision, mission, and values that inform decisions today and for future generations.",
        },
        {
          label: "Our Institutional Role",
          href: "/about/institutional-role",
          icon: "people",
          description:
            "How McLeod organizes, oversees, and coordinates the family’s enterprise interests and assets.",
        },
        {
          label: "Independence & Discretion",
          href: "/about/independence-and-discretion",
          icon: "shield",
          description:
            "Our commitment to independence, confidentiality, and a long-term horizon.",
        },
      ],
      mega: {
        intro: {
          title: "A permanent institutional foundation for one family.",
          text: "McLeod serves as the coordinating institution for the family’s enterprise interests, capital, governance, and continuity.",
          primary: { label: "View The Office", href: "/about" },
          secondary: { label: "Our Institutional Role", href: "/about/institutional-role" },
        },
        aside: {
          eyebrow: "Our Foundation",
          title: ["One family.", "One coordinating institution."],
          text: "Long-term institutional stewardship of the family’s enterprise interests, capital, and legacy, with a focus on continuity across generations.",
          link: { label: "Our Purpose & Mandate", href: "/about/purpose-and-mandate" },
        },
        width: 1300,
      },
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
          icon: "chart",
          description:
            "Oversight of family-owned businesses, strategic holdings and enterprise value preservation.",
        },
        {
          label: "Capital & Investments",
          href: "/activities/capital-and-investments",
          icon: "coin",
          description:
            "Principal capital allocation, private investments, direct acquisitions, public markets and portfolio oversight.",
        },
        {
          label: "Treasury & Liquidity",
          href: "/activities/treasury-and-liquidity",
          icon: "document",
          description:
            "Liquidity planning, cash and treasury oversight, and financial resilience.",
        },
        {
          label: "Real Assets & Private Holdings",
          href: "/activities/real-assets",
          icon: "building",
          description:
            "Stewardship and oversight of family real estate, physical assets and other private holdings.",
        },
        {
          label: "Trust, Estate & Tax Coordination",
          href: "/activities/trust-estate-and-tax",
          icon: "people",
          description:
            "Coordinating appropriate advisers and structures for estate planning, trusts, taxation and continuity.",
        },
        {
          label: "Family Administration & Reporting",
          href: "/activities/family-administration",
          icon: "document",
          description:
            "Consolidated reporting, records, accounting coordination and institutional support.",
        },
        {
          label: "Philanthropy & Legacy",
          href: "/activities/philanthropy-and-legacy",
          icon: "pie",
          description:
            "Coordinating the family’s charitable interests, philanthropic structures and enduring legacy objectives.",
        },
      ],
      mega: {
        intro: {
          title: "A unified approach to family enterprise and legacy.",
          text: "Our activities are organized to steward the family’s enterprise interests, capital and legacy across generations.",
          primary: { label: "View Our Activities", href: "/activities" },
          secondary: { label: "Our Coordinated Approach", href: "/activities" },
        },
        aside: {
          eyebrow: "Our Approach",
          title: ["Long-term", "stewardship across", "generations."],
          text: "We take a disciplined, principled and responsible approach to the coordination of our family’s enterprise interests, capital and legacy.",
          link: { label: "Our Stewardship Philosophy", href: "/stewardship" },
          image: true,
        },
      },
    },
  },
  {
    label: "Stewardship",
    href: "/stewardship",
    menu: {
      title: "Stewardship",
      icon: "stewardship",
      items: [
        {
          label: "Our Stewardship Philosophy",
          href: "/stewardship",
          icon: "clock",
          description:
            "A disciplined and responsible approach to the coordination of our family’s enterprise interests, capital and legacy.",
        },
        {
          label: "Long-Term Value Creation",
          href: "/stewardship/long-term-value-creation",
          icon: "chart",
          description:
            "Investing with a long-term perspective to build durable value across economic cycles.",
        },
        {
          label: "Capital Preservation",
          href: "/stewardship/capital-preservation",
          icon: "database",
          description:
            "Prudent risk management and conservative practices to help preserve capital for future generations.",
        },
        {
          label: "Responsible Ownership",
          href: "/stewardship/responsible-ownership",
          icon: "people",
          description:
            "Active, thoughtful ownership that supports strong governance, sustainable growth and positive societal impact.",
        },
        {
          label: "Generational Stewardship",
          href: "/stewardship/generational-stewardship",
          icon: "pie",
          description:
            "Planning and governance practices that sustain the family’s enterprise, values and legacy across generations.",
        },
      ],
      mega: {
        intro: {
          title: "A disciplined approach to preserving value across generations.",
          text: "Stewardship guides how McLeod protects capital, supports resilience, and sustains long-term family continuity.",
          primary: { label: "View Stewardship", href: "/stewardship" },
          secondary: { label: "Our Stewardship Philosophy", href: "/stewardship" },
        },
        aside: {
          eyebrow: "Our Philosophy",
          title: ["Long-term value", "with discipline and", "care."],
          text: "We preserve capital, support enterprise resilience, and act as responsible stewards across generations.",
          link: {
            label: "Generational Stewardship",
            href: "/stewardship/generational-stewardship",
          },
          image: true,
        },
      },
    },
  },
  {
    label: "Governance",
    href: "/governance",
    menu: {
      title: "Governance",
      icon: "governance",
      items: [
        {
          label: "Our Governance Principles",
          href: "/governance",
          icon: "office",
          description:
            "A framework for disciplined decision-making, fiduciary responsibility and long-term stewardship.",
        },
        {
          label: "Family Governance",
          href: "/governance/family-governance",
          icon: "people",
          description:
            "Structures and processes to align family values, enable constructive dialogue and support unified stewardship across generations.",
        },
        {
          label: "Institutional Oversight",
          href: "/governance/institutional-oversight",
          icon: "document",
          description:
            "Principled oversight of strategy, risk, investments and operating activities across the family office and affiliated entities.",
        },
        {
          label: "Succession & Continuity",
          href: "/governance/succession-and-continuity",
          icon: "pie",
          description:
            "Planning and governance frameworks to ensure leadership transition, institutional continuity and enduring legacy.",
        },
        {
          label: "Confidentiality & Integrity",
          href: "/governance/confidentiality-and-integrity",
          icon: "shield",
          description:
            "Policies and practices to protect family privacy, safeguard sensitive information and maintain the highest ethical standards.",
        },
      ],
      mega: {
        intro: {
          title: "Clarity, accountability and continuity in institutional oversight.",
          text: "Our governance provides principled oversight for the family’s interests, institutional responsibilities, confidentiality and succession across generations.",
          primary: { label: "View Governance", href: "/governance" },
          secondary: { label: "Our Governance Principles", href: "/governance" },
        },
        aside: {
          eyebrow: "Our Framework",
          title: ["Governance that", "supports", "continuity across", "generations."],
          text: "We provide principled oversight for the family’s interests, institutional responsibilities, confidentiality and responsible decision-making across generations.",
          link: {
            label: "Institutional Oversight",
            href: "/governance/institutional-oversight",
          },
          image: true,
        },
      },
    },
  },
  {
    label: "Verification",
    href: "/verification",
    menu: {
      title: "Verification",
      icon: "verification",
      items: [
        {
          label: "Verify a Communication",
          href: "/verification",
          icon: "mail",
          description:
            "Confirm whether an email, letter or other communication is from McLeod Family Office.",
        },
        {
          label: "Official Domains & Channels",
          href: "/verification/official-domains",
          icon: "globe",
          description:
            "Review our official domains, phone numbers and authorized communication channels.",
        },
        {
          label: "Payment & Instruction Security",
          href: "/verification/payment-security",
          icon: "document",
          description:
            "Guidance on verifying payment instructions and avoiding fraudulent requests.",
        },
        {
          label: "Fraud & Impersonation Awareness",
          href: "/verification/fraud-awareness",
          icon: "people",
          description:
            "Learn how to recognize common impersonation tactics and protect yourself and your organization.",
        },
        {
          label: "Report Suspicious Activity",
          href: "/verification/report",
          icon: "warning",
          description:
            "Report suspicious communications, websites or activity for our immediate review.",
        },
      ],
      mega: {
        intro: {
          title:
            "Confirming legitimate communications and protecting against impersonation.",
          text: "We help visitors verify official communications, confirm our domains and payment instructions, and recognize and report suspicious activity.",
          primary: { label: "Verify a Communication", href: "/verification" },
          secondary: {
            label: "Official Domains & Channels",
            href: "/verification/official-domains",
          },
        },
        aside: {
          eyebrow: "Security First",
          title: ["Verification", "safeguards every", "legitimate", "interaction."],
          text: "We believe in independent confirmation, official channels and rigorous communication security to protect our family, partners and the broader community.",
          link: { label: "Report Suspicious Activity", href: "/verification/report" },
          image: true,
        },
      },
    },
  },
];

export const contactLink = { label: "Contact the Office", href: "/contact" };

export const topBarLinks = [
  { label: "Verify this site", href: "/verification", icon: "shield-check", arrow: true },
  { label: "Security", href: "/security", icon: "lock" },
  { label: "Contact", href: "/contact", icon: "phone" },
] as const;

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
