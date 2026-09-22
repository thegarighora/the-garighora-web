import { links, routes } from "@/lib/site-config";

/**
 * Locale plumbing.
 *
 * Bangla is the default and sits at the bare paths (`/`, `/faq`); English is
 * prefixed (`/en`, `/en/faq`). That keeps the URLs most of our visitors see
 * short, and still gives each language its own indexable, canonical address —
 * which a cookie-based toggle could never do.
 *
 * Nothing outside this file should build a localised path by hand. Components
 * read ready-made hrefs off their locale's content module, which builds them
 * with the helpers below.
 */
export const locales = ["bn", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "bn";

export const localeMeta = {
  bn: {
    /** Endonym — a language switcher should always name a language in itself. */
    name: "বাংলা",
    short: "বাং",
    htmlLang: "bn",
    /** og:locale wants a language_TERRITORY pair. */
    ogLocale: "bn_BD",
    /** hreflang is region-qualified: this is Bangladeshi Bangla, not Indian. */
    hreflang: "bn-BD",
  },
  en: {
    name: "English",
    short: "EN",
    htmlLang: "en",
    ogLocale: "en_US",
    hreflang: "en",
  },
} as const satisfies Record<
  Locale,
  {
    name: string;
    short: string;
    htmlLang: string;
    ogLocale: string;
    hreflang: string;
  }
>;

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** `/faq` → `/faq` for Bangla, `/en/faq` for English. Home collapses to `/en`. */
export function localePath(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/**
 * Splits a request path into its locale and the unprefixed route, so the
 * language switcher can rebuild the same page in the other language.
 */
export function splitLocale(pathname: string): {
  locale: Locale;
  path: string;
} {
  const [, first, ...rest] = pathname.split("/");
  if (first && isLocale(first)) {
    return { locale: first, path: `/${rest.join("/")}`.replace(/\/$/, "") || "/" };
  }
  return { locale: defaultLocale, path: pathname || "/" };
}

/** Prefixes every value of a path map for one locale, keys untouched. */
function prefixAll<T extends Record<string, string>>(
  locale: Locale,
  map: T
): Record<keyof T, string> {
  const prefixed = {} as Record<keyof T, string>;
  for (const key of Object.keys(map) as (keyof T)[]) {
    prefixed[key] = localePath(locale, map[key]);
  }
  return prefixed;
}

/** Every site route, prefixed for one locale. */
export function localeRoutes(locale: Locale) {
  return prefixAll(locale, routes);
}

/** The outbound/CTA destinations, prefixed for one locale. */
export function localeLinks(locale: Locale) {
  return prefixAll(locale, links);
}
