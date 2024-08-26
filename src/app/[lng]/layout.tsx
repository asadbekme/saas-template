/* eslint-disable react-hooks/rules-of-hooks */
import { dir } from "i18next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { languages } from "@/i18n/settings";
import { useTranslation } from "@/i18n";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export async function generateMetadata({
  params: { lng },
}: {
  params: { lng: string };
}): Promise<Metadata> {
  const { t } = await useTranslation(lng);
  const title = t("metadata.title");
  const description = t("metadata.description");

  return {
    title,
    description,
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
      title,
      description,
      images: ["/static/opengraph-img.png"],
      url: "https://saas-template-nextjs.vercel.app",
      siteName: "SaaS Template Next.js",
    },
    authors: [
      { name: "Asadbek Rakhimov", url: "https://github.com/asadbekme" },
    ],
    alternates: {
      canonical: `https://saas-template-nextjs.vercel.app/${lng}`,
    },
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
