"use client";

import React from "react";
import type { ReactNode } from "react";
import type { Route } from "next";
import type { LinkProps } from "next/link";
import Link from "next/link";
import { useParams } from "next/navigation";

import type { languages } from "@/i18n/settings";

interface AppLinkProps<T> extends LinkProps<T> {
  children: ReactNode;
  href: Route;
  className?: string;
}

function AppLink<T>({ href, children, className, ...rest }: AppLinkProps<T>) {
  const { lng } = useParams();

  const language = lng as (typeof languages)[number];

  return (
    <Link href={`/${language}${href}` as Route} className={className} {...rest}>
      {children}
    </Link>
  );
}

export default AppLink;
