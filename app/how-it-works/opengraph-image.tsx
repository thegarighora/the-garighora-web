import {
  OG_CONTENT_TYPE,
  OG_SIZE,
  renderOgImage,
} from "@/lib/og-image";

export const alt = "How a GariGhora trip works, for passengers and drivers";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "How it works",
    title: "Four steps, whichever side you are on.",
    description:
      "Search or request, compare offers, ride, then pay the driver in cash.",
  });
}
