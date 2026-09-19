import { LegalBody, type LegalSection } from "@/components/landing/legal";
import { PageHero } from "@/components/landing/page-hero";
import { SiteLink } from "@/components/landing/site-link";
import { routes, siteConfig } from "@/lib/site-config";
import { JsonLd } from "@/components/seo/json-ld";
import { keywordGroups, pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "Cancellation Policy",
  description:
    "How cancellations work on GariGhora: who can cancel, what gets recorded, and why nobody ends up out of pocket — you only ever pay after the trip.",
  path: routes.cancellation,
  keywords: [...keywordGroups.brand, "GariGhora cancellation policy"],
  type: "article",
});

const linkClass =
  "font-medium text-brand-primary-700 underline underline-offset-4 dark:text-brand-primary-300";

const sections: LegalSection[] = [
  {
    id: "no-money",
    heading: "Nothing is paid up front",
    content: (
      <>
        <p>
          Because passengers pay drivers in cash after a trip, cancelling a
          booking does not involve a refund. There is no deposit to lose and no
          money to claw back — which is why this policy is short.
        </p>
        <p>
          What a cancellation does affect is the other person&apos;s plans, so we
          record every one and expect both sides to cancel early rather than
          late.
        </p>
      </>
    ),
  },
  {
    id: "passenger",
    heading: "If you are the passenger",
    content: (
      <>
        <p>
          You can cancel a booking from the app up until the trip starts. You will
          be asked for a reason, which is stored with the booking.
        </p>
        <ul>
          <li>
            <strong>Well before pickup</strong> — cancel in the app. The driver is
            notified straight away and can take other work.
          </li>
          <li>
            <strong>Close to pickup</strong> — cancel in the app and call the
            support line, so the Gari Bhai can reach the driver directly if they
            are already on the way.
          </li>
          <li>
            <strong>No cancellation fee is charged in this version.</strong>{" "}
            Repeated late cancellations do count against your account.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "driver",
    heading: "If you are the driver",
    content: (
      <>
        <p>
          A confirmed booking is a commitment. Cancel only when you genuinely
          cannot run the trip — a breakdown, illness, a document problem — and do
          it as early as you can.
        </p>
        <ul>
          <li>Cancel in the app with the reason, and call operations if pickup is close.</li>
          <li>The operations team will try to find the passenger another car on the same route.</li>
          <li>
            Cancellation rate is part of your standing on the platform. A pattern
            of late cancellations or no-shows can suspend your access to bookings.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "no-show",
    heading: "No-shows and waiting",
    content: (
      <>
        <p>
          If one side does not appear at the agreed pickup point, the other should
          call the support line rather than simply leaving. The Gari Bhai on the
          booking will try to reach both parties before the trip is marked as a
          no-show.
        </p>
        <p>
          A no-show is recorded against the account responsible for it, and is
          treated more seriously than an early cancellation.
        </p>
      </>
    ),
  },
  {
    id: "we-cancel",
    heading: "When we cancel a booking",
    content: (
      <>
        <p>{siteConfig.name} may cancel a booking where:</p>
        <ul>
          <li>A driver&apos;s verification has lapsed or a document problem is found.</li>
          <li>We believe a booking is fraudulent or duplicated.</li>
          <li>A safety concern is raised about either party.</li>
          <li>A driver has exceeded the outstanding commission limit and is not eligible to take trips.</li>
        </ul>
        <p>
          Where we cancel, we tell both sides why, and we try to find the
          passenger an alternative on the same route.
        </p>
      </>
    ),
  },
  {
    id: "changes-to-trip",
    heading: "Changing a trip instead of cancelling",
    content: (
      <>
        <p>
          A different pickup time, an extra stop or a changed drop-off does not
          always need a cancellation. Speak to the Gari Bhai on your booking: if
          both sides agree, the change — and any change to the fare — is recorded
          against the booking.
        </p>
        <p>
          Do not agree a new fare informally at the roadside. If it is not in the
          app, it is not on record, and we cannot help if it is disputed later.
        </p>
      </>
    ),
  },
  {
    id: "future",
    heading: "Future changes to this policy",
    content: (
      <>
        <p>
          Cancellation rules are configurable and may become stricter as the
          platform grows — for example, fees for very late cancellations. Any such
          change will be announced in the app before it takes effect and reflected
          here.
        </p>
        <p>
          Questions? See the{" "}
          <SiteLink href={routes.faq} className={linkClass}>
            FAQ
          </SiteLink>{" "}
          or the{" "}
          <SiteLink href={routes.terms} className={linkClass}>
            Terms of Service
          </SiteLink>
          .
        </p>
      </>
    ),
  },
];

export default function CancellationPolicyPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Cancellation Policy", path: routes.cancellation }]),
          webPageSchema({
            type: "WebPage",
            name: "Cancellation Policy",
            description: "How cancellations work on GariGhora: who can cancel, what gets recorded, and why nobody ends up out of pocket — you only ever pay after the trip.",
            path: routes.cancellation,
          }),
        ]}
      />
      <PageHero
        breadcrumb="Cancellation Policy"
        eyebrow={`Last updated ${siteConfig.legalLastUpdated}`}
        title="Cancellation Policy"
        description="Plans change. Here is what happens when they do — and why nobody ends up out of pocket."
      />

      <LegalBody
        currentHref={routes.cancellation}
        summary={
          <>
            Either side can cancel, and there is no cancellation fee in this
            version — you have not paid anything yet. Cancel as early as you can,
            give a reason, and call support if pickup is close. Repeat late
            cancellations and no-shows count against an account.
          </>
        }
        sections={sections}
      />
    </>
  );
}
