import {
  CalloutBand,
  FeatureGrid,
  InfoCard,
} from "@/components/landing/blocks";
import { PageHero } from "@/components/landing/page-hero";
import { ProblemInsight } from "@/components/landing/problem-insight";
import { Section, SectionHeading } from "@/components/landing/section";
import { ArrowLink } from "@/components/landing/site-link";
import { StatsStrip } from "@/components/landing/stats-strip";
import { JsonLd } from "@/components/seo/json-ld";
import { resolveLocale, type LocaleParams } from "@/lib/i18n/page";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/structured-data";
import { routes } from "@/lib/site-config";

export async function generateMetadata({ params }: LocaleParams) {
  const { locale, t } = await resolveLocale(params);
  const meta = t.meta.about;

  return pageMetadata({
    locale,
    title: meta.title,
    description: meta.description,
    path: routes.about,
    keywords: meta.keywords,
  });
}

export default async function AboutPage({ params }: LocaleParams) {
  const { locale, t } = await resolveLocale(params);
  const page = t.pages.about;
  const meta = t.meta.about;
  const story = page.story;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(locale, t.common.a11y.breadcrumbHome, [
            { name: page.hero.breadcrumb, path: routes.about },
          ]),
          webPageSchema({
            type: "AboutPage",
            locale,
            name: meta.schemaName,
            description: meta.schemaDescription,
            path: routes.about,
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

      <Section aria-labelledby="story-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionHeading
              id="story-heading"
              align="left"
              eyebrow={story.eyebrow}
              title={story.title}
            />
            <div className="flex flex-col gap-4 text-sm leading-relaxed text-brand-ink-muted sm:text-base">
              {story.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>
                <strong className="font-semibold text-brand-ink">
                  {story.emphasis}
                </strong>
                {story.afterEmphasis}
              </p>
              <p>{story.closing}</p>
            </div>
            <div>
              <ArrowLink href={story.link.href}>{story.link.label}</ArrowLink>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <InfoCard title={story.building.title} tone="highlight">
              <p>{story.building.body}</p>
            </InfoCard>
            <InfoCard title={story.notBuilding.title}>
              <p className="mb-3">{story.notBuilding.first}</p>
              <p>{story.notBuilding.second}</p>
            </InfoCard>
          </div>
        </div>
      </Section>

      <ProblemInsight t={t} moreLink={false} />

      <Section aria-labelledby="principles-heading">
        <SectionHeading
          id="principles-heading"
          eyebrow={page.principles.eyebrow}
          title={page.principles.title}
        />
        <FeatureGrid className="mt-6" items={page.principles.items} />
      </Section>

      <StatsStrip t={t} />

      <Section tone="surface" aria-labelledby="where-heading">
        <SectionHeading
          id="where-heading"
          eyebrow={page.where.eyebrow}
          title={page.where.title}
          description={page.where.description}
        />
        <div className="mt-4 flex justify-center">
          <ArrowLink href={page.where.link.href}>
            {page.where.link.label}
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
