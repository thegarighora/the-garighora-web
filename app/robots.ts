import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

/**
 * robots.txt. Everything public is crawlable; only the API surface is
 * excluded. Next's JS and CSS stay crawlable on purpose, because Google needs
 * them to render the pages. The sitemap is advertised so crawlers find the full
 * route list on the first visit.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
