import type { Metadata } from "next";
import { siteConfig, siteUrl } from "@/lib/site-config";

/**
 * SEO helpers. Every page builds its metadata through `pageMetadata` so that
 * canonical URLs, Open Graph tags and Twitter cards are consistent and
 * impossible to forget.
 */

/** Turns a route path into an absolute URL on the canonical origin. */
export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path === "/" ? "" : path}`;
}

type PageMetadataInput = {
  /** Short page title. The brand name is appended by the layout template. */
  title: string;
  description: string;
  /** Route path, e.g. `/return-car`. Used for the canonical URL. */
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
  title,
  description,
  path,
  keywords,
  type = "website",
  noindex = false,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  // Open Graph titles are not run through the layout's title template, so they
  // are spelled out in full here.
  const socialTitle = `${title} · ${siteConfig.name}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
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

/**
 * Keyword sets, grouped so a page can compose the ones that apply to it.
 * These are the phrases people in Bangladesh actually search for.
 */
export const keywordGroups = {
  brand: ["GariGhora", "Gari Ghora", "Ghori Ghora", "Return Gari"],
  rental: [
    "car rental Bangladesh",
    "rent a car Dhaka",
    "car hire Dhaka",
    "intercity car rental Bangladesh",
    "full car booking Bangladesh",
  ],
  returnTrip: [
    "return car Bangladesh",
    "return trip car",
    "empty return car Dhaka",
    "one way car rental Bangladesh",
    "cheap car Dhaka to Cumilla",
  ],
  routes: [
    "Dhaka to Cumilla car",
    "Cumilla to Dhaka car",
    "Dhaka to Chattogram car rental",
    "Dhaka to Sylhet car rental",
    "Dhaka airport car service",
  ],
  driver: [
    "driver jobs Bangladesh",
    "earn with your car Dhaka",
    "car owner income Bangladesh",
    "rent out my car Dhaka",
  ],
} as const;
