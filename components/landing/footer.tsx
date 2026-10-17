import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { BrandLogo } from "@/components/landing/brand-logo";
import {
  SupportEmailLink,
  SupportPhoneLink,
} from "@/components/landing/contact-links";
import { SiteLink } from "@/components/landing/site-link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/landing/social-icons";
import type { Content } from "@/lib/i18n";
import { localeDigits } from "@/lib/i18n/numerals";
import { getSiteSettings } from "@/lib/site-settings";

const linkClass =
  "text-sm text-brand-ink-muted hover:text-brand-primary-700 dark:hover:text-brand-primary-300";

/**
 * The company details here — blurb, contacts, address, disclaimer and social
 * links — are edited by an administrator in the admin panel and read through
 * lib/site-settings. The link columns stay in code, because each one is a page
 * that exists in this site.
 */
export async function Footer({ t }: { t: Content }) {
  const { footer, a11y, routes } = t.common;
  const site = await getSiteSettings();

  /**
   * Social profiles. The same values feed the `sameAs` list in the
   * Organization schema, so search engines can connect the site to its
   * profiles. One an administrator has emptied is left out entirely.
   */
  const socials = [
    {
      label: footer.social.facebook,
      icon: FacebookIcon,
      href: site.social.facebook,
    },
    {
      label: footer.social.instagram,
      icon: InstagramIcon,
      href: site.social.instagram,
    },
    {
      label: footer.social.youtube,
      icon: YoutubeIcon,
      href: site.social.youtube,
    },
    {
      label: footer.social.linkedin,
      icon: LinkedinIcon,
      href: site.social.linkedin,
    },
  ].flatMap(({ href, ...social }) => (href ? [{ ...social, href }] : []));

  const year = localeDigits(t.locale, String(new Date().getFullYear()));

  return (
    <footer className="border-t border-brand-hairline bg-brand-surface">
      <div className="mx-auto w-full max-w-6xl px-5 py-section sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr] lg:gap-16">
          <div className="flex flex-col gap-4">
            <Link
              href={routes.home}
              className="w-fit rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              aria-label={a11y.homeLink}
            >
              <BrandLogo />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-brand-ink-muted">
              {site.blurb[t.locale]}
            </p>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <SupportPhoneLink
                  locale={t.locale}
                  className={`inline-flex items-center gap-2 ${linkClass}`}
                >
                  <Phone aria-hidden="true" className="size-4" />
                </SupportPhoneLink>
              </li>
              <li>
                <SupportEmailLink
                  className={`inline-flex items-center gap-2 ${linkClass}`}
                >
                  <Mail aria-hidden="true" className="size-4" />
                </SupportEmailLink>
              </li>
              <li className="inline-flex items-center gap-2 text-sm text-brand-ink-muted">
                <MapPin aria-hidden="true" className="size-4" />
                {site.address[t.locale]}
              </li>
            </ul>
          </div>

          <nav
            aria-label={a11y.footerNav}
            className="grid grid-cols-2 gap-8 sm:grid-cols-4"
          >
            {footer.columns.map((column) => (
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
            {footer.rights(year)}
            <span className="mt-1 block">{site.disclaimer[t.locale]}</span>
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
