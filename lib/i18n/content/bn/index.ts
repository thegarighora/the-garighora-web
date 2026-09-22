import type { Locale } from "@/lib/i18n/config";
import { common } from "@/lib/i18n/content/bn/common";
import { faqGroups } from "@/lib/i18n/content/bn/faq";
import { home } from "@/lib/i18n/content/bn/home";
import { legal } from "@/lib/i18n/content/bn/legal";
import { keywords, meta } from "@/lib/i18n/content/bn/meta";
import { pages } from "@/lib/i18n/content/bn/pages";
import type { en } from "@/lib/i18n/content/en";

/**
 * বাংলা বান্ডল — সাইটের ডিফল্ট ভাষা।
 *
 * The annotation is what enforces parity: `typeof en` is a type-only import, so
 * there is no runtime dependency between the two bundles, but a key that exists
 * in English and not here fails `yarn typecheck` rather than rendering blank.
 */
export const bn: typeof en = {
  locale: "bn" as Locale,
  common,
  home,
  pages,
  faqGroups,
  legal,
  meta,
  keywords,
};
