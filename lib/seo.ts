import type { Metadata } from "next";
import {
  defaultLocale,
  localeMeta,
  localePath,
  locales,
  type Locale,
} from "@/lib/i18n/config";
import { siteConfig, siteUrl } from "@/lib/site-config";

/**
 * SEO helpers. Every page builds its metadata through `pageMetadata` so that
 * canonical URLs, hreflang, Open Graph tags and Twitter cards are consistent
 * and impossible to forget.
 */

/** Turns a route path into an absolute URL on the canonical origin. */
export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path === "/" ? "" : path}`;
}

/** The absolute URL of one unprefixed route in one locale. */
export function localeUrl(locale: Locale, path: string) {
  return absoluteUrl(localePath(locale, path));
}

/**
 * hreflang map for a page.
 *
 * Both languages are real, indexable pages, so each one has to point at the
 * other — otherwise Google treats them as duplicates and picks one. `x-default`
 * goes to Bangla, which is what an unmatched visitor should land on.
 */
function languageAlternates(path: string) {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[localeMeta[locale].hreflang] = localeUrl(locale, path);
  }
  languages["x-default"] = localeUrl(defaultLocale, path);
  return languages;
}

type PageMetadataInput = {
  locale: Locale;
  /** Short page title. The brand name is appended by the layout template. */
  title: string;
  description: string;
  /** Unprefixed route path, e.g. `/return-car`. Localised here. */
  path: string;
  keywords?: string[];
  /** Open Graph type — `article` suits the long-form policy pages. */
  type?: "website" | "article";
  /**
   * Set for pages that should stay out of search results. The policy pages are
   * indexable on purpose: they answer real queries and signal legitimacy.
   */
  noindex?: boolean;
};

export function pageMetadata({
  locale,
  title,
  description,
  path,
  keywords,
  type = "website",
  noindex = false,
}: PageMetadataInput): Metadata {
  const url = localeUrl(locale, path);
  // Open Graph titles are not run through the layout's title template, so they
  // are spelled out in full here.
  const socialTitle = `${title} · ${siteConfig.name}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: localeMeta[locale].ogLocale,
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      site: `@${siteConfig.social.twitterHandle}`,
      creator: `@${siteConfig.social.twitterHandle}`,
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

export { languageAlternates };
