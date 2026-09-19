import {
  OG_CONTENT_TYPE,
  OG_SIZE,
  renderOgImage,
} from "@/lib/og-image";

export const alt = "Contact GariGhora support";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Contact",
    title: "A real person, on the other end of a real number.",
    description:
      "Phone and email support for trips in progress, bookings and driver questions.",
  });
}
