import Link from "next/link";
import { ChartNoAxesCombined } from "lucide-react";
import { Sheet, SheetContent, SheetTitle } from "./ui/sheet";
import { navLinks } from "@/lib/constants";
import { styles } from "@/lib/styles";
import { useTranslation } from "@/i18n/client";
import { Button } from "./ui/button";
import AppLink from "./ui/app-link/app-link";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t } = useTranslation();

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent>
        <div className="flex flex-col gap-4">
          <SheetTitle className="flex items-center gap-2">
            <ChartNoAxesCombined className="size-6" /> SaaS Template
          </SheetTitle>
          <ul className="flex flex-col gap-2 border-y py-4">
            {navLinks.map((item) => (
              <li key={item.id}>
                <Link
                  href={`#${item.link}`}
                  className={styles.link}
                  onClick={onClose}
                >
                  {t(item.link)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-5">
            <Button variant="link" asChild>
              <AppLink href="/login">{t("login")}</AppLink>
            </Button>
            <Button asChild>
              <AppLink href="/register">{t("register")}</AppLink>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenu;
