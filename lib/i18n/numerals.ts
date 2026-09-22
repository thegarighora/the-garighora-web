import type { Locale } from "@/lib/i18n/config";

/**
 * Bangla numerals.
 *
 * Bangladeshi newspapers set every figure — fares, dates, times, phone numbers
 * — in Bangla digits, and readers notice immediately when a "Bangla" page does
 * not. Latin digits inside otherwise-Bangla copy is the clearest tell that the
 * text was machine-translated rather than written.
 */
const BANGLA_DIGITS = "০১২৩৪৫৬৭৮৯";

/** `"৳1,100"` → `"৳১,১০০"`. Separators, currency marks and words pass through. */
export function toBanglaDigits(value: string): string {
  return value.replace(/[0-9]/g, (digit) => BANGLA_DIGITS[Number(digit)]);
}

/** Digit conversion that is a no-op outside Bangla, for shared components. */
export function localeDigits(locale: Locale, value: string): string {
  return locale === "bn" ? toBanglaDigits(value) : value;
}
