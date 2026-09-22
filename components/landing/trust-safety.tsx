import { Headphones } from "lucide-react";
import { Section, SectionHeading } from "@/components/landing/section";
import { ArrowLink, SiteLink } from "@/components/landing/site-link";
import type { Content } from "@/lib/i18n";
import { localeDigits } from "@/lib/i18n/numerals";
import { siteConfig } from "@/lib/site-config";

export function TrustSafety({
  t,
  moreLink = true,
}: {
  t: Content;
  moreLink?: boolean;
}) {
  const trust = t.home.trust;

  return (
    <Section id="trust" aria-labelledby="trust-heading">
      <SectionHeading
        id="trust-heading"
        eyebrow={trust.eyebrow}
        title={trust.title}
        description={trust.description}
      />

      <ul className="mt-block grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {trust.items.map((item) => (
          <li
            key={item.title}
            className={
              item.feature
                ? "flex flex-col gap-3 rounded-2xl border border-brand-secondary-300 bg-gradient-card p-6 shadow-brand"
                : "flex flex-col gap-3 rounded-2xl border border-brand-hairline bg-brand-surface-raised p-6 shadow-brand-sm"
            }
          >
            <span
              className={
                item.feature
                  ? "grid size-11 place-items-center rounded-2xl bg-gradient-cta text-brand-on-brand shadow-brand-sm"
                  : "grid size-11 place-items-center rounded-2xl bg-brand-primary-50 text-brand-primary-700 dark:bg-brand-surface dark:text-brand-primary-300"
              }
            >
              <item.icon aria-hidden="true" className="size-5" />
            </span>
            <h3 className="text-base font-semibold tracking-tight text-brand-ink">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-brand-ink-muted">
              {item.body}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-col items-center gap-3 rounded-2xl border border-brand-hairline bg-brand-surface px-6 py-5 text-center sm:flex-row sm:justify-center sm:gap-4 sm:text-left dark:bg-brand-surface-raised">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-success-100 text-brand-success-700">
          <Headphones aria-hidden="true" className="size-5" />
        </span>
        <p className="text-sm leading-relaxed text-brand-ink-muted">
          {trust.hotline.before}
          <SiteLink
            href={`tel:${siteConfig.supportPhone.replace(/\s|-/g, "")}`}
            className="font-semibold text-brand-primary-700 underline underline-offset-4 dark:text-brand-primary-300"
          >
            {localeDigits(t.locale, siteConfig.supportPhone)}
          </SiteLink>
          {trust.hotline.after}
        </p>
      </div>

      {moreLink ? (
        <div className="mt-4 flex justify-center">
          <ArrowLink href={trust.moreLink.href}>
            {trust.moreLink.label}
          </ArrowLink>
        </div>
      ) : null}
    </Section>
  );
}
