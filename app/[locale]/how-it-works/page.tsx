import {
  CalloutBand,
  FeatureGrid,
  InfoCard,
} from "@/components/landing/blocks";
import { CtaLink } from "@/components/landing/cta-link";
import { HowItWorks } from "@/components/landing/how-it-works";
import { PageHero } from "@/components/landing/page-hero";
import { ProblemInsight } from "@/components/landing/problem-insight";
import { Section, SectionHeading } from "@/components/landing/section";
import { ArrowLink } from "@/components/landing/site-link";
import { JsonLd } from "@/components/seo/json-ld";
import { resolveLocale, type LocaleParams } from "@/lib/i18n/page";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/structured-data";
import { routes } from "@/lib/site-config";

export async function generateMetadata({ params }: LocaleParams) {
  const { locale, t } = await resolveLocale(params);
  const meta = t.meta.howItWorks;

  return pageMetadata({
    locale,
    title: meta.title,
    description: meta.description,
    path: routes.howItWorks,
    keywords: meta.keywords,
  });
}

export default async function HowItWorksPage({ params }: LocaleParams) {
  const { locale, t } = await resolveLocale(params);
  const page = t.pages.howItWorks;
  const meta = t.meta.howItWorks;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(locale, t.common.a11y.breadcrumbHome, [
            { name: page.hero.breadcrumb, path: routes.howItWorks },
          ]),
          webPageSchema({
            type: "WebPage",
            locale,
            name: meta.schemaName,
            description: meta.description,
            path: routes.howItWorks,
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

      <HowItWorks t={t} moreLink={false} />

      <Section aria-labelledby="lifecycle-heading">
        <SectionHeading
          id="lifecycle-heading"
          eyebrow={page.lifecycle.eyebrow}
          title={page.lifecycle.title}
          description={page.lifecycle.description}
        />
        <FeatureGrid className="mt-6" items={page.lifecycle.items} />
      </Section>

      <Section tone="surface" aria-labelledby="choose-heading">
        <SectionHeading
          id="choose-heading"
          eyebrow={page.choose.eyebrow}
          title={page.choose.title}
          description={page.choose.description}
        />

        <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <InfoCard title={page.choose.rental.title}>
            <ul className="flex list-disc flex-col gap-2 pl-5 marker:text-brand-primary-400">
              {page.choose.rental.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="mt-4">
              <ArrowLink href={page.choose.rental.link.href}>
                {page.choose.rental.link.label}
              </ArrowLink>
            </div>
          </InfoCard>

          <InfoCard title={page.choose.returnCar.title} tone="highlight">
            <ul className="flex list-disc flex-col gap-2 pl-5 marker:text-brand-secondary-500">
              {page.choose.returnCar.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="mt-4">
              <ArrowLink href={page.choose.returnCar.link.href}>
                {page.choose.returnCar.link.label}
              </ArrowLink>
            </div>
          </InfoCard>
        </div>
      </Section>

      <ProblemInsight t={t} moreLink={false} />

      <CalloutBand
        title={page.callout.title}
        description={page.callout.description}
        primary={page.callout.primary}
        secondary={page.callout.secondary}
      />
    </>
  );
}
