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

export { navLinks, sponsorsData, featuresData };
