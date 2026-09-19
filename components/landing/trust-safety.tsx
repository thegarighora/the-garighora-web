import {
  BadgeCheck,
  Headphones,
  MessagesSquare,
  PhoneCall,
  ShieldAlert,
  Star,
  Wallet,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section, SectionHeading } from "@/components/landing/section";
import { ArrowLink, SiteLink } from "@/components/landing/site-link";
import { routes, siteConfig } from "@/lib/site-config";

type TrustItem = {
  icon: LucideIcon;
  title: string;
  body: string;
  /** Highlighted card — the human operations layer is our real differentiator. */
  feature?: boolean;
};

const trustItems: TrustItem[] = [
  {
    icon: BadgeCheck,
    title: "Verified drivers and vehicles",
    body: "NID, driving licence and vehicle registration are checked before a driver can accept a single trip. Unverified accounts cannot take bookings.",
  },
  {
    icon: Wallet,
    title: "Pay only after the trip",
    body: "No prepayment, no deposit, no card details. You hand the agreed fare to the driver in cash once the trip is finished.",
  },
  {
    icon: MessagesSquare,
    title: "Fares agreed in the app",
    body: "Offers and counter-offers happen inside GariGhora and are capped at a couple of rounds. The fare you accept is the fare you pay — no bait-and-switch at the pickup point.",
  },
  {
    icon: PhoneCall,
    title: "A real person on every booking",
    body: "Your Gari Bhai — a GariGhora operations agent — is assigned to your booking, calls both you and the driver to confirm the details, and stays reachable until the trip is done.",
    feature: true,
  },
  {
    icon: Star,
    title: "Ratings on both sides",
    body: "Passengers rate drivers and drivers rate passengers after every completed trip. Only completed trips can be reviewed, so ratings mean something.",
  },
  {
    icon: ShieldAlert,
    title: "Support during the trip",
    body: "One tap from your active trip screen reaches support, plus a phone number for anything urgent on the road.",
  },
];

export function TrustSafety({
  moreLink = true,
}: { moreLink?: boolean } = {}) {
  return (
    <Section id="trust" aria-labelledby="trust-heading">
      <SectionHeading
        id="trust-heading"
        eyebrow="Why GariGhora"
        title="Built so both sides can trust the trip"
        description="Intercity travel in Bangladesh usually runs on phone calls and word of mouth. We keep the flexibility, and add verification, a recorded fare, and someone accountable on the other end of the line."
      />

      <ul className="mt-block grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {trustItems.map((item) => (
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
          Something wrong on the road? Call the support line —{" "}
          <SiteLink
            href={`tel:${siteConfig.supportPhone.replace(/\s|-/g, "")}`}
            className="font-semibold text-brand-primary-700 underline underline-offset-4 dark:text-brand-primary-300"
          >
            {siteConfig.supportPhone}
          </SiteLink>
          {" "}— and a Gari Bhai will pick it up.
        </p>
      </div>

      {moreLink ? (
        <div className="mt-4 flex justify-center">
          <ArrowLink href={routes.trustSafety}>
            How we keep trips safe
          </ArrowLink>
        </div>
      ) : null}
    </Section>
  );
}
