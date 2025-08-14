"use client";

import Link from "next/link";
import {
  ChartNoAxesCombined,
  Code,
  Facebook,
  Github,
  Linkedin,
  Mail,
  Twitter,
  Youtube,
} from "lucide-react";
import { navLinks } from "@/lib/constants";
import { styles } from "@/lib/styles";
import { useTranslation } from "@/i18n/client";
import { Trans } from "react-i18next";
import { useMemo } from "react";

function Footer() {
  const { t } = useTranslation();

  const socialLinks = [
    {
      icon: <Code />,
      link: "https://t.me/asadbekjs",
    },
    {
      icon: <Github />,
      link: "https://github.com/asadbekme",
    },
    {
      icon: <Linkedin />,
      link: "https://www.linkedin.com/in/asadbek-rakhimov",
    },
    {
      icon: <Mail />,
      link: "https://gmail.com",
    },
    {
      icon: <Twitter />,
      link: "https://twitter.com/nextjs",
    },
    {
      icon: <Youtube />,
      link: "https://youtube.com",
    },
    {
      icon: <Facebook />,
      link: "https://facebook.com",
    },
  ];

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer id="footer">
      <div className="container pb-16 pt-0">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-1 md:gap-2">
            <ChartNoAxesCombined className="size-6 md:size-7" />
            <h3 className="text-xl font-semibold">SaaS Template</h3>
          </div>

          <ul className="mt-4 flex gap-x-8 text-lg max-sm:flex-col [&_a:hover]:opacity-100 [&_a]:opacity-60">
            {navLinks.map((item) => (
              <li key={item.id}>
                <Link href={`#${item.link}`} className={styles.link}>
                  {t(item.link)}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="mt-4 flex flex-row gap-x-5 text-muted-foreground [&_svg:hover]:text-primary [&_svg:hover]:opacity-100 [&_svg]:size-5 [&_svg]:opacity-60">
            {socialLinks.map((item) => (
              <li key={item.link}>
                <Link href={item.link} target="_blank" rel="noreferrer">
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 w-full border-t pt-5">
            <p className="text-sm text-muted-foreground">
              <Trans i18nKey="footerText" values={{ year: currentYear }} components={{
                1: <Link
                  href="https://t.me/asadbekjs"
                  target="_blank"
                  className="text-purple-500"
                />
              }} />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
