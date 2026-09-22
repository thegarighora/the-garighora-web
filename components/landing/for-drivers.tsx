import { ArrowRight } from "lucide-react";
import { CtaLink } from "@/components/landing/cta-link";
import { Section, SectionHeading } from "@/components/landing/section";
import { ArrowLink } from "@/components/landing/site-link";
import type { Content } from "@/lib/i18n";

export function ForDrivers({
  t,
  moreLink = true,
}: {
  t: Content;
  moreLink?: boolean;
}) {
  const section = t.home.forDrivers;
  const earnings = section.earnings;

  return (
    <Section id="for-drivers" tone="surface" aria-labelledby="drivers-heading">
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <div className="flex flex-col gap-8">
          <SectionHeading
            id="drivers-heading"
            align="left"
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
          />

          <ul className="grid gap-5 sm:grid-cols-2">
            {section.benefits.map((benefit) => (
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
            <CtaLink href={section.primaryCta.href} tone="gradient">
              {section.primaryCta.label}
              <ArrowRight />
            </CtaLink>
            <CtaLink href={section.secondaryCta.href} tone="outline">
              {section.secondaryCta.label}
            </CtaLink>
          </div>

          {moreLink ? (
            <ArrowLink href={section.moreLink.href}>
              {section.moreLink.label}
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
            {earnings.title}
          </h3>
          <p className="mt-1 text-sm text-brand-ink-muted">
            {earnings.caption}
          </p>

          <dl className="mt-6 flex flex-col gap-3">
            <EarningsRow
              label={earnings.outbound.label}
              value={earnings.outbound.value}
            />
            <EarningsRow
              label={earnings.inbound.label}
              value={earnings.inbound.value}
              highlight
            />
            <div className="my-1 h-px bg-brand-hairline" />
            <div className="flex items-baseline justify-between gap-3">
              <dt className="text-sm font-semibold text-brand-ink">
                {earnings.totalLabel}
              </dt>
              <dd className="text-2xl font-semibold text-brand-primary-800 dark:text-brand-ink">
                {earnings.totalValue}
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-3">
              <dt className="text-sm text-brand-ink-muted">
                {earnings.emptyLabel}
              </dt>
              <dd className="text-base font-medium text-brand-ink-muted line-through">
                {earnings.emptyValue}
              </dd>
            </div>
          </dl>

          <p className="mt-6 rounded-2xl bg-brand-primary-50 px-4 py-3 text-sm leading-relaxed text-brand-primary-800 dark:bg-brand-surface dark:text-brand-ink-muted">
            <span className="font-semibold">{earnings.note.strong}</span>
            {earnings.note.rest}
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
