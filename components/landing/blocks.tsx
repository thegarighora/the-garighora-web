import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "cn";
import { CtaLink } from "@/components/landing/cta-link";
import type { Locale } from "@/lib/i18n/config";
import { localeDigits } from "@/lib/i18n/numerals";

/**
 * Presentational blocks reused across the inner pages, so every page keeps the
 * same card shape, spacing and token usage.
 */

export type FeatureItem = {
  icon: LucideIcon;
  title: string;
  body: ReactNode;
  /** Renders the card in the highlighted (signature) treatment. */
  feature?: boolean;
};

export function FeatureGrid({
  items,
  columns = 3,
  className,
}: {
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "grid gap-5 sm:grid-cols-2",
        columns === 3 && "lg:grid-cols-3",
        columns === 4 && "lg:grid-cols-4",
        className
      )}
    >
      {items.map((item) => (
        <li
          key={item.title}
          className={cn(
            "flex flex-col gap-3 rounded-2xl border p-6",
            item.feature
              ? "border-brand-secondary-300 bg-gradient-card shadow-brand"
              : "border-brand-hairline bg-brand-surface-raised shadow-brand-sm"
          )}
        >
          <span
            className={cn(
              "grid size-11 place-items-center rounded-2xl",
              item.feature
                ? "bg-gradient-cta text-brand-on-brand shadow-brand-sm"
                : "bg-brand-primary-50 text-brand-primary-700 dark:bg-brand-surface dark:text-brand-primary-300"
            )}
          >
            <item.icon aria-hidden="true" className="size-5" />
          </span>
          <h3 className="text-base font-semibold tracking-tight text-brand-ink">
            {item.title}
          </h3>
          <div className="text-sm leading-relaxed text-brand-ink-muted">
            {item.body}
          </div>
        </li>
      ))}
    </ul>
  );
}

export type NumberedStep = { title: string; body: ReactNode };

/** Vertical numbered list with a dashed road running down the gutter. */
export function NumberedList({
  steps,
  locale,
  className,
}: {
  steps: NumberedStep[];
  /** Step numbers follow the page language — ১ ২ ৩ in Bangla. */
  locale: Locale;
  className?: string;
}) {
  return (
    <ol className={cn("flex flex-col", className)}>
      {steps.map((step, index) => (
        <li key={step.title} className="relative flex gap-4 pb-4 last:pb-0">
          {index < steps.length - 1 ? (
            <span
              aria-hidden="true"
              className="absolute top-11 bottom-1 left-[1.1875rem] w-px bg-brand-hairline"
            />
          ) : null}
          <span className="z-10 grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-cta text-sm font-semibold text-brand-on-brand shadow-brand-sm">
            {localeDigits(locale, String(index + 1))}
          </span>
          <div className="flex flex-col gap-1.5 pt-1">
            <h3 className="text-base font-semibold tracking-tight text-brand-ink">
              {step.title}
            </h3>
            <div className="text-sm leading-relaxed text-brand-ink-muted">
              {step.body}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Bordered aside for a definition, an example fare, or a caveat. */
export function InfoCard({
  title,
  children,
  icon: Icon,
  tone = "default",
  className,
}: {
  title?: string;
  children: ReactNode;
  icon?: LucideIcon;
  tone?: "default" | "highlight";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 rounded-2xl border p-6",
        tone === "highlight"
          ? "border-brand-secondary-300 bg-gradient-card shadow-brand"
          : "border-brand-hairline bg-brand-surface-raised shadow-brand-sm",
        className
      )}
    >
      {title ? (
        <div className="flex items-center gap-2">
          {Icon ? (
            <Icon
              aria-hidden="true"
              className="size-5 text-brand-primary-600 dark:text-brand-primary-300"
            />
          ) : null}
          <h3 className="text-base font-semibold tracking-tight text-brand-ink">
            {title}
          </h3>
        </div>
      ) : null}
      <div className="text-sm leading-relaxed text-brand-ink-muted">
        {children}
      </div>
    </div>
  );
}

/**
 * Closing gradient band for the inner pages — a lighter sibling of the home
 * page's full download section.
 */
export function CalloutBand({
  title,
  description,
  primary,
  secondary,
}: {
  title: string;
  description?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section
      aria-labelledby="callout-heading"
      className="relative isolate overflow-hidden bg-gradient-hero py-section text-brand-on-brand"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -bottom-24 size-96 bg-gradient-glow opacity-35 blur-2xl"
      />
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-5 text-center sm:px-6 lg:px-8">
        <h2
          id="callout-heading"
          className="text-2xl leading-tight font-semibold tracking-tight text-balance sm:text-3xl"
        >
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-base leading-relaxed text-pretty text-brand-on-brand/85">
            {description}
          </p>
        ) : null}
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <CtaLink href={primary.href} tone="onDark">
            {primary.label}
          </CtaLink>
          {secondary ? (
            <CtaLink href={secondary.href} tone="ghostOnDark">
              {secondary.label}
            </CtaLink>
          ) : null}
        </div>
      </div>
    </section>
  );
}
