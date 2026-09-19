import { Mail, Phone } from "lucide-react";
import { CalloutBand } from "@/components/landing/blocks";
import { FaqAccordion } from "@/components/landing/faq";
import { PageHero } from "@/components/landing/page-hero";
import { Section } from "@/components/landing/section";
import { SiteLink } from "@/components/landing/site-link";
import { allFaqs, faqGroups } from "@/lib/faq-data";
import { links, routes, siteConfig } from "@/lib/site-config";
import { JsonLd } from "@/components/seo/json-ld";
import { keywordGroups, pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "FAQ",
  description:
    "How Return Car is cheaper, when you pay, how drivers are verified, and everything else people ask before their first GariGhora booking.",
  path: routes.faq,
  keywords: [...keywordGroups.brand, ...keywordGroups.returnTrip],
});

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "FAQ", path: routes.faq }]),
          // FAQPage markup lives only here, on the page holding every question,
          // so the rich result points at the canonical answer set.
          faqSchema(allFaqs),
        ]}
      />
      <PageHero
        breadcrumb="FAQ"
        eyebrow="Questions"
        title="Everything people ask before their first trip"
        description="Grouped by topic. If your question is not here, the support line reaches a real person."
      />

      <Section aria-labelledby="faq-groups-heading">
        <h2 id="faq-groups-heading" className="sr-only">
          Frequently asked questions
        </h2>

        <div className="grid gap-10 lg:grid-cols-[15rem_1fr] lg:gap-14">
          <nav
            aria-label="FAQ topics"
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <h3 className="text-xs font-semibold tracking-[0.16em] text-brand-ink-muted uppercase">
              Topics
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2 lg:flex-col">
              {faqGroups.map((group) => (
                <li key={group.id}>
                  <SiteLink
                    href={`#${group.id}`}
                    className="inline-flex rounded-lg border border-brand-hairline px-3 py-1.5 text-sm text-brand-ink-muted hover:border-brand-primary-200 hover:text-brand-primary-800 lg:border-0 lg:px-2 dark:hover:text-brand-ink"
                  >
                    {group.heading}
                  </SiteLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex min-w-0 flex-col gap-12">
            {faqGroups.map((group) => (
              <section
                key={group.id}
                id={group.id}
                aria-labelledby={`${group.id}-heading`}
                className="scroll-mt-24"
              >
                <h3
                  id={`${group.id}-heading`}
                  className="text-xl font-semibold tracking-tight text-brand-ink sm:text-2xl"
                >
                  {group.heading}
                </h3>
                <p className="mt-1 text-sm text-brand-ink-muted sm:text-base">
                  {group.description}
                </p>
                <div className="mt-5 rounded-3xl border border-brand-hairline bg-brand-surface-raised px-5 py-2 shadow-brand-sm sm:px-7">
                  <FaqAccordion items={group.items} />
                </div>
              </section>
            ))}

            <div className="flex flex-col gap-3 rounded-2xl border border-brand-hairline bg-brand-surface p-6 sm:flex-row sm:items-center sm:justify-between dark:bg-brand-surface-raised">
              <p className="text-sm leading-relaxed text-brand-ink-muted">
                <span className="font-semibold text-brand-ink">
                  Not covered here?
                </span>{" "}
                Reach the support team directly.
              </p>
              <div className="flex flex-wrap gap-4">
                <SiteLink
                  href={`tel:${siteConfig.supportPhone.replace(/\s|-/g, "")}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary-700 dark:text-brand-primary-300"
                >
                  <Phone aria-hidden="true" className="size-4" />
                  {siteConfig.supportPhone}
                </SiteLink>
                <SiteLink
                  href={`mailto:${siteConfig.supportEmail}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary-700 dark:text-brand-primary-300"
                >
                  <Mail aria-hidden="true" className="size-4" />
                  {siteConfig.supportEmail}
                </SiteLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CalloutBand
        title="Ready to try it?"
        description="Book a rental, or see what return trips are already heading your way."
        primary={{ label: "Get the App", href: links.appStore }}
        secondary={{ label: "Contact support", href: routes.contact }}
      />
    </>
  );
}
