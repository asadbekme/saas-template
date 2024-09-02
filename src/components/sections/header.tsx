"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChartNoAxesCombined, Menu } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { styles } from "@/lib/styles";
import { useTranslation } from "@/i18n/client";
import { Button } from "../ui/button";
import AppLink from "../ui/app-link/app-link";
import { ModeToggle } from "../mode-toggle";
import ChangeLangs from "../change-langs";
import MobileMenu from "../mobile-menu";

function Header() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("#header") as HTMLElement;
      if (window.scrollY > 0) {
        header.classList.add("bg-inherit", "border-b");
      } else {
        header.classList.remove("bg-inherit", "border-b");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="header" className="sticky top-0 z-10">
      <div className="container py-5">
        <div className={cn(styles.flex, "gap-3 sm:gap-5")}>
          <AppLink href="/" className="flex items-center gap-1 md:gap-2">
            <ChartNoAxesCombined className="size-6 md:size-7" />
            <span className="text-lg md:text-xl font-medium line-clamp-1">
              SaaS Template
            </span>
          </AppLink>

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

          <div className={cn(styles.flex, "gap-[2px] md:gap-3 lg:gap-5")}>
            <ChangeLangs />
            <ModeToggle />
            <Button
              className="flex lg:hidden"
              variant="ghost"
              size="icon"
              onClick={onOpen}
            >
              <Menu />
              <span className="sr-only">Mobile menu</span>
            </Button>
            <div className="hidden lg:flex items-center gap-5">
              <Button variant="link" asChild>
                <AppLink href="/login">{t("login")}</AppLink>
              </Button>
              <Button asChild>
                <AppLink href="/register">{t("register")}</AppLink>
              </Button>
            </div>
          </div>

          <MobileMenu isOpen={isOpen} onClose={onClose} />
        </div>
      </div>
    </header>
  );
}

export default Header;
