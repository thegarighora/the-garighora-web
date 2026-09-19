import {
  OG_CONTENT_TYPE,
  OG_SIZE,
  renderOgImage,
} from "@/lib/og-image";

export const alt = "GariGhora Driver Agreement";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Legal",
    title: "Driver Agreement",
    description:
      "What you agree to when you drive on GariGhora, and what we owe you back.",
  });
}
