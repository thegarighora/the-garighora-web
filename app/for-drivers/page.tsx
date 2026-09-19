import {
  BadgeCheck,
  Banknote,
  CarFront,
  FileCheck2,
  IdCard,
  PhoneCall,
  Receipt,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import {
  CalloutBand,
  FeatureGrid,
  InfoCard,
  NumberedList,
} from "@/components/landing/blocks";
import { CtaLink } from "@/components/landing/cta-link";
import { FaqAccordion } from "@/components/landing/faq";
import { ForDrivers } from "@/components/landing/for-drivers";
import { PageHero } from "@/components/landing/page-hero";
import { Section, SectionHeading } from "@/components/landing/section";
import { ArrowLink } from "@/components/landing/site-link";
import { allFaqs } from "@/lib/faq-data";
import { links, routes } from "@/lib/site-config";
import { JsonLd } from "@/components/seo/json-ld";
import { keywordGroups, pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "For Drivers",
  description:
    "Earn on the leg you were driving anyway. Take rental bookings, post your empty return trips, and collect cash from passengers after every trip.",
  path: routes.forDrivers,
  keywords: [...keywordGroups.driver, ...keywordGroups.brand],
});

const requirements = [
  {
    icon: IdCard,
    title: "Your NID",
    body: "Used to confirm you are who you say you are. Nothing is shown to passengers beyond your name, photo and rating.",
  },
  {
    icon: FileCheck2,
    title: "A valid driving licence",
    body: "Checked before your account can accept any trip, and expected to stay valid while you drive.",
  },
  {
    icon: CarFront,
    title: "Vehicle registration papers",
    body: "The vehicle is added to your profile with its type, model and seating, so passengers know what is arriving.",
  },
  {
    icon: Smartphone,
    title: "A phone that runs the driver app",
    body: "You will need it for offers, bookings, starting and completing trips, and sharing basic location during a trip.",
  },
];

const signupSteps = [
  {
    title: "Sign up with your phone number",
    body: "Verify it with an OTP and fill in your name and photo. It takes a couple of minutes.",
  },
  {
    title: "Submit your documents",
    body: "NID, driving licence and the registration for the vehicle you want to drive. You can add more vehicles later.",
  },
  {
    title: "Get verified",
    body: "We check the documents against the vehicle. Until that is done, your account can browse but not accept trips.",
  },
  {
    title: "Start taking work",
    body: "Publish rental availability, send offers on ride requests, and post your empty return legs as Return Car trips.",
  },
];

const earnings = [
  {
    icon: Banknote,
    title: "You set your own fares",
    body: "Every offer is yours to make. Nobody prices your trip for you, and there is no surge or discount engine changing it.",
    feature: true,
  },
  {
    icon: Receipt,
    title: "Cash straight from the passenger",
    body: "You collect the agreed fare at the end of the trip. There is no payout wait and no platform holding your money.",
  },
  {
    icon: ShieldCheck,
    title: "Commission billed separately",
    body: "The platform commission on a completed trip is recorded against you and settled by bKash, Nagad, bank transfer or cash — never taken out of the passenger's fare.",
  },
  {
    icon: PhoneCall,
    title: "A Gari Bhai on every booking",
    body: "An operations agent confirms details with the passenger before pickup, so you are not chasing people by phone yourself.",
  },
];

const faqIds = ["driver-signup", "commission", "verification", "ratings"];
const pageFaqs = allFaqs.filter((faq) => faqIds.includes(faq.id));

export default function ForDriversPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "For Drivers", path: routes.forDrivers }]),
          webPageSchema({
            type: "WebPage",
            name: "Drive with GariGhora",
            description:
              "How drivers earn on GariGhora: take a rental, post the empty return leg, collect cash after each trip and settle commission separately.",
            path: routes.forDrivers,
          }),
        ]}
      />
      <PageHero
        breadcrumb="For Drivers"
        eyebrow="Drive with GariGhora"
        title="Get paid for the drive home."
        description="Take rental bookings like you always have — then post the empty return leg and let it earn too. You set the fare, you collect the cash, we handle the matching."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <CtaLink href={links.driverSignup} tone="onDark">
            Register as a Driver
          </CtaLink>
          <CtaLink href={links.playStore} tone="ghostOnDark">
            Get the Driver App
          </CtaLink>
        </div>
      </PageHero>

      <ForDrivers moreLink={false} />

      <Section aria-labelledby="signup-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            <SectionHeading
              id="signup-heading"
              align="left"
              eyebrow="Getting started"
              title="From signup to your first booking"
            />
            <NumberedList steps={signupSteps} />
          </div>

          <InfoCard
            title="What verification means"
            icon={BadgeCheck}
            tone="highlight"
            className="lg:self-start"
          >
            <p className="mb-3">
              Verification is a one-off check, not an inspection regime. We
              confirm your identity, your licence and that the vehicle you are
              offering is registered to you.
            </p>
            <p className="mb-3">
              It exists so passengers can trust an unfamiliar car on a long road
              at night — which is the same reason they will trust your return
              trips.
            </p>
            <ArrowLink href={routes.trustSafety}>
              How we handle trust and safety
            </ArrowLink>
          </InfoCard>
        </div>
      </Section>

      <Section tone="surface" aria-labelledby="requirements-heading">
        <SectionHeading
          id="requirements-heading"
          eyebrow="What you need"
          title="Four things to bring"
          description="If you already drive for hire, you almost certainly have all of these."
        />
        <FeatureGrid className="mt-6" items={requirements} columns={4} />
      </Section>

      <Section aria-labelledby="earnings-detail-heading">
        <SectionHeading
          id="earnings-detail-heading"
          eyebrow="Money"
          title="How earning works here"
        />
        <FeatureGrid className="mt-6" items={earnings} columns={2} />

        <InfoCard
          className="mx-auto mt-5 max-w-3xl"
          title="One rule worth knowing up front"
          icon={Receipt}
        >
          <p>
            Unsettled commission is capped. You can carry a few completed trips
            with commission outstanding, but once you pass the limit your account
            cannot accept new trips until you settle. Settlement is verified by
            the operations team, usually the same day, and your account is
            unblocked as soon as it clears.
          </p>
        </InfoCard>
      </Section>

      <Section tone="surface" aria-labelledby="driver-faq-heading">
        <SectionHeading
          id="driver-faq-heading"
          eyebrow="Driver FAQ"
          title="Questions drivers ask"
        />
        <div className="mx-auto mt-5 max-w-3xl rounded-3xl border border-brand-hairline bg-brand-surface-raised px-5 py-2 shadow-brand-sm sm:px-7">
          <FaqAccordion items={pageFaqs} />
        </div>
        <div className="mt-4 flex justify-center">
          <ArrowLink href={routes.faq}>Read all the questions</ArrowLink>
        </div>
      </Section>

      <CalloutBand
        title="Stop driving home for free"
        description="Register, get verified, and post your first return trip this week."
        primary={{ label: "Register as a Driver", href: links.driverSignup }}
        secondary={{ label: "Talk to us first", href: routes.contact }}
      />
    </>
  );
}
