import type { LegalSection } from "@/components/landing/legal";
import { SiteLink } from "@/components/landing/site-link";
import { common } from "@/lib/i18n/content/en/common";
import { siteConfig } from "@/lib/site-config";

const { routes } = common;

const linkClass =
  "font-medium text-brand-primary-700 underline underline-offset-4 dark:text-brand-primary-300";

/**
 * The long-form policy pages.
 *
 * These stay as JSX rather than plain strings because the text is threaded with
 * cross-links between the policies, and splitting a sentence into `before` /
 * `after` fragments around every link would make the copy unreadable to edit.
 *
 * TODO: these policies are working drafts describing how the MVP actually
 * operates. Have counsel review them (and remove the draft notice) before
 * launch.
 */
export const legal = {
  /** Shown in the page hero of every policy. */
  lastUpdated: "1 September 2026",
  lastUpdatedLabel: (date: string) => `Last updated ${date}`,

  /** Shared furniture rendered by `LegalBody`. */
  chrome: {
    inShort: "In short: ",
    otherPolicies: "Other policies",
    draftNotice: {
      before: `This document is a working draft describing how ${siteConfig.name} operates today. It is pending legal review and may change before launch. Questions? Write to `,
      after: ".",
    },
    /**
     * The Bangla build carries a clause saying the English text governs, with a
     * link across to this page. There is nothing to say on the English page
     * itself, so it stays null.
     */
    authoritativeLanguage: null as {
      text: string;
      linkLabel: string;
    } | null,
  },

  terms: {
    hero: {
      breadcrumb: "Terms of Service",
      title: "Terms of Service",
      description:
        "What you can expect from GariGhora, and what we expect from you, when you book a car or offer one.",
    },
    summary: (
      <>
        We connect passengers with independent drivers. The fare is agreed in the
        app and paid in cash to the driver after the trip. We verify drivers,
        record every booking, and support the trip — but the driving itself is
        done by the driver, not by us.
      </>
    ),
    sections: [
      {
        id: "who-we-are",
        heading: "Who we are and what this covers",
        content: (
          <>
            <p>
              {siteConfig.name} operates a marketplace that connects passengers
              who need a car with drivers who have one. These terms apply to the
              website, the passenger app and the driver app.
            </p>
            <p>
              By creating an account or booking a trip, you agree to these terms.
              If you drive on the platform, the{" "}
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
              {siteConfig.name} does not own vehicles and does not employ
              drivers. Drivers on the platform are independent operators who
              provide the transport themselves. What we provide is the platform
              that matches you, records the agreed fare, and supports the booking
              while it runs.
            </p>
            <p>
              This means the transport contract for a trip is between the
              passenger and the driver. We verify drivers before they can accept
              trips and we assign an operations agent to bookings, but we are not
              the carrier.
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
              password. You are responsible for keeping access to that number and
              for activity on your account.
            </p>
            <ul>
              <li>
                You must be legally able to enter into a contract to use the
                platform.
              </li>
              <li>Give accurate information, and keep it current.</li>
              <li>
                One account per person. Do not book on behalf of someone else
                without telling us who is travelling.
              </li>
              <li>
                We may suspend or close an account that is used fraudulently,
                abusively or in breach of these terms.
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
              A booking is created when a passenger accepts a driver&apos;s
              offer, or a driver accepts a passenger&apos;s request. Offers and
              counter-offers happen inside the app and are limited to a small
              number of rounds.
            </p>
            <ul>
              <li>
                <strong>The fare is fixed on acceptance.</strong> Neither side
                may change it afterwards without agreement recorded through the
                platform.
              </li>
              <li>
                <strong>Bookings are for the whole vehicle.</strong> We do not
                sell individual seats, and a driver may not add other passengers
                to your trip.
              </li>
              <li>
                <strong>Offers can expire.</strong> An offer that is not accepted
                within its window lapses, and the trip stays open to others.
              </li>
              <li>
                Only one accepted offer can exist for a trip. The platform
                prevents conflicting acceptances.
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
                Payment is made directly to the driver, in cash, after the trip
                is completed.
              </strong>{" "}
              {siteConfig.name} does not process passenger payments and does not
              hold your money. There is no deposit and no advance payment.
            </p>
            <p>
              The amount payable is the fare agreed in the app. If a trip
              genuinely changes — a different drop-off, a wait you asked for —
              raise it with the operations agent on your booking so the change is
              recorded rather than settled informally.
            </p>
            <p>
              Drivers owe {siteConfig.name} a commission on completed trips. That
              is a matter between the driver and us and is never added to the
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
              Either side can cancel a booking, and every cancellation records
              who cancelled, when and why. Because no money changes hands before
              a trip, a cancellation does not leave anyone chasing a refund.
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
              <li>
                Ask for or offer a fare outside the platform in order to avoid
                commission.
              </li>
              <li>Harass, threaten or discriminate against anyone on a trip.</li>
              <li>Carry anything illegal, or ask a driver to.</li>
              <li>Post fake reviews, fake requests or fake trips.</li>
              <li>Use another person&apos;s account or documents.</li>
              <li>
                Interfere with the platform, or try to access data that is not
                yours.
              </li>
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
              After a completed trip, each side may leave one rating and an
              optional comment. Cancelled trips cannot be reviewed.
            </p>
            <p>
              We may remove a review that is abusive, contains personal
              information, or is not about the trip it is attached to. We do not
              remove a review simply because it is unflattering.
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
              liable for the driving itself, for the condition of a vehicle, or
              for loss or damage arising during a trip, except where the law says
              otherwise.
            </p>
            <p>
              We do not guarantee that a matching driver, vehicle or return trip
              will be available on any given route or date, or that the platform
              will be free of interruption.
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
              We may update these terms as the service changes. Material changes
              will be notified in the app or by message to your registered
              number, and the date at the top of this page will change.
            </p>
            <p>
              Continuing to use the platform after an update means you accept it.
            </p>
          </>
        ),
      },
      {
        id: "law",
        heading: "Governing law and contact",
        content: (
          <>
            <p>
              These terms are governed by the laws of Bangladesh, and the courts
              of Bangladesh have jurisdiction over any dispute.
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
    ] as LegalSection[],
  },

  privacy: {
    hero: {
      breadcrumb: "Privacy Policy",
      title: "Privacy Policy",
      description:
        "What we collect, why we need it, and what you can ask us to do with it.",
    },
    summary: (
      <>
        We collect what a trip needs: your phone number and name, the details of
        the journey, and — for drivers — the documents that prove they can
        legally carry you. Driver location is used while a trip is running, not
        around the clock. We do not sell your data.
      </>
    ),
    sections: [
      {
        id: "scope",
        heading: "What this policy covers",
        content: (
          <>
            <p>
              This policy explains how {siteConfig.name} handles personal data
              across the website, the passenger app and the driver app.
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
                <strong>Phone number</strong> — the account identifier, verified
                by one-time password.
              </li>
              <li>
                <strong>Name and profile photo</strong> — so the person you are
                meeting knows who to look for.
              </li>
              <li>
                <strong>Email and address</strong> — optional for passengers.
              </li>
              <li>
                <strong>Trip data</strong> — routes, dates, times, notes on a
                booking, offers, bookings, trips, cancellations and ratings.
              </li>
              <li>
                <strong>Support history</strong> — what you reported and what we
                did about it, including notes made by the operations agent on
                your booking.
              </li>
              <li>
                <strong>Device and usage data</strong> — app version, device type
                and basic diagnostics, used to fix crashes and abuse.
              </li>
            </ul>

            <h3>From drivers only</h3>
            <ul>
              <li>
                <strong>NID, driving licence and vehicle registration</strong> —
                used to verify that a driver is who they say they are and that
                the vehicle is theirs.
              </li>
              <li>
                <strong>Vehicle details and photos</strong> — shown to passengers
                so they can identify the car.
              </li>
              <li>
                <strong>Earnings, commission and settlement records</strong> —
                needed to run the financial side of the platform.
              </li>
            </ul>

            <h3>Location</h3>
            <p>
              Driver location is used while a trip is active, so the passenger
              can see the car approaching and so support can help if something
              goes wrong. We do not build long-term movement histories, and we do
              not track drivers when they are not on a trip.
            </p>

            <p>
              <strong>Passengers are not asked for NID</strong> to open an
              account or make a normal booking.
            </p>
          </>
        ),
      },
      {
        id: "why",
        heading: "Why we use it",
        content: (
          <ul>
            <li>
              To create and secure your account, and to verify a driver before
              they carry anyone.
            </li>
            <li>To match trips, deliver offers and confirm bookings.</li>
            <li>
              To let an operations agent call both sides and keep the booking on
              track.
            </li>
            <li>
              To record fares, commission and settlements so cash-settled trips
              remain auditable.
            </li>
            <li>To send notifications about your bookings and trips.</li>
            <li>
              To investigate problems, fraud, abuse and safety incidents.
            </li>
            <li>
              To understand how the service is used, at an aggregate level, and
              improve it.
            </li>
          </ul>
        ),
      },
      {
        id: "sharing",
        heading: "Who sees your data",
        content: (
          <>
            <ul>
              <li>
                <strong>The other side of your trip.</strong> A passenger sees
                the driver&apos;s name, photo, rating and vehicle. A driver sees
                the passenger&apos;s name, phone number and pickup details.
                Identity documents are never shown to the other side.
              </li>
              <li>
                <strong>Our operations team.</strong> The Gari Bhai on your
                booking sees what they need to confirm and support the trip.
              </li>
              <li>
                <strong>Service providers.</strong> Hosting, messaging, mapping
                and error-monitoring providers process data on our behalf, under
                contract.
              </li>
              <li>
                <strong>Authorities.</strong> Where we are legally required to,
                or where it is necessary to investigate a serious safety
                incident.
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
              Account and trip records are kept while your account is active.
              Booking, trip and financial records are kept afterwards for as long
              as we need them for accounting, dispute resolution and legal
              obligations.
            </p>
            <p>
              Verification documents are kept while a driver is active on the
              platform and for a limited period afterwards. Active-trip location
              data is kept only as long as it is useful for supporting and
              resolving trips.
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
              <li>
                Ask us to correct anything that is wrong — most of it you can
                edit in the app.
              </li>
              <li>
                Ask us to delete your account and the data we are not legally
                required to keep.
              </li>
              <li>Turn off non-essential notifications in the app.</li>
              <li>
                Withdraw location permission in your device settings, accepting
                that active-trip features will not work.
              </li>
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
              Access to personal data is limited to staff who need it for their
              role, and access to financial and verification records is more
              tightly restricted still. Important actions are recorded in an
              audit trail.
            </p>
            <p>
              No system is perfectly secure. If a breach affects you, we will
              tell you and the relevant authority as required.
            </p>
          </>
        ),
      },
      {
        id: "children",
        heading: "Children",
        content: (
          <p>
            The platform is not intended for children. Accounts are for adults
            who can enter into a contract. Children may of course travel as
            passengers with a responsible adult who made the booking.
          </p>
        ),
      },
      {
        id: "contact",
        heading: "Changes and contact",
        content: (
          <>
            <p>
              If this policy changes materially we will notify you in the app or
              by message, and update the date at the top of this page.
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
    ] as LegalSection[],
  },

  cancellation: {
    hero: {
      breadcrumb: "Cancellation Policy",
      title: "Cancellation Policy",
      description:
        "Plans change. Here is what happens when they do — and why nobody ends up out of pocket.",
    },
    summary: (
      <>
        Either side can cancel, and there is no cancellation fee in this version
        — you have not paid anything yet. Cancel as early as you can, give a
        reason, and call support if pickup is close. Repeat late cancellations
        and no-shows count against an account.
      </>
    ),
    sections: [
      {
        id: "no-money",
        heading: "Nothing is paid up front",
        content: (
          <>
            <p>
              Because passengers pay drivers in cash after a trip, cancelling a
              booking does not involve a refund. There is no deposit to lose and
              no money to claw back — which is why this policy is short.
            </p>
            <p>
              What a cancellation does affect is the other person&apos;s plans,
              so we record every one and expect both sides to cancel early rather
              than late.
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
              You can cancel a booking from the app up until the trip starts. You
              will be asked for a reason, which is stored with the booking.
            </p>
            <ul>
              <li>
                <strong>Well before pickup</strong> — cancel in the app. The
                driver is notified straight away and can take other work.
              </li>
              <li>
                <strong>Close to pickup</strong> — cancel in the app and call the
                support line, so the Gari Bhai can reach the driver directly if
                they are already on the way.
              </li>
              <li>
                <strong>
                  No cancellation fee is charged in this version.
                </strong>{" "}
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
              cannot run the trip — a breakdown, illness, a document problem —
              and do it as early as you can.
            </p>
            <ul>
              <li>
                Cancel in the app with the reason, and call operations if pickup
                is close.
              </li>
              <li>
                The operations team will try to find the passenger another car on
                the same route.
              </li>
              <li>
                Cancellation rate is part of your standing on the platform. A
                pattern of late cancellations or no-shows can suspend your access
                to bookings.
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
              If one side does not appear at the agreed pickup point, the other
              should call the support line rather than simply leaving. The Gari
              Bhai on the booking will try to reach both parties before the trip
              is marked as a no-show.
            </p>
            <p>
              A no-show is recorded against the account responsible for it, and
              is treated more seriously than an early cancellation.
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
              <li>
                A driver&apos;s verification has lapsed or a document problem is
                found.
              </li>
              <li>We believe a booking is fraudulent or duplicated.</li>
              <li>A safety concern is raised about either party.</li>
              <li>
                A driver has exceeded the outstanding commission limit and is not
                eligible to take trips.
              </li>
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
              A different pickup time, an extra stop or a changed drop-off does
              not always need a cancellation. Speak to the Gari Bhai on your
              booking: if both sides agree, the change — and any change to the
              fare — is recorded against the booking.
            </p>
            <p>
              Do not agree a new fare informally at the roadside. If it is not in
              the app, it is not on record, and we cannot help if it is disputed
              later.
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
              platform grows — for example, fees for very late cancellations. Any
              such change will be announced in the app before it takes effect and
              reflected here.
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
    ] as LegalSection[],
  },

  driverAgreement: {
    hero: {
      breadcrumb: "Driver Agreement",
      title: "Driver Agreement",
      description:
        "What you agree to when you drive on GariGhora — and what we owe you in return.",
    },
    summary: (
      <>
        You drive as an independent operator, set your own fares, and collect
        cash from the passenger after each trip. In return you keep your
        documents current, run trips through the app, and settle the
        platform&apos;s commission — which is capped, so it never builds up into
        a debt you cannot clear.
      </>
    ),
    sections: [
      {
        id: "relationship",
        heading: "You are an independent operator",
        content: (
          <>
            <p>
              Driving on {siteConfig.name} does not make you our employee, agent
              or partner. You provide transport services on your own account,
              using your own vehicle, and you decide which trips to take and what
              to charge for them.
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
              <li>
                A valid driving licence covering the vehicle you intend to drive.
              </li>
              <li>Registration papers for that vehicle.</li>
            </ul>
            <p>
              You must keep these current. If a licence expires, a vehicle
              changes hands, or the details on your account stop matching
              reality, tell us — driving on lapsed documents can suspend your
              account and may affect any insurance you rely on.
            </p>
          </>
        ),
      },
      {
        id: "vehicle",
        heading: "Your vehicle",
        content: (
          <ul>
            <li>
              Keep the vehicle roadworthy, clean, and legally taxed and insured.
            </li>
            <li>
              Only carry passengers in a vehicle that is listed on your profile
              and verified. If you switch cars, switch it in the app first.
            </li>
            <li>
              The vehicle that arrives must be the vehicle in the booking. If it
              cannot be, cancel and tell operations rather than turning up in
              something else.
            </li>
          </ul>
        ),
      },
      {
        id: "trips",
        heading: "Offers, bookings and running trips",
        content: (
          <ul>
            <li>
              <strong>You set the fare.</strong> Offers are yours to make, and
              you can decline any request without giving a reason.
            </li>
            <li>
              <strong>An accepted offer is a commitment.</strong> Once a
              passenger accepts, the fare is fixed and the trip is yours to run.
            </li>
            <li>
              <strong>Full vehicle only.</strong> Do not add other passengers to
              a booked trip, and do not sell seats in a vehicle someone has
              booked.
            </li>
            <li>
              <strong>Keep the trip in the app.</strong> Start it and complete it
              in the app, so the record matches what actually happened.
            </li>
            <li>
              <strong>Share location while a trip is active</strong>, so the
              passenger and the operations team can see the vehicle en route.
            </li>
          </ul>
        ),
      },
      {
        id: "payment",
        heading: "Getting paid",
        content: (
          <>
            <p>
              The passenger pays you directly, in cash, after the trip is
              complete. {siteConfig.name} does not hold or forward your fares, so
              there is no payout delay.
            </p>
            <p>
              Do not ask for payment before a trip, and do not ask for more than
              the agreed fare at the end of one. If circumstances genuinely
              changed, raise it with the operations agent on the booking so the
              change is recorded.
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
              against the trip in your app. It is never added to what the
              passenger pays.
            </p>
            <p>
              <strong>Unsettled commission is capped.</strong> You may carry a
              small number of completed trips with commission outstanding. Once
              you pass that limit, your account cannot accept new trips until you
              settle. The limit is enforced by the platform, not by the app on
              your phone.
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
              Submit the payment details in the app. Once operations verify it,
              the commission is marked settled and your account is unblocked.
              Keep your reference numbers until a settlement shows as verified.
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
              Your rating, cancellation rate, no-shows and reported incidents
              together make up your standing on the platform. We may suspend or
              close an account for:
            </p>
            <ul>
              <li>Taking payment outside the platform to avoid commission.</li>
              <li>
                Asking for more than the agreed fare at the end of a trip.
              </li>
              <li>Repeated late cancellations or no-shows.</li>
              <li>
                Unsafe driving, or behaviour that makes a passenger feel unsafe.
              </li>
              <li>Letting someone else drive on your verified account.</li>
              <li>Falsified documents, fake trips or fake reviews.</li>
            </ul>
            <p>
              Where an account is suspended, we will tell you why, and you can
              respond through the{" "}
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
              You can stop taking trips at any time. Before an account can be
              closed, any outstanding commission must be settled and any
              confirmed bookings must be completed or properly cancelled.
            </p>
            <p>
              Trip and financial records are kept after closure for accounting
              and dispute purposes — see the{" "}
              <SiteLink href={routes.privacy} className={linkClass}>
                Privacy Policy
              </SiteLink>
              .
            </p>
          </>
        ),
      },
    ] as LegalSection[],
  },
};
