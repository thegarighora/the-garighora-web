import {
  OG_CONTENT_TYPE,
  OG_SIZE,
  renderOgImage,
} from "@/lib/og-image";

export const alt = "About GariGhora — why intercity cars should not drive home empty";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "About us",
    title: "A car is already going that way.",
    description:
      "Why we exist: half of every intercity journey in Bangladesh is driven empty.",
  });
}
