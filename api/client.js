import { createClient } from "next-sanity"
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'pvajb9ec',
  dataset: 'shop',
  useCdn: true,
  apiVersion: '2023-05-03',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})


const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)