import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/seo/json-ld";
import { Footer } from "@/components/landing/footer";
import { Navbar } from "@/components/landing/navbar";
import { keywordGroups } from "@/lib/seo";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";
import { siteConfig, siteUrl } from "@/lib/site-config";

/**
 * One font family, one weight range, `display: swap`. Loading a second or third
 * family costs real LCP time on the mobile connections most of our users are on,
 * and Core Web Vitals feed directly into search ranking.
 */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const defaultTitle =
  "GariGhora — Rental Car & Return Car across Bangladesh";
const defaultDescription =
  "A car is already going that way. Book a full car for your trip, or ride a driver's empty return leg for much less — verified drivers, pay after the trip.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s · ${siteConfig.name}`,
  },
  description: defaultDescription,
  applicationName: siteConfig.name,
  keywords: [
    ...keywordGroups.brand,
    ...keywordGroups.rental,
    ...keywordGroups.returnTrip,
  ],
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: { canonical: siteUrl },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={siteConfig.language}
      className={cn("h-full", "antialiased", "font-sans", inter.variable)}
    >
      <body className="flex min-h-full flex-col">
        {/* Site-wide identity graph — referenced by @id from every page's schema. */}
        <JsonLd data={[organizationSchema(), websiteSchema()]} />

        <a
          href="#main"
          className="sr-only rounded-lg bg-brand-surface-raised px-4 py-2 text-sm font-semibold text-brand-ink shadow-brand focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100"
        >
          Skip to content
        </a>

        <Navbar />

        <main id="main" className="flex flex-1 flex-col">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
