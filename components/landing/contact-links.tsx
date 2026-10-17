import type { ReactNode } from "react";
import { SiteLink } from "@/components/landing/site-link";
import type { Locale } from "@/lib/i18n/config";
import { localeDigits } from "@/lib/i18n/numerals";
import { displayPhone, getSiteSettings, telHref } from "@/lib/site-settings";

/**
 * The company's contact details as links, read from the admin-managed site
 * settings (lib/site-settings).
 *
 * Async server components, so the static content files can place one inside a
 * sentence — `Write to <SupportEmailLink />` — without every page having to
 * fetch the settings and thread them down. The read is cached per render, so
 * ten of these on a page still cost one request.
 */

interface LinkProps {
  className?: string;
  /** Rendered before the text, e.g. an icon. */
  children?: ReactNode;
}

export async function SupportPhoneLink({
  locale,
  className,
  children,
}: LinkProps & { locale: Locale }) {
  const { supportPhone } = await getSiteSettings();

  return (
    <SiteLink href={telHref(supportPhone)} className={className}>
      {children}
      {localeDigits(locale, displayPhone(supportPhone))}
    </SiteLink>
  );
}

async function EmailLink({
  pick,
  className,
  children,
}: LinkProps & {
  pick: "supportEmail" | "careersEmail" | "privacyEmail";
}) {
  const address = (await getSiteSettings())[pick];

  return (
    <SiteLink href={`mailto:${address}`} className={className}>
      {children}
      {address}
    </SiteLink>
  );
}

export function SupportEmailLink(props: LinkProps) {
  return <EmailLink pick="supportEmail" {...props} />;
}

export function CareersEmailLink(props: LinkProps) {
  return <EmailLink pick="careersEmail" {...props} />;
}

export function PrivacyEmailLink(props: LinkProps) {
  return <EmailLink pick="privacyEmail" {...props} />;
}
