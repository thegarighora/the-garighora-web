import {
  OG_CONTENT_TYPE,
  OG_SIZE,
  renderOgImage,
} from "@/lib/og-image";

export const alt = "Careers at GariGhora in Dhaka";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Careers",
    title: "Help us stop cars driving home empty.",
    description:
      "Engineering, operations and growth roles on a small team in Dhaka.",
  });
}
