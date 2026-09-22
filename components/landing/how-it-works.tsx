import type { LucideIcon } from "lucide-react";
import { Section, SectionHeading } from "@/components/landing/section";
import { ArrowLink } from "@/components/landing/site-link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Content } from "@/lib/i18n";
import { localeDigits } from "@/lib/i18n/numerals";
import type { Locale } from "@/lib/i18n/config";

/**
 * Stepper, tabbed by audience. Uses the shadcn Tabs primitive, so arrow-key
 * navigation between tabs and focus management come for free.
 */

type Step = { icon: LucideIcon; title: string; body: string };

export function HowItWorks({
  t,
  moreLink = true,
}: {
  t: Content;
  moreLink?: boolean;
}) {
  const section = t.home.howItWorks;

  return (
    <Section id="how-it-works" tone="surface" aria-labelledby="how-heading">
      <SectionHeading
        id="how-heading"
        eyebrow={section.eyebrow}
        title={section.title}
        description={section.description}
      />

      <Tabs defaultValue="passengers" className="mt-block gap-6">
        <TabsList className="mx-auto h-auto w-full max-w-md rounded-xl p-1 sm:h-10">
          <TabsTrigger value="passengers" className="h-9 rounded-lg">
            {section.passengerTab}
          </TabsTrigger>
          <TabsTrigger value="drivers" className="h-9 rounded-lg">
            {section.driverTab}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="passengers">
          <Stepper
            steps={section.passengerSteps}
            stepLabel={section.stepLabel}
            locale={t.locale}
          />
        </TabsContent>
        <TabsContent value="drivers">
          <Stepper
            steps={section.driverSteps}
            stepLabel={section.stepLabel}
            locale={t.locale}
          />
        </TabsContent>
      </Tabs>

      {moreLink ? (
        <div className="mt-4 flex justify-center">
          <ArrowLink href={section.moreLink.href}>
            {section.moreLink.label}
          </ArrowLink>
        </div>
      ) : null}
    </Section>
  );
}

function Stepper({
  steps,
  stepLabel,
  locale,
}: {
  steps: Step[];
  stepLabel: (n: string) => string;
  locale: Locale;
}) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="relative flex flex-col gap-3 rounded-2xl border border-brand-hairline bg-brand-surface-raised p-5 shadow-brand-sm"
        >
          {/* Connector between steps on wide screens. */}
          {index < steps.length - 1 ? (
            <span
              aria-hidden="true"
              className="road-dashes absolute top-9 -right-3 hidden h-px w-6 text-brand-primary-300 lg:block"
            />
          ) : null}

          <div className="flex items-center justify-between gap-2">
            <span className="grid size-10 place-items-center rounded-xl bg-gradient-cta text-brand-on-brand shadow-brand-sm">
              <step.icon aria-hidden="true" className="size-5" />
            </span>
            <span className="text-sm font-semibold text-brand-ink-muted">
              {stepLabel(localeDigits(locale, String(index + 1)))}
            </span>
          </div>
          <h3 className="text-base font-semibold tracking-tight text-brand-ink">
            {step.title}
          </h3>
          <p className="text-sm leading-relaxed text-brand-ink-muted">
            {step.body}
          </p>
        </li>
      ))}
    </ol>
  );
}
