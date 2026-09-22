import {
  CalloutBand,
  FeatureGrid,
  InfoCard,
  NumberedList,
} from "@/components/landing/blocks";
import { CtaLink } from "@/components/landing/cta-link";
import { FaqAccordion } from "@/components/landing/faq";
import { ForDrivers } from "@/components/landing/for-drivers";
import { PageHero } from "@/components/landing/page-hero";
import { Section, SectionHeading } from "@/components/landing/section";
import { ArrowLink } from "@/components/landing/site-link";
import { JsonLd } from "@/components/seo/json-ld";
import { pickFaqs } from "@/lib/faq-data";
import { resolveLocale, type LocaleParams } from "@/lib/i18n/page";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/structured-data";
import { routes } from "@/lib/site-config";

const faqIds = ["driver-signup", "commission", "verification", "ratings"];

export async function generateMetadata({ params }: LocaleParams) {
  const { locale, t } = await resolveLocale(params);
  const meta = t.meta.forDrivers;

  return pageMetadata({
    locale,
    title: meta.title,
    description: meta.description,
    path: routes.forDrivers,
    keywords: meta.keywords,
  });
}

export default async function ForDriversPage({ params }: LocaleParams) {
  const { locale, t } = await resolveLocale(params);
  const page = t.pages.forDrivers;
  const meta = t.meta.forDrivers;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(locale, t.common.a11y.breadcrumbHome, [
            { name: page.hero.breadcrumb, path: routes.forDrivers },
          ]),
          webPageSchema({
            type: "WebPage",
            locale,
            name: meta.schemaName,
            description: meta.schemaDescription,
            path: routes.forDrivers,
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

      <ForDrivers t={t} moreLink={false} />

      <Section aria-labelledby="signup-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            <SectionHeading
              id="signup-heading"
              align="left"
              eyebrow={page.signup.eyebrow}
              title={page.signup.title}
            />
            <NumberedList steps={page.signup.steps} locale={locale} />
          </div>

          <InfoCard
            title={page.signup.verification.title}
            icon={page.icons.verification}
            tone="highlight"
            className="lg:self-start"
          >
            {page.signup.verification.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mb-3">
                {paragraph}
              </p>
            ))}
            <ArrowLink href={page.signup.verification.link.href}>
              {page.signup.verification.link.label}
            </ArrowLink>
          </InfoCard>
        </div>
      </Section>

      <Section tone="surface" aria-labelledby="requirements-heading">
        <SectionHeading
          id="requirements-heading"
          eyebrow={page.requirements.eyebrow}
          title={page.requirements.title}
          description={page.requirements.description}
        />
        <FeatureGrid
          className="mt-6"
          items={page.requirements.items}
          columns={4}
        />
      </Section>

      <Section aria-labelledby="earnings-detail-heading">
        <SectionHeading
          id="earnings-detail-heading"
          eyebrow={page.earnings.eyebrow}
          title={page.earnings.title}
        />
        <FeatureGrid className="mt-6" items={page.earnings.items} columns={2} />

        <InfoCard
          className="mx-auto mt-5 max-w-3xl"
          title={page.earnings.rule.title}
          icon={page.icons.rule}
        >
          <p>{page.earnings.rule.body}</p>
        </InfoCard>
      </Section>

      <Section tone="surface" aria-labelledby="driver-faq-heading">
        <SectionHeading
          id="driver-faq-heading"
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
