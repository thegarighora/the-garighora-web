import {
  OG_CONTENT_TYPE,
  OG_SIZE,
  renderOgImage,
} from "@/lib/og-image";

export const alt = "Get the GariGhora passenger and driver apps";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Get the app",
    title: "Two apps, one platform.",
    description:
      "Passengers book. Drivers earn. Both on the same verified accounts and trips.",
  });
}
