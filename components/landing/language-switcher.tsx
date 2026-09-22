"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "cn";
import {
  localeMeta,
  localePath,
  locales,
  splitLocale,
  type Locale,
} from "@/lib/i18n/config";

/**
 * Bangla / English toggle.
 *
 * It rebuilds the *current* path in the other locale rather than sending
 * everyone to the home page, because a reader who switches language halfway
 * down the Return Car page wants the Return Car page, not the front door.
 *
 * Each option is a real `<a href>` to a real URL, so it works without
 * JavaScript, can be opened in a new tab, and is crawlable — which is half the
 * point of prefixing English in the first place. Every language is named in its
 * own script: nobody looking for Bangla is helped by the word "Bengali".
 */
export function LanguageSwitcher({
  current,
  label,
  tone = "solid",
  size = "sm",
  onNavigate,
}: {
  current: Locale;
  /** Accessible name for the group, e.g. "Language". */
  label: string;
  /** `onDark` sits over the hero gradient before the navbar turns solid. */
  tone?: "solid" | "onDark";
  /** `sm` is the compact navbar pill; `md` is the mobile menu row. */
  size?: "sm" | "md";
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  // Strip the prefix so the same page can be rebuilt under the other locale.
  const { path } = splitLocale(pathname);

  return (
    <div
      role="group"
      aria-label={label}
      className={cn(
        "inline-flex shrink-0 items-center rounded-lg border p-0.5",
        tone === "solid"
          ? "border-brand-hairline bg-brand-surface"
          : "border-brand-on-brand/25 bg-brand-on-brand/10 backdrop-blur-sm"
      )}
    >
      {locales.map((locale) => {
        const active = locale === current;
        return (
          <Link
            key={locale}
            href={localePath(locale, path)}
            hrefLang={localeMeta[locale].hreflang}
            lang={localeMeta[locale].htmlLang}
            aria-current={active ? "true" : undefined}
            onClick={onNavigate}
            className={cn(
              "inline-flex items-center justify-center rounded-md font-semibold transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
              size === "sm" ? "h-7 px-2 text-xs" : "h-9 flex-1 px-3 text-sm",
              tone === "solid"
                ? active
                  ? "bg-brand-surface-raised text-brand-ink shadow-brand-sm"
                  : "text-brand-ink-muted hover:text-brand-ink"
                : active
                  ? "bg-brand-on-brand/90 text-brand-primary-800"
                  : "text-brand-on-brand/80 hover:text-brand-on-brand"
            )}
          >
            {size === "sm" ? localeMeta[locale].short : localeMeta[locale].name}
          </Link>
        );
      })}
    </div>
  );
}
