import { ArrowRight, BadgeCheck, Clock, MapPin, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CtaLink } from "@/components/landing/cta-link";
import type { Content } from "@/lib/i18n";

export function Hero({ t }: { t: Content }) {
  const hero = t.home.hero;

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-gradient-hero pt-22 pb-8 text-brand-on-brand sm:pt-24 sm:pb-10 lg:pt-28 lg:pb-14"
    >
      {/* Decorative glow + road markings behind the content. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 size-104 bg-gradient-glow opacity-45 blur-2xl sm:size-136"
      />
      <div
        aria-hidden="true"
        className="road-dashes pointer-events-none absolute inset-x-0 bottom-0 h-px text-brand-on-brand/25"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8">
        <div className="flex flex-col items-start gap-6">
          <Badge className="h-auto border-brand-on-brand/25 bg-brand-on-brand/10 px-3 py-1 text-xs text-brand-on-brand backdrop-blur-sm">
            {hero.badge}
          </Badge>

          <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {hero.titleLead}
            <span className="mt-2 block text-brand-secondary-300">
              {hero.titleAccent}
            </span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-pretty text-brand-on-brand/85 sm:text-lg">
            {hero.intro.before}
            <strong className="font-semibold text-brand-on-brand">
              {hero.intro.rental}
            </strong>
            {hero.intro.middle}
            <strong className="font-semibold text-brand-on-brand">
              {hero.intro.returnCar}
            </strong>
            {hero.intro.after}
          </p>

          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
            <CtaLink href={hero.primaryCta.href} tone="onDark">
              {hero.primaryCta.label}
              <ArrowRight />
            </CtaLink>
            <CtaLink href={hero.secondaryCta.href} tone="ghostOnDark">
              {hero.secondaryCta.label}
            </CtaLink>
          </div>

          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2">
            {hero.trustRow.map((item) => (
              <li
                key={item.label}
                className="inline-flex items-center gap-2 text-sm text-brand-on-brand/80"
              >
                <item.icon
                  aria-hidden="true"
                  className="size-4 text-brand-secondary-300"
                />
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        {/* ------------------------------------------------------------------
         * Supporting visual — hand-built app mockup so there are no broken
         * image links in the repo.
         * TODO: replace with the real app screenshot / illustration asset.
         * ---------------------------------------------------------------- */}
        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-6 bg-gradient-glow opacity-35 blur-2xl"
          />
          <div
            role="img"
            aria-label={hero.preview.alt}
            className="relative rounded-[2rem] border border-brand-on-brand/20 bg-brand-on-brand/10 p-3 shadow-brand-lg backdrop-blur-md"
          >
            <div className="rounded-[1.5rem] bg-brand-surface-raised p-4 text-brand-ink">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-[0.14em] text-brand-primary-600 uppercase">
                  {hero.preview.kicker}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-brand-success-100 px-2 py-0.5 text-[0.7rem] font-semibold text-brand-success-700">
                  <BadgeCheck aria-hidden="true" className="size-3" />
                  {hero.preview.verified}
                </span>
              </div>

              <div className="mt-4 flex flex-col gap-3">
                {hero.preview.trips.map((trip, index) => (
                  <MockTripCard
                    key={`${trip.from}-${trip.to}`}
                    {...trip}
                    highlight={index === 0}
                  />
                ))}
              </div>

              <p className="mt-4 rounded-xl bg-brand-primary-50 px-3 py-2 text-xs leading-relaxed text-brand-primary-800 dark:bg-brand-surface dark:text-brand-ink-muted">
                {hero.preview.note}
              </p>
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-brand-on-brand/60">
            {hero.preview.caption}
          </p>
        </div>
      </div>
    </section>
  );
}

/** Mock listing card used inside the hero app preview. Sample data only. */
function MockTripCard({
  from,
  to,
  time,
  vehicle,
  fare,
  compare,
  rating,
  highlight = false,
}: {
  from: string;
  to: string;
  time: string;
  vehicle: string;
  fare: string;
  compare: string;
  rating: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={
        highlight
          ? "rounded-xl border border-brand-secondary-300 bg-brand-secondary-50 p-3 dark:bg-brand-surface"
          : "rounded-xl border border-brand-hairline bg-brand-surface p-3"
      }
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 flex-col gap-1">
          <span className="flex items-center gap-1.5 text-sm font-semibold">
            <MapPin
              aria-hidden="true"
              className="size-3.5 text-brand-primary-600"
            />
            {/* Wraps rather than truncating on narrow screens — an ellipsised
                route tells the reader nothing. */}
            <span>
              {from} → {to}
            </span>
          </span>
          <span className="flex items-center gap-1.5 text-xs text-brand-ink-muted">
            <Clock aria-hidden="true" className="size-3.5" />
            {time}
          </span>
          <span className="text-xs text-brand-ink-muted">{vehicle}</span>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-1">
          <span className="text-base font-semibold text-brand-primary-800 dark:text-brand-ink">
            {fare}
          </span>
          <span className="text-[0.7rem] text-brand-ink-muted line-through">
            {compare}
          </span>
          <span className="inline-flex items-center gap-1 text-[0.7rem] font-medium text-brand-ink-muted">
            <Star
              aria-hidden="true"
              className="size-3 text-brand-secondary-500"
            />
            {rating}
          </span>
        </div>
      </div>
    </div>
  );
}
