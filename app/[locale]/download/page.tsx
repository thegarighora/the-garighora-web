import { FeatureGrid, InfoCard } from "@/components/landing/blocks";
import { FinalCta } from "@/components/landing/final-cta";
import { PageHero } from "@/components/landing/page-hero";
import { Section, SectionHeading } from "@/components/landing/section";
import { SiteLink } from "@/components/landing/site-link";
import { JsonLd } from "@/components/seo/json-ld";
import { resolveLocale, type LocaleParams } from "@/lib/i18n/page";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, mobileAppSchema } from "@/lib/structured-data";
import { routes, siteConfig } from "@/lib/site-config";

const linkClass =
  "font-medium text-brand-primary-700 underline underline-offset-4 dark:text-brand-primary-300";

export async function generateMetadata({ params }: LocaleParams) {
  const { locale, t } = await resolveLocale(params);
  const meta = t.meta.download;

  return pageMetadata({
    locale,
    title: meta.title,
    description: meta.description,
    path: routes.download,
    keywords: meta.keywords,
  });
}

export default async function DownloadPage({ params }: LocaleParams) {
  const { locale, t } = await resolveLocale(params);
  const page = t.pages.download;
  const meta = t.meta.download;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(locale, t.common.a11y.breadcrumbHome, [
            { name: page.hero.breadcrumb, path: routes.download },
          ]),
          mobileAppSchema({
            locale,
            name: meta.passengerAppName,
            description: meta.passengerAppDescription,
            os: "Android, iOS",
          }),
          mobileAppSchema({
            locale,
            name: meta.driverAppName,
            description: meta.driverAppDescription,
            os: "Android, iOS",
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

      <Section aria-labelledby="passenger-app-heading">
        <SectionHeading
          id="passenger-app-heading"
          eyebrow={page.passenger.eyebrow}
          title={page.passenger.title}
          description={page.passenger.description}
        />
        <FeatureGrid className="mt-6" items={page.passenger.items} columns={4} />
      </Section>

      <Section tone="surface" aria-labelledby="driver-app-heading">
        <SectionHeading
          id="driver-app-heading"
          eyebrow={page.driver.eyebrow}
          title={page.driver.title}
          description={page.driver.description}
        />
        <FeatureGrid className="mt-6" items={page.driver.items} columns={4} />

        <InfoCard
          className="mx-auto mt-5 max-w-3xl"
          title={page.driver.waitlist.title}
        >
          <p>
            {page.driver.waitlist.before}
            <SiteLink
              href={`mailto:${siteConfig.supportEmail}`}
              className={linkClass}
            >
              {siteConfig.supportEmail}
            </SiteLink>
            {page.driver.waitlist.middle}
            <SiteLink href={t.common.routes.contact} className={linkClass}>
              {page.driver.waitlist.contactLabel}
            </SiteLink>
            {page.driver.waitlist.after}
          </p>
        </InfoCard>
      </Section>

      <FinalCta t={t} />
    </>
  );
}
