import type { ComponentProps } from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

/**
 * Anchor styled as a call-to-action. Mirrors the shadcn Button base (focus ring,
 * transitions, icon sizing) while taking every colour from the brand tokens in
 * app/theme.css — no literal colours live here.
 *
 * Internal destinations render through `next/link` so navigation is client-side
 * and prefetched; `tel:`, `mailto:` and external URLs fall back to a plain
 * anchor.
 */
const ctaVariants = cva(
  [
    "group/cta inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-transparent",
    "bg-clip-padding text-sm font-semibold whitespace-nowrap transition-all outline-none select-none",
    "h-11 px-5 sm:h-12 sm:px-6 sm:text-base",
    "focus-visible:ring-3 active:translate-y-px",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4.5",
  ],
  {
    variants: {
      tone: {
        /** Primary action on a light background. */
        gradient:
          "bg-gradient-cta text-brand-on-primary shadow-brand focus-visible:ring-brand-primary-400/60 hover:shadow-brand-lg",
        /** Primary action on a gradient / dark background. */
        onDark:
          "bg-brand-on-brand text-brand-primary-800 shadow-brand focus-visible:ring-brand-on-brand/60 hover:bg-brand-on-brand/90",
        /** Secondary action on a gradient / dark background. */
        ghostOnDark:
          "border-brand-on-brand/35 bg-brand-on-brand/10 text-brand-on-brand backdrop-blur-sm focus-visible:ring-brand-on-brand/60 hover:bg-brand-on-brand/20",
        /** Secondary action on a light background. */
        outline:
          "border-brand-primary-200 bg-brand-surface-raised text-brand-primary-800 shadow-brand-sm focus-visible:ring-brand-primary-400/60 hover:bg-brand-primary-50 dark:border-brand-hairline dark:bg-brand-surface dark:text-brand-ink dark:hover:bg-brand-primary-900",
      },
      size: {
        default: "",
        sm: "h-10 rounded-lg px-4 text-sm sm:h-10 sm:px-4 sm:text-sm",
      },
      block: {
        true: "w-full",
        false: "w-full sm:w-auto",
      },
    },
    defaultVariants: { tone: "gradient", size: "default", block: false },
  }
);

type CtaLinkProps = Omit<ComponentProps<"a">, "href"> &
  VariantProps<typeof ctaVariants> & { href: string };

export function CtaLink({
  className,
  tone,
  size,
  block,
  href,
  ...props
}: CtaLinkProps) {
  const classes = cn(ctaVariants({ tone, size, block }), className);

  if (isInternal(href)) {
    return <Link href={href} className={classes} {...props} />;
  }

  return <a href={href} className={classes} {...props} />;
}

/** In-app routes and same-page anchors go through the router; the rest do not. */
export function isInternal(href: string) {
  return href.startsWith("/") || href.startsWith("#");
}

export { ctaVariants };
