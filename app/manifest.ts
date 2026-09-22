import type { MetadataRoute } from "next";
import { getContent } from "@/lib/i18n";
import { defaultLocale, localeMeta } from "@/lib/i18n/config";
import { siteConfig } from "@/lib/site-config";

/**
 * Web app manifest. Lets the site be added to a home screen — worth having in a
 * market where most traffic is mobile — and gives search engines a further
 * consistent signal of the brand name and description.
 *
 * There is one manifest, and it describes the default (Bangla) experience:
 * `start_url` is `/`, which is where an unprefixed visit lands.
 */
export default function manifest(): MetadataRoute.Manifest {
  const t = getContent(defaultLocale);

  return {
    name: t.meta.site.manifestName,
    short_name: siteConfig.name,
    description: t.meta.site.description,
    start_url: "/",
    display: "standalone",
    // Matches --brand-neutral-50 / --brand-primary-700 in app/theme.css.
    background_color: "#f8fafc",
    theme_color: "#0f766e",
    lang: localeMeta[defaultLocale].htmlLang,
    dir: "ltr",
    categories: ["travel", "transportation"],
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
