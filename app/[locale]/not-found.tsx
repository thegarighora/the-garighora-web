"use client";

import { usePathname } from "next/navigation";
import { Compass } from "lucide-react";
import { CtaLink } from "@/components/landing/cta-link";
import { SiteLink } from "@/components/landing/site-link";
import { splitLocale } from "@/lib/i18n/config";
import { common as bnCommon } from "@/lib/i18n/content/bn/common";
import { notFound as bnNotFound } from "@/lib/i18n/content/bn/not-found";
import { common as enCommon } from "@/lib/i18n/content/en/common";
import { notFound as enNotFound } from "@/lib/i18n/content/en/not-found";

/**
 * A `not-found.tsx` cannot read route params — React renders it in place of the
 * segment that threw, so there is nothing to await. Reading the locale off the
 * pathname instead keeps the 404 in the same language as the URL the visitor
 * typed, rather than answering an English URL in Bangla.
 *
 * That makes this a client component, which is why it imports the small
 * per-locale copy modules directly rather than the full content bundle: those
 * two files and `common` are plain strings, while the page bundles would drag
 * every icon and every page's copy into the client chunk.
 */
const copy = {
  bn: { notFound: bnNotFound, nav: bnCommon.nav },
  en: { notFound: enNotFound, nav: enCommon.nav },
};

export default function NotFound() {
  const { locale } = splitLocale(usePathname());
  const { notFound, nav } = copy[locale];

  return (
    <section className="relative isolate flex flex-1 items-center overflow-hidden bg-gradient-hero pt-22 pb-14 text-brand-on-brand sm:pt-24 sm:pb-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 size-96 bg-gradient-glow opacity-40 blur-2xl"
      />
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-6 px-5 text-center sm:px-6">
        <span className="grid size-12 place-items-center rounded-2xl bg-brand-on-brand/10 ring-1 ring-brand-on-brand/25">
          <Compass aria-hidden="true" className="size-6" />
        </span>

        <p className="text-xs font-semibold tracking-[0.18em] text-brand-secondary-300 uppercase">
          {notFound.code}
        </p>
        <h1 className="text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl">
          {notFound.title}
        </h1>
        <p className="text-base leading-relaxed text-pretty text-brand-on-brand/85">
          {notFound.description}
        </p>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <CtaLink href={notFound.home.href} tone="onDark">
            {notFound.home.label}
          </CtaLink>
          <CtaLink href={notFound.support.href} tone="ghostOnDark">
            {notFound.support.label}
          </CtaLink>
        </div>

        <ul className="mt-2 flex flex-wrap justify-center gap-x-5 gap-y-2">
          {nav.map((link) => (
            <li key={link.href}>
              <SiteLink
                href={link.href}
                className="text-sm text-brand-on-brand/75 underline underline-offset-4 hover:text-brand-on-brand"
              >
                {link.label}
              </SiteLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
