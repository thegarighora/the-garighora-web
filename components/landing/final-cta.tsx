import type { ReactNode } from "react";
import { Apple, Globe, Play, Smartphone } from "lucide-react";
import { CtaLink } from "@/components/landing/cta-link";
import { links } from "@/lib/site-config";

/**
 * Download band. Store badges are link placeholders styled in-house rather than
 * official badge artwork.
 * TODO: swap for the official App Store / Google Play badge assets and real
 * listing URLs once the apps are published.
 */
export function FinalCta() {
  return (
    <section
      id="download"
      aria-labelledby="download-heading"
      className="relative isolate scroll-mt-20 overflow-hidden bg-gradient-hero py-section text-brand-on-brand"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-20 size-96 bg-gradient-glow opacity-40 blur-2xl"
      />

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-5 text-center sm:px-6 lg:px-8">
        <div className="flex max-w-2xl flex-col gap-4">
          <h2
            id="download-heading"
            className="text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl"
          >
            Get the app and take the ride that is already going
          </h2>
          <p className="text-base leading-relaxed text-pretty text-brand-on-brand/85 sm:text-lg">
            One app for passengers, one for drivers. Book a rental, catch a
            return trip, or start earning on the leg you were driving anyway.
          </p>
        </div>

        <div className="flex w-full flex-col items-stretch gap-6 sm:w-auto">
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <StoreBadge
              href={links.appStore}
              icon={<Apple aria-hidden="true" />}
              kicker="Download on the"
              store="App Store"
            />
            <StoreBadge
              href={links.playStore}
              icon={<Play aria-hidden="true" />}
              kicker="Get it on"
              store="Google Play"
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <CtaLink href={links.driverSignup} tone="onDark">
              <Smartphone aria-hidden="true" />
              Become a Driver
            </CtaLink>
            <CtaLink href={links.webBooking} tone="ghostOnDark">
              <Globe aria-hidden="true" />
              Book from the web instead
            </CtaLink>
          </div>
        </div>

        <p className="max-w-xl text-xs leading-relaxed text-brand-on-brand/65">
          Store links are placeholders while the apps go through review. Payment
          is always collected after the trip is completed — GariGhora never asks
          you to pay in advance.
        </p>
      </div>
    </section>
  );
}

function StoreBadge({
  href,
  icon,
  kicker,
  store,
}: {
  href: string;
  icon: ReactNode;
  kicker: string;
  store: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex h-14 items-center justify-center gap-3 rounded-xl border border-brand-on-brand/30 bg-brand-on-brand/10 px-5 text-left backdrop-blur-sm transition-colors outline-none focus-visible:ring-3 focus-visible:ring-brand-on-brand/60 hover:bg-brand-on-brand/20 [&_svg]:size-6 [&_svg]:shrink-0"
    >
      {icon}
      <span className="flex flex-col leading-tight">
        <span className="text-[0.65rem] tracking-wide text-brand-on-brand/75 uppercase">
          {kicker}
        </span>
        <span className="text-base font-semibold">{store}</span>
      </span>
    </a>
  );
}
