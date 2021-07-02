import sanityClient from '@sanity/client';

// See the image above on how to get your projectId and add a new API token
// I added one called "landing page"
const client = sanityClient({
  projectId: 'fjx7sz34',
  dataset: 'production',
  useCdn: true, // `false` if you want to ensure fresh data
  ignoreBrowserTokenWarning: true,
});

export default client;