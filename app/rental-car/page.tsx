import {
  BadgeCheck,
  CalendarClock,
  Car,
  MessageSquareQuote,
  NotebookPen,
  Route,
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
import { Section, SectionHeading } from "@/components/landing/section";
import { ArrowLink } from "@/components/landing/site-link";
import { allFaqs } from "@/lib/faq-data";
import { links, routes } from "@/lib/site-config";
import { JsonLd } from "@/components/seo/json-ld";
import { keywordGroups, pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "Rental Car",
  description:
    "Book a whole car for your trip anywhere in Bangladesh. Post your route, compare offers from verified drivers, and pay in cash after the trip.",
  path: routes.rentalCar,
  keywords: [...keywordGroups.rental, ...keywordGroups.routes, ...keywordGroups.brand],
});

const steps = [
  {
    title: "Post your trip",
    body: "Pickup, drop-off, date, time and the type of vehicle you want. Add anything else — luggage, an AC vehicle, an early start — in Additional Notes.",
  },
  {
    title: "Collect offers",
    body: "Verified drivers on your route send fares. Each offer shows the driver, the vehicle and their rating, so you are comparing more than a number.",
  },
  {
    title: "Agree the fare",
    body: "Accept an offer, or counter it once. Rounds are capped so a negotiation lasts minutes, not an afternoon.",
  },
  {
    title: "Ride, then pay",
    body: "Your Gari Bhai confirms the pickup with both sides the day before. Hand over the agreed fare in cash when you arrive — never before.",
  },
];

const included = [
  {
    icon: Car,
    title: "The whole vehicle",
    body: "One booking is one car. No seat sharing, no strangers, no per-head pricing.",
  },
  {
    icon: BadgeCheck,
    title: "A verified driver",
    body: "NID, licence and vehicle registration are checked before a driver can take any booking.",
  },
  {
    icon: MessageSquareQuote,
    title: "A fare fixed in writing",
    body: "The offer you accept is recorded in the app. There is nothing to renegotiate at the roadside.",
  },
  {
    icon: Wallet,
    title: "Payment after the trip",
    body: "Cash to the driver on arrival. No deposit, no card, no in-app payment.",
  },
  {
    icon: Route,
    title: "Any route in the country",
    body: "City runs, intercity journeys, airport transfers — if a driver covers it, you can book it.",
  },
  {
    icon: NotebookPen,
    title: "Notes drivers actually read",
    body: "Special requirements go in one free-text field, and drivers price them into their offer.",
  },
];

// SAMPLE DATA: illustrative routes and fare ranges for layout, not a price list.
const sampleRoutes = [
  { route: "Dhaka → Cumilla", vehicle: "Sedan", fare: "৳4,500 – ৳5,500" },
  { route: "Dhaka → Chattogram", vehicle: "Micro", fare: "৳9,000 – ৳11,000" },
  { route: "Dhaka → Sylhet", vehicle: "Sedan", fare: "৳8,000 – ৳9,500" },
  { route: "Airport → Dhaka city", vehicle: "Sedan", fare: "৳900 – ৳1,400" },
];

const faqIds = ["whole-car", "negotiate", "when-pay", "how-far-ahead"];
const pageFaqs = allFaqs.filter((faq) => faqIds.includes(faq.id));

export default function RentalCarPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Rental Car", path: routes.rentalCar }]),
          serviceSchema({
            id: "rental",
            name: "Rental Car",
            description:
              "Book a whole car with a verified driver for any journey in Bangladesh. Post your route, compare driver offers, and pay in cash after the trip.",
            path: routes.rentalCar,
            offers: [
              "Intercity car rental with driver",
              "Airport transfer",
              "Full-day car hire",
            ],
          }),
        ]}
      />
      <PageHero
        breadcrumb="Rental Car"
        eyebrow="Service 01"
        title="Need a car for your trip? Book the whole thing."
        description="Tell GariGhora where you are going and when. Verified drivers send you fares, you pick the one you like, and the vehicle is yours for the journey."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <CtaLink href={links.passengerSignup} tone="onDark">
            Book a Rental Car
          </CtaLink>
          <CtaLink href={routes.returnCar} tone="ghostOnDark">
            Compare with Return Car
          </CtaLink>
        </div>
      </PageHero>

      <Section aria-labelledby="steps-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            <SectionHeading
              id="steps-heading"
              align="left"
              eyebrow="The booking"
              title="Four steps from idea to confirmed car"
            />
            <NumberedList steps={steps} />
          </div>

          <div className="flex flex-col gap-5">
            {/* SAMPLE DATA: replace with real market rates before launch. */}
            <InfoCard title="What routes tend to cost" icon={Route} tone="highlight">
              <p className="mb-3">
                Fares are set by drivers, not by us, so they move with distance,
                vehicle and timing. These are typical ranges people see:
              </p>
              <ul className="flex flex-col gap-2">
                {sampleRoutes.map((item) => (
                  <li
                    key={item.route}
                    className="flex items-baseline justify-between gap-3 border-b border-brand-hairline pb-2 last:border-0 last:pb-0"
                  >
                    <span className="flex flex-col">
                      <span className="font-medium text-brand-ink">
                        {item.route}
                      </span>
                      <span className="text-xs">{item.vehicle}</span>
                    </span>
                    <span className="shrink-0 font-semibold text-brand-ink">
                      {item.fare}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs">
                Sample figures for illustration only.
              </p>
            </InfoCard>

            <InfoCard title="Travelling on a route someone is returning from?" icon={CalendarClock}>
              <p>
                A Return Car trip on the same road often costs a fraction of a
                fresh rental, because the driver is already making the journey.
                Worth checking before you book.
              </p>
              <div className="mt-3">
                <ArrowLink href={routes.returnCar}>
                  Look at Return Car
                </ArrowLink>
              </div>
            </InfoCard>
          </div>
        </div>
      </Section>

      <Section tone="surface" aria-labelledby="included-heading">
        <SectionHeading
          id="included-heading"
          eyebrow="What you get"
          title="Every rental booking includes"
        />
        <FeatureGrid className="mt-6" items={included} />
      </Section>

      <Section aria-labelledby="rental-faq-heading">
        <SectionHeading
          id="rental-faq-heading"
          eyebrow="Rental Car FAQ"
          title="Before you book"
        />
        <div className="mx-auto mt-5 max-w-3xl rounded-3xl border border-brand-hairline bg-brand-surface-raised px-5 py-2 shadow-brand-sm sm:px-7">
          <FaqAccordion items={pageFaqs} />
        </div>
        <div className="mt-4 flex justify-center">
          <ArrowLink href={routes.faq}>Read all the questions</ArrowLink>
        </div>
      </Section>

      <CalloutBand
        title="Ready when you are"
        description="Post your trip, see what drivers offer, and decide from there. Nothing is charged until the journey is done."
        primary={{ label: "Get the App", href: links.appStore }}
        secondary={{ label: "How it works", href: routes.howItWorks }}
      />
    </>
  );
}
