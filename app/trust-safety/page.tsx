import {
  AlertTriangle,
  BadgeCheck,
  Eye,
  FileLock2,
  LifeBuoy,
  Lock,
  PhoneCall,
  Scale,
  ShieldCheck,
} from "lucide-react";
import {
  CalloutBand,
  FeatureGrid,
  InfoCard,
  NumberedList,
} from "@/components/landing/blocks";
import { PageHero } from "@/components/landing/page-hero";
import { Section, SectionHeading } from "@/components/landing/section";
import { ArrowLink, SiteLink } from "@/components/landing/site-link";
import { TrustSafety } from "@/components/landing/trust-safety";
import { links, routes, siteConfig } from "@/lib/site-config";
import { JsonLd } from "@/components/seo/json-ld";
import { keywordGroups, pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "Trust & Safety",
  description:
    "How GariGhora verifies drivers and vehicles, keeps fares honest, assigns a human Gari Bhai to every booking, and handles problems on the road.",
  path: routes.trustSafety,
  keywords: [...keywordGroups.brand, "verified drivers Bangladesh", "safe car rental Dhaka"],
});

const verification = [
  {
    title: "Identity",
    body: "Every driver submits their NID at registration. An account with unverified identity cannot accept a single booking.",
  },
  {
    title: "Licence",
    body: "A valid driving licence is checked against the driver's identity before the account is opened for trips.",
  },
  {
    title: "Vehicle",
    body: "Registration papers are checked against the vehicle added to the profile, including type, model and seating.",
  },
  {
    title: "Ongoing standing",
    body: "Ratings, cancellations and reported problems all attach to the account. Repeated issues cost a driver access to bookings.",
  },
];

const duringTrip = [
  {
    icon: PhoneCall,
    title: "A Gari Bhai on the booking",
    body: "An operations agent is assigned to your booking, calls both sides to confirm pickup details, and monitors the trip while it runs.",
    feature: true,
  },
  {
    icon: Eye,
    title: "Trip visibility",
    body: "You can see the driver, the vehicle, the pickup point, the destination and basic driver location while the trip is active.",
  },
  {
    icon: LifeBuoy,
    title: "Support in one tap",
    body: "In-app support from the active trip screen, plus a phone number for anything that cannot wait for a message.",
  },
  {
    icon: AlertTriangle,
    title: "Problems get recorded",
    body: "Issues raised during a trip are logged against the booking, not settled informally, so there is a record if it happens again.",
  },
];

const fairness = [
  {
    icon: Scale,
    title: "The fare is fixed when you accept",
    body: "Offers and counters happen in the app and stop after a couple of rounds. The number you agreed is the number you pay.",
  },
  {
    icon: BadgeCheck,
    title: "Ratings work both ways",
    body: "Passengers rate drivers and drivers rate passengers, once each, and only after a trip is actually completed.",
  },
  {
    icon: ShieldCheck,
    title: "No money up front",
    body: "There is no deposit and no in-app payment, so a cancelled booking never leaves you chasing a refund.",
  },
  {
    icon: Lock,
    title: "Backend enforces the rules",
    body: "Booking states, offer acceptance and driver eligibility are enforced on the server, not by the app on someone's phone.",
  },
];

export default function TrustSafetyPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Trust & Safety", path: routes.trustSafety }]),
          webPageSchema({
            type: "WebPage",
            name: "Trust & Safety at GariGhora",
            description:
              "How GariGhora verifies drivers and vehicles, keeps fares honest, and supports every booking with a human operations agent.",
            path: routes.trustSafety,
          }),
        ]}
      />
      <PageHero
        breadcrumb="Trust & Safety"
        eyebrow="Trust & Safety"
        title="Getting into a stranger's car should not feel like a gamble"
        description="Verification before the first trip, a fare agreed in writing, a real person watching every booking, and a number to call when something goes wrong."
      />

      <Section aria-labelledby="verification-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            <SectionHeading
              id="verification-heading"
              align="left"
              eyebrow="Before the first trip"
              title="What we check, and when"
              description="Verification happens once, at registration, and it gates everything a driver can do afterwards."
            />
            <NumberedList steps={verification} />
          </div>

          <div className="flex flex-col gap-5 lg:pt-4">
            <InfoCard title="What passengers do not need" tone="highlight">
              <p>
                Opening a passenger account takes a phone number and a name. NID
                is not required to sign up or to make a normal booking — we ask
                drivers for documents because they are the ones carrying people.
              </p>
            </InfoCard>
            <InfoCard title="What we do with documents" icon={FileLock2}>
              <p className="mb-3">
                Identity documents are used to verify an account and are not
                shown to passengers. What a passenger sees is the driver&apos;s
                name, photo, vehicle and rating.
              </p>
              <ArrowLink href={routes.privacy}>
                Read the Privacy Policy
              </ArrowLink>
            </InfoCard>
          </div>
        </div>
      </Section>

      <Section tone="surface" aria-labelledby="during-heading">
        <SectionHeading
          id="during-heading"
          eyebrow="While you travel"
          title="Nobody is left on their own mid-trip"
        />
        <FeatureGrid className="mt-6" items={duringTrip} columns={4} />
      </Section>

      <Section aria-labelledby="fairness-heading">
        <SectionHeading
          id="fairness-heading"
          eyebrow="Fair dealing"
          title="The rules are the same for everyone"
        />
        <FeatureGrid className="mt-6" items={fairness} columns={4} />
      </Section>

      <TrustSafety moreLink={false} />

      <Section tone="surface" aria-labelledby="report-heading">
        <SectionHeading
          id="report-heading"
          eyebrow="If something goes wrong"
          title="Tell us, and tell us early"
          description="A trip that felt unsafe, a driver who asked for more than the agreed fare, a booking that never showed up — all of it should come to us rather than being sorted out at the roadside."
        />
        <div className="mx-auto mt-5 max-w-3xl">
          <InfoCard title="How to reach us fast" icon={PhoneCall}>
            <ul className="flex flex-col gap-2">
              <li>
                <strong>During a trip:</strong> use the support button on the
                active trip screen, or call{" "}
                <SiteLink
                  href={`tel:${siteConfig.supportPhone.replace(/\s|-/g, "")}`}
                  className="font-medium text-brand-primary-700 underline underline-offset-4 dark:text-brand-primary-300"
                >
                  {siteConfig.supportPhone}
                </SiteLink>
                .
              </li>
              <li>
                <strong>After a trip:</strong> report it from the booking in your
                history, so the trip record is attached automatically.
              </li>
              <li>
                <strong>Anything else:</strong> the{" "}
                <SiteLink
                  href={routes.contact}
                  className="font-medium text-brand-primary-700 underline underline-offset-4 dark:text-brand-primary-300"
                >
                  contact page
                </SiteLink>
                , or{" "}
                <SiteLink
                  href={`mailto:${siteConfig.supportEmail}`}
                  className="font-medium text-brand-primary-700 underline underline-offset-4 dark:text-brand-primary-300"
                >
                  {siteConfig.supportEmail}
                </SiteLink>
                .
              </li>
            </ul>
            <p className="mt-4">
              In an emergency, call the emergency services first. Then call us so
              we can act on the booking.
            </p>
          </InfoCard>
        </div>
      </Section>

      <CalloutBand
        title="Travel with someone accountable"
        description="Verified drivers, an agreed fare, and a Gari Bhai who knows your booking by name."
        primary={{ label: "Get the App", href: links.appStore }}
        secondary={{ label: "Read the FAQ", href: routes.faq }}
      />
    </>
  );
}
