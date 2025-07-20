import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { projectId, dataset } from '../env'
import type { Image } from 'sanity'

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2025-07-19',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: Image | string) {
  return builder.image(source)
}