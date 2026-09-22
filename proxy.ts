import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale } from "@/lib/i18n/config";
import { routes } from "@/lib/site-config";

/**
 * Locale routing.
 *
 * Bangla is the default and lives at the bare paths (`/`, `/faq`); English is
 * prefixed (`/en`, `/en/faq`). The app tree is `app/[locale]/…` either way, so
 * this file is the only place that knows the prefix is optional:
 *
 *   /faq      → rewritten to /bn/faq   (the address bar still says /faq)
 *   /en/faq   → passed through
 *   /bn/faq   → redirected to /faq     (one canonical URL per page)
 *
 * The `/bn` redirect matters for SEO: without it every Bangla page would be
 * reachable at two URLs, and a crawler that found both would have to guess
 * which one to index.
 *
 * Unknown paths are rewritten into the locale segment too, where a catch-all
 * turns them into a 404 rendered inside the site chrome. Leaving them to resolve
 * outside `[locale]` instead would land on Next's own bare error page, because
 * the root layout only exists inside that segment.
 */
const canonicalRoutes = new Set<string>(Object.values(routes));

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const [, first, ...rest] = pathname.split("/");

  if (first && isLocale(first)) {
    if (first !== defaultLocale) return NextResponse.next();

    // /bn/... duplicates the bare path. Send readers and crawlers to the one
    // canonical URL; anything that is not a page (a metadata route, say) is
    // left where it is rather than bounced through a redirect.
    const unprefixed = `/${rest.join("/")}`.replace(/\/$/, "") || "/";
    if (!canonicalRoutes.has(unprefixed)) return NextResponse.next();

    const url = request.nextUrl.clone();
    url.pathname = unprefixed;
    return NextResponse.redirect(url, 308);
  }

  const url = request.nextUrl.clone();
  url.pathname =
    pathname === "/" ? `/${defaultLocale}` : `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  /**
   * Everything except Next's internals, the API surface, the generated social
   * cards, the root-level metadata routes (robots.txt, sitemap.xml, the
   * manifest and the icons) and anything with a file extension, which is a
   * static asset in /public.
   */
  matcher: [
    "/((?!_next/|api/|.*opengraph-image|.*twitter-image|robots\\.txt|sitemap\\.xml|manifest\\.webmanifest|icon|apple-icon|favicon\\.ico|.*\\..*).*)",
  ],
};
