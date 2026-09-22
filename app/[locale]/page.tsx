import { Faq } from "@/components/landing/faq";
import { FinalCta } from "@/components/landing/final-cta";
import { ForDrivers } from "@/components/landing/for-drivers";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { ProblemInsight } from "@/components/landing/problem-insight";
import { StatsStrip } from "@/components/landing/stats-strip";
import { Testimonials } from "@/components/landing/testimonials";
import { TrustSafety } from "@/components/landing/trust-safety";
import { TwoServices } from "@/components/landing/two-services";
import { resolveLocale, type LocaleParams } from "@/lib/i18n/page";

/**
 * Home page — the overview. Each section states its case briefly and then hands
 * off to a dedicated page for the detail.
 *
 * Section order is deliberate: the empty-return-leg insight comes before the
 * product, so Return Car reads as an obvious idea rather than a feature list.
 * All colours and gradients come from app/theme.css — see that file to rebrand.
 */
export default async function Home({ params }: LocaleParams) {
  const { t } = await resolveLocale(params);

  return (
    <>
      <Hero t={t} />
      <ProblemInsight t={t} />
      <TwoServices t={t} />
      <HowItWorks t={t} />
      <TrustSafety t={t} />
      <ForDrivers t={t} />
      <StatsStrip t={t} />
      <Testimonials t={t} />
      <Faq t={t} />
      <FinalCta t={t} />
    </>
  );
}
