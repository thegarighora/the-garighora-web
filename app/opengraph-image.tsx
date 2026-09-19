import {
  OG_CONTENT_TYPE,
  OG_SIZE,
  renderOgImage,
} from "@/lib/og-image";

export const alt =
  "GariGhora — book a rental car, or ride a driver's empty return leg for less";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

/** Default social card. Pages without their own image inherit this one. */
export default function Image() {
  return renderOgImage({
    eyebrow: "Rental Car + Return Car",
    title: "A car is already going your way.",
    description:
      "Book a whole car, or take a driver's empty return leg for much less. Verified drivers, pay after the trip.",
  });
}
