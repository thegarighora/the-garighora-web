import { localeLinks, localeRoutes } from "@/lib/i18n/config";

const routes = localeRoutes("bn");
const links = localeLinks("bn");

/**
 * বাংলা — সাইটের সাধারণ অংশ।
 *
 * Register note for future editors: this is Bangladeshi newspaper Bangla —
 * চলিত ভাষা, the vocabulary a Prothom Alo or Kaler Kantho reader expects. Keep
 * product names (রেন্টাল কার, রিটার্ন কার, গাড়ি ভাই) as they are; they are
 * names, not phrases to re-translate. The wordmark stays in Latin because a
 * logotype is not translated.
 */
export const common = {
  routes,
  links,

  brand: {
    tagline: "গাড়িটা তো ওই পথেই যাচ্ছে।",
    pitch:
      "গাড়িটা তো ওই পথেই যাচ্ছে — খালি গাড়ি ফেরার ভাড়া আপনি কেন দেবেন?",
    wordmark: { first: "Gari", second: "Ghora" },
    address: "ঢাকা, বাংলাদেশ",
  },

  a11y: {
    skipToContent: "মূল অংশে যান",
    homeLink: "গাড়িঘোড়া হোম",
    mainNav: "প্রধান",
    mobileNav: "মোবাইল",
    footerNav: "ফুটার",
    openMenu: "মেনু খুলুন",
    closeMenu: "মেনু বন্ধ করুন",
    breadcrumb: "পথনির্দেশ",
    breadcrumbHome: "হোম",
    onThisPage: "এই পাতায়",
    language: "ভাষা",
    ratedOutOfFive: (rating: string) => `৫-এ ${rating} রেটিং`,
  },

  nav: [
    { label: "কীভাবে কাজ করে", href: routes.howItWorks },
    { label: "রেন্টাল কার", href: routes.rentalCar },
    { label: "রিটার্ন কার", href: routes.returnCar },
    { label: "চালকদের জন্য", href: routes.forDrivers },
    { label: "সাধারণ প্রশ্ন", href: routes.faq },
  ],

  navCta: {
    becomeDriver: "চালক হিসেবে যুক্ত হন",
    getApp: "অ্যাপ নিন",
  },

  footer: {
    blurb:
      "রেন্টাল কার আর রিটার্ন কার — একটি অ্যাপেই। গাড়িটা তো ওই পথেই যাচ্ছে; খালি গাড়ি ফেরার ভাড়া আপনি কেন দেবেন?",
    columns: [
      {
        heading: "প্রতিষ্ঠান",
        items: [
          { label: "গাড়িঘোড়া সম্পর্কে", href: routes.about },
          { label: "আস্থা ও নিরাপত্তা", href: routes.trustSafety },
          { label: "ক্যারিয়ার", href: routes.careers },
          { label: "যোগাযোগ", href: routes.contact },
        ],
      },
      {
        heading: "সেবা",
        items: [
          { label: "রেন্টাল কার", href: routes.rentalCar },
          { label: "রিটার্ন কার", href: routes.returnCar },
          { label: "চালকদের জন্য", href: routes.forDrivers },
          { label: "অ্যাপ নিন", href: routes.download },
        ],
      },
      {
        heading: "সহায়তা",
        items: [
          { label: "কীভাবে কাজ করে", href: routes.howItWorks },
          { label: "সাধারণ প্রশ্ন", href: routes.faq },
          { label: "সহায়তা কেন্দ্রে যোগাযোগ", href: routes.contact },
          { label: "যাত্রা নিয়ে অভিযোগ", href: `${routes.contact}#report` },
        ],
      },
      {
        heading: "আইনি",
        items: [
          { label: "ব্যবহারের শর্তাবলি", href: routes.terms },
          { label: "গোপনীয়তা নীতি", href: routes.privacy },
          { label: "বাতিলের নীতি", href: routes.cancellation },
          { label: "চালক চুক্তি", href: routes.driverAgreement },
        ],
      },
    ],
    rights: (year: string) => `© ${year} গাড়িঘোড়া। সর্বস্বত্ব সংরক্ষিত।`,
    disclaimer:
      "এই সাইটে দেখানো ভাড়াগুলো নমুনা হিসেবে দেওয়া। যাত্রা শেষ হওয়ার পরেই ভাড়া নেওয়া হয়।",
    social: {
      facebook: "ফেসবুকে গাড়িঘোড়া",
      instagram: "ইনস্টাগ্রামে গাড়িঘোড়া",
      youtube: "ইউটিউবে গাড়িঘোড়া",
      linkedin: "লিংকডইনে গাড়িঘোড়া",
    },
  },

  legalPages: [
    { label: "ব্যবহারের শর্তাবলি", href: routes.terms },
    { label: "গোপনীয়তা নীতি", href: routes.privacy },
    { label: "বাতিলের নীতি", href: routes.cancellation },
    { label: "চালক চুক্তি", href: routes.driverAgreement },
  ],
};
