import { LegalBody, type LegalSection } from "@/components/landing/legal";
import { PageHero } from "@/components/landing/page-hero";
import { SiteLink } from "@/components/landing/site-link";
import { routes, siteConfig } from "@/lib/site-config";
import { JsonLd } from "@/components/seo/json-ld";
import { keywordGroups, pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "The terms that apply when you use GariGhora to book a car or to offer one — bookings, fares, payment, cancellations, conduct and liability.",
  path: routes.terms,
  keywords: [...keywordGroups.brand, "GariGhora terms of service"],
  type: "article",
});

const linkClass =
  "font-medium text-brand-primary-700 underline underline-offset-4 dark:text-brand-primary-300";

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    heading: "Who we are and what this covers",
    content: (
      <>
        <p>
          {siteConfig.name} operates a marketplace that connects passengers who
          need a car with drivers who have one. These terms apply to the
          website, the passenger app and the driver app.
        </p>
        <p>
          By creating an account or booking a trip, you agree to these terms. If
          you drive on the platform, the{" "}
          <SiteLink href={routes.driverAgreement} className={linkClass}>
            Driver Agreement
          </SiteLink>{" "}
          applies to you as well.
        </p>
      </>
    ),
  },
  {
    id: "marketplace",
    heading: "We are a marketplace, not a transport operator",
    content: (
      <>
        <p>
          {siteConfig.name} does not own vehicles and does not employ drivers.
          Drivers on the platform are independent operators who provide the
          transport themselves. What we provide is the platform that matches you,
          records the agreed fare, and supports the booking while it runs.
        </p>
        <p>
          This means the transport contract for a trip is between the passenger
          and the driver. We verify drivers before they can accept trips and we
          assign an operations agent to bookings, but we are not the carrier.
        </p>
      </>
    ),
  },
  {
    id: "accounts",
    heading: "Your account",
    content: (
      <>
        <p>
          Accounts are created with a phone number verified by a one-time
          password. You are responsible for keeping access to that number and for
          activity on your account.
        </p>
        <ul>
          <li>You must be legally able to enter into a contract to use the platform.</li>
          <li>Give accurate information, and keep it current.</li>
          <li>One account per person. Do not book on behalf of someone else without telling us who is travelling.</li>
          <li>
            We may suspend or close an account that is used fraudulently, abusively
            or in breach of these terms.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "bookings",
    heading: "Bookings, offers and fares",
    content: (
      <>
        <p>
          A booking is created when a passenger accepts a driver&apos;s offer, or
          a driver accepts a passenger&apos;s request. Offers and counter-offers
          happen inside the app and are limited to a small number of rounds.
        </p>
        <ul>
          <li>
            <strong>The fare is fixed on acceptance.</strong> Neither side may
            change it afterwards without agreement recorded through the platform.
          </li>
          <li>
            <strong>Bookings are for the whole vehicle.</strong> We do not sell
            individual seats, and a driver may not add other passengers to your
            trip.
          </li>
          <li>
            <strong>Offers can expire.</strong> An offer that is not accepted
            within its window lapses, and the trip stays open to others.
          </li>
          <li>
            Only one accepted offer can exist for a trip. The platform prevents
            conflicting acceptances.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "payment",
    heading: "Payment",
    content: (
      <>
        <p>
          <strong>
            Payment is made directly to the driver, in cash, after the trip is
            completed.
          </strong>{" "}
          {siteConfig.name} does not process passenger payments and does not hold
          your money. There is no deposit and no advance payment.
        </p>
        <p>
          The amount payable is the fare agreed in the app. If a trip genuinely
          changes — a different drop-off, a wait you asked for — raise it with the
          operations agent on your booking so the change is recorded rather than
          settled informally.
        </p>
        <p>
          Drivers owe {siteConfig.name} a commission on completed trips. That is
          a matter between the driver and us and is never added to the
          passenger&apos;s fare.
        </p>
      </>
    ),
  },
  {
    id: "cancellations",
    heading: "Cancellations and no-shows",
    content: (
      <>
        <p>
          Either side can cancel a booking, and every cancellation records who
          cancelled, when and why. Because no money changes hands before a trip,
          a cancellation does not leave anyone chasing a refund.
        </p>
        <p>
          Repeated cancellations or no-shows count against an account and can
          lead to suspension. The full detail is in the{" "}
          <SiteLink href={routes.cancellation} className={linkClass}>
            Cancellation Policy
          </SiteLink>
          .
        </p>
      </>
    ),
  },
  {
    id: "conduct",
    heading: "How we expect people to behave",
    content: (
      <>
        <p>Using the platform, you agree not to:</p>
        <ul>
          <li>Ask for or offer a fare outside the platform in order to avoid commission.</li>
          <li>Harass, threaten or discriminate against anyone on a trip.</li>
          <li>Carry anything illegal, or ask a driver to.</li>
          <li>Post fake reviews, fake requests or fake trips.</li>
          <li>Use another person&apos;s account or documents.</li>
          <li>Interfere with the platform, or try to access data that is not yours.</li>
        </ul>
        <p>
          Smoking, alcohol and unsafe behaviour in a vehicle are at the
          driver&apos;s discretion to refuse.
        </p>
      </>
    ),
  },
  {
    id: "reviews",
    heading: "Ratings and reviews",
    content: (
      <>
        <p>
          After a completed trip, each side may leave one rating and an optional
          comment. Cancelled trips cannot be reviewed.
        </p>
        <p>
          We may remove a review that is abusive, contains personal information,
          or is not about the trip it is attached to. We do not remove a review
          simply because it is unflattering.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    heading: "Liability",
    content: (
      <>
        <p>
          Because drivers are independent operators, {siteConfig.name} is not
          liable for the driving itself, for the condition of a vehicle, or for
          loss or damage arising during a trip, except where the law says
          otherwise.
        </p>
        <p>
          We do not guarantee that a matching driver, vehicle or return trip will
          be available on any given route or date, or that the platform will be
          free of interruption.
        </p>
        <p>
          Nothing here limits liability that cannot lawfully be limited,
          including for death or personal injury caused by negligence.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    heading: "Changes to these terms",
    content: (
      <>
        <p>
          We may update these terms as the service changes. Material changes will
          be notified in the app or by message to your registered number, and the
          date at the top of this page will change.
        </p>
        <p>Continuing to use the platform after an update means you accept it.</p>
      </>
    ),
  },
  {
    id: "law",
    heading: "Governing law and contact",
    content: (
      <>
        <p>
          These terms are governed by the laws of Bangladesh, and the courts of
          Bangladesh have jurisdiction over any dispute.
        </p>
        <p>
          Questions about these terms can go to{" "}
          <SiteLink
            href={`mailto:${siteConfig.supportEmail}`}
            className={linkClass}
          >
            {siteConfig.supportEmail}
          </SiteLink>{" "}
          or through the{" "}
          <SiteLink href={routes.contact} className={linkClass}>
            contact page
          </SiteLink>
          .
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Terms of Service", path: routes.terms }]),
          webPageSchema({
            type: "WebPage",
            name: "Terms of Service",
            description: "The terms that apply when you use GariGhora to book a car or to offer one — bookings, fares, payment, cancellations, conduct and liability.",
            path: routes.terms,
          }),
        ]}
      />
      <PageHero
        breadcrumb="Terms of Service"
        eyebrow={`Last updated ${siteConfig.legalLastUpdated}`}
        title="Terms of Service"
        description="What you can expect from GariGhora, and what we expect from you, when you book a car or offer one."
      />

      <LegalBody
        currentHref={routes.terms}
        summary={
          <>
            We connect passengers with independent drivers. The fare is agreed in
            the app and paid in cash to the driver after the trip. We verify
            drivers, record every booking, and support the trip — but the driving
            itself is done by the driver, not by us.
          </>
        }
        sections={sections}
      />
    </>
  );
}
