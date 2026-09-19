import {
  OG_CONTENT_TYPE,
  OG_SIZE,
  renderOgImage,
} from "@/lib/og-image";

export const alt = "GariGhora frequently asked questions";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "FAQ",
    title: "Questions, answered.",
    description:
      "How Return Car is cheaper, when you pay, and how drivers are verified.",
  });
}
