"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { sponsorsData } from "@/lib/constants";

function Sponsors() {
  const { t } = useTranslation();

  return (
    <section id="sponsors">
      <div className="container py-16">
        <h3 className="text-center text-xl font-medium text-muted-foreground">
          {t("sponsoredBy")}
        </h3>
        <div className="mt-6 grid grid-cols-2 place-items-center gap-x-3 gap-y-6 md:grid-cols-4 [&_a:hover]:opacity-100 [&_a]:opacity-60">
          {sponsorsData.map((sponsor) => (
            <Link
              key={sponsor.name}
              href={sponsor.link}
              className="dark:bg-primary dark:rounded-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={sponsor.logo} alt={sponsor.name} className="w-32" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
