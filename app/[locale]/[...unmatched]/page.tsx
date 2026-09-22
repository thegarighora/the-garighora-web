import { notFound } from "next/navigation";

/**
 * Catch-all that exists purely to produce a styled 404.
 *
 * Without it a URL matching no route never enters the `[locale]` segment, and
 * since the site's root layout lives there, Next has no layout to render
 * `not-found.tsx` inside and answers with its own bare shell. Matching here and
 * immediately calling `notFound()` puts the 404 back inside the site chrome —
 * navbar, footer, fonts and all — while still returning a 404 status.
 */
export default function UnmatchedRoute(): never {
  notFound();
}
