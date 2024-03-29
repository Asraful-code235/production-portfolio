import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: process.env.Next_APP_SANITY_PROJECT_ID || 'cqfbmhxq',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: 'true',
  token: process.env.Next_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
