import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og-image";
import { meta } from "@/lib/i18n/content/en/meta";

/**
 * Social cards are rendered in English on both locales.
 *
 * Satori, the renderer behind `ImageResponse`, does not do complex-script
 * shaping: it draws Bengali glyphs in logical order without the pre-base vowel
 * reordering the script requires, so "গাড়িটা" comes out as "গাড়টিা". An English
 * card is a worse fit for a Bangla page than a Bangla one; a misspelt Bangla
 * card is worse than both.
 *
 * TODO: render the Bangla cards with a shaping-capable pipeline (or commission
 * them as static artwork) and switch this back to the page's own locale.
 */
const og = meta.driverAgreement.og;

export const alt = og.alt;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: og.eyebrow,
    title: og.title,
    description: og.description,
  });
}
