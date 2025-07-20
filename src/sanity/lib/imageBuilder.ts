import imageUrlBuilder from '@sanity/image-url'
import { client } from './client'

// The type accepted by `builder.image()` can be:
// 1. A string (like an image asset ID or URL)
// 2. Or an object with asset reference used by Sanity

type SanityImageSource = string | { asset: { _ref: string; _type: string } }

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
