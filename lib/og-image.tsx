import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

/**
 * Shared renderer for the generated Open Graph / Twitter card images.
 *
 * Social cards are the difference between a shared link that gets clicked and a
 * bare URL that does not, and Google shows og:image in Discover. One renderer
 * here keeps every page's card on-brand.
 *
 * Colours are duplicated as literals because Satori (the renderer behind
 * ImageResponse) resolves neither CSS custom properties nor Tailwind classes —
 * it never sees the stylesheet. They mirror the ramps in app/theme.css; update
 * both together if the brand changes.
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
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 16,
              backgroundColor: "rgba(248,250,252,0.16)",
            }}
          >
            {/* Drawn rather than typed: the renderer's default font has no
                glyph for symbols like ⟲, which come out as tofu boxes. */}
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 14.5h16M5.5 14.5 7 9.6A2 2 0 0 1 8.9 8.2h6.2a2 2 0 0 1 1.9 1.4l1.5 4.9"
                stroke={BRAND.onBrand}
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="8" cy="17" r="1.5" fill={BRAND.onBrand} />
              <circle cx="16" cy="17" r="1.5" fill={BRAND.onBrand} />
              <path
                d="M17.5 4.2a6.5 6.5 0 0 0-11 1.6"
                stroke={BRAND.amberSoft}
                strokeWidth="1.7"
                strokeLinecap="round"
              />
              <path
                d="M6.2 3v3h3"
                stroke={BRAND.amberSoft}
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700 }}>
            <span>Gari</span>
            <span style={{ color: BRAND.amberSoft }}>Ghora</span>
          </div>
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
          <span>Verified drivers</span>
          <span>·</span>
          <span>Pay after the trip</span>
          <span>·</span>
          <span>{siteConfig.areaServed.country}</span>
        </div>
      </div>
    ),
    OG_SIZE
  );
}
