import {createClient} from '@sanity/client'
import sanityImage from '@sanity/image-url'

let ID = process.env.SANITY_PROJECT_ID
let TOKEN = process.env.SANITY_API_TOKEN

const options = {
  // Find your project ID and dataset in `sanity.json` in your studio project
  dataset: 'production',
  projectId: ID,
  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  // Set this to false if your application require the freshest possible
  // data always (potentially slightly slower and a bit more expensive).
}

export const client = createClient(options)

export const previewClient = createClient({
  ...options,
  useCdn: false,
  token: TOKEN,
})