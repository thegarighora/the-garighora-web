import { notFound } from "next/navigation";
import { getContent, type Content } from "@/lib/i18n";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n/config";

/**
 * The three lines every localised page and `generateMetadata` starts with,
 * in one place: await the route params, reject a locale we do not serve, and
 * hand back that locale's copy.
 */
export type LocaleParams = { params: Promise<{ locale: string }> };

export async function resolveLocale(
  params: LocaleParams["params"]
): Promise<{ locale: Locale; t: Content }> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return { locale, t: getContent(locale) };
}

/**
 * The same thing for metadata routes (Open Graph cards and friends).
 *
 * Next probes those route modules while collecting page data, sometimes with
 * params it has not filled in yet, so a `notFound()` there fails the build
 * rather than returning a 404 to anyone. Falling back to the default locale
 * keeps the build honest and still produces a usable card.
 */
export async function resolveLocaleOrDefault(
  params: LocaleParams["params"]
): Promise<{ locale: Locale; t: Content }> {
  const { locale } = await params;
  const resolved: Locale = isLocale(locale) ? locale : defaultLocale;
  return { locale: resolved, t: getContent(resolved) };
}
