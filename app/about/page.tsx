import { Compass, HandCoins, Handshake, Route, Users } from "lucide-react";
import { CalloutBand, FeatureGrid, InfoCard } from "@/components/landing/blocks";
import { PageHero } from "@/components/landing/page-hero";
import { ProblemInsight } from "@/components/landing/problem-insight";
import { Section, SectionHeading } from "@/components/landing/section";
import { ArrowLink } from "@/components/landing/site-link";
import { StatsStrip } from "@/components/landing/stats-strip";
import { links, routes, siteConfig } from "@/lib/site-config";
import { JsonLd } from "@/components/seo/json-ld";
import { keywordGroups, pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Why GariGhora exists: intercity cars in Bangladesh spend half their journey empty. We turn that empty leg into a cheaper ride and a second fare.",
  path: routes.about,
  keywords: [...keywordGroups.brand, "about GariGhora", "car marketplace Bangladesh"],
});

const principles = [
  {
    icon: Compass,
    title: "Fix the empty leg first",
    body: "Everything on the platform points at one inefficiency: a car driving home with nobody in it. Return Car is the product; the rest supports it.",
    feature: true,
  },
  {
    icon: Handshake,
    title: "Keep both sides whole",
    body: "A driver should earn more than they did before, and a passenger should pay less. If a change only helps one side, it is not a good change.",
  },
  {
    icon: HandCoins,
    title: "Do not touch the money yet",
    body: "Passengers pay drivers directly in cash. We record the trip and bill our commission to the driver, rather than sitting between them and their income.",
  },
  {
    icon: Users,
    title: "Keep a human in the loop",
    body: "A Gari Bhai calls both sides on every booking. Software matches the trip; a person makes sure it actually happens.",
  },
  {
    icon: Route,
    title: "Start narrow, on real roads",
    body: "Two services, the busiest intercity routes, full-vehicle bookings only. Depth on a few journeys beats a thin presence everywhere.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "About", path: routes.about }]),
          webPageSchema({
            type: "AboutPage",
            name: "About GariGhora",
            description:
              "Why GariGhora exists: intercity cars in Bangladesh spend half their journey empty, and that empty leg should be somebody else's cheaper ride.",
            path: routes.about,
          }),
        ]}
      />
      <PageHero
        breadcrumb="About"
        eyebrow="About us"
        title="A car is already going that way."
        description={`${siteConfig.name} — also written Ghori Ghora — is a Bangladeshi car marketplace built around one observation: intercity vehicles spend half their working day driving back empty.`}
      />

      <Section aria-labelledby="story-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionHeading
              id="story-heading"
              align="left"
              eyebrow="Why we exist"
              title="Half the journey, none of the income"
            />
            <div className="flex flex-col gap-4 text-sm leading-relaxed text-brand-ink-muted sm:text-base">
              <p>
                Rent a car from Dhaka to Cumilla and the driver takes you there,
                drops you off, and drives home alone. The fuel, the hours and the
                wear on that return leg are real costs, and they end up inside
                the fare everyone pays.
              </p>
              <p>
                Meanwhile, somebody in Cumilla is trying to get to Dhaka that
                evening and paying full price for a second car to make the exact
                same journey in the opposite direction.
              </p>
              <p>
                <strong className="font-semibold text-brand-ink">
                  Those two people should be in the same car.
                </strong>{" "}
                That is the whole idea. GariGhora lets a driver post the empty
                leg as a Return Car trip, and lets a passenger book it for a
                fraction of a fresh rental — the driver earns twice on one
                journey, the passenger travels cheaper, and one less car makes an
                empty run.
              </p>
              <p>
                Rental Car sits alongside it because the two feed each other:
                today&apos;s rental is tomorrow&apos;s return trip.
              </p>
            </div>
            <div>
              <ArrowLink href={routes.returnCar}>
                See how Return Car works
              </ArrowLink>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <InfoCard title="What we are building" tone="highlight">
              <p>
                A marketplace for intercity car travel in Bangladesh, with two
                connected services, verified drivers, fares agreed in the app,
                and a human operations team on every booking.
              </p>
            </InfoCard>
            <InfoCard title="What we are not building">
              <p className="mb-3">
                Not a bus. Not a ride-share where strangers split a car. Not a
                payment company.
              </p>
              <p>
                Bookings are for the whole vehicle, and money moves directly
                between passenger and driver.
              </p>
            </InfoCard>
          </div>
        </div>
      </Section>

      <ProblemInsight moreLink={false} />

      <Section aria-labelledby="principles-heading">
        <SectionHeading
          id="principles-heading"
          eyebrow="How we work"
          title="Five things we keep coming back to"
        />
        <FeatureGrid className="mt-6" items={principles} />
      </Section>

      <StatsStrip />

      <Section tone="surface" aria-labelledby="where-heading">
        <SectionHeading
          id="where-heading"
          eyebrow="Where we operate"
          title="Bangladesh, starting with the busiest roads"
          description="Dhaka and the corridors out of it — Cumilla, Chattogram, Sylhet and the airport routes — are where empty return legs are most common, so that is where we started."
        />
        <div className="mt-4 flex justify-center">
          <ArrowLink href={routes.contact}>
            Want us on your route? Tell us
          </ArrowLink>
        </div>
      </Section>

      <CalloutBand
        title="Come along for the ride"
        description="Book a trip, drive with us, or join the team building it."
        primary={{ label: "Get the App", href: links.appStore }}
        secondary={{ label: "See open roles", href: routes.careers }}
      />
    </>
  );
}
