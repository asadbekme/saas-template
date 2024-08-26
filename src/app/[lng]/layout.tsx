import { dir } from "i18next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { languages } from "@/i18n/settings";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export async function generateMetadata({
  params: { lng },
}: {
  params: { lng: string };
}): Promise<Metadata> {
  const { default: translation } = await import(
    `@/i18n/locales/${lng}/common.json`
  );
  const metadata = translation.metadata;

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: [
      "nextjs",
      "boilerplate",
      "SaaS Template",
      "SaaS Template Next.js",
      "nextjs boilerplate",
      "nextjs boilerplate",
      "nextjs boilerplate",
      "nextjs boilerplate",
      "nextjs boilerplate",
    ],
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
    },
    openGraph: {
      type: "website",
      title: metadata.title,
      description: metadata.description,
      images: ["/next-js.png"],
      url: "https://saas-template-nextjs.vercel.app",
      siteName: "SaaS Template Next.js",
    },
    authors: [
      { name: "Asadbek Rakhimov", url: "https://github.com/asadbekme" },
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html
      className="scroll-smooth"
      lang={lng}
      dir={dir(lng)}
      suppressHydrationWarning
    >
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
