import {
  Bell,
  CarFront,
  History,
  MapPinned,
  Search,
  Star,
  UserRound,
  Wallet,
} from "lucide-react";
import { FeatureGrid, InfoCard } from "@/components/landing/blocks";
import { FinalCta } from "@/components/landing/final-cta";
import { PageHero } from "@/components/landing/page-hero";
import { Section, SectionHeading } from "@/components/landing/section";
import { SiteLink } from "@/components/landing/site-link";
import { routes, siteConfig } from "@/lib/site-config";
import { JsonLd } from "@/components/seo/json-ld";
import { keywordGroups, pageMetadata } from "@/lib/seo";
import {
  breadcrumbSchema,
  mobileAppSchema,
} from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "Get the App",
  description:
    "Download the GariGhora passenger app to book rentals and return trips, or the driver app to take bookings and post your empty return legs.",
  path: routes.download,
  keywords: [...keywordGroups.brand, "GariGhora app", "car booking app Bangladesh"],
});

const passengerFeatures = [
  {
    icon: Search,
    title: "Search or request",
    body: "Look through return trips on your route, or post a ride request and let drivers come to you.",
  },
  {
    icon: Wallet,
    title: "See the fare first",
    body: "Compare offers side by side, counter once, and know the exact number before you accept.",
  },
  {
    icon: MapPinned,
    title: "Follow the trip",
    body: "Driver details, vehicle details, pickup point and basic location while the trip is running.",
  },
  {
    icon: History,
    title: "Your booking history",
    body: "Upcoming, active, completed and cancelled trips, with the fare and driver on every record.",
  },
];

const driverFeatures = [
  {
    icon: CarFront,
    title: "Your vehicles",
    body: "Add a vehicle, upload photos, keep its status current, and switch which one you are driving.",
  },
  {
    icon: Bell,
    title: "Requests as they land",
    body: "Ride requests matching your route, timing and vehicle arrive in the app for you to offer on.",
  },
  {
    icon: Star,
    title: "Trips and ratings",
    body: "Start, complete and review trips, and see what passengers are saying about your driving.",
  },
  {
    icon: UserRound,
    title: "Earnings and commission",
    body: "Fare, earnings and outstanding commission per trip, plus what you owe before you can take the next one.",
  },
];

export default function DownloadPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Get the App", path: routes.download }]),
          mobileAppSchema({
            name: "GariGhora - Passenger",
            description:
              "Book rental cars and discounted return trips with verified drivers across Bangladesh.",
            os: "Android, iOS",
          }),
          mobileAppSchema({
            name: "GariGhora - Driver",
            description:
              "Take rental bookings, post empty return legs, and manage trips, earnings and commission.",
            os: "Android, iOS",
          }),
        ]}
      />
      <PageHero
        breadcrumb="Get the App"
        eyebrow="Passenger app · Driver app"
        title="Two apps, one platform"
        description="Passengers book. Drivers earn. Both run on the same verified accounts, bookings and trips."
      />

      <Section aria-labelledby="passenger-app-heading">
        <SectionHeading
          id="passenger-app-heading"
          eyebrow="Passenger app"
          title="Book a car in a couple of taps"
          description="Built mobile-first, because that is how nearly everyone here travels and books."
        />
        <FeatureGrid className="mt-6" items={passengerFeatures} columns={4} />
      </Section>

      <Section tone="surface" aria-labelledby="driver-app-heading">
        <SectionHeading
          id="driver-app-heading"
          eyebrow="Driver app"
          title="Run your day from the driver seat"
          description="Availability, offers, bookings, trips, earnings and commission in one place."
        />
        <FeatureGrid className="mt-6" items={driverFeatures} columns={4} />

        <InfoCard className="mx-auto mt-5 max-w-3xl" title="Not launched yet?">
          <p>
            The store listings go live at launch. Until then, tell us which app
            you want and we will send the link the day it is available — write to{" "}
            <SiteLink
              href={`mailto:${siteConfig.supportEmail}`}
              className="font-medium text-brand-primary-700 underline underline-offset-4 dark:text-brand-primary-300"
            >
              {siteConfig.supportEmail}
            </SiteLink>{" "}
            or use the{" "}
            <SiteLink
              href={routes.contact}
              className="font-medium text-brand-primary-700 underline underline-offset-4 dark:text-brand-primary-300"
            >
              contact page
            </SiteLink>
            .
          </p>
        </InfoCard>
      </Section>

      <FinalCta />
    </>
  );
}
