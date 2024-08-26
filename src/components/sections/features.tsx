"use client";

import { useTranslation } from "@/i18n/client";
import { featuresData } from "@/lib/constants";
import { styles } from "@/lib/styles";
import { Box } from "lucide-react";

function Features() {
  const { t } = useTranslation();

  return (
    <section id="features" className="w-full bg-secondary">
      <div className="container py-16">
        <div className="mx-auto mb-12 max-w-screen-md text-center">
          <h5 className={styles.subtitle}>{t("features")}</h5>
          <h2 className="mt-1 text-3xl font-bold">{t("featuresTitle")}</h2>
          <p className="mt-2 text-lg text-muted-foreground">
            {t("homeDescription")}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-3 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
          {featuresData.map((item) => (
            <div
              className="rounded-xl border border-border bg-card p-5"
              key={item.name}
            >
              <div className="size-12 grid place-items-center rounded-lg bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 p-2 [&_svg]:stroke-primary-foreground [&_svg]:stroke-2">
                <Box className="size-8" />
              </div>
              <h4 className="mt-2 text-lg font-bold">{item.name}</h4>
              <span className="inline-block my-3 w-8 border-t border-purple-400"></span>
              <p className="text-muted-foreground">{t("homeDescription")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
