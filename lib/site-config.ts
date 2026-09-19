/**
 * Public site configuration — routes, nav structure and every outbound link.
 *
 * Every internal destination is declared once in `routes` and referenced from
 * there, so renaming a page means editing one line. Swap the placeholder
 * external hrefs in `links` for real destinations when the apps ship.
 *
 * Copy on the site is English by default. Bangla strings can be dropped in later
 * by turning these values (and the copy inside components/landing/*) into a
 * dictionary keyed by locale — no layout changes required.
 */

/**
 * Canonical origin, with no trailing slash. Every absolute URL on the site —
 * canonicals, Open Graph, sitemap, robots, JSON-LD — derives from this one
 * value, so a domain change is a single edit (or a single env var).
 *
 * Set NEXT_PUBLIC_SITE_URL in the deployment environment; the fallback is the
 * production domain.
 * TODO: confirm the final production domain.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://garighora.com"
).replace(/\/$/, "");

export const siteConfig = {
  name: "GariGhora",
  /** Legal entity name used in structured data. TODO: confirm registered name. */
  legalName: "GariGhora Ltd.",
  /** Latin spelling varies in the wild; kept here so copy stays consistent. */
  altNames: ["Ghori Ghora", "Gari Ghora", "Return Gari"],
  tagline: "A car is already going that way.",
  pitch:
    "A car is already going that way — don't pay for an empty seat to come back empty.",
  supportPhone: "+880 1XXX-XXXXXX", // TODO: replace with the real Gari Bhai hotline
  supportEmail: "support@garighora.com", // TODO: replace with the real support inbox
  careersEmail: "careers@garighora.com", // TODO: replace with the real careers inbox
  privacyEmail: "privacy@garighora.com", // TODO: replace with the real privacy inbox
  address: "Dhaka, Bangladesh", // TODO: replace with the registered office address
  /** Shown on the legal pages. Update whenever a policy is revised. */
  legalLastUpdated: "1 September 2026",
  /** Used for og:locale and the html lang attribute. */
  locale: "en_US",
  language: "en",
  /** Countries and cities we describe ourselves as serving, for local SEO. */
  areaServed: {
    country: "Bangladesh",
    countryCode: "BD",
    cities: ["Dhaka", "Cumilla", "Chattogram", "Sylhet"],
  },
  /** TODO: replace with the real handles once the accounts exist. */
  social: {
    facebook: "https://facebook.com/garighora",
    instagram: "https://instagram.com/garighora",
    youtube: "https://youtube.com/@garighora",
    linkedin: "https://linkedin.com/company/garighora",
    /** Without the @ — used for twitter:site / twitter:creator. */
    twitterHandle: "garighora",
  },
  /**
   * Search-console ownership tokens. Paste the values in when the properties
   * are created; empty strings are omitted from the rendered head.
   */
  verification: {
    google: "", // TODO: Google Search Console HTML tag token
    bing: "", // TODO: Bing Webmaster Tools token
  },
} as const;

/** Every page on the site. Reference these instead of writing paths inline. */
export const routes = {
  home: "/",
  howItWorks: "/how-it-works",
  rentalCar: "/rental-car",
  returnCar: "/return-car",
  forDrivers: "/for-drivers",
  faq: "/faq",
  download: "/download",
  about: "/about",
  trustSafety: "/trust-safety",
  careers: "/careers",
  contact: "/contact",
  terms: "/terms",
  privacy: "/privacy",
  cancellation: "/cancellation-policy",
  driverAgreement: "/driver-agreement",
} as const;

export type Route = (typeof routes)[keyof typeof routes];

/** Primary navigation, rendered by the navbar on every page. */
export const navLinks = [
  { label: "How it works", href: routes.howItWorks },
  { label: "Rental Car", href: routes.rentalCar },
  { label: "Return Car", href: routes.returnCar },
  { label: "For Drivers", href: routes.forDrivers },
  { label: "FAQ", href: routes.faq },
] as const;

/**
 * Outbound links. The app store and signup destinations are placeholders — the
 * passenger app, driver app and admin panel are separate deployables.
 */
export const links = {
  passengerSignup: routes.download, // TODO: point at the passenger app onboarding
  driverSignup: routes.forDrivers, // TODO: point at the driver registration flow
  appStore: routes.download, // TODO: replace with the real App Store listing
  playStore: routes.download, // TODO: replace with the real Google Play listing
  webBooking: routes.download, // TODO: point at web booking once it is live
  support: routes.contact,
} as const;

export const footerColumns = [
  {
    heading: "Company",
    items: [
      { label: "About GariGhora", href: routes.about },
      { label: "Trust & Safety", href: routes.trustSafety },
      { label: "Careers", href: routes.careers },
      { label: "Contact us", href: routes.contact },
    ],
  },
  {
    heading: "Product",
    items: [
      { label: "Rental Car", href: routes.rentalCar },
      { label: "Return Car", href: routes.returnCar },
      { label: "For Drivers", href: routes.forDrivers },
      { label: "Get the App", href: routes.download },
    ],
  },
  {
    heading: "Support",
    items: [
      { label: "How it works", href: routes.howItWorks },
      { label: "FAQ", href: routes.faq },
      { label: "Contact support", href: routes.contact },
      { label: "Report a trip issue", href: `${routes.contact}#report` },
    ],
  },
  {
    heading: "Legal",
    items: [
      { label: "Terms of Service", href: routes.terms },
      { label: "Privacy Policy", href: routes.privacy },
      { label: "Cancellation Policy", href: routes.cancellation },
      { label: "Driver Agreement", href: routes.driverAgreement },
    ],
  },
] as const;

/** Cross-links shown at the bottom of the legal pages. */
export const legalPages = [
  { label: "Terms of Service", href: routes.terms },
  { label: "Privacy Policy", href: routes.privacy },
  { label: "Cancellation Policy", href: routes.cancellation },
  { label: "Driver Agreement", href: routes.driverAgreement },
] as const;
