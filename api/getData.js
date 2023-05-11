import { client } from './client'

export async function getData(query) {
  const product = await client.fetch(query);

  return product
}