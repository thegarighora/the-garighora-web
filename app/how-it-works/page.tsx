import {
  BadgeCheck,
  Headphones,
  MessageSquareQuote,
  PhoneCall,
  Star,
  Wallet,
} from "lucide-react";
import { CalloutBand, FeatureGrid, InfoCard } from "@/components/landing/blocks";
import { CtaLink } from "@/components/landing/cta-link";
import { HowItWorks } from "@/components/landing/how-it-works";
import { PageHero } from "@/components/landing/page-hero";
import { ProblemInsight } from "@/components/landing/problem-insight";
import { Section, SectionHeading } from "@/components/landing/section";
import { ArrowLink } from "@/components/landing/site-link";
import { links, routes } from "@/lib/site-config";
import { JsonLd } from "@/components/seo/json-ld";
import { keywordGroups, pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "How it works",
  description:
    "From posting a trip to paying the driver: how a GariGhora booking runs, for passengers and for drivers.",
  path: routes.howItWorks,
  keywords: [...keywordGroups.brand, ...keywordGroups.rental, ...keywordGroups.returnTrip],
});

const lifecycle = [
  {
    icon: MessageSquareQuote,
    title: "Offer",
    body: "A driver proposes a fare for your trip, or you request a fare on a return trip they posted. Counters are capped at a couple of rounds.",
  },
  {
    icon: BadgeCheck,
    title: "Booking",
    body: "Accepting an offer creates the booking and locks the fare. Only one accepted offer can exist per trip — the backend enforces it.",
  },
  {
    icon: PhoneCall,
    title: "Confirmation",
    body: "A Gari Bhai is assigned, calls both sides, confirms the pickup point and time, and notes anything the driver needs to know.",
  },
  {
    icon: Headphones,
    title: "The trip",
    body: "The driver starts the trip in the app. You can see basic location and reach support in one tap while it runs.",
  },
  {
    icon: Wallet,
    title: "Payment",
    body: "The trip is completed in the app and you hand over the agreed fare in cash. The platform commission is billed to the driver, not added to your fare.",
  },
  {
    icon: Star,
    title: "Ratings",
    body: "Both sides rate each other once. Only completed trips can be reviewed, so a rating always refers to a real journey.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "How it works", path: routes.howItWorks }]),
          webPageSchema({
            type: "WebPage",
            name: "How GariGhora works",
            description:
              "From posting a trip to paying the driver: how a GariGhora booking runs, for passengers and for drivers.",
            path: routes.howItWorks,
          }),
        ]}
      />
      <PageHero
        breadcrumb="How it works"
        eyebrow="End to end"
        title="How a GariGhora trip actually runs"
        description="The same booking, seen from both ends — and what happens between accepting an offer and handing over the fare."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <CtaLink href={links.passengerSignup} tone="onDark">
            Book a Ride
          </CtaLink>
          <CtaLink href={links.driverSignup} tone="ghostOnDark">
            Drive with us
          </CtaLink>
        </div>
      </PageHero>

      <HowItWorks moreLink={false} />

      <Section aria-labelledby="lifecycle-heading">
        <SectionHeading
          id="lifecycle-heading"
          eyebrow="Behind the booking"
          title="What the platform does at each stage"
          description="Every step below is recorded, which is what makes a cash-settled trip auditable for both sides."
        />
        <FeatureGrid className="mt-6" items={lifecycle} />
      </Section>

      <Section tone="surface" aria-labelledby="choose-heading">
        <SectionHeading
          id="choose-heading"
          eyebrow="Choosing a service"
          title="Rental Car or Return Car?"
          description="Both use the same account, the same verified drivers and the same full-vehicle booking. The difference is whose journey it started as."
        />

        <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <InfoCard title="Pick Rental Car when…">
            <ul className="flex list-disc flex-col gap-2 pl-5 marker:text-brand-primary-400">
              <li>You have a fixed date and time that has to work.</li>
              <li>You are travelling out from your city rather than back to it.</li>
              <li>You need the car to wait, or to make several stops.</li>
              <li>Nothing on your route has been posted as a return trip.</li>
            </ul>
            <div className="mt-4">
              <ArrowLink href={routes.rentalCar}>About Rental Car</ArrowLink>
            </div>
          </InfoCard>

          <InfoCard title="Pick Return Car when…" tone="highlight">
            <ul className="flex list-disc flex-col gap-2 pl-5 marker:text-brand-secondary-500">
              <li>Your timing is a little flexible.</li>
              <li>You are travelling back along a busy intercity route.</li>
              <li>You want the same car for noticeably less money.</li>
              <li>You are happy to post a request and wait for offers.</li>
            </ul>
            <div className="mt-4">
              <ArrowLink href={routes.returnCar}>About Return Car</ArrowLink>
            </div>
          </InfoCard>
        </div>
      </Section>

      <ProblemInsight moreLink={false} />

      <CalloutBand
        title="That is the whole process"
        description="No prepayment, no card details, no surprise fare at the end of the road."
        primary={{ label: "Get the App", href: links.appStore }}
        secondary={{ label: "Read the FAQ", href: routes.faq }}
      />
    </>
  );
}
