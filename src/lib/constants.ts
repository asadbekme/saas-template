import ClerkLogo from "@/public/clerk-logo.webp";
import CrowdinLogo from "@/public/crowdin-logo.webp";
import SentryLogo from "@/public/sentry-logo.webp";
import NextjsLogo from "@/public/nextlessjs-logo.webp";

const navLinks = [
  {
    id: 1,
    link: "home",
  },
  {
    id: 2,
    link: "sponsors",
  },
  {
    id: 3,
    link: "features",
  },
  {
    id: 4,
    link: "pricing",
  },
  {
    id: 5,
    link: "faq",
  },
];

const sponsorsData = [
  {
    name: "Clerk",
    link: "https://clerk.com",
    logo: ClerkLogo,
  },
  {
    name: "Crowdin",
    link: "https://crowdin.com",
    logo: CrowdinLogo,
  },
  {
    name: "Sentry",
    link: "https://sentry.io",
    logo: SentryLogo,
  },
  {
    name: "Nextless.js",
    link: "https://nextjs.org",
    logo: NextjsLogo,
  },
];

const featuresData = [
  {
    name: "Next.js",
  },
  {
    name: "React",
  },
  {
    name: "TypeScript",
  },
  {
    name: "Tailwind CSS",
  },
  {
    name: "Shadcn UI",
  },
  {
    name: "ESLint",
  },
];

const pricingPlans = [
  {
    name: "free",
    price: 0,
    description: "forIndividuals",
    features: [
      {
        name: "teamMembers",
        size: 2,
      },
      {
        name: "websites",
        size: 2,
      },
      {
        name: "storage",
        size: "2 GB",
      },
      {
        name: "transfer",
        size: "2 TB",
      },
      {
        name: "emailSupport",
        size: "24/7",
      },
    ],
  },
  {
    name: "premium",
    price: 79,
    description: "forSmallTeams",
    features: [
      {
        name: "teamMembers",
        size: 5,
      },
      {
        name: "websites",
        size: 5,
      },
      {
        name: "storage",
        size: "5 GB",
      },
      {
        name: "transfer",
        size: "5 TB",
      },
      {
        name: "emailSupport",
        size: "24/7",
      },
    ],
  },
  {
    name: "enterprise",
    price: 199,
    description: "forIndustryLeaders",
    features: [
      {
        name: "teamMembers",
        size: 100,
      },
      {
        name: "websites",
        size: 100,
      },
      {
        name: "storage",
        size: "100 GB",
      },
      {
        name: "transfer",
        size: "100 TB",
      },
      {
        name: "emailSupport",
        size: "24/7",
      },
    ],
  },
];

export { navLinks, sponsorsData, featuresData, pricingPlans };
