import {
  CalloutBand,
  FeatureGrid,
  InfoCard,
  NumberedList,
} from "@/components/landing/blocks";
import { CtaLink } from "@/components/landing/cta-link";
import { FaqAccordion } from "@/components/landing/faq";
import { PageHero } from "@/components/landing/page-hero";
import { Section, SectionHeading } from "@/components/landing/section";
import { ArrowLink } from "@/components/landing/site-link";
import { JsonLd } from "@/components/seo/json-ld";
import { pickFaqs } from "@/lib/faq-data";
import { resolveLocale, type LocaleParams } from "@/lib/i18n/page";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";
import { routes } from "@/lib/site-config";

/** The questions worth answering before a first rental booking, in this order. */
const faqIds = ["whole-car", "negotiate", "when-pay", "how-far-ahead"];

export async function generateMetadata({ params }: LocaleParams) {
  const { locale, t } = await resolveLocale(params);
  const meta = t.meta.rentalCar;

  return pageMetadata({
    locale,
    title: meta.title,
    description: meta.description,
    path: routes.rentalCar,
    keywords: meta.keywords,
  });
}

export default async function RentalCarPage({ params }: LocaleParams) {
  const { locale, t } = await resolveLocale(params);
  const page = t.pages.rentalCar;
  const meta = t.meta.rentalCar;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(locale, t.common.a11y.breadcrumbHome, [
            { name: page.hero.breadcrumb, path: routes.rentalCar },
          ]),
          serviceSchema({
            id: "rental",
            locale,
            name: meta.schemaName,
            description: meta.schemaDescription,
            path: routes.rentalCar,
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

      <Section aria-labelledby="steps-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            <SectionHeading
              id="steps-heading"
              align="left"
              eyebrow={page.steps.eyebrow}
              title={page.steps.title}
            />
            <NumberedList steps={page.steps.items} locale={locale} />
          </div>

          <div className="flex flex-col gap-5">
            {/* SAMPLE DATA: replace with real market rates before launch. */}
            <InfoCard
              title={page.prices.title}
              icon={page.icons.prices}
              tone="highlight"
            >
              <p className="mb-3">{page.prices.intro}</p>
              <ul className="flex flex-col gap-2">
                {page.prices.rows.map((item) => (
                  <li
                    key={item.route}
                    className="flex items-baseline justify-between gap-3 border-b border-brand-hairline pb-2 last:border-0 last:pb-0"
                  >
                    <span className="flex flex-col">
                      <span className="font-medium text-brand-ink">
                        {item.route}
                      </span>
                      <span className="text-xs">{item.vehicle}</span>
                    </span>
                    <span className="shrink-0 font-semibold text-brand-ink">
                      {item.fare}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs">{page.prices.footnote}</p>
            </InfoCard>

            <InfoCard
              title={page.returnHint.title}
              icon={page.icons.returnHint}
            >
              <p>{page.returnHint.body}</p>
              <div className="mt-3">
                <ArrowLink href={page.returnHint.link.href}>
                  {page.returnHint.link.label}
                </ArrowLink>
              </div>
            </InfoCard>
          </div>
        </div>
      </Section>

      <Section tone="surface" aria-labelledby="included-heading">
        <SectionHeading
          id="included-heading"
          eyebrow={page.included.eyebrow}
          title={page.included.title}
        />
        <FeatureGrid className="mt-6" items={page.included.items} />
      </Section>

      <Section aria-labelledby="rental-faq-heading">
        <SectionHeading
          id="rental-faq-heading"
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
