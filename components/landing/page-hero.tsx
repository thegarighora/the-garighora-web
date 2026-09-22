import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "cn";
import type { Content } from "@/lib/i18n";

/**
 * The gradient band that opens every page other than the home page. Keeping one
 * on each page means the sticky navbar always has a dark surface to sit
 * transparently over, and gives every page the same entry rhythm.
 */
export function PageHero({
  t,
  eyebrow,
  title,
  description,
  breadcrumb,
  children,
  className,
}: {
  t: Content;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** Trailing crumb label — the home crumb is prepended automatically. */
  breadcrumb?: string;
  /** CTAs or supporting content rendered under the description. */
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-gradient-hero pt-22 pb-7 text-brand-on-brand sm:pt-24 sm:pb-8 lg:pt-28 lg:pb-10",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 size-96 bg-gradient-glow opacity-40 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="road-dashes pointer-events-none absolute inset-x-0 bottom-0 h-px text-brand-on-brand/20"
      />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-5 sm:px-6 lg:px-8">
        {breadcrumb ? (
          <nav aria-label={t.common.a11y.breadcrumb}>
            <ol className="flex items-center gap-1 text-sm text-brand-on-brand/70">
              <li>
                <Link
                  href={t.common.routes.home}
                  className="rounded-sm outline-none focus-visible:ring-3 focus-visible:ring-brand-on-brand/60 hover:text-brand-on-brand"
                >
                  {t.common.a11y.breadcrumbHome}
                </Link>
              </li>
              <li aria-hidden="true" className="flex items-center">
                <ChevronRight className="size-4" />
              </li>
              <li className="font-medium text-brand-on-brand">{breadcrumb}</li>
            </ol>
          </nav>
        ) : null}

        {eyebrow ? (
          <span className="text-xs font-semibold tracking-[0.18em] text-brand-secondary-300 uppercase">
            {eyebrow}
          </span>
        ) : null}

        <h1 className="max-w-3xl text-3xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        {description ? (
          <p className="max-w-2xl text-base leading-relaxed text-pretty text-brand-on-brand/85 sm:text-lg">
            {description}
          </p>
        ) : null}

        {children ? <div className="pt-2">{children}</div> : null}
      </div>
    </section>
  );
}
