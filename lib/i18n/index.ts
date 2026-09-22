import { bn } from "@/lib/i18n/content/bn";
import { en } from "@/lib/i18n/content/en";
import type { Locale } from "@/lib/i18n/config";

/**
 * Every visible string on the site, keyed by locale.
 *
 * `Content` is derived from the English bundle, so the Bangla bundle is checked
 * against it structurally: a key added to one and missed in the other fails the
 * build instead of rendering an empty element.
 *
 * Both bundles are imported statically. They are plain data (a few tens of KB
 * of strings), the site is statically generated, and a dynamic import here
 * would force every page that needs copy to become async for no benefit.
 */
export type Content = typeof en;

const bundles: Record<Locale, Content> = { bn, en };

export function getContent(locale: Locale): Content {
  return bundles[locale];
}

export type { Locale };
