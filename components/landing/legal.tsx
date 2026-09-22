import type { ReactNode } from "react";
import { FileText, Info, Languages } from "lucide-react";
import { cn } from "cn";
import { SiteLink } from "@/components/landing/site-link";
import type { Content } from "@/lib/i18n";
import { localeDigits } from "@/lib/i18n/numerals";
import { siteConfig } from "@/lib/site-config";

/**
 * Shared furniture for the long-form policy pages (Terms, Privacy,
 * Cancellation, Driver Agreement).
 *
 * `@tailwindcss/typography` is not installed, so `Prose` styles descendants
 * directly — using brand tokens only, like every other component.
 */
export function Prose({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "text-sm leading-relaxed text-brand-ink-muted sm:text-base",
        "[&_h3]:mt-4 [&_h3]:mb-2 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-brand-ink sm:[&_h3]:text-lg",
        "[&_p]:mb-4 [&_p:last-child]:mb-0",
        "[&_ul]:mb-4 [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5",
        "[&_ol]:mb-4 [&_ol]:flex [&_ol]:list-decimal [&_ol]:flex-col [&_ol]:gap-2 [&_ol]:pl-5",
        "[&_li::marker]:text-brand-primary-400",
        "[&_strong]:font-semibold [&_strong]:text-brand-ink",
        "[&_a]:font-medium [&_a]:text-brand-primary-700 [&_a]:underline [&_a]:underline-offset-4 dark:[&_a]:text-brand-primary-300",
        className
      )}
    >
      {children}
    </div>
  );
}

export type LegalSection = {
  id: string;
  heading: string;
  content: ReactNode;
};

/**
 * Policy page body: a plain-language summary, a sticky contents list on wide
 * screens, the numbered sections, and cross-links to the other policies.
 */
export function LegalBody({
  t,
  summary,
  sections,
  currentHref,
  englishHref,
}: {
  t: Content;
  /** One short paragraph in plain words, above the formal text. */
  summary: ReactNode;
  sections: LegalSection[];
  /** This page's href in the current locale, so it is filtered out below. */
  currentHref: string;
  /** This page in English — the authoritative text for a translated policy. */
  englishHref: string;
}) {
  const { chrome } = t.legal;
  const num = (index: number) => localeDigits(t.locale, String(index + 1));

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-section sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[16rem_1fr] lg:gap-14">
        <nav
          aria-label={t.common.a11y.onThisPage}
          className="lg:sticky lg:top-24 lg:self-start"
        >
          <h2 className="text-xs font-semibold tracking-[0.16em] text-brand-ink-muted uppercase">
            {t.common.a11y.onThisPage}
          </h2>
          <ol className="mt-3 flex flex-col gap-1">
            {sections.map((section, index) => (
              <li key={section.id}>
                <SiteLink
                  href={`#${section.id}`}
                  className="flex gap-2 rounded-lg px-2 py-1.5 text-sm text-brand-ink-muted hover:bg-brand-primary-50 hover:text-brand-primary-800 dark:hover:bg-brand-surface dark:hover:text-brand-ink"
                >
                  <span className="tabular-nums opacity-60">{num(index)}.</span>
                  {section.heading}
                </SiteLink>
              </li>
            ))}
          </ol>
        </nav>

        <div className="min-w-0">
          <div className="flex items-start gap-3 rounded-2xl border border-brand-primary-200 bg-brand-primary-50 p-5 dark:border-brand-hairline dark:bg-brand-surface">
            <Info
              aria-hidden="true"
              className="mt-0.5 size-5 shrink-0 text-brand-primary-700 dark:text-brand-primary-300"
            />
            <div className="text-sm leading-relaxed text-brand-primary-900 dark:text-brand-ink">
              <span className="font-semibold">{chrome.inShort}</span>
              {summary}
            </div>
          </div>

          <div className="mt-block flex flex-col gap-5">
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={`${section.id}-heading`}
                className="scroll-mt-24"
              >
                <h2
                  id={`${section.id}-heading`}
                  className="mb-3 text-xl font-semibold tracking-tight text-brand-ink sm:text-2xl"
                >
                  <span className="mr-2 text-brand-primary-400 tabular-nums">
                    {num(index)}.
                  </span>
                  {section.heading}
                </h2>
                <Prose>{section.content}</Prose>
              </section>
            ))}
          </div>

          {/* --------------------------------------------------------------
           * A translated policy is a reading aid, not a second contract: the
           * English text governs, and this says so rather than leaving a
           * discrepancy to be argued about later.
           * ------------------------------------------------------------ */}
          {chrome.authoritativeLanguage ? (
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-brand-hairline bg-brand-surface p-5 dark:bg-brand-surface-raised">
              <Languages
                aria-hidden="true"
                className="mt-0.5 size-5 shrink-0 text-brand-ink-muted"
              />
              <p className="text-sm leading-relaxed text-brand-ink-muted">
                {chrome.authoritativeLanguage.text}{" "}
                <SiteLink
                  href={englishHref}
                  hrefLang="en"
                  className="font-medium text-brand-primary-700 underline underline-offset-4 dark:text-brand-primary-300"
                >
                  {chrome.authoritativeLanguage.linkLabel}
                </SiteLink>
              </p>
            </div>
          ) : null}

          {/* --------------------------------------------------------------
           * TODO: these policies are working drafts written to describe how
           * the MVP actually operates. Have counsel review and adjust them
           * (and remove this notice) before launch.
           * ------------------------------------------------------------ */}
          <div className="mt-4 flex items-start gap-3 rounded-2xl border border-brand-hairline bg-brand-surface p-5 dark:bg-brand-surface-raised">
            <FileText
              aria-hidden="true"
              className="mt-0.5 size-5 shrink-0 text-brand-ink-muted"
            />
            <p className="text-sm leading-relaxed text-brand-ink-muted">
              {chrome.draftNotice.before}
              <SiteLink
                href={`mailto:${siteConfig.supportEmail}`}
                className="font-medium text-brand-primary-700 underline underline-offset-4 dark:text-brand-primary-300"
              >
                {siteConfig.supportEmail}
              </SiteLink>
              {chrome.draftNotice.after}
            </p>
          </div>

          <div className="mt-4 border-t border-brand-hairline pt-3">
            <h2 className="text-xs font-semibold tracking-[0.16em] text-brand-ink-muted uppercase">
              {chrome.otherPolicies}
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {t.common.legalPages
                .filter((page) => page.href !== currentHref)
                .map((page) => (
                  <li key={page.href}>
                    <SiteLink
                      href={page.href}
                      className="inline-flex items-center rounded-lg border border-brand-hairline bg-brand-surface-raised px-3 py-1.5 text-sm font-medium text-brand-ink-muted hover:text-brand-primary-700 dark:hover:text-brand-primary-300"
                    >
                      {page.label}
                    </SiteLink>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
