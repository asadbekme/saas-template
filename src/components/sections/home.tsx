"use client";

import Link from "next/link";
import { ArrowRight, Twitter } from "lucide-react";
import { Trans } from "react-i18next";
import { useTranslation } from "@/i18n/client";
import { Button } from "../ui/button";
import AppLink from "../ui/app-link/app-link";

function Home() {
  const { t } = useTranslation();

  return (
    <section id="home">
      <div className="container py-36">
        <div className="flex flex-col items-center justify-center">
          <Link href="https://x.com/nextjs" target="_blank">
            <Button size="sm">
              <Twitter className="mr-1 size-5" /> {t("followNextjs")}
            </Button>
          </Link>
          <h1 className="w-full lg:w-4/5 mt-3 text-center text-5xl font-bold tracking-tight">
            <Trans i18nKey="homeTitle">
              The perfect
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                SaaS template
              </span>
              to build and scale your business with ease.
            </Trans>
          </h1>
          <p className="mt-5 max-w-screen-md text-center text-xl text-muted-foreground">
            {t("homeDescription")}
          </p>
        </div>
        <div className="mt-7 flex justify-center gap-x-5 gap-y-3 max-sm:flex-col">
          <AppLink href="/login">
            <Button className="w-full">{t("getStarted")}</Button>
          </AppLink>
          <Link
            href="https://nextjs-boilerplate.com/pro-saas-starter-kit"
            target="_blank"
          >
            <Button variant="outline" className="w-full">
              {t("buySaaSTemplate")}
              <ArrowRight className="ml-1 size-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
