import { common } from "@/lib/i18n/content/en/common";

/**
 * The 404 copy lives in its own module, separate from the rest of the page
 * content, because `app/[locale]/not-found.tsx` is a client component and
 * importing `pages.ts` there would pull every icon and every page's copy into
 * a client bundle. This file and `common.ts` are plain strings.
 */
export const notFound = {
  code: "404",
  title: "This road does not go anywhere",
  description:
    "The page you were looking for has moved or never existed. The routes below definitely work.",
  home: { label: "Back to home", href: common.routes.home },
  support: { label: "Contact support", href: common.routes.contact },
};
