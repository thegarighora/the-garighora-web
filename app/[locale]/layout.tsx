import type { CSSProperties } from "react";
import type { Metadata, Viewport } from "next";
import { Hind_Siliguri, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/seo/json-ld";
import { Footer } from "@/components/landing/footer";
import { Navbar } from "@/components/landing/navbar";
import { getContent } from "@/lib/i18n";
import {
  isLocale,
  localeMeta,
  localePath,
  locales,
  type Locale,
} from "@/lib/i18n/config";
import { languageAlternates, localeUrl } from "@/lib/seo";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";
import { routes, siteConfig } from "@/lib/site-config";

/**
 * This is the site's root layout — there is no `app/layout.tsx`, because the
 * `<html lang>` attribute has to follow the locale in the URL and a layout
 * above the `[locale]` segment cannot see it.
 *
 * Two families, one weight range each, `display: swap`. Inter has no Bengali
 * glyphs at all, so a Bangla page rendered with it is a wall of tofu boxes;
 * Hind Siliguri is the Bengali face most Bangladeshi publishers use on the web
 * and carries a Latin set of its own, so the Bangla pages stay typographically
 * consistent even where a product name stays in English.
 */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-latin",
  display: "swap",
});

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bangla",
  display: "swap",
});

/** Both locales are known up front, so both are statically generated. */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale: Locale = raw;
  const { meta, keywords } = getContent(locale);

  return {
    metadataBase: new URL(localeUrl(locale, routes.home)),
    title: {
      default: meta.site.title,
      template: `%s · ${siteConfig.name}`,
    },
    description: meta.site.description,
    applicationName: siteConfig.name,
    keywords: [
      ...keywords.brand,
      ...keywords.rental,
      ...keywords.returnTrip,
    ],
    authors: [{ name: siteConfig.name, url: localeUrl(locale, routes.home) }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    alternates: {
      canonical: localeUrl(locale, routes.home),
      languages: languageAlternates(routes.home),
    },
    openGraph: {
      title: meta.site.title,
      description: meta.site.description,
      url: localeUrl(locale, routes.home),
      type: "website",
      locale: localeMeta[locale].ogLocale,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.site.title,
      description: meta.site.description,
      site: `@${siteConfig.social.twitterHandle}`,
      creator: `@${siteConfig.social.twitterHandle}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    // Empty tokens are dropped, so these stay harmless until the properties exist.
    verification: {
      ...(siteConfig.verification.google
        ? { google: siteConfig.verification.google }
        : {}),
      ...(siteConfig.verification.bing
        ? { other: { "msvalidate.01": siteConfig.verification.bing } }
        : {}),
    },
    category: "travel",
    formatDetection: { telephone: true, address: false, email: false },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    // Matches --brand-neutral-50 (page ground) / --brand-neutral-950 (dark
    // page ground) in app/theme.css.
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const t = getContent(locale);

  return (
    <html
      lang={localeMeta[locale].htmlLang}
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        inter.variable,
        hindSiliguri.variable
      )}
      /**
       * Per-glyph fallback: whichever family leads, the other covers the script
       * it lacks, so a Bangla sentence containing "Google Play" never breaks
       * into tofu and an English page never renders Bengali in a fallback face.
       */
      style={
        {
          "--font-sans":
            locale === "bn"
              ? "var(--font-bangla), var(--font-latin), sans-serif"
              : "var(--font-latin), var(--font-bangla), sans-serif",
        } as CSSProperties
      }
    >
      <body className="flex min-h-full flex-col">
        {/* Site-wide identity graph — referenced by @id from every page's schema. */}
        <JsonLd data={[organizationSchema(), websiteSchema()]} />

        <a
          href="#main"
          className="sr-only rounded-lg bg-brand-surface-raised px-4 py-2 text-sm font-semibold text-brand-ink shadow-brand focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100"
        >
          {t.common.a11y.skipToContent}
        </a>

        <Navbar
          locale={locale}
          homeHref={localePath(locale, routes.home)}
          nav={t.common.nav}
          cta={{
            driver: {
              label: t.common.navCta.becomeDriver,
              href: t.common.links.driverSignup,
            },
            app: {
              label: t.common.navCta.getApp,
              href: t.common.links.appStore,
            },
          }}
          a11y={{
            homeLink: t.common.a11y.homeLink,
            mainNav: t.common.a11y.mainNav,
            mobileNav: t.common.a11y.mobileNav,
            openMenu: t.common.a11y.openMenu,
            closeMenu: t.common.a11y.closeMenu,
            language: t.common.a11y.language,
          }}
        />

        <main id="main" className="flex flex-1 flex-col">
          {children}
        </main>

        <Footer t={t} />
      </body>
    </html>
  );
}
