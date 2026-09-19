"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "cn";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/landing/brand-logo";
import { CtaLink } from "@/components/landing/cta-link";
import { links, navLinks, routes } from "@/lib/site-config";

/**
 * Sticky navbar, shared by every page through the root layout. It sits
 * transparent over the gradient band that opens each page, then turns solid
 * once the page scrolls.
 *
 * The mobile menu is a plain disclosure: keyboard focusable, `aria-expanded` /
 * `aria-controls` wired up, and closable with Escape.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Once scrolled (or with the mobile panel open) the bar is opaque, so links
  // switch from "on gradient" to normal ink colours.
  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid
          ? "border-b border-brand-hairline bg-brand-surface-raised/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-6 lg:h-18 lg:px-8">
        <Link
          href={routes.home}
          className="rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          aria-label="GariGhora home"
        >
          <BrandLogo invert={!solid} />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "inline-flex h-9 items-center rounded-lg px-3 text-sm font-medium transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
                      solid
                        ? "text-brand-ink-muted hover:bg-brand-primary-50 hover:text-brand-primary-800 aria-[current=page]:bg-brand-primary-50 aria-[current=page]:text-brand-primary-800 dark:hover:bg-brand-surface dark:aria-[current=page]:bg-brand-surface"
                        : "text-brand-on-brand/85 hover:bg-brand-on-brand/10 hover:text-brand-on-brand aria-[current=page]:bg-brand-on-brand/15 aria-[current=page]:text-brand-on-brand"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <CtaLink
            href={links.driverSignup}
            tone={solid ? "outline" : "ghostOnDark"}
            size="sm"
          >
            Become a Driver
          </CtaLink>
          <CtaLink
            href={links.appStore}
            tone={solid ? "gradient" : "onDark"}
            size="sm"
          >
            Get the App
          </CtaLink>
        </div>

        <Button
          type="button"
          variant="ghost"
          size="icon-lg"
          className={cn(
            "lg:hidden",
            solid
              ? "text-brand-ink"
              : "text-brand-on-brand hover:bg-brand-on-brand/15 hover:text-brand-on-brand"
          )}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-brand-hairline bg-brand-surface-raised px-5 pt-2 pb-6 sm:px-6 lg:hidden"
      >
        <nav aria-label="Mobile">
          <ul className="flex flex-col">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-2 py-3 text-base font-medium text-brand-ink outline-none focus-visible:ring-3 focus-visible:ring-ring/50 aria-[current=page]:text-brand-primary-700 hover:bg-brand-primary-50 dark:aria-[current=page]:text-brand-primary-300 dark:hover:bg-brand-surface"
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="mt-4 flex flex-col gap-2">
          <CtaLink
            href={links.driverSignup}
            tone="outline"
            block
            onClick={() => setOpen(false)}
          >
            Become a Driver
          </CtaLink>
          <CtaLink
            href={links.appStore}
            tone="gradient"
            block
            onClick={() => setOpen(false)}
          >
            Get the App
          </CtaLink>
        </div>
      </div>
    </header>
  );
}
