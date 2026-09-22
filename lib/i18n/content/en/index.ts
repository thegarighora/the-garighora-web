import { common } from "@/lib/i18n/content/en/common";
import { faqGroups } from "@/lib/i18n/content/en/faq";
import { home } from "@/lib/i18n/content/en/home";
import { legal } from "@/lib/i18n/content/en/legal";
import { keywords, meta } from "@/lib/i18n/content/en/meta";
import { pages } from "@/lib/i18n/content/en/pages";
import type { Locale } from "@/lib/i18n/config";

/**
 * The English bundle.
 *
 * This is also the shape every other locale is checked against — `Content` in
 * lib/i18n is `typeof en`, so a key added here and forgotten in bn is a type
 * error rather than a blank space on the page.
 */
export const en = {
  locale: "en" as Locale,
  common,
  home,
  pages,
  faqGroups,
  legal,
  meta,
  keywords,
};
