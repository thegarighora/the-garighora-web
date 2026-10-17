import { localeLinks, localeRoutes } from "@/lib/i18n/config";
import { siteConfig } from "@/lib/site-config";

const routes = localeRoutes("en");
const links = localeLinks("en");

/**
 * Chrome shared by every page: navigation, footer, and the accessible names
 * that never appear on screen but do get read aloud.
 *
 * `routes` and `links` are already prefixed for this locale, so components
 * never build a localised path themselves.
 */
export const common = {
  routes,
  links,

  brand: {
    tagline: "A car is already going that way.",
    pitch:
      "A car is already going that way — don't pay for an empty seat to come back empty.",
    /** The wordmark is split so the second half can take the accent colour. */
    wordmark: { first: "Gari", second: "Ghora" },
  },

  a11y: {
    skipToContent: "Skip to content",
    homeLink: "GariGhora home",
    mainNav: "Main",
    mobileNav: "Mobile",
    footerNav: "Footer",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    breadcrumb: "Breadcrumb",
    breadcrumbHome: "Home",
    onThisPage: "On this page",
    language: "Language",
    ratedOutOfFive: (rating: string) => `Rated ${rating} out of 5`,
  },

  nav: [
    { label: "How it works", href: routes.howItWorks },
    { label: "Rental Car", href: routes.rentalCar },
    { label: "Return Car", href: routes.returnCar },
    { label: "For Drivers", href: routes.forDrivers },
    { label: "FAQ", href: routes.faq },
  ],

  navCta: {
    becomeDriver: "Become a Driver",
    getApp: "Get the App",
  },

  /**
   * The footer's blurb, address and disclaimer are edited in the admin panel
   * and read through lib/site-settings, alongside the contacts and social
   * links. Only the chrome that belongs to this site's own pages stays here.
   */
  footer: {
    columns: [
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
    ],
    rights: (year: string) => `© ${year} ${siteConfig.name}. All rights reserved.`,
    social: {
      facebook: "GariGhora on Facebook",
      instagram: "GariGhora on Instagram",
      youtube: "GariGhora on YouTube",
      linkedin: "GariGhora on LinkedIn",
    },
  },

  /** Cross-links at the foot of every policy page. */
  legalPages: [
    { label: "Terms of Service", href: routes.terms },
    { label: "Privacy Policy", href: routes.privacy },
    { label: "Cancellation Policy", href: routes.cancellation },
    { label: "Driver Agreement", href: routes.driverAgreement },
  ],
};
