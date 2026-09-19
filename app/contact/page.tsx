import {
  AlertTriangle,
  Briefcase,
  CarFront,
  Clock,
  Mail,
  MapPin,
  Phone,
  ShieldQuestion,
} from "lucide-react";
import { CalloutBand, InfoCard } from "@/components/landing/blocks";
import { CtaLink } from "@/components/landing/cta-link";
import { PageHero } from "@/components/landing/page-hero";
import { Section, SectionHeading } from "@/components/landing/section";
import { SiteLink } from "@/components/landing/site-link";
import { links, routes, siteConfig } from "@/lib/site-config";
import { JsonLd } from "@/components/seo/json-ld";
import { keywordGroups, pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Reach GariGhora support by phone or email — for trips in progress, booking problems, driver questions, press and partnerships.",
  path: routes.contact,
  keywords: [...keywordGroups.brand, "GariGhora support", "contact GariGhora"],
});

const tel = `tel:${siteConfig.supportPhone.replace(/\s|-/g, "")}`;

const channels = [
  {
    icon: Phone,
    title: "Support line",
    body: "The fastest route for anything happening now — a driver who has not arrived, a trip in progress, a fare dispute at the roadside.",
    action: { label: siteConfig.supportPhone, href: tel },
  },
  {
    icon: Mail,
    title: "Email support",
    body: "Better for things with detail: a booking that went wrong, a refund question, feedback on a trip that has already finished.",
    action: { label: siteConfig.supportEmail, href: `mailto:${siteConfig.supportEmail}` },
  },
  {
    icon: CarFront,
    title: "Driver questions",
    body: "Verification, vehicles, commission settlement or getting your account unblocked after you have paid.",
    action: { label: "For Drivers", href: routes.forDrivers },
  },
  {
    icon: Briefcase,
    title: "Press & partnerships",
    body: "Media enquiries, corporate travel, or working together on a route.",
    action: { label: siteConfig.supportEmail, href: `mailto:${siteConfig.supportEmail}` },
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Contact", path: routes.contact }]),
          webPageSchema({
            type: "ContactPage",
            name: "Contact GariGhora",
            description:
              "Reach GariGhora support by phone or email for trips in progress, booking problems, driver questions, press and partnerships.",
            path: routes.contact,
          }),
        ]}
      />
      <PageHero
        breadcrumb="Contact"
        eyebrow="Contact us"
        title="A real person, on the other end of a real number"
        description="Support runs on phones, not ticket queues. If a trip is happening right now, call — do not email."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <CtaLink href={tel} tone="onDark">
            <Phone aria-hidden="true" />
            Call {siteConfig.supportPhone}
          </CtaLink>
          <CtaLink href={`mailto:${siteConfig.supportEmail}`} tone="ghostOnDark">
            <Mail aria-hidden="true" />
            Email support
          </CtaLink>
        </div>
      </PageHero>

      <Section aria-labelledby="channels-heading">
        <SectionHeading
          id="channels-heading"
          eyebrow="Ways to reach us"
          title="Pick whichever fits"
        />

        <ul className="mt-6 grid gap-5 sm:grid-cols-2">
          {channels.map((channel) => (
            <li
              key={channel.title}
              className="flex flex-col gap-3 rounded-2xl border border-brand-hairline bg-brand-surface-raised p-6 shadow-brand-sm"
            >
              <span className="grid size-11 place-items-center rounded-2xl bg-brand-primary-50 text-brand-primary-700 dark:bg-brand-surface dark:text-brand-primary-300">
                <channel.icon aria-hidden="true" className="size-5" />
              </span>
              <h3 className="text-base font-semibold tracking-tight text-brand-ink">
                {channel.title}
              </h3>
              <p className="text-sm leading-relaxed text-brand-ink-muted">
                {channel.body}
              </p>
              <SiteLink
                href={channel.action.href}
                className="mt-auto pt-2 text-sm font-semibold text-brand-primary-700 dark:text-brand-primary-300"
              >
                {channel.action.label}
              </SiteLink>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="surface" aria-labelledby="report-heading">
        <div
          id="report"
          className="scroll-mt-24 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16"
        >
          <div className="flex flex-col gap-6">
            <SectionHeading
              id="report-heading"
              align="left"
              eyebrow="Report a trip issue"
              title="Something went wrong on a trip?"
              description="Report it against the booking rather than settling it informally — that way the trip record, the driver and the agreed fare all come with the report."
            />
            <div className="flex flex-col gap-3 text-sm leading-relaxed text-brand-ink-muted sm:text-base">
              <p>
                <strong className="font-semibold text-brand-ink">
                  While the trip is running:
                </strong>{" "}
                use the support button on the active trip screen, or call the
                support line. The Gari Bhai assigned to your booking can reach
                the driver directly.
              </p>
              <p>
                <strong className="font-semibold text-brand-ink">
                  After the trip:
                </strong>{" "}
                open the booking in your history and report it from there, or
                email us with the date and route so we can find it.
              </p>
              <p>
                <strong className="font-semibold text-brand-ink">
                  In an emergency:
                </strong>{" "}
                call the emergency services first, then call us so we can act on
                the booking.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CtaLink href={tel} tone="gradient">
                <Phone aria-hidden="true" />
                Call support
              </CtaLink>
              <CtaLink href={routes.trustSafety} tone="outline">
                Trust & Safety
              </CtaLink>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <InfoCard title="When we are reachable" icon={Clock}>
              <p className="mb-2">
                <strong>Phone support:</strong> every day, including while trips
                run late into the evening.
              </p>
              <p>
                <strong>Email:</strong> answered within one working day. TODO:
                confirm final published support hours before launch.
              </p>
            </InfoCard>

            <InfoCard title="Where we are" icon={MapPin}>
              <p>
                {siteConfig.name}
                <br />
                {siteConfig.address}
              </p>
              <p className="mt-2 text-xs">
                TODO: replace with the registered office address.
              </p>
            </InfoCard>

            <InfoCard title="Privacy questions" icon={ShieldQuestion}>
              <p>
                For anything about your data — access, correction or deletion —
                write to{" "}
                <SiteLink
                  href={`mailto:${siteConfig.privacyEmail}`}
                  className="font-medium text-brand-primary-700 underline underline-offset-4 dark:text-brand-primary-300"
                >
                  {siteConfig.privacyEmail}
                </SiteLink>
                , or read the{" "}
                <SiteLink
                  href={routes.privacy}
                  className="font-medium text-brand-primary-700 underline underline-offset-4 dark:text-brand-primary-300"
                >
                  Privacy Policy
                </SiteLink>
                .
              </p>
            </InfoCard>
          </div>
        </div>
      </Section>

      <Section aria-labelledby="before-heading">
        <div className="mx-auto max-w-3xl">
          <InfoCard title="Before you call" icon={AlertTriangle} tone="highlight">
            <p className="mb-3">
              Most questions are answered on the FAQ — how fares are agreed, when
              you pay, what happens if a driver cancels, and how verification
              works.
            </p>
            <SiteLink
              href={routes.faq}
              className="font-semibold text-brand-primary-700 underline underline-offset-4 dark:text-brand-primary-300"
            >
              Read the FAQ first
            </SiteLink>
          </InfoCard>
        </div>
      </Section>

      <CalloutBand
        title="We would rather hear from you early"
        description="A small problem on the road is much easier to fix than a complaint after the trip."
        primary={{ label: "Call support", href: tel }}
        secondary={{ label: "Get the App", href: links.appStore }}
      />
    </>
  );
}
