// Any random string, must match SANITY_PREVIEW_SECRET in the Next.js .env.local file
const previewSecret = "what";

// Replace `remoteUrl` with your deployed Next.js site
const remoteUrl = `https://roewynumayam.com`;
const localUrl = `http://localhost:3000`;

export default function resolveProductionUrl(document) {
  let route = '';
  if (document.slug && document._type == 'codeSnippet') {
    route = `/code-snippets/${document.slug.current}`;
  }
  else if (document.seoContent && document._type == 'project') {
    route = `/projects/${document.seoContent.slug.current}`;
  }
  else if (document.seoContent && document._type == 'post') {
    route = `/blog/${document.seoContent.slug.current}`;
  }
  else {
    route = '/'
  }

  const baseUrl =
    window.location.hostname === "localhost" ? localUrl : remoteUrl;

  const previewUrl = new URL(baseUrl);
  previewUrl.pathname = `/api/preview`;
  previewUrl.searchParams.append(`secret`, previewSecret);
  previewUrl.searchParams.append(`slug`, route);

  return previewUrl.toString();
}
