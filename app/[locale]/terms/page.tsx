import { LegalBody } from "@/components/landing/legal";
import { PageHero } from "@/components/landing/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { localePath } from "@/lib/i18n/config";
import { resolveLocale, type LocaleParams } from "@/lib/i18n/page";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/structured-data";
import { routes } from "@/lib/site-config";

export async function generateMetadata({ params }: LocaleParams) {
  const { locale, t } = await resolveLocale(params);
  const meta = t.meta.terms;

  return pageMetadata({
    locale,
    title: meta.title,
    description: meta.description,
    path: routes.terms,
    keywords: meta.keywords,
    type: "article",
  });
}

export default async function TermsPage({ params }: LocaleParams) {
  const { locale, t } = await resolveLocale(params);
  const policy = t.legal.terms;
  const meta = t.meta.terms;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(locale, t.common.a11y.breadcrumbHome, [
            { name: policy.hero.breadcrumb, path: routes.terms },
          ]),
          webPageSchema({
            type: "WebPage",
            locale,
            name: meta.title,
            description: meta.description,
            path: routes.terms,
          }),
        ]}
      />
      <PageHero
        t={t}
        breadcrumb={policy.hero.breadcrumb}
        eyebrow={t.legal.lastUpdatedLabel(t.legal.lastUpdated)}
        title={policy.hero.title}
        description={policy.hero.description}
      />

      <LegalBody
        t={t}
        currentHref={t.common.routes.terms}
        englishHref={localePath("en", routes.terms)}
        summary={policy.summary}
        sections={policy.sections}
      />
    </>
  );
}
