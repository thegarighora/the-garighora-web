import { Mail, Phone } from "lucide-react";
import { CalloutBand, InfoCard } from "@/components/landing/blocks";
import { CtaLink } from "@/components/landing/cta-link";
import { PageHero } from "@/components/landing/page-hero";
import { Section, SectionHeading } from "@/components/landing/section";
import { SiteLink } from "@/components/landing/site-link";
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
  const meta = t.meta.contact;

  return pageMetadata({
    locale,
    title: meta.title,
    description: meta.description,
    path: routes.contact,
    keywords: meta.keywords,
  });
}

export default async function ContactPage({ params }: LocaleParams) {
  const { locale, t } = await resolveLocale(params);
  const page = t.pages.contact;
  const meta = t.meta.contact;

  const tel = `tel:${siteConfig.supportPhone.replace(/\s|-/g, "")}`;
  const mailto = `mailto:${siteConfig.supportEmail}`;
  const phone = localeDigits(locale, siteConfig.supportPhone);

  /**
   * Each channel's destination depends on what it is, not on the language, so
   * the content files carry only the words and this map supplies the href.
   */
  const actions: Record<
    (typeof page.channels.items)[number]["key"],
    { label: string; href: string }
  > = {
    phone: { label: phone, href: tel },
    email: { label: siteConfig.supportEmail, href: mailto },
    drivers: { label: "", href: t.common.routes.forDrivers },
    press: { label: siteConfig.supportEmail, href: mailto },
  };

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(locale, t.common.a11y.breadcrumbHome, [
            { name: page.hero.breadcrumb, path: routes.contact },
          ]),
          webPageSchema({
            type: "ContactPage",
            locale,
            name: meta.schemaName,
            description: meta.schemaDescription,
            path: routes.contact,
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
          <CtaLink href={tel} tone="onDark">
            <Phone aria-hidden="true" />
            {page.hero.callCta(phone)}
          </CtaLink>
          <CtaLink href={mailto} tone="ghostOnDark">
            <Mail aria-hidden="true" />
            {page.hero.emailCta}
          </CtaLink>
        </div>
      </PageHero>

      <Section aria-labelledby="channels-heading">
        <SectionHeading
          id="channels-heading"
          eyebrow={page.channels.eyebrow}
          title={page.channels.title}
        />

        <ul className="mt-6 grid gap-5 sm:grid-cols-2">
          {page.channels.items.map((channel) => {
            const action = actions[channel.key];
            return (
              <li
                key={channel.key}
                className="flex flex-col gap-3 rounded-2xl border border-brand-hairline bg-brand-surface-raised p-6 shadow-brand-sm"
              >
                <span className="grid size-11 place-items-center rounded-2xl bg-brand-primary-50 text-brand-primary-700 dark:bg-brand-surface dark:text-brand-primary-300">
                  <channel.icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="text-base font-semibold tracking-tight text-brand-ink">
                  {channel.title}
                </h3>
                <p className="text-sm leading-relaxed text-brand-ink-muted">
                  {channel.body}
                </p>
                <SiteLink
                  href={action.href}
                  className="mt-auto pt-2 text-sm font-semibold text-brand-primary-700 dark:text-brand-primary-300"
                >
                  {channel.actionLabel ?? action.label}
                </SiteLink>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section tone="surface" aria-labelledby="report-heading">
        <div
          id="report"
          className="scroll-mt-24 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16"
        >
          <div className="flex flex-col gap-6">
            <SectionHeading
              id="report-heading"
              align="left"
              eyebrow={page.report.eyebrow}
              title={page.report.title}
              description={page.report.description}
            />
            <div className="flex flex-col gap-3 text-sm leading-relaxed text-brand-ink-muted sm:text-base">
              <p>
                <strong className="font-semibold text-brand-ink">
                  {page.report.duringLabel}
                </strong>
                {page.report.duringBody}
              </p>
              <p>
                <strong className="font-semibold text-brand-ink">
                  {page.report.afterLabel}
                </strong>
                {page.report.afterBody}
              </p>
              <p>
                <strong className="font-semibold text-brand-ink">
                  {page.report.emergencyLabel}
                </strong>
                {page.report.emergencyBody}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CtaLink href={tel} tone="gradient">
                <Phone aria-hidden="true" />
                {page.report.callCta}
              </CtaLink>
              <CtaLink href={t.common.routes.trustSafety} tone="outline">
                {page.report.trustCta}
              </CtaLink>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <InfoCard title={page.report.hours.title} icon={page.icons.hours}>
              <p className="mb-2">
                <strong>{page.report.hours.phoneLabel}</strong>
                {page.report.hours.phoneBody}
              </p>
              <p>
                <strong>{page.report.hours.emailLabel}</strong>
                {page.report.hours.emailBody}
              </p>
            </InfoCard>

            <InfoCard title={page.report.where.title} icon={page.icons.where}>
              <p>
                {siteConfig.name}
                <br />
                {t.common.brand.address}
              </p>
              <p className="mt-2 text-xs">{page.report.where.note}</p>
            </InfoCard>

            <InfoCard
              title={page.report.privacy.title}
              icon={page.icons.privacy}
            >
              <p>
                {page.report.privacy.before}
                <SiteLink
                  href={`mailto:${siteConfig.privacyEmail}`}
                  className={linkClass}
                >
                  {siteConfig.privacyEmail}
                </SiteLink>
                {page.report.privacy.middle}
                <SiteLink href={t.common.routes.privacy} className={linkClass}>
                  {page.report.privacy.policyLabel}
                </SiteLink>
                {page.report.privacy.after}
              </p>
            </InfoCard>
          </div>
        </div>
      </Section>

      <Section aria-labelledby="before-heading">
        <div className="mx-auto max-w-3xl">
          <InfoCard
            title={page.before.title}
            icon={page.icons.before}
            tone="highlight"
          >
            <p className="mb-3">{page.before.body}</p>
            <SiteLink
              href={page.before.link.href}
              className="font-semibold text-brand-primary-700 underline underline-offset-4 dark:text-brand-primary-300"
            >
              {page.before.link.label}
            </SiteLink>
          </InfoCard>
        </div>
      </Section>

      <CalloutBand
        title={page.callout.title}
        description={page.callout.description}
        primary={{ label: page.report.callCta, href: tel }}
        secondary={page.callout.secondary}
      />
    </>
  );
}
