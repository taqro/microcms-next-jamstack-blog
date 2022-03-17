import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'taqro',
  apiKey: process.env.API_KEY,
});
