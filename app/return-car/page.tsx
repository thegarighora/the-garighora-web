import {
  BadgeCheck,
  Clock,
  Fuel,
  MessageSquareQuote,
  Repeat,
  Search,
  Send,
  Wallet,
} from "lucide-react";
import {
  CalloutBand,
  FeatureGrid,
  InfoCard,
  NumberedList,
} from "@/components/landing/blocks";
import { CtaLink } from "@/components/landing/cta-link";
import { FaqAccordion } from "@/components/landing/faq";
import { PageHero } from "@/components/landing/page-hero";
import { ProblemInsight } from "@/components/landing/problem-insight";
import { Section, SectionHeading } from "@/components/landing/section";
import { ArrowLink } from "@/components/landing/site-link";
import { allFaqs } from "@/lib/faq-data";
import { links, routes } from "@/lib/site-config";
import { JsonLd } from "@/components/seo/json-ld";
import { keywordGroups, pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "Return Car",
  description:
    "Ride the leg a driver was going to make anyway. Search Return Trips on your route or post a Ride Request, agree the fare in the app, and pay after the trip.",
  path: routes.returnCar,
  keywords: [...keywordGroups.returnTrip, ...keywordGroups.routes, ...keywordGroups.brand],
});

const browseSteps = [
  {
    title: "Search your route",
    body: "From, to, date and time. Return Trips already posted by drivers show up with the vehicle, the departure window and the asking fare.",
  },
  {
    title: "Pick a trip that suits you",
    body: "Check the driver, their rating, the vehicle and any notes about the timing before you commit to anything.",
  },
  {
    title: "Request it",
    body: "Send a request at the asking fare, or counter with your own. The driver accepts, counters once, or lets it go.",
  },
  {
    title: "Ride and pay",
    body: "The booking is confirmed, a Gari Bhai calls both sides, and you pay the driver in cash at the end of the journey.",
  },
];

const requestSteps = [
  {
    title: "Post a Ride Request",
    body: "From, to, date, time and vehicle type — plus anything else in Additional Notes. It takes under a minute.",
  },
  {
    title: "Drivers heading that way respond",
    body: "Drivers whose route, timing and vehicle match your request see it and send offers with their fare.",
  },
  {
    title: "Compare and negotiate",
    body: "Accept the offer you like or counter it once. Everything stays inside the app, so the agreed fare is on record.",
  },
  {
    title: "Booking confirmed",
    body: "Once you accept, the trip is yours. Same verified drivers, same cash-after-the-trip payment.",
  },
];

const whyItWorks = [
  {
    icon: Fuel,
    title: "The journey is already paid for",
    body: "The driver earned on the way out. The return leg only has to beat driving home empty, which is why it can be posted so much lower.",
    feature: true,
  },
  {
    icon: Repeat,
    title: "Still the whole car",
    body: "A cheaper fare does not mean a shared vehicle. Return Car is a full-vehicle booking, exactly like a rental.",
  },
  {
    icon: BadgeCheck,
    title: "The same verified drivers",
    body: "Return Trips come from drivers already on the platform, with NID, licence and registration checked.",
  },
  {
    icon: Clock,
    title: "Often same-day",
    body: "Return Trips appear as drivers finish jobs, so this is a good place to look when you need to travel today or tomorrow.",
  },
  {
    icon: MessageSquareQuote,
    title: "Fare agreed before pickup",
    body: "Offers and counter-offers happen in the app and stop after a couple of rounds. No haggling at the car door.",
  },
  {
    icon: Wallet,
    title: "Pay when you arrive",
    body: "Cash to the driver after the trip is complete — never a deposit to hold a return trip.",
  },
];

// SAMPLE DATA: illustrative return trips for layout, not live inventory.
const sampleTrips = [
  {
    route: "Cumilla → Dhaka Airport",
    when: "Today, 6:00 PM",
    vehicle: "Toyota Axio · Sedan",
    fare: "৳1,100",
    rental: "৳3,200",
  },
  {
    route: "Chattogram → Dhaka",
    when: "Tomorrow, 7:30 AM",
    vehicle: "Toyota Noah · Micro",
    fare: "৳3,400",
    rental: "৳9,500",
  },
  {
    route: "Sylhet → Dhaka",
    when: "Friday, 9:00 PM",
    vehicle: "Allion · Sedan",
    fare: "৳2,900",
    rental: "৳8,000",
  },
];

const faqIds = ["why-cheaper", "no-match", "whole-car", "negotiate"];
const pageFaqs = allFaqs.filter((faq) => faqIds.includes(faq.id));

export default function ReturnCarPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Return Car", path: routes.returnCar }]),
          serviceSchema({
            id: "return",
            name: "Return Car",
            description:
              "Book the empty return leg of a trip a driver has already completed, at a fraction of a fresh rental fare. Whole vehicle, verified driver, pay after the trip.",
            path: routes.returnCar,
            offers: [
              "Discounted return trip booking",
              "Ride request with driver offers",
              "One-way intercity travel",
            ],
          }),
        ]}
      />
      <PageHero
        breadcrumb="Return Car"
        eyebrow="Service 02 · our signature feature"
        title="Ride the leg the car was making anyway."
        description="When a driver finishes a trip far from home, they would normally drive back empty. Return Car turns that empty leg into a cheap journey for someone heading the same way."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <CtaLink href={links.passengerSignup} tone="onDark">
            Find a Return Car
          </CtaLink>
          <CtaLink href={links.driverSignup} tone="ghostOnDark">
            Post your return trip
          </CtaLink>
        </div>
      </PageHero>

      <ProblemInsight moreLink={false} />

      <Section aria-labelledby="two-ways-heading">
        <SectionHeading
          id="two-ways-heading"
          eyebrow="Two ways to book"
          title="Search what is already posted, or ask for what you need"
          description="Most people start by searching. If nothing on your route matches, post a request and let drivers come to you."
        />

        <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <article className="flex flex-col gap-6 rounded-3xl border border-brand-hairline bg-brand-surface-raised p-6 shadow-brand-sm sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl bg-gradient-cta text-brand-on-brand shadow-brand-sm">
                <Search aria-hidden="true" className="size-5" />
              </span>
              <div className="flex flex-col">
                <span className="text-xs font-semibold tracking-[0.16em] text-brand-ink-muted uppercase">
                  Option A
                </span>
                <h3 className="text-xl font-semibold tracking-tight text-brand-ink">
                  Browse Return Trips
                </h3>
              </div>
            </div>
            <NumberedList steps={browseSteps} />
          </article>

          <article className="flex flex-col gap-6 rounded-3xl border border-brand-secondary-300 bg-gradient-card p-6 shadow-brand sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl bg-gradient-cta text-brand-on-brand shadow-brand-sm">
                <Send aria-hidden="true" className="size-5" />
              </span>
              <div className="flex flex-col">
                <span className="text-xs font-semibold tracking-[0.16em] text-brand-ink-muted uppercase">
                  Option B
                </span>
                <h3 className="text-xl font-semibold tracking-tight text-brand-ink">
                  Post a Ride Request
                </h3>
              </div>
            </div>
            <NumberedList steps={requestSteps} />
          </article>
        </div>
      </Section>

      <Section tone="surface" aria-labelledby="sample-heading">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionHeading
              id="sample-heading"
              align="left"
              eyebrow="What it looks like"
              title="Return trips on the routes people actually travel"
              description="Return Car is strongest on the long intercity roads, where driving home empty costs a driver the most."
            />
            <div>
              <ArrowLink href={links.passengerSignup}>
                Search your own route
              </ArrowLink>
            </div>
          </div>

          {/* SAMPLE DATA: illustrative listings, not live inventory. */}
          <ul className="flex flex-col gap-4">
            {sampleTrips.map((trip) => (
              <li
                key={trip.route}
                className="flex flex-wrap items-end justify-between gap-3 rounded-2xl border border-brand-hairline bg-brand-surface-raised p-5 shadow-brand-sm"
              >
                <div className="flex min-w-0 flex-col gap-1">
                  <span className="text-base font-semibold text-brand-ink">
                    {trip.route}
                  </span>
                  <span className="text-sm text-brand-ink-muted">
                    {trip.when}
                  </span>
                  <span className="text-sm text-brand-ink-muted">
                    {trip.vehicle}
                  </span>
                </div>
                <div className="flex shrink-0 flex-col items-end">
                  <span className="text-xl font-semibold text-brand-primary-800 dark:text-brand-ink">
                    {trip.fare}
                  </span>
                  <span className="text-xs text-brand-ink-muted line-through">
                    Usual rental {trip.rental}
                  </span>
                </div>
              </li>
            ))}
            <li className="text-xs text-brand-ink-muted">
              Sample listings for illustration only.
            </li>
          </ul>
        </div>
      </Section>

      <Section aria-labelledby="why-heading">
        <SectionHeading
          id="why-heading"
          eyebrow="Why it is cheaper"
          title="A lower fare, without a lower standard"
        />
        <FeatureGrid className="mt-6" items={whyItWorks} />

        <InfoCard
          className="mx-auto mt-5 max-w-3xl"
          title="One thing Return Car is not"
        >
          <p>
            It is not a shared ride and it is not a bus seat. GariGhora books
            whole vehicles only — you are not put in a car with strangers, and
            there is no per-seat pricing in this version.
          </p>
        </InfoCard>
      </Section>

      <Section tone="surface" aria-labelledby="return-faq-heading">
        <SectionHeading
          id="return-faq-heading"
          eyebrow="Return Car FAQ"
          title="The usual questions"
        />
        <div className="mx-auto mt-5 max-w-3xl rounded-3xl border border-brand-hairline bg-brand-surface-raised px-5 py-2 shadow-brand-sm sm:px-7">
          <FaqAccordion items={pageFaqs} />
        </div>
        <div className="mt-4 flex justify-center">
          <ArrowLink href={routes.faq}>Read all the questions</ArrowLink>
        </div>
      </Section>

      <CalloutBand
        title="A car is already going that way"
        description="Check the Return Trips on your route before you pay full rental price for the same journey."
        primary={{ label: "Get the App", href: links.appStore }}
        secondary={{ label: "See Rental Car", href: routes.rentalCar }}
      />
    </>
  );
}
