import {
  OG_CONTENT_TYPE,
  OG_SIZE,
  renderOgImage,
} from "@/lib/og-image";

export const alt = "GariGhora Terms of Service";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Legal",
    title: "Terms of Service",
    description:
      "What you can expect from GariGhora, and what we expect from you.",
  });
}
