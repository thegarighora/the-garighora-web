import {
  OG_CONTENT_TYPE,
  OG_SIZE,
  renderOgImage,
} from "@/lib/og-image";

export const alt = "GariGhora Rental Car — book a whole car anywhere in Bangladesh";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Rental Car",
    title: "Need a car for your trip? Book the whole thing.",
    description:
      "Post your route, compare offers from verified drivers, pay in cash after the trip.",
  });
}
