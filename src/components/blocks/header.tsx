"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { styles } from "@/lib/styles";
import { useTranslation } from "@/i18n/client";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";
import ChangeLangs from "../change-langs";

function Header() {
  const { t } = useTranslation();

  return (
    <header id="header">
      <div className="container py-3">
        <div className={cn(styles.flex, "gap-5")}>
          <a href="/">SaaS Template</a>

          <nav className="hidden lg:block">
            <ul className={cn(styles.flex, "gap-6")}>
              {navLinks.map((item) => (
                <li key={item.id}>
                  <Link href={`#${item.link}`} className={styles.link}>
                    {t(item.link)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={cn(styles.flex, "gap-3 lg:gap-5")}>
            <ChangeLangs />
            <ModeToggle />
            <Button className="flex lg:hidden" variant="outline" size="icon">
              <Menu />
            </Button>
            <div className="hidden lg:flex items-center gap-5">
              <Link href="/login">{t("login")}</Link>
              <Link href="/register">
                <Button>{t("register")}</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
