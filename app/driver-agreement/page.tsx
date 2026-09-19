import { LegalBody, type LegalSection } from "@/components/landing/legal";
import { PageHero } from "@/components/landing/page-hero";
import { SiteLink } from "@/components/landing/site-link";
import { routes, siteConfig } from "@/lib/site-config";
import { JsonLd } from "@/components/seo/json-ld";
import { keywordGroups, pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "Driver Agreement",
  description:
    "The terms that apply to drivers on GariGhora: verification, vehicles, fares, collecting cash, platform commission, settlement and account standing.",
  path: routes.driverAgreement,
  keywords: [...keywordGroups.brand, "GariGhora driver agreement"],
  type: "article",
});

const linkClass =
  "font-medium text-brand-primary-700 underline underline-offset-4 dark:text-brand-primary-300";

const sections: LegalSection[] = [
  {
    id: "relationship",
    heading: "You are an independent operator",
    content: (
      <>
        <p>
          Driving on {siteConfig.name} does not make you our employee, agent or
          partner. You provide transport services on your own account, using your
          own vehicle, and you decide which trips to take and what to charge for
          them.
        </p>
        <p>
          This agreement sits alongside the{" "}
          <SiteLink href={routes.terms} className={linkClass}>
            Terms of Service
          </SiteLink>
          , which apply to everyone using the platform.
        </p>
      </>
    ),
  },
  {
    id: "eligibility",
    heading: "Getting and staying verified",
    content: (
      <>
        <p>Before your account can accept any trip, you must provide:</p>
        <ul>
          <li>Your National ID.</li>
          <li>A valid driving licence covering the vehicle you intend to drive.</li>
          <li>Registration papers for that vehicle.</li>
        </ul>
        <p>
          You must keep these current. If a licence expires, a vehicle changes
          hands, or the details on your account stop matching reality, tell us —
          driving on lapsed documents can suspend your account and may affect any
          insurance you rely on.
        </p>
      </>
    ),
  },
  {
    id: "vehicle",
    heading: "Your vehicle",
    content: (
      <>
        <ul>
          <li>Keep the vehicle roadworthy, clean, and legally taxed and insured.</li>
          <li>
            Only carry passengers in a vehicle that is listed on your profile and
            verified. If you switch cars, switch it in the app first.
          </li>
          <li>
            The vehicle that arrives must be the vehicle in the booking. If it
            cannot be, cancel and tell operations rather than turning up in
            something else.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "trips",
    heading: "Offers, bookings and running trips",
    content: (
      <>
        <ul>
          <li>
            <strong>You set the fare.</strong> Offers are yours to make, and you
            can decline any request without giving a reason.
          </li>
          <li>
            <strong>An accepted offer is a commitment.</strong> Once a passenger
            accepts, the fare is fixed and the trip is yours to run.
          </li>
          <li>
            <strong>Full vehicle only.</strong> Do not add other passengers to a
            booked trip, and do not sell seats in a vehicle someone has booked.
          </li>
          <li>
            <strong>Keep the trip in the app.</strong> Start it and complete it in
            the app, so the record matches what actually happened.
          </li>
          <li>
            <strong>Share location while a trip is active</strong>, so the
            passenger and the operations team can see the vehicle en route.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "payment",
    heading: "Getting paid",
    content: (
      <>
        <p>
          The passenger pays you directly, in cash, after the trip is complete.{" "}
          {siteConfig.name} does not hold or forward your fares, so there is no
          payout delay.
        </p>
        <p>
          Do not ask for payment before a trip, and do not ask for more than the
          agreed fare at the end of one. If circumstances genuinely changed, raise
          it with the operations agent on the booking so the change is recorded.
        </p>
      </>
    ),
  },
  {
    id: "commission",
    heading: "Platform commission",
    content: (
      <>
        <p>
          Each completed trip creates a commission owed by you to{" "}
          {siteConfig.name}. It is calculated on the trip fare and recorded
          against the trip in your app. It is never added to what the passenger
          pays.
        </p>
        <p>
          <strong>Unsettled commission is capped.</strong> You may carry a small
          number of completed trips with commission outstanding. Once you pass
          that limit, your account cannot accept new trips until you settle. The
          limit is enforced by the platform, not by the app on your phone.
        </p>
      </>
    ),
  },
  {
    id: "settlement",
    heading: "Settling what you owe",
    content: (
      <>
        <p>Settlement is manual, and can be made by:</p>
        <ul>
          <li>bKash</li>
          <li>Nagad</li>
          <li>Bank transfer</li>
          <li>Cash to an authorised representative</li>
        </ul>
        <p>
          Submit the payment details in the app. Once operations verify it, the
          commission is marked settled and your account is unblocked. Keep your
          reference numbers until a settlement shows as verified.
        </p>
        <p>
          Every settlement, verification and adjustment is recorded, so your
          balance can always be traced back to specific trips.
        </p>
      </>
    ),
  },
  {
    id: "conduct",
    heading: "Conduct and account standing",
    content: (
      <>
        <p>
          Your rating, cancellation rate, no-shows and reported incidents together
          make up your standing on the platform. We may suspend or close an
          account for:
        </p>
        <ul>
          <li>Taking payment outside the platform to avoid commission.</li>
          <li>Asking for more than the agreed fare at the end of a trip.</li>
          <li>Repeated late cancellations or no-shows.</li>
          <li>Unsafe driving, or behaviour that makes a passenger feel unsafe.</li>
          <li>Letting someone else drive on your verified account.</li>
          <li>Falsified documents, fake trips or fake reviews.</li>
        </ul>
        <p>
          Where an account is suspended, we will tell you why, and you can respond
          through the{" "}
          <SiteLink href={routes.contact} className={linkClass}>
            contact page
          </SiteLink>
          .
        </p>
      </>
    ),
  },
  {
    id: "leaving",
    heading: "Leaving the platform",
    content: (
      <>
        <p>
          You can stop taking trips at any time. Before an account can be closed,
          any outstanding commission must be settled and any confirmed bookings
          must be completed or properly cancelled.
        </p>
        <p>
          Trip and financial records are kept after closure for accounting and
          dispute purposes — see the{" "}
          <SiteLink href={routes.privacy} className={linkClass}>
            Privacy Policy
          </SiteLink>
          .
        </p>
      </>
    ),
  },
];

export default function DriverAgreementPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Driver Agreement", path: routes.driverAgreement }]),
          webPageSchema({
            type: "WebPage",
            name: "Driver Agreement",
            description: "The terms that apply to drivers on GariGhora: verification, vehicles, fares, collecting cash, platform commission, settlement and account standing.",
            path: routes.driverAgreement,
          }),
        ]}
      />
      <PageHero
        breadcrumb="Driver Agreement"
        eyebrow={`Last updated ${siteConfig.legalLastUpdated}`}
        title="Driver Agreement"
        description="What you agree to when you drive on GariGhora — and what we owe you in return."
      />

      <LegalBody
        currentHref={routes.driverAgreement}
        summary={
          <>
            You drive as an independent operator, set your own fares, and collect
            cash from the passenger after each trip. In return you keep your
            documents current, run trips through the app, and settle the
            platform&apos;s commission — which is capped, so it never builds up
            into a debt you cannot clear.
          </>
        }
        sections={sections}
      />
    </>
  );
}
