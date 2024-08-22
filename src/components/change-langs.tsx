"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import { GlobeIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { languageOptions, languages } from "@/i18n/settings";

function ChangeLangs() {
  const { lng } = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const path = pathname.split("/").splice(2);

  const languageItems = languages.map((lang) => {
    return { name: languageOptions[lang], href: `/${lang}`, locale: lang };
  });

  const handleClick = async (lang: (typeof languages)[number]) => {
    router.push(`/${lang}/${path.join("/")}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <GlobeIcon className="size-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Select languages</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languageItems.map((languageItem) => (
          <DropdownMenuCheckboxItem
            checked={lng === languageItem.locale}
            key={languageItem.name}
            onClick={() =>
              handleClick(languageItem.locale as (typeof languages)[number])
            }
          >
            {languageItem.name}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ChangeLangs;
