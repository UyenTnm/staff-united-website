import { createImageUrlBuilder } from "@sanity/image-url";
import { client } from "./sanity";

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export function getImageUrl(source: any) {
  if (!source) return null;

  return urlFor(source)
    .width(800)
    .height(533)
    .fit("crop")
    .crop("top")
    .auto("format")
    .quality(80)
    .url();
}
