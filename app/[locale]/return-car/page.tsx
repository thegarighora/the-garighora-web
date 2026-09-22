import {
  CalloutBand,
  FeatureGrid,
  InfoCard,
  NumberedList,
} from "@/components/landing/blocks";
import { CtaLink } from "@/components/landing/cta-link";
import { FaqAccordion } from "@/components/landing/faq";
import { PageHero } from "@/components/landing/page-hero";
import { ProblemInsight } from "@/components/landing/problem-insight";
import { Section, SectionHeading } from "@/components/landing/section";
import { ArrowLink } from "@/components/landing/site-link";
import { JsonLd } from "@/components/seo/json-ld";
import { pickFaqs } from "@/lib/faq-data";
import { resolveLocale, type LocaleParams } from "@/lib/i18n/page";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";
import { routes } from "@/lib/site-config";

const faqIds = ["why-cheaper", "no-match", "whole-car", "negotiate"];

export async function generateMetadata({ params }: LocaleParams) {
  const { locale, t } = await resolveLocale(params);
  const meta = t.meta.returnCar;

  return pageMetadata({
    locale,
    title: meta.title,
    description: meta.description,
    path: routes.returnCar,
    keywords: meta.keywords,
  });
}

export default async function ReturnCarPage({ params }: LocaleParams) {
  const { locale, t } = await resolveLocale(params);
  const page = t.pages.returnCar;
  const meta = t.meta.returnCar;
  const { browse, request } = page.twoWays;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(locale, t.common.a11y.breadcrumbHome, [
            { name: page.hero.breadcrumb, path: routes.returnCar },
          ]),
          serviceSchema({
            id: "return",
            locale,
            name: meta.schemaName,
            description: meta.schemaDescription,
            path: routes.returnCar,
            offers: meta.schemaOffers,
          }),
        ]}
      />
      <PageHero
        t={t}
        breadcrumb={page.hero.breadcrumb}
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <CtaLink href={page.hero.primaryCta.href} tone="onDark">
            {page.hero.primaryCta.label}
          </CtaLink>
          <CtaLink href={page.hero.secondaryCta.href} tone="ghostOnDark">
            {page.hero.secondaryCta.label}
          </CtaLink>
        </div>
      </PageHero>

      <ProblemInsight t={t} moreLink={false} />

      <Section aria-labelledby="two-ways-heading">
        <SectionHeading
          id="two-ways-heading"
          eyebrow={page.twoWays.eyebrow}
          title={page.twoWays.title}
          description={page.twoWays.description}
        />

        <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <article className="flex flex-col gap-6 rounded-3xl border border-brand-hairline bg-brand-surface-raised p-6 shadow-brand-sm sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl bg-gradient-cta text-brand-on-brand shadow-brand-sm">
                <browse.icon aria-hidden="true" className="size-5" />
              </span>
              <div className="flex flex-col">
                <span className="text-xs font-semibold tracking-[0.16em] text-brand-ink-muted uppercase">
                  {browse.optionLabel}
                </span>
                <h3 className="text-xl font-semibold tracking-tight text-brand-ink">
                  {browse.title}
                </h3>
              </div>
            </div>
            <NumberedList steps={browse.steps} locale={locale} />
          </article>

          <article className="flex flex-col gap-6 rounded-3xl border border-brand-secondary-300 bg-gradient-card p-6 shadow-brand sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl bg-gradient-cta text-brand-on-brand shadow-brand-sm">
                <request.icon aria-hidden="true" className="size-5" />
              </span>
              <div className="flex flex-col">
                <span className="text-xs font-semibold tracking-[0.16em] text-brand-ink-muted uppercase">
                  {request.optionLabel}
                </span>
                <h3 className="text-xl font-semibold tracking-tight text-brand-ink">
                  {request.title}
                </h3>
              </div>
            </div>
            <NumberedList steps={request.steps} locale={locale} />
          </article>
        </div>
      </Section>

      <Section tone="surface" aria-labelledby="sample-heading">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionHeading
              id="sample-heading"
              align="left"
              eyebrow={page.samples.eyebrow}
              title={page.samples.title}
              description={page.samples.description}
            />
            <div>
              <ArrowLink href={page.samples.searchLink.href}>
                {page.samples.searchLink.label}
              </ArrowLink>
            </div>
          </div>

          {/* SAMPLE DATA: illustrative listings, not live inventory. */}
          <ul className="flex flex-col gap-4">
            {page.samples.trips.map((trip) => (
              <li
                key={trip.route}
                className="flex flex-wrap items-end justify-between gap-3 rounded-2xl border border-brand-hairline bg-brand-surface-raised p-5 shadow-brand-sm"
              >
                <div className="flex min-w-0 flex-col gap-1">
                  <span className="text-base font-semibold text-brand-ink">
                    {trip.route}
                  </span>
                  <span className="text-sm text-brand-ink-muted">
                    {trip.when}
                  </span>
                  <span className="text-sm text-brand-ink-muted">
                    {trip.vehicle}
                  </span>
                </div>
                <div className="flex shrink-0 flex-col items-end">
                  <span className="text-xl font-semibold text-brand-primary-800 dark:text-brand-ink">
                    {trip.fare}
                  </span>
                  <span className="text-xs text-brand-ink-muted line-through">
                    {page.samples.usualRental(trip.rental)}
                  </span>
                </div>
              </li>
            ))}
            <li className="text-xs text-brand-ink-muted">
              {page.samples.footnote}
            </li>
          </ul>
        </div>
      </Section>

      <Section aria-labelledby="why-heading">
        <SectionHeading
          id="why-heading"
          eyebrow={page.why.eyebrow}
          title={page.why.title}
        />
        <FeatureGrid className="mt-6" items={page.why.items} />

        <InfoCard
          className="mx-auto mt-5 max-w-3xl"
          title={page.why.notCard.title}
        >
          <p>{page.why.notCard.body}</p>
        </InfoCard>
      </Section>

      <Section tone="surface" aria-labelledby="return-faq-heading">
        <SectionHeading
          id="return-faq-heading"
          eyebrow={page.faq.eyebrow}
          title={page.faq.title}
        />
        <div className="mx-auto mt-5 max-w-3xl rounded-3xl border border-brand-hairline bg-brand-surface-raised px-5 py-2 shadow-brand-sm sm:px-7">
          <FaqAccordion items={pickFaqs(t.faqGroups, faqIds)} />
        </div>
        <div className="mt-4 flex justify-center">
          <ArrowLink href={page.faq.moreLink.href}>
            {page.faq.moreLink.label}
          </ArrowLink>
        </div>
      </Section>

      <CalloutBand
        title={page.callout.title}
        description={page.callout.description}
        primary={page.callout.primary}
        secondary={page.callout.secondary}
      />
    </>
  );
}
