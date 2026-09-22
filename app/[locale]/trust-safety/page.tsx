import {
  CalloutBand,
  FeatureGrid,
  InfoCard,
  NumberedList,
} from "@/components/landing/blocks";
import { PageHero } from "@/components/landing/page-hero";
import { Section, SectionHeading } from "@/components/landing/section";
import { ArrowLink, SiteLink } from "@/components/landing/site-link";
import { TrustSafety } from "@/components/landing/trust-safety";
import { JsonLd } from "@/components/seo/json-ld";
import { localeDigits } from "@/lib/i18n/numerals";
import { resolveLocale, type LocaleParams } from "@/lib/i18n/page";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/structured-data";
import { routes, siteConfig } from "@/lib/site-config";

const linkClass =
  "font-medium text-brand-primary-700 underline underline-offset-4 dark:text-brand-primary-300";

export async function generateMetadata({ params }: LocaleParams) {
  const { locale, t } = await resolveLocale(params);
  const meta = t.meta.trustSafety;

  return pageMetadata({
    locale,
    title: meta.title,
    description: meta.description,
    path: routes.trustSafety,
    keywords: meta.keywords,
  });
}

export default async function TrustSafetyPage({ params }: LocaleParams) {
  const { locale, t } = await resolveLocale(params);
  const page = t.pages.trustSafety;
  const meta = t.meta.trustSafety;
  const card = page.report.card;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(locale, t.common.a11y.breadcrumbHome, [
            { name: page.hero.breadcrumb, path: routes.trustSafety },
          ]),
          webPageSchema({
            type: "WebPage",
            locale,
            name: meta.schemaName,
            description: meta.schemaDescription,
            path: routes.trustSafety,
          }),
        ]}
      />
      <PageHero
        t={t}
        breadcrumb={page.hero.breadcrumb}
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
      />

      <Section aria-labelledby="verification-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            <SectionHeading
              id="verification-heading"
              align="left"
              eyebrow={page.verification.eyebrow}
              title={page.verification.title}
              description={page.verification.description}
            />
            <NumberedList steps={page.verification.steps} locale={locale} />
          </div>

          <div className="flex flex-col gap-5 lg:pt-4">
            <InfoCard title={page.verification.passengers.title} tone="highlight">
              <p>{page.verification.passengers.body}</p>
            </InfoCard>
            <InfoCard
              title={page.verification.documents.title}
              icon={page.icons.documents}
            >
              <p className="mb-3">{page.verification.documents.body}</p>
              <ArrowLink href={page.verification.documents.link.href}>
                {page.verification.documents.link.label}
              </ArrowLink>
            </InfoCard>
          </div>
        </div>
      </Section>

      <Section tone="surface" aria-labelledby="during-heading">
        <SectionHeading
          id="during-heading"
          eyebrow={page.during.eyebrow}
          title={page.during.title}
        />
        <FeatureGrid className="mt-6" items={page.during.items} columns={4} />
      </Section>

      <Section aria-labelledby="fairness-heading">
        <SectionHeading
          id="fairness-heading"
          eyebrow={page.fairness.eyebrow}
          title={page.fairness.title}
        />
        <FeatureGrid className="mt-6" items={page.fairness.items} columns={4} />
      </Section>

      <TrustSafety t={t} moreLink={false} />

      <Section tone="surface" aria-labelledby="report-heading">
        <SectionHeading
          id="report-heading"
          eyebrow={page.report.eyebrow}
          title={page.report.title}
          description={page.report.description}
        />
        <div className="mx-auto mt-5 max-w-3xl">
          <InfoCard title={card.title} icon={page.icons.report}>
            <ul className="flex flex-col gap-2">
              <li>
                <strong>{card.duringLabel}</strong>
                {card.duringBefore}
                <SiteLink
                  href={`tel:${siteConfig.supportPhone.replace(/\s|-/g, "")}`}
                  className={linkClass}
                >
                  {localeDigits(locale, siteConfig.supportPhone)}
                </SiteLink>
                {card.duringAfter}
              </li>
              <li>
                <strong>{card.afterLabel}</strong>
                {card.afterBody}
              </li>
              <li>
                <strong>{card.elseLabel}</strong>
                {card.elseBefore}
                <SiteLink href={t.common.routes.contact} className={linkClass}>
                  {card.contactLabel}
                </SiteLink>
                {card.elseMiddle}
                <SiteLink
                  href={`mailto:${siteConfig.supportEmail}`}
                  className={linkClass}
                >
                  {siteConfig.supportEmail}
                </SiteLink>
                {card.elseAfter}
              </li>
            </ul>
            <p className="mt-4">{card.emergency}</p>
          </InfoCard>
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
