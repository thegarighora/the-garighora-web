import {
  Building2,
  Code2,
  Headset,
  Mail,
  MapPin,
  Megaphone,
  Rocket,
  Users,
} from "lucide-react";
import { CalloutBand, FeatureGrid, InfoCard } from "@/components/landing/blocks";
import { CtaLink } from "@/components/landing/cta-link";
import { PageHero } from "@/components/landing/page-hero";
import { Section, SectionHeading } from "@/components/landing/section";
import { SiteLink } from "@/components/landing/site-link";
import { links, routes, siteConfig } from "@/lib/site-config";
import { JsonLd } from "@/components/seo/json-ld";
import { keywordGroups, pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "Careers",
  description:
    "Build the marketplace that stops cars driving home empty. Open roles at GariGhora in engineering, operations and growth — plus how to apply speculatively.",
  path: routes.careers,
  keywords: [...keywordGroups.brand, "jobs at GariGhora", "startup jobs Dhaka"],
});

const whyJoin = [
  {
    icon: Rocket,
    title: "Early enough to shape it",
    body: "The platform is at MVP. What you build in the first year becomes how the product works.",
    feature: true,
  },
  {
    icon: MapPin,
    title: "A local problem, not a copy",
    body: "Empty return legs are a specific inefficiency on Bangladeshi roads. This is not a template business dropped into a new market.",
  },
  {
    icon: Users,
    title: "Close to the users",
    body: "Operations talk to drivers and passengers every single day, and that feedback reaches the product in days, not quarters.",
  },
  {
    icon: Building2,
    title: "Small team, real ownership",
    body: "No layers to route work through. You own an area and you see it live.",
  },
];

/**
 * SAMPLE DATA: placeholder openings so the page has structure.
 * TODO: replace with the real roles (and real application links) before launch,
 * or set `openRoles` to an empty array to show the "no openings" state.
 */
const openRoles = [
  {
    icon: Code2,
    title: "Backend Engineer (NestJS)",
    team: "Engineering",
    location: "Dhaka · On-site",
    type: "Full-time",
    body: "Own booking, offer and trip state machines, plus the commission ledger that keeps cash-settled trips auditable.",
  },
  {
    icon: Code2,
    title: "Mobile Engineer (React Native)",
    team: "Engineering",
    location: "Dhaka · Hybrid",
    type: "Full-time",
    body: "Build the passenger and driver apps — search, offers, active trips and everything a driver touches on the road.",
  },
  {
    icon: Headset,
    title: "Gari Bhai — Operations Agent",
    team: "Operations",
    location: "Dhaka · On-site",
    type: "Full-time",
    body: "Call passengers and drivers, confirm bookings, monitor active trips and sort out problems before they become complaints.",
  },
  {
    icon: Megaphone,
    title: "Driver Growth Executive",
    team: "Growth",
    location: "Dhaka & Cumilla · Field",
    type: "Full-time",
    body: "Bring drivers onto the platform on the routes that matter, and keep them posting return trips after the first one.",
  },
];

export default function CareersPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Careers", path: routes.careers }]),
          // Deliberately no JobPosting markup: the listings are placeholders, and
          // marking up roles that are not genuinely open invites a manual action.
          webPageSchema({
            type: "CollectionPage",
            name: "Careers at GariGhora",
            description:
              "Open roles in engineering, operations and growth at GariGhora in Dhaka.",
            path: routes.careers,
          }),
        ]}
      />
      <PageHero
        breadcrumb="Careers"
        eyebrow="Careers"
        title="Help us stop cars driving home empty"
        description="We are a small team in Dhaka building a two-sided marketplace for intercity car travel — and looking for people who want the problem more than the title."
      >
        <CtaLink href={`mailto:${siteConfig.careersEmail}`} tone="onDark">
          <Mail aria-hidden="true" />
          Send us your CV
        </CtaLink>
      </PageHero>

      <Section aria-labelledby="why-join-heading">
        <SectionHeading
          id="why-join-heading"
          eyebrow="Why here"
          title="What working on this is like"
        />
        <FeatureGrid className="mt-6" items={whyJoin} columns={4} />
      </Section>

      <Section tone="surface" aria-labelledby="roles-heading">
        <SectionHeading
          id="roles-heading"
          eyebrow="Open roles"
          title="Where we need people right now"
          description="Sample openings while we finalise hiring — if one is close to what you do, write to us anyway."
        />

        <ul className="mx-auto mt-6 flex max-w-4xl flex-col gap-4">
          {openRoles.map((role) => (
            <li
              key={role.title}
              className="flex flex-col gap-4 rounded-2xl border border-brand-hairline bg-brand-surface-raised p-6 shadow-brand-sm sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-primary-50 text-brand-primary-700 dark:bg-brand-surface dark:text-brand-primary-300">
                  <role.icon aria-hidden="true" className="size-5" />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base font-semibold tracking-tight text-brand-ink sm:text-lg">
                    {role.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-brand-ink-muted">
                    {role.body}
                  </p>
                  <ul className="mt-1 flex flex-wrap gap-2">
                    {[role.team, role.location, role.type].map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-brand-surface px-2.5 py-0.5 text-xs font-medium text-brand-ink-muted ring-1 ring-brand-hairline dark:bg-brand-surface"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <CtaLink
                href={`mailto:${siteConfig.careersEmail}?subject=${encodeURIComponent(
                  `Application: ${role.title}`
                )}`}
                tone="outline"
                size="sm"
                className="sm:w-auto"
              >
                Apply
              </CtaLink>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-center text-xs text-brand-ink-muted">
          Sample listings for layout — final roles and application links are
          being confirmed.
        </p>
      </Section>

      <Section aria-labelledby="apply-heading">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            id="apply-heading"
            eyebrow="How to apply"
            title="One email is enough"
            description="No forms, no portal, no fifteen-field application."
          />
          <InfoCard className="mt-5" title="What to send" icon={Mail}>
            <ul className="flex list-disc flex-col gap-2 pl-5 marker:text-brand-primary-400">
              <li>Your CV, or a link to something you have built or run.</li>
              <li>The role you are after — or the role you think we are missing.</li>
              <li>
                A couple of lines on why this problem interests you. That part we
                actually read.
              </li>
            </ul>
            <p className="mt-4">
              Send it to{" "}
              <SiteLink
                href={`mailto:${siteConfig.careersEmail}`}
                className="font-medium text-brand-primary-700 underline underline-offset-4 dark:text-brand-primary-300"
              >
                {siteConfig.careersEmail}
              </SiteLink>
              . We reply to everyone, even when the answer is no.
            </p>
          </InfoCard>
        </div>
      </Section>

      <CalloutBand
        title="Not looking for a job, just a ride?"
        description="That works too — the app does both."
        primary={{ label: "Get the App", href: links.appStore }}
        secondary={{ label: "About GariGhora", href: routes.about }}
      />
    </>
  );
}
