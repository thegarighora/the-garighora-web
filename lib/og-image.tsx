import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { meta } from "@/lib/i18n/content/en/meta";

/**
 * Shared renderer for the generated Open Graph / Twitter card images.
 *
 * Social cards are the difference between a shared link that gets clicked and a
 * bare URL that does not, and Google shows og:image in Discover. One renderer
 * here keeps every page's card on-brand.
 *
 * The cards are English on both locales — see the note in any
 * `opengraph-image.tsx` for why Satori cannot set Bengali correctly.
 *
 * Colours are duplicated as literals because Satori resolves neither CSS custom
 * properties nor Tailwind classes — it never sees the stylesheet. They mirror
 * the ramps in app/theme.css; update both together if the brand changes.
 */
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const BRAND = {
  deepTeal: "#042f2e", // --brand-primary-950
  teal: "#0f766e", // --brand-primary-700 (brand primary)
  midTeal: "#0d9488", // --brand-primary-600
  amber: "#f59e0b", // --brand-secondary-500 (brand accent)
  amberSoft: "#fcd34d", // --brand-secondary-300
  onBrand: "#f8fafc", // --brand-neutral-50 (brand background)
};

const LOGO_DATA_URI = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public/logo/gari-ghora-hor.png")
).toString("base64")}`;

export function renderOgImage({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow?: string;
  description?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: BRAND.deepTeal,
          backgroundImage: `linear-gradient(135deg, ${BRAND.deepTeal} 0%, ${BRAND.teal} 40%, ${BRAND.midTeal} 66%, ${BRAND.amber} 100%)`,
          color: BRAND.onBrand,
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand row — the logo sits on a white chip; its wordmark is black. */}
        <div style={{ display: "flex" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={LOGO_DATA_URI}
            alt="Gari Ghora"
            height={72}
            width={315}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: 18,
              padding: "10px 16px",
              boxSizing: "content-box",
            }}
          />
        </div>

        {/* Title block */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {eyebrow ? (
            <div
              style={{
                display: "flex",
                fontSize: 22,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: BRAND.amberSoft,
                fontWeight: 600,
              }}
            >
              {eyebrow}
            </div>
          ) : null}
          <div
            style={{
              display: "flex",
              fontSize: title.length > 46 ? 62 : 74,
              lineHeight: 1.08,
              fontWeight: 700,
              maxWidth: 940,
            }}
          >
            {title}
          </div>
          {description ? (
            <div
              style={{
                display: "flex",
                fontSize: 28,
                lineHeight: 1.4,
                color: "rgba(248,250,252,0.82)",
                maxWidth: 880,
              }}
            >
              {description}
            </div>
          ) : null}
        </div>

        {/* Trust row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            fontSize: 22,
            color: "rgba(248,250,252,0.78)",
          }}
        >
          {meta.ogTrustRow.map((item, index) => (
            <span key={item} style={{ display: "flex", gap: 28 }}>
              {index > 0 ? <span>·</span> : null}
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>
    ),
    OG_SIZE
  );
}
