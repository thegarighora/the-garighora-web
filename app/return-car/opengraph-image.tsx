import {
  OG_CONTENT_TYPE,
  OG_SIZE,
  renderOgImage,
} from "@/lib/og-image";

export const alt = "GariGhora Return Car — ride the leg the car was making anyway";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Return Car",
    title: "Ride the leg the car was making anyway.",
    description:
      "Search return trips on your route, or post a ride request and let drivers offer.",
  });
}
