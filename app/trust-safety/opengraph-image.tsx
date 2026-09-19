import {
  OG_CONTENT_TYPE,
  OG_SIZE,
  renderOgImage,
} from "@/lib/og-image";

export const alt = "Trust and safety at GariGhora — verified drivers and a human on every booking";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Trust & Safety",
    title: "Verified drivers. Fares in writing. A real person on call.",
    description:
      "What we check before a driver carries anyone, and who to call if something goes wrong.",
  });
}
