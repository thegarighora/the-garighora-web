import { cn } from "cn";
import { Badge } from "@/components/ui/badge";
import { CtaLink } from "@/components/landing/cta-link";
import { Section, SectionHeading } from "@/components/landing/section";
import { ArrowLink } from "@/components/landing/site-link";
import type { Content } from "@/lib/i18n";

/**
 * Two services, equal visual weight. Return Car carries the signature badge but
 * is not styled as an upsell or an add-on — both are first-class products of the
 * same account, same drivers, same vehicles.
 */
export function TwoServices({ t }: { t: Content }) {
  const services = t.home.services;

  return (
    <Section id="services" aria-labelledby="services-heading">
      <SectionHeading
        id="services-heading"
        eyebrow={services.eyebrow}
        title={services.title}
        description={services.description}
      />

      <div className="mt-block grid gap-6 lg:grid-cols-2 lg:gap-8">
        {services.items.map((service) => (
          <article
            key={service.id}
            id={service.id}
            className={cn(
              "flex scroll-mt-24 flex-col gap-6 rounded-3xl border p-6 sm:p-8",
              service.signature
                ? "border-brand-secondary-300 bg-gradient-card shadow-brand"
                : "border-brand-hairline bg-brand-surface-raised shadow-brand-sm"
            )}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-2xl bg-gradient-cta text-brand-on-brand shadow-brand-sm">
                  <service.icon aria-hidden="true" className="size-5" />
                </span>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold tracking-[0.16em] text-brand-ink-muted uppercase">
                    {service.eyebrow}
                  </span>
                  <h3 className="text-xl font-semibold tracking-tight text-brand-ink sm:text-2xl">
                    {service.name}
                  </h3>
                </div>
              </div>
              {service.signature ? (
                <Badge className="h-auto bg-gradient-accent px-3 py-1 text-brand-on-brand">
                  {services.signatureBadge}
                </Badge>
              ) : null}
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-base font-medium text-brand-ink sm:text-lg">
                {service.hook}
              </p>
              <p className="text-sm leading-relaxed text-brand-ink-muted sm:text-base">
                {service.blurb}
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {service.steps.map((step) => (
                <li key={step.text} className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-lg bg-brand-primary-50 text-brand-primary-700 dark:bg-brand-surface dark:text-brand-primary-300">
                    <step.icon aria-hidden="true" className="size-3.5" />
                  </span>
                  <span className="text-sm leading-relaxed text-brand-ink">
                    {step.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Sample listing — illustrative placeholder data, not real inventory. */}
            <div className="mt-auto rounded-2xl border border-brand-hairline bg-brand-surface p-4 dark:bg-brand-surface-raised">
              <span className="text-xs font-semibold tracking-[0.14em] text-brand-primary-600 uppercase">
                {service.sample.label}
              </span>
              <div className="mt-2 flex flex-wrap items-end justify-between gap-2">
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-brand-ink">
                    {service.sample.route}
                  </span>
                  <span className="text-xs text-brand-ink-muted">
                    {service.sample.detail}
                  </span>
                </div>
                <span className="text-lg font-semibold text-brand-primary-800 dark:text-brand-ink">
                  {service.sample.fare}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <CtaLink
                href={service.cta.href}
                tone={service.signature ? "gradient" : "outline"}
                block
              >
                {service.cta.label}
              </CtaLink>
              <ArrowLink href={service.page.href}>
                {service.page.label}
              </ArrowLink>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-4 text-center text-sm text-brand-ink-muted">
        {services.footnote.before}
        <strong className="font-semibold text-brand-ink">
          {services.footnote.strong}
        </strong>
        {services.footnote.after}
      </p>
    </Section>
  );
}
