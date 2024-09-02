"use client";

import Link from "next/link";
import { useTranslation } from "@/i18n/client";
import { Button } from "../ui/button";

function Sale() {
  const { t } = useTranslation();

  return (
    <section id="sale">
      <div className="container py-16">
        <div className="rounded-xl bg-muted bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 px-2 sm:px-6 py-10 text-center">
          <h3 className="text-3xl font-bold text-primary-foreground">
            {t("saleTitle")}
          </h3>
          <p className="mt-2 text-lg font-medium text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            perspiciatis inventore praesentium!
          </p>
          <Button variant="secondary" className="mt-6" asChild>
            <Link
              href="https://nextjs-boilerplate.com/pro-saas-starter-kit"
              target="_blank"
            >
              {t("buySaaSTemplate")}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Sale;
