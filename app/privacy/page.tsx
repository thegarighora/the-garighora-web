import { LegalBody, type LegalSection } from "@/components/landing/legal";
import { PageHero } from "@/components/landing/page-hero";
import { SiteLink } from "@/components/landing/site-link";
import { routes, siteConfig } from "@/lib/site-config";
import { JsonLd } from "@/components/seo/json-ld";
import { keywordGroups, pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "What personal data GariGhora collects, why we collect it, who sees it, how long we keep it, and how to ask for a copy or a deletion.",
  path: routes.privacy,
  keywords: [...keywordGroups.brand, "GariGhora privacy policy"],
  type: "article",
});

const linkClass =
  "font-medium text-brand-primary-700 underline underline-offset-4 dark:text-brand-primary-300";

const sections: LegalSection[] = [
  {
    id: "scope",
    heading: "What this policy covers",
    content: (
      <>
        <p>
          This policy explains how {siteConfig.name} handles personal data across
          the website, the passenger app and the driver app.
        </p>
        <p>
          We collect what a trip actually needs — no more. Where something is
          optional, we say so.
        </p>
      </>
    ),
  },
  {
    id: "what-we-collect",
    heading: "What we collect",
    content: (
      <>
        <h3>From everyone</h3>
        <ul>
          <li>
            <strong>Phone number</strong> — the account identifier, verified by
            one-time password.
          </li>
          <li>
            <strong>Name and profile photo</strong> — so the person you are
            meeting knows who to look for.
          </li>
          <li>
            <strong>Email and address</strong> — optional for passengers.
          </li>
          <li>
            <strong>Trip data</strong> — routes, dates, times, notes on a booking,
            offers, bookings, trips, cancellations and ratings.
          </li>
          <li>
            <strong>Support history</strong> — what you reported and what we did
            about it, including notes made by the operations agent on your
            booking.
          </li>
          <li>
            <strong>Device and usage data</strong> — app version, device type and
            basic diagnostics, used to fix crashes and abuse.
          </li>
        </ul>

        <h3>From drivers only</h3>
        <ul>
          <li>
            <strong>NID, driving licence and vehicle registration</strong> — used
            to verify that a driver is who they say they are and that the vehicle
            is theirs.
          </li>
          <li>
            <strong>Vehicle details and photos</strong> — shown to passengers so
            they can identify the car.
          </li>
          <li>
            <strong>Earnings, commission and settlement records</strong> — needed
            to run the financial side of the platform.
          </li>
        </ul>

        <h3>Location</h3>
        <p>
          Driver location is used while a trip is active, so the passenger can see
          the car approaching and so support can help if something goes wrong. We
          do not build long-term movement histories, and we do not track drivers
          when they are not on a trip.
        </p>

        <p>
          <strong>Passengers are not asked for NID</strong> to open an account or
          make a normal booking.
        </p>
      </>
    ),
  },
  {
    id: "why",
    heading: "Why we use it",
    content: (
      <>
        <ul>
          <li>To create and secure your account, and to verify a driver before they carry anyone.</li>
          <li>To match trips, deliver offers and confirm bookings.</li>
          <li>To let an operations agent call both sides and keep the booking on track.</li>
          <li>To record fares, commission and settlements so cash-settled trips remain auditable.</li>
          <li>To send notifications about your bookings and trips.</li>
          <li>To investigate problems, fraud, abuse and safety incidents.</li>
          <li>To understand how the service is used, at an aggregate level, and improve it.</li>
        </ul>
      </>
    ),
  },
  {
    id: "sharing",
    heading: "Who sees your data",
    content: (
      <>
        <ul>
          <li>
            <strong>The other side of your trip.</strong> A passenger sees the
            driver&apos;s name, photo, rating and vehicle. A driver sees the
            passenger&apos;s name, phone number and pickup details. Identity
            documents are never shown to the other side.
          </li>
          <li>
            <strong>Our operations team.</strong> The Gari Bhai on your booking
            sees what they need to confirm and support the trip.
          </li>
          <li>
            <strong>Service providers.</strong> Hosting, messaging, mapping and
            error-monitoring providers process data on our behalf, under contract.
          </li>
          <li>
            <strong>Authorities.</strong> Where we are legally required to, or
            where it is necessary to investigate a serious safety incident.
          </li>
        </ul>
        <p>We do not sell personal data.</p>
      </>
    ),
  },
  {
    id: "retention",
    heading: "How long we keep it",
    content: (
      <>
        <p>
          Account and trip records are kept while your account is active. Booking,
          trip and financial records are kept afterwards for as long as we need
          them for accounting, dispute resolution and legal obligations.
        </p>
        <p>
          Verification documents are kept while a driver is active on the platform
          and for a limited period afterwards. Active-trip location data is kept
          only as long as it is useful for supporting and resolving trips.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    heading: "Your choices and rights",
    content: (
      <>
        <ul>
          <li>Access a copy of the personal data we hold about you.</li>
          <li>Ask us to correct anything that is wrong — most of it you can edit in the app.</li>
          <li>Ask us to delete your account and the data we are not legally required to keep.</li>
          <li>Turn off non-essential notifications in the app.</li>
          <li>Withdraw location permission in your device settings, accepting that active-trip features will not work.</li>
        </ul>
        <p>
          To make a request, write to{" "}
          <SiteLink
            href={`mailto:${siteConfig.privacyEmail}`}
            className={linkClass}
          >
            {siteConfig.privacyEmail}
          </SiteLink>
          . We may need to verify your identity before acting on it.
        </p>
      </>
    ),
  },
  {
    id: "security",
    heading: "Keeping it safe",
    content: (
      <>
        <p>
          Access to personal data is limited to staff who need it for their role,
          and access to financial and verification records is more tightly
          restricted still. Important actions are recorded in an audit trail.
        </p>
        <p>
          No system is perfectly secure. If a breach affects you, we will tell you
          and the relevant authority as required.
        </p>
      </>
    ),
  },
  {
    id: "children",
    heading: "Children",
    content: (
      <p>
        The platform is not intended for children. Accounts are for adults who can
        enter into a contract. Children may of course travel as passengers with a
        responsible adult who made the booking.
      </p>
    ),
  },
  {
    id: "contact",
    heading: "Changes and contact",
    content: (
      <>
        <p>
          If this policy changes materially we will notify you in the app or by
          message, and update the date at the top of this page.
        </p>
        <p>
          Privacy questions go to{" "}
          <SiteLink
            href={`mailto:${siteConfig.privacyEmail}`}
            className={linkClass}
          >
            {siteConfig.privacyEmail}
          </SiteLink>
          ; anything else can go through the{" "}
          <SiteLink href={routes.contact} className={linkClass}>
            contact page
          </SiteLink>
          .
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Privacy Policy", path: routes.privacy }]),
          webPageSchema({
            type: "WebPage",
            name: "Privacy Policy",
            description: "What personal data GariGhora collects, why we collect it, who sees it, how long we keep it, and how to ask for a copy or a deletion.",
            path: routes.privacy,
          }),
        ]}
      />
      <PageHero
        breadcrumb="Privacy Policy"
        eyebrow={`Last updated ${siteConfig.legalLastUpdated}`}
        title="Privacy Policy"
        description="What we collect, why we need it, and what you can ask us to do with it."
      />

      <LegalBody
        currentHref={routes.privacy}
        summary={
          <>
            We collect what a trip needs: your phone number and name, the details
            of the journey, and — for drivers — the documents that prove they can
            legally carry you. Driver location is used while a trip is running,
            not around the clock. We do not sell your data.
          </>
        }
        sections={sections}
      />
    </>
  );
}
