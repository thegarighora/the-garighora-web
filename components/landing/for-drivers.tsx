import { ArrowRight, Fuel, PlusCircle, TrendingUp, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CtaLink } from "@/components/landing/cta-link";
import { Section, SectionHeading } from "@/components/landing/section";
import { ArrowLink } from "@/components/landing/site-link";
import { links, routes } from "@/lib/site-config";

const benefits: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: TrendingUp,
    title: "Earn twice on one journey",
    body: "The rental fare on the way out, a Return Car fare on the way back. Same fuel, same hours, more income.",
  },
  {
    icon: Fuel,
    title: "Stop paying to drive home",
    body: "The return leg costs you fuel whether or not anyone is in the car. Post it and let it pay for itself.",
  },
  {
    icon: Users,
    title: "Passengers come to you",
    body: "Ride Requests on your route land in your app. Send an offer with your fare — you decide what a trip is worth.",
  },
  {
    icon: PlusCircle,
    title: "Cash in hand, commission later",
    body: "Passengers pay you directly after the trip. GariGhora's commission is recorded against the trip and settled separately by bKash, Nagad, bank transfer or cash.",
  },
];

export function ForDrivers({ moreLink = true }: { moreLink?: boolean } = {}) {
  return (
    <Section id="for-drivers" tone="surface" aria-labelledby="drivers-heading">
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <div className="flex flex-col gap-8">
          <SectionHeading
            id="drivers-heading"
            align="left"
            eyebrow="For drivers"
            title="One trip. Two fares."
            description="You already drive the empty leg. Post it as a Return Car trip and somebody heading that way pays for the journey you were making anyway."
          />

          <ul className="grid gap-5 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <li key={benefit.title} className="flex flex-col gap-2">
                <span className="grid size-10 place-items-center rounded-xl bg-gradient-cta text-brand-on-brand shadow-brand-sm">
                  <benefit.icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="text-base font-semibold tracking-tight text-brand-ink">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-brand-ink-muted">
                  {benefit.body}
                </p>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row">
            <CtaLink href={links.driverSignup} tone="gradient">
              Register as a Driver
              <ArrowRight />
            </CtaLink>
            <CtaLink href={links.playStore} tone="outline">
              Get the Driver App
            </CtaLink>
          </div>

          {moreLink ? (
            <ArrowLink href={routes.forDrivers}>
              What drivers need to get started
            </ArrowLink>
          ) : null}
        </div>

        {/* ------------------------------------------------------------------
         * Earnings example. SAMPLE FIGURES ONLY — illustrative Dhaka–Cumilla
         * numbers, not a quoted or guaranteed fare.
         * ---------------------------------------------------------------- */}
        <aside
          aria-labelledby="earnings-heading"
          className="rounded-3xl border border-brand-secondary-300 bg-gradient-card p-6 shadow-brand sm:p-8"
        >
          <h3
            id="earnings-heading"
            className="text-lg font-semibold tracking-tight text-brand-ink"
          >
            What one Dhaka → Cumilla job can look like
          </h3>
          <p className="mt-1 text-sm text-brand-ink-muted">
            Sample figures for illustration.
          </p>

          <dl className="mt-6 flex flex-col gap-3">
            <EarningsRow
              label="Rental fare, Dhaka → Cumilla"
              value="৳5,000"
            />
            <EarningsRow
              label="Return Car fare, Cumilla → Dhaka"
              value="৳1,100"
              highlight
            />
            <div className="my-1 h-px bg-brand-hairline" />
            <div className="flex items-baseline justify-between gap-3">
              <dt className="text-sm font-semibold text-brand-ink">
                Total for the same journey
              </dt>
              <dd className="text-2xl font-semibold text-brand-primary-800 dark:text-brand-ink">
                ৳6,100
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-3">
              <dt className="text-sm text-brand-ink-muted">
                Driving back empty
              </dt>
              <dd className="text-base font-medium text-brand-ink-muted line-through">
                ৳5,000
              </dd>
            </div>
          </dl>

          <p className="mt-6 rounded-2xl bg-brand-primary-50 px-4 py-3 text-sm leading-relaxed text-brand-primary-800 dark:bg-brand-surface dark:text-brand-ink-muted">
            <span className="font-semibold">+৳1,100</span> for a drive you were
            making anyway — and the passenger pays far less than a fresh rental
            would have cost them.
          </p>
        </aside>
      </div>
    </Section>
  );
}

function EarningsRow({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={
        highlight
          ? "flex items-baseline justify-between gap-3 rounded-xl bg-brand-secondary-100 px-3 py-2 dark:bg-brand-surface"
          : "flex items-baseline justify-between gap-3 px-3 py-2"
      }
    >
      <dt className="text-sm text-brand-ink-muted">{label}</dt>
      <dd className="text-base font-semibold text-brand-ink">{value}</dd>
    </div>
  );
}
