import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { BrandLogo } from "@/components/landing/brand-logo";
import { SiteLink } from "@/components/landing/site-link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/landing/social-icons";
import { footerColumns, routes, siteConfig } from "@/lib/site-config";

/**
 * Social profiles. The URLs come from site-config so they stay identical to the
 * `sameAs` list in the Organization schema — search engines use that match to
 * connect the site to its profiles.
 * TODO: confirm the handles once the accounts exist.
 */
const socials = [
  {
    label: "GariGhora on Facebook",
    icon: FacebookIcon,
    href: siteConfig.social.facebook,
  },
  {
    label: "GariGhora on Instagram",
    icon: InstagramIcon,
    href: siteConfig.social.instagram,
  },
  {
    label: "GariGhora on YouTube",
    icon: YoutubeIcon,
    href: siteConfig.social.youtube,
  },
  {
    label: "GariGhora on LinkedIn",
    icon: LinkedinIcon,
    href: siteConfig.social.linkedin,
  },
];

const linkClass =
  "text-sm text-brand-ink-muted hover:text-brand-primary-700 dark:hover:text-brand-primary-300";

export function Footer() {
  return (
    <footer className="border-t border-brand-hairline bg-brand-surface">
      <div className="mx-auto w-full max-w-6xl px-5 py-section sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr] lg:gap-16">
          <div className="flex flex-col gap-4">
            <Link
              href={routes.home}
              className="w-fit rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              aria-label="GariGhora home"
            >
              <BrandLogo />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-brand-ink-muted">
              Rental Car and Return Car in one app. A car is already going that
              way — don&apos;t pay for an empty seat to come back empty.
            </p>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <SiteLink
                  href={`tel:${siteConfig.supportPhone.replace(/\s|-/g, "")}`}
                  className={`inline-flex items-center gap-2 ${linkClass}`}
                >
                  <Phone aria-hidden="true" className="size-4" />
                  {siteConfig.supportPhone}
                </SiteLink>
              </li>
              <li>
                <SiteLink
                  href={`mailto:${siteConfig.supportEmail}`}
                  className={`inline-flex items-center gap-2 ${linkClass}`}
                >
                  <Mail aria-hidden="true" className="size-4" />
                  {siteConfig.supportEmail}
                </SiteLink>
              </li>
              <li className="inline-flex items-center gap-2 text-sm text-brand-ink-muted">
                <MapPin aria-hidden="true" className="size-4" />
                {siteConfig.address}
              </li>
            </ul>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-8 sm:grid-cols-4"
          >
            {footerColumns.map((column) => (
              <div key={column.heading} className="flex flex-col gap-3">
                <h2 className="text-xs font-semibold tracking-[0.16em] text-brand-ink uppercase">
                  {column.heading}
                </h2>
                <ul className="flex flex-col gap-2">
                  {column.items.map((item) => (
                    <li key={item.label}>
                      <SiteLink href={item.href} className={linkClass}>
                        {item.label}
                      </SiteLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-6 flex flex-col-reverse items-center gap-6 border-t border-brand-hairline pt-4 sm:flex-row sm:justify-between">
          <p className="text-center text-xs text-brand-ink-muted sm:text-left">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            <span className="mt-1 block">
              Fares shown across this site are sample figures. Payment is
              collected after the trip is completed.
            </span>
          </p>

          <ul className="flex items-center gap-2">
            {socials.map((social) => (
              <li key={social.label}>
                <SiteLink
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="grid size-9 place-items-center rounded-lg border border-brand-hairline bg-brand-surface-raised text-brand-ink-muted transition-colors hover:text-brand-primary-700 dark:hover:text-brand-primary-300"
                >
                  <social.icon className="size-4" />
                </SiteLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
