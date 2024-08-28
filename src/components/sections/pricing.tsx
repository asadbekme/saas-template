"use client";

import { Check } from "lucide-react";
import { useTranslation } from "@/i18n/client";
import { pricingPlans } from "@/lib/constants";
import { styles } from "@/lib/styles";
import { cn } from "@/lib/utils";
import AppLink from "../ui/app-link/app-link";
import { Button } from "../ui/button";

function Pricing() {
  const { t } = useTranslation();

  return (
    <section id="pricing">
      <div className="container py-16">
        <div className="mx-auto mb-12 max-w-screen-md text-center">
          <h5 className={styles.subtitle}>{t("pricing")}</h5>
          <h2 className={cn("mt-1", styles.title)}>{t("pricingTitle")}</h2>
          <p className={cn("mt-2", styles.description)}>
            {t("pricingDescription")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-xl border border-border px-6 py-8 text-center"
            >
              <h3 className="text-lg font-semibold">{t(plan.name)}</h3>
              <div className="mt-3 flex items-center justify-center gap-1">
                <h2 className="text-5xl font-bold">${plan.price}</h2>
                <span className="text-muted-foreground">/ {t("month")}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {t(plan.description)}
              </p>
              <AppLink href={"/login"}>
                <Button className="mt-5 w-full">{t("getStarted")}</Button>
              </AppLink>
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature.name}
                    className="flex items-center gap-1 text-muted-foreground"
                  >
                    <Check className="size-6 stroke-current stroke-2 text-purple-400" />
                    <p className="text-left line-clamp-1">{`${
                      feature?.size
                    } ${t(feature.name)}`}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
