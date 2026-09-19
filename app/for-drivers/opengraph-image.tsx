import {
  OG_CONTENT_TYPE,
  OG_SIZE,
  renderOgImage,
} from "@/lib/og-image";

export const alt = "Drive with GariGhora — get paid for the drive home";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "For Drivers",
    title: "Get paid for the drive home.",
    description:
      "Take the rental out, post the empty return leg, and earn twice on one journey.",
  });
}
