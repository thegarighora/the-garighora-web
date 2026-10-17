import { cache } from "react";
import type { Locale } from "@/lib/i18n/config";
import { siteConfig } from "@/lib/site-config";

/**
 * The company details an administrator edits in the admin panel
 * (Configuration → Platform settings → Website footer & contact), read from
 * the API's open `GET /site-config`.
 *
 * Read on the server only, once per render (`cache`), and refreshed at most
 * every five minutes (`revalidate`), so a corrected phone number reaches the
 * site within minutes without the site calling the API on every request.
 *
 * Never fails a page. When the API is unset, unreachable or answers something
 * unexpected, the values the site shipped with are used instead — a footer
 * with yesterday's phone number is far better than no page at all, and a build
 * with no API alongside it must still succeed.
 */

type Localized = Record<Locale, string>;

export interface SiteSettings {
  /** Canonical E.164, e.g. `+8801609185463`. Format with `displayPhone`. */
  supportPhone: string;
  supportEmail: string;
  /** Falls back to the support address when none is published. */
  careersEmail: string;
  /** Falls back to the support address when none is published. */
  privacyEmail: string;
  blurb: Localized;
  address: Localized;
  disclaimer: Localized;
  /** Only the profiles that are published; an unset one is left out. */
  social: {
    facebook: string | null;
    instagram: string | null;
    youtube: string | null;
    linkedin: string | null;
  };
}

/** How long the site keeps a read before asking the API again, in seconds. */
const REVALIDATE_SECONDS = 300;

/** A slow API must not hold a page render hostage. */
const TIMEOUT_MS = 4000;

const toCanonicalPhone = (phone: string) => phone.replace(/[^\d+]/g, "");

/** What the site shipped with, and what it shows when the API cannot answer. */
const FALLBACK: SiteSettings = {
  supportPhone: toCanonicalPhone(siteConfig.supportPhone),
  supportEmail: siteConfig.supportEmail,
  careersEmail: siteConfig.careersEmail,
  privacyEmail: siteConfig.privacyEmail,
  blurb: {
    en: "Rental Car and Return Car in one app. A car is already going that way — don't pay for an empty seat to come back empty.",
    bn: "রেন্টাল কার আর রিটার্ন কার — একটি অ্যাপেই। গাড়িটা তো ওই পথেই যাচ্ছে; খালি গাড়ি ফেরার ভাড়া আপনি কেন দেবেন?",
  },
  address: { en: "Dhaka, Bangladesh", bn: "ঢাকা, বাংলাদেশ" },
  disclaimer: {
    en: "Fares shown across this site are sample figures. Payment is collected after the trip is completed.",
    bn: "এই সাইটে দেখানো ভাড়াগুলো নমুনা হিসেবে দেওয়া। যাত্রা শেষ হওয়ার পরেই ভাড়া নেওয়া হয়।",
  },
  social: {
    facebook: siteConfig.social.facebook,
    instagram: siteConfig.social.instagram,
    youtube: siteConfig.social.youtube,
    linkedin: siteConfig.social.linkedin,
  },
};

/** `GET /site-config` as the API sends it. */
interface SiteConfigDto {
  supportPhone: string;
  supportEmail: string;
  careersEmail: string | null;
  privacyEmail: string | null;
  blurb: Localized;
  address: Localized;
  disclaimer: Localized;
  social: SiteSettings["social"];
}

const text = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0;

const localized = (value: unknown): value is Localized =>
  typeof value === "object" &&
  value !== null &&
  text((value as Localized).en) &&
  text((value as Localized).bn);

const https = (value: unknown): string | null =>
  text(value) && value.startsWith("https://") ? value : null;

/**
 * Takes what the API said field by field, keeping the shipped value for any
 * field that is missing or malformed rather than discarding the whole answer.
 */
function fromDto(dto: Partial<SiteConfigDto>): SiteSettings {
  const supportEmail = text(dto.supportEmail)
    ? dto.supportEmail
    : FALLBACK.supportEmail;

  return {
    supportPhone: text(dto.supportPhone)
      ? toCanonicalPhone(dto.supportPhone)
      : FALLBACK.supportPhone,
    supportEmail,
    // The API reports an unpublished address as `null`; the sentences these
    // appear in still need somewhere to write to, so support stands in.
    careersEmail: text(dto.careersEmail) ? dto.careersEmail : supportEmail,
    privacyEmail: text(dto.privacyEmail) ? dto.privacyEmail : supportEmail,
    blurb: localized(dto.blurb) ? dto.blurb : FALLBACK.blurb,
    address: localized(dto.address) ? dto.address : FALLBACK.address,
    disclaimer: localized(dto.disclaimer)
      ? dto.disclaimer
      : FALLBACK.disclaimer,
    // A missing `social` object is an old or broken answer; an explicit `null`
    // for one profile is the administrator hiding it, and is respected.
    social: dto.social
      ? {
          facebook: https(dto.social.facebook),
          instagram: https(dto.social.instagram),
          youtube: https(dto.social.youtube),
          linkedin: https(dto.social.linkedin),
        }
      : FALLBACK.social,
  };
}

/** The API base, e.g. `http://localhost:8000/api/v1`, without a trailing slash. */
function apiBase(): string | null {
  const base = process.env.API_URL ?? process.env.NEXT_PUBLIC_API_URL;
  return base ? base.replace(/\/$/, "") : null;
}

export const getSiteSettings = cache(async (): Promise<SiteSettings> => {
  const base = apiBase();
  if (!base) return FALLBACK;

  try {
    const response = await fetch(`${base}/site-config`, {
      next: { revalidate: REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!response.ok) return FALLBACK;

    const body = (await response.json()) as { data?: Partial<SiteConfigDto> };
    return body.data ? fromDto(body.data) : FALLBACK;
  } catch {
    return FALLBACK;
  }
});

/**
 * `+8801609185463` as a reader expects to see it: `+880 1609-185463`.
 * Anything that is not a Bangladeshi mobile number is shown as stored.
 */
export function displayPhone(canonical: string): string {
  const match = /^\+880(1\d{3})(\d{6})$/.exec(canonical);
  return match ? `+880 ${match[1]}-${match[2]}` : canonical;
}

/** A dialable `tel:` link for a stored number. */
export const telHref = (phone: string) => `tel:${toCanonicalPhone(phone)}`;
