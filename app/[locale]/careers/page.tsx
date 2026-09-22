import { Mail } from "lucide-react";
import {
  CalloutBand,
  FeatureGrid,
  InfoCard,
} from "@/components/landing/blocks";
import { CtaLink } from "@/components/landing/cta-link";
import { PageHero } from "@/components/landing/page-hero";
import { Section, SectionHeading } from "@/components/landing/section";
import { SiteLink } from "@/components/landing/site-link";
import { JsonLd } from "@/components/seo/json-ld";
import { resolveLocale, type LocaleParams } from "@/lib/i18n/page";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/structured-data";
import { routes, siteConfig } from "@/lib/site-config";

export async function generateMetadata({ params }: LocaleParams) {
  const { locale, t } = await resolveLocale(params);
  const meta = t.meta.careers;

  return pageMetadata({
    locale,
    title: meta.title,
    description: meta.description,
    path: routes.careers,
    keywords: meta.keywords,
  });
}

export default async function CareersPage({ params }: LocaleParams) {
  const { locale, t } = await resolveLocale(params);
  const page = t.pages.careers;
  const meta = t.meta.careers;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(locale, t.common.a11y.breadcrumbHome, [
            { name: page.hero.breadcrumb, path: routes.careers },
          ]),
          // Deliberately no JobPosting markup: the listings are placeholders,
          // and marking up roles that are not genuinely open invites a manual
          // action.
          webPageSchema({
            type: "CollectionPage",
            locale,
            name: meta.schemaName,
            description: meta.schemaDescription,
            path: routes.careers,
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
        <CtaLink href={`mailto:${siteConfig.careersEmail}`} tone="onDark">
          <Mail aria-hidden="true" />
          {page.hero.cta}
        </CtaLink>
      </PageHero>

      <Section aria-labelledby="why-join-heading">
        <SectionHeading
          id="why-join-heading"
          eyebrow={page.why.eyebrow}
          title={page.why.title}
        />
        <FeatureGrid className="mt-6" items={page.why.items} columns={4} />
      </Section>

      <Section tone="surface" aria-labelledby="roles-heading">
        <SectionHeading
          id="roles-heading"
          eyebrow={page.roles.eyebrow}
          title={page.roles.title}
          description={page.roles.description}
        />

        <ul className="mx-auto mt-6 flex max-w-4xl flex-col gap-4">
          {page.roles.items.map((role) => (
            <li
              key={role.title}
              className="flex flex-col gap-4 rounded-2xl border border-brand-hairline bg-brand-surface-raised p-6 shadow-brand-sm sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-primary-50 text-brand-primary-700 dark:bg-brand-surface dark:text-brand-primary-300">
                  <role.icon aria-hidden="true" className="size-5" />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base font-semibold tracking-tight text-brand-ink sm:text-lg">
                    {role.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-brand-ink-muted">
                    {role.body}
                  </p>
                  <ul className="mt-1 flex flex-wrap gap-2">
                    {[role.team, role.location, role.type].map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-brand-surface px-2.5 py-0.5 text-xs font-medium text-brand-ink-muted ring-1 ring-brand-hairline dark:bg-brand-surface"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <CtaLink
                href={`mailto:${siteConfig.careersEmail}?subject=${encodeURIComponent(
                  page.roles.applySubject(role.title)
                )}`}
                tone="outline"
                size="sm"
                className="sm:w-auto"
              >
                {page.roles.applyLabel}
              </CtaLink>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-center text-xs text-brand-ink-muted">
          {page.roles.footnote}
        </p>
      </Section>

      <Section aria-labelledby="apply-heading">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            id="apply-heading"
            eyebrow={page.apply.eyebrow}
            title={page.apply.title}
            description={page.apply.description}
          />
          <InfoCard
            className="mt-5"
            title={page.apply.cardTitle}
            icon={page.icons.apply}
          >
            <ul className="flex list-disc flex-col gap-2 pl-5 marker:text-brand-primary-400">
              {page.apply.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="mt-4">
              {page.apply.sendBefore}
              <SiteLink
                href={`mailto:${siteConfig.careersEmail}`}
                className="font-medium text-brand-primary-700 underline underline-offset-4 dark:text-brand-primary-300"
              >
                {siteConfig.careersEmail}
              </SiteLink>
              {page.apply.sendAfter}
            </p>
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
