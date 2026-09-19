import {
  OG_CONTENT_TYPE,
  OG_SIZE,
  renderOgImage,
} from "@/lib/og-image";

export const alt = "GariGhora Cancellation Policy";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Legal",
    title: "Cancellation Policy",
    description:
      "Who can cancel, what gets recorded, and why nobody ends up out of pocket.",
  });
}
